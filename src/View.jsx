import React from 'react';
import { Container } from 'semantic-ui-react';
import Icon from '@plone/volto/components/theme/Icon/Icon';
import PropTypes from 'prop-types';
import './videoHero.css';
import moreSVG from '@plone/volto/icons/circle-bottom.svg';
import { UniversalLink } from '@plone/volto/components';

const VideoHero = ({ data }) => {
  const sizeClass = data.size === 'full' ? 'full' : '';

  return (
    <div className={`video-hero ${sizeClass} text-${data.textPosition}`}>

      <div className='background-video'>
        <video autoPlay muted loop playsInline>
          {data.size === 'full' ? (
            <>
              {data.video2kUrl && (
                <source
                  src={`${data.video2kUrl}/@@download/file`}
                  type='video/mp4'
                  media='(min-width: 1280px) and (min-height: 720px)'
                  width='2560'
                  height='1440'
                />
              )}
              {data.videohdUrl && (
                <source
                  src={`${data.videohdUrl}/@@download/file`}
                  type='video/mp4'
                  media='(min-width: 769px) and (max-width: 1280px), (min-height: 433px) and (max-height: 720px)'
                  width='1280'
                  height='720'
                />
              )}
              {data.mp4Url && (
                <source
                  src={`${data.mp4Url}/@@download/file`}
                  type='video/mp4'
                  width='768'
                  height='432'
                />
              )}
            </>
          ) : (
            <>
              {data.video2kUrl && (
                <source
                  src={`${data.video2kUrl}/@@download/file`}
                  type='video/mp4'
                  media='(min-width: 1280px) and (min-height: 720px)'
                  width='2560'
                  height='1440'
                />
              )}
              {data.videohdUrl && (
                <source
                  src={`${data.videohdUrl}/@@download/file`}
                  type='video/mp4'
                  media='(min-width: 768px) and (max-width: 1279px), (min-height: 432px) and (max-height: 719px)'
                  width='1280'
                  height='720'
                />
              )}
              {data.mp4Url && (
                <source
                  src={`${data.mp4Url}/@@download/file`}
                  type='video/mp4'
                  width='768'
                  height='432'
                />
              )}
            </>
          )}
        </video>
      </div>


      <Container text className={`content textbg-${data.textBG}`}>
        <div className='preHeading'>{data.preheadingText}</div>
        <div className='videoHeading'>{data.headingText}</div>
        <p className='subHeading'>{data.subHeadingText}</p>
        {data.cta1Title && data.cta1Link && (
          <UniversalLink href={data.cta1Link} className='ui button primary'>
            {data.cta1Title}
          </UniversalLink>
        )}
        {data.cta2Title && data.cta2Link && (
          <UniversalLink href={data.cta2Link} className='ui button secondary'>
            {data.cta2Title}
          </UniversalLink>
        )}
      </Container>
      {data.moreBelow && (
        <Icon name={moreSVG} size='40px' className='moreContent' />
      )}
    </div>
  );
};

VideoHero.propTypes = {
  data: PropTypes.shape({
    preheadingText: PropTypes.string,
    headingText: PropTypes.string,
    subHeadingText: PropTypes.string,
    cta1Title: PropTypes.string,
    cta1Link: PropTypes.string,
    cta2Title: PropTypes.string,
    cta2Link: PropTypes.string,
    video2kUrl: PropTypes.string,
    videohdUrl: PropTypes.string,
    mp4Url: PropTypes.string,
    textPosition: PropTypes.string,
    size: PropTypes.string,
    textBG: PropTypes.string,
    moreBelow: PropTypes.string,
  }).isRequired,
};

export default VideoHero;
