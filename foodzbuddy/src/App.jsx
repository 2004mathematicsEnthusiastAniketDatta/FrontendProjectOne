
import './App.css'

let Header =() =>{
  return (
    <div className='header'>
      <div id='logo'>
        <img src="./assets/" alt="" srcSet="" />
      </div>
    </div>
  )
}
function App() {
  return (
    <>
    <div className='app'>
      <Header />
      <div id='main'>
        <h1>Welcome to FoodsBuddy!</h1>
        <p>Find and share recipes from around the world.</p>
      </div>
      <div id='footer'>
        <p>&copy; 2023 FoodsBuddy. All rights reserved.</p>
      </div>
    </div>
    </>
  )
}

export default App
