import {Link} from 'react-router-dom';
import '../styles/Auth.css';
function Landing() {
  return (
    <div className="screen">
      <div className="auth-bottom">
        <h2>Welcome to PopX</h2>
        <p>
          Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </p>
        <Link to="/signup" className="primary-btn">
          Create Account
        </Link>
        <Link to="/login" className="secondary-btn">
          Already Registered? Login
        </Link>
      </div>
    </div>
  );
}

export default Landing;