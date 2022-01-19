import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Col } from 'styled-bootstrap-grid';

export default function CarouselCard() {
  return (
    <CarouselCardWrapper col={12}>
      <Link to="/events/pre_onboarding_course_6">
        <img
          alt="개발자 되고싶은 분들!?"
          src="https://static.wanted.co.kr/images/banners/1473/41f7b36e.jpg"
        />
      </Link>

      <div>
        <h2>개발자 되고싶은 분들!?</h2>
        <h3>프론트엔드 무료 교육과정 참여하기</h3>
        <hr />
        <Link to="/events/pre_onboarding_course_6">
          바로가기
          <i class="fal fa-chevron-right" />
        </Link>
      </div>
    </CarouselCardWrapper>
  );
}

const CarouselCardWrapper = styled(Col)`
  position: relative;

  a {
    img {
      width: 1110px;
      height: 320px;
      border-radius: 6px;
      object-fit: cover;
    }
  }

  div {
    position: absolute;
    left: 40px;
    bottom: 35px;

    display: flex;
    flex-direction: column;

    width: 340px;
    height: 150px;
    border-radius: 6px;
    background-color: #ffffff;
    color: #333333;

    h2 {
      margin: 20px 20px 0 20px;
      font-size: 20px;
      font-weight: 700;
      line-height: 30px;
    }

    h3 {
      height: 44px;
      margin: 0 20px;
      padding-top: 2px;
      font-size: 14px;
      vertical-align: top;
    }

    hr {
      width: 100%;
      height: 1px;
      margin: 0;
      border: none;
      background-color: #e1e2e3;
    }

    a {
      margin: 12px 0 0 12px;
      padding: 6px 8px;
      color: #3366ff;
      font-size: 14px;
      font-weight: 600;
      vertical-align: middle;

      .fa-chevron-right {
        position: relative;
        left: 7px;
        font-size: 13px;
      }
    }
  }
`;
