import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './header.css';
import { CiSearch } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { FcMenu } from "react-icons/fc";
import { MdClose } from "react-icons/md";
import Swal from 'sweetalert2';


const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [mobnav,setmobnav] = useState(false);
    const [email, setEmail] = useState('');

     const opennav = () =>{
        setIsOpen(true);
        
        

    }
    const closenav = ()=>{
        setIsOpen(false)
    }
     const opennav2 = () =>{
        setmobnav(true);
        
        

    }
    const closenav2 = ()=>{
        setmobnav(false)
      };
  return (
    <div>
        <div className="header">
            <div className="parent-container">
            <div className="main-container">
                <div className="serach-bar">
                    <button className='action-btn'  onClick={opennav}><FcMenu /></button>
                    <button  className='searchbutton' onClick={opennav2}><CiSearch  className='sec'/></button>
                        <input type="search" name="" id="" placeholder='What are you looking for ?'/>
                </div>
            </div>
            <div className="main-container">
                <div className='logo' >
                  <h4   style={{marginBottom:"0px",textAlign:'center'}}>BIGZILLA</h4>
                </div>
            </div>
            <div className="main-container" >
                <ul className='nav-icon'>
                    <li className="icon" onClick={handleShowAlert}><CiMail /></li>
                    <li className="icon"><CiUser/></li>
                    <li className="icon"><CiShoppingCart/></li>
                </ul>
            </div>
            </div>
            <nav className="nav-bar text-center">
                <ul className="navbar-nav nav-cs justify-content-center">
                    <li className="nav-item active">
                        <Link className="nav-link" to="#">Home <span className='close-btn'> </span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#">Shop All</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#">Men</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#">Women</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#">Sale</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#">Hot</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#">Get in Touch!</Link>
                    </li>
                </ul>
            </nav>
            {/* {`mob-nav text-center ${isNavOpen ? 'open' : ''}`} */}
            <nav className={`mob-nav ${isOpen ? 'open' : ''}`}>
                <ul className="navbar-nav nav-cs justify-content-center">
                  
                    <li className="nav-item active">
                        <Link className="nav-link" to="#">Home <span className='close-btn'>  <button className='action-btn' onClick={closenav}><MdClose /></button></span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#">Shop All</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#">Men</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#">Women</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#">Sale</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#">Hot</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#">Get in Touch!</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#">Account</Link>
                    </li>
                    
                </ul>
            </nav>
            <nav className={`mob-nav-menu ${mobnav ? 'open' : ''}`}>
                <ul className="navbar-nav nav-cs justify-content-center">
                  <div className="drawee_Serchbar">
                    <div className="mob_serarch">
                        <button type="button" className='searchbutton'><CiSearch/></button>
                        <input type="search" placeholder="What Are You Looking for :)" />
                    </div>
                    <div className="closebtn">
                    <button className='action-btn' onClick={closenav2}><MdClose /></button>
                    </div>
                  </div>
                  <div className="drawee-item">
                    <div className="shop">
                        <ul className='Mensection'>
                            <li style={{marginBottom:"3%"}}>
                                <Link className='shop-tittle'>Men</Link>
                            </li>
                            <li >
                                <Link className='shop-item' to="">Jackets</Link>
                            </li>
                            <li>
                                <Link  className='shop-item' to="">Sweatshirts</Link>
                            </li>
                            <li>
                                <Link  className='shop-item' to="">Shakets - Flannel Shirt</Link>
                            </li>
                            <li>
                                <Link className='shop-item'  to="">Hoodies</Link>
                            </li>
                            <li>
                                <Link className='shop-item'  to="">T-Shirt</Link>
                            </li>
                            <li>
                                <Link  className='shop-item' to="">Bottom - Weare</Link>
                            </li>
                            <li>
                                <Link  className='shop-item' to="">Shirts</Link>
                            </li>
                            <li>
                                <Link  className='shop-item' to="">Polo T-Shirts</Link>
                            </li>
                        </ul>     
                    </div>
                    <div className="shop">
                        <ul className='Mensection' style={{marginTop:"3%"}}>
                                <li style={{marginBottom:"3%"}}>
                                    <Link className='shop-tittle'>Women</Link>
                                </li>
                                <li >
                                    <Link className='shop-item' to="">Empower Her</Link>
                                </li>
                                <li>
                                    <Link  className='shop-item' to="">Crop Top</Link>
                                </li>
                                <li>
                                    <Link className='shop-item'  to="">Hoodies</Link>
                                </li>
                                <li>
                                    <Link className='shop-item'  to="">T-Shirt</Link>
                                </li>
                                <li>
                                    <Link  className='shop-item' to="">Bottom - Weare</Link>
                                </li>
                                <li>
                                    <Link  className='shop-item' to="">Shirts</Link>
                                </li>
                            </ul>
                    </div>
                    <div className="shop">
                     <ul className='Mensection'>
                            <li style={{marginBottom:"3%"}}>
                                <Link className='shop-tittle'>RICH COTTON</Link>
                            </li>
                            <li >
                                <Link className='shop-item' to="">Supima + Model</Link>
                            </li>
                            <li>
                                <Link  className='shop-item' to="">Supima</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="shop">
                     <ul className='Mensection'>
                            <li style={{marginBottom:"3%"}}>
                                <Link className='shop-tittle'>GET IN TOUCH</Link>
                            </li>
                            <li >
                                <Link className='shop-item' to="">FAQ</Link>
                            </li>
                            <li>
                                <Link  className='shop-item' to="">About Us</Link>
                            </li>
                            <li>
                                <Link  className='shop-item' to="">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                  </div>
                </ul>
            </nav>


        </div>
        
    </div>
  )
}

export default Header
