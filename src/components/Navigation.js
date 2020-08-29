import React from "react";
import { NavLink } from "react-router-dom";

import '../styles/constansColors.scss';
import '../styles/navigation_style.scss';

import { connect } from 'react-redux';
import { ChangeToIn, ChangeToOut } from '../redux/actions';

class Navigation extends React.Component {

  

    ChangeToIn = () => {
        this.props.ChangeToIn();
    }
    ChangeToOut = () => {
        this.props.ChangeToOut();
    }

    go_to_profile = () => {

        if (this.props.registration_btn_text !== "Log in")
            this.history.push("/login/profile");
    }

    render() {
        console.log("NAV");
        // 
        return (
            <div>
                <div className="box-navigation" >
                    <nav className={`navigation ${this.props.theme==="dark"?"nav_dark":this.props.theme==="pink"?"nav_pink":"nav_yellow"}`}>
                    {/* <nav className={`navigation`}> */}
                        <NavLink

                            to={this.props.registration_btn_text === "Log in" ? "/login":"/login/profile" }
                            >
                            {this.props.registration_btn_text==="Log in"?"Log in": <i className="fas fa-user-circle icons"></i>}
                        </NavLink>

                        <NavLink to="/search"><i className="fas fa-search icons"></i></NavLink>
                        <NavLink to="/settings"><i className="fas fa-cog icons"></i></NavLink>
                    </nav>
                </div>
            </div>
        );
    }
}

function Profile(btn_text) {
    if (btn_text === "Log out") {
        console.log(btn_text);
        return <NavLink to="/login/profile">Profile</NavLink>
    }
    else {
        return <div></div>;
    }
}

const mapStateToProps = (store) => ({
    registration_btn_text: store.registration_btn_text.registration_btn_text,
    theme: store.themeApp.theme
})

const mapDispatchToProps = {
    ChangeToIn,
    ChangeToOut,
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);



































{/* <p className="boot_text">MUSIC</p> 
            <hr className="line_horizontal"/>
            <p className="boot_text_second">App for you</p>  
            <button href="/search" type="button" className="btn_start" >Start</button>   

               { <img className="status_bar" src="../images/phone_status_bar.jpg" alt="" />}
                
                {this.state.start_btn? <Search />:<this.BootWindow />}  
                { <button  type="button" className={this.state.start_btn?"_hidden":"btn_start"} onClick={this.RunAppGoToSearch} >Start</button> }}
             */}


    // constructor(){ 
    //    super();
    //    this.state ={
    //        start_btn: false
    //    }
    // }    

    // // Chage statec of button "start"
    // RunAppGoToSearch = () => {
    //     this.setState({ start_btn: !this.state.show });
    // }

    // // Welcom window
    //  BootWindow =()=>{
    //     return (
    //     <div>               
    //         <p className="boot_text">MUSIC</p> 
    //         <hr className="line_horizontal"/>
    //         <p className="boot_text_second">App for you</p>  
    //     </div>  );  
    // }  