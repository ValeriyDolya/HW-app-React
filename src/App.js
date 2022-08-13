
import './App.css';
import Header from './Header/Header.js';
import Main from './Main/Main.js';
import Sidebar from './Sidebar/Sidebar.js';


function App() {
  return (
    <div className="container">
      <Header />
      <div className="mainAndSidebar">
        <Sidebar />
        <Main /> 
      </div>
    </div>
  );
}

export default App;
