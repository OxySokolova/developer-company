import './App.css' 
import logo from './villa-modified.png'

function Menu(){
    return(   
        <nav className="nav">
            
            <a className="item" href="#">ABOUT US</a>
            <a className="item" href="#">PROJECTS</a>
            <img src={logo} alt="logo" width="70px"/>
            <a className="item" href="#">PROCESS</a>
            <a className="item" href="#">CONSULTATION</a>
        </nav>
    )
}
export default Menu;