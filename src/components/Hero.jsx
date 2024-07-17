import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p>
            Doctors are GOD! Only when you meet them at the right time.<br></br>
            E-medico is an online platform where you can reach out to the
            best doctors near you.Book your appointment now!!<br></br><br></br>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea necessitatibus illo debitis similique accusantium, consequatur dicta facilis voluptate corrupti non soluta, eos laudantium repudiandae consectetur delectus id saepe molestiae repellat.
          </p>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="hero" className="animated-image" />
          <span>
            <img src="/Vector.png" alt="vector" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;
