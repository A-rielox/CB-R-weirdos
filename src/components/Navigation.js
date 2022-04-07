import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import Button from './Button';

const Navigation = () => {
   return (
      <Section>
         <NavBar>
            <Logo />

            <Menu>
               <MenuItem>Home</MenuItem>
               <MenuItem>About</MenuItem>
               <MenuItem>Roadmap</MenuItem>
               <MenuItem>Showcase</MenuItem>
               <MenuItem>Team</MenuItem>
               <MenuItem>Faq</MenuItem>
            </Menu>

            <Button text="Botón" link="/" />
         </NavBar>
      </Section>
   );
};

export default Navigation;

const Section = styled.section`
   width: 100vw;
   background-color: ${props => props.theme.body};
`;

const NavBar = styled.nav`
   display: flex;
   justify-content: space-between;
   align-items: center;

   width: 85%;
   margin: 0 auto;
   height: ${props => props.theme.navHeight};

   .mobile {
      display: none;
   }

   @media (max-width: 64em) {
      .desktop {
         display: none;
      }
      .mobile {
         display: inline-block;
      }
   }
`;

const Menu = styled.ul`
   display: flex;
   justify-content: space-between;
   align-items: center;
   list-style: none;

   @media (max-width: 64em) {
      /* 1024 px */

      /* position: fixed;
      top: ${props => props.theme.navHeight};
      left: 0;
      right: 0;
      bottom: 0;
      width: 100vw;
      height: ${props => `calc(100vh - ${props.theme.navHeight})`};
      z-index: 50;
      background-color: ${props => `rgba(${props.theme.bodyRgba},0.85)`};
      backdrop-filter: blur(2px);

      transform: ${props =>
         props.click ? 'translateY(0)' : `translateY(1000%)`};
      transition: all 0.3s ease;
      flex-direction: column;
      justify-content: center;

      touch-action: none; */
   }
`;

const MenuItem = styled.li`
   margin: 0 1rem;
   color: ${props => props.theme.text};
   cursor: pointer;

   &::after {
      content: ' ';
      display: block;
      width: 0%;
      height: 2px;
      background: ${props => props.theme.text};
      transition: width 0.3s ease;
   }
   &:hover::after {
      width: 100%;
   }

   @media (max-width: 64em) {
      /* margin: 1rem 0;

      &::after {
         display: none;
      } */
   }
`;
