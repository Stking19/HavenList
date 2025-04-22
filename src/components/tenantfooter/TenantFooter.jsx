import React from "react";
import "./tenantfooter.css";
import { useNavigate } from "react-router";

const TenantFooter = () => {
  const navigate = useNavigate()
  return (
    <div className="footer">
      <div className="footLeft">
        <div className="write-up">
          <p>
            <span>HavenList</span> connects landlords and tenants seamlessly,
            offering a trusted platform to list, discover, and manage properties
            with ease. From search to lease, we simplify real estate so you can
            focus on what matters.
          </p>
        </div>
        <div className="year">
            <p>2025 HavenList Property. All rights reserved.</p>
        </div>
      </div>
      <div className="footRight">
        <div className="links">
          <div className="Qlinks">
            <h3>Quick Links</h3>
            <p onClick={() => navigate("/home")}>Home</p>
            <p onClick={() => navigate("listing")}>Property Listing</p>
            <p>How it Works</p>
            <p onClick={() => navigate("about")}>Contacts Us</p>
          </div>
          <div className="Llinks">
            <h3>Legal</h3>
            <p onClick={() => navigate()}>Privacy Policy</p>
            <p onClick={() => navigate()}>Terms of Services</p>
            <p onClick={() => navigate()}>Lease Agreement</p>
          </div>
          <div className="Slinks">
            <h3>Support</h3>
            <p onClick={() => navigate()}>FAQs</p>
            <p onClick={() => navigate("help")}>Help Center</p>
          </div>
        </div>
        <div className="news">
          <div className="letter">
            <h3>Newsletter</h3>
            <div className="subs">
            <input type="email" placeholder="Email" />
            <button>Subscribe</button>
            </div>
          </div>
          <div className="follow">
            <h3>Follow Us</h3>
            <div className="media">
              <img src="/IMG/Facebook.png" alt="" />
              <img src="/IMG/Twitter.png" alt="" />
              <img src="/IMG/Instagram.png" alt="" />
              <img src="/IMG/Linkedin.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TenantFooter;
