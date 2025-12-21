import styled from 'styled-components';

const IdolListWrap = styled.div`
  padding: 0 50px;
  margin: 0 auto;
  width: 1200px;
  height: auto;
  min-height: 400px;
  gap: 30px;

  .title {
    height: 50px;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .idolListSection {
    display: flex;
    width: 100%;
    height: 200px;
    gap: 40px;
  }
  button {
    margin: 10px auto;
    display: flex;
    align-content: center;
  }
`;

export default IdolListWrap;
