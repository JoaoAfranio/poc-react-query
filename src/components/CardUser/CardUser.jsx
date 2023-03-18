import { useState } from "react";
import styled from "styled-components";
import BackCard from "./BackCard";
import FrontCard from "./FrontCard";

export default function CardUser() {
  const [flip, setFlip] = useState(false);

  return (
    <Card
      flip={flip}
      onClick={() => {
        setFlip(!flip);
      }}
    >
      <FrontCard />

      <BackCard />
    </Card>
  );
}

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 5px;

  width: 400px;
  height: 250px;

  box-shadow: -12px 10px 49px -18px rgba(0, 0, 0, 0.75);

  transition: transform 0.6s;
  transform-style: preserve-3d;
  transform: ${(props) => (props.flip ? "rotateY(180deg)" : "")};
`;
