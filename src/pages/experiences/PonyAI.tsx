import { Helmet } from 'react-helmet-async';
import PageTitle from '../../components/PageTitle';
import { useTranslation } from '../../contexts/translation';

interface ExperienceWtcProps {}

function ExperienceWtc(_props: ExperienceWtcProps) {
  const { t } = useTranslation({
    en: async () => (await import('./PonyAI-en')).default,
    zh: async () => (await import('./PonyAI-zh')).default,
  });
  return (
    <>
      <Helmet>
        <title>{t('TITLE')}</title>
        <meta name="description" content={t('DESCRIPTION')} />
      </Helmet>
      <article>
        <PageTitle
          type="EXPERIENCE"
          title="Pony.ai"
          role={t('ROLE')}
          date={t('DATE')}
        />
      </article>
    </>
  );
}

export default ExperienceWtc;
