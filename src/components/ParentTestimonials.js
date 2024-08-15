import React from 'react';
import styled from 'styled-components';
import { Star } from 'lucide-react';

import parent1 from '../assets/parents/parent1.jpg';
import parent2 from '../assets/parents/parent2.jpg';
import parent3 from '../assets/parents/parent3.jpg';

const TestimonialSection = styled.section`
  background-color: #FFF9C4;
  padding: 60px 20px;
  text-align: center;
`;

const Title = styled.h2`
  color: #424242;
  font-size: 2rem;
  margin-bottom: 40px;
  position: relative;
  display: inline-block;
  font-weight: 700;

  @media (min-width: 768px) {
    font-size: 2.25rem;
  }

  @media (min-width: 1024px) {
    font-size: 2.5rem;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(to right, #FF9800, transparent);
  }
`;

const TestimonialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
`;

const TestimonialCard = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  }
`;

const QuoteSymbol = styled.div`
  font-size: 4rem;
  color: #FF9800;
  line-height: 1;
  margin-bottom: 20px;
  font-family: Georgia, serif;
`;

const TestimonialContent = styled.p`
  color: #616161;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 20px;
  font-style: italic;
`;

const TestimonialFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TestimonialImageWrapper = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 15px;
`;

const TestimonialImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TestimonialAuthor = styled.div`
  text-align: left;
`;

const TestimonialName = styled.h3`
  color: #424242;
  font-size: 1.1rem;
  margin: 0;
  font-weight: 600;
`;

const TestimonialTitle = styled.p`
  color: #FF9800;
  font-size: 0.9rem;
  margin: 5px 0 0;
`;

const StarRating = styled.div`
  color: #FFD700;
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
`;

const SimpleTestimonials = () => {
  const testimonials = [
    { 
      name: 'Aarav Sharma', 
      title: 'Parent of 5-year-old', 
      image: parent1,
      content: 'Sungava Balsansar has been a blessing for our family. The Montessori approach has helped our daughter become more independent and confident in her abilities.',
      rating: 5
    },
    { 
      name: 'Priya Thapa', 
      title: 'Mother of twins', 
      image: parent2,
      content: 'We\'ve seen remarkable progress in our twins since they started at Sungava Balsansar. The teachers are attentive and the environment truly nurtures their individual growth.',
      rating: 5
    },
    { 
      name: 'Rajesh Adhikari', 
      title: 'Father of 3-year-old', 
      image: parent3,
      content: 'The holistic development approach at Sungava Balsansar is impressive. Our son has not only improved academically but also socially and emotionally.',
      rating: 5
    },
  ];

  return (
    <TestimonialSection>
      <Title>What Parents Say</Title>
      <TestimonialGrid>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index}>
            <QuoteSymbol>"</QuoteSymbol>
            <StarRating>
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} size={20} fill="#FFD700" />
              ))}
            </StarRating>
            <TestimonialContent>{testimonial.content}</TestimonialContent>
            <TestimonialFooter>
              <TestimonialImageWrapper>
                <TestimonialImage src={testimonial.image} alt={testimonial.name} />
              </TestimonialImageWrapper>
              <TestimonialAuthor>
                <TestimonialName>{testimonial.name}</TestimonialName>
                <TestimonialTitle>{testimonial.title}</TestimonialTitle>
              </TestimonialAuthor>
            </TestimonialFooter>
          </TestimonialCard>
        ))}
      </TestimonialGrid>
    </TestimonialSection>
  );
};

export default SimpleTestimonials;