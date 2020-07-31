import React, {useEffect, useState} from 'react'

const Navbar = () => {
  const [show, setShow] = useState(false)
  
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(window.scrollY > 100) {
        setShow(true);
      }else setShow(false);      
    });
    return() => {
      window.removeEventListener("scroll");
    }
  }, [])


  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img className="nav__logo"
       src="https://logos-download.com/wp-content/uploads/2016/03/Netflix_logo.png"
       alt="Netflix Logo"/>
       <img className="nav__avatar"
        src="https://pro2-bar-s3-cdn-cf1.myportfolio.com/dddb0c1b4ab622854dd81280840458d3/98032aebff601c1d993e12a0_rw_600.png?h=8030f4d5734548795c22da59ca72e3e1" alt="Netflix Avatar"/>
    </div>
  )
}

export default Navbar
