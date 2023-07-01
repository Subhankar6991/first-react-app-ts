import styled from "styled-components";
import Figma from "../utility/Figma";
export default function ShowFigma()  {
    return (
      <Frame93>
        <Figma />
      </Frame93>
    )
  }
  
  const Frame93 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 6.375rem 7.25rem 0rem 7.25rem;
    gap: 0.625rem;
    background-color: #f7fafc;
  `