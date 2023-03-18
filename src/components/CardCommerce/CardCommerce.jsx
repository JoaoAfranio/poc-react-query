import { useState } from "react";
import styled from "styled-components";
import Modal from "../Modal/Modal";
import BackCard from "./BackCard";
import FrontCard from "./FrontCard";

export default function CardUser({ commerce }) {
  const [flip, setFlip] = useState(false);
  const [show, setShow] = useState(false);

  return (
    <>
      <Card
        flip={flip}
        onClick={() => {
          setFlip(!flip);
        }}
      >
        <FrontCard commerce={commerce} />

        <BackCard commerce={commerce} setShow={setShow} />
      </Card>

      {show && <Modal commerce={commerce} show={show} setShow={setShow} />}
    </>
  );
}

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;

  cursor: pointer;

  width: 400px;
  height: 250px;

  box-shadow: -12px 10px 49px -18px rgba(0, 0, 0, 0.75);

  transition: transform 0.6s;
  transform-style: preserve-3d;
  transform: ${(props) => (props.flip ? "rotateY(180deg)" : "")};
`;
