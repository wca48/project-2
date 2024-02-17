import TestimonialCard from './TestimonialCard';
import { testimonials } from '../../constants';
import { TestimonialContainer, Title, Desc, CardContainer } from './TestimonialsStyleComponent';

const Testimonials = () => {
    return (
        <TestimonialContainer id='testimonials-container'>
            <Title>Testimonials</Title>
            <Desc>What my clients says about my exceptional work</Desc>

            <CardContainer className='owl-carousel owl-theme'>
                {
                    testimonials.map((testimonial, index) => (
                        <TestimonialCard key={index} name={testimonial.name} review={testimonial.review}></TestimonialCard>
                    ))
                }
            </CardContainer>
        </TestimonialContainer>
    )
}

export default Testimonials;