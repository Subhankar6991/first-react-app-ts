import styled from 'styled-components';

const Container = styled.div<{ $height: number }>`
  display: inline-block;

  & > .progress-bar {
    width: 20px;
    height: 200px;
    background-color: #7f1b95;
    border-radius: 10px;
    display: flex;
    flex-direction: column-reverse;
  }

  & > .progress-bar > .progress {
    width: 100%;
    background-color: #42b983;
    border-radius: 10px;
    transition: height 0.5s ease-in-out;
    height: ${(props) => props.$height}%;
    max-height: 200px;
  }
`;
export default function ChartBar({
  progressPercent,
}: {
  progressPercent: number;
}) {
  return (
    <Container $height={progressPercent}>
      <div className="progress-bar">
        <div className="progress"></div>
      </div>
    </Container>
  );
}
