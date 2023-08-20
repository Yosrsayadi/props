import logo from './logo.svg';
import React, { Component } from 'react';
import Profile from './profile/Profile.js';
import './App.css';

class App extends Component {
  state = {
    person: {
      fullName: 'Yosr Sayedi',
      bio: 'Étudiante en informatique',
      imgSrc: '/image/photo.png',
      profession: 'The Full-Stack JS Bootcamp',
    },
    show: false,
    interval: 0,
  };

  componentDidMount() {
    this.setState({ interval: 0 });

    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({
        interval: prevState.interval + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  toggleProfile = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show, interval } = this.state;

    return (
      <div className="App">
        <button onClick={this.toggleProfile}>Toggle Profile</button>
        {show && (
          <Profile
            fullName={fullName}
            bio={bio}
            profession={profession}
            handleName={() => alert(`Profile user name: ${fullName}`)}
          >
            <img src={imgSrc} alt="Profile" style={styles.profileImage} />
          </Profile>
        )}
        <p>Time interval since last component mount: {interval} seconds</p>
      </div>
    );
  }
}

const styles = {
  profileImage: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
  },
};

export default App;
