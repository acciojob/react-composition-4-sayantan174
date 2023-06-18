import React, { useState } from 'react'

const Form = ()=>{
    const [obj,setObj]=useState({});

    return(
        <form style={{display:"flex",flexDirection:"column",alignItems:"flex-start"}} onSubmit={(e)=>{
            e.preventDefault();
            setObj({name:`${e.target.name.value}`,email:`${e.target.email.value}`,password:`${e.target.password.value}`})
            console.log({name:`${e.target.name.value}`,email:`${e.target.email.value}`,password:`${e.target.password.value}`});
        }}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name"/>
            <label htmlFor="email">Email</label>
            <input type="email" id="email"/>
            <label htmlFor="password">Password</label>
            <input type="password" id="password"/>
            <button type="submit">Submit</button>
        </form>
    )
}

export default Form;