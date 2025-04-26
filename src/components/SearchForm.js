'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FiCheckCircle, FiAlertCircle } from 'react-icons/fi';

export default function SearchForm() {
  const [formData, setFormData] = useState({ name: '', mobile: '' });
  const [errors, setErrors] = useState({ name: '', mobile: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isButtonPressed, setIsButtonPressed] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { name: '', mobile: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    } else if (formData.name.trim().length < 3) {
      newErrors.name = 'Name must be at least 3 characters';
      valid = false;
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required';
      valid = false;
    } else if (!/^[0-9]{10}$/.test(formData.mobile)) {
      newErrors.mobile = 'Please enter a valid 10-digit mobile number';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const resetForm = () => {
    setFormData({ name: '', mobile: '' });
    setErrors({ name: '', mobile: '' });
    setIsSuccess(false);
    setIsSubmitting(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
      }, 1500);
    }
  };

  const onWhatAppClick = (name) => {
    const phoneNumber = '917895497017';
    const message = `Hello, I would like to book a cab. My name is ${name}.`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="py-14 w-full px-4 sm:px-6 lg:px-8">
      <div className="hidden md:block text-center lg:mt-40 xl:mt-15">
        <h1 className="relative mb-5 text-3xl md:text-5xl lg:text-6xl font-bold py-14 font-sans underline underline-offset-8">
          Welcome to Balaji Cab Service
        </h1>
      </div>

      <div className="max-w-7xl mx-auto bg-slate-50 rounded-2xl shadow-md">
        <div className="grid grid-cols-1 lg:grid-cols-2 h-[551px] rounded-2xl overflow-hidden">
          {/* Form Section */}
          <div className="p-8 md:p-12 lg:p-16">
            {isSuccess ? (
              <div className="text-center py-8">
                <div className="flex justify-center mb-4">
                  <FiCheckCircle className="text-green-500 text-6xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Booking Successful!</h3>
                <p className="text-gray-600 mb-6">Our representative will contact you shortly.</p>
                <button
                  onClick={resetForm}
                  className="px-6 py-2 bg-indigo-100 text-indigo-700 rounded-lg hover:bg-indigo-200 transition-colors"
                >
                  Book Another Ride
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <h1 className="text-center font-bold text-4xl">Book your ride now!</h1>
                <p className="text-gray-600 text-center p-3">
                  Fill out the form below to get an exclusive discount on your booking.
                </p>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all`}
                    placeholder="Enter your name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <FiAlertCircle className="mr-1" /> {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.mobile ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all`}
                    placeholder="Enter 10-digit mobile number"
                    maxLength="10"
                  />
                  {errors.mobile && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <FiAlertCircle className="mr-1" /> {errors.mobile}
                    </p>
                  )}
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    onMouseDown={() => setIsButtonPressed(true)}
                    onMouseUp={() => setIsButtonPressed(false)}
                    onMouseLeave={() => setIsButtonPressed(false)}
                    className={`w-full py-4 px-6 bg-gradient-to-r from-amber-200 to-yellow-500 text-gray-900 font-bold rounded-xl shadow-md hover:shadow-lg transition-all ${isButtonPressed ? 'transform scale-95' : ''} ${isSubmitting ? 'opacity-80 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      <div
                        className="text-lg"
                        onClick={() => {
                          if (formData.name.trim() !== '') onWhatAppClick(formData.name);
                        }}
                      >
                        Book now! Get ₹500 off
                      </div>
                    )}
                  </button>
                  <p className="text-xs text-gray-500 mt-2 text-center">T&C Apply</p>
                </div>
              </form>
            )}
          </div>

          {/* Image Section */}
          <div className="hidden lg:flex items-center justify-center relative overflow-hidden rounded-l-2xl shadow-xl">
            <Image
              src="/hero-Imgs/Banner-2.jpg"
              alt="Taxi illustration"
              fill
              className="object-cover rounded"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}