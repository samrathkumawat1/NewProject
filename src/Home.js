import { Component } from 'react'

import React, { useState, useEffect } from 'react';

function Home(){
    const [UserName, setUserName] = useState('');

    useEffect(() => {
        // Update the document title using the browser API
        const data = JSON.parse(sessionStorage.getItem('userData'));
        let data1=data;
        console.log("data::",data1.data.Name);
        console.log("userName::",data1.Name);
        setUserName({name: data1.data.Name()});
      });
    

    return (
            <div className="container">   
                <div className="row">  
                        <div className="col-sm-12 btn btn-info">  
                        Welcome to Dashboard
                </div>  
                </div>
                <div className="row">
                <div className="col-sm-3"> Welcome  :{UserName} </div>
                <div className="col-sm-9"></div>
                {/* <div className="col-sm-4"></div> */}
                </div>
            </div>
            )
}
export default Home;