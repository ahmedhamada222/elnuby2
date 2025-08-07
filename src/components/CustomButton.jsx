import React from 'react';
import styled from 'styled-components';

const CustomButton = ({ 
  text = "Button", 
  primaryColor = "#e8e8e8", 
  secondaryColor = "#fff", 
  borderColor = "#333",
  textColor = "#000",
  width = "150px",
  height = "50px",
  fontSize = "20px",
  onClick,
  className
}) => {
  const StyledWrapper = styled.div`
    .btn {
      width: ${width};
      height: ${height};
      border: 1px solid ${borderColor};
      font-size: ${fontSize};
      cursor: pointer;
      -webkit-tap-highlight-color: transparent;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      z-index: 0;
      transition: 1s;
      color: ${textColor};
      font-family: sans-serif;
    }

    .btn::before,
    .btn::after {
      position: absolute;
      background: ${primaryColor};
      z-index: -1;
      transition: 1s;
      content: "";
    }

    .btn::before {
      height: ${height};
      width: calc(${width} - 20px);
    }

    .btn::after {
      width: ${width};
      height: calc(${height} - 20px);
    }

    .noselect {
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }

    .btn:hover::before {
      width: 0px;
      background: ${primaryColor};
    }

    .btn:hover::after {
      height: 0px;
      background: ${secondaryColor};
    }

    .btn:hover {
      background: ${secondaryColor};
    }
  `;

  return (
    <StyledWrapper className={className}>
      <div className="btn" onClick={onClick}>
        <span className="noselect">{text}</span>
      </div>
    </StyledWrapper>
  );
};

export default CustomButton;
