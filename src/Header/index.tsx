import {  Button, HeaderBackground, HeaderTop, Icon, Label, Logo, Title } from "./styles";
import { ModalNewTransaction } from "../ModalNewTransaction";
import {useState} from 'react';

const Icone = require('../assets/icon.png');
export function Header() {
    
    const [visbleNewTransaction, setVisbleNewTransaction] =
        useState<boolean>(false);

    function onCloseModal() {
        setVisbleNewTransaction(false);
    }

    function onShowModal() {
        setVisbleNewTransaction(true);
    }
    
    
    
    return(
        
           
            <HeaderBackground>
                <ModalNewTransaction
                    visible={visbleNewTransaction}
                    onClose={onCloseModal}
                />
                    <HeaderTop>
                        <Logo>
                            <Icon source={Icone}></Icon>
                            <Title>dt money</Title>
                        </Logo>
                        <Button onPress={onShowModal}>
                            <Label>Nova Transação</Label>
                        </Button>
                    </HeaderTop>
                </HeaderBackground>
           
        
    );
}