import React, { useEffect } from 'react'; 
import { motion } from 'framer-motion';
import { Award, Clock, Users, BadgeCheck } from 'lucide-react';
import Section from '../components/UI/Section';
import SectionTitle from '../components/UI/SectionTitle';
import Button from '../components/UI/Button';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Image from '../assets/MVV.png'
const teamMembers = [
  {
    name: 'Andi Zogaj',
    position: 'Founder & Full Stack Developer',
    photo: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600',
    bio: 'With over 15 years of experience in web development, John founded Obsidium with a vision to create innovative digital solutions.',
    social: {
      linkedin: '#',
      github: '#'
    }
  },
  {
    name: 'Dimal Maloku',
    position: 'Founder & Full Stack Developer',
    photo: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600',
    bio: 'Emily brings creativity and user-centered design principles to every project, ensuring beautiful and functional interfaces.',
    social: {
      linkedin: '#',
      github: '#'
    }
  },
  
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
              Crafting Digital Excellence Since 2020
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

          <div className="grid  gap-12">
            <motion.div variants={fadeIn} className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-obsidium-50 to-white dark:from-gray-800 dark:to-gray-900 p-6 rounded-lg text-center transform hover:scale-105 transition-transform duration-300">
                <div className="text-obsidium-500 mb-4 flex justify-center">
                  <Users size={40} />
                </div>
                <div className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">40+</div>
                <div className="text-gray-600 dark:text-gray-400">Happy Clients</div>
              </div>
              <div className="bg-gradient-to-br from-obsidium-50 to-white dark:from-gray-800 dark:to-gray-900 p-6 rounded-lg text-center transform hover:scale-105 transition-transform duration-300">
                <div className="text-obsidium-500 mb-4 flex justify-center">
                  <Award size={40} />
                </div>
                <div className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">24/7</div>
                <div className="text-gray-600 dark:text-gray-400">Client Support</div>
              </div>
              <div className="bg-gradient-to-br from-obsidium-50 to-white dark:from-gray-800 dark:to-gray-900 p-6 rounded-lg text-center transform hover:scale-105 transition-transform duration-300">
                <div className="text-obsidium-500 mb-4 flex justify-center">
                  <Clock size={40} />
                </div>
                <div className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">5</div>
                <div className="text-gray-600 dark:text-gray-400">Years Experience</div>
              </div>
              <div className="bg-gradient-to-br from-obsidium-50 to-white dark:from-gray-800 dark:to-gray-900 p-6 rounded-lg text-center transform hover:scale-105 transition-transform duration-300">
                <div className="text-obsidium-500 mb-4 flex justify-center">
                  <BadgeCheck size={40} />
                </div>
                <div className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">40+</div>
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
    className="flex flex-col gap-12 items-center"
  >
    {/* Image on top, centered */}
    <div className="flex justify-center items-start pt-0 w-full max-w-md">
      <motion.div variants={fadeIn} className="flex flex-col items-center text-center w-full">
        <img
          src={Image}
          alt="Mission"
          className="bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-500 w-full"
          style={{ marginTop: 0 }}
        
        />
      </motion.div>
    </div>

    {/* Text content below image */}
    <motion.div variants={fadeIn} className="space-y-8 max-w-4xl px-4">
      {/* Mission */}
      <section>
        <h5 className="text-obsidium-500 font-semibold mb-2 tracking-wide text-sm">OUR MISSION</h5>
        <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white leading-tight">
          We're on a Mission to Transform Digital Experiences
        </h2>
        <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
          At Obsidium, our mission is to empower businesses with innovative web solutions that drive growth and create meaningful connections with their audiences.
        </p>
        <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mt-2">
          We believe that technology should work for people, not the other way around. That's why we focus on creating intuitive, user-friendly websites that solve real problems and deliver measurable results.
        </p>
      </section>

      {/* Vision */}
      <section>
        <h5 className="text-obsidium-500 font-semibold mb-2 tracking-wide text-sm">OUR VISION</h5>
        <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white leading-tight">
          Leading the Future of Digital Innovation
        </h2>
        <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
          We envision a world where every business can harness the power of technology effortlessly to connect with their customers and inspire growth.
        </p>
        <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mt-2">
          Our goal is to be the trusted partner for companies seeking to evolve and thrive in an ever-changing digital landscape.
        </p>
      </section>

      {/* Values */}
      <section>
        <h5 className="text-obsidium-500 font-semibold mb-2 tracking-wide text-sm">OUR VALUES</h5>
        <ul className="space-y-4">
          <li className="flex items-start p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <span className="text-obsidium-500 mr-3 flex-shrink-0">✓</span>
            <span className="text-gray-700 dark:text-gray-300 text-base">
              <strong>Excellence:</strong> We strive for excellence in everything we do, from code quality to client communication.
            </span>
          </li>
          <li className="flex items-start p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <span className="text-obsidium-500 mr-3 flex-shrink-0">✓</span>
            <span className="text-gray-700 dark:text-gray-300 text-base">
              <strong>Innovation:</strong> We embrace new technologies and approaches to deliver cutting-edge solutions.
            </span>
          </li>
          <li className="flex items-start p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <span className="text-obsidium-500 mr-3 flex-shrink-0">✓</span>
            <span className="text-gray-700 dark:text-gray-300 text-base">
              <strong>Integrity:</strong> We operate with honesty, transparency, and a commitment to doing what's right.
            </span>
          </li>
          <li className="flex items-start p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <span className="text-obsidium-500 mr-3 flex-shrink-0">✓</span>
            <span className="text-gray-700 dark:text-gray-300 text-base">
              <strong>Collaboration:</strong> We believe in the power of teamwork, both within our company and with our clients.
            </span>
          </li>
        </ul>
      </section>
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

<div className="flex justify-between gap-8">
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
            {platform === "linkedin" && <FaLinkedin  size={30}/>}
            {platform === "github" && <FaGithub size={30}/>}
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