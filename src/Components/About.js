import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
  return (
    <div className="container mt-4">
      {/* <h1 className="text-primary">About</h1> */}

      <div className="row">
        <div className="col-md-6">
          <h3 className="text-info">OUR GOAL</h3>
          <p>
            The main goal  of this education sytem website  is to provide the opportunity for acquiring knowledge and skills that will enable people to develop their full potential, and become successful members of society
          </p>
        </div>

        <div className="col-md-6">
          <h3 className="text-info">OUR VISION</h3>
          <p>
            A good quality education is one that provides all learners with capabilities they require to become economically productive, develop sustainable livelihoods, contribute to peaceful and democratic societies and enhance individual well-being
          </p>
        </div>
      </div>

      <button className="btn btn-primary mt-4" type="button" data-toggle="collapse" data-target="#collapseDetails" aria-expanded="false" aria-controls="collapseDetails">
        More Details
      </button>

      <div className="collapse mt-3" id="collapseDetails">
        <div className="card card-body bg-light">
          <h3 className="text-info">Additional Details</h3>
          <p>
            Our commitment to excellence drives us to collaborate with top educators and industry experts,
            ensuring that our courses are relevant, up-to-date, and aligned with the needs of learners.

          </p>
        </div>
      </div>
    </div>
  );
};

export default About;