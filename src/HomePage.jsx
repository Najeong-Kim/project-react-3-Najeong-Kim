import React from 'react';

import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

import Title from './styles/Title';
import Text from './styles/Text';

const Start = styled.div({
  marginTop: '40px',
  textAlign: 'center',
  '& a': {
    fontSize: '25px',
    color: 'white',
    textDecoration: 'none',
    backgroundColor: '#F2C94C',
    padding: '8px 15px',
    borderRadius: '10px',
    '&:hover': {
      backgroundColor: '#FFB61D',
    },
  },
});

export default function HomePage() {
  return (
    <div>
      <Title>Home</Title>
      <Text>
        당신의 비타민 Y를 찾아보세요
      </Text>
      <Start><Link to="/intro">Vitamin Y</Link></Start>
    </div>
  );
}
