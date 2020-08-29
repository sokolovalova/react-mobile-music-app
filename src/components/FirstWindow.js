import React from "react";
import '../styles/constansColors.scss';

class FirstW extends React.Component{
render()
{
    return(
    <div>
           <p className="boot_text">MUSIC</p> 
            <hr className="line_horizontal"/>
            <p className="boot_text_second">App for you</p>  
            {/* <button href="/search" type="button" className="btn_start" >Start</button>    */}
    </div>
        );
}
}

export default FirstW;