import React from 'react';
import './App.css';
import AddContact from './component/AddContact';
import ContactList from './component/ContactList';
import Header from './component/Header';
function App() {
  const contacts=[
    {
      id:"5134",
      name:'raga',
      email:"raga12@gmail.com",
    },
    {
      id:"5135",
      name:'jaya',
      email:"jaya12@gmail.com",
    },
  ];
  return(
    <div className='ui container'> 
    <Header/>
    <AddContact/>
    <ContactList contacts={contacts}/>
    </div>

  );
}

export default App;
