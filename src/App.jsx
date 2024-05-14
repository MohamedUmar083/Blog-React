import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import All from "./Pages/All";
import Fsd from "./Pages/Fsd";
import DataScience from "./Pages/DataScience";
import Cybersec from "./Pages/Cybersec";
import Career from "./Pages/Career";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nopage from "./Pages/Nopage";
import "./App.css";

const App = () => {
  let data = [
    {
      img: "https://codingbytes.com/wp-content/uploads/2022/03/full-stack-web-development.jpg",
      head: "Full Stack Development",
      content: "Best Full-Stack Development Project Ideas in 2024",
      date: "25-Mar-2024",
    },
    {
      img: "https://media.licdn.com/dms/image/sync/D5627AQEM-jp9ZV4upA/articleshare-shrink_800/0/1712319017056?e=2147483647&v=beta&t=FEZm4b6blyVZ3ORPZwtNrge5E24io0CeUo7a3qGVa9Q",
      head: "Full Stack Development",
      content: "How does Apache work? A detailed introduction to Apache",
      date: "26-Mar-2024",
    },
    {
      img: "https://ares.decipherzone.com/blog-manager/uploads/ckeditor_Top%2010%20NoSQL%20Databases%20in%202022.png",
      head: "Full Stack Development",
      content: "10 Best Database Management Systems For Software Developers",
      date: "28-Mar-2024",
    },
    {
      img: "https://builtin.com/sites/www.builtin.com/files/styles/ckeditor_optimize/public/inline-images/Data%20Science%201600x800.jpg",
      head: "Data Science Program",
      content: "Top 10 High Paying Non-Coding Jobs in Data Science in 2024",
      date: "25-Mar-2024",
    },
    {
      img: "https://www.analytixlabs.co.in/blog/wp-content/uploads/2020/07/image-2-41-600x600.jpg",
      head: "Data Science Program",
      content: "Roles and Responsibilities of a Data Scientist in 2024",
      date: "26-Mar-2024",
    },
    {
      img: "https://datamites.com/blog/uploads/images/2023/11/image_750x_6544f31e586d0.jpg",
      head: "Data Science Program",
      content: "How to become a Data Scientist after Mechanical Engineering?",
      date: "28-Mar-2024",
    },
    {
      img: "https://cdn.elearningindustry.com/wp-content/uploads/2022/12/shutterstock_2037142181.jpg",
      head: "Cyber Security",
      content: "Cybersecurity Vs Ethical Hacking: Top 10 Differences",
      date: "25-Mar-2024",
    },
    {
      img: "https://www.kaspersky.co.in/content/en-in/images/repository/isc/2017-images/What-is-Cyber-Security.jpg",
      head: "Cyber Security",
      content: "8 Different Types of Cybersecurity and Threats Involved",
      date: "26-Mar-2024",
    },
    {
      img: "https://pbs.twimg.com/media/FiKtCsBWYAMAj4_.jpg",
      head: "Cyber Security",
      content: "The Ultimate Cybersecurity Roadmap for Beginners",
      date: "28-Mar-2024",
    },
    {
      img: "https://media.geeksforgeeks.org/wp-content/uploads/20230926163338/Java-Full-Stack.png",
      head: "Career Development Program",
      content: "Java Full Stack Development Course",
      date: "25-Mar-2024",
    },
    {
      img: "https://developerguru.in/images/courses/mern_stack.gif",
      head: "Career Development Program",
      content: "MERN Full Stack Development",
      date: "26-Mar-2024",
    },
    {
      img: "https://www.analytixlabs.co.in/blog/wp-content/uploads/2020/11/Image-02-1-1-3-1024x764.jpg",
      head: "Career Development Program",
      content: "Data Science Course",
      date: "28-Mar-2024",
    },
  ];

  return (
    <div>
      <BrowserRouter>
        <div>
          <Navbar></Navbar>
        </div>
        <Routes>
          <Route path="/" element={<All data={data} />} />
          <Route path="/fullstackdevelopment" element={<Fsd data={data} />} />
          <Route path="/datascience" element={<DataScience data={data} />} />
          <Route path="/cybersecurity" element={<Cybersec data={data} />} />
          <Route path="/career" element={<Career data={data} />} />
          <Route path="*" element={<Nopage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
