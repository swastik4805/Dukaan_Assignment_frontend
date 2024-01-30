import { useState } from "react"
import { routes } from "./Routes";
import './Navbar.scss';
import { ImCross } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";
// import { Link } from 'react-router'
const Navbar=()=>{
    const[menu,setMenu]=useState(false);

    return(
        <div>
            <div className="navbar">
                <a href='#' className='menu-bars'>
                <GiHamburgerMenu  onClick={()=>{
                    setMenu(true);
                }}/>
                    
                </a>
                <nav className={menu? 'nav-menu active' : 'nav-menu'}>
                    <ul>
                        <li>
                            <a href='#' className='menu-bars'>
                                <ImCross onClick={()=>{
                                    setMenu(!menu);
                                }}/>
                            </a>
                        </li>
                        {routes.map((item,index)=>{
                            return(
                                <li key={index}>
                                        {item.icon}
                                        <div className="text-white font-semibold text-xl p-4">{item.title}</div>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </div>
        </div>
    )
}
export default Navbar