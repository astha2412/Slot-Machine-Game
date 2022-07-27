import react from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SlotM from './SlotMachine';



const App = () => {
   return (
     <>
      <h1 className="heading_style">
         Welcome to <span style ={{ fontWeight: "bold" }}> Slot Machine Game </span>
       </h1>
       <div className="slotmachine">
       <SlotM x= "😄" y= "😄" z= "😄" />
       <hr />
       <SlotM x= "😄" y= "😢" z= "😄" />
       <hr />
       <SlotM x= "😽" y= "😢" z= "😽" />
       <hr />
       <SlotM x= "😆" y= "😆" z= "😆" />
       </div>
     </>
   );
}


export default App;
