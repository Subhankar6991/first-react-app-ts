import styled from 'styled-components';

const Container = styled.div<{ $fontSize: string }>`
  font-size: ${(props) => props.$fontSize};
  position: relative;
  display: inline-block;
  width: max-content;
  box-sizing: content-box;
  & * {
    padding: 0;
    margin: 0;
    border-radius: 10px;
  }
  & > .visibleText {
    display: inline-block;
    text-decoration: underline;
    background-color: bisque;
    padding: 1%;
    width: max-content;
  }
  & > .tooltip {
    visibility: hidden;
    position: absolute;
    z-index: 1000;
    background-color: aqua;
    font-size: 80%;
    padding: 1.5%;
    border-radius: 5px;
    width: fit-content;
  }
  & > .tooltip-right {
    top: -20%;
  }

  & > .tooltip-bottom {
    top: 120%;
    left: 0;
  }

  & > .tooltip-top {
    bottom: 120%;
    left: 0;
  }

  & > .tooltip-left {
    top: -20%;
    left: -100%;
  }
  &:hover > .tooltip-left,
  &:hover > .tooltip-right,
  &:hover > .tooltip-bottom,
  &:hover > .tooltip-top {
    visibility: visible;
  }
`;

export default function ToolTip(props: {
  fontSize: string;
  visibleText: string;
  toolTipText: string;
  tooltipStyle: string;
}) {
  return (
    <Container $fontSize={props.fontSize}>
      <div className="visibleText">{props.visibleText}</div>
      <span className={`tooltip ${props.tooltipStyle}`}>
        {props.toolTipText}
      </span>

      {/* <span className="tooltip tooltip-right">{props.toolTipText}</span>
      <span className="tooltip tooltip-bottom">{props.toolTipText}</span>
      <span className="tooltip tooltip-top"> {props.toolTipText}</span> */}
    </Container>
  );
}
