import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles/style.scss";
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const drawerRef = useRef<HTMLDivElement>(null);



  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function handleEscapeKey(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, []);
  return (
    <>
    <div className="nav">
      <div className="input-container">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          style={{ color: "#3B3C36" }}
        />
        <input type="text" />
      </div>
      <div className="nav-link">
        <p>Catagories</p>
        <p>Website Builders</p>
        <p>Today's Deals</p>
      </div>
      <FontAwesomeIcon icon={faBars} className="menu" style={{color: "white"}} onClick={()=>{
        setOpen(true);
        console.log(open)
      }}/>
    </div>


      {/* //for smaller screens */}

      
      <div className={open ? "small-nav-link translate-x-0" : "small-nav-link"} ref={drawerRef}>
        <p>Catagories</p>
        <p>Website Builders</p>
        <p>Today's Deals</p>
      </div>
      

    </>
  );
};

export default Navbar;
