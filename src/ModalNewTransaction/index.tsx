import {Image, ModalProps} from 'react-native';

import {
  ModalTransaction,
  BackgroundOverlay,
  ModalContainer,
  ModalHeader,
  ModalTitle,
  ModalButtonClose,
  ModalButtonCloseLabel,
  ModalInput,
  ModalContainerCategory,
  ModalCategory,
  ModalCategoryLabel,
  ModalButtonNewTransaction,
  ModalButtonNewTransactionLabel,
} from './styles';

const icons = {
  entrada: require('../assets/Entradas.png'),
  saida: require('../assets/Saídas.png'),
};

interface ModalNewTransactionProps extends ModalProps {
  onClose: () => void;
}

export function ModalNewTransaction({
  onClose,
  ...rest
}: ModalNewTransactionProps) {
  return (
    <ModalTransaction transparent {...rest}>
      <BackgroundOverlay>
        <ModalContainer>
          <ModalHeader>
            <ModalTitle>Cadastrar transação</ModalTitle>
            <ModalButtonClose onPress={() => onClose()}>
              <ModalButtonCloseLabel>x</ModalButtonCloseLabel>
            </ModalButtonClose>
          </ModalHeader>
          <ModalInput placeholder="Nome" />

          <ModalInput placeholder="Preço" />

          <ModalContainerCategory>
            <ModalCategory>
              <Image source={icons.entrada} />
              <ModalCategoryLabel>Income</ModalCategoryLabel>
            </ModalCategory>

            <ModalCategory>
              <Image source={icons.saida} />
              <ModalCategoryLabel>Outcome</ModalCategoryLabel>
            </ModalCategory>
          </ModalContainerCategory>

          <ModalInput placeholder="Categoria" />

          <ModalButtonNewTransaction>
            <ModalButtonNewTransactionLabel>Cadastrar</ModalButtonNewTransactionLabel>
          </ModalButtonNewTransaction>
        </ModalContainer>
      </BackgroundOverlay>
    </ModalTransaction>
  );
}