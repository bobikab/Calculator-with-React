import React from "react";

function Header(props){
    const clcikHandler = 
    () => console.log('clicked')
    return (
    <>
    <h1> Hello there {props.name}</h1>
    <button onClick={clcikHandler}>Click me</button></>
    
    );
}

export default Header;