import { React } from "react";
import classes from "./Project.module.css";
import Info from "../Projects/Info";
import Image from "../Projects/Image";

const Project = (props) => {
  const projects = [
    {
      name: "Expense Tracker",
      para: "Expense tracker is a web application that tracks your income and expenses! In this application you will be prompted to enter in any transaction you want to record. Based on the inputted information, it'll update the income/expenses you currently have. Your transaction history is also saved and displayed.",
      link: "https://github.com/yuenkev/ExpenseTracker",
      img: true,
    },
    {
      name: "Volcano Tracker",
      para: 'Volcano tracker is a react web application game that tracks all the volcano\'s on Earth!  When a volcano icon is clicked on the map, it will display the ID of the volcano, name/title of the volcano, and the link for more information. This was done by using "Google Maps API" and "NASA Open API"!',
      link: "https://github.com/yuenkev/VolcanoTracker",
      img: false,
    },
  ];

  return (
    <div className={classes.project} id="project">
      {projects.map((proj) => {
        return (
        <div className={classes.p}>
          <Info name={proj.name} para={proj.para} link={proj.link}></Info>
          <Image img={proj.img}></Image>
        </div>);

      })}
    </div>
  );
};

export default Project;
