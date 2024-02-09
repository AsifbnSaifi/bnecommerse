import React from "react";
import Bntech from "../Assets/Bntech.png";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";


const Footer = () => {
  return (
    <>
      <footer className="footer footer-center pb-10">
        <aside>
          <img className="h-20 w-32" src={Bntech} alt="bn Technology" />
          <p className="font-bold">
            BN Technolgy <br />
            Providing reliable tech service since 2024
          </p>
          <p>Copyright © 2024 - All right reserved</p>
        </aside>
        <nav>
          <div className="grid grid-flow-col gap-4">
          <FaXTwitter size={25} />
          <IoLogoYoutube size={25} />
          <FaFacebookF size={25} />

          </div>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
