import {  Button, ContainerHeader, HeaderBackground, HeaderTop, Icon, Label, Logo, Title} from "./styles";

const Icone = require('../assets/icon.png');
export function Header() {
    return(
        <ContainerHeader>
            <HeaderBackground>
                <HeaderTop>
                    <Logo>
                        <Icon source={Icone}></Icon>
                        <Title>dt money</Title>
                    </Logo>
                    <Button>
                        <Label>Nova Transação</Label>
                    </Button>
                </HeaderTop>
            </HeaderBackground>
        </ContainerHeader>
    );
}