import React, { useState,useEffect } from 'react';
import NameListItem from './NameListItem';


   



function NameList(){
    const [loadData,setLoadData]=useState(new Date());
    const [nameList,setnameList]=useState([{
        "id":1,
    "name": {
        "title": "mr",
        "first": "brad",
        "last": "gibson"
        },
        "location": {
        
        "city": "kilcoole",
    
        },
        "email": "brad.gibson@example.com",
        "dob": {
            "date": "1993-07-20T09:44:18.674Z",
            "age": 26
            },
            "picture": {
        
            "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
        
            },
    
    
    },
    {
        "id":2,
    "name": {"title":"Mr","first":"Mike","last":"Thomas"},
    "location": {
        
        "city": "Elgin",
    
        },
        "email": "thomas@example.com",
        "dob": {
            "date": "1946-07-30T23:43:18.198Z",
            "age": 75
            },
            "picture": {
        
            "medium": "https://randomuser.me/api/portraits/med/men/31.jpg",
        
            },
    
    
    },
    {
        "id":3,
        "name": {
            "title": "Ms",
            "first": "Teresa",
            "last": "Ortiz"
          },
        "location": {
            
            "city": "San Sebastián",
        
            },
            "email": "teresa.ortiz@example.com",
            "dob": {
                "date": "1951-05-20T02:12:19.486Z",
                "age": 70
                },
                "picture": {
            
                "medium": "https://randomuser.me/api/portraits/med/women/62.jpg",
            
                },
        
        
        },
    
    ]);
    useEffect(()=>{
        fetch("https://randomuser.me/api").then(response=>{
            return response.json();
        }).then(responseDate=>{
           setnameList((nameList) =>[...nameList,responseDate.results[0]])
        });
    },[loadData]);
    const nameListComponent=()=>{
        return nameList.map((aName)=>{
            return(
               <NameListItem
               key={aName.id}
                name={`${aName.name.first} ${aName.name.last}`}
               city={aName.location.city}
               email={aName.email}
               birthday={aName.dob.date}
               avatar={aName.picture.medium}/>
   
            );
        }
   
        );
        }
        const addUserHandler=()=>{
           setLoadData(new Date());
        }
    
    

    return(

        <div >
        
        <hr/>
        <div class="container mt-4">
            <button className="btn btn-primary mb-2" onClick={addUserHandler}> Add User</button>
            <ul className="list-group">

            {nameListComponent()}

            </ul>
       
        </div>
    
      
       
        
     
      </div>
    );
}
export default NameList;