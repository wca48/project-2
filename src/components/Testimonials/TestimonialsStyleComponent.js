import styled from 'styled-components';

export const TestimonialContainer = styled.div`
    scroll-margin-top: 50px;
    padding: 50px;
    background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: sans-serif;
    @media (max-width: 700px) {
        padding: 50px 20px;
    }
`;

export const Title = styled.div`
    color: #F2F3F4;
    margin-bottom: 10px;
    font-size: 42px;
    font-weight: 600;
    text-align: center;
    @media (min-width: 1300px) {
        font-size: 45px;
    }
    @media (min-width: 1700px) {
        font-size: 50px;
    }
    @media (max-width: 800px) {
        font-size: 32px;
    }
`;

export const Desc = styled.div`
    color: #B1B2B3;
    max-width: 600px;
    font-size: 18px;
    text-align: center;
    @media (min-width: 1300px) {
        font-size: 20px;
    }
    @media (min-width: 1700px) {
        font-size: 22px;
    }
    @media (max-width: 800px) {
        margin: 0px 10px;
        font-size: 16px;
    }
`;


export const CardContainer = styled.div`
    width: 100%;
    margin: 30px 0px 0px 0px;
    display: flex;
    gap: 20px;
`