import Header from './ui/header';
import About from './component/about';
import CaseStudy from './component/case_study';
import Contact from './component/contact';
import Hero from './component/hero';
import Skills from './component/skills';

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex flex-col w-full font-sans">
        <Hero />
        <About />
        <CaseStudy />
        <Contact />
        {/* <Skills /> */}
      </div>
    </>
  );
}
