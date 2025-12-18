import checkIcon from '../../assets/icons/check.svg';
import ImgBorder from './IdolImg.js';
import deleteButton from '../../assets/icons/btn_delete.svg';

const IdolImg = ({ src, isChecked, onClick, showCloseButton, onRemove, name, group }) => {
  return (
    <>
      <ImgBorder $isActive={isChecked} onClick={onClick}>
        <img src={src} className="profileImg" alt="profile" />
        {!showCloseButton && (
          <div className="idolOverlay">
            <img src={checkIcon} className="checkedIcon" alt="checked" />
          </div>
        )}

        {showCloseButton && (
          <img
            src={deleteButton}
            className="removeBtn"
            onClick={(e) => {
              e.stopPropagation(); // 클릭 시 부모의 onClick(토글)이 실행되지 않도록 방지
              onRemove();
            }}
          />
        )}
      </ImgBorder>
      <h3>{name}</h3>
      <h4>{group}</h4>
    </>
  );
};

export default IdolImg;
