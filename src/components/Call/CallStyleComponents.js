import styled from 'styled-components';

export const CallContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 20px 0px 70px 0px;
    scroll-margin-top: 80px;
    background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
    clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
    position: relative;
    z-index: 1;
`;

export const Title = styled.div`
    color: #F2F3F4;
    margin: 0px 10px;
    margin-bottom: 10px;
    font-size: 35px;
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
    @media (max-width: 600px) {
        font-size: 25px;
    }
`;

export const Desc = styled.div`
    max-width: 500px;
    color: #B1B2B3;
    font-size: 18px;
    text-align: center;
    @media (min-width: 1300px) {
        font-size: 20px;
    }
    @media (min-width: 1700px) {
        font-size: 22px;
    }
    @media (max-width: 800px) {
        font-size: 16px;
        margin: 0px 10px;
    }
`;

export const CallButton = styled.a`
    margin-top: 20px;
    color: #FFFFFF;
    background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    appearance: button;
    padding: 13px 60px;
    text-align: center;
    text-decoration: none;
    border-radius: 20px;
    cursor: pointer;
    font-size: 20px;
    font-weight: 600;
    transition: all 0.2s ease-in-out !important;
    box-shadow:  20px 20px 60px #1F2634, -20px -20px 60px #1F2634;
    &:hover {
        transform: scale(1.05);
        transition: all 0.4s ease-in-out;
        box-shadow:  20px 20px 60px #1F2634;
        filter: brightness(1);
    }
    @media (min-width: 1300px) {
        font-size: 22px;
    }
    @media (min-width: 1700px) {
        font-size: 24px;
    }
    @media (max-width: 650px) {
        padding: 10px 50px;
        font-size: 18px;
    }
    @media (max-width: 800px) {
        margin-top: 20px;
    }
`;