import { FooterContainer, Logo, SocialMediaIcon, SocialMediaIcons, Copyright, Developer, DeveloperAgency } from './FooterStyleComponents';
import { Bio } from '../../constants';
import { SiLinkedin, SiInstagram, SiTwitter, SiWhatsapp } from 'react-icons/si';
const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <FooterContainer id='footer'>
      <Logo>Chetanya Sharma</Logo>

      <SocialMediaIcons>
        <SocialMediaIcon href={Bio.linkedin} target="display"><SiLinkedin /></SocialMediaIcon>
        <SocialMediaIcon href={Bio.instagram} target="display"><SiInstagram /></SocialMediaIcon>
        <SocialMediaIcon href={Bio.twitter} target="display"><SiTwitter /></SocialMediaIcon>
        <SocialMediaIcon href={Bio.whatsapp} target="display"><SiWhatsapp /></SocialMediaIcon>
      </SocialMediaIcons>

      <Copyright>Copyright &copy; {currentYear} Chetanya Sharma | All Rights Reserved</Copyright>
      <Developer>Design & Developed by <DeveloperAgency href=''>Webexcep</DeveloperAgency></Developer>
    </FooterContainer>
  )
}

export default Footer;