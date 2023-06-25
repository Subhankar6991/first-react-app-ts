import React from 'react';
import './App.css';
import ProfileCard from './components/ProfileCard';
import styled from 'styled-components';
import { ProfileCardProps } from './interfaces/profile-card.props';

const Container = styled.div`
margin: 0 auto;
width: 70%;
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
` 

function *generateImageUrl() {
  while (true) {
    yield `https://picsum.photos/id/${Math.floor(Math.random()*99)}/500`;
  }
}

function App():React.JSX.Element {
  const profileCards : ProfileCardProps[] = [
    {
      title: 'Alexa',
      handle: '@alexa99',
    },
    {
      title: 'Cortana',
      handle: '@cortana32'
    },
    {
      title: 'Siri',
      handle: '@siri01',
    }
  ];
  return (
    <>
      <h1 style={{textAlign:'center'}}>Personal Degital Assistants</h1>
      <Container>
        {
          profileCards.map(profileCard => <ProfileCard key={profileCard.handle} {...{...profileCard,imageUrl: generateImageUrl().next().value as string}}  />)
        }
      </Container>
    </>
  );
}

export default App;