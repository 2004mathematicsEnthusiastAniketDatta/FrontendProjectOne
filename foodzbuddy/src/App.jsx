
import './App.css'

let Header =() =>{
  return (
    <div className='header'>
      <div id='logo'>
        <img src="./src/assets/foodzBuddy.png" alt="foodzBuddy" />
      </div>
      <div className='nav-items'>
      <ul>
         <li>Home</li>
         <li>About Us</li>
         <li>Contact Us</li>
         <li>Cart</li>
      </ul>
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
