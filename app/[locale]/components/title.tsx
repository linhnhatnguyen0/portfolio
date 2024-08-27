'use client';
import { useTranslation } from 'react-i18next';

export default function Title() {
  const { t } = useTranslation('common');
  return (
    <h1 className="text-4xl sm:text-6xl lg:text-8xl mb-4 lg:mb-10">
      {t('cases-title')}
    </h1>
  );
}
