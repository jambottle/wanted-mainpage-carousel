import React from 'react';
import styled from 'styled-components';
import { Row } from 'styled-bootstrap-grid';
import CarouselCard from './CarouselCard';

export default function Carousel() {
  return (
    <CarouselWrapper>
      <CarouselCard />
    </CarouselWrapper>
  );
}

const CarouselWrapper = styled(Row)``;
