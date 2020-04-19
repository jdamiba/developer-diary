import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';

import { BREAKPOINT } from '../utils/constants';

import {
  HeaderLogo,
  HeadingXL,
  HeadingL,
  Layout,
  SEO,
  TextBody,
  TextDate,
} from '../components';

const Hero = styled.div`
  margin-bottom: 20vh;

  @media (max-width: ${BREAKPOINT}px) {
    margin-bottom: 15vh;
  }
`;

const TextHome = styled.p`
  color: var(--dark-color-light);
  display: block;
  font-size: 22px;
  line-height: 1.6;
  margin-bottom: 10vh;
  margin-left: auto;
  margin-right: auto;
  text-align: center;

  @media (max-width: ${BREAKPOINT}px) {
    font-size: 19px;
    margin-bottom: 7vh;
  }
`;

const Post = styled.div`
  border-bottom: 1px solid lightgray;
  margin-bottom: 50px;

  @media (max-width: ${BREAKPOINT}px) {
    padding-left: 0;
  }
`;

const Music = ({ data }) => {
  return (
    <>
      <SEO title="Song of the Day" />
      <HeaderLogo />
      <Layout>
        <Hero>
          <HeadingXL>song of the day</HeadingXL>
          <HeadingL style={{"textAlign": "center"}}>4.11.2020</HeadingL>
          <div className="flexbox">
            <iframe width="800" height="500" src="https://www.youtube-nocookie.com/embed/LWz0JC7afNQ" frameborder="0" allow="fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <HeadingL style={{"textAlign": "center"}}>4.10.2020</HeadingL>
          <div className="flexbox">
            <iframe width="800" height="500" src="https://www.youtube-nocookie.com/embed/WdcqcF_4s8U" frameborder="0" allow="fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </Hero>
      </Layout>
    </>
  );
};

export default Music;