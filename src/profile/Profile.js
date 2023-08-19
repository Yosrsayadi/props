import React from 'react';
import PropTypes from 'prop-types';

const Profile = ({ fullName, bio, formation, children, handleName }) => {
  return (
    <div style={styles.container}>
      <div style={styles.imageContainer}>{children}</div>
      <div>
        <h2>{fullName}</h2>
        <p>{bio}</p>
        <p>{formation}</p>
        <button onClick={handleName}>Show Name</button>
      </div>
    </div>
  );
};

Profile.defaultProps = {
  fullName: 'Fatma',
  bio: 'No bio ',
  formation: 'Unknown',
};


Profile.propTypes = {
  fullName: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  formation: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  handleName: PropTypes.func.isRequired,
};

const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '5px',
      },
      imageContainer: {
        marginRight: '20px',
      },
      bio: {
        fontSize: '16px', 
        lineHeight: '1.5', 
        color: '#555', 
      },
};

export default Profile;