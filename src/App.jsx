import Chat from "./components/chats/chat"
import Detail from "./components/details/detail"
import List from "./components/list/list"
const App = () => {
  return (
    <div className='container'>
      
      <List/>
      <Chat/>
      <Detail/>
    </div>
  )
}

export default App