import React from "react";

export default class Playlists extends React.Component {
    render() {
        return (
            <div>
                 <h1>Playlists</h1>
                <button onClick={this.props.irParaHome}>Home</button>
            </div>
        );
    };
};