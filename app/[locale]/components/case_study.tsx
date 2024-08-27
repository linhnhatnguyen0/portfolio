import projetS5 from '@/public/project-s5.png';
import Article from './article';
import getArticles from '../lib/cases';
import Title from './title';

export default function CaseStudy() {
  const articles = getArticles();
  return (
    <>
      <div
        id="case"
        className="w-full flex items-center flex-col justify-start min-h-full px-4 sm:px-8 lg:px-24"
      >
        <Title />
        <div className="h-1 lg:h-3 bg-[#8e705b] w-32 ml-2 mb-10"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 w-full">
          {articles.map((article) => (
            <Article
              key={article.id}
              id={article.id}
              content={article.content}
              date={article.date}
              title={article.title}
              image={projetS5}
            />
          ))}
        </div>
      </div>
    </>
  );
}
