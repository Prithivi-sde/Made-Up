'use client';
import { Carousel } from 'react-bootstrap';
import { StoryScroller } from '../components/StoryScroller';
import LatestOrder1 from '../Images/LatestOrder1.jpg';
import Model1 from '../Images/Model1.jpg';
import Model2 from '../Images/Model2.jpg';
import Model3 from '../Images/Model3.jpg';
import Model4 from '../Images/Model4.jpg';
import Model5 from '../Images/Model5.jpg';
import NewLetter from '../Images/NewsLetter.jpg';
import NewLetter1 from '../Images/NewsLetter1.jpg';
import LatestOrder2 from '../Images/LatestOrder2.png';
import TestimonialsImage from '../Images/Testimonials.jpg';

export default function HomePage() {

  return (
    <main>

      <StoryScroller/>
      <section className="position-relative text-center">
        <div className="container-fluid px-0">
          <div className="row gx-0">
            <div className="col-12">
              <div className="position-relative">
                <div className='d-block d-md-none'>
                  <img 
                    src={Model1.src} 
                    alt="Model 1" 
                    style={{ width:"100%", height:"auto", objectFit: 'contain'}} 
                  />
                </div>
                <div className='d-none d-md-block'>
                <img 
                    src={Model2.src} 
                    alt="Model 1" 
                    style={{ width:"100%", height:"auto", objectFit: 'contain'}} 
                  />
                </div>
                <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
                  <p className="bg-white text-dark d-inline-block px-3 py-1">
                    Clothes that <span className="text-danger fw-bold">respire</span>
                  </p><br />
                  <p className="bg-white text-dark d-inline-block px-3 py-1">
                    for men who <span className="text-danger fw-bold">aspire</span>
                  </p><br />
                  <a href="#" className="btn btn-danger mt-2">BROWSE COLLECTIONS</a>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 mt-2">
              <div className="position-relative">
              <img 
                    src={Model3.src} 
                    alt="Model 3" 
                    style={{ width:"99%", height:"auto", objectFit: 'contain'}} 
                  />
                <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
                  <p className="bg-white text-dark d-inline-block px-3 py-1">
                    <span className="text-danger fw-bold">Summer</span> is here
                  </p><br />
                  <p className="bg-white text-dark d-inline-block px-3 py-1">
                    so is our <span className="text-danger fw-bold">collection</span>
                  </p>
                </div>
              </div>
            </div>
            <div className='col-6'>
              <div className="col-12 col-md-6 mt-2 ms-1">
                <div className="position-relative">
                <img 
                    src={Model4.src} 
                    alt="Model 4" 
                    style={{ width: "199%", height: "100%", objectFit: "fill" }} 
                  />
                  <div className="position-absolute top-50 start-100 w-100 translate-middle text-center text-white">
                    <p className="bg-white text-dark d-inline-block px-3 py-1">
                      <span className="text-danger fw-bold">Wrinkle-free</span> t-shirts
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-6 mt-2 ms-1">
                <div className="position-relative">
                <img 
                    src={Model5.src} 
                    alt="Model 5" 
                    style={{ width: "199%", height: "100%", objectFit: "fill" }} 
                  />
                  <div className="position-absolute top-50 start-100 w-100 translate-middle text-center text-white">
                    <p className="bg-white text-dark d-inline-block px-3 py-1">
                      <span className="text-danger fw-bold">Stain-free</span> denim shirts
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="text-center border-top border-1">
          <h3
            style={{ top: "-15px", width: "300px" }}
            className="mb-4 font-bankgothic bg-white mx-auto position-relative"
          >
            Latest Collections
          </h3>
          <div className="d-md-none">
            <div
              className="d-flex overflow-auto mx-3"
              style={{
                scrollSnapType: "x mandatory",
                gap: "10px",
              }}
            >
              {[1, 2, 3, 4, 5].map((key, value) => (
                <div
                  key={key}
                  className="flex-shrink-0"
                  style={{
                    width: "calc(100% / 3.5)",
                    scrollSnapAlign: "start",
                  }}
                >
                  <div className="text-center">
                    {value % 2 === 0 ? (
                      <img src={LatestOrder1.src} alt="Latest Order 1" style={{ width: "100%" }} />
                    ) : (
                      <img src={LatestOrder2.src} alt="Latest Order 2" style={{ width: "100%" }} />
                    )}
                    <h6 className="fw-normal mb-1">Product Name {key + 1}</h6>
                    <p className="text-danger fw-bold">₹1,499</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="row justify-content-center d-none d-md-flex">
            {[1, 2, 3, 4, 5].map((key, value) => (
              <div className="col-6 col-md-2 mb-2 text-center" key={key}>
                {value % 2 === 0 ? (
                  <img src={LatestOrder1.src} alt="Latest Order 1" width="100%" />
                ) : (
                  <img src={LatestOrder2.src} alt="Latest Order 2" width="100%" />
                )}
                <h6 className="fw-normal mb-1">Product Name {key + 1}</h6>
                <p className="text-danger fw-bold">₹1,499</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-5 bg-light">
        <div>
          <h3 className="text-center font-bankgothic ">Testimonials</h3>
          <div className="d-md-none p-5">
            <Carousel indicators={false} controls={true} interval={3000}>
              {[1, 2, 3].map((_, i) => (
                <Carousel.Item key={i}>
                  <div className="position-relative p-4 ps-5 border rounded shadow-sm bg-white text-center my-5 mx-5">
                    <div
                      className="position-absolute rounded-circle border border-white shadow"
                      style={{
                        width: '60px',
                        height: '60px',
                        top: '-20px',
                        left: '-10px',
                        overflow: 'hidden',
                        backgroundColor: 'white',
                        zIndex: 10,
                      }}
                    >
                      <img src={TestimonialsImage.src} alt="Testimonial" style={{ width: '100%', height: '100%' }} />
                    </div>

                    <p className="text-muted small mt-4">"Great quality and fast delivery. Totally satisfied!"</p>
                    <p className="fw-bold mb-0">User {i + 1}</p>
                    <p className="text-warning mb-0">★★★★★</p>
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>

          <div className="row d-none d-md-flex py-5 justify-content-center align-items-center gap-5">
            {[1, 2, 3].map((_, i) => (
              <div className="col-md-3 text-center mb-4 position-relative" key={i}>
                <div className="p-4 border rounded shadow-sm bg-white h-100 position-relative">
                  <div
                    className="position-absolute rounded-circle border border-white shadow"
                    style={{
                      width: '60px',
                      height: '60px',
                      top: '-20px',
                      left: '-20px',
                      overflow: 'hidden',
                      backgroundColor: 'white',
                      zIndex: 10,
                    }}
                  >
                    <img src={TestimonialsImage.src} alt="Testimonial" style={{ width: '100%', height: '100%' }} />
                  </div>

                  <p className="text-muted small mt-4">"Great quality and fast delivery. Totally satisfied!"</p>
                  <p className="fw-bold mb-0">User {i + 1}</p>
                  <p className="text-warning mb-0">★★★★★</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="text-center position-relative">
        <div className="position-relative">
        <span
        className={`rounded-top fw-normal fs-6 position-absolute bottom-0 end-0 me-5 px-4 py-2 text-white bg-dark`}>
        <i className="bi bi-geo-alt-fill me-2"></i>
        LOCATE US
      </span>
          <div className='d-block d-md-none'>
            <img 
              src={NewLetter1.src} 
              alt="Newsletter" 
              style={{ width: '100%', height: 'auto', objectFit: 'cover' }} 
            />
          </div>
          <div className='d-none d-md-block'>
            <img 
              src={NewLetter.src} 
              alt="Newsletter" 
              style={{ width: '100%', height: 'auto', objectFit: 'cover' }} 
            />
          </div>
          <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
            <h4 className="mb-3 fw-semibold fs-4">Get Coupons & Style Guides</h4>
            <p className="mb-4">Sign up for emails and receive early access to new arrivals.</p>
            <form className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-2 flex-wrap">
              <input type="email" placeholder="Enter your email" className="form-control flex-grow-1" />
              <button className="btn btn-danger px-4 w-100 flex-grow-1">Subscribe</button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
