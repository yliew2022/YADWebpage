const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
const glob = require('glob');
const PORT = process.env.PORT || 5678;
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const allowedOrigins = ['http://localhost:3000','https://yadwebpage-ab336b48b130.herokuapp.com'];
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'Event Server API',
      version: '1.0.0',
    },
  },
  apis: ['server.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('./public'));
app.use(express.static(path.join(__dirname, '/')));

app.use((req, res, next) => {
  res.set('Content-Type', 'application/json');
  next();
});

app.use((req, res, next) => {
  if (req.url.endsWith('.css')) {
    res.type('text/css');
  }
  next();
});

const MAX_EVENTS = 3;

function getEventFilePath(eventId) {
  return `events/${eventId}.json`;
}

function getEvents() {
  const events = [];
  for (let i = 1; i <= MAX_EVENTS; i++) {
    const filePath = getEventFilePath(`event${i}`);
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, 'utf8');
      events.push(JSON.parse(data));
    }
  }
  return events;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

/**
 * @swagger
 * /events:
 *   get:
 *     summary: Get an array of all events.
 *     description: Use this endpoint to retrieve an array of all events.
 *     responses:
 *       200:
 *         description: Success. An array of events has been retrieved.
 *       500:
 *         description: Error. Internal server error occurred.
 */

app.get('/events', function (req, res) {
  const obj = {};
  obj.events = getEvents();
  return res.status(200).send(obj);
});

/**
 * @swagger
 * /events/{eventId}:
 *   put:
 *     summary: Update an existing event by eventId.
 *     description: Use this endpoint to update an existing event based on its eventId.
 *     parameters:
 *       - name: eventId
 *         description: Event's unique identifier
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *       - name: eventName
 *         description: Event name
 *         in: formData
 *         required: true
 *         schema:
 *           type: string
 *       - name: eventDetails
 *         description: Event details
 *         in: formData
 *         required: true
 *         schema:
 *           type: string
 *       - name: image
 *         description: Event image path
 *         in: formData
 *         required: true
 *         schema:
 *           type: string
 *       - name: link
 *         description: Event link
 *         in: formData
 *         required: true
 *         schema:
 *           type: string
 *       - name: date
 *         description: (month/date/year)
 *         in: formData
 *         required: true
 *         schema:
 *            type: string
 *     responses:
 *       200:
 *         description: Error. Unable to update resource.
 *       201:
 *         description: Success. The event has been updated.
 *       404:
 *         description: Error. The requested resource was not found.
 */

app.put('/events/:eventId', function (req, res) {
  const eventId = req.params.eventId;
  const filePath = getEventFilePath(eventId);

  if (!fs.existsSync(filePath)) {
    const rsp_obj = {
      eventId: eventId,
      message: 'error - event not found',
    };
    return res.status(404).send(rsp_obj);
  }

  const existingData = fs.readFileSync(filePath, 'utf8');
  const existingEvent = JSON.parse(existingData);

  existingEvent.eventName = req.body.eventName || existingEvent.eventName;
  existingEvent.eventDetails = req.body.eventDetails || existingEvent.eventDetails;
  existingEvent.image = req.body.image || existingEvent.image;
  existingEvent.link = req.body.link || existingEvent.link;
  existingEvent.date = req.body.date || existingEvent.date;

  fs.writeFile(filePath, JSON.stringify(existingEvent, null, 2), function (err) {
    const rsp_obj = {};
    if (err) {
      rsp_obj.eventId = eventId;
      rsp_obj.message = 'error - unable to update resource';
      return res.status(200).send(rsp_obj);
    } else {
      rsp_obj.eventId = eventId;
      rsp_obj.message = 'successfully updated';
      return res.status(201).send(rsp_obj);
    }
  });
});

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = {
  server: server,
  app: app,
};
