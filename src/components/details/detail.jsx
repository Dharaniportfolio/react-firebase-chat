import "./detail.css"
function Detail(){
    return(
        <div className="detail">
            <div className="user">
                <img src="./avatar.png" alt=""/>
                <h2>kary</h2>
                <p>make a little smile🐼</p>
            </div>
            <div className="info">
                <div className="option">
                <div className="title">
                    <span>Chat settings</span>
                    <img src="./arrowUp.png" alt=""/>
                </div>
                </div>
                <div className="option">
                <div className="title">
                    <span>Privacy % help</span>
                    <img src="./arrowUp.png" alt=""/>
                </div>
                </div>
                <div className="option">
                <div className="title">
                    <span>Shared photos</span>
                    <img src="./arrowDown.png" alt=""/>
                </div>
                <div className="photos">
                    <div className="photoItem">
                        <div className="photoDetail">
                        <img src="https://cdn.vox-cdn.com/thumbor/7MaqRQXnEM4Rc7xmZJIQ9QeGmEE=/0x0:2257x1320/1400x1050/filters:focal(1129x660:1130x661)/cdn.vox-cdn.com/uploads/chorus_asset/file/6839749/pokemon.0.png"
                        alt=""/>
                        <span>Photo_2024_2.png</span>
                        </div>
                        <img src="./download.png" alt="" className="icon"/>
                    </div>
                    <div className="photoItem">
                        <div className="photoDetail">
                        <img src="https://cdn.vox-cdn.com/thumbor/7MaqRQXnEM4Rc7xmZJIQ9QeGmEE=/0x0:2257x1320/1400x1050/filters:focal(1129x660:1130x661)/cdn.vox-cdn.com/uploads/chorus_asset/file/6839749/pokemon.0.png"
                        alt=""/>
                        <span>Photo_2024_2.png</span>
                        </div>
                        <img src="./download.png" alt="" className="icon"/>
                    </div>
                </div>
                </div>
                <div className="option">
                <div className="title">
                    <span>Shared Files</span>
                    <img src="./arrowUp.png" alt=""/>
                </div>
                </div>
                <button>Block User</button>
                <button className="logout">Logout</button>  
            </div>
        </div>
    )
}
export default Detail;