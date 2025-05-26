export default function ContactForm() {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4 py-12">
        <h1 className="text-white text-4xl md:text-5xl font-bold mb-10 text-center">
          HOW CAN WE HELP?
        </h1>
  
        <form className="w-full max-w-4xl space-y-6">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Name"
              className="flex-1 p-4 bg-black border border-gray-800 rounded-md text-white focus:outline-none"
            />
            <input
              type="email"
              placeholder="E-mail"
              className="flex-1 p-4 bg-black border border-gray-800 rounded-md text-white focus:outline-none"
            />
          </div>
  
          <textarea
            rows="6"
            placeholder="Message"
            className="w-full p-4 bg-black border border-gray-800 rounded-md text-white resize-none focus:outline-none"
          />
  
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 text-white font-semibold py-3 px-8 rounded-md hover:bg-blue-600 transition"
            >
              Send message
            </button>
          </div>
        </form>
      </div>
    );
  }
  