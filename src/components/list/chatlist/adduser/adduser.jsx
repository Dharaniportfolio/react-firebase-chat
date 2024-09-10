import { collection, doc, getDocs, query, serverTimestamp, setDoc, updateDoc, where, arrayUnion } from "firebase/firestore";

import "./adduser.css"
import { db } from "../../../../lib/firebase"
import { useState } from "react"
import { useUserStore } from "../../../../lib/userstore";


function Adduser(){

    const [user,setuser] = useState(null);

    const {currentUser} = useUserStore();

    const handlesearch =  async e =>{
        e.preventDefault()
        const formData = new FormData(e.target)
        const username = formData.get("username")

        try{
            const userRef = collection(db, "users");

            const q = query(userRef, where("username", "==", username));
            const querySnapShot = await getDocs(q)

            if(!querySnapShot.empty){
                    setuser(querySnapShot.docs[0].data())
            }

        }catch(err){
            console.log(err);
        }
        
    }
    const handleAdd = async() =>{
            const chatRef = collection(db,"chats")
            const userChatsRef = collection(db,"userchats")
        try{
            const newChatRef = doc(chatRef);

            await setDoc(newChatRef,{
                createdAt : serverTimestamp(),
                messages: [],
            })
            await updateDoc(doc(userChatsRef,user.id),{
                chats:arrayUnion({
                    chatId: newChatRef.id,
                    lastMessage:"",
                    receiverId: currentUser.id,
                    updatedAt: Date.now(),
                })
            })

            await updateDoc(doc(userChatsRef,currentUser.id),{
                chats:arrayUnion({
                    chatId: newChatRef.id,
                    lastMessage:"",
                    receiverId: user.id,
                    updatedAt: Date.now(),
                })
            })
        }
        catch(err){
            console.log(err);
        }
    }
    return(
        <div className="addUser">
            <form onSubmit={handlesearch}>
                <input type="text" placeholder="username" name="username" />
                <button>search</button>
            </form>
            {user && <div className="user">
                <div className="details">
                    <img src={user.avatar || "./avatar.png"} alt="" />
                    <span>user.username</span>
                </div>
                <button  onClick={handleAdd}>Add User</button>
            </div>
            }
        </div>
    )
}
export default Adduser