import Header from './ui/header';
import About from './component/about';
import CaseStudy from './component/case_study';
import Contact from './component/contact';
import Hero from './component/hero';
import Skills from './component/skills';
import { appWithTranslation } from 'next-i18next';

function Home() {
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
export default appWithTranslation(Home);
