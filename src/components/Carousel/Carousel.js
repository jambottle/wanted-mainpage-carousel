import React from 'react';
import styled from 'styled-components';
import { Row } from 'styled-bootstrap-grid';
import CarouselCard from './CarouselCard';
import CARD_LIST_DATA from './carouselData';

export default function Carousel() {
  return (
    <CarouselWrapper>
      {CARD_LIST_DATA.map(data => {
        const { id } = data;
        return <CarouselCard key={id} data={data} />;
      })}
    </CarouselWrapper>
  );
}

const CarouselWrapper = styled(Row)``;
