import React from "react";
import styled from "styled-components";

export const LoadingIndicator = () => {
  return (
    <Indicator>
      <div></div>
      <div></div>
      <div></div>
    </Indicator>
  );
};

const Indicator = styled.div`
  display: block;
  position: relative;
  width: 80px;
  height: 80px;
  margin: auto auto;

  & > div {
    position: absolute;
    top: 33px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #fff;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }

  & > div:nth-child(1) {
    left: 8px;
    animation: lds-ellipsis1 0.6s infinite;
  }

  & > div:nth-child(2) {
    left: 8px;
    animation: lds-ellipsis2 0.6s infinite;
  }

  & > div:nth-child(3) {
    left: 32px;
    animation: lds-ellipsis2 0.6s infinite;
  }

  & > div:nth-child(4) {
    left: 56px;
    animation: lds-ellipsis3 0.6s infinite;
  }

  @keyframes lds-ellipsis1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes lds-ellipsis3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
  @keyframes lds-ellipsis2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(24px, 0);
    }
  }
`;
