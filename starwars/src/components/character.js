import React from 'react';

const Character = props => {
    return (
        <div style = { wrapper }>
        <div className="character">
        <h1 style = {characterName}>{props.characterData.name}</h1>
        <p className="characterInfo">Born: {props.characterData.birth_year}</p>
        <p className="characterInfo">Gender: {props.characterData.gender}</p>
        <p className="characterInfo">Eye Color: {props.characterData.eye_color}</p>
        <p className="characterInfo">Hair Color: {props.characterData.hair_color}</p>
        <p className="characterInfo">Mass: {props.characterData.mass}</p>
        <p className="characterInfo">Height: {props.characterData.height}</p>
        <p className="characterInfo">Skin Color: {props.characterData.skin_color}</p>
        
        </div>
        </div>
    );
};

const wrapper = {
width: '30rem',
border: '4px solid gold',
backgroundImage: `url(https://wallimpex.com/data/out/808/star-wars-space-wallpaper-11539769.jpg)`,
backgroundSize: 'contain',
color: 'white',
display: 'flex',
flexDirection: 'column',
padding: '5px',
margin: '6px',
borderRadius: '2rem',
fontSize: '30px,',
fontWeight: 'bold'
}

const characterName = {
    color: 'yellow',
    borderBottom: '2px solid gray'
}

export default Character;