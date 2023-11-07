import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar(props) {
    return (
        <div className='container'>
            <Link to={"/login"}>
                <button>Login</button>
            </Link>

            <Link to={"/restaurant"}>
                <button>Restaurant</button>
            </Link>
        </div>
    );
}

export default Navbar;