import React from "react";
import "./navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "../sidebar";

const Navbar = () => {
  return (
    <div className="navbar">
        <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          PORTFOLIO
        </motion.span>
        <div className="social">
          <a href="#">
            <img src="/facebook.png" alt="fb" />
          </a>
          <a href="#">
            <img src="/instagram.png" alt="ig" />
          </a>
          <a href="#">
            <img className="linkedin" src="/linkedin.png" alt="in" />
          </a>
          <a href="#">
            <img className="pinterest" src="/pinterest.png" alt="pin" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
