import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contact");
    // Add a small delay to ensure the page has loaded before scrolling
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };
  return (
    <footer className="bg-[#FAFAFA]">
      <div className="py-8 px-6 flex justify-between items-start px-40">
        <div className="flex flex-col items-center justify-center gap-4">
          <img
            src="/images/logo.png"
            alt="Company Icon"
            className="w-16 h-16 mb-4"
          />
          <div className="flex gap-10">
            <img
              src="/images/instagram.png"
              alt="Instagram"
              className="w-6 h-6"
            />
            <img src="/images/twitter.png" alt="Twitter" className="w-6 h-6" />

            <img
              src="/images/facebook.png"
              alt="Facebook"
              className="w-6 h-6"
            />
          </div>
          <Link to="/contact" className="hover:underline w-full">
            <button
              className="bg-[#3461FF] text-white px-6 py-3 w-full rounded-full font-semibold"
              onClick={handleClick}
            >
              Contact Us
            </button>
          </Link>
        </div>
        <div className="flex gap-10">
          <div className="flex flex-col gap-10">
            <Link to="#" className="hover:underline">
              Working with Us
            </Link>
            <Link to="#" className="hover:underline">
              Advertise with Us
            </Link>
            <Link to="#" className="hover:underline">
              Support Us
            </Link>
          </div>
          <div className="flex flex-col gap-10">
            <Link to="/services" className="hover:underline">
              Our Work
            </Link>
            <Link to="#" className="hover:underline">
              Our Commitment
            </Link>
            <Link to="#" className="hover:underline">
              Our Team
            </Link>
          </div>
          <div className="flex flex-col gap-10">
            <Link to="/about" className="hover:underline">
              About Us
            </Link>
            <Link to="#" className="hover:underline">
              Report a Bug
            </Link>
          </div>
        </div>
      </div>
      <div className="py-8 px-6 flex justify-between items-start bg-black px-40 text-white">
        <div className="flex flex-col items-center justify-center gap-4">
          © 2022 Top Cleaning, Inc. - All Rights Reserved
        </div>
        <div className="flex gap-10">
          <div className="flex flex-col gap-10">
            <Link to="#" className="hover:underline">
              Terms of use
            </Link>
          </div>
          <div className="flex flex-col gap-10">
            <Link to="#" className="hover:underline">
              Privacy policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
