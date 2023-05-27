import React from 'react';

import * as S from './styles';

const icons = {
  Entradas: require('../assets/Entradas.png'),
  Saídas: require('../assets/Saídas.png'),
  Total: require('../assets/icon.png'),
};

export type BalanceCardProps = {
  title: 'Entradas' | 'Saídas' | 'Total';
  value: string;
  description: string;
};

export function BalanceCard({title, value, description}: BalanceCardProps) {
  return (
    <S.Container title={title}>
      <S.HeaderContainer>
        <S.Title title={title}>{title}</S.Title>

        <S.Icon source={icons[title]} />
      </S.HeaderContainer>

      <S.Value title={title}>{value}</S.Value>
      <S.Description title={title}>{description}</S.Description>
    </S.Container>
  );
}