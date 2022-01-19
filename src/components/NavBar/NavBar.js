import React from 'react';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { Container, Row, Col } from 'styled-bootstrap-grid';
import NAV_LIST_DATA from './navBarData';

export default function GlobalNavBar() {
  return (
    <>
      <NavContainer>
        <Container>
          <NavRow>
            <NavDropdown col={2}>
              <button type="button">
                <i className="far fa-bars" />
              </button>
              <Link to="/">
                <img
                  alt="Wanted Logo"
                  src="https://file.irgo.co.kr/data/IRPAGE/IMG/J5JBJDM4628QENCPSXV5PS4QN9CUWYZU.svg"
                />
              </Link>
            </NavDropdown>

            <NavLinkList col={7}>
              <nav>
                <ul>
                  {NAV_LIST_DATA.map(data => {
                    const { id, title, url, status } = data;
                    return (
                      <li key={id}>
                        <NavLink to={url}>{title}</NavLink>
                        <span>{status}</span>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </NavLinkList>

            <NavFeatures col={3}>
              <button type="button">
                <i className="far fa-search" />
              </button>
              <button type="button">
                <i className="far fa-bell" />
                <span>N</span>
              </button>
              <button type="button" className="userFeature">
                <img
                  alt="User Profile"
                  src="https://images.unsplash.com/photo-1641391503184-a2131018701b"
                />
                <span>N</span>
              </button>
              <button type="button" className="corpFeature">
                <Link to="/dashboard/companyregister">기업 서비스</Link>
              </button>
            </NavFeatures>
          </NavRow>
        </Container>
      </NavContainer>
      <NavBumper />
    </>
  );
}

const NavContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;

  width: 100%;
  border-bottom: 1px solid #e1e2e3;
  background-color: #ffffff;
`;

const NavRow = styled(Row)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavDropdown = styled(Col)`
  button {
    margin-right: 10px;
    border: none;
    background: none;
    cursor: pointer;

    .fa-bars {
      font-size: 20px;
    }
  }

  a {
    img {
      height: 20px;
      padding-top: 2px;
    }
  }
`;

const NavLinkList = styled(Col)`
  position: relative;
  left: 20px;

  ul {
    li {
      position: relative;
      display: inline-block;

      a {
        display: inline-block;
        padding: 15px;
        font-size: 14px;
        font-weight: 500;
        line-height: 20px;

        &:hover {
          box-shadow: inset 0 -2px #d3d3d3;
        }
      }

      span {
        position: absolute;
        top: 8px;
        right: -6px;

        color: #3366ff;
        font-size: 10px;
        cursor: default;
      }
    }
  }
`;

const NavFeatures = styled(Col)`
  display: flex;
  justify-content: flex-end;

  button {
    position: relative;
    border: none;
    padding: 0 10px;
    background: none;
    cursor: pointer;

    .fa-search,
    .fa-bell {
      color: #333333;
      font-size: 18px;
    }

    span {
      position: absolute;
      top: -1px;
      right: 0;

      width: 12px;
      height: 13px;
      border-radius: 4px;
      padding-top: 1px;

      background-color: #3366ff;
      color: #ffffff;
      font-size: 10px;
      font-weight: 600;
      cursor: default;
    }

    &.userFeature {
      width: 32px;
      height: 32px;
      margin: 0 10px;
      border: 1px solid #e1e2e3;
      border-radius: 50%;
      padding: 1px;

      img {
        width: 28px;
        height: 28px;
        border-radius: 50%;
        object-fit: cover;
      }

      span {
        position: absolute;
        top: -2px;
        right: -4px;

        width: 12px;
        height: 13px;
        border-radius: 4px;
        padding-top: 1px;

        background-color: #3366ff;
        color: #ffffff;
        font-size: 10px;
        font-weight: 600;
        cursor: default;
      }
    }

    &.corpFeature {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      cursor: default;

      &::before {
        display: block;
        width: 1px;
        height: 10px;
        background-color: #e1e2e3;
        content: '';
      }

      a {
        width: 84px;
        height: 30px;
        margin-left: 20px;
        border: 1px solid #e1e2e3;
        border-radius: 20px;

        color: #666666;
        font-size: 13px;
        font-weight: 400;
        line-height: 30px;
      }
    }
  }
`;

const NavBumper = styled(Row)`
  width: 100%;
  height: 75px;
  margin: 0;
  background: none;
`;
