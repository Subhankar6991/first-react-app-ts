import React from "react";
import styled from "styled-components";
import ChartBar from "../utility/ChartBar";

const Container = styled.div`
  /* display: flex;
  justify-content: space-evenly; */
  margin-top: 300px;
  text-align: center;
`;
export default function ShowChartbar(): React.JSX.Element {
  const [data, setData] = React.useState(0);
  const clickHandler = (e: React.FormEvent<HTMLButtonElement>) => {
    setData(data + 1);
  };
  return (
    <Container>
      <button onClick={clickHandler}>Change</button>
      <ChartBar progressPercent={Math.random() * 99} />
      <ChartBar progressPercent={Math.random() * 99} />
      <ChartBar progressPercent={Math.random() * 99} />
      <ChartBar progressPercent={Math.random() * 99} />
      <ChartBar progressPercent={Math.random() * 99} />
      <ChartBar progressPercent={Math.random() * 99} />
    </Container>
  );
}