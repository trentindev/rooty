//src/components/Header/index.jsx
import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from "../../utils/style/colors";
console.log(colors);

const StyledLink = styled(Link)`
  padding: 15px;
  color: #8186a0;
  text-decoration: none;
  font-size: 18px;
  ${(props) =>
    props.$isFullLink &&
    `color: white; border-radius: 30px; background-color: ${colors.primary};`}
`;

function Header() {
  return (
    <nav>
      <StyledLink to="/">Accueil</StyledLink>
      <StyledLink to="/survey/1" $isFullLinks>
        Questionnaire
      </StyledLink>
      <StyledLink to="/profils">Profils</StyledLink>
    </nav>
  );
}

export default Header;
