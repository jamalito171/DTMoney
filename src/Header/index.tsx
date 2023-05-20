import { ContainerHeader, HeaderBackground, HeaderTop, Icon, Title} from "./styles";

const Icone = require('../assets/icon.png');
export function Header() {
    return(
        <ContainerHeader>
            <HeaderBackground>
                <HeaderTop>
                    <Icon source={Icone}></Icon>
                    <Title></Title>
                </HeaderTop>
            </HeaderBackground>
        </ContainerHeader>
    );
}