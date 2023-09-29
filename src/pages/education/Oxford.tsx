import { Helmet } from 'react-helmet-async';
import PageTitle from '../../components/PageTitle';
import { useTranslation } from '../../contexts/translation';

interface AGSBProps {}

function AGSB(_props: AGSBProps) {
  const { t } = useTranslation({
    en: async () => (await import('./Oxford-en')).default,
    zh: async () => (await import('./Oxford-zh')).default,
  });
  return (
    <>
      <Helmet>
        <title>{t('TITLE')}</title>
        <meta name="description" content={t('DESCRIPTION')} />
      </Helmet>
      <article>
        <PageTitle
          type="EDUCATION"
          title={t('OXFORD')}
          role={t('COURSE')}
          date={t('DATE')}
        />
      </article>
    </>
  );
}

export default AGSB;
