import styled from 'styled-components';

const ImgBorder = styled.div`
  width: 128px;
  height: 128px;
  border-radius: 50%;
  border: 1.5px solid #f96d69;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;

  /* 프로필 이미지 */
  .profileImg {
    width: 115px;
    height: 115px;
    border-radius: 50%;
    background-color: rgba(254, 87, 143, 0.4);
    object-fit: cover;
  }

  /* 겹쳐지는 레이어 */
  .idolOverlay {
    position: absolute;
    width: 115px;
    height: 115px;
    display: ${(props) => (props.$isActive ? 'flex' : 'none')};
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: rgba(254, 87, 143, 0.4);
  }

  /* 체크 아이콘 크기 */
  .checkedIcon {
    width: 53px;
    height: 53px;
  }

  & .removeBtn {
    width: 32px;
    height: 32px;
    position: absolute;
    right: 0px;
    top: 15px;
  }
`;

export default ImgBorder;
