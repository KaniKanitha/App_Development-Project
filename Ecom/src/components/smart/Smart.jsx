import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  background: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdZC-VpX_k3N7nJFUvzKcinZ-967iCLCYXMw&s') no-repeat center center;
  background-size: cover;
  width: 100%;
`;

const FormContainer = styled.div`
  width: 30%;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 2rem;
  background-color: white;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 1000px) {
    width: 45%;
  }

  @media screen and (max-width: 700px) {
    width: 65%;
  }
`;

const ErrorMessage = styled.small`
  color: red;
  align-self: flex-start;
`;

const Form = styled.form`
  width: 100%;
`;

const FormField = styled.div`
  width: 100%;
  margin-bottom: 1rem;

  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 0.5rem;
  }

  input, select {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  button {
    width: 100%;
    padding: 0.5rem;
    font-size: 0.9rem;
    border-radius: 0.5rem;
  }
`;

const FooterText = styled.small`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

function Smart() {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const navigate = useNavigate(); // Using useNavigate hook
  
  const onSubmit = (data) => {
    console.log(data);
    navigate('/login'); // Navigate to the LoginPage
  };

  return (
    <Container>
      <FormContainer>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <h1 style={{ textAlign: 'center' }} className='mt-0 mb-4'><b>Register</b></h1>
          <FormField>
            <label htmlFor='name'>Name</label> 
            <input type="text" placeholder='Abcd' className='form-control' {...register("name", { required: true, pattern: /[A-Za-z]/ })} />
            <ErrorMessage>
              {errors.name?.type === "required" && "Name is required"}
              {errors.name?.type === "pattern" && "Enter a valid name"}
            </ErrorMessage>
          </FormField>

          <FormField>
            <label htmlFor='email'>Email</label> 
            <input type="text" placeholder='example@example.com' className='form-control' {...register("email", { required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ })} />
            <ErrorMessage>
              {errors.email?.type === "required" && "Email is required"}
              {errors.email?.type === "pattern" && "Entered email is in wrong format"}
            </ErrorMessage>
          </FormField>

          <FormField>
            <label htmlFor='password'>Password</label> 
            <input type="password" placeholder='********' className='form-control' {...register("password", { required: true, pattern: /^[a-zA-Z0-9!@#\$%\^\&*_=+-]{5,8}$/ })} />
            <ErrorMessage>
              {errors.password?.type === "required" && "Password is required"}
              {errors.password?.type === "pattern" && "Enter password with 1 lowercase, 1 uppercase, number, and symbol"}
            </ErrorMessage>
          </FormField>

          <FormField>
            <label htmlFor='confirm_password'>Confirm Password</label> 
            <input type="password" placeholder='********' className='form-control' {...register("confirm_password", { required: true, pattern: /^[a-zA-Z0-9!@#\$%\^\&*_=+-]{5,8}$/ })} />
            <ErrorMessage>
              {errors.confirm_password?.type === "required" && "Confirm password is required"}
              {errors.confirm_password?.type === "pattern" && "Enter password with 1 lowercase, 1 uppercase, number, and symbol"}
            </ErrorMessage>
          </FormField>

          <FormField>
            <label htmlFor='role'>Role</label> 
            <select className='form-control' {...register("role", { required: true })}>
              <option value="">Select Role</option>
              <option value="student">Student</option>
              <option value="teacher">Staff</option>
            </select>
            <ErrorMessage>
              {errors.role?.type === "required" && "Role is required"}
            </ErrorMessage>
          </FormField>

          <FormField>
            <label htmlFor='phone'>Phone</label> 
            <input type="text" placeholder='1234567890' className='form-control' {...register("phone", { required: true, minLength: 10, maxLength: 12 })} />
            <ErrorMessage>
              {errors.phone?.type === "required" && "Phone number is required"}
              {errors.phone?.type === "minLength" && "Entered number is less than 10 digits"}
              {errors.phone?.type === "maxLength" && "Entered number is more than 12 digits"}
            </ErrorMessage>
          </FormField>

          <ButtonContainer>
            <button className='btn btn-dark'>Sign Up</button>
          </ButtonContainer>

          <FooterText>
            Already have an account? <Link to="/" className='ms-2'>Sign In</Link>
          </FooterText>
        </Form>
      </FormContainer>
    </Container>
  );
}

export default Smart;
