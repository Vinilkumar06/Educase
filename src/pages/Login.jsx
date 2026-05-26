import {Link} from 'react-router-dom';
import '../styles/Auth.css';
function Login(){
    return(
    <div className='auth-screen'>
        <h2>Signin to your PopX account</h2>
        <p>
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
        </p>

        <form className='auth-form'>
            <div className='input-group'>
            <label >Email Address</label>
            <input type='email' placeholder='Enter email address' required='true'/>
            </div>
            <div className='input-group'>
            <label>Password</label>
            <input type='password' placeholder='Enter password' required='true'/>
            </div>
            <Link to="/profile" className='login-btn'>
                Login
            </Link>
        </form>
    </div>
    );
}
export default Login;