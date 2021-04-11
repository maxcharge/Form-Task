import React,{useState} from 'react'
import {Formik} from 'formik'
import styles from '../styles'

import {IconContext} from 'react-icons'
import {CgProfile} from 'react-icons/cg'
import { useHistory } from 'react-router-dom'

function FormComponent(){
  
  {/*History Hook*/}

  let history = useHistory();
  
  {/*Given Sample data*/}

  const sample={
    data:{
      name: "rohit",
      email: "rroo@gmail.com",
      password: "1234567890",
    }
  }

  function toHome(){
    
    history.push("/home");

  }

  return(  
    <div style={styles.formContainer} >
      
      <div style={styles.icon}>
        
        <IconContext.Provider  value={{ size:"100px", color: "#404040" }}>
          
          <CgProfile/>
        
        </IconContext.Provider>
      
      </div>

      
      
      <div style={styles.formbox} >
      
      <Formik
        
        initialValues={{
          name:"", 
          email: "", 
          password: "",
        }}
        
        //Validation Schema
        validate={values => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Required';}
        
          else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          
          if (!values.password) {
            errors.password = 'Required';
          }

          else if(values.password.length<5){
          errors.password = 'Minimum 5';
          }}

          if (!values.name) {
          errors.name = 'Required';
          }

          else if(values.name.length<5){
          errors.name = 'Minimum 5';
          }
          
          return errors;
        }}


        onSubmit={(values, { setSubmitting, resetForm }) => {
          
          //Alter Submit
          
          setTimeout(() => {
            console.log(values);
            if(
              sample.data.email===values.email 
              && sample.data.password===values.password
              && sample.data.name===values.name
              ){
              toHome();
            }
            else{
              alert("Wrong Data Enter Again");
              resetForm();
            }
            setSubmitting(false);
          }, 1000);
        }}

      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <div >
            
            <form onSubmit={handleSubmit}>
              
              <h5 style={styles.text}>Name</h5>
              
              <input
                  style={styles.inputBox}
                  type="name"
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  placeholder={"Joh Doe"}
              />

              <h6 style={styles.errors}>
              {errors.name && touched.name && errors.name}
              </h6>
              
              <h5 style={styles.text}>Email</h5>
              
              <input
                style={styles.inputBox}
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder={"example@domain.com"}
              />

              <h6 style={styles.errors} >
               {errors.email && touched.email && errors.email}
              </h6>
              
              <h5 style={styles.text}>Password</h5>
              
              <input
                style={styles.inputBox}
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}  
              />

              <h6 style={styles.errors}>
                {errors.password && touched.password && errors.password}
              </h6>

              <button 
                type="submit" 
                disabled={isSubmitting}
                style={styles.btn}
              >
                {isSubmitting ? "Wait.." : "Submit"}
              </button>
            </form>
          </div>
        )
        
        }
      </Formik>
      </div>
    </div>
  )
};
  
export default FormComponent;
