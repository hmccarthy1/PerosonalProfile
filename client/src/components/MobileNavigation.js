import NavLinks from "./NavLinks";
import {CgMenuRound} from 'react-icons/cg';
import {GiCancel} from 'react-icons/gi';
import {useState} from 'react';

const MobileNavigation = () => {


    
const [open, setOpen] = useState(false)

const hamburgerIcon =   <CgMenuRound color="white" size={"8vh"} id="hamburgerMenu"
onClick={() => {setOpen(!open); console.log(open)}}
></CgMenuRound>;

const closeIcon = <GiCancel color="red" size={"8vh"} id="hamburgerMenu"
onClick={() => {setOpen(!open); console.log(open)}}

></GiCancel>;

    return (

        <>
        <nav
        >

        
      {open ? closeIcon : hamburgerIcon}

        {open ? 
        <div className='mobileNav'>
        
        <NavLinks></NavLinks> 
        </div>
        
        
        : null}

        </nav>
        
        </>

    )
}

export default MobileNavigation;