import React from 'react';
import moment from 'moment'
import { ImgAvatar, ContainerUser, InfoUser, NavItem, ContainerLinks, InformationAboutUser, ContainerAvatar } from './styles';


const UserInfo = ({ user }) => {
console.log("user.data",user)
  return (
    <>
      <ContainerUser>
        <ContainerAvatar>
          <ImgAvatar src={user.avatar_url} alt="" />

        </ContainerAvatar>
        <InfoUser>
          <InformationAboutUser>
            <p>Username: {user.login}</p>
            <p>Name: {user.name}</p>
            <p>Company: {user.company}</p>
            <p>Followers: {user.followers}</p>
            <p>Followers: {user.following}</p>
            <p>Ultima atualização: {moment(user.updated_at).format('DD/MM/YYYY')}</p>
          </InformationAboutUser>
          <ContainerLinks>
            <NavItem to={`/repos/${user.login}?page=repos`}>
              <span>Repositórios</span>
            </NavItem>
            <NavItem to={`/repos/${user.login}?page=starred`}>
              <span>Repositórios Starred</span>
            </NavItem>

          </ContainerLinks>
        </InfoUser>
      </ContainerUser></>
  )
}
export default UserInfo;