import { ComponentProps, Suspense } from 'react';
import { AiFillCalculator, AiFillFilePdf, AiFillGithub, AiFillVideoCamera } from 'react-icons/ai';
import { FiExternalLink } from 'react-icons/fi';
import Banner from './Banner';
import classes from './PublicationCard.module.css';
import authors_to_website from '../utils/authors';
import { useState } from 'react';

interface PublicationCardProps extends ComponentProps<typeof Banner> {
  title: string;
  venue: string;
  year: string;
  authors: string[];
  abstract: string;
  video?: React.ReactNode;
  videoSrc?: string;
  paperLink?: string;
  codeLink?: string;
  pageLink?: string;
  videoLink?: string;
  arXivLink?: string;
  demoLink?: string;
  bibtex?: string;
}

function PublicationCard({
  title,
  venue,
  year,
  authors,
  abstract,
  video,
  videoSrc,
  paperLink,
  codeLink,
  pageLink,
  videoLink,
  arXivLink,
  demoLink,
  bibtex,
  ...rest
}: PublicationCardProps) {
  const me = "Ruining Li";
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <Banner {...rest}>
      <div className={classes.card}>
        <div className={classes.visual} aria-hidden>
          {video && (
            <Suspense fallback={<div className={classes.skeleton} />}>
              {video}
            </Suspense>
          )}
          {videoSrc && <video src={videoSrc} controls />}
        </div>
        <div className={classes.text}>
          <h4 className={classes.title}>{title}</h4>
          <p className={classes.author}>{authors.map(function(name) {
            return (
            <span className={classes.name}>
              <a 
                {...(name.replace('*', '') === me ? {} : { href : authors_to_website(name) })}
                target='_blank'
              >
                <span>{name}</span>
              </a>
              <span>{(name === authors[authors.length - 1] ? '' : ",  ")}</span>
            </span>);
          })}</p>
          <div className={classes.venue}>
            <h6>{venue} {year}</h6>
          </div>
          <div className={classes.abstract}>
            <div className={classes.tldr}>TLDR</div>
            <span>{abstract}</span>
          </div>
          <div className={classes.bibtex}>
            {isModalOpen && (
              <div>
                {bibtex}
              </div>
            )}
          </div>
          <div >
            {bibtex && (
                <div className={classes.detailsIndicator} onClick={openModal}>
                  <FiExternalLink/>
                  <span>BibTex</span>
                </div>
              )}
            {demoLink && (
                <div className={classes.detailsIndicator} onClick={(_) => {
                  window.open(demoLink, "_blank");
                }}>
                  <AiFillCalculator/>
                  <span>Demo</span>
                </div>
            )}
            {videoLink && (
                <div className={classes.detailsIndicator} onClick={(_) => {
                  window.open(videoLink, "_blank");
                }}>
                  <AiFillVideoCamera/>
                  <span>Video</span>
                </div>
              )}
            {paperLink && (
                <div className={classes.detailsIndicator} role='presentation' onClick={(_) => {
                  window.open(paperLink, "_blank");
                }}>
                  <AiFillFilePdf/>
                  <span>arXiv</span>
                </div>
              )}
            {codeLink && (
                <div className={classes.detailsIndicator} onClick={(_) => {
                  window.open(codeLink, "_blank");
                }}>
                  <AiFillGithub/>
                  <span>Code</span>
                </div>
              )}
            {pageLink && (
                <div className={classes.detailsIndicator} onClick={(_) => {
                  window.open(pageLink, "_blank");
                }}>
                  <FiExternalLink/>
                  <span>Project Page</span>
                </div>
              )}
          </div>
        </div>
      </div>
    </Banner>
  );
}

export default PublicationCard;
