"use client"
import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import SchoolIcon from '@mui/icons-material/School';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';

const ProcessSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  marginTop: "50px",
  textAlign: 'center',
  color: '#4ecdc4',
  marginBottom: "90px",
}));

const ProcessTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1rem',
  fontWeight: 400,
  fontFamily: 'Arial, sans-serif',
  marginBottom: theme.spacing(1),
}));

const ProcessHeader = styled(Typography)(({ theme }) => ({
  color: '#ff6b6b',
  fontSize: '2rem',
  fontWeight: 800,
  fontFamily: 'Arial, sans-serif',
  marginBottom: theme.spacing(5),
}));

const StepIcon = styled(Box)(({ theme }) => ({
  backgroundColor: '#4ecdc4',
  borderRadius: '15px',
  width: '80px',
  height: '80px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '0 auto',
  marginBottom: theme.spacing(2),
  position: 'relative',
}));

const StepNumber = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: -10,
  right: -10,
  backgroundColor: '#ff6b6b',
  color: 'white',
  borderRadius: '50%',
  width: '30px',
  height: '30px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontWeight: 'bold',
}));

const StepTitle = styled(Typography)(({ theme }) => ({
  color: '#333333',
  fontWeight: 'bold',
  marginBottom: theme.spacing(1),
}));

const StepDescription = styled(Typography)(({ theme }) => ({
  color: '#666',
}));

const ArrowIcon = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.down('md')]: {
    transform: 'rotate(90deg)',
    margin: theme.spacing(2, 0),
  },
}));

const MontessoriProcessFlow = () => {
  return (
    <ProcessSection>
      <ProcessTitle variant="h6">OUR APPROACH</ProcessTitle>
      <ProcessHeader variant="h3" style={{marginBottom:"50px"}}>The Montessori Journey</ProcessHeader>
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} md={3}>
          <StepIcon>
            <ChildCareIcon sx={{ color: 'white', fontSize: 40 }} />
            <StepNumber>01</StepNumber>
          </StepIcon>
          <StepTitle variant="h6">Observation</StepTitle>
          <StepDescription>
            We observe each child's unique interests and developmental needs
          </StepDescription>
        </Grid>
        <Grid item xs={12} md={1}>
          <ArrowIcon>
            <Typography variant="h4" color="#ccc">→</Typography>
          </ArrowIcon>
        </Grid>
        <Grid item xs={12} md={3}>
          <StepIcon>
            <SchoolIcon sx={{ color: 'white', fontSize: 40 }} />
            <StepNumber>02</StepNumber>
          </StepIcon>
          <StepTitle variant="h6">Prepared Environment</StepTitle>
          <StepDescription>
            We create a carefully curated space that fosters independence and learning
          </StepDescription>
        </Grid>
        <Grid item xs={12} md={1}>
          <ArrowIcon>
            <Typography variant="h4" color="#ccc">→</Typography>
          </ArrowIcon>
        </Grid>
        <Grid item xs={12} md={3}>
          <StepIcon>
            <EmojiPeopleIcon sx={{ color: 'white', fontSize: 40 }} />
            <StepNumber>03</StepNumber>
          </StepIcon>
          <StepTitle variant="h6">Guided Discovery</StepTitle>
          <StepDescription>
            Children explore and learn at their own pace with gentle guidance
          </StepDescription>
        </Grid>
      </Grid>
    </ProcessSection>
  );
};

export default MontessoriProcessFlow;