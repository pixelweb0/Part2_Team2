import FavoriteListWrap from './FavoriteIdolList.js';
import IdolCard from './IdolCard.jsx';
import { T2 } from '../../styles/Typography.jsx';

const FavoriteIdolList = ({ favorites, onRemove }) => {
  return (
    <>
      <FavoriteListWrap>
        <T2 className="title">내가 관심있는 아이돌 ({favorites.length})</T2>
        <div className="favoriteSection">
          {favorites.length === 0 && <p>아이돌을 추가해 주세요!</p>}
          {favorites.map((idol) => (
            <IdolCard
              key={idol.id}
              src={idol.img}
              showCloseButton={true} // X버튼 활성화
              onRemove={() => onRemove(idol.id)}
              idol={idol}
            />
          ))}
        </div>
      </FavoriteListWrap>
    </>
  );
};

export default FavoriteIdolList;
