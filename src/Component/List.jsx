// export default function List({id,item,onRemove}){
//     return
//     (<>2330
    

//     <li id={id} onClick={function(){
//         return onRemove(id);
//     }}>
//     {item}
//     </li>
//     </>
//     );
// }


export default function List({id,item,password,onRemove}){
    return(
        <>
        <li>{item}</li>
        <li>{password}</li>
        

        <button onClick={function(){
            return onRemove(id);
        }
    }>delete
            </button>
        </>
    )
}
