import Header from './ui/header';
import About from './component/about';
import CaseStudy from './component/case_study';
import Contact from './component/contact';
import Hero from './component/hero';
import Skills from './component/skills';

const words = [
  { text: 'Nhat', className: 'text-[#8E705B] ' },
  { text: 'Linh', className: 'text-[#8E705B] ' },
  { text: 'NGUYEN', className: 'text-[#8E705B] ' },
];
const words2 = [
  { text: 'FRONT-END', className: 'text-[#8E705B] ' },
  { text: 'DEVELOPER', className: 'text-[#8E705B] ' },
];

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
