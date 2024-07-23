import React from 'react';
import styled from 'styled-components';
import BlogCard from '../components/BlogCard';

const BlogContainer = styled.div`
  padding: 50px;
`;

const Section = styled.section`
  margin-bottom: 50px;
`;

const SectionTitle = styled.h1`
  font-size: 2em;
  margin-bottom: 20px;
`;

const blogs = [
  { title: 'IELTS Preparation Tips', description: 'Learn how to prepare for IELTS effectively.' },
  { title: 'Common Mistakes in IELTS', description: 'Avoid these common mistakes in IELTS.' },
  { title: 'Success Stories', description: 'Read success stories of IELTS achievers.' },
];

const Blog = () => (
  <BlogContainer>
    <Section>
      <SectionTitle>Blog</SectionTitle>
      {blogs.map((blog, index) => (
        <BlogCard key={index} title={blog.title} description={blog.description} />
      ))}
    </Section>
  </BlogContainer>
);

export default Blog;
