import React, { useRef, useState, useEffect } from 'react';
import { Container, Image } from 'semantic-ui-react';
import Icon from '@plone/volto/components/theme/Icon/Icon';
import PropTypes from 'prop-types';
import './videoHero.less';
import moreSVG from '@plone/volto/icons/circle-bottom.svg';
import { UniversalLink } from '@plone/volto/components';

const VideoHero = ({ data }) => {
  const sizeClass = data.size === 'full' ? 'full' : '';
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);
  const endOfVideoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
    }
  }, []);

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const scrollToEndOfVideo = () => {
    endOfVideoRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className={`video-hero ${sizeClass} text-${data.textPosition}`}>
        <div className='background-video'>
          <video
            autoPlay
            muted
            loop
            playsInline
            ref={videoRef}
            defaultMuted={true}
            aria-hidden="true"
            tabIndex="-1"
          >
            {data.size === 'full' ? (
              <>
                {data.video2kUrl && (
                  <source
                    src={`${data.video2kUrl}/@@download/file`}
                    type='video/mp4'
                    media='(min-width: 1280px) and (min-height: 720px)'
                  />
                )}
                {data.videohdUrl && (
                  <source
                    src={`${data.videohdUrl}/@@download/file`}
                    type='video/mp4'
                    media='(min-width: 769px) and (max-width: 1280px), (min-height: 433px) and (max-height: 720px)'
                  />
                )}
                {data.mp4Url && (
                  <source src={`${data.mp4Url}/@@download/file`} type='video/mp4' />
                )}
              </>
            ) : (
              <>
                {data.videohdUrl && (
                  <source
                    src={`${data.videohdUrl}/@@download/file`}
                    type='video/mp4'
                    media='(min-width: 768px), (min-height: 432px)'
                  />
                )}
                {data.mp4Url && (
                  <source src={`${data.mp4Url}/@@download/file`} type='video/mp4' />
                )}
              </>
            )}
          </video>
          <button
            className='ui circular button playpause'
            onClick={handlePlayPause}
            style={{ backgroundColor: 'transparent' }}
            aria-label={isPlaying ? 'Pause video' : 'Play video'}
          >
            {isPlaying ? (
              <Image
                src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJ3aGl0ZSIgZD0iTTExIDIyaC00di0yMGg0djIweiBtNi0yMGgtNHYyMGg0di0yMHoiLz48L3N2Zz4='
                alt='pause'
              />
            ) : (
              <Image
                src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJ3aGl0ZSIgZD0iTTMgMjJ2LTIwbDE4IDEwLTE4IDEweiI+PC9wYXRoPjwvc3ZnPg=='
                alt='play'
              />
            )}
          </button>
        </div>

        <Container text className={`content textbg-${data.textBG} ${data.headingColor}`}>
          <div className='preHeading'>{data.preheadingText}</div>
          <div className='videoHeading'>
            <h1>{data.headingText}</h1>
          </div>
          <p className='subHeading'>{data.subHeadingText}</p>
          {data.cta1Title && data.cta1Link && (
            <UniversalLink href={data.cta1Link} className='ui button primary large'>
              {data.cta1Title}
            </UniversalLink>
          )}
          {data.cta2Title && data.cta2Link && (
            <UniversalLink href={data.cta2Link} className='ui button secondary large'>
              {data.cta2Title}
            </UniversalLink>
          )}
        </Container>
        {data.moreBelow && (
          <Icon name={moreSVG} size='40px' className='moreContent' onClick={scrollToEndOfVideo} />
        )}
      </div>
      <div className='endofvideo' ref={endOfVideoRef} />
    </>
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
    headingColor: PropTypes.string,
  }).isRequired,
};

export default VideoHero;
