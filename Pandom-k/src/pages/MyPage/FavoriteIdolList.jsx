import FavoriteListWrap from './FavoriteIdolList.js'; // styled
import IdolImg from '../../components/IdolImg.jsx';

const FavoriteIdolList = ({ favorites, onRemove }) => {
  return (
    <>
      <h3>내가 관심있는 아이돌 ({favorites.length})</h3>
      <FavoriteListWrap>
        {favorites.length === 0 && <p>아이돌을 추가해 주세요!</p>}
        {favorites.map((idol) => (
          <IdolImg
            key={idol.id}
            src={idol.img}
            showCloseButton={true} // X버튼 활성화
            onRemove={() => onRemove(idol.id)}
          />
        ))}
      </FavoriteListWrap>
    </>
  );
};

export default FavoriteIdolList;
