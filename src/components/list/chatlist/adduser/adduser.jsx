import "./adduser.css"
function Adduser(){
    return(
        <div className="addUser">
            <form>
                <input type="text" placeholder="username" name="username" />
                <button>search</button>
            </form>
            <div className="user">
                <div className="details">
                    <img src="./avatar.png" alt="" />
                    <span>Kary</span>
                </div>
                <button>Add User</button>
            </div>
        </div>
    )
}
export default Adduser