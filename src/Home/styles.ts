import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  background-color: #E5E5E5;
`;

export const ConteinerListHorizontal = styled.View`
  width: 100%;
  height: 200px;
  margin-top: -100px;
  background-color: transparent;
`;
export const HeaderTransactionList = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  padding-top: 32px;
  padding-bottom: 16px;
`;
export const TitleList = styled.Text`
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;
  color: #363f5f;
`;
export const AmountTransaction = styled.Text`
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  color: #969cb2;
`;
export const StatusBar = styled.StatusBar``;
export const ListBalance = styled.ScrollView``;

