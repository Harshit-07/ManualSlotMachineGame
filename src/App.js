import logo from './logo.svg';
import './App.css';
import Slot from './SlotMc';

const App = () => {
  return (
    <>
      <h1 className="heading_style"> 🎰 Welcome to <span style={{ fontWeight: 'bolder' }}> Slot machine Game </span> 🎰 </h1>
      <Slot x='🤠' y='🤠' z='🤠' />
      <Slot x='❄️' y='☠️' z='😃' />
      <Slot x='🎅' y='😃' z='🤣' />
      <Slot x='🤗' y='😁' z='🤣' />
      <Slot x='👽' y='👽' z='👽' />
    </>
  );
}

export default App;
