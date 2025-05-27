import Image from "next/image";
import Img1 from "../assets/signup/img2.jpg";
import Google from "../assets/signup/google.png";
import Facebook from "../assets/signup/fb.png";

const InputField = ({ id, label, type = "text", placeholder }) => (
  <div className="w-full">
    <label htmlFor={id} className="block mb-1 font-medium text-black text-sm">
      {label}
    </label>
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      className="w-full border border-gray-300 p-2 rounded-[10px] text-sm text-black placeholder-gray-400 focus:outline-none"
    />
  </div>
);

const SocialButton = ({ icon, text }) => (
  <button className="w-1/2 flex items-center justify-center border p-2 rounded-[10px] border-gray-300 text-sm text-black">
    <Image src={icon} alt={text} className="w-5 h-5 mr-2" />
    {text}
  </button>
);

export default function SignIn() {
  return (
    <div className="min-h-screen flex bg-white font-sans">
      <div className="w-1/2 bg-indigo-100 flex items-center justify-center">
        {/* <Image src={Img1} alt="Login Visual" className="object-cover" /> */}
      </div>

      {/* Right Side - Form */}
      <div className="w-1/2 flex flex-col justify-center px-36">
        <h2 className="text-4xl font-semibold text-black mb-4">Log In</h2>

        <form className="space-y-4" autoComplete="off">
          <InputField id="email" label="Email" type="email" placeholder="Enter your email" />
          <InputField id="password" label="Password" type="password" placeholder="Enter your password" />

          <button className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 text-sm font-medium">
            Log in
          </button>

          <div className="text-center text-gray-500 text-sm">OR</div>

          <div className="flex gap-4">
            <SocialButton icon={Google} text="Log in with Google" />
            <SocialButton icon={Facebook} text="Log in with Facebook" />
          </div>

          <p className="text-center text-sm mt-4 text-black">
            Don't have an account?{" "}
            <a href="/signup" className="text-indigo-600 font-medium">
              Sign up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
