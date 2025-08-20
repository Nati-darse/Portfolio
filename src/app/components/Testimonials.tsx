'use client';

import { motion } from 'framer-motion';
import CodeBackground from './CodeBackground';

export default function Testimonials() {
  const testimonials = [
    // {
    //   name: 'Sarah Denbu',
    //   role: 'Project Manager',
    //   company: 'TechStart Inc.',
    //   content: 'Natnael delivered exceptional results on our e-commerce platform. His attention to detail and problem-solving skills are outstanding. The project was completed on time and exceeded our expectations.',
    //   rating: 5,
    //   avatar: '👩‍💼'
    // },
    {
      name: 'damtew Getaworash',
      role: 'CEO',
      company: 'InnovateLab',
      content: 'Working with Natnael was a game-changer for our startup. He not only built a robust application but also provided valuable insights on user experience and scalability.',
      rating: 5,
      avatar: '👨‍💼'
    },
    // {
    //   name: 'Emily Rodriguez',
    //   role: 'Marketing Director',
    //   company: 'Digital Solutions Co.',
    //   content: 'Natnael\'s technical expertise and communication skills made our collaboration seamless. He transformed our vision into a beautiful, functional website that our users love.',
    //   rating: 5,
    //   avatar: '👩‍💻'
    // },
    {
      name: 'Dawit Shimels',
      role: 'Senior Developer',
      company: 'CodeCraft Studio',
      content: 'As a fellow developer, I\'m impressed by Natnael\'s clean code practices and modern development approach. He\'s a valuable asset to any development team.',
      rating: 5,
      avatar: '👨‍💻'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-lg ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
        ⭐
      </span>
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      <div className="dark:block hidden">
        <CodeBackground />
      </div>
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 relative z-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            What People Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Feedback from clients, colleagues, and collaborators about my work and collaboration style
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 relative z-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700 hover:scale-105 hover:border-purple-500/50 transition-all duration-500 group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="flex items-center mb-6">
                <div className="text-4xl mr-4">{testimonial.avatar}</div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                    {testimonial.name}
                  </h4>
                  <p className="text-blue-600 dark:text-blue-400 text-sm font-medium">
                    {testimonial.role}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    {testimonial.company}
                  </p>
                </div>
              </div>

              <div className="flex mb-4">
                {renderStars(testimonial.rating)}
              </div>

              <blockquote className="text-gray-600 dark:text-gray-300 leading-relaxed italic">
                &ldquo;{testimonial.content}&rdquo;
              </blockquote>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">9+</div>
            <div className="text-gray-600 dark:text-gray-300">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">100%</div>
            <div className="text-gray-600 dark:text-gray-300">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-pink-600 dark:text-pink-400 mb-2">1+</div>
            <div className="text-gray-600 dark:text-gray-300">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">24/7</div>
            <div className="text-gray-600 dark:text-gray-300">Support Available</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 