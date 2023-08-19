import logo from './logo.svg';
import React from 'react';
import Profile from './profile/Profile.js';
import './App.css';

function App() {
  const handleName = () => {
    alert('Profile user name clicked!');
  };

  return (
    <div className="App">
      <Profile
        fullName="Yosr Sayedi"
        bio="Étudiante en informatique"
        formation="The Full-Stack JS Bootcamp"
        handleName={() => handleName("Yosr Sayedi")} 
      >
        <img
          src="/image/photo.png"
          alt="Profile"
          style={styles.profileImage}
        />
      </Profile>
    </div>
  );
}

const styles = {
  profileImage: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
  },
};


export default App;
