export const Footer = () => {
  return (
    <footer className="bg-dark py-5 fw-normal text-muted-custom">
      <div className="container ">
        <div className="row">
          <div className="col-md-4 mb-5 text-center text-md-start">
            <h6 className="mb-4">About Us</h6>
            <ul className="list-unstyled">
              <li className="mb-4">Delivery Information</li>
              <li className="mb-4">Returns & Exchange</li>
              <li className="mb-4">Technical & Privacy</li>
              <li className="mb-4">Order Status</li>
            </ul>
          </div>

          <div className="col-md-4 mb-5 text-center  text-md-start">
            <div className="d-inline-block px-2 pb-4 pt-2 fw-bold text-white font-scada">MADE UP</div>
            <p className="mt-3">Stay in touch with us</p>
            <div>
              <i className="bi bi-facebook mx-2"></i>
              <i className="bi bi-instagram mx-2"></i>
              <i className="bi bi-youtube mx-2"></i>
            </div>
          </div>

          <div className="col-md-4 mb-3 text-center text-md-start">
            <h6>Our Corporate Office</h6>
            <p>No. 7, AB road, Adyar Rajuaars, Thagar, Chennai - 643002</p>
            <p><i className="bi bi-envelope-fill me-2"></i> sales@sitebyzen.com</p>
            <p><i className="bi bi-telephone-fill me-2"></i> 044 5556 6899</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
