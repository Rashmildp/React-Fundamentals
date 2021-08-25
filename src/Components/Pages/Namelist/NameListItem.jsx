import React from 'react';

function NameListItem(props){
    return(
<div>
<ul>
        <li className="list-group-item shadow-sm">
            <div className="row align-items-center">
                <div className="col-2">
               <img src={props.avatar} alt="pic" className="border border-dark rounded-circle shadow-sm"/>
                </div>
                <div className="col-10">
             <h4>{props.name}</h4> 
             
          {props.city} |  {props.email}
          <small>
          {new Intl.DateTimeFormat('en-GB').format(new Date(props.birthday))}
          </small>
     
                </div>
            </div>
          
           
        </li>
    
      </ul>
</div>
      
    )

}
export default NameListItem;