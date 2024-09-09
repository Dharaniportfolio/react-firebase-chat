import Chat from "./components/chats/chat"
import Detail from "./components/details/detail"
import List from "./components/list/list"
import Login from "./components/login/login"
import Notification from "./components/notification/notification"
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./lib/firebase"
import { useEffect } from "react";
const App = () => {
  const user = false;
  useEffect(() =>{
    const unSub = onAuthStateChanged(auth,(user)=>{
      console.log(user)
    });
    return () =>{
      unSub();
    }
  },[])
  return (
    <div className='container'>
      {user ? (
        <>
        <List/>
        <Chat/>
        <Detail/>
        </>
      ):(
        <Login/>
      )}
      <Notification/>
    
    </div>
  )
}

export default App