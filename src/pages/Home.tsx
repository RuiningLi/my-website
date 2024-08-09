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

import MagicPonyGIF from '../../assets/publications/MagicPony/MagicPony_thumbnail.gif';
import Farm3DGIF from '../../assets/publications/Farm3D/Farm3D_thumbnail.gif';
import FaunaGIF from '../../assets/publications/3DFauna/3DFauna_thumbnail.gif';
import DragAPartGIF from '../../assets/publications/DragAPart/DragAPart_thumbnail.gif';
import PuppetMasterGIF from '../../assets/publications/PuppetMaster/PuppetMaster_thumbnail.gif';

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
              title='Puppet-Master: Scaling Interactive Video Generation as a Motion Prior for Part-Level Dynamics'
              venue='ArXiv'
              year='2024'
              authors={["Ruining Li", "Chuanxia Zheng", "Christian Rupprecht", "Andrea Vedaldi"]}
              abstract='Puppet-Master is an interactive video generative model that can serve as a motion prior for
              part-level dynamics. At test time, given a single image and a sparse set of motion trajectories 
              (i.e., drags), Puppet-Master can synthesize a video depicting realistic part-level motion faithful to 
              the given drag interactions. It is trained on synthetic renderings of carefully curated animated 3D models, 
              Objaverse-Animation-HQ.'
              paperLink='https://arxiv.org/pdf/2408.04631.pdf'
              pageLink='https://vgg-puppetmaster.github.io/'
              codeLink='https://github.com/RuiningLi/puppet-master'
              bibtex='@article{li2024puppetmaster,
                title   = {Puppet-Master: Scaling Interactive Video Generation as a Motion Prior for Part-Level Dynamics},
                author  = {Li, Ruining and Zheng, Chuanxia and Rupprecht, Christian and Vedaldi, Andrea},
                journal = {arXiv preprint arXiv:2408.04631},
                year    = {2024}
              }'
              video={<img src={PuppetMasterGIF} />} />
          </div>
          {/* dummies  */}
          <div className={classes.newLine}></div>
          <div className={classes.newLine}></div>
          <div className={classes.newLine}></div>
          <div className={classes.newLine}></div>
          <div className={classes.newLine}></div>
          <div className={classes.newLine}></div>
          <div className={classes.newLine}></div>
          <div className={classes.newLine}></div>
          <div className={classes.newLine}></div>
          <div className={classes.newLine}></div>
          <div className={classes.newLine}></div>
          <div>
            <PublicationCard
              title='DragAPart: Learning a Part-Level Motion Prior for Articulated Objects'
              venue='ECCV'
              year='2024'
              authors={["Ruining Li", "Chuanxia Zheng", "Christian Rupprecht", "Andrea Vedaldi"]}
              abstract='Our method, DragAPart, learns a motion prior for articulated objects with diffusion models. 
              Differently from prior works that used drags to move an object, each drag in DragAPart represents a part-level 
              interaction, resulting in a physically plausible deformation of the object shape. DragAPart is trained on a new 
              synthetic dataset, Drag-a-Move, for this task, and generalizes well to real data and even unseen categories. 
              The trained model is immediately useful for applications, such as segmenting movable parts and analyzing motion 
              prompted by a drag.'
              paperLink='https://arxiv.org/pdf/2403.15382.pdf'
              pageLink='https://dragapart.github.io/'
              demoLink='https://huggingface.co/spaces/rayli/DragAPart'
              codeLink='https://github.com/RuiningLi/DragAPart'
              bibtex='@article{li2024dragapart,
                title   = {Dragapart: Learning a part-level motion prior for articulated objects},
                author  = {Li, Ruining and Zheng, Chuanxia and Rupprecht, Christian and Vedaldi, Andrea},
                journal = {arXiv preprint arXiv:2403.15382},
                year    = {2024}
              }'
              video={<img src={DragAPartGIF} />} />
          </div>
          {/* dummies  */}
          <div className={classes.newLine}></div>
          <div className={classes.newLine}></div>
          <div className={classes.newLine}></div>
          <div className={classes.newLine}></div>
          <div className={classes.newLine}></div>
          <div className={classes.newLine}></div>
          <div className={classes.newLine}></div>
          <div className={classes.newLine}></div>
          <div className={classes.newLine}></div>
          <div className={classes.newLine}></div>
          <div className={classes.newLine}></div>
          <div>
            <PublicationCard
              title='Learning the 3D Fauna of the Web'
              venue='CVPR'
              year='2024'
              authors={["Zizhang Li*", "Dor Litvak*", "Ruining Li", "Yunzhi Zhang", "Tomas Jakab", "Christian Rupprecht", "Shangzhe Wu", "Andrea Vedaldi", "Jiajun Wu"]}
              abstract='Our method, 3D-Fauna, learns a pan-category deformable 3D model of more than 100 different animal species using only 2D Internet images 
              as training data, without any prior shape models or keypoint annotations. At test time, the model can turn a single image of an quadruped instance 
              into an articulated, textured 3D mesh in a feed-forward manner, ready for animation and rendering.'
              paperLink='https://arxiv.org/pdf/2401.02400.pdf'
              demoLink='https://huggingface.co/spaces/Kyle-Liz/3DFauna_demo'
              pageLink='https://kyleleey.github.io/3DFauna/'
              bibtex='@inproceedings{li2024learning,
                title     = {Learning the 3D Fauna of the Web},
                author    = {Li, Zizhang and Litvak, Dor and Li, Ruining and Zhang, Yunzhi and Jakab, Tomas and Rupprecht, Christian and Wu, Shangzhe and Vedaldi, Andrea and Wu, Jiajun},
                booktitle = {CVPR},
                year      = {2024}
              }'
              video={<img src={FaunaGIF} />} />
          </div>
          {/* dummies  */}
          <div className={classes.newLine}></div>
          <div className={classes.newLine}></div>
          <div className={classes.newLine}></div>
          <div className={classes.newLine}></div>
          <div className={classes.newLine}></div>
          <div className={classes.newLine}></div>
          <div className={classes.newLine}></div>
          <div className={classes.newLine}></div>
          <div className={classes.newLine}></div>
          <div className={classes.newLine}></div>
          <div className={classes.newLine}></div>
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
              bibtex='@inproceedings{jakab2024farm3d,
                title     = {{Farm3D}: Learning Articulated 3D Animals by Distilling 2D Diffusion},
                author    = {Jakab, Tomas and Li, Ruining and Wu, Shangzhe and Rupprecht, Christian and Vedaldi, Andrea},
                booktitle = {3DV},
                year      = {2024}
              }'
              video={<img src={Farm3DGIF} />} />
          </div>
          {/* dummies  */}
          <div className={classes.newLine}></div>
          <div className={classes.newLine}></div>
          <div className={classes.newLine}></div>
          <div className={classes.newLine}></div>
          <div className={classes.newLine}></div>
          <div className={classes.newLine}></div>
          <div className={classes.newLine}></div>
          <div className={classes.newLine}></div>
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
              bibtex='@inproceedings{wu2023magicpony,
                author    = {Shangzhe Wu and Ruining Li and Tomas Jakab and Christian Rupprecht and Andrea Vedaldi},
                title     = {{MagicPony}: Learning Articulated 3D Animals in the Wild},
                booktitle = {CVPR},
                year      = {2023}
              }'
              video={<img src={MagicPonyGIF} />} />
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
