import React from "react";
import styled from "styled-components";

const Thumbnail = styled.div`
  height: 280px;
  width: 280px;
  background: #00bbca;
  padding: 10px;
  margin: 8px;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 20px;
  box-shadow: 0 2px 4px grey;
  box-shadow: 2px 4px 6px 8px rgba(20,20,20,0.4);
`;

const Title = styled.h4`
  color: white;
  text-decoration: none;
`;

const BoardThumbnail = ({ title }) => {
  console.log(title);
  return (
    <Thumbnail>
      <Title>{title}</Title>
    </Thumbnail>
  );
};

export default BoardThumbnail;
