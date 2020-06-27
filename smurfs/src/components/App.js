import React from "react";
import "./App.css";

import SmurfList from './SmurfList';
import NewSmurf from './NewSmurf';
import DeleteSmurf from './DeleteSmurf';

function App() {
  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <NewSmurf />
      <DeleteSmurf />
      <SmurfList />
    </div>
  );
}

export default App;
