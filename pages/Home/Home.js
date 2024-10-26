import "./Home.css";
import { cleanPage } from "../../utils/cleanPage";

export const Home = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
  <section class="background"></section>
    <div class="home">
    <div class="glass">
    <p class="hello">Hey, I'm</p>
    <h1>Unai Rojas</h1>
    <p>Born in Valencia, living in Seville, Spain. I'm studying the PROMETEO program at THE POWER SCHOOL that means I'm a Web Applications Development and Full Stack Development student. Here you can take a look of the skills I'm learning. I hope you like it. </p>
    <a href="mailto:unairojasquiros@gmail.com">Contact →</a>
    </div>
    </div>`;
};