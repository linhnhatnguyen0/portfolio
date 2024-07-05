import Card from '../ui/card';
import projetS5 from '@/public/project-s5.png';
import portfolioImage from '@/public/project-portfolio.png';
import projetS3 from '@/public/project-s3.png';
export default function CaseStudy() {
  return (
    <>
      <div
        id="case"
        className="w-screen flex items-center flex-col justify-start h-screen"
      >
        <h1 className="mt-24 font-bold text-[80px] mb-12">Case study</h1>
        <div className="grid grid-cols-3">
          <Card
            link="#"
            image={portfolioImage}
            title="Personal portfolio"
            detail="Personal portfolio website made with Next.js and Tailwind CSS. The website is made to showcase my work and to give a brief introduction to who I am."
          />
          <Card
            link="#"
            image={projetS3}
            title="Third semester project"
            detail="Collaborational project on making a website. The website is made for the university Paris-Saclay's library"
          />
          <Card
            link="#"
            image={projetS5}
            title="Fifth semester project Unity"
            detail="Collaborational project on making a game with Unity. The game is a 3D platformer with a focus on the mechanics of the game. The game is called 'Blockade'."
          />
        </div>
      </div>
    </>
  );
}
