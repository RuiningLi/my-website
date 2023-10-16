import { lazy } from 'react';
import { Helmet } from 'react-helmet-async';
import Grid from '../components/Grid';
import PublicationCard from '../components/PublicationCard';
import ExperienceCard from '../components/ExperienceCard';
import EducationCard from '../components/EducationCard';
import { useTranslation } from '../contexts/translation';
import { routes } from '../utils/routes';
import ProfilePic from '../../assets/profile_pic.jpg';
import OxfordSvg from '../../assets/Oxford.svg';
import classes from './Home.module.css';
import { getLocalePath } from '../utils/pathname';

import MagicPonyMP4 from '../../assets/publications/MagicPony/MagicPony_thumbnail.mp4';
import Farm3DMP4 from '../../assets/publications/Farm3D/Farm3D_thumbnail.mp4';

import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import { SiGooglescholar } from 'react-icons/si';
import { MdMarkEmailUnread } from 'react-icons/md';

const Citadel = lazy(() => import('../logos/Citadel'));
const GoldmanSachs = lazy(() => import('../logos/GoldmanSachs'));
const PonyAI = lazy(() => import('../logos/PonyAI'));

interface HomeProps { }

function Home(_props: HomeProps) {
  const { t, locale, isLoading } = useTranslation({
    en: async () => (await import('./Home-en')).default,
    zh: async () => (await import('./Home-zh')).default,
  });
  return (
    <>
      <Helmet>
        <title>{t('TITLE')}</title>
        <meta name="description" content={t('DESCRIPTION')} />
      </Helmet>
      {isLoading ? (
        <div className={classes.heroSkeleton} />
      ) : (
        <div className={classes.heroContainer}>
          <div className={classes.photo}>
            <img src={ProfilePic} aria-hidden />
            <span className={classes.photoNote}>{t("PROFILE_NOTE")}</span>
            <div>
              <div>
                <a
                  className={classes.socialLink}
                  href="mailto:ruining.li@linacre.ox.ac.uk"
                  target="_blank"
                  rel="nofollow me noopener noreferrer"
                >
                  <MdMarkEmailUnread />
                  <span>{t('EMAIL')}</span>
                </a>
                <a
                  className={classes.socialLink}
                  href="https://github.com/RuiningLi"
                  target="_blank"
                  rel="nofollow me noopener noreferrer"
                >
                  <AiFillGithub />
                  <span>{t("GITHUB")}</span>
                </a>
                <a
                  className={classes.socialLink}
                  href="https://scholar.google.com/citations?user=JmQkXLUAAAAJ&hl=en"
                  target="_blank"
                  rel="nofollow me noopener noreferrer"
                >
                  <SiGooglescholar />
                  <span>{t("GOOGLE_SCHOLAR")}</span>
                </a>
                <a
                  className={classes.socialLink}
                  href="https://twitter.com/RayLi234"
                  target="_blank"
                  rel="nofollow me noopener noreferrer"
                >
                  <AiFillTwitterCircle />
                  <span>{t('TWITTER')}</span>
                </a>
                <a
                  className={classes.socialLink}
                  href="https://www.linkedin.com/in/ruining-ray-li/"
                  target="_blank"
                  rel="nofollow me noopener noreferrer"
                >
                  <AiFillLinkedin />
                  <span>{t('LINKEDIN')}</span>
                </a>
              </div>
            </div>
          </div>
          <div className={classes.text}>
            <h3>
              {t('TITLE_1')}
            </h3>
            <div className={classes.paragraph}>
              {t("BRIEF_1", { interpolate: true })}
            </div>
            <div className={classes.paragraph}>
              {t("BRIEF_2", { interpolate: true })}
            </div>
            <p>
            </p>
          </div>
        </div>
      )}

      <div className={classes.sectionContainer}>
        <h2>{t('PUBLICATIONS_TITLE')}</h2>

        <Grid>
          <div>
            <PublicationCard
              title='Farm3D: Learning Articulated 3D Animals by Distilling 2D Diffusion'
              venue='3DV'
              year='2024'
              authors={["Tomas Jakab*", "Ruining Li*", "Shangzhe Wu", "Christian Rupprecht", "Andrea Vedaldi"]}
              abstract='Farm3D learns an articulated object category entirely from "free" virtual supervision from a 2D diffusion-based 
              image generator. We propose a framework that employs an image generator, such as Stable Diffusion, to produce training data 
              for learning a reconstruction network from the ground up. Additionally, the diffusion model is incorporated as a scoring 
              mechanism to further improve learning. Our method yields a monocular reconstruction network capable of generating controllable 
              3D assets from a single input image, whether real or generated, in a matter of seconds.'
              paperLink='https://arxiv.org/pdf/2304.10535.pdf'
              pageLink='https://farm3d.github.io/'
              video={<video autoPlay loop><source src={Farm3DMP4} type="video/mp4"></source></video>} />
          </div>
          {/* dummies  */}
          <div className={classes.newLine}></div>
          <div className={classes.newLine}></div>
          <div className={classes.newLine}></div>
          <div>
            <PublicationCard
              title='MagicPony: Learning Articulated 3D Animals in the Wild'
              venue='CVPR'
              year='2023'
              authors={["Shangzhe Wu*", "Ruining Li*", "Tomas Jakab*", "Christian Rupprecht", "Andrea Vedaldi"]}
              abstract='We consider the problem of predicting the 3D shape, articulation, viewpoint, texture, and lighting of an articulated
              animal like a horse given a single test image as input. We present a new method, dubbed MagicPony, that learns this 
              predictor purely from in-the-wild single-view images of the object category, with minimal assumptions about the topology
              of deformation.'
              paperLink='https://arxiv.org/pdf/2211.12497.pdf'
              codeLink='https://github.com/elliottwu/MagicPony'
              videoLink='https://www.youtube.com/watch?v=KoLzpESstLk'
              pageLink='https://3dmagicpony.github.io/'
              video={<video autoPlay loop><source src={MagicPonyMP4} type="video/mp4"></source></video>} />
          </div>
        </Grid>
      </div>

      <div className={classes.sectionContainer}>
        <h2>{t('EXPERIENCES_TITLE')}</h2>

        <Grid>
          <div>
            <ExperienceCard
              logo={<Citadel />}
              dates={t('CITADEL_DATE')}
              to={getLocalePath(routes.citadel, locale)}
            />
          </div>
          <div>
            <ExperienceCard
              logo={<GoldmanSachs />}
              dates={t('GS_DATE')}
              to={getLocalePath(routes.gs, locale)}
            />
          </div>
          <div>
            <ExperienceCard
              logo={<PonyAI />}
              dates={t('PONYAI_DATE')}
              to={getLocalePath(routes.ponyai, locale)}
            />
          </div>
        </Grid>
      </div>
      <div className={classes.sectionContainer}>
        <h2>{t('EDUCATION_TITLE')}</h2>

        <Grid>
          <div>
            <EducationCard
              logo={
                <picture>
                  <source srcSet={OxfordSvg} type="image/svg" />
                  <source srcSet={OxfordSvg} type="image/svg" />
                  <img
                    src={OxfordSvg}
                    alt={t('OXFORD')}
                    title={t('OXFORD')}
                    height="100%"
                  />
                </picture>
              }
              university={t('OXFORD')}
              dates={t('OXFORD_DATE')}
              to={getLocalePath(routes.oxford, locale)}
            />
          </div>
        </Grid>
      </div>
    </>
  );
}

export default Home;
