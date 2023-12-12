document.addEventListener('DOMContentLoaded', function () {
    const prevButton = document.getElementById('prev-month');
    const nextButton = document.getElementById('next-month');
    const currentMonth = document.getElementById('current-month');
    const dates = document.getElementById('dates');
    const today = new Date();
    let currentMonthDate = new Date(today.getFullYear(), today.getMonth(), 1);

    function renderCalendar() {
        fetch('http://localhost:5678/events')
            .then(response => response.json())
            .then(data => {
                if (Array.isArray(data.events)) {
                    const daysInMonth = new Date(currentMonthDate.getFullYear(), currentMonthDate.getMonth() + 1, 0).getDate();
                    const firstDay = new Date(currentMonthDate.getFullYear(), currentMonthDate.getMonth(), 1).getDay();

                    currentMonth.textContent = new Date(currentMonthDate).toLocaleString('default', { month: 'long', year: 'numeric' });
                    dates.innerHTML = '';

                    for (let i = 0; i < firstDay; i++) {
                        const emptyDate = document.createElement('div');
                        emptyDate.className = 'date-box';
                        dates.appendChild(emptyDate);
                    }

                    for (let day = 1; day <= daysInMonth; day++) {
                        const dateItem = document.createElement('div');
                        dateItem.className = 'date-box';
                        dateItem.textContent = day;

                        const eventInfo = document.createElement('div');
                        eventInfo.className = 'event-info';

                        const hasEvent = data.events.some(event => {
                            const eventDate = new Date(event.date);
                            return (
                                eventDate.getFullYear() === currentMonthDate.getFullYear() &&
                                eventDate.getMonth() === currentMonthDate.getMonth() &&
                                eventDate.getDate() === day
                            );
                        });

                        if (hasEvent) {
                            const eventSymbol = document.createElement('span');
                            eventSymbol.className = 'event-symbol';
                            eventSymbol.textContent = 'EVENT';
                            eventInfo.appendChild(eventSymbol);
                            eventInfo.classList.add('has-event');
                            eventInfo.addEventListener('mouseover', () => displayEventInfo(eventInfo, data.events));
                            eventInfo.addEventListener('mouseout', () => document.body.removeChild(document.querySelector('.event-tooltip')));
                        }

                        dateItem.appendChild(eventInfo);
                        dates.appendChild(dateItem);
                    }
                } else {
                    console.error('"events" property is not an array in the fetched data.');
                }
            })
            .catch(error => console.error('Error fetching data:', error));
    }

    function displayEventInfo(eventInfo, events) {
        const day = eventInfo.parentElement.textContent;
        const event = events.find(event => {
            const eventDate = new Date(event.date);
            return (
                eventDate.getFullYear() === currentMonthDate.getFullYear() &&
                eventDate.getMonth() === currentMonthDate.getMonth() &&
                eventDate.getDate() === parseInt(day)
            );
        });
    
        if (event) {
            const tooltip = document.createElement('div');
            tooltip.className = 'event-tooltip';

            const eventName = event.eventName || 'Event Name not available';
            const eventDetails = event.eventDetails || 'Details not available';
            const eventImage = event.image || 'Image not available';
            const eventDateStr = event.date || 'Date not available';

            tooltip.innerHTML = `
                <div>
                    <img src="${eventImage}" alt="Event Image" style="max-width: 300px; max-height: 300px;">
                </div>
                <div>Event: ${eventName}</div>
                <div>Details: ${eventDetails}</div>
                <div>Date: ${eventDateStr}</div>
            `;
            document.body.appendChild(tooltip);
            const rect = eventInfo.getBoundingClientRect();
            tooltip.style.position = 'absolute';
            tooltip.style.top = `${rect.top - tooltip.offsetHeight}px`;
            tooltip.style.left = `${rect.left + (rect.width - tooltip.offsetWidth) / 2}px`;
        }
    }

    prevButton.addEventListener('click', function () {
        currentMonthDate.setMonth(currentMonthDate.getMonth() - 1);
        renderCalendar();
    });

    nextButton.addEventListener('click', function () {
        currentMonthDate.setMonth(currentMonthDate.getMonth() + 1);
        renderCalendar();
    });

    renderCalendar();
});
