import Image from "next/image";
import Img1 from "../assets/signup/img1.jpg";
import Google from "../assets/signup/google.png";
import Facebook from "../assets/signup/fb.png";

// Reusable Input Field Component
const InputField = ({ id, label, type = "text", placeholder }) => (
  <div className="w-full">
    <label htmlFor={id} className="block mb-1 font-medium text-black text-sm">
      {label}
    </label>
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      className="w-full border border-gray-300 p-2 rounded-[10px] text-sm text-black placeholder-gray-400"
    />
  </div>
);

// Reusable Social Button Component
const SocialButton = ({ icon, text }) => (
  <button className="w-1/2 flex items-center justify-center border p-2 rounded-[10px] border-gray-300 text-sm text-black">
    <Image src={icon} alt={text} className="w-5 h-5 mr-2" />
    {text}
  </button>
);

// Signup Page
export default function SignupPage() {
  return (
    <div className="min-h-screen flex bg-white font-sans">
      {/* Left Side - Image */}
      <div className="w-1/2 bg-indigo-100 flex items-center justify-center">
        {/* Uncomment if you want the image */}
        {/* <Image src={Img1} alt="Sign Up Visual" className="max-h-full object-cover" /> */}
      </div>

      {/* Right Side - Form */}
      <div className="w-1/2 flex flex-col justify-center px-36">
        <h2 className="text-4xl font-semibold text-black mb-4">Sign Up</h2>

        <form className="space-y-4" autoComplete="off">
          <div className="flex gap-4">
            <InputField id="name" label="Name" placeholder="Enter your name" />
            <InputField id="phone" label="Phone Number" placeholder="Enter your phone number" />
          </div>

          <InputField id="email" label="Email" type="email" placeholder="Enter your email" autoComplete="off" />
          <InputField id="password" label="Password" type="password" placeholder="Enter your password" autoComplete="new-password"/>
          <InputField id="confirmPassword" label="Confirm Password" type="password" placeholder="Re-enter your password" />

          <div className="flex items-start gap-2">
            <input type="checkbox" id="terms" className="mt-1" />
            <label htmlFor="terms" className="text-xs text-black leading-snug">
              I’ve read and agree with Terms of Service and Privacy Policy
            </label>
          </div>

          <button className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 text-sm font-medium">
            Sign up
          </button>

          <div className="text-center text-gray-500 text-sm">OR</div>

          <div className="flex gap-4">
            <SocialButton icon={Google} text="Sign up with Google" />
            <SocialButton icon={Facebook} text="Sign up with Facebook" />
          </div>

          <p className="text-center text-sm mt-4 text-black">
            Already have an account? <a href="/login" className="text-indigo-600 font-medium">Sign in</a>
          </p>
        </form>
      </div>
    </div>
  );
}
