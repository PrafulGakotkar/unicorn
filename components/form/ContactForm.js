

import React, { useState, ChangeEvent, FormEvent } from "react";




const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    number: "",
    subject: "",
    message: ""
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Prevent non-numeric characters and limit to 10 digits for mobile number
    if (name === "number" && !/^\d{0,10}$/.test(value)) {
      return;
    }

    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e:) => {
    e.preventDefault();

    // Validation logic
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    }
    if (!formData.number.trim()) {
      newErrors.number = "Phone number is required";
    }
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setShowErrorMessage(true);
      return;
    }

    console.log("Form Data:", formData);

    // Store name separately
    const submittedName = formData.name;

    // Clear form values except name
    setFormData({
      name: "",
      email: "",
      number: "",
      subject: "",
      message: ""
    });

    try {
      const response = await fetch("https://webadmin.gramenson.com/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "authKey":"add"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setShowSuccessMessage(true);
        console.log("Form data sent successfully!");
        // Handle success, e.g., show a success message to the user
      }else if (response.status === 500) {
        setShowErrorMessage(true); // Display error message
        setShowSuccessMessage(false);
      }
      else if (response.status === 404) {
        setShowErrorMessage(true); // Display error message
        setShowSuccessMessage(false);
      } 
      else {
        setShowErrorMessage(true);
        console.error("Failed to send form data:", response.statusText);
        // Handle error, e.g., show an error message to the user
      }
    } catch (error) {
      setShowErrorMessage(true);
      console.error("Error sending form data:", error);
      // Handle error, e.g., show an error message to the user
    }

    // Use submittedName in the success message
    setFormData(prevState => ({
      ...prevState,
      name: submittedName
    }));
  };



  return (
    <>
      <div className="contact-area ptb-100">
        <div className="container">
          <div className="section-title">
            <span className="sub-title" style={{color:'red'}}>Contact Us</span>
            <h2>Drop us Message for any Query</h2>
            {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p> */}
          </div>

          <div className="row align-items-center">
            <div className="col-lg-4 col-md-4">
              <div className="contact-image">
                <Image
                  src="/images/contact.png"
                  alt="image"
                  width={310}
                  height={350}
                />
              </div>
            </div>

            <div className="col-lg-8 col-md-8">
            {!showSuccessMessage ? (
                    <>
                      <div className="banner-form ml-3">
                        {/* <h3 className="text-center pb-3">Add Project</h3> */}
                        <form onSubmit={handleSubmit}>
                          <div className="form-row">
                            <div className="form-group">
                              <label htmlFor="text"> Name:</label>
                              <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={formData.name}
                                onChange={handleChange}
                              />
                            </div>
                            <div className="form-group">
                              <label htmlFor="tel"> Mobile:</label>
                              <input
                                type="tel"
                                placeholder="Mobile"
                                name="number"
                                value={formData.number}
                                onChange={handleChange}
                                pattern="[0-9]{10}"
                                required
                              />
                              {errors.number && (
                                <p className="text-danger">{errors.number}</p>
                              )}
                            </div>
                          </div>
                          <div className="form-row">
                            <div className="form-group">
                              <label htmlFor="email">Email:</label>
                              <input
                                type="email"
                                placeholder="Email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                              />
                              {errors.email && (
                                <p className="text-danger">{errors.email}</p>
                              )}
                            </div>
                            <div className="form-group">
                              <label htmlFor="subject">Subject:</label>
                              <input
                                type="text"
                                placeholder="Subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                              />
                              
                            </div>
                          </div>
                          <div className="form-row">
                            <div className="form-group">
                            <label htmlFor="message">Message:</label>
                              <textarea
                                // type="text"
                                placeholder="Message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                              />
                            </div>
                           
                          </div>
                          <button
                            className="submit-btn"
                            style={{ width: "10rem" }}
                            type="submit"
                          >
                            Submit
                          </button>
                        </form>
                      </div>
                      {showErrorMessage && (
                        <div className="error-message" style={{ color: "red" }}>
                          <h2>Error!</h2>
                          <p>Something went wrong. Please try again later.</p>
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="success-message">
                      <h2>Success!</h2>
                      <p>{formData.name}, your Message has been submitted successfully.</p>
                      {formData.name = " "}
                    </div>
                  )}

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
