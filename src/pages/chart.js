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

const Chart = ({ data }) => {
  return (
    <>
      <SEO title="Chart of The Day" />
      <HeaderLogo />
      <Layout>
        <Hero>
          <HeadingXL>chart of the day</HeadingXL>
          <HeadingL style={{"textAlign": "center"}}>4.10.2020</HeadingL>
          
          <a href="https://files-q79tjyo6o.now.sh/"><TextHome>Interactive choropleth map of 2016 USA Unemployment By County in R</TextHome></a>
          <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'UA-120932216-3');
                `,
          }}
        />
        </Hero>
      </Layout>
    </>
  );
};

export default Chart;