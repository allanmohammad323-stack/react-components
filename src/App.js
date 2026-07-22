import './App.css';
import { Header } from './components/page-layout/Header';
import { Container } from './components/page-layout/Container';
import { Footer } from './components/page-layout/Footer';
import Button from './components/page-layout/training/button'
import NameReceiver from './components/page-layout/training/callback'
const consoleLogMessage=()=>console.log("this is message")
function App() {

  const receiveName = (name) => {
    console.log("User name:", name);
  };

  return (
    <div className="App">
      {
        <div>
          <Header />
          <Container />
          <Footer />
        {/*
         <NameReceiver sendName={receiveName} />
          <Button onClick={consoleLogMessage} />
         */} 
        </div>
      }
      
    </div>
  );
}
export default App;