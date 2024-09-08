import "./chat.css"
import EmojiPicker from "emoji-picker-react";
import { useState } from "react";
function Chat(){
    const [open, setopen] = useState(false)
    const [text, settext] = useState("");
    const handleEmoji = e => {
        settext((prev) => prev + e.emoji);
        setopen(false);
    }
    return(
        <div className="chat">
            <div className="top">
                <div className="user">
                    <img src="./avatar.png" alt=""/>
                    <div className="texts">
                        <span>kary</span>
                        <p>make a little smile</p>
                    </div>
                </div>
                <div className="icons">
                    <img src="./phone.png" alt=""/>
                    <img src="./video.png" alt=""/>
                    <img src="./info.png" alt=""/>

                </div>
            </div>
            <div className="center">
                <div className="message">
                    <img src="./avatar.png" alt=""/>
                    <div className="texts">
                        <p>Hey whats going on!!!</p>
                    </div>
                    <span>1 min ago</span>
                </div>
                <div className="message own">
                    <div className="texts">
                        <img src="https://i.pinimg.com/736x/2f/33/82/2f33828f5862c6470630204c842ea3a7.jpg" alt="" />
                        <p>The day is boring</p>
                    </div>
                    <span>1 min ago</span>
                </div>
            </div>
            <div className="bottom">
                <div className="icons">
                    <img src="./img.png" alt=""/>
                    <img src="./camera.png" alt=""/>
                    <img src="./mic.png" alt=""/>
                </div>
                <input type="text" placeholder="Type a mesaage..." 
                value={text}
                onChange={e => settext(e.target.value)}
                />
                <div className="emoji">
                    <img src="./emoji.png" alt="" 
                    onClick={() => setopen(prev => !prev)}/>
                    <div className="picker">
                    <EmojiPicker open = {open} onEmojiClick={handleEmoji}/>
                    </div>
                </div>
                <button className="sendButton">send</button>
            </div>
        </div>
    )
}
export default Chat;