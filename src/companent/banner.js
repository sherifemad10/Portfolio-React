// import React from "react";

// const Banner = () =>{
//     let nameandjob = document.getElementById("nameandjob");
   
//     return(
        
//         <div className="banner">
//             <div className="content">
//            <div  className="welcome">
//             <h2>Welcome to my Portfolio</h2>
//            </div>
//            <div className="name">
         
//             <span className="text">Hi! I'm </span>
//             <span id="nameandjob"></span>

//            </div>

//            </div>

//         </div>
//     )
// }

// export default  Banner; 

import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import bannerimg  from "../companent/bannerimg.png";
import TrackVisibility from 'react-on-screen';

 const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Frontend", "Backend", "Full-Stack" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Sherif Emad`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Frontend", "Backend", "Full-Stack" ]'><span className="wrap">{text}</span></span></h1>
                  <p>Thank you for your trust! I'm Sherif Emad, a front-end web developer with more than a year's experience. I specialize in designing user-friendly websites that prioritize ease of use. Before your website works for you or your company, I make sure it works smoothly for me. Explore my portfolio or visit my GitHub before you decide to commission me. ✅ HTML, CSS, JavaScript, and React I leverage frameworks like Tailwind and Bootstrap for responsive and attractive web interfaces. And because I am confident that my previous work will speak for itself, Let's cooperate!</p>
                  <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={bannerimg} alt="banner Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
export default Banner;