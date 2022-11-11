import style from 'styled-components';
import parfum from './images/parfum.jpg';

const Card = style.div`
  margin-top: 60px;
  margin-left: 130px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 75%;
  padding: 50px;
  color: #444;
  background-color: hsl(30, 38%, 92%);
`;

const Description = style.div`
  margin-left: 50px;
`;

const Title = style.h1`
  font-family: arial,sans-serif;
  color: #0d1a26;
  font-weight: 400;
`;

const Subtitle = style.h2`
  font-family: arial,sans-serif;
  font-size: 14px;
  color: #0d1a26;
  font-weight: 200;
`;

const Navigation = style.ul`
  font-family: courier,sans-serif;
`;

const Paragraphe = style.p`
  color: red;
`;


function App() {
  return ( 
    <Card>
        <img src={parfum} alt="photo du parfum" />
        <Description>
        <Title>Gabrielle Essence</Title>
        <Subtitle>EAU DE PARFUM</Subtitle>
        <Navigation>
          <li>A floral, solar and voluptuous interpretation</li>
          <li>Composed by Olivier Polge</li>
          <li>$149.99</li>
        </Navigation>
        <Paragraphe>En rupture de stock</Paragraphe>
        </Description>   
    </Card>
  );
}

export default App;
