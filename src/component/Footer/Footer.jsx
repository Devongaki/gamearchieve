import React from "react";
import "./index.css";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <div className="sd_footer-container">
        <div className="top_footer container">
          <p>Gamestudios</p>
          <div className="top_footer_icons">
            <Link>
              <AiFillFacebook />
            </Link>
            <Link>
              <AiFillLinkedin />
            </Link>
            <Link>
              <AiOutlineInstagram />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
