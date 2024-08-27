import Header from './ui/header';
import About from './components/about';
import CaseStudy from './components/case_study';
import Contact from './components/contact';
import Hero from './components/hero';
import Skills from './components/skills';
import initTranslations from '../i18n';
import TranslationProvider from '@/app/[locale]/components/TranslationProvider';

type Locale = 'en' | 'fr' | string;

interface HomeProps {
  params: {
    locale: Locale;
  };
}

export default async function Home({ params: { locale } }: HomeProps) {
  const { t, resources } = await initTranslations(locale, ['common']);
  return (
    <TranslationProvider
      resources={resources}
      locale={locale}
      namespaces={['common']}
    >
      <Header />
      <div className="flex flex-col w-full font-sans">
        <Hero />
        <About />
        <CaseStudy />
        <Contact />
        {/* <Skills /> */}
      </div>
    </TranslationProvider>
  );
}
