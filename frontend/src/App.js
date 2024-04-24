import { Container } from 'react-bootstrap';
import Header from './components/Header';

const App = () => {
  return (
    <>
      <h1>Welcome To ProShop</h1>
      <Header />
      <main className='py-3'>
        <Container>
          <h1>Welcome to ProShop</h1>
        </Container>
      </main>
    </>
  );
};

export default App;