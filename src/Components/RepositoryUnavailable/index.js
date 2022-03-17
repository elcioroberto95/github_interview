import React from 'react';
import {RepositoryUnavailableStyle} from './styles'

const RepositoryUnavailable = ()=>{
return (
  <>
  <RepositoryUnavailableStyle>
  <p>Este usuario não possui nenhum repositório disponível ou publico.</p>
  </RepositoryUnavailableStyle>
  </>
)
}
export default RepositoryUnavailable;