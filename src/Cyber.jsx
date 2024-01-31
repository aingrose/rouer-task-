import  PropTypes  from "prop-types"
Cyber.propTypes={
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    
}

function Cyber({name,img,desc}) {
    return (
        <div className="col-lg-4 col-md-6 col-sm-12 ">
            <div className="card mb-4" style={{ width: "22rem" ,height:"26rem"}}>
                <img src={img}  style={{ height: "13rem"}}className="card-img-top" alt="..."></img>
                <div className="card-body" style={{ height: "20rem"}}>
                    <h5>{name}</h5>
                    <p className="card-text">{desc}</p>
                  
                

                </div>
            </div>
        </div>
    )
}

export default Cyber




// function Carrer({name,img,desc}) {
//     return ( 
//         <div className="col-lg-4 col-md-6 col-sm-12  ">
//             <div className="card mb-4" style={{ width: "20rem" ,height:"25rem"}}>
//                 <img src={img}  style={{ height: "10rem"}}className="card-img-top" alt="..."></img>
//                 <div className="card-body" style={{ height: "20rem"}}>
//                     <h5>{name}</h5>
//                     <p className="card-text">{desc}</p>
//                     <h6  className=" mt-3"style={{color:"green",fontSize:"13px"}}>{"READ MORE"}</h6>
//                 </div>
//                 </div>

//                 </div>
         
        
//     )
// }

// export default Carrer