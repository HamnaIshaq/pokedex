import styled from 'styled-components';

const Cylinder = styled.div`
  width: 90px;
  height: 20px;
  background-color: #84BD93;
  border-radius: 50px;
  border: 1px solid #000;
`;

const SearchInput = styled.input`
  width: 125px;
  height: 40px;
  background-color: #000;
  border: none;
  color: #fff;
  padding-left: 0.5em;
  padding-right: 0.5em;
  font-size: .75rem;
  font-family: inherit;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 150px;
  background-color: #000;
  border: none;
  color: #fff;
  font-size: .75rem;
  font-family: inherit;
  display: flex;
  align-items: center;
`;

const ContentContainer = styled(ImageContainer)`
  min-height: 100px;
  height: fit-content;
  background-color: lightgray;
  border: 1px solid #000;
  color: #000;
  padding-left: 1em;
  padding-right: 1em;
  line-height: 1.2;
`;

export {Cylinder, SearchInput, ImageContainer, ContentContainer}