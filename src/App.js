
import './App.css';
import DisplayTabs from './components/DisplayTabs';
import UserForm from './components/UserForm';
import React, {useState} from 'react';

function App() {
  const [alltabs, setAlltabs] = useState({
    tab1:"hunka hunka",
    tab2:"Ross is hitched",
    tab3:"Oscar gonna win Oscar"
  });

  return (
    <div className="App">
      <h1>Welcome to DutTech.org</h1>
      {/* {JSON.stringify(alltabs)} */}
      <DisplayTabs alltabs = {alltabs}/>
    </div>
  );
}

export default App;
