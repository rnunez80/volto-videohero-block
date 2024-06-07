// /src/components/VideoHero.jsx
import React, { useEffect, useState } from 'react';
import { Button, Container } from 'semantic-ui-react';
import Icon from '@plone/volto/components/theme/Icon/Icon';
import PropTypes from 'prop-types';
import './videoHero.css';
import moreSVG from '@plone/volto/icons/circle-bottom.svg';

const VideoHero = ({ data }) => {
  const sizeClass = data.size === 'full' ? 'full' : '';

  const [networkType, setNetworkType] = useState('');
  const [effectiveType, setEffectiveType] = useState('');

  useEffect(() => {
    const updateNetworkStatus = () => {
      if (navigator.connection) {
        setNetworkType(navigator.connection.type);
        setEffectiveType(navigator.connection.effectiveType);
      }
    };

    updateNetworkStatus();

    if (navigator.connection) {
      navigator.connection.addEventListener('change', updateNetworkStatus);
    }

    return () => {
      if (navigator.connection) {
        navigator.connection.removeEventListener('change', updateNetworkStatus);
      }
    };
  }, []);
  const isHighOrMediumSpeed = effectiveType === '4g' || effectiveType === '3g';

  return (<div className={`video-hero ${sizeClass} text-${data.textPosition}`}>
    {isHighOrMediumSpeed ? (<div className='background-video'>
      <video autoPlay muted loop>
        {data.webmUrl && <source src={`${data.webmUrl}/@@download/file`} type='video/webm' />}
        <source src={`${data.mp4Url}/@@download/file`} type='video/mp4' />
        <img src={`${data.imageUrl}/@@images/image/preview`} alt='video placeholder' />
      </video>
    </div>) : (<div className='background-image'>
      <img src='${data.imageUrl}/@@images/image/preview' width='1920' height='1080'
           className='responsive' srcSet={`
        ${data.imageUrl}/@@images/image/mini 200w,
        ${data.imageUrl}/@@images/image/preview 400w,
        ${data.imageUrl}/@@images/image/teaser 600w,
        ${data.imageUrl}/@@images/image/large 800w,
        ${data.imageUrl}/@@images/image/larger 1000w,
        ${data.imageUrl}/@@images/image/great 1200w
    `} alt='low speed image' />
    </div>)}
    <Container text className={`content textbg-${data.textBG}`}>
      <div className='preHeading'>{data.preheadingText}</div>
      <div className='videoHeading'>{data.headingText}</div>
      <p className='subHeading'>{data.subHeadingText}</p>
      {data.cta1Title && data.cta1Link && (
        <Button href={data.cta1Link} primary>
          {data.cta1Title}
        </Button>
      )}
      {data.cta2Title && data.cta2Link && (
        <Button href={data.cta2Link} secondary>
          {data.cta2Title}
        </Button>)}
    </Container>
    {data.moreBelow && (
      <Icon name={moreSVG} size='40px' className='moreContent' />
    )}
  </div>);
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
    webmUrl: PropTypes.string,
    mp4Url: PropTypes.string,
    imageUrl: PropTypes.string,
    textPosition: PropTypes.string,
    size: PropTypes.string,
    textBG: PropTypes.string,
    moreBelow: PropTypes.string,
  }).isRequired,
};

export default VideoHero;
