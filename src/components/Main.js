import React from "react";

function Main(props){
    const url = 'photo.png';
    let darkModeOn = true;
    function handleClick(){
        darkModeOn = !darkModeOn;
        if(darkModeOn == true){
            console.log('Dark')
        
        }else{
           console.log('Light')
        }
    }
    return (
    <><h1> Hello there {props.greet} {Math.random() >= 0.5 ? "Over 0.5" : "Under 0.5"}</h1>
    <img src={url}></img>
    <button onClick={handleClick}>Click me main</button>
    </>

    );
}

export default Main;