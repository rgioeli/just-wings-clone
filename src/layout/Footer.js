import { Link } from "react-router-dom";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterWrapper>
      <img src="/images/footer_logo.png" alt="site_logo" />
      <section>
        <StyledLink to="/info/sitemap">SITEMAP</StyledLink>
        <StyledLink to="/info/private-policy">PRIVATE POLICY</StyledLink>
        <StyledLink to="/info/terms-and-conditions">T&C</StyledLink>
        <StyledLink to="/info/faqs">FAQS</StyledLink>
        <StyledLink to="/info/web-accessibility">WEB ACCESSIBILITY</StyledLink>
        <StyledLink to="/info/allergen-and-nutrition-info">
          ALLERGEN & NUTRITION INFO
        </StyledLink>
      </section>
      <p>&copy; 2022 All rights reserved.</p>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.div`
  background-color: #111;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  section {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row wrap;
    margin-top: 0.5rem;
  }
  p {
    color: #fff;
  }
`;

const StyledLink = styled(Link)`
  font-size: 1rem;
  font-weight: 500;
  color: #fff;
  text-decoration: none;
  margin-left: 1rem;
  padding: 0.25rem;
`;

export default Footer;
