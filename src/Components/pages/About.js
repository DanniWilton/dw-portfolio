import ProfilePic from './Images/danniwilton.jpg';

function AboutMe () {
    return(
        <div className="main-container">
        <div className="container">
          <div className="jumbotron">
            <h1>About Danni Wilton (she/her)</h1>
            <img src={ProfilePic}/>
            <h2>I have recently completed a Full Stack Web Development Bootcamp at The University of Western Australia. 
                With a background in health, I was ready for a career change after an incident out in the field while working as a mental health recovery support worker. I have a Bachelor of Arts in Psychology and Addiction studies, worked at various Pharmacies around the Perth metropolitan area as well as roles within disability and mental health support. 
                My whole life I have been creative and enjoyed working with technology, so what a better time than to start my career in tech. I enjoy web design and the "magic" behind web development, with a focus on aesthetics and accessibility.
            </h2>
          </div>
        </div>
      </div>


    )
}

export default AboutMe