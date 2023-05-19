import React, { useState, useEffect } from "react";
import { useSpring, animated, useTrail } from "react-spring";
import Image from "next/image";
import image from "/public/morning.png";
import imageTwo from "/public/afternoon.png";
import imageThree from "/public/evening.png";
import imageFour from "/public/night.png";
import { MDBCard, MDBCardBody, MDBCardText } from "mdb-react-ui-kit";
const App = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrollY(scrollPosition);
      console.log(scrollPosition);
      const elementPosition = document.getElementById("MyElement")?.offsetTop;
      const elementHeight = document.getElementById("MyElement").offsetHeight;
      console.log(elementPosition);
      if (scrollPosition >( elementPosition)) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };  
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const headingProps = useSpring({
    transform: `translateY(${-scrollY * 3}px)`,
    opacity: scrollY > 0 ? 0 : 1,
    config: { mass: 5, tension: 200, friction: 30 },
  });
  const springProps = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(20px)",
  });

  const lines = ["Home", "About", "Services", "Contact"];
  const trail = useTrail(lines.length, {
    from: { opacity: 0, transform: `translateY(${-scrollY * 3}px)` },
    to: { opacity: 2, transform: `translateY(${-scrollY * 2}px)` },
    config: { mass: 5, tension: 200, friction: 30 },
  });

  return (
    <>
      <animated.div
        className="absolute inset-10 flex justify-center  space-x-8"
        style={headingProps} 
      >
        {trail.map((animation, index) => (
          <animated.div key={index} style={animation} className="navbar-line ">
            {lines[index]}
          </animated.div>
        ))}
      </animated.div>
      <div className="absolute inset-0 flex items-center justify-center">
        <animated.h1  id="MyElement"
          className="font-thin center-heading text-black font-"
          style={headingProps}
        >
          Liquid0x
        </animated.h1>
      </div>
      {/* card element//////////////////////////////////////////////////////////// */}
      <div className="flex items-center justify-center ">
        <animated.div style={springProps}>
          <MDBCard className="m-10">
            <MDBCardText className=" flex items-center justify-center mt-2">
              Good afternoon
            </MDBCardText>
            <Image
              src={imageTwo}
              alt="Sahara Desert landscape"
              loading="lazy"
            />
            <MDBCardBody>
              <MDBCardText>
                Some quick example text to build on the card title and make up
                the bulk of the Pic content.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </animated.div>
        <animated.div style={springProps}>
          <MDBCard className="m-10">
            <MDBCardText className="flex items-center justify-center mt-2">
              Good Evening
            </MDBCardText>
            <Image
              src={imageThree}
              alt="Sahara Desert landscape"
              loading="lazy"
            />
            <MDBCardBody>
              <MDBCardText>
                Some quick example text to build on the card title and make up
                the bulk of the Pic content.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </animated.div>

        <animated.div style={springProps}>
          <MDBCard className="m-10">
            <MDBCardText className="flex items-center justify-center mt-2">
              Good Night
            </MDBCardText>
            <Image
              src={imageFour}
              alt="Sahara Desert landscape"
              loading="lazy"
            />
            <MDBCardBody>
              <MDBCardText>
                Some quick example text to build on the card title and make up
                the bulk of the Pic content.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </animated.div>
      </div>
      {/* //////////////////////////////////////////////////////////// */}
      <div className=" flex items-center justify-between">
        <div id="your-div-id" className="your-div-class">
          <animated.div style={springProps}>
            <MDBCard className="m-10">
              <MDBCardText className="flex items-center justify-center mt-2">
                Good Morning
              </MDBCardText>
              <Image src={image} alt="Sahara Desert landscape" loading="lazy" />
              <MDBCardBody>
                <MDBCardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the Pic content.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </animated.div>
        </div>
        <div id="your-div-id" className="your-div-class">
          <animated.div style={springProps}>
            <MDBCard className="m-10">
              <MDBCardText className="flex items-center justify-center mt-2">
                Good Evening
              </MDBCardText>
              <Image
                src={imageThree}
                alt="Sahara Desert landscape"
                loading="lazy"
              />
              <MDBCardBody>
                <MDBCardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the Pic content.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </animated.div>
        </div>
        <div id="your-div-id" className="your-div-class">
          <animated.div style={springProps}>
            <MDBCard className="m-10">
              <MDBCardText className="flex items-center justify-center mt-2">
                Good Night
              </MDBCardText>
              <Image
                src={imageFour}
                alt="Sahara Desert landscape"
                loading="lazy"
              />
              <MDBCardBody>
                <MDBCardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the Pic content.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </animated.div>
        </div>
      </div>
    </>
  );
};

export default App;
