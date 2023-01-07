import React from 'react'
import './Signup.css'
import { GrFormClose } from 'react-icons/gr';
import { AiFillQuestionCircle } from 'react-icons/ai'
import {Formik,Form,Field} from "formik"

import * as Yup from "yup"

const SignupSchema=Yup.object().shape({
    FirstName:Yup.string().min(3,"Firstname must be min 3 character").required("Please, enter firstname").matches(/^[a-zA-Z0-9]+$/,"Inputu duzgun doldur"),
    LastName:Yup.string().min(5,"Lastname must be min 5 character").max(20,"Too Long").required("Please, enter Lastname"),
    Mobilenumberoremail:Yup.string().email("Email is wrong!").required("Please, enter email"),
    Newpassword:Yup.string().matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,"Wrong pass").required("Please, enter passsword")
})


const Signup=({setShow})=>{
     
  return(
    <div className="boxcontainer" style={{width: "100%", height:"100vh", position: "absolute", top: "0", left: "0", zIndex: "100"}}>
        <div style={{width: "100%", height:"100vh", opacity: "0.7", backgroundColor: "white"}}></div>
        <div className="boxcontainercontent" style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",backgroundColor:'white'}}>
            
            <div className="boxcontent">
                <div className="sign">
                    <p className="signtext">
                        Sign Up
                    </p>
                    <p className="mainsigntext">
                        It’s quick and easy.
                    </p>
                </div>
                <div className="icon">
                    <GrFormClose className='boxicon' onClick={()=> setShow(false)}/>
                </div>
            </div>
            
            <div className="boxformside">
                <Formik
                    initialValues={{
                        FirstName:"",
                        LastName:"",
                        Mobilenumberoremail:"",
                        Newpassword:"",
                        month:"",
                        day:"",
                        year:"",
                        gender:""
                    }}
                    validationSchema={SignupSchema}
                    onSubmit={values=>{
                        console.log(values);
                    }}
                    >
                        {({errors,touched})=>{
                            
                            return( 
                                <Form className='boxform'>
                                    <div className="form">
                                        <hr style={{height:'0.5px' ,width:'100%' ,textAlign:'center'}}/>
                                        <div className="boxtext">
                                            <Field className="name" name="FirstName" placeholder="First Name"></Field>
                                            <Field className="name" name="LastName" placeholder="Last Name"></Field>
                                        </div>
                                            <div className="errorname">
                                                {errors.FirstName && touched.FirstName? <div style={{color:"red",fontSize:12}}>{errors.FirstName}</div>:null}
                                                {errors.LastName && touched.LastName? <div style={{color:"red",fontSize:12}}>{errors.LastName}</div>:null}
                                            </div><br/>
                                        <Field className="num" type="email" name="Mobilenumberoremail" placeholder="Mobile number or email"></Field><br/>
                                        {errors.Mobilenumberoremail && touched.Mobilenumberoremail? <div style={{color:"red",fontSize:12}}>{errors.Mobilenumberoremail}</div>:null}<br/>
                                        
                                        <Field className="num" name="Newpassword" type="password" placeholder="New password"></Field>
                                        {errors.Newpassword && touched.Newpassword? <div style={{color:"red",fontSize:12}}>{errors.Newpassword}</div>:null}
                                        <br/>
                                        <div className="birthday">
                                            <p className="birthtext">
                                                Birthday <AiFillQuestionCircle/>
                                            </p>
                                            <div className="birthselect">
                                                <Field className="birthclass" component="select" name="month" >
                                                    <option value="Jan">Jan</option>
                                                    <option value="Feb">Feb</option>
                                                    <option value="Mar">Mar</option>
                                                    <option value="Apr">Apr</option>
                                                    <option value="May">May</option>
                                                    <option value="Jun">Jun</option>
                                                    <option value="Jul">Jul</option>
                                                    <option value="Aug">Aug</option>
                                                    <option value="Sep">Sep</option>
                                                    <option value="Oct">Oct</option>
                                                    <option value="Nov">Nov</option>
                                                    <option value="Dev">Dev</option>
                                                </Field>
                                                <Field className="birthclass" component="select" name="day" >
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                    <option value="10">11</option>
                                                    <option value="11">12</option>
                                                    <option value="12">13</option>
                                                    <option value="13">14</option>
                                                    <option value="14">15</option>
                                                    <option value="15">16</option>
                                                    <option value="16">17</option>
                                                    <option value="17">18</option>
                                                    <option value="18">19</option>
                                                    <option value="19">20</option>
                                                    <option value="20">21</option>
                                                    <option value="21">22</option>
                                                    <option value="22">23</option>
                                                    <option value="23">24</option>
                                                    <option value="24">25</option>
                                                    <option value="25">26</option>
                                                    <option value="26">27</option>
                                                    <option value="27">28</option>
                                                    <option value="28">29</option>
                                                    <option value="29">30</option>
                                                    <option value="31">31</option>
                                                </Field>
                                                <Field className="birthclass" component="select" name="year" >
                                                    <option value="2023">2023</option>
                                                    <option value="2022">2022</option>
                                                </Field>
                                                </div>

                                        </div>



                                        <div className="birthday">
                                            <p className="birthtext">
                                                Gender <AiFillQuestionCircle/>
                                            </p>
                                            <div className="birthselect">
                                                <div className="shape">
                                                    <div className="shapecontent">
                                                        <span>Female</span>
                                                        <Field type="radio" name="gender" value="Female"/>
                                                    </div>
                                                </div>
                                                <div className="shape">
                                                    <div className="shapecontent">
                                                        <span>Male</span>
                                                        <Field type="radio" name="gender" value="Male"/>
                                                    </div>
                                                </div>
                                                <div className="shape">
                                                    <div className="shapecontent">
                                                        <span>Custom</span>
                                                        <Field type="radio"name="gender" value="Custom"/>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <br/>
                                        <div className="boxendtext">
                                            People who use our service may have uploaded your contact information to <br/>Facebook. <span style={{cursor:'pointer',Color:'blue'}}>Learn more.</span><br/><br/>
                                            By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy.
                                            <br/> You may receive SMS Notifications from us and can opt out any time.
                                        </div>
                                        <br/>
                                        <div className="boxdivbtn">
                                            <button type='submit' className="boxbtn">Sign Up</button>
                                        </div>
                                    </div>
                                </Form>
                            )
                            
                        }}
                </Formik>

            </div>

        </div>
    </div>
  );
}

export default Signup