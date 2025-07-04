export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-1">Name</label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-1">Message</label>
            <textarea
              id="message"
              rows={4}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600"
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Send Message
          </button>
        </form>
        <div className="mt-12 text-center">
          <p className="mb-4">Or reach out directly:</p>
          <div className="flex justify-center space-x-6">
            <a href="mailto:your-email@example.com" className="text-blue-600 hover:underline">
              Email
            </a>
            <a href="https://github.com/your-username" target="_blank" className="text-blue-600 hover:underline">
              GitHub
            </a>
            <a href="https://linkedin.com/in/your-username" target="_blank" className="text-blue-600 hover:underline">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}