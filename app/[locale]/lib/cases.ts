'use server';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import moment from 'moment';
import { ArticleItem } from '../types/index';
const articlesDirectory = path.join(
  process.cwd(),
  'app',
  '[locale]',
  'cases-study'
);

const getArticles = (): ArticleItem[] => {
  const fileNames = fs.readdirSync(articlesDirectory);

  const allArticlesData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');

    const fullPath = path.join(articlesDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf-8');

    const matterResult = matter(fileContents);
    const content = matterResult.content.toString();
    return {
      id,
      title: matterResult.data.title,
      image: matterResult.data.image,
      date: moment(matterResult.data.date, 'DD-MM-YYYY').format(
        'MMMM Do, YYYY'
      ),
      content,
    };
  });

  return allArticlesData;
};

export default getArticles;

export const getArticleById = (id: string) => {
  const fullPath = path.join(articlesDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf-8');
  const matterResult = matter(fileContents);
  const content = matterResult.content.toString();
  return {
    id,
    content,
    image: matterResult.data.image,
    title: matterResult.data.title,
    date: moment(matterResult.data.date, 'DD-MM-YYYY').format('MMMM Do, YYYY'),
  };
};
