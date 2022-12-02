import styled from 'styled-components';

const GreenCircle = styled.div`
  width: 30px;
  height: 30px;
  background-color: #2AC827;
  border-radius: 50%;
  border: 1px solid #000;
`;

const YellowCircle = styled(GreenCircle)`
  background-color: #D6F12C;
  margin-left: 1.25em;
`;

const RedCircle = styled(GreenCircle)`
  background-color: #FF0000;
  margin-left: 1.25em;
`;

const BlueLargeCircle = styled(GreenCircle)`
  background-color: #3692E8;
  width: 80px;
  height: 80px;
  margin-right: 1.25em;
`;

const YellowLargeCircle = styled(YellowCircle)`
  width: 50px;
  height: 50px;
  margin-left: 1em;
`;

export {GreenCircle, YellowCircle, RedCircle, BlueLargeCircle, YellowLargeCircle}