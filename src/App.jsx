import "./main.css";
import Foods from './components/foods';
import Search from './components/search';
import { useState } from "react";

 const App = () => {
  const [value, setValue] = useState('')

   return (
     <div className='wrapper'>
      <Search setValue={setValue} />
      <Foods value={value} />
     </div>
   );
 }

export default App
