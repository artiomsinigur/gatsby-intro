import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import ReadLink from './ReadLink';
import Image from 'gatsby-image';

const ArticleTag = styled.article`
  border-bottom: 1px solid #ddd;
  margin-top: 0.75rem;
  padding-bottom: 1rem;
  display: flex;

  &:first-of-type {
    margin-top: 1rem;
  }
`;

export default function PostItem({ post }) {
  return (
    <ArticleTag>
      <Link
        to={post.slug}
        css={css`
          margin: 1rem 1rem 0 0;
          width: 100px;
        `}
      >
        <Image fluid={post.image.sharp.fluid} alt={post.title} />
      </Link>
      <div className="post-content">
        <h3>
          <Link to={post.slug}>{post.title}</Link>
        </h3>
        <p>{post.excerpt}</p>
        <ReadLink to={post.slug}>Read this post &rarr;</ReadLink>
      </div>
    </ArticleTag>
  );
}
