import styled from 'styled-components';

const CardWrap = styled.div`
  width: 128px;
  text-align: center;
  position: relative;

  .removeBtn {
    width: 32px;
    height: 32px;
    right: 0px;
    top: 10px;
    cursor: pointer;
    position: absolute;
  }
  .idolName {
    margin-top: 10px;
  }

  .idolGroup {
    line-height: 30px;
  }
`;

export default CardWrap;
