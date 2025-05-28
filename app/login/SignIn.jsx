'use client';
import { useState } from 'react';
import Image from 'next/image';
import Google from '../assets/signup/google.png';
import Facebook from '../assets/signup/fb.png';

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
      className={`w-full border ${error ? 'border-red-500' : 'border-gray-300'} p-2 rounded-[10px] text-sm text-black placeholder-gray-400 focus:outline-none`}
    />
    {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
  </div>
);

const SocialButton = ({ icon, text }) => (
  <button className="w-full sm:w-1/2 flex items-center justify-center border p-2 rounded-[10px] border-gray-300 text-sm text-black hover:bg-gray-100">
    <Image src={icon} alt={text} className="w-5 h-5 mr-2" />
    {text}
  </button>
);

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Logging in with', { email, password });
    }
  };

  return (
    <div className="min-h-screen flex bg-white font-sans">
      {/* Left image section */}
      <div className="hidden md:flex md:w-1/2 bg-indigo-100 items-center justify-center">
        {/* Optional image or visual */}
      </div>

      {/* Right form section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-6 md:px-12 lg:px-24 py-8">
        <h2 className="text-3xl sm:text-4xl font-semibold text-black md:mb-4 mb-3">Log In</h2>

        <form className="space-y-2 md:space-y-4" autoComplete="off" onSubmit={handleSubmit}>
          <InputField
            id="email"
            label="Email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={errors.email}
          />
          <InputField
            id="password"
            label="Password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={errors.password}
          />

          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 text-sm font-medium">
            Log in
          </button>

          <div className="text-center text-gray-500 text-sm">OR</div>

          <div className="flex flex-col sm:flex-row gap-2 lg:gap-4">
            <SocialButton icon={Google} text="Log in with Google" />
            <SocialButton icon={Facebook} text="Log in with Facebook" />
          </div>

          <p className="text-center text-sm md:mt-4 text-black">
            Don’t have an account?{" "}
            <a href="/signup" className="text-indigo-600 font-medium">
              Create account
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
