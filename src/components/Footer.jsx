import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { t, lang, setLang } = useLanguage();

  const toggleLang = () => setLang((l) => (l === 'en' ? 'vi' : 'en'));

  return (
    <footer className="w-full bg-green-900 text-white mt-8">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex items-center justify-end">
          <div className="text-right">
            <div className="text-sm text-white">
              {t('footer.copyright')}
            </div>
            <div className="text-xs text-white mt-2">
              {t('footer.address')} &nbsp; | &nbsp; {t('footer.contactPrefix')} <a href={`mailto:${t('footer.contactEmail')}`} className="underline">{t('footer.contactName')}</a> at <a href={`mailto:${t('footer.contactEmail')}`} className="underline">{t('footer.contactEmail')}</a>
            </div>
            <div className="mt-4">
              <button onClick={toggleLang} className="px-3 py-1 bg-green-700 hover:bg-green-600 rounded text-white font-semibold">
                {lang === 'en' ? 'Tiếng Việt' : 'English'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
