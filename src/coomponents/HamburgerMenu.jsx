import Hamburger from "hamburger-react";
import { useState } from "react";

export function HamburgerMenu(){
    const[isOpen, setOpen]=useState(false);
    
    return(
        <div className="lg:hidden ">
            <Hamburger toggled={isOpen} size={20 }></Hamburger>
        </div>
    )
}