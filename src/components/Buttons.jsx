//This file has Button slider component
import React from "react";

function Slider_button({btn_func, character})
{
    //This is the slider button component
    
    return (

        <button
        type="button"
        className="h-10 w-10  flex items-center justify-center font-bold
        text-white text-2xl bg-lime-500 rounded-full hover:outline hover:ring-2
        hover:ring-offset-2 hover:ring-lime-500"
        onClick={btn_func}
        >{character}</button>
    );

}

export default Slider_button;