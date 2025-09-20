import React from 'react';
import { cn } from "../lib/utils";
import BlurImage from './utils/BlurImage';
import { Helmet } from 'react-helmet-async';

const About = () => {
  return (
    <section className="about-container relative flex min-h-[50rem] md:min-h-screen w-full items-center justify-center bg-black text-center py-20 px-4">
      <Helmet>
        <title>About Dhiraj Mistry | Full Stack Developer & Software Engineer</title>
        <meta name="description" content="Meet Dhiraj Mistry, a dedicated Full Stack Developer with 6 months of professional experience. Specializing in React, Next.js, Node.js, and modern web technologies. Currently exploring entrepreneurial ventures while seeking challenging opportunities in software development." />
        <meta name="keywords" content="Dhiraj Mistry, Full Stack Developer, React Developer, Next.js, Node.js, MongoDB, Frontend Developer, Backend Developer, Software Engineer, Web Developer, Mumbai Developer" />
        <meta property="og:title" content="About Dhiraj Mistry | Full Stack Developer & Software Engineer" />
        <meta property="og:description" content="Discover Dhiraj Mistry's journey as a Full Stack Developer with hands-on experience in modern web technologies and a passion for innovative solutions." />
        <meta property="og:type" content="profile" />
        <meta property="og:image" content="/profile_pic.png" />
        <meta property="og:site_name" content="Dhiraj Mistry - Portfolio" />
        <meta property="og:url" content="https://dhirajmistry.dev/about" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Dhiraj Mistry | Full Stack Developer" />
        <meta name="twitter:description" content="Full Stack Developer specializing in React, Next.js, and Node.js. 6 months of professional experience building scalable web applications." />
        <meta name="twitter:image" content="/profile_pic.png" />
        <meta name="author" content="Dhiraj Mistry" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://dhirajmistry.dev/about" />
      </Helmet>
      
      {/* Background pattern */}
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#404040_1px,transparent_1px)]"
        )}
      />
      {/* Faded radial gradient overlay */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      
      {/* Content */}
      <div className="relative z-20 max-w-6xl w-full flex flex-col md:flex-row items-center md:items-start gap-12">
        {/* Profile Image */}
        <div className="w-64 h-64 rounded-full overflow-hidden flex-shrink-0 border-4 border-neutral-800 shadow-2xl">
          <BlurImage
            src="/profile_pic.png"
            blurhash="LAB._mEN5SkC-TNdofWX0hay}=WC"
            alt="Dhiraj Mistry - Full Stack Developer"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Text Content */}
        <div className="text-left text-neutral-300 max-w-2xl ml-0 md:ml-16">
          <h1 className="text-4xl sm:text-7xl font-bold bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent py-8">
            About Me
          </h1>
          
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              Hello! I'm <strong className="text-neutral-200">Dhiraj Mistry</strong>, a passionate Full Stack Developer based in Mumbai, India. I specialize in building modern, scalable web applications using cutting-edge technologies and have a strong foundation in software engineering principles.
            </p>
            
            <p className="text-lg leading-relaxed">
              My technical expertise spans across <strong className="text-neutral-200">React.js, Next.js, Node.js, and MongoDB</strong>, allowing me to deliver comprehensive solutions from frontend user interfaces to robust backend systems. I have a strong foundation in modern JavaScript, TypeScript, and contemporary development practices.
            </p>
            
            <p className="text-lg leading-relaxed">
              During my professional experience at <strong className="text-neutral-200">Saral Commerce</strong>, I gained valuable hands-on experience developing responsive Next.js components, integrating RESTful APIs, and implementing performance optimizations using Cloudflare CDN. This role enhanced my understanding of production-level code quality and collaborative development workflows.
            </p>
            
            <p className="text-lg leading-relaxed">
              I'm actively seeking challenging opportunities where I can contribute to innovative projects, collaborate with experienced teams, and continue growing as a software engineer. My goal is to build solutions that make a meaningful impact while continuously expanding my technical expertise and learning from industry professionals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;