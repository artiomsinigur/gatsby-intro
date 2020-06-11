import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout>
      <h1>About page</h1>
      <Link to="/">Back to home</Link>
    </Layout>
  );
}
