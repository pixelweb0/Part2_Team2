import styled from 'styled-components';

const FavoriteListWrap = styled.div`
  padding: 0 50px;
  margin: 0 auto;
  width: 1200px;
  height: auto;
  gap: 30px;
  display: flex;
  flex-direction: column;

  .title {
    height: 50px;
    margin-top: 10px;
    margin-bottom: 0px;
  }

  .favoriteSection {
    display: flex;
    width: 100%;
    height: 200px;
    gap: 40px;
  }
`;

export default FavoriteListWrap;
