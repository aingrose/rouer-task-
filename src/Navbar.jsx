import { Link } from "react-router-dom"
import { useState } from "react";

function Navbar() {
  
  let [activeitem,setactive] = useState("");

  function click (on){
    setactive(on)
  }

  return (
  
    <nav className="navbar navbar-expand-lg  mb-5 text-size-3" >
            <div className="container-fluid d-flex  align-items-center justify-content-between g-5" style={{ textAlign: "center",backgroundColor:"#FFF",borderBottom:"1px solid lightgrey" }}>
           <hr></hr>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mx-auto ">
                  <li className={`nav-item  ${activeitem === "all" ? "active" : "" }` } >
                    <Link className="nav-link text-dark fs-5" aria-current="page" onClick={()=>click("all")} to={"/"}>ALL</Link>
                  </li>
                  <li className={`nav-item ${activeitem==="fsd" ? "active" : "" }`}>
                    <Link className="nav-link text-dark fs-5" onClick={()=>click("fsd")}  to={"/Fullstack"}>FULL STACK DEVELOPMENT </Link>
                  </li>
                  <li className={`nav-item  ${activeitem==="ds" ? "active" : "" }`}>
                    <Link className="nav-link text-dark fs-5"onClick={()=>click("ds")} to={"/Datascience"}>DATA SCIENCE</Link>
                  </li>
                  <li className={`nav-item ${activeitem==="cyber" ? "active" : "" }`}>
                    <Link className="nav-link text-dark fs-5" onClick={()=>click("cyber")} to={"Cyber"} aria-disabled="true">CYBER SECURITY</Link>
                  </li>
                  <li className={`nav-item ${activeitem==="carrer" ? "active" : "" }`}>
                    <Link className="nav-link text-dark fs-5"onClick={()=>click("carrer")} to={"Carrer"} aria-disabled="true">CAREER</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
  )
}

export default Navbar