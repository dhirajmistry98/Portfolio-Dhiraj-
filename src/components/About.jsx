import React from 'react';
import { cn } from "../lib/utils";
import BlurImage from './utils/BlurImage';
import { Helmet } from 'react-helmet-async';

const About = () => {
  return (
    <section className="about-container relative flex min-h-[50rem] md:min-h-screen w-full items-center justify-center bg-black text-center py-20 px-4">
      <Helmet>
        <title>About Dhiraj Mistry | Full Stack Developer & Software Engineer</title>
        <meta
          name="description"
          content="Meet Dhiraj Mistry, a Full Stack Developer specializing in React, Next.js, TypeScript, and Web3 technologies. Currently working as a Full Stack Developer Intern at Trivolve Tech."
        />
        <meta name="author" content="Dhiraj Mistry" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://dhirajmistry.dev/about" />
      </Helmet>

      {/* Background */}
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#404040_1px,transparent_1px)]"
        )}
      />
      <div className="pointer-events-none absolute inset-0 bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      {/* Content */}
      <div className="relative z-20 max-w-6xl w-full flex flex-col md:flex-row items-center md:items-start gap-12">
        {/* Profile Image */}
        <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-neutral-800 shadow-2xl">
          <BlurImage
            src="/profile_pic.png"
            blurhash="LAB._mEN5SkC-TNdofWX0hay}=WC"
            alt="Dhiraj Mistry - Full Stack Developer"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="text-left text-neutral-300 max-w-2xl md:ml-16">
          <h1 className="text-4xl sm:text-7xl font-bold bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent py-8">
            About Me
          </h1>

          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              Hello! I'm <strong className="text-neutral-200">Dhiraj Mistry</strong>, a passionate Full Stack Developer based in India. I focus on building scalable, production-ready web applications using modern technologies and clean architectural practices.
            </p>

            <p>
              My expertise includes <strong className="text-neutral-200">React.js, Next.js, TypeScript, Node.js</strong>, and modern frontend tooling. I enjoy working across the stack—from designing intuitive user interfaces to building reliable backend APIs.
            </p>

            <p>
              Currently, I’m working at <strong className="text-neutral-200">Trivolve Tech</strong> as a
              <strong className="text-neutral-200"> Full Stack Developer Intern</strong>
              <span className="block text-sm text-neutral-400 mt-1">
                Nov 2025 – Present · Hyderabad, IN (Remote)
              </span>
            </p>

            <ul className="list-disc list-inside space-y-2 text-neutral-300">
              <li>
                Contributed to collaborative projects by updating, debugging, and enhancing production codebases.
              </li>
              <li>
                Built and integrated APIs using Next.js and TypeScript with clean, scalable architecture.
              </li>
              <li>
                Developed responsive user interfaces using React.js and Tailwind CSS.
              </li>
              <li>
                Worked on Web3 and blockchain integrations using web3.js for decentralized application features.
              </li>
            </ul>

            <p>
              I’m always eager to take on challenging problems, collaborate with strong engineering teams,
              and continue growing as a software engineer while building impactful products.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
