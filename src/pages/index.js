import React from 'react';
import Layout from '../components/Layout';
import PostItem from '../components/PostItem';
import Hero from '../components/Hero';
import Insta from '../components/Insta';
import usePosts from '../hooks/usePosts';

export default function Home() {
  const posts = usePosts();
  return (
    <>
      <Hero />
      <Layout>
        <h2>Read my posts</h2>
        {posts.map(post => {
          return <PostItem key={post.slug} post={post} />;
        })}
        <Insta />
      </Layout>
    </>
  );
}
