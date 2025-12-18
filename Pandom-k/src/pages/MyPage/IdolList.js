import styled from 'styled-components';

const IdolListWrap = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  flex-wrap: wrap;
  padding: 20px;
  justify-content: flex-start;

  &.button {
    margin-top: '10px';
    padding: '10px 20px';
    cursor: 'pointer';
  }
`;

export default IdolListWrap;
