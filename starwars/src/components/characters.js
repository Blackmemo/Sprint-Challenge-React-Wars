import React, { Component } from 'react';
import Character from './character';

class Characters extends Component {
    render() {
    return (
        <div style = { wrapper }>
            {this.props.data.map(item => (
                <Character 
                key = { item.name }
                characterData={item} />
                ))}

        </div>
    );
};
}

const wrapper = {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'center'
}
export default Characters;