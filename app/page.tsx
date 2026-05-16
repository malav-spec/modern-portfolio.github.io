"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ExternalLink, FileText, Server, Cpu, Layers, Terminal, ArrowUpRight, GraduationCap, Calendar, Briefcase, Sun, Moon } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Home() {
  const [isDark, setIsDark] = useState(false);

  // Ultra-smooth spring physics for premium micro-interactions
  const springTransition = { type: "spring", stiffness: 100, damping: 15 };

  // Explicitly defined animation variants to prevent TypeScript/runtime spreading errors
  const sectionVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const cardVariants = {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0, transition: { ...springTransition, duration: 0.6 } },
    hover: { y: -6, scale: 1.01, transition: { duration: 0.2, ease: "easeInOut" } }
  };

  const skillCategories = [
    {
      title: "Technical Skills",
      icon: <Terminal className={isDark ? "text-blue-400" : "text-blue-600"} size={20} />,
      items: ["Java", "Python", "C", "JavaScript", "TypeScript", "Angular", "MySQL", "PostgreSQL", "PL/SQL"]
    },
    {
      title: "Frameworks & Libraries",
      icon: <Layers className={isDark ? "text-purple-400" : "text-purple-600"} size={20} />,
      items: ["Spring Boot", "Spring Batch", "Spring Data Redis", "Jedis", "Hibernate", "React", "NumPy", "PyTorch", "Maven", "NLTK"]
    },
    {
      title: "Tools & Cloud",
      icon: <Server className={isDark ? "text-emerald-400" : "text-emerald-600"} size={20} />,
      items: ["AWS", "Redis", "RESTful APIs", "RabbitMQ", "Docker", "CI/CD", "Git", "Linux"]
    }
  ];

  const experiences = [
    {
      role: "Software Developer",
      company: "Amazon Web Services (via Virtusa)",
      timeline: "January 2023 — Present",
      bullets: [
        "Designed and built scalable distributed backend services by transitioning legacy Cobol and RPG applications into J2EE architectures utilizing the Spring Batch framework.",
        "Spearheaded technical initiatives to evolve architecture decisions, driving cross-functional collaboration to deliver high-impact backend features and foster operational excellence.",
        "Architected a distributed caching solution for multi-node deployments using Spring Data Redis and Jedis, optimizing performance with a first-level local memory cache to significantly reduce network latency for frequent data access.",
        "Collaborated with cross-functional teams to implement new front-end features using Angular and TypeScript, creating comprehensive technical documentation.",
        "Conducted rigorous code reviews and contributed to technical design discussions before merging changes to production deployment workflows.",
        "Supported observability, operational excellence, and incident response by implementing robust runtime logging mechanisms using Log4j for custom log segmentation and traceability.",
        "Built and managed automated data pipelines using Python to organize, process, and migrate customer data into relational databases (PostgreSQL).",
        "Enhanced deployment workflows by seamlessly integrating automated Python utility scripts into CI/CD pipelines, promoting reliability and efficiency across team projects.",
        "Optimized backend performance and reliability through multi-threading techniques and efficient job scheduling mechanisms, aligning with high-availability distributed systems concepts."
      ]
    },
    {
      role: "Undergraduate Research Assistant",
      company: "Rutgers University",
      timeline: "May 2021 — October 2021",
      bullets: [
        "Assisted in conducting experiments to test the effect of tail latency and system availability on a distributed cluster.",
        "Engineered containerized testing environments using Docker to simulate various system workloads.",
        "Deployed workloads on key-value store caching solutions (Memcached) to analyze performance impacts and avoid latency bottlenecks."
      ]
    }
  ];

  const projects = [
    {
      title: "RabbitMQ Messaging System",
      description: "Built a robust Maven application leveraging messaging system concepts to publish and consume highly scalable messaging models using the RabbitMQ API. Engineered advanced asynchronous capabilities to process and cleanly decode data payloads.",
      tags: ["Java", "RabbitMQ", "Maven", "Asynchronous Systems"],
      link: "https://github.com/malav-spec/RabbitMq-Template/tree/main"
    },
    {
      title: "Cache Simulator",
      description: "Shows how cache memory works in software. Implements structural FIFO and complex prefetching constraints to dramatically increase the operational throughput and efficiency of simulated cache memory units.",
      tags: ["C", "Computer Architecture", "Systems Programming"],
      link: "https://github.com/malav-spec/Rutgers-CS211-Computer-Architecture/tree/master/pa4/first"
    },
    {
      title: "Wumpus World AI Game",
      description: "A comprehensive 2-player strategic board game simulation matching human interaction against an autonomous AI agent. Programmed predictive Markov Decision Process (MDP) loops to calculate mathematically optimal step configurations under real-time uncertainty.",
      tags: ["Java", "Artificial Intelligence", "Stochastic Modeling"],
      link: "https://github.com/malav-spec/Wumpus_World_AI_Game"
    },
    {
      title: "DNS Lookup & Load Balancer",
      description: "Designed an enterprise high-availability load balancing infrastructure utilizing clean Python networking paradigms. Implemented fluid DNS replica lookup routing to balance system request footprints gracefully.",
      tags: ["Python", "Networking", "Distributed Systems"],
      link: "https://github.com/malav-spec/Load-Balancing-Server"
    },
    {
      title: "Twitter Sentiment Analysis",
      description: "Trained, structured, and cross-evaluated support vector machine models to parse sentiment layers from massive social streaming corpuses. Evaluated Linear and Kernel SVM frameworks to ensure performance scalability.",
      tags: ["Python", "Machine Learning", "SVM", "Data Science"],
      link: "https://github.com/malav-spec/Machine-Learning/tree/main/Twitter_Sentiment_Analysis"
    },
    {
      title: "Payroll Processing System",
      description: "An administrative relational database management dashboard focused on employee records tracking. Automated variable multi-tier compensation rules through an interactive graphical layout.",
      tags: ["JavaFX", "GUI Architecture", "Database Systems"],
      link: "https://github.com/malav-spec/Payroll-Processing-System-GUI"
    },
    {
      title: "PThread Library & Scheduler",
      description: "Replicated low-level POSIX execution loops completely from scratch. Formulated a thread scheduler running on a Preempting Shortest Job First (PSJF) model to guarantee optimal algorithmic ordering and context switching safety.",
      tags: ["C", "Operating Systems", "Multithreading"],
      link: "https://github.com/malav-spec/User-Pthread-Lib"
    }
  ];

  const educationHistory = [
    {
      university: "Trine University",
      degree: "Master of Science in Information Studies",
      timeline: "May 2026",
      highlights: ["GPA: 3.90"]
    },
    {
      university: "Rutgers University — New Brunswick",
      degree: "B.S. in Computer Science & Minor in Mathematics",
      timeline: "May 2022",
      highlights: ["GPA: 3.50", "Dean's List Spring 2020", "Dean's List Fall 2020"],
    }
  ];

  return (
    <div className={isDark ? "dark" : ""}>
      <div className={`min-h-screen transition-colors duration-300 font-sans antialiased overflow-x-hidden relative ${isDark ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-800"}`}>
        
        {/* Structural Ambient Backdrops */}
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] pointer-events-none z-0 ${isDark ? "from-blue-900/15 via-transparent to-transparent" : "from-blue-500/5 via-transparent to-transparent"}`} />
        <div className={`absolute top-[800px] -left-40 w-[400px] h-[400px] blur-[120px] rounded-full pointer-events-none ${isDark ? "bg-purple-900/10" : "bg-purple-500/5"}`} />
        <div className={`absolute bottom-[400px] -right-40 w-[400px] h-[400px] blur-[120px] rounded-full pointer-events-none ${isDark ? "bg-blue-900/10" : "bg-blue-500/5"}`} />

        {/* Navigation */}
        <nav className={`sticky top-0 z-50 backdrop-blur-md border-b transition-colors duration-300 ${isDark ? "bg-slate-950/70 border-slate-900 text-slate-400" : "bg-white/80 border-slate-200 text-slate-600"}`}>
          <div className="max-w-[1000px] mx-auto px-6 py-4 flex justify-between items-center">
            <motion.div className={`font-bold text-xl tracking-tight ${isDark ? "text-white" : "text-slate-900"}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              MD<span className={isDark ? "text-blue-500" : "text-blue-600"}>.</span>
            </motion.div>
            <div className="flex gap-5 items-center">
              <div className={`flex gap-4 items-center border-r pr-4 ${isDark ? "border-slate-800" : "border-slate-200"}`}>
                <a href="https://github.com/malav-spec" target="_blank" rel="noreferrer" className={`transition-colors ${isDark ? "hover:text-white" : "hover:text-slate-900"}`}><FaGithub size={19} /></a>
                <a href="https://www.linkedin.com/in/malav-doshi-76035a185/" target="_blank" rel="noreferrer" className={`transition-colors ${isDark ? "hover:text-white" : "hover:text-slate-900"}`}><FaLinkedin size={19} /></a>
                <a href="https://twitter.com/malav_doshi?s=08" target="_blank" rel="noreferrer" className={`transition-colors ${isDark ? "hover:text-white" : "hover:text-slate-900"}`}><FaTwitter size={19} /></a>
                <a href="https://www.youtube.com/channel/UCoA7gOQDb6LaUWPfyjcQsuw" target="_blank" rel="noreferrer" className={`transition-colors ${isDark ? "hover:text-white" : "hover:text-slate-900"}`}><FaYoutube size={19} /></a>
                <a href="mailto:doshimalav18@gmail.com" className={`transition-colors ${isDark ? "hover:text-white" : "hover:text-slate-900"}`}><Mail size={19} /></a>
              </div>
              <button 
                onClick={() => setIsDark(!isDark)} 
                className={`p-2 rounded-lg border transition-all ${isDark ? "bg-slate-900 border-slate-800 hover:bg-slate-800 text-slate-300" : "bg-slate-100 border-slate-200 hover:bg-slate-200 text-slate-700"}`}
                aria-label="Toggle layout color environment"
              >
                {isDark ? <Sun size={17} className="text-amber-400" /> : <Moon size={17} className="text-indigo-600" />}
              </button>
            </div>
          </div>
        </nav>

        {/* Main Content Wrapper */}
        <div className="max-w-[1000px] mx-auto px-6 relative z-10">
          
          {/* Hero Section */}
          <header className="py-24 md:py-32 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className={`inline-flex items-center gap-2 border px-3 py-1 rounded-full text-xs font-semibold shadow-sm mb-6 ${isDark ? "bg-blue-500/10 border-blue-500/20 text-blue-400" : "bg-blue-500/10 border-blue-500/20 text-blue-600"}`}>
                <Cpu size={12} /> Available for fullstack & backend roles
              </div>
              <h1 className={`text-5xl md:text-7xl font-extrabold tracking-tight mb-4 ${isDark ? "text-white" : "text-slate-900"}`}>
                Malav Doshi
              </h1>
              <h2 className={`text-2xl md:text-3xl font-bold bg-gradient-to-r bg-clip-text text-transparent mb-6 ${isDark ? "from-blue-400 via-indigo-400 to-purple-400" : "from-blue-600 via-indigo-600 to-purple-600"}`}>
                Rutgers University Alum | SDE @ AWS
              </h2>
              <div className={`text-lg leading-relaxed max-w-3xl mb-10 space-y-4 font-normal ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                <p>
                  Welcome to my portfolio! I am a backend systems and software engineer passionate about building high-performance architectures, optimizing heavy data processing streams, and migrating legacy infrastructure into scalable distributed systems.
                </p>
                <p>
                  Currently at Amazon Web Services, I specialize in mainframe modernization workflows, designing reliable J2EE target states using the Spring infrastructure, and refining front-end system interfaces.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a href="mailto:doshimalav18@gmail.com" className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-medium transition-all transform hover:-translate-y-0.5 shadow-md shadow-blue-500/10">
                  Get In Touch
                </a>
                <a href="https://docs.google.com/document/d/1mAxlUZXXrDtuHklQcks3TMJAlqIw_NDQ/" target="_blank" rel="noreferrer" className={`flex items-center gap-2 border px-6 py-3 rounded-lg font-medium transition-all transform hover:-translate-y-0.5 shadow-sm ${isDark ? "bg-slate-900 border-slate-800 text-slate-200 hover:border-slate-700" : "bg-white border-slate-200 text-slate-800 hover:bg-slate-50"}`}>
                  <FileText size={18} className="text-slate-400" /> View Resume
                </a>
              </div>
            </motion.div>
          </header>

          {/* Technical Expertise Section */}
          <motion.section 
            className={`py-16 border-t ${isDark ? "border-slate-900" : "border-slate-200"}`}
            variants={sectionVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.1 }}
          >
            <h2 className={`text-2xl font-bold mb-10 flex items-center gap-2 ${isDark ? "text-white" : "text-slate-900"}`}>
              <Terminal size={22} className={isDark ? "text-blue-500" : "text-blue-600"} /> Technical Expertise
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {skillCategories.map((category, idx) => (
                <div key={idx} className={`border p-6 rounded-xl transition-colors shadow-sm ${isDark ? "bg-slate-900/40 border-slate-900 hover:border-slate-800" : "bg-white border-slate-200 hover:border-slate-300"}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 rounded-lg border shadow-inner ${isDark ? "bg-slate-950 border-slate-800" : "bg-slate-50 border-slate-200"}`}>
                      {category.icon}
                    </div>
                    <h3 className={`font-bold ${isDark ? "text-slate-200" : "text-slate-800"}`}>{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {category.items.map((skill, sIdx) => (
                      <span key={sIdx} className={`text-xs border px-2.5 py-1 rounded font-mono shadow-sm ${isDark ? "bg-slate-950 border-slate-800 text-slate-400" : "bg-slate-50 border-slate-200 text-slate-600"}`}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Experience Section */}
          <motion.section 
            className={`py-16 border-t ${isDark ? "border-slate-900" : "border-slate-200"}`}
            variants={sectionVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.1 }}
          >
            <h2 className={`text-2xl font-bold mb-12 flex items-center gap-2 ${isDark ? "text-white" : "text-slate-900"}`}>
              <Briefcase size={22} className={isDark ? "text-blue-500" : "text-blue-600"} /> Engineering Experience
            </h2>
            <div className={`relative border-l ml-4 space-y-16 ${isDark ? "border-slate-900" : "border-slate-200"}`}>
              {experiences.map((exp, idx) => (
                <div key={idx} className="relative pl-8 group">
                  <div className={`absolute -left-[13px] top-1.5 border-2 transition-colors p-1.5 rounded-full z-10 shadow-sm ${isDark ? "bg-slate-950 border-slate-800 text-slate-500 group-hover:border-blue-500" : "bg-white border-slate-200 text-slate-400 group-hover:border-blue-600"}`}>
                    <Briefcase size={12} className={`transition-colors ${isDark ? "group-hover:text-blue-400" : "group-hover:text-blue-600"}`} />
                  </div>
                  <div>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                      <div>
                        <h3 className={`text-xl font-bold transition-colors ${isDark ? "text-white group-hover:text-blue-400" : "text-slate-900 group-hover:text-blue-600"}`}>{exp.role}</h3>
                        <p className={`font-medium ${isDark ? "text-slate-300" : "text-slate-700"}`}>{exp.company}</p>
                      </div>
                      <div className={`inline-flex items-center gap-1.5 text-xs font-semibold border px-3 py-1 rounded-full whitespace-nowrap shadow-inner md:mt-1 ${isDark ? "text-slate-500 bg-slate-900/60 border-slate-900" : "text-slate-500 bg-slate-100 border-slate-200"}`}>
                        <Calendar size={12} /> {exp.timeline}
                      </div>
                    </div>
                    <ul className={`list-disc list-outside ml-4 space-y-2 text-sm leading-relaxed ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                      {exp.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className={`transition-colors ${isDark ? "hover:text-slate-300" : "hover:text-slate-800"}`}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Projects Layout Grid Section */}
          <motion.section 
            className={`py-16 border-t ${isDark ? "border-slate-900" : "border-slate-200"}`}
            variants={sectionVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.1 }}
          >
            <div className="mb-12">
              <h2 className={`text-2xl font-bold flex items-center gap-2 ${isDark ? "text-white" : "text-slate-900"}`}>
                <Cpu size={22} className={isDark ? "text-blue-500" : "text-blue-600"} /> Selected Architectures
              </h2>
              <p className="text-slate-500 text-sm mt-1">Academic research and operational software engines.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project, idx) => (
                <motion.div 
                  key={idx}
                  variants={cardVariants}
                  initial="initial"
                  whileInView="animate"
                  whileHover="hover"
                  viewport={{ once: true }}
                  className={`border rounded-xl p-6 transition-colors flex flex-col justify-between group shadow-sm ${isDark ? "bg-slate-900/20 border-slate-900 hover:border-slate-800/80" : "bg-white border-slate-200 hover:border-slate-300"}`}
                >
                  <div>
                    <div className="flex justify-between items-start mb-3">
                      <h3 className={`text-lg font-bold tracking-tight transition-colors ${isDark ? "text-white group-hover:text-blue-400" : "text-slate-900 group-hover:text-blue-600"}`}>
                        {project.title}
                      </h3>
                      <a href={project.link} target="_blank" rel="noreferrer" className={`p-1 rounded transition-colors ${isDark ? "text-slate-500 hover:text-white" : "text-slate-400 hover:text-slate-900"}`}>
                        <ArrowUpRight size={18} />
                      </a>
                    </div>
                    <p className={`text-sm leading-relaxed mb-6 font-normal ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                      {project.description}
                    </p>
                  </div>
                  <div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag, tIdx) => (
                        <span key={tIdx} className={`text-[10px] border font-mono px-2 py-0.5 rounded ${isDark ? "bg-slate-950 border-slate-900 text-slate-500" : "bg-slate-50 border-slate-200 text-slate-500"}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Academic History Section */}
          <motion.section 
            className={`py-16 border-t ${isDark ? "border-slate-900" : "border-slate-200"}`}
            variants={sectionVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.1 }}
          >
            <h2 className={`text-2xl font-bold mb-10 flex items-center gap-2 ${isDark ? "text-white" : "text-slate-900"}`}>
              <GraduationCap size={22} className={isDark ? "text-blue-500" : "text-blue-600"} /> Academic Foundation
            </h2>
            <div className="space-y-6">
              {educationHistory.map((edu, idx) => (
                <div key={idx} className={`border p-6 rounded-xl relative overflow-hidden group transition-colors shadow-sm ${isDark ? "bg-slate-900/20 border-slate-900 hover:border-slate-800" : "bg-white border-slate-200 hover:border-slate-300"}`}>
                  <div className={`absolute top-0 right-0 w-[300px] h-[300px] blur-[80px] rounded-full pointer-events-none -mr-20 -mt-20 transition-colors ${isDark ? "bg-blue-500/5 group-hover:bg-blue-500/10" : "bg-blue-500/[0.02] group-hover:bg-blue-500/[0.04]"}`} />
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4 relative z-10">
                    <div>
                      <h3 className={`text-xl font-bold transition-colors ${isDark ? "text-white group-hover:text-blue-400" : "text-slate-900 group-hover:text-blue-600"}`}>{edu.university}</h3>
                      <p className={`font-medium text-sm ${isDark ? "text-slate-300" : "text-slate-700"}`}>{edu.degree}</p>
                    </div>
                    <div className={`inline-flex items-center gap-1.5 text-xs font-semibold border px-3 py-1 rounded-full shadow-inner ${isDark ? "text-slate-500 bg-slate-900/60 border-slate-900" : "text-slate-500 bg-slate-100 border-slate-200"}`}>
                      <Calendar size={12} /> {edu.timeline}
                    </div>
                  </div>
                  {edu.highlights.length > 0 && (
                    <div className={`flex flex-wrap gap-3 mb-4 relative z-10 text-xs font-mono ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                      {edu.highlights.map((highlight, hIdx) => (
                        <span key={hIdx} className={`border px-2.5 py-1 rounded shadow-sm ${isDark ? "bg-slate-950 border-slate-900" : "bg-slate-50 border-slate-200"}`}>
                          {highlight}
                        </span>
                      ))}
                    </div>
                  )}
                  {edu.link && (
                    <a href={edu.link} target="_blank" rel="noreferrer" className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-colors relative z-10 ${isDark ? "text-blue-400 hover:text-blue-300" : "text-blue-600 hover:text-blue-500"}`}>
                      {edu.linkLabel} <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </motion.section>

        </div>

        {/* Footer Area */}
        <footer className={`border-t py-12 text-center mt-12 transition-colors duration-300 ${isDark ? "border-slate-900 bg-slate-950/40" : "border-slate-200 bg-slate-100/50"}`}>
          <div className="max-w-[1000px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
            <p>© {new Date().getFullYear()} Malav Doshi. Engineered with Next.js & Tailwind CSS.</p>
            <div className="flex gap-4">
              <a href="https://github.com/malav-spec" target="_blank" rel="noreferrer" className={`transition-colors ${isDark ? "hover:text-slate-300" : "hover:text-slate-800"}`}>GitHub</a>
              <a href="https://www.linkedin.com/in/malav-doshi-76035a185/" target="_blank" rel="noreferrer" className={`transition-colors ${isDark ? "hover:text-slate-300" : "hover:text-slate-800"}`}>LinkedIn</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}