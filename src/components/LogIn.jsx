import { auth } from '../firebase';
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';

const SignIn = () => {
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  }

  return (
    <>
      <button 
        className='btn-login' 
        onClick={googleSignIn}
      >
        <i className="fa-brands fa-google"></i>
        Iniciar sesión con Google
      </button>
    </>
  );
}
 
export default SignIn;