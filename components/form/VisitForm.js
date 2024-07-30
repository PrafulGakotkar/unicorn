"use client"

// src/components/ModalForm.js
import React, { useState, useEffect } from 'react';
import { Button, Modal, Box, TextField, Typography } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const ModalForm = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  useEffect(() => {
    const modalShown = sessionStorage.getItem('modalShown');
    if (!modalShown) {
      setOpen(true);
      sessionStorage.setItem('modalShown', 'true');
    }
  }, []);

  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    handleClose();
  };

  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography variant="h6" component="h2">
           Get Help
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              autoFocus
              value={formData.name}
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="message"
              label="Message"
              name="message"
              autoComplete="message"
              multiline
              rows={4}
              value={formData.message}
              onChange={handleChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
            <Button
              fullWidth
              variant="outlined"
              color="secondary"
              onClick={handleClose}
              sx={{ mt: 1 }}
            >
              Close
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalForm;


// import React, { useState } from "react";
// import Link from "next/link";

// export default function Visit() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     mobile: ""
//   });

//   const [errors, setErrors] = useState({});
//   const [showSuccessMessage, setShowSuccessMessage] = useState(false);
//   const [showErrorMessage, setShowErrorMessage] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Validation logic
//     const newErrors = {};

//     if (!formData.name.trim()) {
//       newErrors.name = "Name is required";
//     }
//     if (!formData.email.trim()) {
//       newErrors.email = "Email is required";
//     }
//     if (!formData.mobile.trim()) {
//       newErrors.mobile = "Mobile number is required";
//     }

//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//       setShowErrorMessage(true);
//       return;
//     }

//     console.log("Form Data:", formData);

//     try {
//       const response = await fetch("https://example.com/api/visit", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify(formData)
//       });

//       if (response.ok) {
//         setShowSuccessMessage(true);
//         setShowErrorMessage(false);
//         console.log("Visit request submitted successfully!");
//       } else {
//         setShowErrorMessage(true);
//         setShowSuccessMessage(false);
//         console.error("Failed to submit visit request:", response.statusText);
//       }
//     } catch (error) {
//       setShowErrorMessage(true);
//       setShowSuccessMessage(false);
//       console.error("Error submitting visit request:", error);
//     }

//     // Clear form after submission
//     setFormData({
//       name: "",
//       email: "",
//       mobile: ""
//     });
//   };

//   return (
//     <>
//       <div>
//         {/* Visit Form Section */}
//         <section className="visit-style-two sec-pad">
//           <div className="auto-container">
//             <div className="row clearfix">
//               <div className="col-lg-12 col-md-12 col-sm-12 content-column">
//                 <div className="content-box mr_70">
//                   <div className="sec-title mb_35" style={{ textAlign: 'center' }}>
//                     <h2>Schedule a Visit</h2>
//                     <p className="mt_20">Please provide your details to schedule a visit.</p>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-lg-12 col-md-12 col-sm-12 form-column">
//                 <div className="form-inner">
//                   <form onSubmit={handleSubmit} id="visit-form" className="default-form">
//                     <div className="row clearfix">
//                       <div className="col-lg-6 col-md-6 col-sm-12 form-group">
//                         <input
//                           type="text"
//                           name="name"
//                           placeholder="Your Name"
//                           value={formData.name}
//                           onChange={handleChange}
//                           required
//                         />
//                         {errors.name && <p className="text-danger">{errors.name}</p>}
//                       </div>
//                       <div className="col-lg-6 col-md-6 col-sm-12 form-group">
//                         <input
//                           type="email"
//                           name="email"
//                           placeholder="Your Email"
//                           value={formData.email}
//                           onChange={handleChange}
//                           required
//                         />
//                         {errors.email && <p className="text-danger">{errors.email}</p>}
//                       </div>
//                       <div className="col-lg-6 col-md-6 col-sm-12 form-group">
//                         <input
//                           type="text"
//                           name="mobile"
//                           placeholder="Your Mobile Number"
//                           value={formData.mobile}
//                           onChange={handleChange}
//                           required
//                         />
//                         {errors.mobile && <p className="text-danger">{errors.mobile}</p>}
//                       </div>
//                       <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
//                         <button
//                           className="theme-btn theme-btn-one"
//                           type="submit"
//                           name="submit-form"
//                         >
//                           Schedule Visit
//                         </button>
//                       </div>
//                     </div>
//                   </form>
//                   {showSuccessMessage && (
//                     <div className="success-message">
//                       <h2>Success!</h2>
//                       <p>Your visit request has been submitted successfully. We will contact you soon.</p>
//                     </div>
//                   )}
//                   {showErrorMessage && (
//                     <div className="error-message" style={{ color: "red" }}>
//                       <h2>Error!</h2>
//                       <p>Something went wrong. Please try again later.</p>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//         {/* Visit Form Section End */}
//       </div>
//     </>
//   );
// }
