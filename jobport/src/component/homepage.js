import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Nav, Navbar } from "react-bootstrap";
import Education from './edu';
import Hobbies from './hobbies';
import Projects from './projects';
import FileDownload from './download';
import { useState  } from 'react';


//create a component call hero

export default function Hero() {
    return (
        <>    
        <Hamburger> </Hamburger>
        <StackedHero></StackedHero>
        <MobileStackedHero></MobileStackedHero>
      
        </>
    )
}

export function StackedHero() {
  const text =
    "I never planned on becoming a data analyst. In fact, I started my career in a completely different field altogether. But as I worked in various industries, I began to realize that my true passion lay in data analysis. I was always interested in numbers and patterns, and I found myself constantly asking questions about the data I was seeing. As I delved deeper into the world of data analysis, I began to see the potential that data held for solving complex problems and driving business decisions. At the time, I didn't have the technical skills or experience to pursue a career in data analysis. So, I decided to take matters into my own hands and teach myself the necessary skills. I started with online courses and tutorials, reading books on statistics and data analysis, and practicing with real-world datasets.";
  const text1 = "It wasn't easy. There were many times when I felt overwhelmed and discouraged, but I persevered. I spent countless hours working on data analysis projects, building my skills, and honing my craft. As I gained more experience, I started to see the results of my hard work. I was able to take on more challenging projects and deliver meaningful insights that helped businesses make better decisions. I was thrilled to see the impact that my work was having, and it only fueled my passion for data analysis even more. Over time, my self-taught approach is paying off. My current goal is to land a job as a data analyst, and continue to grow and develop my skills on the job. Today, I am proud to say that I am a self-taught data analyst who has built a stunning portfolio through hard work, determination, and a love for data analytics. Looking back, I am grateful for the challenges and obstacles that I faced along the way. They taught me to be resourceful, resilient, and adaptable – all qualities that have served me well as a data analyst. I am excited to see where this journey will take me next, and I am eager to continue learning and growing in this ever-evolving field.";
  const handleReadMoreClick = () => {
    const fullTextWindow = window.open('', '_blank');
    fullTextWindow.document.write(`
      <html>
        <head>
          <title>Kadeem Pratt Cover Letter</title>
        </head>
        <body id='text'>
        <h2><span className='title'>Kadeem Pratt</span></h2>
        <h3><span className='role'>Personal Statement</span></h3>
          <p>${text}</p>
          <p >${text1}</p>
        </body>
      </html>
    `);
    fullTextWindow.document.close();
  };

  return (
    <>
    <FileDownload/>
    <Projects/>
          <Education/>
          <Hobbies/>
      <div className="container containerBox">
        <div className="col-15">
          <h1 className='headerText mobHeaderText'>Hello! I am Kadeem P,</h1>
         
          <div className="tophero">
            <button id='Mobreadmore Webreadmore' type="button" className="btn btn-primary" onClick={handleReadMoreClick} data-toggle="tooltip" data-placement="top" title="Read More">
              Read More
            </button>
          </div>
          <div className="secondhero">
            <p className='coverLetter'>
              {text.slice(0, text.length / 2) + "..."}
            </p>
          </div>
          <div className="thirdhero">
            <Card />
          </div>
         <div className='webSidebar'>
          <Projects/>
          <Education/>
          <Hobbies/>
          </div>
        </div>
      </div>
    </>
  );
}


  
  function Card() {
    return (
      <div className="card mobCard" >
        <div className="card-header">latest work experience</div>
        <ul className="list-group list-group-flush">
        <ul className="list-group-item"><span className='title0'>Developer/Data Analyst</span><br/><span className='role0'>Contractor</span><br/>
          <span className='respon0'>Impact Summary: </span>
          <li>
          <p>As a freelance software developer, I have a diverse range of skills and experiences that have allowed me to excel in my role. I have extensive knowledge of various software and data visualization tools, including Tableau, Python, Plotly, Sqlite3,Github Co-pilot, in addition to, Discord, and Slack, which have helped me to effectively communicate with clients and team members.</p>
          <p>In my role, I have demonstrated my decision-making ability, leadership skills, and ability to prioritize and delegate tasks effectively. I understand the importance of delivering quality work on time and have a proven track record of meeting deadlines and exceeding expectations.</p>
          <p>I am well-versed in databases and have a deep understanding of product knowledge, which allows me to provide valuable insights and recommendations to clients. My excellent interpersonal, motivational, team building, and customer relationship skills have enabled me to build strong relationships with clients and team members alike.</p>
          <p>In addition to my strong communication skills, I am also proficient in various programming languages, including Object-Oriented Programming (OOP), Node, JavaScript, MongoDB, HTML5, Express.js, Cascading Style Sheets (CSS), Bootstrap, React.js, CLI, Git, GitHub, and JSON. I use these tools to develop effective data analytics and data entry solutions for my clients, and I am always looking for ways to innovate and improve my work.</p>
          <p>Overall, my extensive experience and skills in software development have allowed me to make a significant impact in my freelance work. Whether it's through developing effective data analytics solutions or building strong relationships with clients, I always strive to deliver the best possible outcomes and exceed expectations.</p>    
         </li>
          </ul>
          <ul className="list-group-item"><span className='title'>Hopeworks Camden</span><br/><span className='role'> GIS Manager </span><br/>
          <span className='respon'>Impact Summary: </span>
          <li>
          <p>Once upon a time, as a supervisor for a 501(c) consulting company, I was responsible for implementing advanced policies, procedures, and strategic planning initiatives through a trauma-informed framework. My goal was to ensure that the GIS Department was operating at the highest level of efficiency and effectiveness while taking into account the impact of trauma on individuals and communities.</p>
          <p>As part of my responsibilities, I maintained compliance within the project scope of the American Water Utility Data Asset Conversion Project. This was critical as it ensured that we were meeting our objectives and delivering results that were aligned with our business goals.</p>
           <p>To support the engineers deployed for field work, I was responsible for wrangling the data with SQL, and migrating stale data assets into interactive data points. This allowed the engineers to access up-to-date and accurate information, which ultimately led to better decision-making and improved operational efficiencies. </p> 
           <p>To ensure that we had the right talent on board, I was directly involved in the recruitment of GIS team members and interns. This helped us to maintain a high level of quality and accuracy in our data, and to keep up with the latest developments in the industry.</p>
           <p>One of my key responsibilities was to maintain a 98% accuracy rate for data entered into the NJ American Water Arc Geodatabase. This required me to provide supervision and training to GIS interns in the latest Esri technology, including ArcGIS Pro, ArcGIS Collector, ArcGIS Online, and ArcGIS Hub. By providing the team with the skills and knowledge they needed, we were able to maintain the highest standards of quality and accuracy.</p>
            <p>As a supervisor, I directly provided day-to-day supervision for the quality assurance team, and provided motivation, support, and coaching for GIS team members through team meetings to achieve weekly KPI goals. By setting clear expectations and providing support, we were able to create a positive work environment where everyone felt empowered to do their best.</p>
            <p>Finally, I was responsible for assisting the GIS Director and team members in data survey work in the community. By engaging directly with the community, we were able to gather valuable data and insights that informed the Camden NJ Food Dessert Map, which inturned informed serval governmental and grassroots organizers policy direction.</p>
            <p>Through my efforts, the company was able to achieve significant results, including improved data accuracy and quality, increased efficiency and effectiveness, and better alignment with business goals.</p>
            </li>
          </ul>
          <ul className="list-group-item"><span className='title1'>CRA</span><br/><span className='role1'> Asst to Property Asset Manager </span><br/>
          <span className='respon1'>Impact Summary: </span>
          <li>
          <p>As a Project Manager and Grant Manager for the Camden Neighborhood Stabilization Grant, I oversaw an $11.9 million grant fund and ensured compliance between the Grantee and Grantor partnership. I conducted weekly field inspections of designated assets scoped by the grant, and was responsible for monitoring asset databases to ensure accuracy and timeliness.</p>
          <p>In addition, I attended meetings and discussed project details with the Property Asset Manager, organized and distributed board meeting materials, and was directly involved in the research and statistical analysis of properties in the database. My analysis helped inform key stakeholders involved with the disposition and acquisition of assets, leading to informed decisions and a successful project outcome.</p>
          <p>Using my skills in data visualization, databases, and product knowledge, I was capable of teaching others in a positive and constructive manner. I built excellent interpersonal, motivational, team building, and customer relationship skills, and was proficient in data analytics, data entry, Microsoft Office, email, grant monitoring, project management, administrative assistance, and office administration.</p>
          <p>My attention to detail and strong organizational skills allowed me to manage complex projects with ease, while ensuring all parties were aligned and working towards a common goal. As a results-driven employee, I am confident that I can apply these skills and experiences to excel as a data analyst and deliver impactful insights and outcomes for your organization.</p>
          </li>
          </ul>
          
        </ul>
      </div>
    );
  }
  

export function Hamburger (){
const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };
    return (
        <Navbar expand="md" className="navbar-light bg-light fixed-top">
        <Navbar.Brand href="/" className='col-9 navHead'></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar" onClick={toggleExpanded}>
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="navbar" className={expanded ? 'show' : ''} >
          <Nav className="ml-auto col-10" navbar>
            <Nav.Link href="#" active>Message Me</Nav.Link>
           </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}


export function MobileStackedHero() {
  return (
    <>
      <div className="container containerBoxs">
    
            <div className="tophero"></div>
            <div className="secondhero"></div>
            <div className="thirdhero">
              <Cards />
            </div>
        
      </div>
    </>
  );
}

function Cards() {
  return (
    <div className="card" style={{ width: "15em" }}>
      <div className="card-header">Featured</div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Cras justo odio</li>
        <li className="list-group-item">Dapibus ac facilisis in</li>
        <li className="list-group-item">Vestibulum at eros</li>
      </ul>
    </div>
  );
}
