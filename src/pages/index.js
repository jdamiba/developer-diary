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
        <HeadingXL>a song</HeadingXL>

          <div className="flexbox">
            <iframe width="800" height="500" src="https://www.youtube-nocookie.com/embed/LWz0JC7afNQ" frameborder="0" allow="fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <HeadingXL>a poem</HeadingXL>
          <TextHome>Hyperion (Book I excerpt) by John Keats</TextHome>
          <TextHome>
            Deep in the shady sadness of a vale<br/>
            Far sunken from the healthy breath of morn,<br/>
            Far from the fiery noon, and eve's one star,<br/>
            Sat gray-hair'd Saturn, quiet as a stone,<br/>
            Still as the silence round about his lair;<br/>
            Forest on forest hung about his head<br/>
            Like cloud on cloud. No stir of air was there,<br/>
            Not so much life as on a summer's day<br/>
            Robs not one light seed from the feather'd grass,<br/>
            But where the dead leaf fell, there did it rest.<br/>
            A stream went voiceless by, still deadened more<br/>
            By reason of his fallen divinity<br/>
            Spreading a shade: the Naiad 'mid her reeds<br/>
            Press'd her cold finger closer to her lips.
          </TextHome>
          <TextHome>
            Along the margin-sand large foot-marks went,<br/>
            No further than to where his feet had stray'd,<br/>
            And slept there since. Upon the sodden ground<br/>
            His old right hand lay nerveless, listless, dead,<br/>
            Unsceptred; and his realmless eyes were closed;<br/>
            While his bow'd head seem'd list'ning to the Earth,<br/>
            His ancient mother, for some comfort yet.
        </TextHome>
        <TextHome><a href="https://www.poetryfoundation.org/poems/44473/hyperion">Read the rest</a></TextHome>
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
