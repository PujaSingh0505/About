import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className=" mx-auto max-w-7xl lg:mt-12">
      <div className="flex w-full flex-col gap-y-12 p-4 xl:pl-16">
        <div className="cols">
          <div className="links">
            <div className="logo flex flex-col ">
              <img src="/assests/logo.png" alt="cloudPrism logo"></img>
              <span className="gap-y-0 text-xs text-white sm:text-base">
                CloudPrism <br />
                Solutions
              </span>
            </div>

            <div className="social">
              <Link>
                <FaLinkedin />
              </Link>
              <Link>
                <FaXTwitter />
              </Link>
              <Link>
                <FaInstagram />
              </Link>
              <Link>
                <FaFacebook />
              </Link>
            </div>
            <p>
              Location <br />
              Hadapsar Highway Dreams Aakruti <br />
              Pune, Maharashtra 411028, IN
            </p>
          </div>

          <div className="info">
            <Link>About Us</Link>
            <Link>Services</Link>
            <Link>Blogs</Link>
            <Link>Events</Link>
            <Link>Careers</Link>

            <p>
              Location Hadapsar Highway Dreams Aakruti Pune, Maharashtra 411028,
              IN
            </p>
          </div>
          <div className="useful_links">
            <Link>Usefull Links</Link>
            <Link>Usefull Links</Link>
            <Link>Usefull Links</Link>
            <Link>Usefull Links</Link>
            <Link>Usefull Links</Link>
            <p className="text-sm font-normal text-white sm:text-base">
              Location <br />
              Hadapsar Highway Dreams Aakruti <br />
              Pune, Maharashtra 411028, IN
            </p>
          </div>
        </div>
        <hr />
        <div className="last">
          <span>copyright@cloudprism</span>
          <Link>Privacy Policy</Link>
          <Link>Terms And Condition</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
