import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar.jsx/Navbar';
import MainRoutes from './AllRoutes/MainRoutes';
import { Text } from '@chakra-ui/react';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MainRoutes/>
      <Text fontSize={"14px"} color={"blue.700"} fontWeight={"bold"}>Powerd by Avitor Cloud</Text>
    </div>
  );
}

export default App;
