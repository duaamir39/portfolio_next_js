"use client";

import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black pt-8 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="pt-24" 
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Let’s Get in Touch
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            I’d love to hear from you! Whether you have a project idea, a 
            collaboration opportunity, or simply want to say hello, feel free 
            to reach out. Fill in the form, and I’ll get back to you as soon as 
            possible. Your thoughts, ideas, and feedback are always valuable, 
            and I’m excited to connect and explore how we can work together. 
            Don’t hesitate—let’s start a conversation today!
          </p>
        </motion.div>
        <motion.form
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
           whileHover={{ scale: 1.02, boxShadow: `0px 0px 20px 4px rgba(255,255,255,0.2)` }}
          className="bg-gray-800 shadow-2xl rounded-2xl p-8 space-y-6 border border-gray-700"
        >
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-300 font-medium">First Name</label>
              <input
                type="text"
                placeholder="Enter first name"
                className="mt-2 w-full p-3 rounded-xl bg-gray-900 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-gray-300 font-medium">Last Name</label>
              <input
                type="text"
                placeholder="Enter last name"
                className="mt-2 w-full p-3 rounded-xl bg-gray-900 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>
          <div>
            <label className="block text-gray-300 font-medium">Phone Number</label>
            <input
              type="tel"
              placeholder="+92 300 1234567"
              className="mt-2 w-full p-3 rounded-xl bg-gray-900 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-gray-300 font-medium">Email Address</label>
            <input
              type="email"
              placeholder="Enter email"
              className="mt-2 w-full p-3 rounded-xl bg-gray-900 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-gray-300 font-medium">Message</label>
            <textarea
              placeholder="Write your message here..."
              rows={4}
              className="mt-2 w-full p-3 rounded-xl bg-gray-900 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-auto bg-pink-600 text-white p-3 rounded-xl font-semibold hover:bg-pink-700 transition"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </div>
  );
}
