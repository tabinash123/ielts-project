import React from 'react';
import styled from 'styled-components';
import CourseCard from '../components/CourseCard';

const CoursesContainer = styled.div`
  padding: 50px;
`;

const Section = styled.section`
  margin-bottom: 50px;
`;

const SectionTitle = styled.h1`
  font-size: 2em;
  margin-bottom: 20px;
`;

const courses = [
  { title: 'IELTS Beginner Course', description: 'Introduction to IELTS.' },
  { title: 'IELTS Intermediate Course', description: 'Improve your IELTS skills.' },
  { title: 'IELTS Advanced Course', description: 'Master IELTS techniques.' },
];

const Courses = () => (
  <CoursesContainer>
    <Section>
      <SectionTitle>Our Courses</SectionTitle>
      {courses.map((course, index) => (
        <CourseCard key={index} title={course.title} description={course.description} />
      ))}
    </Section>
  </CoursesContainer>
);

export default Courses;
