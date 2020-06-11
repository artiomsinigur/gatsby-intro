import React from 'react';
import Image from 'gatsby-image';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import useInstagram from '../hooks/useInstagram';

const PhotoItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: -0.5rem;

  a {
    box-shadow: 0;
    display: block;
    margin: 0.5rem;
    max-width: calc(33% - 1rem);
    width: 120px;
    transition: 0.2s box-shadow ease-in;

    &:focus,
    &:hover {
      box-shadow: 0 2px 14px #22222244;
      z-index: 10;
    }
  }

  img {
    max-width: 100%;
  }
`;

export default function Insta() {
  const instaPhotos = useInstagram();
  const { username } = instaPhotos[0];

  return (
    <>
      <h2>Instagram posts from ${username}</h2>
      <PhotoItems>
        {instaPhotos.map(photo => (
          <a key={photo.id} href={`https://instagram.com/p/${photo.id}`}>
            <Image fluid={photo.fluid} alt={photo.caption} />
          </a>
        ))}
      </PhotoItems>
      <a href={`https://instagram.com/${username}`}>
        See more on Instagram &rarr;
      </a>
    </>
  );
}
