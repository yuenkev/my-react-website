import classes from "./App.module.css";

import Header from "./Components/UI/Header/Header";
import About from "./Components/UI/About/About";
import Project from "./Components/UI/Projects/Project";
import Footer from "./Components/UI/Footer/Footer";

function App() {
  console.log(window.location);
  return (
    <div className="App">
      <Header className={classes.header} id="header"></Header>
      <About className={classes.about}></About>
      <Project className={classes.project} id="project"></Project>
      <Footer className={classes.footer} id="footer"></Footer>
    </div>
  );
}

export default App;
