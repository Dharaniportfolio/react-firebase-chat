import { useState } from "react";
import "./login.css";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "firebase/auth";
import {auth,db} from "../../lib/firebase"
import { doc, setDoc } from "firebase/firestore";
import upload from "../../lib/upload";


function Login(){
    const [avatar,setavatar] = useState({
        file:null,
        url:""

    })
    
    const [loading, setLoading] = useState(false);

    const handleavatar = e =>{
        if(e.target.files[0]){
        setavatar({
            file:e.target.files[0],
            url: URL.createObjectURL(e.target.files[0])
        })
    }
    }
    
    const handlelogin = async(e) =>{
        e.preventDefault()
        setLoading(true);
        const formdata = new FormData(e.target);
        const {email,password} = Object.fromEntries(formdata);
        try{
            await signInWithEmailAndPassword(auth,email,password)
        }catch(err){
            console.log(err)
            toast.error(err.message);
        }finally{
            setLoading(false);
        }
    }

    const handleRegister = async (e) =>{
        e.preventDefault()
        setLoading(true)
        const formdata = new FormData(e.target);
        const {username, email,password} = Object.fromEntries(formdata);
        try{
            const res = await createUserWithEmailAndPassword(auth,email,password)

            const imgUrl = await upload(avatar.file)
            await setDoc(doc(db, "users", res.user.uid), {
                username,
                email,
                avatar:imgUrl,
                id:res.user.uid,
                blocked:[],
              });
              await setDoc(doc(db, "userchats", res.user.uid), {
                chats:[],
              });

              toast.success("Account created!")
        }
        catch(err){
            console.log(err);
            toast.error(err.message);
        }finally{
            setLoading(false)
        }
    }
    return(
        <div className="login">
            <div className="item">
            <h2>Welcome</h2>
            <form onSubmit={handlelogin}>
                <input type="text" placeholder="Email" name="email" />
                <input type="password" placeholder="Password" name="password" />
                <button disabled={loading}>{loading ? "Loading":"Sign In"}</button>
            </form>
            </div>
            <div className="separator"></div>
            <div className="item">
            <h2>Create an account</h2>
            <form  onSubmit={handleRegister}>
                <label htmlFor="file">
                <img src={avatar.url || "./avatar.png" } alt=""/>
                Upload an image</label>
                <input type="file" id="file" style={{display:"none"}} onChange={handleavatar}/>
                <input type="text" placeholder="Username" name="username" />
                <input type="text" placeholder="Email" name="email" />
                <input type="password" placeholder="Password" name="password" />
                <button disabled={loading}>{loading ? "Loading":"Sign up"}</button>
            </form>
            </div>
        </div>
    )
}
export default Login;