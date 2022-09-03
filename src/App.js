import { createContext } from "react";

//images
import client1 from "./images/clients/1.png";
import client2 from "./images/clients/2.png";
import client3 from "./images/clients/3.png";
import client4 from "./images/clients/4.png";
import client5 from "./images/clients/5.png";

//Components
import NavigationBar from "./components/NavigationBar.js";
import Section1 from "./components/Section1.js";
import Carousel from "./components/Carousel.js";
import Section2 from "./components/Section2.js";
import Section3 from "./components/Section3";

export const userThemeContext = createContext();

const themeColors = {
  primary: "#175B45",
  primaryLight1: "#004B0C",
  primaryLight2: "#29A37A",
  primaryLightest: "#009362",
  primaryDark:"#29493E",
  black: "#040404",
  white: "#FFFFFF",
  dark: "false",
};
const slides = [
  {
    title: "Slide #1",
    content: () => client1,
  },
  {
    title: "Slide #2",
    content: () => client2,
  },
  {
    title: "Slide #3",
    content: () => client3,
  },
  {
    title: "Slide #4",
    content: () => client4,
  },
  {
    title: "Slide #5",
    content: () => client5,
  },
];

function App() {
  return (
    <userThemeContext.Provider value={themeColors}>
      <div className="App">
        <header>
          <NavigationBar></NavigationBar>
        </header>
        <section>
          <Section1></Section1>
        </section>
        <section>
          <Carousel slides={slides}></Carousel>
        </section>
        <section>
          <Section2></Section2>
        </section>
        <section>
          <Section3></Section3>
        </section>
      </div>
    </userThemeContext.Provider>
  );
}

export default App;
