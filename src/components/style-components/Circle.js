import styled from 'styled-components';

const Circle = styled.div`
  width: 20px;
  height: 20px;
  background-color: green;
  border-radius: 50%;
  border: 1px solid #000;
`;

const YellowCircle = styled(Circle)`
  background-color: yellow;
`;

const RedCircle = styled(Circle)`
  background-color: red;
`;

const BlueLargeCircle = styled(Circle)`
  background-color: blue;
  width: 40px;
  height: 40px;
`;

const YellowLargeCircle = styled(YellowCircle)`
  width: 20px;
  height: 20px;
`;

export {Circle, YellowCircle, RedCircle, BlueLargeCircle, YellowLargeCircle}