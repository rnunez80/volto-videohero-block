// /src/components/VideoHero.jsx
import React, { useState, useEffect } from 'react';
import { Button, Header, Container } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import './videoHero.css';

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


  return (
    <div className={`video-hero ${sizeClass} text-${data.textPosition}`}>
      <div className='background-video'>
        <video autoPlay muted loop>
            {data.webmUrl && <source src={`${data.webmUrl}/@@download/file`} type='video/webm' />}
            <source src={`${data.mp4Url}/@@download/file`} type='video/mp4' />
            <img src={`${data.imageUrl}/@@download/file`} alt='video placeholder' />
          </video>
      </div>
      <div className='background-image' style={{ backgroundImage: `url(${data.imageUrl})` }} />
      <Container text className='content'>
        <Header as='h2'>{data.preheadingText}</Header>
        <Header as='h1'>{data.headingText}</Header>
        <Header as='h3'>{data.subHeadingText}</Header>
        {data.cta1Title && data.cta1Link && (
          <Button href={data.cta1Link} primary>
            {data.cta1Title}
          </Button>
        )}
        {data.cta2Title && data.cta2Link && (
          <Button href={data.cta2Link} secondary>
            {data.cta2Title}
          </Button>
        )}
        {effectiveType === '4g' ? (
          <div>You have a fast connection</div>
        ) : (
          <div>You have a slow connection</div>
        )}
      </Container>
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
    webmUrl: PropTypes.string,
    mp4Url: PropTypes.string,
    imageUrl: PropTypes.string,
    textPosition: PropTypes.string,
    size: PropTypes.string,
  }).isRequired,
};

export default VideoHero;
