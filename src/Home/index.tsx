import { Header} from "../Header";
import { ListBalance, Title } from "../Header/styles";
import { Container, StatusBar } from "./styles";
import { BalanceCard } from "../BalanceCard";
import { FlatList } from "react-native";
import {
    TransactionCard,
    Transaction,
  } from '../TransactionCard/index'
import { ModalNewTransaction } from "../ModalNewTransaction";

  
type DataTransactionType = {
    id: string;
  } & Transaction;
 
  const dataTransaction: DataTransactionType[] = [
    {
      id: '1',
      title: 'Desenvolvimento de site',
      category: 'Vendas',
      value: 12.003,
      date: '13/04/2021',
      type: 'Entrada',
    },
    {
      id: '2',
      title: 'Hamburgueria Pizzy',
      category: 'Alimentação',
      value: 59,
      date: '10/04/2021',
      type: 'Saída',
    },
    {
      id: '3',
      title: 'Aluguel do apartamento',
      category: 'Casa',
      value: 1.2009,
      date: '27/03/2021',
      type: 'Saída',
    },
  ];

export function Home() {
    
    function ListHeaderComponent() {
        return <Title>DT Money</Title>;
      }
    return(
        <>
        <StatusBar barStyle={"light-content"} backgroundColor="transparent" translucent/>
        <Container>

            <ModalNewTransaction />
            
            {/*
            <Header></Header>
            
            <ListBalance
                horizontal
                showsHorizontalScrollIndicator={true}
                contentContainerStyle={{
                  paddingHorizontal: 25,
                  gap: 16,
                }}
                style={{
                  position: 'absolute',
                  top: 160,
                }}>
               <BalanceCard
                    title="Entradas"
                    value="R$ 17.400,00"
                    description="Última entrada dia 13 de abril"
                />
                <BalanceCard
                    title="Saídas"
                    value="R$ 17.400,00"
                    description="Última entrada dia 13 de abril"
                />
                <BalanceCard
                    title="Total"
                    value="R$ 17.400,00"
                    description="Última entrada dia 13 de abril"
                />
            
            </ListBalance>
        <FlatList
          ListHeaderComponent={<ListHeaderComponent />}
          contentContainerStyle={{
            paddingHorizontal: 24,
          }}
          data={dataTransaction}
          keyExtractor={item => item.id}
          renderItem={({item}) => <TransactionCard transaction={item} />}
        /> */}
        </Container>
        </>
    );
}

