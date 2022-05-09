

import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {

  const title = "Welcome to the permanent skin store";
  
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="content">
        <Home></Home>
      </div>
    </div>
  );
}

export default App;
