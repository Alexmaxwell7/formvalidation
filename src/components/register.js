import { useState, useEffect } from "react";
import "./register.css";
const Register = () => {
  const initialValues = {
    name: "",
    email: "",
    mobile: "",
    country: "",
    city: "",
    state: "",
    message: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [submit, setSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setSubmit(true);
    setFormValues(initialValues);
  };


  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      errors.name = "Name is required!";
    }
    if (!values.mobile) {
        errors.mobile = "Mobile is required!";
      }
      if (!values.city) {
        errors.city = "City is required!";
      }
      if (!values.state) {
        errors.state = "State is required!";
      }
      if (!values.country) {
        errors.country = "Country is required!";
      }
      if (!values.message) {
        errors.message = "Mobile is required!";
      }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    return errors;
  };

  return (
    <div class="login-form">
         {Object.keys(formErrors).length === 0 && submit ? (
        <div style={{color:"green"}}>Signed in successfully</div>
      ) : (
          <p style={{color:'red'}}>Un Register</p>
      )}
    <form onSubmit={handleSubmit} method="post">
        <h2 class="text-center">Register</h2>       
        <div class="form-group">
            <input type="text" name="name" class="form-control" placeholder="Enter the name"  value={formValues.name}
              onChange={handleChange} />
              <span style={{color:'red'}}>{formErrors.name}</span>
        </div>
        <div class="form-group">
            <input type="text" name="email" class="form-control" placeholder="Enter the Email"  value={formValues.email}
              onChange={handleChange}  />
              <span style={{color:'red'}}>{formErrors.email}</span>
        </div>
        <div class="form-group">
            <input type="text" name="mobile" class="form-control" placeholder="Enter the Mobile Number"  value={formValues.mobile}
              onChange={handleChange} />
        </div>
        <div class="form-group">
            <input type="text" name="city" class="form-control" placeholder="Enter the City"  value={formValues.city}
              onChange={handleChange} />
        </div>
        <div class="form-group">
            <input type="text" name="state" class="form-control" placeholder="Enter the State"  value={formValues.state}
              onChange={handleChange} />
        </div>
        <div class="form-group">
            <input type="text" name="country" class="form-control" placeholder="Enter the country"  value={formValues.country}
              onChange={handleChange} />
        </div>
        <div class="form-group">
            <input type="text" name="message" class="form-control" placeholder="Enter the Message"  value={formValues.message}
              onChange={handleChange}/>
        </div>
        <div class="form-group">
            <button type="submit" class="btn btn-primary btn-block">Register</button>
        </div>       
    </form>
</div>
  );
};

export default Register;
