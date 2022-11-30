import styled from 'styled-components';

export const HeaderContainer = styled.header`
    width: 100%;
    height: 70px;
    background-color: rgba(0,0,0,0.6);
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const HeaderLogo = styled.h3`
    margin-left: 15px;
`;

export const HdSearch = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const HdSpan = styled.span`
    margin-right: 10px;
    font-weight: bold;
`;

export const HdOptions = styled.div`
    margin-right: 0px;
`;

export const List = styled.ul`
    display: flex;
`;

export const Op = styled.li`
    margin-right: 100px;
    cursor: pointer;
    font-weight: bold;

    &:hover{
        text-decoration: underline;
    }
`;