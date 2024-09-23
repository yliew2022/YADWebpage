// app/page.tsx

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-svg-core/styles.css'

export default function HomePage() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <title>BLIA Miami YAD</title>
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@100;900&display=swap" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css" rel="stylesheet" />
        <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" />
      </head>
      <body className="d-flex flex-column h-100">
        <main className="flex-shrink-0">
          {/* Navigation */}
          <nav className="navbar navbar-expand-lg navbar-light bg-white py-3">
            <div className="container px-5">
              <Link href="/" className="navbar-brand">
                <span className="fw-bolder text-primary">BLIA Miami YAD</span>
              </Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">
                  <li className="nav-item">
                    <Link href="/" className="nav-link">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/calendar" className="nav-link">Calendar</Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/contact" className="nav-link">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          {/* Header */}
          <header className="py-5">
            <div className="container px-5 pb-5">
              <div className="row gx-5 align-items-center">
                <div className="col-xxl-5">
                  <div className="text-center text-xxl-start">
                    <div className="badge bg-gradient-primary-to-secondary text-white mb-4">
                      <div className="text-uppercase">Volunteering · Leadership · Buddhism</div>
                    </div>
                    <div className="fs-3 fw-light text-muted">Buddha&apos;s Light International Association</div>
                    <h1 className="display-3 fw-bolder mb-5">
                      <span className="text-gradient d-inline">Miami YAD</span>
                    </h1>
                    <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xxl-start mb-3">
                      <Link href="/contact" className="btn btn-primary btn-lg px-5 py-3 me-sm-3 fs-6 fw-bolder">Contact</Link>
                      <Link href="/calendar" className="btn btn-outline-dark btn-lg px-5 py-3 fs-6 fw-bolder">Calendar</Link>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-7">
                  <Image src="/yadwebpage/app/blia yad logo.jpg" alt="BLIA YAD Logo" className="img-fluid mt-4" width={500} height={400} />
                </div>
              </div>

              {/* Slideshow */}
              <div className="slideshow-container">
                <div className="mySlides fade">
                  <Image src="/images/DSC02421.JPG" alt="Slideshow 1" className="slideshowSize" width={500} height={300} />
                </div>
                <div className="mySlides fade">
                  <Image src="/images/840179-淨灣01.jpg" alt="Slideshow 2" className="slideshowSize" width={500} height={300} />
                </div>
                <div className="mySlides fade">
                  <Image src="/images/DSC03157.JPG" alt="Slideshow 3" className="slideshowSize" width={500} height={300} />
                </div>
                <div className="mySlides fade">
                  <Image src="/images/DSC0112.png" alt="Slideshow 4" className="slideshowSize" width={500} height={300} />
                </div>
              </div>
            </div>
          </header>

          {/* About Us Section */}
          <section className="bg-light py-3">
            <div className="container">
              <div className="text-center my-3">
                <h2 className="display-5 fw-bolder">
                  <span className="text-gradient d-inline">About us</span>
                </h2>
                <div className="one">
                  Miami YAD is a branch of BLIA (Buddha&apos;s Light International Association) Fo Guang Shan Miami subchapter. YAD stands for &quot;Young Adult Division&quot;, and it is as the name implies. We are a group that is led by only young adults, who are between the ages of 13-18. We do volunteer activities such as helping BLIA Miami with their events, or hosting our own events. We also do socials outside of volunteering, such as hanging out at malls, going to escape rooms, and eating meals after meetings. *just a rough draft so it can be edited later*
                </div>
                <div className="d-flex align-items-start mt-4">
                  <div className="centerVid vidPosition">
                    <video width="360" height="240" controls>
                      <source src="/movie.mp4" type="video/mp4" />
                      <source src="/movie.ogg" type="video/ogg" />
                      Your browser does not support the video tag.
                    </video>
                    <div className="d-flex fs-2 gap-4 iconGap">
                      <Link href="https://instagram.com/miamiyad?igshid=NjIwNzIyMDk2Mg==" target="_blank" className="text-gradient">
                        <i className="bi bi-instagram"></i>
                      </Link>
                      <Link href="https://www.youtube.com/@Studio-BDS/videos" target="_blank" className="text-gradient">
                        <i className="bi bi-youtube"></i>
                      </Link>
                      <Link href="https://www.facebook.com/people/Miami-YAD/100090081758325/" target="_blank" className="text-gradient">
                        <i className="bi bi-facebook"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Events Section */}
          <section className="bg-slightly-dark py-5">
            <div className="container px-5">
              <div className="text-center my-5">
                <h2 className="display-5 fw-bolder">
                  <span className="text-gradient d-inline">Upcoming Events</span>
                </h2>
                <p className="text-muted">Please see below for our next three upcoming events!</p>
                <div className="row row-cols-1 row-cols-md-10 p-3">
                  <div id="event1" className="col card mr-3">
                    <div className="card h-100">
                      <Image id="event1-image" src="/images/event1.jpg" className="card-img-top" alt="Event 1 Image" width={500} height={300} />
                      <div className="card-body">
                        <h5 id="event1-title" className="card-title">Event 1</h5>
                        <p id="event1-description" className="card-text">Event 1 Description</p>
                      </div>
                      <div className="card-footer">
                        <Link href="/event1" className="btn btn-primary">Learn More</Link>
                      </div>
                    </div>
                  </div>

                  {/* Event 2 */}
                  <div id="event2" className="col card mr-3">
                    <div className="card h-100">
                      <Image id="event2-image" src="/images/event2.jpg" className="card-img-top" alt="Event 2 Image" width={500} height={300} />
                      <div className="card-body">
                        <h5 id="event2-title" className="card-title">Event 2</h5>
                        <p id="event2-description" className="card-text">Event 2 Description</p>
                      </div>
                      <div className="card-footer">
                        <Link href="/event2" className="btn btn-primary">Learn More</Link>
                      </div>
                    </div>
                  </div>

                  {/* Event 3 */}
                  <div id="event3" className="col card mr-3">
                    <div className="card h-100">
                      <Image id="event3-image" src="/images/event3.jpg" className="card-img-top" alt="Event 3 Image" width={500} height={300} />
                      <div className="card-body">
                        <h5 id="event3-title" className="card-title">Event 3</h5>
                        <p id="event3-description" className="card-text">Event 3 Description</p>
                      </div>
                      <div className="card-footer">
                        <Link href="/event3" className="btn btn-primary">Learn More</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </body>
    </html>
  );
}
