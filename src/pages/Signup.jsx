import { Link } from 'react-router-dom';
import '../styles/Auth.css';

function Signup() {
  return (
    <div className="auth-screen">

      <h2>Create your PopX account</h2>
      <form className="auth-form">

        <div className="input-group">
          <label>Full Name*</label>
          <input type="text" placeholder="Marry Doe" />
        </div>

        <div className="input-group">
          <label>Phone number*</label>
          <input type="text" placeholder="9876543210" />
        </div>

        <div className="input-group">
          <label>Email address*</label>
          <input type="email" placeholder="marry@gmail.com" />
        </div>

        <div className="input-group">
          <label>Password*</label>
          <input type="password" placeholder="Enter password" />
        </div>

        <div className="input-group">
          <label>Company name</label>
          <input type="text" placeholder="ABC Inc." />
        </div>

        <div className="agency-section">

          <p>Are you an Agency?*</p>

          <div className="radio-options">

            <label>
              <input type="radio" name="agency" defaultChecked />
              Yes
            </label>

            <label>
              <input type="radio" name="agency" />
              No
            </label>

          </div>

        </div>

        <Link to="/profile" className="create-btn">
          Create Account
        </Link>

      </form>

    </div>
  );
}

export default Signup;