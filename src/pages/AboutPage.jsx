import React, { useEffect } from 'react'; 
import { motion } from 'framer-motion';
import { Award, Clock, Users, BadgeCheck } from 'lucide-react';
import Section from '../components/UI/Section';
import SectionTitle from '../components/UI/SectionTitle';
import Button from '../components/UI/Button';

const teamMembers = [
  {
    name: 'John Smith',
    position: 'Founder & CEO',
    photo: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600',
    bio: 'With over 15 years of experience in web development, John founded Obsidium with a vision to create innovative digital solutions.',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#'
    }
  },
  {
    name: 'Emily Davis',
    position: 'Lead Designer',
    photo: 'https://images.pexels.com/photos/3747446/pexels-photo-3747446.jpeg?auto=compress&cs=tinysrgb&w=600',
    bio: 'Emily brings creativity and user-centered design principles to every project, ensuring beautiful and functional interfaces.',
    social: {
      linkedin: '#',
      twitter: '#',
      dribbble: '#'
    }
  },
  {
    name: 'Michael Chen',
    position: 'Senior Developer',
    photo: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600',
    bio: 'Michael specializes in front-end development and creating responsive, performant web applications.',
    social: {
      linkedin: '#',
      github: '#',
      twitter: '#'
    }
  },
  {
    name: 'Sarah Johnson',
    position: 'Back-end Developer',
    photo: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600',
    bio: 'Sarah excels at building robust server-side architecture and database management systems.',
    social: {
      linkedin: '#',
      github: '#',
      twitter: '#'
    }
  }
];

const AboutPage = () => {
  useEffect(() => {
    document.title = 'About Us | Obsidium';
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      <Section background="dark" spacing="xl">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={fadeIn}>
            <h5 className="text-obsidium-300 font-semibold mb-4 tracking-wide">ABOUT US</h5>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
              Crafting Digital Excellence Since 2015
            </h1>
            <p className="text-xl text-obsidium-100 mb-8 leading-relaxed">
              We're a team of passionate designers and developers dedicated to creating exceptional websites and web applications that drive results.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                to="/contact" 
                variant="primary"
                size="lg"
                className="bg-obsidium-500 hover:bg-obsidium-600"
              >
                Get in Touch
              </Button>
              <Button 
                to="/portfolio" 
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10"
              >
                View Our Work
              </Button>
            </div>
          </motion.div>
          <motion.div 
            variants={fadeIn}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-radial from-obsidium-500/30 to-transparent blur-3xl"></div>
            <img 
              src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Team collaboration"
              className="rounded-lg shadow-lg object-cover w-full relative z-10"
            />
            <motion.div 
              className="absolute -bottom-6 -left-6 bg-obsidium-500 p-6 rounded-lg text-white text-center shadow-lg hidden md:block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="text-4xl font-bold">100+</div>
              <div>Successful Projects</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </Section>

      <Section background="white">
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
            title="Our Story" 
            subtitle="How we became a leading web development company"
          />
          
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div variants={fadeIn}>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                Obsidium was founded in 2015 with a simple mission: to help businesses succeed in the digital world through exceptional web development. What started as a small team of passionate developers has grown into a full-service web development company serving clients across industries.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                Our journey has been defined by continuous learning, innovation, and a relentless focus on delivering value to our clients. We believe that a great website is more than just beautiful design – it's a powerful tool that drives business growth.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Today, we continue to push the boundaries of what's possible in web development, embracing new technologies and methodologies to deliver cutting-edge solutions for our clients.
              </p>
            </motion.div>
            <motion.div variants={fadeIn} className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-obsidium-50 to-white dark:from-gray-800 dark:to-gray-900 p-6 rounded-lg text-center transform hover:scale-105 transition-transform duration-300">
                <div className="text-obsidium-500 mb-4 flex justify-center">
                  <Users size={40} />
                </div>
                <div className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">120+</div>
                <div className="text-gray-600 dark:text-gray-400">Happy Clients</div>
              </div>
              <div className="bg-gradient-to-br from-obsidium-50 to-white dark:from-gray-800 dark:to-gray-900 p-6 rounded-lg text-center transform hover:scale-105 transition-transform duration-300">
                <div className="text-obsidium-500 mb-4 flex justify-center">
                  <Award size={40} />
                </div>
                <div className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">15+</div>
                <div className="text-gray-600 dark:text-gray-400">Awards Won</div>
              </div>
              <div className="bg-gradient-to-br from-obsidium-50 to-white dark:from-gray-800 dark:to-gray-900 p-6 rounded-lg text-center transform hover:scale-105 transition-transform duration-300">
                <div className="text-obsidium-500 mb-4 flex justify-center">
                  <Clock size={40} />
                </div>
                <div className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">10</div>
                <div className="text-gray-600 dark:text-gray-400">Years Experience</div>
              </div>
              <div className="bg-gradient-to-br from-obsidium-50 to-white dark:from-gray-800 dark:to-gray-900 p-6 rounded-lg text-center transform hover:scale-105 transition-transform duration-300">
                <div className="text-obsidium-500 mb-4 flex justify-center">
                  <BadgeCheck size={40} />
                </div>
                <div className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">250+</div>
                <div className="text-gray-600 dark:text-gray-400">Projects Completed</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Section>

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
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={fadeIn}>
            <img 
              src="https://images.pexels.com/photos/3184419/pexels-photo-3184419.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Team meeting"
              className="rounded-lg shadow-md transform hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
          <motion.div variants={fadeIn}>
            <h5 className="text-obsidium-500 font-semibold mb-2 tracking-wide">OUR MISSION</h5>
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
              We're on a Mission to Transform Digital Experiences
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              At Obsidium, our mission is to empower businesses with innovative web solutions that drive growth and create meaningful connections with their audiences.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              We believe that technology should work for people, not the other way around. That's why we focus on creating intuitive, user-friendly websites that solve real problems and deliver measurable results.
            </p>
            <h5 className="text-obsidium-500 font-semibold mt-8 mb-2">OUR VALUES</h5>
            <ul className="space-y-4">
              <li className="flex items-start p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <span className="text-obsidium-500 mr-3 flex-shrink-0">✓</span>
                <span className="text-gray-700 dark:text-gray-300">
                  <strong>Excellence:</strong> We strive for excellence in everything we do, from code quality to client communication.
                </span>
              </li>
              <li className="flex items-start p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <span className="text-obsidium-500 mr-3 flex-shrink-0">✓</span>
                <span className="text-gray-700 dark:text-gray-300">
                  <strong>Innovation:</strong> We embrace new technologies and approaches to deliver cutting-edge solutions.
                </span>
              </li>
              <li className="flex items-start p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <span className="text-obsidium-500 mr-3 flex-shrink-0">✓</span>
                <span className="text-gray-700 dark:text-gray-300">
                  <strong>Integrity:</strong> We operate with honesty, transparency, and a commitment to doing what's right.
                </span>
              </li>
              <li className="flex items-start p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <span className="text-obsidium-500 mr-3 flex-shrink-0">✓</span>
                <span className="text-gray-700 dark:text-gray-300">
                  <strong>Collaboration:</strong> We believe in the power of teamwork, both within our company and with our clients.
                </span>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </Section>

      <Section background="white">
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
          <SectionTitle title="Meet Our Team" subtitle="The Talented Individuals Behind Obsidium" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-radial from-obsidium-500/20 to-transparent blur-xl"></div>
                  <img 
                    src={member.photo}
                    alt={member.name}
                    className="rounded-full w-32 h-32 object-cover mx-auto relative z-10"
                  />
                </div>
                <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{member.name}</h4>
                <p className="text-obsidium-500 font-medium mb-4">{member.position}</p>
                <p className="text-gray-700 dark:text-gray-300 mb-6">{member.bio}</p>
                <div className="flex justify-center gap-4">
                  {Object.entries(member.social).map(([platform, link]) => (
                    <a
                      key={platform}
                      href={link}
                      className="text-obsidium-500 hover:text-obsidium-600 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {platform.charAt(0).toUpperCase() + platform.slice(1)}
                    </a>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>

      <Section background="gradient" spacing="xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-obsidium-100 mb-8">
            Let's create something amazing together! Get in touch with us today to discuss your project and how we can help you achieve your goals.
          </p>
          <Button 
            to="/contact" 
            variant="outline" 
            size="lg"
            className="border-white text-white hover:bg-white/10"
          >
            Let's Work Together
          </Button>
        </motion.div>
      </Section>
    </>
  );
};

export default AboutPage;