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
        <iframe
          className="rounded-lg fixed bottom-5 right-1/2 transform translate-x-1/2"
          src="https://open.spotify.com/embed/track/2plbrEY59IikOBgBGLjaoe?utm_source=generator"
          width="20%"
          height="80"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </TranslationProvider>
  );
}
