import { Component } from 'react'

import React, { useState, useEffect } from 'react';

function Home(){
    const [UserName, setUserName] = useState('');

    useEffect(() => {
        // Update the document title using the browser API
        const data = sessionStorage.getItem('userData');
        let data1=data;
        console.log("data::",data);
        //console.log("userName::",data1.Name);
        setUserName({name: data});
      });

    return (
            <div >   
                <div > Welcome  :{UserName} </div>
              
            </div>
            )
}
export default Home;