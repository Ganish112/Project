import React, { useState, useEffect, useRef } from 'react';
import Section from '../UI/Section';
import SectionTitle from '../UI/SectionTitle';

const clients = [
  { name: 'Client 1', logo: 'https://via.placeholder.com/150x80?text=Client+1' },
  { name: 'Client 2', logo: 'https://via.placeholder.com/150x80?text=Client+2' },
  { name: 'Client 3', logo: 'https://via.placeholder.com/150x80?text=Client+3' },
  { name: 'Client 4', logo: 'https://via.placeholder.com/150x80?text=Client+4' },
  { name: 'Client 5', logo: 'https://via.placeholder.com/150x80?text=Client+5' },
  { name: 'Client 6', logo: 'https://via.placeholder.com/150x80?text=Client+6' },
];

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    position: 'CEO, TechStart Inc.',
    photo: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300',
    content:
      'Working with Obsidium was an excellent experience from start to finish. They took the time to understand our business needs and delivered a website that exceeded our expectations. Their attention to detail and commitment to quality is impressive.',
  },
  {
    id: 2,
    name: 'Michael Rodriguez',
    position: 'Marketing Director, GrowFast',
    photo: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300',
    content:
      'Obsidium transformed our outdated website into a modern, user-friendly platform that has significantly increased our conversion rates. Their team was responsive, professional, and delivered the project on time and within budget.',
  },
  {
    id: 3,
    name: 'Emily Chen',
    position: 'Founder, EcoShop',
    photo: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300',
    content:
      'The e-commerce solution Obsidium built for us has been a game-changer for our business. Sales have increased by 40% since launch, and the website is easy to manage. I highly recommend their services to any business looking to improve their online presence.',
  },
];

const ClientsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const testimonialsRef = useRef(null);
  const autoplayRef = useRef(null);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setActiveTestimonial(index);
  };

  useEffect(() => {
    autoplayRef.current = setInterval(() => {
      nextTestimonial();
    }, 8000);

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, []);

  return (
    <Section background="light">
      

      <SectionTitle
        title="What Our Clients Say"
        subtitle="Don't just take our word for it. Here's what our clients have to say about working with us."
      />

      <div
        ref={testimonialsRef}
        className="relative overflow-hidden rounded-lg bg-white dark:bg-gray-900 shadow-lg"
      >
        <div
          className="transition-transform duration-500 ease-in-out flex"
          style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="min-w-full p-8 md:p-12">
              <div className="flex flex-col md:flex-row md:items-center">
                <div className="mb-6 md:mb-0 md:mr-8 flex-shrink-0">
                  <img
                    src={testimonial.photo}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full object-cover object-center border-2 border-blue-500"
                  />
                </div>
                <div>
                  <div className="text-yellow-500 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="mr-1">
                        ★
                      </span>
                    ))}
                  </div>
                  <blockquote className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                    "{testimonial.content}"
                  </blockquote>
                  <div>
                    <cite className="not-italic font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </cite>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-white dark:bg-gray-800 rounded-full p-2 shadow hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          onClick={prevTestimonial}
          aria-label="Previous testimonial"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-white dark:bg-gray-800 rounded-full p-2 shadow hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          onClick={nextTestimonial}
          aria-label="Next testimonial"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === activeTestimonial
                  ? 'bg-blue-600'
                  : 'bg-gray-300 dark:bg-gray-600'
              }`}
              onClick={() => goToTestimonial(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default ClientsSection;
