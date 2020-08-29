import React from "react";
import { withRouter } from "react-router";
import { connect } from 'react-redux';

import '../styles/player_style.scss';
import '../styles/constansColors.scss';

class PlayerSong extends React.Component {

    onGoToSearch = () => {
        this.props.history.push('/search')
    }

    render() {
        return (
            <div>

                <div onClick={this.onGoToSearch} to="/search">
                    <i className={`fas fa-chevron-left 
                            ${this.props.theme === "dark" ?
                            "color_turquoise" : this.props.theme === "pink" ?
                            "color_darkrose" : "color_black"}`} />
                </div>

                <div className={`conteiner_player_element ${this.props.theme === "dark" ? "player_bcgr_dark" : this.props.theme === "pink" ? "player_bcgr_pink" : "player_bcgr_yellow"}`}>
                    <img src={this.props.location.state.artist.picture_medium} alt="" />
                    <p>{this.props.location.state.artist.name}</p>
                    <p>{this.props.location.state.title}</p>
                    <audio className="audioplayer" src={this.props.location.state.preview} controls />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (store) => ({
    theme: store.themeApp.theme
})

const mapDispatchToProps = {}
export default connect(mapStateToProps, mapDispatchToProps)(PlayerSong);