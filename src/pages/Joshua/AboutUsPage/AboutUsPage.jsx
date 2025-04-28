import React from "react";
import picture1 from "/IMG/esther.png";
import picture2 from "/IMG/christian.png";
import picture3 from "/IMG/josh.png";
import picture4 from "/IMG/somto.png";
import picture5 from "/IMG/steven.png";
import picture6 from "/IMG/ebuka.png";
// import picture7 from "/IMG/Aboutushouse.png";
import linkedin from "/IMG/image.png";
import twitter from "/IMG/image1.png";
import instagram from "/IMG/image2.png";
import facebook from "/IMG/image3.png";
import "./aboutuspage.css";
import { useNavigate } from "react-router";


function AboutUsPage() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="fullpage">
        <div className="herosession">
          <h1>About Us</h1>
        </div>

        <div className="secondcont">
          <div className="imgcont1">
            <button className="getstartedbtn" onClick={() => navigate("/")}>Get started now</button>
           
          </div>
          <div className="textSession">
            <h1>Who We Are</h1>
            <h2>
              To make Nigeria the first Africa country where tenents save
              #500,000+ annually from the large amount of money from agents.
              Landlords retains full rental income without sacrificing property
              visibility. No one pays more than 1% platform fees in 2027. The
              transperent, agent free revolution.
            </h2>

            <button className="buttonwrapper">Get started now</button>
          </div>
        </div>

        <div className="valueswrawpper">
          <div className="mission">
            <h1>Core Missions</h1>
            <h3>
              1. Helping people find their perfect home with ease and
              confidence.
            </h3>
            <h3>
              2. Making buying, selling, and renting simple and stress-free.
            </h3>
            <h3>
              3. Delivering honest guidance and real value every step of the
              way.
            </h3>

            <h3>6. Prioritizing your needs to deliver personalized results.</h3>
            <h3>
              7. Fostering connection by helping people settle where they
              thrive.
            </h3>
          </div>
          <div className="vision">
            <h1>Core Visions</h1>
            <h3>
              1. Known for integrity, innovation, and putting people first.
            </h3>
            <h3>
              2. Helping people not just find homes, but places they can belong.
            </h3>
            <h3>
              3. Making property search and transactions intuitive and
              accessible.
            </h3>
            <h3>
              4. Delivering value across buying, selling, renting, and
              investing.
            </h3>
            <h3>
              5. Combining digital efficiency with personal care and connection.
            </h3>
           
          </div>
          <div className="value">
            <h1>Core Values</h1>
            <h3>
              1. We prioritize our clients' needs and guide them with care and
              clarity.
            </h3>
            <h3>
              2. We aim to positively impact the neighborhoods and people we
              serve.
            </h3>
            <h3>3. We earn confidence through consistency, communication.</h3>
            <h3>
              4. We take responsibility for our actions and deliver on our
              promises.
            </h3>
            <h3>
              5. We treat everyone with fairness, kindness, and professionalism.
            </h3>
          </div>
        </div>

        <div className="photowrap">
          <div className="picwrapper1">
            <div className="firstpic">
              <img src={picture1} alt="" />
              <h2>Afolayan Esther .A.</h2>
              <p>Product Designer</p>
            </div>
            <div className="secondpic">
              <img src={picture2} alt="" />
              <h2>Okoro Christian .E</h2>
              <p>Product Designer</p>
            </div>
            <div className="thirdpic">
              <img src={picture3} alt="" />
              <h2>Onuoha Joshua .O.</h2>
              <p>Frontend Developer</p>
            </div>
            <div className="fourthpic">
              <img src={picture4} alt="" />
              <h2>Urigwe Somto</h2>
              <p>Backend Developer</p>
            </div>

            <div className="picwrapper2">
              <div className="fifthpic">
                <img src={picture5} alt="" />
                <h2>Okoli Stephen</h2>
              <p>Frontend Developer</p>
              </div>
              <div className="sixthpic">
                <img src={picture6} alt="" />
                <h2>Alaekeka Ebuka</h2>
              <p>Backend Developer</p>
              </div>
              <div className="seventhpic">
                <img src={picture3} alt="" />
                <h2>Odimgbe Arinze</h2>
              <p>Frontend Developer</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bottomwrap" style={{backgroundColor: "blue"}}>
          <div className="innercontainer">
            <div className="rightside">
              <h2>Contact Us</h2>
              <h2>07044387562</h2>
              <h2>+769-786-9909</h2>
            </div>
            <div className="leftside">
              <h2>
                Address: <span>Wing 12B, ikoyi lagos state</span>
              </h2>
              <h2>
                Email: <span>joshuaamadi337@gmail.com</span>
              </h2>

              <div className="socialmediawrap">
                <h2>Socials: </h2>
                
                <img src={linkedin} alt="" />
               <img src={twitter} alt="" />
               <img src={instagram} alt="" />
               <img src={facebook} alt="" />
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsPage;