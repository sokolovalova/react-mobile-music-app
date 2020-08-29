import React from "react";

import '../styles/settings_style.scss';
import '../styles/constansColors.scss';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { connect } from 'react-redux';
import { ChangeTheme_Dark, ChangeTheme_Pink, ChangeTheme_Yellow } from '../redux/actions';

class Settings extends React.Component {

    selectFirstDark = () => {
        this.props.ChangeTheme_Dark();
        document.body.style.backgroundColor = "#222831";
    }
    selectSecondPink = () => {
        this.props.ChangeTheme_Pink();
        document.body.style.backgroundColor = "#ad9d9d";
    }
    selectThirdYello = () => {
        this.props.ChangeTheme_Yellow();
        document.body.style.backgroundColor = "#ffe2bc";
    }

    selectTheme = () => {
        return `select_button ${this.props.theme === "yellow" ? "color_black" : "color_white"}`
    }
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 400,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
        };
        console.log(this.props.theme);
        return (
            <div className="carusel_slider">
                <h2 className={`${this.props.theme === "yellow" ?
                    "color_black" : "color_white"}`}>Select a theme for the app</h2>
                <Slider {...settings} >

                    <div>
                        <img src="../images/themes/th1.png" alt="1theme" />
                        <button className={this.selectTheme} onClick={this.selectFirstDark}>select</button>
                    </div>
                    <div>
                        <img src="../images/themes/th2.png" alt="2theme" />
                        <button className={this.selectTheme} onClick={this.selectSecondPink}>select</button>
                    </div>
                    <div>
                        <img src="../images/themes/th3.png" alt="3theme" />
                        <button className={this.selectTheme} onClick={this.selectThirdYello}>select</button>
                    </div>

                </Slider>
            </div>
        );
    }
}

const mapStateToProps = (store) => ({
    theme: store.themeApp.theme
})

const mapDispatchToProps = {
    ChangeTheme_Dark,
    ChangeTheme_Pink,
    ChangeTheme_Yellow
}
export default connect(mapStateToProps, mapDispatchToProps)(Settings);
