import React from 'react'
import { Formik, Form, Field } from "formik"
import * as Yup from "yup"

const LoginSchema=Yup.object().shape({
    email:Yup.string().email("Email is wrong!").required("Please, enter email"),
    password:Yup.string().matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,"Wrong pass").required("Please, enter passsword")
})

function Login({setShow}) {

    return (
        <div className="bodycontent" >
            <div className="container">
                <div className="textdiv">
                    <img className='image' src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="" />
                    <p className="text">
                        Connect with friends and the world<br /> around you on Facebook.
                    </p>
                </div>
                <div className="formside">
                    <div className="formdiv">
                        <Formik
                            initialValues={{
                                email: "",
                                password: ""
                            }}
                            validationSchema={LoginSchema}      
                            onSubmit={values => {
                                console.log(values);
                            }}
                        >
                            {({errors,touched})=>{
                        
                                return(
                                    <Form className='form'>
                                        <Field placeholder="Email or phone number" className="textinput" name="email" type="email" /><br />
                                        {errors.email && touched.email? <div style={{color:"red",fontSize:12}}>{errors.email}</div>:null}
                                        <br />
                                        <Field placeholder="Password" className="textinput" name="password" type="password" /><br />
                                        {errors.password && touched.password? <div style={{color:"red",fontSize:12}}>{errors.password}</div>:null}
                                        <br />

                                        <button className='btn' type="Submit">Log in</button>
                                        <p className='linkforgot'>Forgot password?</p>
                                        <hr style={{ height: '0.5px' }} /><br />
                                    </Form>
                                )
                            }}
                        </Formik>
                        <div className="btn-center">
                            <button className='btn-second' onClick={() => setShow(true)}>Create new account</button>
                        </div>
                    </div>
                    <p className="endtext">
                        <span style={{ fontWeight: 'bold', cursor: 'pointer' }}>Create a Page</span> for a celebrity, brand or business.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login