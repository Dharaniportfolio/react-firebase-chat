import Chat from "./components/chats/chat"
import Detail from "./components/details/detail"
import List from "./components/list/list"
import Login from "./components/login/login"
import Notification from "./components/notification/notification"
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./lib/firebase"
import { useEffect } from "react";
import { useUserStore } from "./lib/userstore"

const App = () => {
  const {currentUser,isLoading,fetchUserInfo} = useUserStore();
  useEffect(() =>{
    const unSub = onAuthStateChanged(auth,(user)=>{
      fetchUserInfo(user?.uid);
    });
    return () =>{
      unSub();
    }
  },[fetchUserInfo]);
  console.log(currentUser)
  if(isLoading) return <div className="loading">Loading...</div>
  return (
    <div className='container'>
      {currentUser ? (
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