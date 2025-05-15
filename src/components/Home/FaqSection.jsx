import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import Section from '../UI/Section';
import SectionTitle from '../UI/SectionTitle';

const faqs = [
  {
    question: "What services do you offer?",
    answer: "We offer a comprehensive range of web development services including custom website development, e-commerce solutions, responsive design, web applications, SEO optimization, and website maintenance."
  },
  {
    question: "How can Obsidium help my business",
    answer: "We create and design professional websitesto help you stand out online and achieve measurable results. Share your vision with us and we will transform it into a digital reality."
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer: "Yes, we offer various maintenance packages to ensure your website remains secure, up-to-date, and performing optimally. This includes regular updates, security monitoring, backups, and technical support."
  },
  {
    question: "Is the payment process simple?",
    answer: "Yes, it is! We offer a straightforward billing system. A 50% deposit is required to start the project, with the remaining 50% balance due upon completion."
  },
  {
    question: "Do you help with website hosting?",
    answer: "Yes, we can recommend and set up reliable hosting solutions tailored to your website's needs. We ensure your website is hosted on secure, high-performance servers with excellent uptime."
  },
  {
    question: "Can you help improve my existing website?",
    answer: "Absolutely! We offer website audit and improvement services to enhance your existing website's design, performance, security, and SEO. We'll analyze your current site and recommend targeted improvements."
  }
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section background="light">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2
            }
          }
        }}
      >
        <SectionTitle
          title="Frequently Asked Questions"
          subtitle="Find answers to common questions about our services and process"
        />

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="mb-4"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full text-left bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {faq.question}
                  </h3>
                  <span className="text-obsidium-500 ml-4">
                    {openIndex === index ? (
                      <Minus size={20} />
                    ) : (
                      <Plus size={20} />
                    )}
                  </span>
                </div>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 text-gray-600 dark:text-gray-400">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
};

export default FaqSection;