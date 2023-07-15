import React from "react";
import styled from "styled-components";
import ToolTip from "../utility/ToolTip";

const Container = styled.div`
  margin-top: 300px;
  text-align: center;
`;
const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  /* & > * {
    box-sizing: border-box;
  } */
`;

export default function ShowToolTip(): React.JSX.Element {
  return (
    <Container>
      Before Text{' '}
      <FlexContainer>
        <ToolTip
          fontSize="30px"
          visibleText="Hover Me"
          toolTipText="I am Tool Tip"
          tooltipStyle="tooltip-left"
        />
        <ToolTip
          fontSize="30px"
          visibleText="Hover Me"
          toolTipText="I am Tool Tip"
          tooltipStyle="tooltip-bottom"
        />
        <ToolTip
          fontSize="30px"
          visibleText="Hover Me"
          toolTipText="I am Tool Tip"
          tooltipStyle="tooltip-right"
        />
      </FlexContainer>
      After Text
    </Container>
  );
}