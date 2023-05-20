import { Header } from "../Header";
import { Container, StatusBar } from "./styles";


export function Home() {
    return(
        <>
        <StatusBar barStyle={"light-content"} backgroundColor="transparent" translucent/>
        <Container>
            <Header></Header>
        </Container>
        </>
    );
}

