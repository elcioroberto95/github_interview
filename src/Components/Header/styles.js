import styled from 'styled-components';
export const HeaderStyle = styled.header`
display:flex;
align-items:center;
justify-content:space-between;
a {
    display:flex;
    text-decoration:none;
    align-items:center;
    color:#a8a8b3;
    transition:color 0.2s;
    &:hover {
        color:#666;
    }
    svg {
        margin-right:4px;
}

}
`;
