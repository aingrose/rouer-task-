import  PropTypes  from "prop-types"
DataScience.propTypes={
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    
}

function DataScience({name,img,desc}) {
    return (
        <div className="col-lg-4   col-md-6 col-sm-12 ">
            <div className="card mb-4" style={{ width: "22rem" ,height:"26rem"}}>
                <img src={img}  style={{ height: "13rem",width:"22rem"}}className="card-img-top" alt="..."></img>
                <div className="card-body" style={{ height: "20rem"}}>
                    <h5>{name}</h5>
                    <p className="card-text">{desc}</p>
                    
                

                </div>
            </div>
        </div>
    )
}

export default DataScience