import styled from 'styled-components';
import { FaStar } from "react-icons/fa";
import { Client } from '../../assets/export';

const Card = styled.div`
    min-height: 240px;
    background-color: #141b22;
    border-radius: 10px;
    padding: 30px;
    margin: 0px 15px 30px 15px;
    @media (min-width: 2000px) {
        min-height: 300px;
    }
    @media (max-width: 1000px) {
        min-height: 260px;
    }
    @media (max-width: 800px) {
        min-height: 310px;
    }
    @media (max-width: 700px) {
        min-height: 200px;
    }
    @media (max-width: 550px) {
        min-height: 250px;
    }
    @media (max-width: 400px) {
        min-height: 300px;
        margin: 0px 5px 30px 5px;
        padding: 20px;
    }
`;

const CardProfile = styled.div`
    display: flex;
    align-items: center;
    gap: 0px 20px;
    overflow: hidden;
    @media (max-width: 400px) {
        gap: 0px 30px;
    }
`;

const CardProfileIcon = styled.div`
    width: 60px;
    @media (min-width: 1700px) {
        width: 75px;
    }
`;

const CardProfileIconImage = styled.img`
    width: 100%;
    padding: 10px;
    border: solid 2px #fd3d0c;
    border-radius: 100%;
    @media (max-width: 400px) {
        width: 40px;
    }
`

const CardProfileName = styled.div`
    margin: 10px 20px;
    @media (max-width: 400px) {
        margin: 10px 10px;
    }
`;

const CardProfileNameHeading = styled.h3`
    color: #ffffff;
    font-size: 20px;
    font-weight: 700;
    line-height: 35px;
    @media (min-width: 1700px) {
        font-size: 25px;
    }
    @media (max-width: 400px) {
        font-size: 15px;
        line-height: normal;
        margin-bottom: 5px;
    }
`;

const CardProfileNameRole = styled.span`
    color: #fd3d0c;
    line-height: 15px;
    @media (min-width: 1700px) {
        font-size: 20px;
        line-height: 50px;
    }
`;

const CardReview = styled.div``;

const CardReviewText = styled.p`
    font-size: 13px;
    margin: 20px 0px;
    color: #a4abb3;
    @media (min-width: 1700px) {
        font-size: 20px;
    }
`

const CardRating = styled.div``;

const CardRatingStars = styled.a`
    color: #ffc107;
    margin-right: 3px;
    font-size: 22px;
    cursor: pointer;
    @media (min-width: 1700px) {
        font-size: 27px;
    }
`;




const TestimonialCard = ({ name, review }) => {
    return (
        <Card className='item'>
            <CardProfile>
                <CardProfileIcon>
                    <CardProfileIconImage src={Client} />
                </CardProfileIcon>

                <CardProfileName>
                    <CardProfileNameHeading>{name}</CardProfileNameHeading>
                    <CardProfileNameRole>Our Client</CardProfileNameRole>
                </CardProfileName>
            </CardProfile>

            <CardReview>
                <CardReviewText>{review}</CardReviewText>
            </CardReview>

            <CardRating>
                <CardRatingStars><FaStar /></CardRatingStars>
                <CardRatingStars><FaStar /></CardRatingStars>
                <CardRatingStars><FaStar /></CardRatingStars>
                <CardRatingStars><FaStar /></CardRatingStars>
                <CardRatingStars><FaStar /></CardRatingStars>
            </CardRating>
        </Card>
    )
}

export default TestimonialCard;