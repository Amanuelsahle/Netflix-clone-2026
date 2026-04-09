import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <div className="container-sm  ml-5">
        <div className="row ">
          <div className=" row col-6 col-md-3">
            <div className="col-3">
              <i className="bi bi-facebook"></i>
            </div>
            <div className="col-3">
              <i className="bi bi-instagram"></i>
            </div>
            <div className="col-3">
              <i className="bi bi-youtube"></i>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-6 footer-link col-md-3">
            <a href="/">Audio Description</a>{" "}
          </div>
          <div className="col-6 footer-link col-md-3">
            <a href="/">Help Center</a>{" "}
          </div>
          <div className="col-6 footer-link col-md-3">
            <a href="/">Gift Cards</a>{" "}
          </div>
          <div className="col-6 footer-link col-md-3">
            <a href="/">Media Center</a>{" "}
          </div>
          <div className="col-6 footer-link col-md-3">
            <a href="/">Investor Relations</a>{" "}
          </div>
          <div className="col-6 footer-link col-md-3">
            <a href="/">Jobs</a>{" "}
          </div>
          <div className="col-6 footer-link col-md-3">
            <a href="/">Terms of Use</a>
          </div>
          <div className="col-6 footer-link col-md-3">
            <a href="/">Privacy</a>{" "}
          </div>
          <div className="col-6 footer-link col-md-3">
            <a href="/">Legal Notices</a>{" "}
          </div>
          <div className="col-6 footer-link col-md-3">
            <a href="/">Cookie Preferences</a>
          </div>
          <div className="col-6 footer-link col-md-3">
            <a href="/"> Corporate Information</a>
          </div>
          <div className="col-6 footer-link col-md-3">
            <a href="/">Contact Us</a>
          </div>
        </div>
        <div className="mt-4"> &copy; 1997-2026 Netflix, Inc.</div>
      </div>
    </div>
  );
}
export default Footer;
