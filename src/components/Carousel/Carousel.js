import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CarouselCard from './CarouselCard';
import CARD_LIST_DATA from './carouselData';

const AUTO_TRANSITION_DURATION = 4000;
const SELF_TRANSITION_DURATION = 1000;

export default function InfiniteCarousel() {
  const [prevIndex, setPrevIndex] = useState(1);

  const slideLeft = () => {
    const nextIndex = prevIndex - 1;
    setPrevIndex(nextIndex);

    if (nextIndex === 0) {
      setTimeout(() => {
        setPrevIndex(CARD_LIST_DATA.length);
      }, SELF_TRANSITION_DURATION);
    }
  };

  const slideRight = () => {
    const nextIndex = prevIndex + 1;
    setPrevIndex(nextIndex);

    if (nextIndex === CARD_LIST_DATA.length + 1) {
      setTimeout(() => {
        setPrevIndex(1);
      }, SELF_TRANSITION_DURATION);
    }
  };

  useEffect(() => {
    console.log(prevIndex);
    const interval = setInterval(() => {
      slideRight();
    }, AUTO_TRANSITION_DURATION);
    return () => clearInterval(interval);
  }, [prevIndex]);

  return (
    <CarouselWrapper>
      <CarouselCardList
        style={{
          transform: `translateX(-${prevIndex * 100}%)`,
          transition: `all ${SELF_TRANSITION_DURATION}ms ease-in-out`,
        }}
      >
        <CarouselCard data={CARD_LIST_DATA[CARD_LIST_DATA.length - 1]} />
        {CARD_LIST_DATA.map((data, index) => {
          return <CarouselCard key={index} data={data} />;
        })}
        <CarouselCard data={CARD_LIST_DATA[0]} />
      </CarouselCardList>

      <button className="leftButton" onClick={slideLeft}>
        <i className="fal fa-chevron-left" />
      </button>
      <button className="rightButton" onClick={slideRight}>
        <i className="fal fa-chevron-right" />
      </button>
    </CarouselWrapper>
  );
}

const CarouselWrapper = styled.div`
  position: relative;
  width: 1140px;
  height: 320px;
  margin: 0 auto;

  button {
    position: absolute;
    top: 120px;

    width: 30px;
    height: 60px;
    border: none;
    border-radius: 20px;

    background-color: #ebebeb;
    opacity: 0.6;
    cursor: pointer;

    &.leftButton {
      left: -60px;
    }

    &.rightButton {
      right: -60px;
    }
  }
`;

const CarouselCardList = styled.section`
  display: flex;
  height: 100%;
`;
