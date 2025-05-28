"use client";
import { useState } from "react";
import Image from "next/image";
import Img1 from "../assets/signup/img2.jpg";
import Google from "../assets/signup/google.png";
import Facebook from "../assets/signup/fb.png";

const InputField = ({ id, label, type = "text", placeholder, value, onChange, error }) => (
  <div className="w-full">
    <label htmlFor={id} className="block mb-1 font-medium text-black text-sm">
      {label}
    </label>
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`w-full border p-2 rounded-[10px] text-sm text-black placeholder-gray-400 focus:outline-none 
        ${error ? "border-red-500" : "border-gray-300"}`}
    />
    {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
  </div>
);

const SocialButton = ({ icon, text }) => (
  <button type="button" className="w-full sm:w-1/2 flex items-center justify-center border p-2 rounded-[10px] border-gray-300 text-sm text-black">
    <Image src={icon} alt={text} className="w-5 h-5 mr-2" />
    {text}
  </button>
);

export default function SignupPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = "Enter a valid 10-digit phone number";

    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Enter a valid email";

    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters";

    if (!formData.confirmPassword) newErrors.confirmPassword = "Please confirm your password";
    else if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match";

    if (!formData.terms) newErrors.terms = "You must accept the terms";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted successfully", formData);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white font-sans">
      {/* Left image section */}
      <div className="hidden md:flex md:w-1/2 bg-indigo-100 items-center justify-center">
        {/* <Image src={Img1} alt="Sign Up Visual" className="object-cover" /> */}
      </div>

      {/* Right form section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-6 px-8 md:px-12 lg:px-24 py-8">
        <h2 className="text-3xl sm:text-4xl font-semibold text-black md:mb-4 mb-3">Sign Up</h2>

        <form className="space-y-2 md:space-y-4" autoComplete="off" onSubmit={handleSubmit}>
          <div className="flex flex-col sm:flex-row gap-2 md:gap-4">
            <InputField
              id="name"
              label="Name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              error={errors.name}
            />
            <InputField
              id="phone"
              label="Phone Number"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              error={errors.phone}
            />
          </div>

          <InputField
            id="email"
            label="Email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
          />
          <InputField
            id="password"
            label="Password"
            type="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            error={errors.password}
          />
          <InputField
            id="confirmPassword"
            label="Confirm Password"
            type="password"
            placeholder="Re-enter your password"
            value={formData.confirmPassword}
            onChange={handleChange}
            error={errors.confirmPassword}
          />

          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              id="terms"
              checked={formData.terms}
              onChange={handleChange}
              className="mt-1"
            />
            <label htmlFor="terms" className="text-xs text-black leading-snug w-[85%]">
              I’ve read and agree with Terms of Service and Privacy Policy
            </label>
          </div>
          {errors.terms && <p className="text-xs text-red-500 -mt-2">{errors.terms}</p>}

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 text-sm font-medium"
          >
            Sign up
          </button>

          <div className="text-center text-gray-500 text-sm">OR</div>

          <div className="flex flex-row gap-2 lg:gap-4">
            <SocialButton icon={Google} text="Sign up with Google" />
            <SocialButton icon={Facebook} text="Sign up with Facebook" />
          </div>

          <p className="text-center text-sm mt:2 md:mt-4 text-black">
            Already have an account?{" "}
            <a href="/login" className="text-indigo-600 font-medium">
              Log in
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
