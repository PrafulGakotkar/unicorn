"use client"

import React, { useState } from "react";
import Link from "next/link";

export default function Feedback() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    mobile: "",
    rating: "",
    comments: ""
  });

  const [errors, setErrors] = useState({});
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation logic
    const newErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    }
    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    }
    if (!formData.rating.trim()) {
      newErrors.rating = "Rating is required";
    }
    if (!formData.comments.trim()) {
      newErrors.comments = "Comments are required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setShowErrorMessage(true);
      return;
    }

    console.log("Form Data:", formData);

    try {
      const response = await fetch("https://example.com/api/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setShowSuccessMessage(true);
        setShowErrorMessage(false);
        console.log("Feedback submitted successfully!");
      } else {
        setShowErrorMessage(true);
        setShowSuccessMessage(false);
        console.error("Failed to submit feedback:", response.statusText);
      }
    } catch (error) {
      setShowErrorMessage(true);
      setShowSuccessMessage(false);
      console.error("Error submitting feedback:", error);
    }

    // Clear form after submission
    setFormData({
      username: "",
      email: "",
      mobile: "",
      rating: "",
      comments: ""
    });
  };

  return (
    <>
      <div>
        {/* Feedback Form Section */}
        <section className="feedback-style-two sec-pad">
          <div className="auto-container">
            <div className="row clearfix">
              <div className="col-lg-12 col-md-12 col-sm-12 content-column">
                <div className="content-box mr_70">
                  <div className="sec-title mb_35" style={{ textAlign: 'center' }}>
                    <h2>We Value Your Feedback</h2>
                    <p className="mt_20">Please provide your feedback to help us improve our services.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 form-column">
                <div className="form-inner">
                  <form onSubmit={handleSubmit} id="feedback-form" className="default-form">
                    <div className="row clearfix">
                      <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                        <input
                          type="text"
                          name="username"
                          placeholder="Your Name"
                          value={formData.username}
                          onChange={handleChange}
                          required
                        />
                        {errors.username && <p className="text-danger">{errors.username}</p>}
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                        <input
                          type="email"
                          name="email"
                          placeholder="Your Email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                        {errors.email && <p className="text-danger">{errors.email}</p>}
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                        <input
                          type="text"
                          name="mobile"
                          placeholder="Your Mobile Number"
                          value={formData.mobile}
                          onChange={handleChange}
                          required
                        />
                        {errors.mobile && <p className="text-danger">{errors.mobile}</p>}
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                        <select
                          name="rating"
                          value={formData.rating}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Select rating</option>
                          <option value="1">1 - Very Poor</option>
                          <option value="2">2 - Poor</option>
                          <option value="3">3 - Average</option>
                          <option value="4">4 - Good</option>
                          <option value="5">5 - Excellent</option>
                        </select>
                        {errors.rating && <p className="text-danger">{errors.rating}</p>}
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                        <textarea
                          name="comments"
                          placeholder="Your Comments"
                          value={formData.comments}
                          onChange={handleChange}
                          required
                        />
                        {errors.comments && <p className="text-danger">{errors.comments}</p>}
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
                        <button
                          className="theme-btn theme-btn-one"
                          type="submit"
                          name="submit-form"
                        >
                          Submit Feedback
                        </button>
                      </div>
                    </div>
                  </form>
                  {showSuccessMessage && (
                    <div className="success-message">
                      <h2>Success!</h2>
                      <p>Your feedback has been submitted successfully. Thank you!</p>
                    </div>
                  )}
                  {showErrorMessage && (
                    <div className="error-message" style={{ color: "red" }}>
                      <h2>Error!</h2>
                      <p>Something went wrong. Please try again later.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Feedback Form Section End */}
      </div>
    </>
  );
}
