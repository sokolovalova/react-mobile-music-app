import React from "react";
import '../styles/profile_style.scss';
import '../styles/constansColors.scss';

import { connect } from 'react-redux';
import { ChangeToOut } from '../redux/actions';

class Profile extends React.Component {

    componentDidMount() {
        this.props.ChangeToOut();
    }

    btnClick_LogOut = () => {
        this.props.history.push("/login");
    }

    render() {
        return (
            <div>
                <div className="conteiner_user_profile">

                    <div>
                        <img className="profile_image" alt="" src="../images/profile_image.png" />
                    </div>
                    <div className="users_data">
                        <p>UserName:  
                            <strong>
                                <font color="white"> {sessionStorage.getItem('userName')}</font>
                            </strong>
                        </p>
                        <button className="btn_logout" onClick={this.btnClick_LogOut}>Log out</button>
                    </div>

                </div>
                <div className="request_history">
                    c
                </div>
                {/* <div className="request_history">
                    <p>ЗДЕСЬ</p>
                    <p>МОГЛА БЫТЬ</p>
                    <p>ВАША РЕКЛАМА</p>
                </div> */}
            </div>
        );
    }
}

const mapStateToProps = (store) => ({
    registration_btn_text: store.registration_btn_text.registration_btn_text,
})

const mapDispatchToProps = {
    ChangeToOut
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);