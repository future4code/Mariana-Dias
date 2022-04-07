import React from "react";

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <h1>Labemusic</h1>
                <button onClick={this.props.irParaPlaylists}>Playlists</button>
            </div>
        );
    };
};