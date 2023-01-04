import React from 'react'
import './Container.css'
import {Formik,Form,Field} from "formik"
import { useState } from 'react'


function Container() {
    const [email,setemail] = useState('')
    const [password,setpassword] = useState('')

    function handleEmail(e){
        setemail(e.target.value)
    }
    function handlePassword(e){
        setpassword(e.target.value)
    }
  return (
    
    <div className="bodycontent">
        <div className="container">
            <div className="textdiv">
                <img className='image' src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="" />
                <p className="text">
                    Connect with friends and the world<br/> around you on Facebook.
                </p>
            </div>
            <div className="formside">
                <div className="formdiv">
                    <Formik
                        initialValues={{
                            email:"",
                            password:""
                        }}
                        onSubmit={values=>{
                            console.log(values);
                        }}
                        >
                            {
                                <Form className='form'>
                                    <Field placeholder="Email or phone number" className="textinput" name="email" type="email" onChange={handleEmail} value={email}/><br/><br/>
                                    <Field placeholder="Password" className="textinput"  name="password" type="password" onChange={handlePassword} value={password}/><br/><br/>

                                    <button className='btn' type="submit">Log in</button>
                                    <p className='linkforgot'>Forgot password?</p>
                                    <hr style={{height:'0.5px'}}/><br/>
                                    <div className="btn-center">
                                        <button className='btn-second'>Create new account</button>
                                    </div>
                                </Form>
                            }
                    </Formik>
                </div>
                <p className="endtext">
                    <span style={{fontWeight:'bold',cursor:'pointer'}}>Create a Page</span> for a celebrity, brand or business.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Container