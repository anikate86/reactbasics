import React from 'react';
import './mystyle.css';


function StyleSheet(props){
    let className = props.primary ? 'primary' : ''

return(
    <div>
        <h1 className = {`${className} font-xl`}> STYLESHEETS</h1>
    </div>
)
}

export default StyleSheet;