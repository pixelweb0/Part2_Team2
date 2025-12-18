import { useState } from 'react';
import IdolList from './Idollist.jsx';
import FavoriteIdolList from './FavoriteIdolList.jsx';

//profile 이미지 예시 1~3
import profileImg1 from '../../../assets/icons/profileImg1.png';
import profileImg2 from '../../../assets/icons/profileImg2.png';
import profileImg3 from '../../../assets/icons/profileImg3.png';

const MyPage = () => {
  // 리스트에 있을 아이돌들
  const [idolList, setIdolList] = useState([
    { id: 1, img: profileImg1, name: '민지1', group: '아리즈1' },
    { id: 2, img: profileImg2, name: '민지2', group: '아리즈2' },
    { id: 3, img: profileImg3, name: '민지3', group: '아리즈3' },
  ]);

  const [selectedIds, setSelectedIds] = useState([]); // 현재 체크된 ID들
  const [favorites, setFavorites] = useState([]); // 상단 관심 목록

  // 아이돌 클릭 시 체크/해제
  const toggleSelect = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id],
    );
  };

  // [추가하기] 클릭: 하단 -> 상단으로 이동
  const handleMoveToFavorite = () => {
    const toMove = idolList.filter((idol) => selectedIds.includes(idol.id)); // 이동할 애들
    const toStay = idolList.filter((idol) => !selectedIds.includes(idol.id)); // 남을 애들

    setFavorites((prev) => [...prev, ...toMove]); // 위로 보냄
    setIdolList(toStay); // 아래서 삭제
    setSelectedIds([]); // 체크표시 초기화
  };

  // [X] 클릭: 상단 -> 하단으로 복원
  const handleMoveToIdolList = (id) => {
    const targetIdol = favorites.find((idol) => idol.id === id);

    setFavorites((prev) => prev.filter((idol) => idol.id !== id)); // 위에서 삭제
    setIdolList((prev) => [...prev, targetIdol]); // 아래로 복원
  };

  return (
    <div>
      <h1>관심 아이돌 관리</h1>
      <FavoriteIdolList favorites={favorites} onRemove={handleMoveToIdolList} />
      <hr />
      <IdolList
        idolList={idolList}
        selectedIds={selectedIds}
        onToggle={toggleSelect}
        onAdd={handleMoveToFavorite}
      />
    </div>
  );
};

export default MyPage;
