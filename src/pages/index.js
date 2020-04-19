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

const Home = ({ data }) => {
  return (
    <>
      <SEO title="Home" />
      <HeaderLogo />
      <Layout>
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-120932216-1"></script>
      <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'UA-120932216-1');
                `,
          }}
        />
        <HeadingXL>blog posts</HeadingXL>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Link to={node.fields.slug} key={node.id}>
            <Post>
              <HeadingL>{node.frontmatter.title}</HeadingL>
              <TextBody>{node.excerpt}</TextBody>
              <TextDate>{node.frontmatter.date}</TextDate>
            </Post>
          </Link>
        ))}

        <HeadingXL>data vizualizations</HeadingXL>
        <a href="https://choroplethmaps.josephdamiba.com"><TextHome>Choropleth maps</TextHome></a>

        <HeadingXL>websites</HeadingXL>
        <a href="https://ivaniliclive.now.sh"><TextHome>Ivan Ilić Live</TextHome></a>
        <a href="https://michelgondrymusicvideos.now.sh"><TextHome>Michel Gondry Music Videos</TextHome></a>
        <a href="https://jazz-concerts.now.sh"><TextHome>Jazz Concerts</TextHome></a>
        <a href="https://bestnewhiphop.now.sh"><TextHome>Best New Hip-Hop</TextHome></a>
        <a href="https://form-validation.now.sh"><TextHome>Form Validaiton</TextHome></a>
        
      </Layout>
    </>
  );
};

export default Home;

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;
