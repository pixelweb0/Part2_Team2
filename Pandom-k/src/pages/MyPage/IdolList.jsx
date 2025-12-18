import IdolImg from '../../components/IdolImg.jsx';
import IdolListWrap from './IdolList.js';

const IdolList = ({ idolList, selectedIds, onToggle, onAdd }) => {
  return (
    <>
      <h3>아이돌 목록</h3>
      <IdolListWrap>
        {idolList.map((idol) => (
          <IdolImg
            key={idol.id}
            src={`/assets/images/profileImg${idol.id}.png`}
            isChecked={selectedIds.includes(idol.id)}
            onClick={() => onToggle(idol.id)}
            idol={idol}
            name={idol.name}
            group={idol.group}
          />
        ))}
      </IdolListWrap>
      <button onClick={onAdd}>선택한 아이돌 추가하기</button>
    </>
  );
};

export default IdolList;
