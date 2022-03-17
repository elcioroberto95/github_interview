import React, { useEffect, useState } from 'react';

import { useLocation, useRouteMatch } from 'react-router';

import api from '../../service';
import RepositoryUnavailable from '../../Components/RepositoryUnavailable';
import RepositoryInfo from '../../Components/RepositoryInfo'
import Header from '../../Components/Header'


const Repository = () => {
  const [repository, setRepository] = useState(null);

  const { params } = useRouteMatch();
  const search = useLocation().search;

  let query = new URLSearchParams(search).get('page');


  useEffect(() => {

    if (query != null) {
      api.get(`/users/${params.id}/${query}`).then((response) => {
        if (response.data.length > 0) {
          setRepository(response.data);
        }
        else {
          setRepository(null);
        }
      })
    }
  }, [params.id, query]);

  return (
    <>
      <Header />

      {
        repository ?

          (
            repository.map((item, index) => {
              return (
                <RepositoryInfo item={item} key={index} />
              )
            })
          )
          ://Repository unavailable
          (
            <RepositoryUnavailable/>
          )
      }
    </>
  )
}
export default Repository;