import React from 'react';
import styled from 'styled-components';

const BlogSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;

  @media (min-width: 768px) {
    padding: 30px;
  }

  @media (min-width: 1024px) {
    padding: 40px;
  }
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: bold;
  color: #e91e63;
  text-align: center;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    font-size: 32px;
  }

  @media (min-width: 1024px) {
    font-size: 36px;
  }
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: #03a9f4;
  text-align: center;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    font-size: 18px;
    margin-bottom: 30px;
  }
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;

  @media (min-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1200px) {
    gap: 30px;
  }
`;

const BlogCard = styled.div`
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ImagePlaceholder = styled.div`
  width: 100%;
  height: 200px;
  background-color: ${props => props.color};
`;

const BlogContent = styled.div`
  padding: 15px;

  @media (min-width: 768px) {
    padding: 20px;
  }
`;

const BlogTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    font-size: 20px;
  }
`;

const BlogExcerpt = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 15px;
`;

const BlogMeta = styled.p`
  font-size: 12px;
  color: #03a9f4;
`;

const MKWBlog = () => {
  const blogPosts = [
    {
      color: '#e0e0ff',
      title: 'Understanding the Young Minds',
      excerpt: 'Child psychology is the scientific study of the mental, emotional, and behavioral processes that take place during childhood and adolescence...',
      date: '01 FEBRUARY, 2023',
      comments: 'NO COMMENT'
    },
    {
      color: '#b0e0e6',
      title: 'Integrating Montessori in the Classroom',
      excerpt: 'Montessori education is a unique approach to education that has been growing in popularity in recent years. The Montessori approach is based...',
      date: '01 FEBRUARY, 2023',
      comments: 'NO COMMENT'
    },
    {
      color: '#ffe4e1',
      title: 'Montessori Education: An Introduction',
      excerpt: 'Montessori education is a unique educational approach that was developed by Dr. Maria Montessori, an Italian physician and educator, in the ...',
      date: '01 FEBRUARY, 2023',
      comments: 'NO COMMENT'
    }
  ];

  return (
    <BlogSection>
      <Title>MKW Blog</Title>
      <Subtitle>Learn about our latest updates and news</Subtitle>
      <BlogGrid>
        {blogPosts.map((post, index) => (
          <BlogCard key={index}>
            <ImagePlaceholder color={post.color} />
            <BlogContent>
              <BlogTitle>{post.title}</BlogTitle>
              <BlogExcerpt>{post.excerpt}</BlogExcerpt>
              <BlogMeta>{post.date} • {post.comments}</BlogMeta>
            </BlogContent>
          </BlogCard>
        ))}
      </BlogGrid>
    </BlogSection>
  );
};

export default MKWBlog;