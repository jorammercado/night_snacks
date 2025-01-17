import { Link } from "react-router-dom"
import "./NavBar.css"

export default function NavBar() {
    return (
        <div className="navbar" >
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
                <div className="container-fluid">
                    <div>
                        <Link to="/home">Home </Link>

                        <Link to="/snacks"> Snacks </Link>

                        <Link to="/snacks/new"> New Snack </Link>

                        <Link to="/login"> Login </Link>

                        <Link to="/signup"> Sign Up </Link>

                        <Link to="/users/:user_id/profile"> User </Link>

                    </div>
                    <span className="navbar-text">
                        Night Snacks
                    </span>
                </div>
            </nav>
        </div>
    )
}

