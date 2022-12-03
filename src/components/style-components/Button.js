import styled from 'styled-components';

const ButtonCenter = styled.div`
  width: 30px;
  height: 35px;
  background-color: #84BD93;
  position: relative;
  &::before {
    content: '';
    width: 18px;
    height: 18px;
    background-color: #616161;
    border-radius: 50%;
    position: absolute;
    transform: translateX(-50%) translateY(-50%);
    top: 50%;
    left: 50%;
  }
`;

const Button = styled.button`
  width: 30px;
  height: 35px;
  background-color: #84BD93;
  border: none;
  cursor: pointer;
  position: relative;
`;

const Arrow = styled.div`
  transform: translateX(-50%) translateY(-50%);
  position: absolute;
  z-index: 2;
  content: "";
  top: 50%;
  left: 50%;
  height: 0;
  width: 0;
`;

const ButtonArrowDown = styled(Arrow)`
  border-right: solid 10px transparent;
  border-left: solid 10px transparent;
  border-top: solid 10px black;
`;

const ButtonArrowTop = styled(Arrow)`
  border-right: solid 10px transparent;
  border-left: solid 10px transparent;
  border-bottom: solid 10px black;
`;

const ButtonArrowRight = styled(Arrow)`
  border-right: solid 10px black;
  border-top: solid 10px transparent;
  border-bottom: solid 10px transparent;
`;

const ButtonArrowLeft = styled(Arrow)`
  border-left: solid 10px black;
  border-top: solid 10px transparent;
  border-bottom: solid 10px transparent;
`;


export {Button, ButtonArrowTop, ButtonArrowRight, ButtonArrowDown, ButtonArrowLeft, ButtonCenter};