import { auth } from "../firebase";
import { signOut } from "firebase/auth";

const LogOut = () => {

    const LogOut = () => {
        signOut(auth);
    }
    return(
        <button className="btn-login btn-logout" onClick={LogOut}>

            <i className="fa-brands fa-google"></i>
                Cerrar sesión
           
        </button>

    );
}

export default LogOut;