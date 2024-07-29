// // LoginPage.jsx
// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
// import EmailIcon from '@mui/icons-material/Email';
// import { Icon } from 'react-icons-kit';
// import { eyeOff } from 'react-icons-kit/feather/eyeOff';
// import { eye } from 'react-icons-kit/feather/eye';

// const Login = () => {
//   const {
//     handleSubmit,
//     register,
//     formState: { errors }
//   } = useForm();
//   const navigate = useNavigate();

//   const [password, setPassword] = useState("");
//   const [type, setType] = useState('password');
//   const [icon, setIcon] = useState(eyeOff);

//   const onSubmit = (values) => {
//     alert(`Login successful!\nEmail: ${values.email}\nPassword: ${values.password}`);
//     if (values.email === "Kani@gmail.com") {
//       navigate('/IDashboard'); // Updated to navigate to IDashboard
//     } else {
//       navigate('/dashboard'); // Default navigation for other emails
//     }
//   };

//   const handleToggle = () => {
//     if (type === 'password') {
//       setIcon(eye);
//       setType('text');
//     } else {
//       setIcon(eyeOff);
//       setType('password');
//     }
//   };

//   const containerStyle = {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     height: "100vh",
//     backgroundColor: "#f0f0f0"
//   };

//   const boxStyle = {
//     background: "white",
//     padding: "15px",
//     borderRadius: "8px",
//     boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
//     width: "100%",
//     maxWidth: "350px"
//   };

//   const h1Style = {
//     textAlign: "center",
//     marginBottom: "15px"
//   };

//   const formInputStyle = {
//     marginBottom: "10px",
//     position: "relative"
//   };

//   const labelStyle = {
//     display: "block",
//     marginBottom: "4px"
//   };

//   const inputWrapperStyle = {
//     position: "relative"
//   };

//   const inputStyle = {
//     width: "85%",
//     padding: "8px",
//     paddingLeft: "35px",
//     border: "1px solid #ccc",
//     borderRadius: "4px",
//     fontSize: "14px"
//   };

//   const iconStyle = {
//     position: "absolute",
//     top: "50%",
//     left: "10px",
//     transform: "translateY(-50%)",
//     color: "#007bff"
//   };

//   const passwordWrapperStyle = {
//     position: "relative"
//   };

//   const passwordInputStyle = {
//     width: "85%",
//     padding: "8px",
//     paddingLeft: "35px",
//     border: "1px solid #ccc",
//     borderRadius: "4px",
//     fontSize: "14px"
//   };

//   const passwordIconStyle = {
//     position: "absolute",
//     top: "50%",
//     left: "10px",
//     transform: "translateY(-50%)",
//     cursor: "pointer",
//     color: "#007bff"
//   };

//   const buttonStyle = {
//     width: "100%",
//     padding: "10px",
//     border: "none",
//     borderRadius: "4px",
//     backgroundColor: "#007bff",
//     color: "white",
//     fontSize: "16px",
//     cursor: "pointer",
//     transition: "background-color 0.3s"
//   };

//   const buttonHoverStyle = {
//     backgroundColor: "#0056b3"
//   };

//   const errorMessageStyle = {
//     color: "red",
//     marginTop: "5px"
//   };

//   return (
//     <div style={containerStyle}>
//       <div style={boxStyle}>
//         <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
//           <h1 style={h1Style}>Login</h1>
//           <div style={formInputStyle}>
//             <label style={labelStyle}>Email</label>
//             <div style={inputWrapperStyle}>
//               <EmailIcon style={iconStyle} />
//               <input
//                 type="email"
//                 {...register("email", {
//                   required: "Required",
//                   pattern: {
//                     value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
//                     message: "Invalid email address"
//                   }
//                 })}
//                 placeholder="Enter your email..."
//                 style={inputStyle}
//               />
//             </div>
//             {errors.email && <p style={errorMessageStyle}>{errors.email.message}</p>}
//           </div>
//           <div style={formInputStyle}>
//             <label style={labelStyle}>Password</label>
//             <div style={passwordWrapperStyle}>
//               <input
//                 type={type}
//                 {...register("password", {
//                   required: "Required",
//                   pattern: {
//                     value: /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/,
//                     message: "Password requirements: 8-20 characters, 1 number, 1 letter, 1 symbol."
//                   }
//                 })}
//                 placeholder="Enter a strong password..."
//                 style={passwordInputStyle}
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//               <Icon
//                 icon={icon}
//                 style={passwordIconStyle}
//                 size={25}
//                 onClick={handleToggle}
//               />
//             </div>
//             {errors.password && <p style={errorMessageStyle}>{errors.password.message}</p>}
//           </div>
//           <button
//             type="submit"
//             style={buttonStyle}
//             onMouseOver={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
//             onMouseOut={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;


// LoginPage.jsx
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import EmailIcon from '@mui/icons-material/Email';
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye';

const Login = () => {
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm();
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(eyeOff);

  const onSubmit = (values) => {
    // Navigate to IDashboard or dashboard based on the email
    if (values.email === "kanikavi@gmail.com") {
      navigate('/Dashboard');
    } else {
      navigate('/dashboard');
    }
  };

  const handleToggle = () => {
    if (type === 'password') {
      setIcon(eye);
      setType('text');
    } else {
      setIcon(eyeOff);
      setType('password');
    }
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f0f0f0"
  };

  const boxStyle = {
    background: "white",
    padding: "15px",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    width: "100%",
    maxWidth: "350px"
  };

  const h1Style = {
    textAlign: "center",
    marginBottom: "15px"
  };

  const formInputStyle = {
    marginBottom: "10px",
    position: "relative"
  };

  const labelStyle = {
    display: "block",
    marginBottom: "4px"
  };

  const inputWrapperStyle = {
    position: "relative"
  };

  const inputStyle = {
    width: "85%",
    padding: "8px",
    paddingLeft: "35px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "14px"
  };

  const iconStyle = {
    position: "absolute",
    top: "50%",
    left: "10px",
    transform: "translateY(-50%)",
    color: "#007bff"
  };

  const passwordWrapperStyle = {
    position: "relative"
  };

  const passwordInputStyle = {
    width: "85%",
    padding: "8px",
    paddingLeft: "35px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "14px"
  };

  const passwordIconStyle = {
    position: "absolute",
    top: "50%",
    left: "10px",
    transform: "translateY(-50%)",
    cursor: "pointer",
    color: "#007bff"
  };

  const buttonStyle = {
    width: "100%",
    padding: "10px",
    border: "none",
    borderRadius: "4px",
    backgroundColor: "#007bff",
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
    transition: "background-color 0.3s"
  };

  const buttonHoverStyle = {
    backgroundColor: "#0056b3"
  };

  const errorMessageStyle = {
    color: "red",
    marginTop: "5px"
  };

  return (
    <div style={containerStyle}>
      <div style={boxStyle}>
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          <h1 style={h1Style}>Login</h1>
          <div style={formInputStyle}>
            <label style={labelStyle}>Email</label>
            <div style={inputWrapperStyle}>
              <EmailIcon style={iconStyle} />
              <input
                type="email"
                {...register("email", {
                  required: "Required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address"
                  }
                })}
                placeholder="Enter your email..."
                style={inputStyle}
              />
            </div>
            {errors.email && <p style={errorMessageStyle}>{errors.email.message}</p>}
          </div>
          <div style={formInputStyle}>
            <label style={labelStyle}>Password</label>
            <div style={passwordWrapperStyle}>
              <input
                type={type}
                {...register("password", {
                  required: "Required",
                  pattern: {
                    value: /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/,
                    message: "Password requirements: 8-20 characters, 1 number, 1 letter, 1 symbol."
                  }
                })}
                placeholder="Enter a strong password..."
                style={passwordInputStyle}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Icon
                icon={icon}
                style={passwordIconStyle}
                size={25}
                onClick={handleToggle}
              />
            </div>
            {errors.password && <p style={errorMessageStyle}>{errors.password.message}</p>}
          </div>
          <button
            type="submit"
            style={buttonStyle}
            onMouseOver={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
            onMouseOut={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

