import React, { useState } from 'react';
import api from '../../service';
import { Error, Form } from './styles';
import UserDetails from '../../Components/UserDetails'



const Dashboard = () => {
  const [user, setNewUser] = useState('');
  const [userSearched, setUserSearched] = useState(null);
  const [inputError, setInputError] = useState('');

  async function handleAddRepository(event) {
    event.preventDefault();
    if (!user) {
      setInputError('Digite o autor do repositorio');
      return;
    }
    try {
      const { data } = await api.get(`users/${user}`);
      console.log(data)
      setUserSearched(data);
      setNewUser('');
      setInputError('');
    }
    catch (err) {
      setInputError('Erro na busca do repositorio');
    }
  }

  return (
    <>
      <h2>Github Interview</h2>

      <Form onSubmit={handleAddRepository}>
        <input
          placeholder="Digite o nome do repositorio"
          value={user}
          onChange={({ target }) => setNewUser(target.value)}
        />
        <button type="submit">Pesquisar</button>
      </Form>
      {inputError &&
        <Error>
          {inputError}
        </Error>
      }


      {
        userSearched &&
        <UserDetails user={userSearched} />
      }
    </>
  )
}
export default Dashboard;