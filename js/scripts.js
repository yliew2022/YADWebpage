/*fetch('https://yadwebpage-ab336b48b130.herokuapp.com/events')
    .then(response => response.json())
    .then(data => {
        if (Array.isArray(data.events)) {
            data.events.forEach(event => {
                const eventContainer = document.getElementById(event.eventId);

                if (eventContainer) {
                    eventContainer.innerHTML = `
                        <div class="card h-100">
                            <img src="${event.image}" class="card-img-top custom-image" alt="${event.eventName} Image">
                            <div class="card-body">
                                <h5 class="card-title">${event.eventName}</h5>
                                <p class="card-text">${event.eventDetails}</p>
                                <p class="card-text">${event.date}</p>
                            </div>
                            <div class="card-footer">
                                <a href="${event.link}" class="btn btn-primary">RSVP</a>
                            </div>
                        </div>
                    `;
                }
            });
        } else {
            console.error('"events" property is not an array in the fetched data.');
        }
    })
.catch(error => console.error('Error fetching data:', error));*/

/*let slideIndex = 0;
                
function showSlides() {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";     
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 4000); 
}
                
showSlides();*/


// Function to fetch event data using AJAX and populate the event card
function loadEventData() {
    // Fetch the event data from the server
    fetch('/events')
        .then(response => response.json())  // Parse the JSON data from response
        .then(data => {
            // Assuming the events array is returned
            const event1 = data.events.find(event => event.eventId === 'd2fa5489-5bac-41cd-904f-436afc8458d8');
            const event2 = data.events.find(event => event.eventId === 'c9ebc5d7-b479-46fc-af67-c6626b17a079');
            const event3 = data.events.find(event => event.eventId === 'bddc67a0-9104-4fdd-95b1-5215ddc6cdeb');
            if (event1) {
                // Update event 1 card with the fetched event data
                document.getElementById('event1-title').textContent = event1.eventName;
                document.getElementById('event1-description').textContent = event1.eventDetails;
                document.getElementById('event1-image').src = event1.image;
                document.getElementById('event1-link').href = event1.link;

                document.getElementById('event2-title').textContent = event2.eventName;
                document.getElementById('event2-description').textContent = event2.eventDetails;
                document.getElementById('event2-image').src = event2.image;
                document.getElementById('event2-link').href = event2.link;

                document.getElementById('event3-title').textContent = event3.eventName;
                document.getElementById('event3-description').textContent = event3.eventDetails;
                document.getElementById('event3-image').src = event3.image;
                document.getElementById('event3-link').href = event3.link;
            }
        })
        .catch(error => {
            console.error('Error fetching event data:', error);
        });
}

document.addEventListener('DOMContentLoaded', loadEventData);

