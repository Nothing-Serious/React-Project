import React from "react";
import "./Main.css";
import img2 from "./img/img2.jpg";
import group from "./icons/group.png";
// import web from "./icons/web.png";
// import app from "./icons/app.png";
import game from "./icons/game.png";
import python from "./icons/python.png";
import graphic from "./icons/graphic.png";
import web2 from "./icons/web2.png";
import graph from './icons/graph.png'
import globe from './icons/globe.png'
import bridge from './icons/bridge.png'
import me from './images/me.jpg'
import friend from './images/friend.jpg'
import whatsapp from './icons/whatsapp.svg'
import facebook from './icons/facebook.svg'
import instagram from './icons/instagram.svg'
import youtube from './icons/youtube.svg'
import {Link} from 'react-router-dom'
import up from './icons/up.png'

const Home = () => {
  return (
    <>
      <section className="sec1 ">
        <div className="backshadow"></div>
        <div className="main">
          <div className="left">
            <h1>NS Coders....</h1>
            <h3>learn coding free of cost</h3>
            <p>
              It is a free platform where anyone can start his/her coding
              journey. With simple and easy courses you can master in a skill in
              just 3 or 4 months.
            </p>
          </div>
          <div className="right">
            <img src={img2} alt="" />
          </div>
        </div>
      </section>
     
      <section className="sec2">
        <div className="heading ext1">
          
          <h1>Our Courses</h1>
          <p>
            Welcome to our all-in-one coding platform, designed to cater to the
            needs of developers at every stage of their journey. Join our
            platform today and take your coding skills to the next level with
            our comprehensive suite of services!.Step-by-step guides and
            hands-on exercises to help you learn and master various programming
            languages and frameworks.
          </p>
        </div>
        <div className="first">
          <div className="box">
            <img src={img2} alt="" />
            <h1>Web Development</h1>
            <p>Our Web Development Course is designed to take you from a complete beginner to a proficient web developer.</p>
          </div>
          <div className="box">
            <img src={web2} alt="" />
            <h1>App Development</h1>
            <p>Our App Development Course is designed to equip you with the knowledge and skills to create fully functional mobile applications for both iOS and Android platforms.</p>
          </div>
          <div className="box">
            <img className="ext" src={game} alt="" />
            <h1>Game Development</h1>
            <p>Our Game Development Course is designed to guide you through the entire process of creating interactive and engaging video games. </p>
          </div>
          <div className="box">
            <img src={python} alt="" />
            <h1>Python</h1>
            <p>Our Python Programming Course is designed to take you from a complete beginner to a proficient Python developer.</p>
          </div>
          <div className="box">
            <img src={graphic} alt="" />
            <h1>Digital Marketing</h1>
            <p>Our Digital Marketing Course is designed to provide you with the skills and knowledge needed to excel in the fast-paced world of online marketing. </p>
          </div>
          <div className="box">
            <img src={graph} alt="" />
            
            <h1>Graphic Designing</h1>
            <p>Our Graphic Designing Course is designed to equip you with the skills and knowledge to create visually stunning and effective designs.</p></div>
        </div>
      </section>
      <hr />
       <section className="sec3">
        <div className="heading">
          <h1>Our Mission</h1>
          <p>
            Our mission & vision encompasses a peaceful and safe world for us
            all, and for our future generations. In this regard, we are working
            towards making strong and tolerable communities using IT as a base
            by taking a holistic approach towards simplifying and solving issues
            we daily experience in our lives.
          </p>
        </div>

        <div className="first">
          <div className="box1">
            <img src={group} alt="" />
            <h1>Growing Community</h1>
            <p>Provide digital skills and training to our growing youth for making a strong community of new generation.</p>
          </div>
          <div className="box1">
            <img src={bridge} alt="" />
            <h1>Bridge the Digital Divide</h1>
            <p>Provide equal opportunities for all to learn and master essential digital skills, regardless of background or location.</p>
          </div>
          <div className="box1">
            <img src={globe} alt="" />
            <h1>Build a Global Community</h1>
            <p> Create a supportive online community where learners can connect, collaborate, and share knowledge</p>
          </div>
        </div>
      </section>
      <hr />
      <section className="sec4">
        <div className="heading1">
          <h1>Our Team</h1>
          <p>
            At NS Coders, our team is composed of passionate and dedicated professionals who are committed to delivering exceptional coding experiences. Each member brings a unique set of skills and expertise, contributing to a collaborative environment that fosters innovation and creativity.
          </p>
        </div>
        <div className="team">
            <div className="member">
                <img src={me} alt="" />
                <h1>Abdul Basit</h1>
                <p>Front-End Developer</p>
            </div>
            <div className="member">
                <img src={friend} alt="" />
                <h1>Sarmad Khan</h1>
                <p>Front-End Developer</p>
            </div>
            <div className="member">
                <img src={me} alt="" />
                <h1>Abdullah</h1>
                <p>Web Designer</p>
            </div>
        </div>
      </section>
      <footer className="foot">
      <div className="scroll">
        <a href="#home"><img src={up} alt="" /></a>
        </div>
        <div className="foottop">
            <h1>NS <span>Coders</span> </h1>
            <p>Coming soon with a new brand and a new dream in the war of Technology.</p>
        <div className="icons">
            <Link><img src={youtube} alt="" /></Link>
            <Link><img src={facebook} alt="" /></Link>
            <Link><img src={whatsapp} alt="" /></Link>
            <Link><img src={instagram} alt="" /></Link>
        </div>

        </div>
        <div className="last">
             <p>Copyright &copy; 2024.  || All Rights Reserved</p>
        </div>
      </footer>
    </>
  );
};

export default Home;
