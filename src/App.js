import React from 'react';
import Profile from './profile/Profile.js';
import Pic from './profile/Pic.js';


function App() {
  const fullName="Hanen Ben Ali";
  const bio="Good Analytic Skills · Deep Logic Building et Problem Solving Skills · Great Understanding of Data Structures et Algorithms ·"
  const profession="developper";
  const pic="https://www.studyrama.com/IMG/arton1086.png"
  
  
  return (
    <div className="App">

       <Pic pic={pic}/>

      <Profile fullName={fullName} bio={bio} profession={profession}/>     

    </div>
  );
}

export default App;