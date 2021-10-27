import React from 'react';

import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard';

import { 
  Container, 
  Header, 
  UserWrapper, 
  UserInfo, 
  Photo, 
  User, 
  UserGreeting, 
  UserName,
  Icon,
  HighlightCards,
  Transactions,
  Title,
  TransactionList
} from './styles';

export interface DataListProps extends TransactionCardProps {
  id: string;
}

export function Dashboard(){
  const data: DataListProps[] = [
    {
      id: '1',
      type: 'positive',
      title: "Desenvolvimento de site",
      amount: "R$ 12.000,00",
      category: {
        name: 'Vendas', 
        icon: 'dollar-sign',
      },
      date: "27/10/2021",
    },
    {
      id: '2',
      type: 'negative',
      title: "Hamburger Pizzy",
      amount: "R$ 59,00",
      category: {
        name: 'Alimentação', 
        icon: 'coffee',
      },
      date: "10/10/2021",
    },
    {
      id: '3',
      type: 'positive',
      title: "Aluguel do apartamento",
      amount: "R$ 1.200,00",
      category: {
        name: 'Vendas', 
        icon: 'shopping-bag',
      },
      date: "5/10/2021",
    }
  ];

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo 
              source={{ uri: 'https://avatars.githubusercontent.com/u/7473747?v=4' }} 
            />
            <User>
              <UserGreeting>Olá, </UserGreeting>
              <UserName>Flavio</UserName>
            </User>
          </UserInfo>
          <Icon name="power"/>
        </UserWrapper>
      </Header>
      <HighlightCards>
        <HighlightCard 
          type="up"
          title="Entradas" 
          amount="R$ 100.000,00" 
          lastTransaction="Última entrada dia 13 de outubro" 
        />
        <HighlightCard 
          type="down"
          title="Saídas" 
          amount="R$ 102,90" 
          lastTransaction="Última entrada dia 13 de outubro" 
        />
        <HighlightCard 
          type="total"
          title="Total" 
          amount="R$ 99.897,10" 
          lastTransaction="Última entrada dia 13 de outubro" 
        />
      </HighlightCards>

      <Transactions>
        <Title>Listagem</Title>
        <TransactionList 
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) =>  <TransactionCard data={item} />}
        />
      </Transactions>
    </Container>
  )
}