import React from 'react';
import styled from 'styled-components';

const LandingPageContainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100vh;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: ${(props) =>
    props.theme === 'light'
      ? 'linear-gradient(90deg, rgba(5,0,55,1) 0%, rgba(155,195,188,20) 100%)'
      : 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(55,0,55,1) 100%)'};
  color: white;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const Nav = styled.nav`
  & a {
    margin-left: 1.5rem;
    color: white;
    text-decoration: none;
    font-size: 1rem;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Hero = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  background: ${(props) =>
    props.theme === 'light'
      ? 'linear-gradient(90deg, rgba(5,0,55,1) 0%, rgba(155,195,188,20) 100%)'
      : 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(55,0,55,1) 100%)'};
  color: white;
  padding: 2rem;
`;

const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  & h1 {
    font-size: 3rem;
    margin: 0;
  }

  & p {
    font-size: 1.5rem;
  }

  & button {
    padding: 1rem 2rem;
    background-color: #afeac8;
    color: #333;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1rem;
    margin-top: 1rem;

    &:hover {
      background-color: #afeac8;
    }
  }
`;

const HeroImage = styled.div`
  & img {
    width: 100%;
    height: auto;
  }
`;

const Features = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  padding: 2rem;
  text-align: center;
  background: ${(props) =>
    props.theme === 'light'
  ? 'white'
  : 'black'};

`;

const Feature = styled.div`
  & img {
    width: 50px;
    height: 50px;
  }
  
`;

const Services = styled.section`
  padding: 2rem;
  text-align: center;
 
    background: ${(props) =>
      props.theme === 'light'
    ? 'white'
    : 'black'};
`;

const ServiceItems = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
`;

const ServiceItem = styled.div`
  & img {
    width: 100%;
    height: auto;
  }
`;

const Footer = styled.footer`
  padding: 2rem;
  background-color: #206058;
  color: white;
`;

const FooterLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 2rem;

  & h3 {
    margin-bottom: 1rem;
  }

  & ul {
    list-style: none;
    padding: 0;
  }

  & li {
    margin-bottom: 0.5rem;
  }

  & a {
    color: white;
    text-decoration: none;
  }
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
`;

const SocialIcons = styled.div`
  & img {
    width: 20px;
    height: 20px;
    margin-left: 1rem;
  }
`;

const LandingPage = ({ theme }) => {
  return (
    <LandingPageContainer>
      {/* <Header theme={theme}>
        <Logo>ASTRA</Logo>
        <Nav>
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#reviews">Reviews</a>
          <a href="#whyus">Why Us</a>
          <a href="#contact">Contact</a>
        </Nav>
      </Header> */}
      <Hero theme={theme}>
        <HeroText>
          <h1>Your Idea Matters!</h1>
          <p>Exploring the infinite possibilities of the digital age.</p>
          <button>Create Website</button>
        </HeroText>
        <HeroImage>
          <img src="/images/main.png" alt="Hero" /> 
        </HeroImage>
      </Hero>
      <Features theme={theme}>
        <Feature>
          <img src="/images/localbusiness.png" alt="Local Business" /> 
          <h2>Local Business</h2>
          <p>Empowering local businesses to thrive in the digital age.</p>
        </Feature>
        <Feature>
          <img src="/images/bag.png" alt="Online Store" /> 
          <h2>Online Store</h2>
          <p>Discover the latest trends and unbeatable deals at our online store!</p>
        </Feature>
        <Feature>
          <img src="/images/blogging.jpeg" alt="Blogging" /> 
          <h2>Blogging</h2>
          <p>Explore new perspectives, one blog post at a time.</p>
        </Feature>
        <Feature>
          <img src="/images/portfolio.png" alt="Portfolio" /> 
          <h2>Portfolio</h2>
          <p>Crafting digital experiences that captivate and inspire.</p>
        </Feature>
      </Features>
      <Services theme={theme}>
        <h2>Our Services</h2>
        <ServiceItems>
          <ServiceItem>
            <img src="/images/addtocart.png" alt="Service 1" /> 
          </ServiceItem>
          <ServiceItem>
            <img src="/images/thumsup.jpeg" alt="Service 2" /> 
          </ServiceItem>
          <ServiceItem>
            <img src="/images/thunder.jpeg" alt="Service 3" /> 
          </ServiceItem>
        </ServiceItems>
      </Services>
      <Footer>
        <FooterLinks>
          <div>
            <h3>About</h3>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#news">News</a></li>
              <li><a href="#hosting">Hosting</a></li>
              <li><a href="#privacy">Privacy</a></li>
            </ul>
          </div>
          <div>
            <h3>Showcase</h3>
            <ul>
              <li><a href="#showcase">Showcase</a></li>
              <li><a href="#themes">Themes</a></li>
              <li><a href="#plugins">Plugins</a></li>
              <li><a href="#patterns">Patterns</a></li>
            </ul>
          </div>
          <div>
            <h3>Learn</h3>
            <ul>
              <li><a href="#learn">Learn</a></li>
              <li><a href="#docs">Documentation</a></li>
              <li><a href="#devs">Developers</a></li>
              <li><a href="#tv">WordPress.tv</a></li>
            </ul>
          </div>
          <div>
            <h3>Get Involved</h3>
            <ul>
              <li><a href="#events">Events</a></li>
              <li><a href="#donate">Donate</a></li>
              <li><a href="#swag">Swag Store</a></li>
            </ul>
          </div>
        </FooterLinks>
        <FooterBottom>
          <p>&copy; 2024 Astra. All rights reserved.</p>
          <SocialIcons>
            <a href="https://www.instagram.com"><img src="/images/instagram.jpeg" alt="Instagram" /></a>
            <a href="https://www.facebook.com"><img src="/images/facebook.png" alt="Facebook" /></a>
            <a href="https://www.twitter.com"><img src="/images/twitter.png" alt="Twitter" /></a>
          </SocialIcons>
        </FooterBottom>
      </Footer>
    </LandingPageContainer>
  );
};

export default LandingPage;
