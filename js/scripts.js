fetch('http://localhost:5678/events')
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
.catch(error => console.error('Error fetching data:', error));

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

