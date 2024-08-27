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
        className="w-screen flex items-center flex-col justify-start h-screen"
      >
        <Title />
        <div className="grid grid-cols-3">
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
