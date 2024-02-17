import { NavbarContainer, Nav, NavLogo, Span, NavItems, NavLink, LinkedinButton, MenuIcon, MobileNavItems, MobileNavLink } from './NavbarStyleComponents';
import { DiCssdeck } from 'react-icons/di';
import { Bio } from '../../constants';
import { useState } from 'react';
import { RiCloseLine, RiMenu3Line } from 'react-icons/ri';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavbarContainer id='navbar'>
      <Nav>
        <NavLogo>
          <span style={{ color: "white", display: "flex", alignItems: "center", cursor: 'pointer' }}><DiCssdeck size="50px" /><Span>Portfolio</Span></span>
        </NavLogo>

        <NavItems>
          <NavLink href='#about-container'>About</NavLink>
          <NavLink href='#testimonials-container'>Testimonials</NavLink>
          <NavLink href='#projects-container'>Projects</NavLink>
          <NavLink href='#experience-container'>Experience</NavLink>
          <NavLink href='#contact-container'>Contact</NavLink>
        </NavItems>

        <LinkedinButton href={Bio.linkedin} target="display">Linkedin Profile</LinkedinButton>


        <MenuIcon>
          {isOpen ? <RiCloseLine onClick={() => setIsOpen(false)} /> : <RiMenu3Line onClick={() => setIsOpen(true)} />}
        </MenuIcon>

        {isOpen && <MobileNavItems>
          <MobileNavLink href='#about-container' onClick={() => setIsOpen(false)}>About</MobileNavLink>
          <MobileNavLink href='#experience-container' onClick={() => setIsOpen(false)}>Experiance</MobileNavLink>
          <MobileNavLink href='#projects-container' onClick={() => setIsOpen(false)}>Projects</MobileNavLink>
          <MobileNavLink href='#testimonials-container' onClick={() => setIsOpen(false)}>Testimonials</MobileNavLink>
          <MobileNavLink href='#contact-container' onClick={() => setIsOpen(false)}>Contact</MobileNavLink>
        </MobileNavItems>}
      </Nav>
    </NavbarContainer>
  )
}

export default Navbar;