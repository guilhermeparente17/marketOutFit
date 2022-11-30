import styled from 'styled-components';

export const CardContainer = styled.div`
    padding: 0px;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`;

export const CardBackground = styled.div`
    background-color: #fff;
    position: relative;
    z-index: 999;
    width: 250px;
    height: 300px;
    border-radius: 10px 10px 0px 0px;
    background-position: center;
    background-size: cover;
    background-color: #fff;
    transition: 0.2s ease-in-out;
    position: relative;

    &:hover{
        opacity: 0.7;
        transition: 0.2s ease-in-out;
    }
`;

export const CardWrapper = styled.div`
    width: 250px;
    height: 300px;
    border-radius: 10px 10px 0px 0px;
    background-color: #fff;
    cursor: pointer;
`;

export const CardContent = styled.div`
    width: 250px;
    height: 50px;
    background-color: #FBFBFB;
    border-radius: 0px 0px 10px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const CardTitle = styled.span`
    margin-left: 10px;
`;

export const CardValue = styled.span`
    margin-right: 10px;
`;

