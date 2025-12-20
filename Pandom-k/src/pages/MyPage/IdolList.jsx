import IdolCard from './IdolCard.jsx';
import IdolListWrap from './IdolList.js';
import Button from '../../styles/Button.jsx';
import { T2 } from '../../styles/Typography.jsx';

const IdolList = ({ idolList, selectedIds, onSelected, onFavorite }) => {
  return (
    <>
      <IdolListWrap>
        <T2 className="title">관심 있는 아이돌을 추가해보세요.</T2>
        <div className="idolListSection">
          {idolList.map((idol) => (
            <IdolCard
              key={idol.id}
              src={idol.img}
              isChecked={selectedIds.includes(idol.id)}
              onSelected={() => onSelected(idol.id)}
              idol={idol}
            />
          ))}
        </div>
        <Button onClick={onFavorite}>선택한 아이돌 추가하기</Button>
      </IdolListWrap>
    </>
  );
};

export default IdolList;
