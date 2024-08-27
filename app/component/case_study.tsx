import Card from '../ui/card';
import projetS5 from '@/public/project-s5.png';
import portfolioImage from '@/public/project-portfolio.png';
import projetS3 from '@/public/project-s3.png';
import Article from './article';
import getArticles from '../lib/cases';
import { useEffect } from 'react';
import { useTranslation } from 'next-i18next';

export default function CaseStudy() {
  const articles = getArticles();
  const { t } = useTranslation('common');
  return (
    <>
      <div
        id="case"
        className="w-screen flex items-center flex-col justify-start h-screen"
      >
        <h1 className="mt-24 font-bold text-[80px] mb-12">
          {t['cases-title']}
        </h1>
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
