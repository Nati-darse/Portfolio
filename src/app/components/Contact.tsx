export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-purple-100 to-blue-50 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg rounded-2xl shadow-2xl p-10 max-w-xl w-full border border-gray-200 dark:border-gray-700">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-1 font-semibold text-gray-700 dark:text-gray-200">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-purple-500 focus:outline-none bg-white/80 dark:bg-gray-800/80 transition-all duration-300 shadow-sm"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 font-semibold text-gray-700 dark:text-gray-200">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-purple-500 focus:outline-none bg-white/80 dark:bg-gray-800/80 transition-all duration-300 shadow-sm"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1 font-semibold text-gray-700 dark:text-gray-200">Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-purple-500 focus:outline-none bg-white/80 dark:bg-gray-800/80 transition-all duration-300 shadow-sm"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-bold shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300"
            >
              Send Message
            </button>
          </form>
          <div className="mt-12 text-center">
            <p className="mb-4 text-gray-700 dark:text-gray-300 font-medium">Or reach out directly:</p>
            <div className="flex justify-center space-x-8">
              <a href="mailto:your-email@example.com" className="group text-blue-600 dark:text-blue-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors text-2xl" aria-label="Email">
                <span className="inline-block group-hover:scale-125 transition-transform">✉️</span>
              </a>
              <a href="https://github.com/your-username" target="_blank" className="group text-blue-600 dark:text-blue-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors text-2xl" aria-label="GitHub">
                <span className="inline-block group-hover:scale-125 transition-transform">🐙</span>
              </a>
              <a href="https://linkedin.com/in/your-username" target="_blank" className="group text-blue-600 dark:text-blue-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors text-2xl" aria-label="LinkedIn">
                <span className="inline-block group-hover:scale-125 transition-transform">💼</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}