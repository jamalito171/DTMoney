
import { ModalProps } from "react-native";
import { ModalTransaction, BackGroundOverlay, ModalContainer, ModalHeader, ModalTitle, ModalButtonClose, ModalButtonCloseLabel} from "./styles";


interface ModalNewTransactionProps extends ModalProps{

};

export function ModalNewTransaction({... rest}: ModalNewTransactionProps) {
    return (
        <ModalTransaction transparent {...rest}>
            <BackGroundOverlay>
                <ModalContainer>
                    <ModalHeader>
                        <ModalTitle>Cadastrar transação</ModalTitle>
                        <ModalButtonClose>
                            <ModalButtonCloseLabel>x</ModalButtonCloseLabel>
                        </ModalButtonClose>
                    </ModalHeader>

                </ModalContainer>
            </BackGroundOverlay>
        </ModalTransaction>
    );
}