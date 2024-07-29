// // import React, { useState } from "react";
// // import { useForm } from "react-hook-form";
// // import EmailIcon from '@mui/icons-material/Email';
// // import { Icon } from 'react-icons-kit';
// // import { eyeOff } from 'react-icons-kit/feather/eyeOff';
// // import { eye } from 'react-icons-kit/feather/eye';

// // const LoginPage = () => {
// //   const {
// //     handleSubmit,
// //     register,
// //     formState: { errors }
// //   } = useForm();

// //   const [password, setPassword] = useState("");
// //   const [type, setType] = useState('password');
// //   const [icon, setIcon] = useState(eyeOff);

// //   const onSubmit = (values) => {
// //     alert(`Login successful!\nEmail: ${values.email}\nPassword: ${values.password}`);
// //   };

// //   const handleToggle = () => {
// //     if (type === 'password') {
// //       setIcon(eye);
// //       setType('text');
// //     } else {
// //       setIcon(eyeOff);
// //       setType('password');
// //     }
// //   };

// //   const containerStyle = {
// //     display: "flex",
// //     justifyContent: "center",
// //     alignItems: "center",
// //     height: "100vh",
// //     backgroundColor: "#f0f0f0"
// //   };

// //   const boxStyle = {
// //     background: "white",
// //     padding: "15px", // Reduced padding for a smaller box
// //     borderRadius: "8px",
// //     boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
// //     width: "100%",
// //     maxWidth: "350px" // Reduced max width for a smaller box
// //   };

// //   const h1Style = {
// //     textAlign: "center",
// //     marginBottom: "15px" // Reduced margin
// //   };

// //   const formInputStyle = {
// //     marginBottom: "10px", // Reduced margin
// //     position: "relative"
// //   };

// //   const labelStyle = {
// //     display: "block",
// //     marginBottom: "4px" // Reduced margin
// //   };

// //   const inputWrapperStyle = {
// //     position: "relative"
// //   };

// //   const inputStyle = {
// //     width: "85%",
// //     padding: "8px", // Reduced padding
// //     paddingLeft: "35px", // Adjust padding to accommodate the email icon
// //     border: "1px solid #ccc",
// //     borderRadius: "4px",
// //     fontSize: "14px" // Reduced font size
// //   };

// //   const iconStyle = {
// //     position: "absolute",
// //     top: "50%",
// //     left: "10px", // Positioning the icon inside the input
// //     transform: "translateY(-50%)",
// //     color: "#007bff"
// //   };

// //   const passwordWrapperStyle = {
// //     position: "relative"
// //   };

// //   const passwordInputStyle = {
// //     width: "85%",
// //     padding: "8px", // Reduced padding
// //     paddingLeft: "35px", // Adjust padding to accommodate the icon
// //     border: "1px solid #ccc",
// //     borderRadius: "4px",
// //     fontSize: "14px" // Reduced font size
// //   };

// //   const passwordIconStyle = {
// //     position: "absolute",
// //     top: "50%",
// //     left: "10px", // Positioning the icon inside the input
// //     transform: "translateY(-50%)",
// //     cursor: "pointer",
// //     color: "#007bff"
// //   };

// //   const buttonStyle = {
// //     width: "100%",
// //     padding: "10px",
// //     border: "none",
// //     borderRadius: "4px",
// //     backgroundColor: "#007bff",
// //     color: "white",
// //     fontSize: "16px",
// //     cursor: "pointer",
// //     transition: "background-color 0.3s"
// //   };

// //   const buttonHoverStyle = {
// //     backgroundColor: "#0056b3"
// //   };

// //   const errorMessageStyle = {
// //     color: "red",
// //     marginTop: "5px"
// //   };

// //   return (
// //     <div style={containerStyle}>
// //       <div style={boxStyle}>
// //         <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
// //           <h1 style={h1Style}>Login</h1>
// //           <div style={formInputStyle}>
// //             <label style={labelStyle}>Email</label>
// //             <div style={inputWrapperStyle}>
// //               <EmailIcon style={iconStyle} />
// //               <input
// //                 type="email"
// //                 {...register("email", {
// //                   required: "Required",
// //                   pattern: {
// //                     value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
// //                     message: "Invalid email address"
// //                   }
// //                 })}
// //                 placeholder="Enter your email..."
// //                 style={inputStyle}
// //               />
// //             </div>
// //             {errors.email && <p style={errorMessageStyle}>{errors.email.message}</p>}
// //           </div>
// //           <div style={formInputStyle}>
// //             <label style={labelStyle}>Password</label>
// //             <div style={passwordWrapperStyle}>
// //               <input
// //                 type={type}
// //                 {...register("password", {
// //                   required: "Required",
// //                   pattern: {
// //                     value: /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/,
// //                     message: "Password requirements: 8-20 characters, 1 number, 1 letter, 1 symbol."
// //                   }
// //                 })}
// //                 placeholder="Enter a strong password..."
// //                 style={passwordInputStyle}
// //                 value={password}
// //                 onChange={(e) => setPassword(e.target.value)}
// //               />
// //               <Icon
// //                 icon={icon}
// //                 style={passwordIconStyle}
// //                 size={25}
// //                 onClick={handleToggle}
// //               />
// //             </div>
// //             {errors.password && <p style={errorMessageStyle}>{errors.password.message}</p>}
// //           </div>
// //           <button
// //             type="submit"
// //             style={buttonStyle}
// //             onMouseOver={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
// //             onMouseOut={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}
// //           >
// //             Submit
// //           </button>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default LoginPage;






// // LoginPage.jsx
// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
// import EmailIcon from '@mui/icons-material/Email';
// import { Icon } from 'react-icons-kit';
// import { eyeOff } from 'react-icons-kit/feather/eyeOff';
// import { eye } from 'react-icons-kit/feather/eye';

// const LoginPage = () => {
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
//     if (values.email === 'Kani@gmail.com') {
//       navigate('/IDashboard');  // Redirect to IDashboard for specific email
//     } else {
//       alert(`Login successful!\nEmail: ${values.email}\nPassword: ${values.password}`);
//       navigate('/dashboard');  // Navigate to a default page or handle other email cases
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

// export default LoginPage;




















// // LoginPage.jsx
// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { Link, useNavigate } from "react-router-dom";
// import EmailIcon from '@mui/icons-material/Email';
// import { Icon } from 'react-icons-kit';
// import { eyeOff } from 'react-icons-kit/feather/eyeOff';
// import { eye } from 'react-icons-kit/feather/eye';


// const LoginPage = () => {
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
//     navigate('/adashboard');
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
//           {/* <button
//             type="submit"
//             style={buttonStyle}
//             onMouseOver={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
//             onMouseOut={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}
//           >
//             Submit
//           </button> */}
//           <button type="submit"><b>SUBMIT</b></button>
//           <div className="regsiter"></div>
//           <p>Don't have an account</p>
//           <Link className='register' to='/register'><h4>Registration</h4></Link>
          
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;//use this





// // LoginPage.jsx
// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { Link, useNavigate } from "react-router-dom";
// import EmailIcon from '@mui/icons-material/Email';
// import { Icon } from 'react-icons-kit';
// import { eyeOff } from 'react-icons-kit/feather/eyeOff';
// import { eye } from 'react-icons-kit/feather/eye';

// const LoginPage = () => {
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
//     // Navigate to the dashboard directly
//     navigate('/Adashboard');
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
//           {/* <button
//             type="submit"
//             style={buttonStyle}
//             onMouseOver={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
//             onMouseOut={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}
//           >
//             Submit
//           </button> */}
//           <button type="Submit"><Link to='/dashboard'>SUBMIT</Link></button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;//use this for link




import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import EmailIcon from '@mui/icons-material/Email';
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye';


const LoginPage = () => {
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
    alert(`Login successful!\nEmail: ${values.email}\nPassword: ${values.password}`);
    navigate('/adashboard');
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
    backgroundImage: 'Url(data:image/jpeg;base64,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)',
    backgroundSize: "cover",
    backgroundPosition: "center",
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
          {/* <button
            type="submit"
            style={buttonStyle}
            onMouseOver={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
            onMouseOut={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}
          >
            Submit
          </button> */}
          <button type="submit"><b>SUBMIT</b></button>
          <div className="regsiter"></div>
          <p>Don't have an account</p>
          <Link className='register' to='/register'><h4>Registration</h4></Link>
          
        </form>
      </div>
    </div>
  );
};

export default LoginPage;