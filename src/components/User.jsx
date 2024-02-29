import SignIn from '../components/LogIn'
import LogOut from '../components/LogOut';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';

const User = () => {
    const [user] = useAuthState(auth);

    const photo = user ? user.photoURL : "/icono.png";
    const name = user ? user.displayName : "Usuario";
    return ( 
        <div className='right-side'>
            <h1><i className="fa-solid fa-bolt"></i>Vite Chat</h1>
            <article className='card-user'>
                <img src={photo} alt="Usuario" referrerPolicy='no-referrer'/>
                <p>{name}</p>
                { user ? <LogOut/> : <SignIn/> }
            </article>
        </div>
    );
}
 
export default User;
