import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import { SidebarData } from "./SidebarData";


function Navbar() {
  // const [title, setTitle] = useState('')
  const [sidebar, setSidebar] = useState(false);

  // useEffect(() => {
    
  //   setTitle(novaVendaTitle);
  // }, [novaVendaTitle]);


  const showSidebar = () => {
    setSidebar(!sidebar);
    

  };
  // const changeNavTitle =(titulo) =>{
  //   setTitle(titulo)
  // }

  // console.log("recebi o titulo" +novaVendaTitle)

  

  return (
    <>
      <div className="navbar">
        <Link to="#" className="nav-menu-icon" onClick={showSidebar}>
          <FaIcons.FaBars />
        </Link>
        <h3 className="titulo">Vendas</h3>
        <h3 className=""></h3>
      </div>
      <div
        className={sidebar ? "sidebar-container active" : "sidebar-container"}
      >
        <ul className="sidebar-items">
          <li className="sidebar-toggle">
            <Link to="#" className="nav-menu-icon" onClick={showSidebar}>
              <FaIcons.FaWindowClose />
            </Link>
            
          </li>
          {SidebarData.map((sidebaritem) => {
            return (
              <li
                key={sidebaritem.id}
                className={sidebaritem.cName}
                onClick={showSidebar }
              >
                <Link to={sidebaritem.path}>
                  {sidebaritem.icon}
                  <span>{sidebaritem.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Navbar;