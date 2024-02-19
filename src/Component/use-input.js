import { useState } from "react";

export default function useinput(validate) {
    const[entered,setentered]=useState("");
    const[istouch,setIstouch]=useState(false);
    const isvalid=validate(entered);



function handleChange(event){
    setentered(event.target.value)
}
function handleblur(){
    setIstouch(true)
}

return{
    entered,
    istouch,
    handleChange,
    handleblur,
    isvalid,

};
}



