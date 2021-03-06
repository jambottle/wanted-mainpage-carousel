import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Col } from 'styled-bootstrap-grid';

export default function CarouselCard(props) {
  const { id, title, subtitle, url, src } = props.data;
  const { prevIndex } = props;

  return (
    <CarouselCardWrapper col={12}>
      <Link to={id === prevIndex ? `${url}` : ''}>
        <img
          alt={title}
          src={src}
          style={{
            filter: `${
              id === prevIndex ? 'brightness(100%)' : 'brightness(60%)'
            }`,
            cursor: id === prevIndex ? 'pointer' : 'default',
          }}
        />
      </Link>

      <article
        style={{
          display: `${id === prevIndex ? 'flex' : 'none'}`,
        }}
      >
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <hr />
        <Link to={url}>
          바로가기
          <i className="fal fa-chevron-right" />
        </Link>
      </article>
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

  article {
    position: absolute;
    bottom: 25px;
    left: 40px;

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
      height: 43px;
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
      width: 80px;
      margin: 12px 0 12px 12px;
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
