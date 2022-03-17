import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Form = styled.form`
margin-top:20px;
max-width:500px;
display:flex;




input {
    flex:1;
    padding:0 15px;
    border:0;
    border-radius:5px 0 0 5px;
    color:#3a3a3a;
    border:2px solid #fff;
    &::placeholder {
        color:#a8a8b3;
    }
}

 
button {
    width:120px;
    height:40px;
    background:#0d1117;
    border-radius:0 5px 5px 0;
    border:0;
    color:#fff;
    font-weight:bold;
    transition:background-color 0.2s;
   
}
`;

export const Repositories = styled.div`
margin-top:80px;
max-width:700px;
a {
    background:#fff;
    border-radius:5px;
    padding:24px;
    width:100%;
    text-decoration:none;
    display:block;
    display:flex;
    align-items:center;
    transition:transform 0.2s;
    &:hover {
        transform:translateX(10px);
    }
    & + a {
        margin-top:16px;
    }
    img {
        width:64px;
        height:64px;
        border-radius:50px;
    }
    div {
        margin-left:16px;
        flex:1;
        strong {
            font-size:20px;
            color:#3d3d4d;
            
        }
        p {
            font-size:18px;
            color:A8A8B3;
            margin-top:4px;
        }
    }
    svg {
        margin-left:auto;
        color:#cbcbd6;
        }
    }


`;
export const NavItem = styled(Link)`
display:flex;
align-items:center;
justify-content:center;
background-color:#0d1117;
color:white;
text-decoration:none;
width:120px;
height:26px;
border-radius:5px;
span {
font-size:12px;
}

`;
export const Error = styled.span`
display:block;
color:#c53030;
margin-top:8px;
`;