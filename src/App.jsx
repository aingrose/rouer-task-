import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Navbar from './Navbar';
import FullStack from './FullStack';
import All from './All';

import Carrer from './Career';
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import DataScience from './DataScience'
import Cyber from './Cyber';


function App() {
  let AllCard = [
    {
      id: 1,
      name: "Design Thinking and Prototyping in UI/UX: A Comprehensive Guide",
      desc: " Design thinking is a user-centric approach to problem-solving that emphasizes empathy and experimentation. It is",
      img: "https://www.guvi.in/blog/wp-content/uploads/2024/01/Feature-image-Design-Thinking-and-Prototyping-in-UIUX-A-Comprehensive-Guide.webp"
    },
    {
      id: 2,
      name: "Integrating Augmented Reality (AR) into User Interfaces: Challenges and Solutions",
      desc: "Augmented Reality (AR) is a tool that adds digital images and information to the real",
      img: "https://www.guvi.in/blog/wp-content/uploads/2024/01/Feature-image-Integrating-Augmented-Reality-AR-into-User-Interfaces-Challenges-and-Solutions.webp"
    },
    {
      id: 3,
      name: "Human-Computer Interaction in UI/UX: A Comprehensive Guide on Effective Designing [2024]",
      desc: "Believe it or not, approximately 52% of Indians have increased usage of digital devices in",
      img: "https://www.guvi.in/blog/wp-content/uploads/2024/01/Feature-image-Human-Computer-Interaction-in-UIUX-A-Comprehensive-Guide-on-Effective-Designing-.webp",
    },
    {
      id: 4,
      name: "10 Important Things to Consider Before Joining Digital Marketing Course",
      desc: "Digital marketing is an exceptionally dynamic field that keeps on evolving with the changing trends,",
      img: "https://www.guvi.in/blog/wp-content/uploads/2024/01/Feature-image-Important-Things-to-Consider-Before-Joining-Digital-Marketing-Course.webp",
    },
    {
      id: 5,
      name: "15 Most Common SQL Queries with Examples",
      desc: "SQL is a must-have skill for every developer or tech professional to handle large amounts",
      img: "https://www.guvi.in/blog/wp-content/uploads/2024/01/Feature-image-Most-Common-SQL-Queries-with-Examples.webp"
    },
    {
      id: 6,
      name: "Top 5 Free Courses by GUVI: Best Upskilling Courses in Tech [2024]",
      desc: "Does waking up to the news of mass layoffs every morning make you anxious about",
      img: "https://www.guvi.in/blog/wp-content/uploads/2024/01/Feature-image-Top-Free-Courses-by-GUVI-Best-Upskilling-Courses-in-Tech.webp"
    }
  ]

  let Fsd =[
    {
      id: 1,
      name: "Web Components: A Deep Dive into Reusable and Custom Elements [2024]",
      desc:"As a full-stack developer, have you ever got bored of using the same HTML, CSS,",

      img : "https://www.guvi.in/blog/wp-content/uploads/2024/01/feature_image-6.webp"
    },
    {
      id: 2,
      name: "Integrating Augmented Reality (AR) into User Interfaces: Challenges and Solutions",
      desc: "Augmented Reality (AR) is a tool that adds digital images and information to the real",
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/11/top-ways-to-assess-soft-skills-in-full-stack-developers.webp"
    },
    {
      id: 3,
      name: "Human-Computer Interaction in UI/UX: A Comprehensive Guide on Effective Designing [2024]",
      desc: "Believe it or not, approximately 52% of Indians have increased usage of digital devices in",
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Full-Stack-Developer-vs-Software-Engineer-.webp",
    },
    {
      id: 4,
      name: "10 Important Things to Consider Before Joining Digital Marketing Course",
      desc: "Digital marketing is an exceptionally dynamic field that keeps on evolving with the changing trends,",
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Best-Books-to-Learn-Full-Stack-Development.webp",
    },
    {
      id:5,
      name:"15 Most Common SQL Queries with Examples",
      desc:"SQL is a must-have skill for every developer or tech professional to handle large amounts",
      img:"https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Best-Books-to-Learn-Full-Stack-Development.webp"
    },
    {
      id:6,
      name:"Top 5 Free Courses by GUVI: Best Upskilling Courses in Tech [2024]",
      desc:"Does waking up to the news of mass layoffs every morning make you anxious about",
      img:"https://www.guvi.in/blog/wp-content/uploads/2023/10/Featured-Image-top-product-based-companies-for-full-stack-developers.webp"
    } 
  ]

  let DataSciences = [

      {
        id: 1,
        name: "Top 10 High Paying Non-Coding Jobs in Data Science in 2024",
        desc:"Are you someone who’s not interested in coding, but wants to get placed in tech",
        img : "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp"
      },
      {
        id: 2,
        name: "Impact of Certification Programs on Hiring Data Scientists",
        desc: "Data scientists are the creators behind transforming the raw data into edible data insights. These",
        img: "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-1-2048x1024.webp"
      },
      {
        id: 3,
        name: "Top Product-Based Companies for Data Science Freshers",
        desc: "In today’s data-driven world, data science has emerged as a crucial field, with companies harnessing",
        img: "https://www.guvi.in/blog/wp-content/uploads/2023/11/feature-image-product-based-companies-for-data-science-freshers.webp",
      },
      {
        id: 4,
        name: "Top 10 Data Science Tools in 2024",
        desc: "Data Science is an in-demand profession and will continue growing in the coming years. From",
        img: "https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Difference-between-Data-Science-and-Data-Engineering.webp",
      },
      {
        id:5,
        name:"Top Product-Based Companies for Data Scientists in 2024",
        desc:"Top Product-Based Companies for Data Scientists in 2024",
        img:"https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Difference-between-Data-Science-and-Data-Engineering.webp"
      },
      {
        id:6,
        name:"Useful Python Libraries & Tools for Data Science Beginners",
        desc:"In a world filled with information, knowing how to understand and use data is super",
        img:"https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Best-books-to-learn-data-science.webp"
      } 
    ]
   let CyberCard = [

    {
      id: 1,
      name: "Non-Coding Jobs in Cybersecurity: A Comprehensive Guide",
      desc:"In the rapidly evolving field of cybersecurity, there is a common misconception that coding skills",
      img : "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp"
    },
    {
      id: 2,
      name: "What Is Hacking? Types of Hacking & More",
      desc: "Have you ever wondered what hacking is all about? It’s a big deal in today’s",
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp"
    },
    {
      id: 3,
      name: "Cybersecurity Vs Ethical Hacking: Top 10 Differences",
      desc: "Cybersecurity & Ethical hacking and have been key in making sure that your data online",
      img: "https://www.guvi.in/blog/wp-content/uploads/2024/01/Feature-image-Top-Free-Courses-by-GUVI-Best-Upskilling-Courses-in-Tech.webp",
    },
    {
      id: 4,
      name: "What is Cybersecurity? Importance and its uses & the growing challenges in 2023!",
      desc: "Look around today, you will witness that we are more reliant on technology and devices",
      img: "https://www.guvi.in/blog/wp-content/uploads/2024/01/Feature-image-Design-Thinking-and-Prototyping-in-UIUX-A-Comprehensive-Guide.webp",
    },
    {
      id:5,
      name:"8 Different Types of Cybersecurity and Threats Involved",
      desc:"Cybersecurity refers to the protection of devices, processes, infrastructure, and assets of the organization from",
      img:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-IT-Jobs-for-Commerce-Students.webp"
    },
    {
      id:6,
      name:"Top 7 Cyber Security Attacks in Real Life",
      desc:"Cyber security attacks are the type of actions that are designed to destroy, steal, modify,",
      img:"https://www.guvi.in/blog/wp-content/uploads/2023/11/top-ways-to-assess-soft-skills-in-full-stack-developers.webp"
    } 
  ]

  let CarrerCard = [

    {
      id: 1,
      name: "Top Technologies to Learn in 2024: Jumpstart a Successful Tech Career",
      desc: "If your New Year resolution consists of building a successful tech career in 2024, then",
      img: "https://www.guvi.in/blog/wp-content/uploads/2024/01/Feature-image-Top-Technologies-to-Learn-Jumpstart-a-Successful-Tech-Career.webp"
    },
    {
      id: 2,
      name: "UI/UX Designer Job Description and Roles & Responsibilities",
      desc: "UI UX is the abbreviated word that’s been rocking the trend over the years, especially",
      img: "https://www.guvi.in/blog/wp-content/uploads/2024/01/Feature-image-Design-Thinking-and-Prototyping-in-UIUX-A-Comprehensive-Guide.webp"
    },
    {
      id: 3,
      name: "Top 5 IT Jobs for Economics Students",
      desc: "In today’s digital age, the intersection of economics and technology offers exciting career opportunities for",
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-IT-Jobs-for-Economics-Students.webp",
    },
    {
      id: 4,
      name: "Automation Test Engineer Resume: 10 Important Things To Consider",
      desc: "The world is moving towards automating the testing of products in order to increase work",
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-IT-Jobs-for-Commerce-Students.webp",
    },
    {
      id: 5,
      name: "Professional Civil Engineer Resume: A Guide To Attract Employers in 2024 ",
      desc: " The world is moving towards modernization leading to an increase in the popularity of civil",
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Automation-Test-Engineer-Resume-Important-Things-To-Consider.webp"
    },
    {
      id: 6,
      name: "9 Best Product-Based Companies for Project Management",
      desc: "In today’s tech-driven world, the demand for project managers is higher than before. The workload",
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/11/FEATURE-IMAGE-1-3-1200x628.webp"
    }
  ]

  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-12' >
          <>
          <BrowserRouter>
            <Navbar />

            <div className='container cards'>
              <div className='row'>
            
               
                  <Routes>
                    <Route path="/" element={
                      <>
                        {AllCard.map((alls) => (
                          <FullStack key={alls.id} name={alls.name} desc={alls.desc} img={alls.img} />
                        ))} </> 
                    }/>

                    <Route path="/Fullstack" element={
                      <>
                        {Fsd.map((alls) => (
                          <All key={alls.id} name={alls.name} desc={alls.desc} img={alls.img} />
                        ))} </> 
                    }/>
                    
                    <Route path="/Datascience" element={
                      <>
                        {DataSciences.map((alls) => (
                          <DataScience key={alls.id} name={alls.name} desc={alls.desc} img={alls.img} />
                        ))} </> 
                    }/>
                     
                     

                      <Route path="/Cyber" element={
                      <>
                        {CyberCard.map((alls) => (
                          <Cyber key={alls.id} name={alls.name} desc={alls.desc} img={alls.img} />
                        ))} </> 
                    }/>


                      <Route path="/Carrer" element={
                      <>
                        {CarrerCard.map((alls) => (
                          <Carrer key={alls.id} name={alls.name} desc={alls.desc} img={alls.img} />
                        ))} </> 
                    }/>


                     </Routes>
                     </div>
                    
            </div>
                </BrowserRouter>
              
               
            </>
          </div>
        </div>

      </div>


    </>

  );
}

export default App;
