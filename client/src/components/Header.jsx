import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav';
import { useNavigate } from "react-router-dom";

export const Header = () => {
  // navigation
  const navigate = useNavigate();
  const handleClick = () => navigate("/");
  const handleClickCreateRecipe = () => navigate("/create");

  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand className="nav-brand" onClick={handleClick}>RecipeHub</Navbar.Brand>
        <Nav className="ms-auto">
            <Nav.Link onClick={handleClickCreateRecipe}>Create Recipes</Nav.Link>
          </Nav>
      </Container>
    </Navbar>
  );
};

/* 
<Nav className="me-auto">
            <Nav.Link href="#features">Home</Nav.Link>
          </Nav>
*/
