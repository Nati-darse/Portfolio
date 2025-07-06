'use client';

import { motion } from 'framer-motion';

export default function Blog() {
  const blogPosts = [
    {
      title: 'Building Scalable React Applications with TypeScript',
      excerpt: 'Learn how to structure large React applications using TypeScript, including best practices for state management, component composition, and performance optimization.',
      category: 'Frontend Development',
      date: 'December 15, 2024',
      readTime: '8 min read',
      tags: ['React', 'TypeScript', 'Performance'],
      image: '🚀',
      link: '#'
    },
    {
      title: 'Modern Authentication Patterns for Web Applications',
      excerpt: 'Explore different authentication strategies including JWT, OAuth, and session-based auth, with practical implementation examples and security considerations.',
      category: 'Backend Development',
      date: 'December 10, 2024',
      readTime: '12 min read',
      tags: ['Authentication', 'Security', 'JWT'],
      image: '🔐',
      link: '#'
    },
    {
      title: 'Optimizing Database Performance in Node.js Applications',
      excerpt: 'Discover techniques for improving database performance, including query optimization, connection pooling, and caching strategies for MongoDB and PostgreSQL.',
      category: 'Backend Development',
      date: 'December 5, 2024',
      readTime: '10 min read',
      tags: ['Node.js', 'Database', 'Performance'],
      image: '⚡',
      link: '#'
    },
    {
      title: 'Creating Beautiful UIs with Tailwind CSS',
      excerpt: 'Master the art of building responsive and accessible user interfaces using Tailwind CSS, from basic components to advanced design patterns.',
      category: 'Frontend Development',
      date: 'November 28, 2024',
      readTime: '6 min read',
      tags: ['CSS', 'Tailwind', 'UI/UX'],
      image: '🎨',
      link: '#'
    }
  ];

  return (
    <section id="blog" className="py-20 bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Latest Articles
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Technical insights, tutorials, and thoughts on modern web development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:scale-105 transition-transform duration-300"
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl">{post.image}</span>
                  <div className="text-right">
                    <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                      {post.category}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {post.readTime}
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3 line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {post.date}
                  </span>
                  <a
                    href={post.link}
                    className="text-blue-600 dark:text-blue-400 font-medium hover:underline transition-colors duration-300"
                  >
                    Read More →
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Posts Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="https://medium.com/@natnael-darsema"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-full font-semibold hover:scale-105 hover:shadow-2xl transition-all duration-300"
          >
            <span className="text-2xl mr-3">📝</span>
            View All Articles on Medium
          </a>
        </motion.div>
      </div>
    </section>
  );
} 