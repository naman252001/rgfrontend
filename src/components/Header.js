import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Header = () => {
    let navigate=useNavigate();
    const logoutHandler=() =>{
        localStorage.clear();
        navigate('/');
    }


    return (
       
        <div className="row bg-warning d-flex align-items-center ">
            <div className="col-sm-3 ">
                <Link to="/" >   <img className=" w-25"  src="/imgs/logo.png" alt="logo here"/> </Link>
            </div>
            <div className="col-sm-5 text-center" >
                <b>   <i> Creating Happy Home Owners Everyday </i> </b>
            </div>
            <div className="col-sm-4 d-flex justify-content-center">
            {
                (localStorage.getItem('name'))&&
                <h4>Hello {localStorage.getItem('name')}! &nbsp;&nbsp;</h4>
            }
            {
                (localStorage.getItem('name'))?
                <Link to="/logout"> <button className="btn btn-success mr-3" onClick={logoutHandler}> Logout </button> </Link>
                :<Link to="/login"> <button className="btn btn-primary mr-3"> Login </button> </Link>
            }&nbsp;&nbsp;&nbsp;&nbsp;
       


            {!localStorage.getItem('name')&&
            // <div className="col-sm-3">
                <Link to="/signup"> <button className="btn btn-success mr-3">Sign Up</button> </Link>
            // </div>
            }
            </div>

            {/* <div className="col-sm-1">
                
                    <h3>
                        
                        <Link to="/query"><button className="btn btn-danger mr-3"> Enquiry</button></Link>
                        </h3>
                
            
            </div> */}


        </div>
       
     );
}
 
export default Header;





// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";


// const Header = () => {
//     let navigate = useNavigate();
//     const logoutHandler = () => {
//         localStorage.clear();
//         navigate('/');
//     };

//     return (
//         <div className="container-fluid bg-warning py-2">
//             <div className="row align-items-center">
//                 <div className="col-sm-3 text-center text-sm-left">
//                     <Link to="/">
//                         <img className="w-50" src="/imgs/logo.png" alt="logo here" />
//                     </Link>
//                 </div>
//                 <div className="col-sm-4 text-center">
//                     <b><i>Creating Happy Home Owners Everyday</i></b>
//                 </div>
//                 <div className="col-sm-4 text-center text-sm-right">
//                     {localStorage.getItem('name') && (
//                         <h4>Hello {localStorage.getItem('name')}!</h4>
//                     )}
//                     {localStorage.getItem('name') ? (
//                         <button className="btn btn-success mr-3" onClick={logoutHandler}>Logout</button>
//                     ) : (
//                         <>
//                             <Link to="/login">
//                                 <button className="btn btn-primary mr-3">Login</button>
//                             </Link>
//                             <Link to="/signup">
//                                 <button className="btn btn-success mr-3">Sign Up</button>
//                             </Link>
//                         </>
//                     )}
//                 </div>
//                 <div className="col-sm-1 text-center text-sm-right">
//                     <Link to="/query">
//                         <button className="btn btn-danger">Enquiry</button>
//                     </Link>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Header;




// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

// const Header = () => {
//     let navigate = useNavigate();
//     const logoutHandler = () => {
//         localStorage.clear();
//         navigate('/');
//     };

//     return (
//         <div className="container-fluid bg-warning py-2">
//             <div className="row align-items-center">
//                 <div className="col-sm-3 text-center text-sm-left">
//                     <Link to="/">
//                         <img className="w-50" src="/imgs/logo.png" alt="logo here" />
//                     </Link>
//                 </div>
//                 <div className="col-sm-4 text-center">
//                     <b><i>Creating Happy Home Owners Everyday</i></b>
//                 </div>
//                 <div className="col-sm-4 d-flex justify-content-end">
//                     {localStorage.getItem('name') && (
//                         <h4 className="mr-3">Hello {localStorage.getItem('name')}!</h4>
//                     )}
//                     {localStorage.getItem('name') ? (
//                         <button className="btn btn-success mr-3" onClick={logoutHandler}>Logout</button>
//                     ) : (
//                         <>
//                             <Link to="/login">
//                                 <button className="btn btn-primary mr-3">Login</button>
//                             </Link>
//                             <Link to="/signup">
//                                 <button className="btn btn-success mr-3">Sign Up</button>
//                             </Link>
//                         </>
//                     )}
//                 </div>
//                 <div className="col-sm-1 text-center text-sm-right">
//                     <Link to="/query">
//                         <button className="btn btn-danger">Enquiry</button>
//                     </Link>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Header;
