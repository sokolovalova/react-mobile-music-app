import React from "react";
import '../styles/login_style.scss';
import '../styles/constansColors.scss';

import { verification, serachTheSameUser } from './Verification.js';
import { URL_USER_DATA } from './constans.js';

import { connect } from 'react-redux';
import { ChangeToIn } from '../redux/actions';

class Login extends React.Component {

    constructor() {
        super();
        this.state = {
            password: "",
            name: "",
            goTo: "/login",
            messageForUsed: "",
            usersDataFromServer: []
        }
    }

    handleChange = (event) => {
        const { id, value } = event.target;
        this.setState({ [id]: value });
    }

    btnClick_logIn = () => {

        if (verification(this.state.usersDataFromServer, this.state.password, this.state.name)) {
            sessionStorage.setItem('userName', this.state.name);
            this.props.history.push('/login/profile');
        } else {
            this.setState({
                messageForUsed:
                    <p>Incorrect password or login</p>
            });
        }
    }

    btnClick_register = () => {

        if (serachTheSameUser(this.state.usersDataFromServer, this.state.name)) {
            this.setState({
                messageForUsed:
                    <p>User with the same name already exists</p>
            });

        } else {
            if (this.state.name !== "" && this.state.password !== "") {
                postNewUserData(JSON.stringify({ name: this.state.name, password: this.state.password }));
                sessionStorage.setItem('userName', this.state.name);
                this.props.history.push('/login/profile');
            } else {
                this.setState({
                    messageForUsed:
                        <p>Fill in all the fields</p>
                });
            }
        }
    }

    componentDidMount() {
        fetchUsersData().then(data => {
            this.setState({ usersDataFromServer: data });
        })
        this.props.ChangeToIn();
    };

    render() {
        const { password, name } = this.state;
        return (
            <div>
                <div className="login_conteiner_inputs">

                    <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="login"
                        value={name}
                        onChange={this.handleChange}
                    />
                    <input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="password"
                        value={password}
                        onChange={this.handleChange}
                    />
                    <div>

                        <button className={`${this.props.theme === "dark" ?
                            "back_col_dark" : this.props.theme === "pink" ? "back_col_pink" : "back_col_yellow"}`}
                            onClick={this.btnClick_logIn}
                        > Log in
                         </button>

                        <button className={`${this.props.theme === "dark" ?
                            "back_col_dark" : this.props.theme === "pink" ? "back_col_pink" : "back_col_yellow"}`}
                            onClick={this.btnClick_register}
                            key={this.state.name}
                        > Register
                        </button>
                    </div>

                    <div className="message">
                        {this.state.messageForUsed}
                    </div>

                </div>

            </div>
        );
    }
}

//взять все данные о пользователях
async function fetchUsersData() {
    const response = await fetch(`${URL_USER_DATA}`);
    return await response.json();
}

//добавляем нового пользователя на сервер при регистрации
function postNewUserData(newUser) {

    return fetch(
        URL_USER_DATA,
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: newUser
        }).then((res) => console.log(res));

}

const mapStateToProps = (store) => ({
    registration_btn_text: store.registration_btn_text.registration_btn_text,
    theme: store.themeApp.theme
})

const mapDispatchToProps = {
    ChangeToIn
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);