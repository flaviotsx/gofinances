import React, { useState } from 'react';
import { Modal } from 'react-native';

import { Input } from '../../components/Form/Input';
import { TransactionTypeButton } from '../../components/Form/TransactionTypeButton';
import { Button } from '../../components/Form/Button';
import { CategorySelectButton } from '../../components/Form/CategorySelectButton';

import { CategorySelect } from '../CategorySelect'

import { 
  Container, 
  Header, 
  Title,
  Form,
  Fields,
  TransactionTypes
} from './styles';


export function Register() {
  const [transactionType, setTransactionType] = useState('');
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);

  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categoria'
  });

  function handleTransactionTypeSelect(type: 'up' | 'down') {
    setTransactionType(type);
  }

  function handleOpenSelectCategoryModal() {
    console.log('Open called')
    setCategoryModalOpen(true);
  }

  function handleCloseSelectCategoryModal() {
    console.log('Close called');
    setCategoryModalOpen(false);
  }

  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>
      <Form>
        <Fields>
          <Input placeholder="Nome" />
          <Input placeholder="Preço" />

          <TransactionTypes>
            <TransactionTypeButton 
              type="up" 
              title="Income" 
              onPress={()=> handleTransactionTypeSelect('up')}
              isActive={transactionType === 'up'} 
            />
            <TransactionTypeButton 
              type="down" 
              title="Outcome" 
              onPress={()=> handleTransactionTypeSelect('down')}
              isActive={transactionType === 'down'}  
            />
          </TransactionTypes>

          <CategorySelectButton 
            title="Categoria" 
            onPress={handleOpenSelectCategoryModal}
          />
        </Fields>

        <Button title="Enviar" />
      </Form>

      <Modal visible={categoryModalOpen}>
        <CategorySelect 
          category={category}
          setCategory={setCategory}
          closeSelectCategory={handleCloseSelectCategoryModal}
        />
      </Modal>
    </Container>
  )
}