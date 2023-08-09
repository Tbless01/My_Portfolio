import '../styles/frontpage.css'
import React, { useState } from 'react';
import picsmi from '../../../assets/picsmi.jpg'


function Portfolio() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    message: '',
  });

  // Handler for form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    fetch('http://localhost:3000/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); 
        setFormData({
          fullname: '',
          email: '',
          message: '',
        });
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="container">
      <nav className="navbar">
        <div className="logo">Tbless</div>
      
        <ul className={`nav-links ${showMenu ? 'active' : ''}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#resume">Resume</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="menu-toggle" onClick={toggleMenu}>
          {showMenu ? '✕' : '☰'}
        </div>
      </nav>

      

      <div id='home' className="info">
        <h1 className='name'>Olaitan Blessing Ebenezer</h1>
        <p className='engineer'>I'm a Software Engineer</p>
        <div className='space'>
        <a  className='portbutton' href="#portfolio">Portfolio</a>
        </div>
      </div> 
    
    <section id="about" className="about">
    <h2>About Me</h2>
    <p>Mission-driven experienced Java engineer with a passion for thoughtful design, with extensive server-side web development <br>
    </br>knowledge and collaboration. Based in Lagos, Nigeria. Since 2022, I've enjoyed turning complex problems into simple, beautiful<br>
    </br> and intuitive designs. Seeking to broaden knowledge and deliver the highest standards of web design.</p>

    <div className="contact-details">
      <h3>Software Engineer</h3>
      <ul>
        <li>Phone no: +234 810 1705 853</li>
        <li>City: Lagos, Nigeria</li>
        <li>Degree: B.Sc</li>
        <li>Email: olaitanblessinge@gmail.com</li>
        <li>Freelance: Available</li>
      </ul>
    </div>
    <p1>Experienced Java engineer looking for a programming position,<br />
     with a specialty in improving server-side web development <br />
      efficiency. Self-motivated, detail-oriented, and creative problem- <br />
       solver. Proficient in both coding and design, as well as debugging. <br />
        Fluent in Java, Python, JavaScript, and some other coding languages. <br />
         Excels in team environments.</p1>
      <div className="about-section">
        <div className="about-text">
         <div className="about-image">
          <img src={picsmi} alt="picsmi"/>
        </div>
        </div>
      </div>
  </section>

    <section id="resume" className="resume">
      <h2>Resume</h2>
      <p className='resume-head'>Enthusiastic Software Engineer with hands-on experience in web development and database management, high energy <br /> approach
       and well-developed skills in Agile methodology. I adapt to the latest technological advancements and build software with them.</p>

<div className="summ-and-exp">
  <div className='summary'>
       <h1>Summary</h1>
       <div className='summary-words'>Innovative and deadline-driven Software Engineer with 1+ years <br />
        of experience designing and developing user-friendly website <br />
         and applications from initial concept to final, polished deliverable.</div>
    <ul> 
      <li>Lagos, Nigeria.</li>
      <li>+234 810 170 5853</li>
      <li>olaitanblessinge@gmail.com</li>
    </ul>
    <div className='education'>Education</div>
    <div className="line"></div>
    <div>Academic</div>
    <div className='dg'>OND Accountancy</div>
    <div className='year'>2013 - 2015</div>
    <div className='school'>Osun State Polytechnic, Iree</div>

    <div className='dg'>B.Sc Accounting and finance</div>
    <div className='year'>2016 - 2019</div>
    <div className='school'>Osun State University, Osogbo</div>
  </div>


  <div className='experience'>
      <h3>Experience</h3>
      <p>Semicolon Africa, Lagos — Software Engineer (June 2022 - Present)</p>
      <ul>
        <li>Maintain a website including security and efficiency.</li>
        <li>Built new website features and correct issues.</li>
        <li>Understanding and using software development lifecycle principles to deploy software applications to solve problems.</li>
        <li>Participating in the design with project managers, team leaders, and other team members.</li>
        <li>Preparing user documents containing the API and database design to design the three-tier architecture for this project.</li>
        <li>Worked with Browser APIs and Third-Party APIs.</li>
        <li>Handled Database Management systems with SQL like MySQL, Postgres.</li>
      </ul>
      </div>
  </div>
  </section>

<section  id='portfolio' className='projects'>
  <h3 className='portfolio'>Portfolio</h3>
  <h3 className='project'>Projects</h3>
  <p className='prjName'>Developed a loan application system <br/> </p>
  <div className='lang'> Language: Java - SpringBoot</div>
  <p className='prjLink'>Link to code on GitHub: <a href="https://github.com/Tbless01/LoanApp_Java" target="_blank">Click Here</a></p>

  <p className='prjName'>Developed e-voter app with robust functionalities  <br/> </p>
  <div className='lang'> Language: Java </div>
  <p className='prjLink'>Link to code on GitHub: <a href="https://github.com/Tbless01/E-VoterApp" target="_blank">Click Here</a></p>

  <p className='prjName'>Developed comprehensive e-wallet app <br/> </p>
  <div className='lang'> Language: Python</div>
  <p className='prjLink'>Link to code on GitHub: <a href="https://github.com/Tbless01/e-wallet-py" target="_blank">Click Here</a></p>


  {/* <h3>TECHNOLOGIES</h3>
  <p>Java, Python, HTML, CSS (Bootstrap, CSS), Javascript, React, SQL (MySQL, PostgreSQL), Jira, Docker, Linux/Bash, Kubernetes, Versioning (Git), Control System (GitHub), CI/CD (Github actions, Heroku), Test-Driven Development.</p>

  <h3>SOFT SKILLS</h3>
  <p>Critical thinking and analysis, Problem-solving, Attention to details, Good communication, Team player.</p> */}
</section>
  



  <section id="contact" className="contact">
  <h2>Contact</h2>

        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="fullname">Full Name</label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                value={formData.fullname}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </section>




  <footer class="portfolio-footer">
  <p>© Copyright My Resume/Portfolio. All Rights Reserved</p>
  <p>Designed by <span className='footname'> Olaitan Blessing</span></p>
</footer>

</div>
);
  };
export default Portfolio;