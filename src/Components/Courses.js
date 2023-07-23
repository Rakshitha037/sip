import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const Courses = () => {
  const courses = [
    {
      name: 'C++',
      image: 'https://www.simplilearn.com/ice9/webinar_thum_image/CPP_Tutorial.jpg',
      wikiLink: 'https://www.geeksforgeeks.org/introduction-to-c-programming-language/'
    },
    {
      name: 'C',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg5qkNv1Zb6lPv4sa0Z9umVsc-nOQnri1xcJXRonE&s',
      wikiLink: 'https://en.wikipedia.org/wiki/C_(programming_language)',
    },
    {
      name: 'JAVASCRIPT',
      image: 'https://blog.logrocket.com/wp-content/uploads/2020/12/javascript-custom-events.png',
      wikiLink: 'https://javascript.info/',
    },
    
    {
      name: 'REACT-JS',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg3oT7_Cg2wzDzQsC_Fh-24IWiSKGOqkD9qSPe0d8kaw&s',
      wikiLink: 'https://www.tutorialspoint.com/reactjs/reactjs_overview.htm',
    },
    {
      name: 'JAVA',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtP3ud53bWufoh7MRfNPwkIAemabFRFU-1dkdtgNTv&s',
      wikiLink: 'https://en.wikipedia.org/wiki/Java_(programming_language)',
    },
    {
      name: 'PYTHON',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUV4UW-1rCtGKc9mf_UIU50ydPrlYrFtSBhAO7wA4n&s',
      wikiLink: 'https://www.python.org/doc/essays/blurb/',
    },
    
  ];

  return (
    <div className="container">
      <h1 className="text-center">Courses</h1>
      <div className="row">
        {courses.map((course, index) => (
          <div className="col-md-4" key={index}>
            <div className="card h-100">
              <img src={course.image} alt={course.name} className="card-img-top img-fluid" style={{ height: '200px', objectFit: 'cover' }} />
              <div className="card-body d-flex flex-column">
                <h3 className="card-title text-center">{course.name}</h3>
                <div className="mt-auto">
                  <a href={course.wikiLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    More
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;