import { React } from "react";
import classes from "./Project.module.css";
import Info from "../Projects/Info";
import Image from "../Projects/Image";

import img1 from "./Images/expenseTracker.png";
import img2 from "./Images/clientWeb.png";
import img3 from "./Images/volTracker.png";

const Project = (props) => {
  const projects = [
    {
      name: "Expense Tracker",
      para: "Expense tracker is a web application that tracks your income and expenses! In this application you will be prompted to enter in any transaction you want to record. Based on the inputted information, it'll update the income/expenses you currently have. Your transaction history is also saved and displayed.",
      link: "https://github.com/yuenkev/ExpenseTracker",
      imgNum: 1,
    },
    {
      name: "Volcano Tracker",
      para: 'Volcano tracker is a react web application game that tracks all the volcano\'s on Earth!  When a volcano icon is clicked on the map, it will display the ID of the volcano, name/title of the volcano, and the link for more information. This was done by using "Google Maps API" and "NASA Open API"!',
      link: "https://github.com/yuenkev/VolcanoTracker",
      imgNum: 2,
    },
    {
      name: "Client Portfolio",
      para: "This web application is tailored for a personal portfolio, offering an array of features, including the seamless integration of AWS SES, Lambda, and API Gateway. These capabilities empower the client to effortlessly receive emails directly through their websites.",
      link: "https://github.com/yuenkev/norah-react-website",
      imgNum: 3,
    },
  ];

  return (
    <div className={classes.project} id="project">
      {projects.map((proj) => {
        return (
          <div className={classes.p}>
            <Info name={proj.name} para={proj.para} link={proj.link}></Info>
            <Image img={proj.imgNum}></Image>
          </div>
        );
      })}
    </div>
  );
};

export default Project;
