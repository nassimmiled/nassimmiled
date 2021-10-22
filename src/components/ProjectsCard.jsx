import React from 'react';

import { Button, Card, CardBody } from 'reactstrap';

import { Fade } from 'react-reveal';

const ProjectsCard = ({ data }) => {
  return (
    <div lg="8" className="keen-slider__slide">
      <Fade bottom duration={1000} distance="80px">
        <Card>
          <CardBody>
            <div className="d-flex px-0">
              <div className="pl-0">
                <h5 className="text-info">
                  {data.name}
                </h5>
                {data.imgId &&
                  <img
                    src={`https://drive.google.com/uc?export=view&id=${data.imgId}`}
                    alt="new"
                    width={'205'}
                    height={'220'}
                  />
                }
                {data?.desc?.map(des => {
                  return <p className="description mt-3">{des}</p>
                })}

                {data.languages?.map(langauge => {
                  return <span className="btn-neutral btn-icon" style={{ margin: '0px 2px', borderRadius: '3px', color: '#42bffd', padding: '1px' }}>
                    {langauge}
                  </span>
                })}

                {
                  data.link ?
                    <Button
                      className="btn-neutral btn-icon"
                      color="primary"
                      href={data.link.url}
                      target="_blank"
                    >
                      <span className="btn-inner--icon">
                        <i className="fa fa-arrow-right mr-2" />
                      </span>
                      <span className="nav-link-inner--text ml-1">
                        {data.link.name}
                      </span>
                    </Button> : null
                }
              </div>
            </div>
          </CardBody>
        </Card>
      </Fade>
    </div>
  );
};

export default ProjectsCard;