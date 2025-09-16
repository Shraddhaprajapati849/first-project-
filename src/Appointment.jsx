// src/pages/Appointment.jsx
import React, { useState } from "react";

export default function Appointment() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Appointment booked for ${formData.name} on ${formData.date} at ${formData.time}`);
  };

  return (
    <div className="container py-5 bg-gray-100">
      <h1 className="mb-4 text-center">Make an Appointment</h1>
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                {/* Name */}
                <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Email */}
                <div className="mb-3">
                  <label className="form-label">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Phone */}
                <div className="mb-3">
                  <label className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    className="form-control"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Service */}
                <div className="mb-3">
                  <label className="form-label">Service</label>
                  <select
                    className="form-select"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="general">General Checkup</option>
                    <option value="dental">Dental Care</option>
                    <option value="cardio">Cardiology</option>
                    <option value="pediatrics">Pediatrics</option>
                  </select>
                </div>

                {/* Date & Time */}
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Preferred Date</label>
                    <input
                      type="date"
                      className="form-control"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Preferred Time</label>
                    <input
                      type="time"
                      className="form-control"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                {/* Submit */}
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary">
                    Book Appointment
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Success note */}
          <p className="text-muted text-center mt-3">
            We’ll confirm your appointment by email or phone.
          </p>
        </div>
      </div>
    </div>
  );
}
