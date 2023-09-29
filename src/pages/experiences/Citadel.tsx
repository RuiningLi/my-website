import { Helmet } from 'react-helmet-async';
import PageTitle from '../../components/PageTitle';
import { useTranslation } from '../../contexts/translation';

interface ExperienceCitadelProps {}

function ExperienceCitadel(_props: ExperienceCitadelProps) {
  const { t } = useTranslation({
    en: async () => (await import('./Citadel-en')).default,
    zh: async () => (await import('./Citadel-zh')).default,
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
          title="Citadel"
          role={t('ROLE')}
          date={t('DATE')}
        />
      </article>
    </>
  );
}

export default ExperienceCitadel;
