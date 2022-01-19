import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import styled from 'styled-components';
import CarouselCard from './CarouselCard';
import CARD_LIST_DATA from './carouselData';

const AUTO_TRANSITION_DURATION = 3500;
const SELF_TRANSITION_DURATION = 500;

export default function InfiniteCarousel() {
  const [prevIndex, setPrevIndex] = useState(1);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [shouldTransition, setShouldTransition] = useState(true);

  const slideLeft = () => {
    if (isButtonClicked || !shouldTransition) return;

    setIsButtonClicked(true);
    setTimeout(() => {
      setIsButtonClicked(false);
    }, SELF_TRANSITION_DURATION);

    const nextIndex = prevIndex - 1;
    setPrevIndex(nextIndex);

    if (nextIndex === 0) {
      setTimeout(() => {
        setShouldTransition(false);
        setPrevIndex(CARD_LIST_DATA.length);
      }, SELF_TRANSITION_DURATION);
    }
  };

  const slideRight = () => {
    if (isButtonClicked || !shouldTransition) return;

    setIsButtonClicked(true);
    setTimeout(() => {
      setIsButtonClicked(false);
    }, SELF_TRANSITION_DURATION);

    const nextIndex = prevIndex + 1;
    setPrevIndex(nextIndex);

    if (nextIndex === CARD_LIST_DATA.length + 1) {
      setTimeout(() => {
        setShouldTransition(false);
        setPrevIndex(1);
      }, SELF_TRANSITION_DURATION);
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => slideRight(),
    onSwipedRight: () => slideLeft(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  useEffect(() => {
    console.log(prevIndex);
    const interval = setInterval(() => {
      slideRight();
    }, AUTO_TRANSITION_DURATION);
    return () => clearInterval(interval);
  });

  useEffect(() => {
    console.log(shouldTransition);
    if (shouldTransition) return;

    const timeout = setTimeout(() => {
      setShouldTransition(true);
    }, SELF_TRANSITION_DURATION);
    return () => clearTimeout(timeout);
  }, [shouldTransition]);

  return (
    <div {...handlers}>
      <CarouselWrapper>
        <CarouselCardList
          style={{
            transform: `translateX(-${prevIndex * 100}%)`,
            transition: shouldTransition
              ? `all ${SELF_TRANSITION_DURATION}ms ease-in-out`
              : 'none',
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
    </div>
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
