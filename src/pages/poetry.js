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

const Poetry = ({ data }) => {
  return (
    <>
      <SEO title="Poem of the Day" />
      <HeaderLogo />
      <Layout>
        <Hero>
          <HeadingXL>poem of the day</HeadingXL>
          <HeadingL style={{"textAlign": "center"}}>4.11.2020</HeadingL>
          <TextHome>A Drop Fell on the Apple Tree by Emily Dickinson</TextHome>
          <TextHome>
            A Drop Fell on the Apple Tree —<br/>
            Another — on the Roof —<br/>
            A Half a Dozen kissed the Eaves —<br/>
            And made the Gables laugh —<br/>

            A few went out to help the Brook<br/>
            That went to help the Sea —<br/>
            Myself Conjectured were they Pearls —<br/>
            What Necklace could be —<br/>

            The Dust replaced, in Hoisted Roads —<br/>
            The Birds jocoser sung —<br/>
            The Sunshine threw his Hat away —<br/>
            The Bushes — spangles flung —<br/>

            The Breezes brought dejected Lutes —<br/>
            And bathed them in the Glee —<br/>
            Then Orient showed a single Flag,<br/>
            And signed the Fete away —
            </TextHome>
          <HeadingL style={{"textAlign": "center"}}>4.10.2020</HeadingL>
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
        <TextHome><a href="https://www.poetryfoundation.org/poems/44473/hyperion">Read more</a></TextHome>
        </Hero>
      </Layout>
    </>
  );
};

export default Poetry;