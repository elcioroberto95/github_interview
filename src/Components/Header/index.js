import React from 'react';
import { Link } from 'react-router-dom';
import { FiChevronsLeft } from 'react-icons/fi';
import { HeaderStyle } from './styles'

const Header = () => {
  return (
    <>
      <HeaderStyle>
        <h2>Github Interview</h2>
        <Link to="/">
          <FiChevronsLeft size={16} />
          Voltar
        </Link>
      </HeaderStyle>
    </>)
}
export default Header;