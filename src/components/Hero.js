import React from 'react';
import styled from '@emotion/styled';
import { Link, graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

const ImageBg = styled(BackgroundImage)`
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 50vh;
`;

const TextBox = styled('div')`
  background-image: linear-gradient(to top, #ddbbffdd 2rem, #ddbbff00);
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
  padding: 0 calc((100vw - 550px) / 2) 2rem;
  width: 100%;
  h1 {
    text-shadow: 1px 1px 3px #eeddff66;
    font-size: 2.25rem;
  }
  p,
  a {
    color: #222;
    margin-top: 0;
  }
  a {
    margin-top: 0.5rem;
  }
`;

export default function Hero() {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "walid-amghar-montreal.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <ImageBg Tag="section" fluid={image.sharp.fluid} fadIn="soft">
      <TextBox>
        <h1>Frontend Masters + Gatsby</h1>
        <p>
          Hello Montreal <Link to="/about/">About me</Link>
        </p>
      </TextBox>
    </ImageBg>
  );
}
