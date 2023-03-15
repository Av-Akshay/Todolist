import React from "react";

const List = (props)=>{
   
    return(
        <div>
           <li><i onClick={()=>{ props.ondelete(props.id)}}
           

            className="fa fa-times-circle" aria-hidden='true'></i>{props.item}
           
            </li>
        </div>
    )
}
export default List;