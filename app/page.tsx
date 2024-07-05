import Header from './ui/header';
import About from './component/about';
import CaseStudy from './component/case_study';
import Contact from './component/contact';
import Hero from './component/hero';
import Skills from './component/skills';

const words = [
  { text: 'Nhat', className: 'text-[#F7EDE2] ' },
  { text: 'Linh', className: 'text-[#F7EDE2] ' },
  { text: 'NGUYEN', className: 'text-[#F7EDE2] ' },
];
const words2 = [
  { text: 'FRONT-END', className: 'text-[#F7EDE2] ' },
  { text: 'DEVELOPER', className: 'text-[#F7EDE2] ' },
];

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex flex-row overflow-x-hidden w-[500vw] h-screen overflow-y-auto">
        <Hero />
        <About />
        <CaseStudy />
        <Contact />
        <Skills />
      </div>
    </>
  );
}
