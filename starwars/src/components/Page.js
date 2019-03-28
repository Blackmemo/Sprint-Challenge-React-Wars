import React, {Component} from 'react';

class Page extends Component {
render() {
    const { url, current } = this.props
    return (
        <div>
            <button
            onClick = { current === 1 ? null : () => {this.props.last(url, current)}}
            style = {style}
            >Prev
            </button>

            <button
            onClick = { current === 9 ? null : () => this.props.next(url, current)}
            style = {style}
            >Next
            </button>

        </div>
    )
}
}

export default Page;

const style = {
    padding: '6px',
    width: '150px',
    margin: '30px',
    cursor: 'pointer',
    border: '2px solid yellow',
    background: 'black',
    color: 'white',
    fontSize: '20px',
    borderRadius: '3px'
}