'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { FaUser, FaEnvelope, FaPhone, FaIdCard, FaUtensils, FaCheck } from 'react-icons/fa'

type FormData = {
  name: string
  rollNumber: string
  email: string
  phone: string
  dietaryPreference: string
}

const RSVP = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    
    // Simulate API call - Replace with actual Firebase/API integration
    console.log('Form data:', data)
    
    // Simulate delay
    await new Promise((resolve) => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    reset()

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <section id="rsvp" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-4">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Register Now
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Secure your spot for the most awaited event of the year!
          </p>
        </motion.div>

        {/* Registration Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto glass-effect p-8 rounded-xl"
        >
          {isSubmitted ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaCheck className="text-4xl text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-green-500">
                Registration Successful!
              </h3>
              <p className="text-gray-300 mb-6">
                Thank you for registering! You will receive a confirmation email shortly.
              </p>
              <p className="text-gray-400 text-sm">
                Please check your email for your QR code entry pass.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-300">
                  <FaUser className="inline mr-2" />
                  Full Name *
                </label>
                <input
                  type="text"
                  {...register('name', { required: 'Name is required' })}
                  className="w-full bg-white/10 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                  placeholder="Enter your full name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              {/* Roll Number */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-300">
                  <FaIdCard className="inline mr-2" />
                  Roll Number *
                </label>
                <input
                  type="text"
                  {...register('rollNumber', { required: 'Roll number is required' })}
                  className="w-full bg-white/10 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                  placeholder="Enter your roll number"
                />
                {errors.rollNumber && (
                  <p className="text-red-500 text-sm mt-1">{errors.rollNumber.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-300">
                  <FaEnvelope className="inline mr-2" />
                  Email Address *
                </label>
                <input
                  type="email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address',
                    },
                  })}
                  className="w-full bg-white/10 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-300">
                  <FaPhone className="inline mr-2" />
                  Phone Number *
                </label>
                <input
                  type="tel"
                  {...register('phone', {
                    required: 'Phone number is required',
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: 'Please enter a valid 10-digit phone number',
                    },
                  })}
                  className="w-full bg-white/10 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                  placeholder="Enter your phone number"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                )}
              </div>

              {/* Dietary Preference */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-300">
                  <FaUtensils className="inline mr-2" />
                  Dietary Preference
                </label>
                <select
                  {...register('dietaryPreference')}
                  className="w-full bg-white/10 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                >
                  <option value="none" className="bg-gray-800">
                    No preference
                  </option>
                  <option value="vegetarian" className="bg-gray-800">
                    Vegetarian
                  </option>
                  <option value="non-vegetarian" className="bg-gray-800">
                    Non-Vegetarian
                  </option>
                  <option value="vegan" className="bg-gray-800">
                    Vegan
                  </option>
                  <option value="other" className="bg-gray-800">
                    Other (specify in notes)
                  </option>
                </select>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 text-white font-bold py-3 px-8 rounded-lg transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? 'Registering...' : 'Register Now'}
              </button>
            </form>
          )}

          {/* Note */}
          <p className="text-gray-400 text-sm mt-6 text-center">
            * All fields are mandatory. You will receive a confirmation email with QR code after registration.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default RSVP
