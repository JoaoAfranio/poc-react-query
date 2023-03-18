import styled from "styled-components";
import generateColor from "./COLORS";

export default function FrontCard({ commerce }) {
  const name = commerce.proprierty.split(" ")[0];
  const commerceName = commerce.commerce + " " + commerce.subTitleCommerce;

  const color = generateColor();

  return (
    <Front color={color}>
      <Title>{name}</Title>
      <Subtitle>{commerceName}</Subtitle>
    </Front>
  );
}

const Front = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
  background: ${(props) => `linear-gradient(70deg, ${props.color} 60%, rgb(255, 255, 255) 60%)`};

  backface-visibility: hidden;
  position: absolute;
`;

const Title = styled.h1`
  font-size: 44px;
  font-family: "Roboto";
`;

const Subtitle = styled.h2`
  font-family: "Roboto";
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 2px;
`;
