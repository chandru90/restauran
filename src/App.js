import React , {useState} from 'react'
import './App.css';
import RestForm from './components/RestForm'
import ItemList from './components/ItemList'

function App() {
  const [userslist,setuserlist]  = useState('')
const adduserhandler =(uid,udish) =>{
  setuserlist(prevuserlist => {
    return [...prevuserlist,{id :uid , dish: udish}]
  }
  )
}

  return (
    <div>
      <RestForm onrestform = {adduserhandler}></RestForm>
      <ItemList users ={userslist} ></ItemList>
    </div>
    
  );
}

export default App;
