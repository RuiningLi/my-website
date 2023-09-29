import { Helmet } from 'react-helmet-async';
import PageTitle from '../../components/PageTitle';
import { useTranslation } from '../../contexts/translation';

interface ExperienceSpotifyProps {}

function ExperienceSpotify(_props: ExperienceSpotifyProps) {
  const { t } = useTranslation({
    en: async () => (await import('./GS-en')).default,
    zh: async () => (await import('./GS-zh')).default,
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
          title="Goldman Sachs"
          role={t('ROLE')}
          date={t('DATE')}
        />
      </article>
    </>
  );
}

export default ExperienceSpotify;
