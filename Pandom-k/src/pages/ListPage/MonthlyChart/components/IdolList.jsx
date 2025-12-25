import {
  ListContainer,
  ListItem,
  IdolInfo,
  ImgProfile,
  RankText,
  NameText,
  VoteText,
  MoreButton,
} from '../../../../styles/pages/list/MonthlyChart';
import { LoadingContainer, LoadingSpinner } from '../../../../styles/Loading';
import { useState, useEffect } from 'react';

const IdolList = ({ idols, isLoading }) => {
  const [isTabletOrMobile, setIsTabletOrMobile] = useState(false);
  const [visibleCount, setVisibleCount] = useState(10);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 1024px)');

    const handleMediaChange = () => {
      const isSmall = mediaQuery.matches;
      setIsTabletOrMobile(isSmall);
      setVisibleCount(isSmall ? 5 : 10);
    };

    handleMediaChange();
    mediaQuery.addEventListener('change', handleMediaChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange);
    };
  }, []);

  const INCREMENT_COUNT = isTabletOrMobile ? 5 : 10;

  const handleMore = () => {
    setVisibleCount((prev) => prev + INCREMENT_COUNT);
  };

  const safeIdols = idols || [];
  const visibleList = safeIdols.slice(0, visibleCount);

  if (isLoading) {
    return (
      <LoadingContainer>
        <LoadingSpinner />
        <p>데이터를 불러오는 중...</p>
      </LoadingContainer>
    );
  }

  return (
    <>
      <ListContainer>
        {visibleList.map((idol, index) => (
          <ListItem key={idol.id}>
            <IdolInfo>
              <ImgProfile src={idol.profilePicture} alt={idol.name} />
              <RankText>{index + 1}</RankText>
              <NameText>
                <strong>{idol.group}</strong>
                {idol.name}
              </NameText>
            </IdolInfo>

            <VoteText>{idol.totalVotes?.toLocaleString()}표</VoteText>
          </ListItem>
        ))}
      </ListContainer>
      {visibleList.length < safeIdols.length && (
        <MoreButton onClick={handleMore}>더보기</MoreButton>
      )}
    </>
  );
};

export default IdolList;
