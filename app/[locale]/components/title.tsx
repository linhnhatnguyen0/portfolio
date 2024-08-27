'use client';
import { useTranslation } from 'react-i18next';

export default function Title() {
  const { t } = useTranslation('common');
  return (
    <h1 className="mt-24 font-bold text-[80px] mb-12">{t('cases-title')}</h1>
  );
}
