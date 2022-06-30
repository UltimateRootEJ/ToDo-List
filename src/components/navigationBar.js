
import '../css/navigationBar.css'
import { Link } from 'react-router-dom';


export default function NavigationBar() {

    return (
        <div className="navDiv">
            <div className="homeNav">
                <h1>Home</h1>
            </div>
            <div className="logOutNav">
            <h1> <Link className="logoutLink" to="/">Logout</Link>  </h1>
            </div>


        </div>
    )
}