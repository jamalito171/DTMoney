import { Header} from "../Header";

import { Container, ListBalance, HeaderTransactionList, TitleList, StatusBar, AmountTransaction, ConteinerListHorizontal  } from "./styles";
import { BalanceCard } from "../BalanceCard";
import { FlatList } from "react-native";
import {
    TransactionCard,
    Transaction,
  } from '../TransactionCard/index'
  
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
    {
      id: '4',
      title: 'Aluguel do apartamento',
      category: 'Casa',
      value: 1.2009,
      date: '27/03/2021',
      type: 'Saída',
    },
    {
      id: '5',
      title: 'Aluguel do apartamento',
      category: 'Casa',
      value: 1.2009,
      date: '27/03/2021',
      type: 'Saída',
    },
    {
      id: '6',
      title: 'Aluguel do apartamento',
      category: 'Casa',
      value: 1.2009,
      date: '27/03/2021',
      type: 'Saída',
    },
  ];

export function Home() {  

 
  
  function ListHeaderComponent() {
    return (
      <HeaderTransactionList>
        <TitleList>Transações</TitleList>
        <AmountTransaction>08</AmountTransaction>
      </HeaderTransactionList>
    );
  }
    return(
        <>
        <StatusBar barStyle={"light-content"} backgroundColor="transparent" translucent/>
        <Container>       
            
              <Header></Header>
              <ConteinerListHorizontal>
              <ListBalance
                  horizontal
                  showsHorizontalScrollIndicator={true}
                  contentContainerStyle={{
                    paddingHorizontal: 25,
                    gap: 16,
                  }}
                  style={{
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
            </ConteinerListHorizontal>
            
        <FlatList
          ListHeaderComponent={<ListHeaderComponent />}
          contentContainerStyle={{
            paddingHorizontal: 24,
          }}
          data={dataTransaction}
          keyExtractor={item => item.id}
          renderItem={({item}) => <TransactionCard transaction={item} />}
        />  
        </Container>
        </>
    );
}

