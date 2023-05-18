import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import Image from "next/image";
import image from "/public/morning.png";
import imageTwo from "/public/afternoon.png";
import imageThree from "/public/evening.png";
import imageFour from "/public/night.png";
import { MDBCard, MDBCardBody, MDBCardText } from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
const App = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      if (scrollPosition > windowHeight) {
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
  const springProps = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(20px)",
  });

  const [showDiv, setShowDiv] = useState(false);

  const handleScrollTwo = () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    if (scrollPosition > windowHeight) {
      setShowDiv(true);
    } else {
      setShowDiv(false);
    }
  };

  const divAnimation = useSpring({
    opacity: showDiv ? 1 : 0,
    transform: showDiv ? "translateY(0)" : "translateY(20px)",
  });
  return (
    <>
      <Image src={image} alt="Sahara Desert landscape" loading="lazy" />
      <div className=" flex items-center justify-between">
        <animated.div style={springProps}>
          <MDBCard className="m-10">
            <MDBCardText className="flex items-center justify-center mt-2">
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
      {/* ///////////////////////////////////////////////////////////// */}
      <div className=" flex items-center justify-between">
        <div
          id="your-div-id"
          className="your-div-class"
          onScroll={handleScrollTwo}
        >
          <animated.div style={divAnimation}>
            <MDBCard className="p-10">
              <MDBCardText className="flex items-center justify-center mt-2">
                Good Morning
              </MDBCardText>
              <Image
                src={image}
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
        <div
          id="your-div-id"
          className="your-div-class"
          onScroll={handleScrollTwo}
        >
          <animated.div style={divAnimation}>
            <MDBCard className="p-10">
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
        <div
          id="your-div-id"
          className="your-div-class"
          onScroll={handleScrollTwo}
        >
          <animated.div style={divAnimation}>
            <MDBCard className="p-10">
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
