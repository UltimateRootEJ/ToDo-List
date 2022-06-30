import pic from '../Media/Images/img_avatar2.png'
import { Link } from 'react-router-dom';
import '../css/SignUp.css'
import { useHistory } from 'react-router-dom';
function SignUp(props) {
let history=useHistory();

const login=(()=>{
    history.push('./')
})

    return (

        <div className="signUpContainer">
            <div className="imgContainer">
                <img src={pic} alt="Avatar" className="avatar"></img>
            </div>
            <div className="infoContainer2">
                <h1>Register</h1>
                <input placeholder="Please input your email" />
                <input placeholder="Password"></input>
                <input placeholder="Re-type Password"></input>
                <button onClick={login}>Sign up</button>
                <br></br>
                <span>Already have an aacount ?  <Link to="/">Sign in </Link></span>
               
            </div>
        </div>

    )

}



export default SignUp;