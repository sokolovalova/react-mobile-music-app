import React from "react";
import { connect } from 'react-redux';
import '../styles/constansColors.scss';
import '../styles/search_style.scss';

class Search extends React.Component {

    constructor() {
        super();
        const init_valueOfInput_fromSessionStor = String(sessionStorage.getItem('valueOfInput'));

        this.state = {
            InputData: [],
            valueOfInput: init_valueOfInput_fromSessionStor
        }
    }


    btnClick_SearchData = () => {
        if (sessionStorage.getItem('valueOfInput') !== this.state.value) {
            sessionStorage.setItem('valueOfInput', this.state.valueOfInput)
        }

        this.requestSearchedData();
    }

    //Запрашиваем данные с API и сохраняем их
    requestSearchedData = () => {

        (this.state.valueOfInput !== '') ?
            fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${this.state.valueOfInput}`, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                    "x-rapidapi-key": "91a822e3a9msh54b9ecff6aabb61p148a79jsnb30e66a66fc5"
                }
            })
                .then(response => response.json())
                .then(res => {
                    this.setState({
                        InputData: res.data,
                    });
                })
                .catch(err => {
                    console.log(err);
                }) : this.setState({
                    InputData: [],
                });
    }

    //Запоминаем, что введено в инпут
    handleChange = (event) => {
        this.setState({ valueOfInput: event.target.value });
    }

    //отображаем один блок с одной песней
    renderOneArtist = (oneSong) => {
        return (
            <div onClick={() => this.props.history.push('/search/play', oneSong)}
                className="artist_block"
                key={oneSong.id} to="/search/play">

                <img className="img_artistList"
                    src={oneSong.artist.picture_small}
                    alt={oneSong.artist.name} />

                <div className="searchbox_name_of_song">
                    <p>{oneSong.artist.name}</p>
                    <p>{oneSong.title}</p>
                </div>
            </div>);


    }

    componentDidMount() {
        if (this.state.valueOfInput !== "null") {
            this.requestSearchedData();
        }
    }

    render() {

        return (
            <div>

                <div className="search_conteiner">
                    <input
                        className={`input_search_music ${this.props.theme === "dark" ? "color_white" : "color_black"}`}
                        autoFocus
                        placeholder="Search..."
                        onChange={this.handleChange}
                        value={this.state.valueOfInput === 'null' ? "" : this.state.valueOfInput}
                    />
                    <i className="fas fa-search" onClick={this.btnClick_SearchData} />
                </div>


                <div className={`resut_of_search ${this.props.theme === "yellow" ? "color_black" : "color_white"}`}>

                    {/*Проверяем длинну масива данных, если >0, то отображаем данные из него на странице */}
                    {this.state.InputData.length > 0
                        ? this.state.InputData.map((el) => { return this.renderOneArtist(el); })
                        : <p className={`warning ${this.props.theme === "pink" ? "color_darkrose": "color_turquoise"}`}>Nothing found</p>}
                </div>

            </div>
        );
    }
}

const mapStateToProps = (store) => ({
    theme: store.themeApp.theme
})

const mapDispatchToProps = {}
export default connect(mapStateToProps, mapDispatchToProps)(Search);