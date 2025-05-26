export default function Newsletter() {
  return (
    <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-sm font-semibold tracking-wider text-gray-700 uppercase mb-2">
          Our Newsletter
        </p>
        <h2 className="text-4xl font-semibold text-gray-900 mb-8">
          Stay in touch with us
        </h2>
        <form className="flex flex-col sm:flex-row items-center border border-gray-400 rounded-none">
          <input
            type="email"
            required
            placeholder="Your email address"
            className="w-full px-4 py-4 text-gray-900 placeholder-gray-500 focus:outline-none"
          />
          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-4 bg-transparent text-gray-900 font-medium tracking-wide border-t sm:border-t-0 sm:border-l border-gray-400 hover:bg-gray-200 transition"
          >
            SUBSCRIBE
          </button>
        </form>
      </div>
    </div>
  );
}
