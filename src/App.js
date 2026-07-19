import './App.css';
import { Header } from './components/page-layout/Header';
import { Container } from './components/page-layout/Container';
import { Footer } from './components/page-layout/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <Container />
      <Footer />
    </div>
  );
}
export default App;