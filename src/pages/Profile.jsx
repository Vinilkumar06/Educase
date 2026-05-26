import './Profile.css';

function Profile() {
  return (
    <div className="profile-page">

      <div className="profile-header">
        Account Settings
      </div>

      <div className="profile-card">

        <img
          src="https://i.pravatar.cc/150?img=32"
          alt="profile"
        />

        <div className="profile-info">
          <h3>Marry Doe</h3>
          <p>marrydoe@gmail.com</p>
        </div>

      </div>

      <div className="profile-description">
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing
        Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut
        Labore Et Dolore Magna Aliquyam Erat, Sed Diam
      </div>

    </div>
  );
}

export default Profile;