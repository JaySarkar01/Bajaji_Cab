'use client'
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FiCheckCircle, FiAlertCircle } from 'react-icons/fi';

export default function SearchFrom() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    mobile: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isButtonPressed, setIsButtonPressed] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const buttonVariants = {
    hover: { scale: 1.03 },
    tap: { scale: 0.98 }
  };

  const successVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      name: '',
      mobile: ''
    };
  
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
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
      }, 1500);
    }
  };

  const onWhatAppClick = (name) => {
    const phoneNumber = "917351358883"; // Replace with your WhatsApp number
    const message = `Hello, I would like to book a cab. My name is ${name}.`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  }

  return (
    <section className="py-12 w-full px-4 sm:px-6 lg:px-8">
     <div className="text-center">
  <h1 className="relative mb-5 inline-block text-3xl md:text-5xl lg:text-6xl font-bold py-14 font-sans underline underline-offset-8
    ">
    Welcome to Balaji Cab Service
  </h1>
</div>

      <div className="max-w-7xl mx-auto bg-slate-50 rounded-2xl">

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="rounded-2xl md:shadow-lg overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 h-[551px]">
            {/* Form Section */}
            <motion.div 
              variants={itemVariants}
              className="p-8 md:p-12 lg:p-16"
            >
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    key="success-message"
                    variants={successVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="text-center py-8"
                  >
                    <div className="flex justify-center mb-4">
                      <FiCheckCircle className="text-green-500 text-6xl" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Booking Successful!</h3>
                    <p className="text-gray-600 mb-6">Our representative will contact you shortly.</p>
                    <motion.button
                      onClick={resetForm}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-2 bg-indigo-100 text-indigo-700 rounded-lg hover:bg-indigo-200 transition-colors"
                    >
                      Book Another Ride
                    </motion.button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="booking-form"
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="space-y-6"
                    onSubmit={handleSubmit}
                    noValidate
                  >
                    <div>
                      <h1 className='text-center font-bold text-4xl'>Book your ride now!</h1>
                      <p className='text-gray-600 text-center p-3'>Fill out the form below to get an exclusive discount on your booking.</p>
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

                    <motion.div variants={itemVariants}>
                      <motion.button
                        type="submit"
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                        onMouseDown={() => setIsButtonPressed(true)}
                        onMouseUp={() => setIsButtonPressed(false)}
                        onMouseLeave={() => setIsButtonPressed(false)}
                        disabled={isSubmitting}
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
                          <div className="text-lg" 
                          onClick={()=>{
                            if (formData.name.trim() == '') return;
                            
                              onWhatAppClick(formData.name);
                      
                          }}>Book now! Get ₹500 off</div>
                        )}
                      </motion.button>
                      <p className="text-xs text-gray-500 mt-2 text-center">T&C Apply</p>
                    </motion.div>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Image Section (unchanged) */}
            <motion.div 
              variants={itemVariants}
              className="hidden lg:flex items-center justify-center bg-gradient-to-br from-indigo-100 to-purple-100 p-8 relative overflow-hidden rounded-l-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10"></div>
              <div className="relative w-full h-full z-10">
                <Image
                  src="/hero-Imgs/Banner-2.jpg"
                  alt="Taxi illustration"
                  fill
                  className="object-contain rounded-4xl"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}