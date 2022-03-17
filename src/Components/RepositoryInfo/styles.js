import styled from 'styled-components';



export const RepositoryStyle = styled.section`
margin-top:80px;

header {
display:flex;
align-items:center;
@media(max-width:992px){
    align-items:flex-start;
    flex-direction:column;
}
        img {
            width:120px;
            height:120px;
            border-radius:50%;
    }
    div {
        margin-left:24px;
        @media(max-width:992px){
            margin-top:10px;
        }
    }
    strong {
        font-size:36px;
        color:#3d3d4d;

        @media(max-width:992px){
           font-size:18px;
        }
    }
    p {
        font-size:18px;
        color:#737380;
        margin-top:4px;
    }
}

ul {
display:flex;
list-style:none;
margin-top:40px;
li {
    & + li {
        margin-left:80px;
    }
    strong {
        display:block;
        font-size:36px ;
        color: #3d3d4d;
    }
    span {
        display:block;
        margin-top:4px;
        color:#6c6c80;
        }
    }
}`;