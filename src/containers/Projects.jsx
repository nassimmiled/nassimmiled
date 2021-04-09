import React from 'react';
import {Col, Container, Row} from 'reactstrap';
import {useKeenSlider} from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import {projects} from '../portfolio';
import ProjectsCard from '../components/ProjectsCard';
import GreetingLottie from '../components/DisplayLottie';
import swipe from '../assets/lottie/swipe-right.json'
const Projects = () => {
  const [sliderRef] = useKeenSlider({
    slidesPerView: 4,
    mode: 'free',
    spacing: 15,
    loop: true,
  });
  return (
      <Container fluid={false}>
        <Row xl={10}>
          <Col>
            <div className="section ">
              <div className="d-flex p-4 mb-4">
                <div>
                  <div
                      className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
                    <i className="ni ni-laptop text-info"/>
                  </div>
                </div>
                <div className="pl-4">
                  <h4 className="display-3 text-info">Projects</h4>
                </div>
              </div>
              <Row className="row-grid align-items-center">
                <div className="keen-slider " ref={sliderRef}>
                  {
                    projects.map(data => {
                      return <ProjectsCard data={data}/>;
                    })
                  }
                  {/*<div className="keen-slider__slide number-slide1">*/}
                  {/*  1</div>*/}
                  {/*<div className="keen-slider__slide number-slide2">2</div>*/}
                  {/*<div className="keen-slider__slide number-slide3">3</div>*/}
                  {/*<div className="keen-slider__slide number-slide4">4</div>*/}
                  {/*<div className="keen-slider__slide number-slide5">5</div>*/}
                  {/*<div className="keen-slider__slide number-slide6">6</div>*/}
                </div>
                  <GreetingLottie animationData={swipe}/>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
  );
};

export default Projects;