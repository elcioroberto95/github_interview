import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import api from '../../service/index';
import UserInfo from '../../Components/UserDetails'


import Header from '../../Components/Header'



const Dashboard = () => {
  const { params } = useRouteMatch();
  const [userSearched, setUserSearched] = useState(null);
  useEffect(() => {
    async function loadDataUser() {

      if (params.id) {
        try {
          const { data } = await api.get(`users/${params.id}`);
          const userResponse = { data }
          setUserSearched(userResponse);
          console.log(data);
        }
        catch (err) {
          console.log(err)
        }

      }
    }
    loadDataUser();
  }, [params.id])




  return (
    <>

      <Header />
      {
        userSearched &&
       <UserInfo user={userSearched}/>
      }
    </>
  )
}
export default Dashboard;