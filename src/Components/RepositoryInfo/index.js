import React from 'react';
import { RepositoryStyle } from './styles'

const RepositoryInfo = ({  item }) => {
  return (
    <>
      <RepositoryStyle >
        <header>
          <img src={item.owner.avatar_url} alt={item.owner.login} />
          <div>
            <strong>{item.full_name}</strong>
            <p>{item.description}</p>
          </div>
        </header>

        <ul>
          <li>
            <strong>{item.stargazers_count}</strong>
            <span>stars</span>
          </li>

          <li>
            <strong>{item.forks_count} </strong>
            <span>Forks</span>
          </li>

          <li>
            <strong>{item.open_issues_count} </strong>
            <span>Issues</span>
          </li>
        </ul>

      </RepositoryStyle>
    </>)
}
export default RepositoryInfo;




