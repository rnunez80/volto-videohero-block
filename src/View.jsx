import React, { useEffect, useState } from 'react';
import { Container } from 'semantic-ui-react';
import Icon from '@plone/volto/components/theme/Icon/Icon';
import PropTypes from 'prop-types';
import './videoHero.css';
import moreSVG from '@plone/volto/icons/circle-bottom.svg';
import { UniversalLink } from '@plone/volto/components';

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

    const measureDownloadSpeed = () => {
      const startTime = Date.now();
      const svg = new Image();

      svg.onload = () => {
        const duration = (Date.now() - startTime) / 1000; // in seconds
        const bitsLoaded = 8 * 1000; // Assume SVG size is 1KB
        const speedBps = bitsLoaded / duration;
        const speedKbps = speedBps / 1024;
        const effectiveType = speedKbps > 1000 ? '4g' : '3g';

        setNetworkType('unknown');
        setEffectiveType(effectiveType);
      };

      svg.onerror = () => {
        setNetworkType('unknown');
        setEffectiveType('3g');
      };

      svg.src = moreSVG; // Use the moreSVG icon for the speed test
    };

    updateNetworkStatus();

    if (navigator.connection) {
      navigator.connection.addEventListener('change', updateNetworkStatus);
    } else {
      measureDownloadSpeed();
    }

    return () => {
      if (navigator.connection) {
        navigator.connection.removeEventListener('change', updateNetworkStatus);
      }
    };
  }, []);

  const isHighOrMediumSpeed = effectiveType === '4g' || effectiveType === '3g';

  return (
    <div className={`video-hero ${sizeClass} text-${data.textPosition}`}>
      {isHighOrMediumSpeed ? (
        <div className='background-video'>
          <video autoPlay muted loop>
            {data.webmUrl && <source src={`${data.webmUrl}/@@download/file`} type='video/webm' />}
            <source src={`${data.mp4Url}/@@download/file`} type='video/mp4' />
            <img src={`${data.imageUrl}/@@images/image/preview`} alt='video placeholder' />
          </video>
        </div>
      ) : (
        <div className='background-image'>
          <img
            src={`${data.imageUrl}/@@images/image/preview`}
            alt='low speed image'
            width='1920'
            height='1080'
            className='responsive'
            srcSet={`
              ${data.imageUrl}/@@images/image/mini 200w,
              ${data.imageUrl}/@@images/image/preview 400w,
              ${data.imageUrl}/@@images/image/teaser 600w,
              ${data.imageUrl}/@@images/image/large 800w,
              ${data.imageUrl}/@@images/image/larger 1000w,
              ${data.imageUrl}/@@images/image/great 1200w
            `}
          />
        </div>
      )}
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
