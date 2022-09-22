import Hero from "./Hero";
import Project from "./Project";
import About from "./About";
import Contact from "./Contact";
import Nav from "./Nav";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Project />
      <About />
      <Contact />
    </>
  );
}
