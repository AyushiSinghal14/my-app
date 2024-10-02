import React from 'react';
import { useSelector } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';

const Footer = styled.footer`
  padding: 2rem;
  background-color: ${(props) => (props.theme === 'light' ? '#206058' : '#1b4d47')};
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

const Card = styled.div`
  width: 18rem;
  background-color: ${(props) => (props.theme === 'light' ? '#ffffff' : '#2c2c2c')};
  color: ${(props) => (props.theme === 'light' ? '#000000' : '#ffffff')};
  border: ${(props) => (props.theme === 'light' ? '1px solid #ddd' : '1px solid #444')};

  .card-body {
    padding: 1rem;
  }

  .card-title {
    font-size: 1.25rem;
    margin-bottom: 0.75rem;
  }

  .card-text {
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  .btn-primary {
    background-color: ${(props) => (props.theme === 'light' ? '#007bff' : '#375a7f')};
    border-color: ${(props) => (props.theme === 'light' ? '#007bff' : '#375a7f')};
  }
`;

const About = () => {
  const globalTheme = useSelector((state) => state.theme.theme);

  return (
    <ThemeProvider theme={{ mode: globalTheme }}>
      <div>
        <div className="container mt-5 ">
          <div className="row">
            <div className="col-md-4">
              <Card theme={globalTheme}>
                <img src="/images/employee1.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Jesse Anglen</h5>
                  <h5 className="card-title">CEO</h5>
                  <p className="card-text">Jesse, a seasoned Solution Architect, adept Salesman, and skilled Developer, boasts over a decade of empowering entrepreneurs in the startup arena.</p>
                  <a href="#" className="btn btn-primary">Take Appointment</a>
                </div>
              </Card>
            </div>

            <div className="col-md-4">
              <Card theme={globalTheme}>
                <img src="/images/employee2.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Tyson Faulkner</h5>
                  <h5 className="card-title">President</h5>
                  <p className="card-text">Meet Tyson, a visionary entrepreneur with Over 20 Years in Steering who boasts a remarkable track record in steering service-oriented enterprises.</p>
                  <a href="#" className="btn btn-primary">Take Appointment</a>
                </div>
              </Card>
            </div>

            <div className="col-md-4">
              <Card theme={globalTheme}>
                <img src="/images/employee3.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Prasanjit Dey</h5>
                  <h5 className="card-title">CTO</h5>
                  <p className="card-text">Meet our visionary technocrat and serial entrepreneur, a trailblazer in crafting cutting-edge blockchain and AI-powered mobile and web applications.</p>
                  <a href="#" className="btn btn-primary">Take Appointment</a>
                </div>
              </Card>
            </div>
          </div>
        </div>

        <Footer theme={globalTheme} className='mt-5'>
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
      </div>
    </ThemeProvider>
  );
};

export default About;
