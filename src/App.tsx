import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Download, 
  ExternalLink, 
  Code2, 
  ChevronDown, 
  Send,
  MapPin,
  Phone,
  BookOpen,
  Layout,
  Terminal,
  Cpu,
  Facebook
} from 'lucide-react';
import React, { useState, useEffect, ReactNode } from 'react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Education', id: 'education' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-dark-bg/80 backdrop-blur-lg py-4 border-b border-white/5' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 rounded-xl bg-linear-to-br from-brand-primary to-brand-secondary flex items-center justify-center font-bold text-white shadow-lg shadow-brand-primary/20 transition-transform group-hover:rotate-12">O</div>
          <span className="font-heading font-bold text-xl tracking-tight hidden sm:block">Omar Farhatul</span>
        </div>
        <div className="hidden lg:flex items-center gap-1 p-1.5 bg-white/5 rounded-2xl border border-white/5 backdrop-blur-xl">
          {navItems.map((item) => (
            <motion.a 
              key={item.id} 
              href={`#${item.id}`} 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => setActiveSection(item.id)}
            >
              <span className="relative z-10">{item.name}</span>
              {activeSection === item.id && (
                <motion.div 
                  layoutId="activeNavTab"
                  className="absolute inset-0 bg-white/10 rounded-xl shadow-sm"
                  transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                />
              )}
            </motion.a>
          ))}
        </div>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden sm:flex gradient-bg text-white px-5 py-2.5 rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-brand-primary/20"
        >
          Hire Me
        </motion.button>
      </div>
    </nav>
  );
};

const SectionHeading = ({ children, subtitle }: { children: React.ReactNode, subtitle?: string }) => (
  <div className="text-center mb-16">
    <motion.h2 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-6xl font-heading font-extrabold mb-6 tracking-tighter"
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed font-medium"
      >
        {subtitle}
      </motion.p>
    )}
    <motion.div 
      initial={{ width: 0, opacity: 0 }}
      whileInView={{ width: "80px", opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4, duration: 0.8 }}
      className="h-1.5 gradient-bg mx-auto rounded-full mt-6 shadow-[0_4px_12px_rgba(99,102,241,0.3)]"
    />
  </div>
);

export default function App() {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    
    // In a real environment, you'd use a service like Formspree
    // await fetch("https://formspree.io/f/your_id", { method: 'POST', body: JSON.stringify(formData) });
    
    setTimeout(() => {
      setFormStatus('sent');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setFormStatus('idle'), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen selection:bg-brand-primary/30 selection:text-brand-primary">
      <Navbar />

      {/* Hero Section */}
      <section id="hero" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none -z-10 overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-primary/10 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-[10%] right-[-10%] w-[35%] h-[35%] bg-brand-secondary/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div 
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.2 }}
               className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-bold uppercase tracking-widest mb-6"
            >
              <div className="w-2 h-2 rounded-full bg-brand-primary animate-ping"></div>
              Available for new projects
            </motion.div>
            
            <h1 className="text-6xl md:text-8xl font-heading font-extrabold leading-[1.1] mb-6 tracking-tighter">
              Design. Code. <br />
              <span className="brand-gradient-text">Deliver.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 font-medium mb-8">
              Hi, I'm <span className="text-brand-primary font-bold">Omar Farhatul</span>. <br />
              <span className="text-white/60">A Full Stack Developer dedicated to building high-performance, scalable web applications.</span>
            </p>
            
            <div className="flex flex-wrap gap-5 mb-12">
              <motion.a 
                href="#projects" 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary"
              >
                Explore Projects <ExternalLink size={20} />
              </motion.a>
              <motion.a 
                href="/my_cv.pdf" 
                download="Omar_Farhatul_Resume.pdf"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="btn-secondary"
              >
                View Resume <Download size={20} />
              </motion.a>
            </div>
            
            <div className="flex items-center gap-6 border-t border-white/5 pt-10">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-dark-bg bg-dark-card flex items-center justify-center overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Client" />
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-400">
                <span className="text-white font-bold">50+ Satisfied Clients</span> <br />
                across global platforms
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative flex flex-col items-center lg:items-end gap-8"
          >
            <div className="relative">
              {/* Stat Cards - Floating on Desktop only (lg screens) */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.05, x: -10, y: -5 }}
                transition={{ delay: 1 }}
                className="hidden lg:flex absolute -left-18 top-1/4 glass-card py-3 px-5 items-center gap-3 z-30 shadow-2xl cursor-default"
              >
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                  <Code2 size={20} />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest leading-none mb-1">Experience</p>
                  <p className="text-sm font-bold text-white">1+ Year</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, x: 10, y: 5 }}
                transition={{ delay: 1.2 }}
                className="hidden lg:flex absolute -right-4 bottom-1/4 glass-card py-3 px-5 items-center gap-3 z-30 shadow-2xl cursor-default"
              >
                <div className="w-10 h-10 rounded-full bg-brand-primary/20 flex items-center justify-center text-brand-primary">
                  <Layout size={20} />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest leading-none mb-1">Completed</p>
                  <p className="text-sm font-bold text-white">10+ Projects</p>
                </div>
              </motion.div>

              <div className="relative w-full max-w-[400px] aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl group ring-1 ring-white/10 ring-offset-4 ring-offset-dark-bg">
                <img 
                  src="Hossain_img.png" 
                  alt="Profile" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-dark-bg via-transparent to-transparent opacity-60"></div>
              </div>
            </div>

            {/* Mobile Stats Row - visible below profile on screens smaller than lg */}
            <div className="lg:hidden grid grid-cols-2 gap-4 w-full max-w-[400px]">
               <div className="glass-card py-4 px-3 flex flex-col items-center text-center gap-2 border-white/10">
                 <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                   <Code2 size={20} />
                 </div>
                 <div>
                   <p className="text-[9px] text-gray-500 font-black uppercase tracking-widest leading-none mb-1">Experience</p>
                   <p className="text-base font-bold text-white">1+ Year</p>
                 </div>
               </div>
               <div className="glass-card py-4 px-3 flex flex-col items-center text-center gap-2 border-white/10">
                 <div className="w-10 h-10 rounded-full bg-brand-primary/20 flex items-center justify-center text-brand-primary">
                   <Layout size={20} />
                 </div>
                 <div>
                   <p className="text-[9px] text-gray-500 font-black uppercase tracking-widest leading-none mb-1">Completed</p>
                   <p className="text-base font-bold text-white">10+ Projects</p>
                 </div>
               </div>
            </div>
          </motion.div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-widest font-bold text-gray-600">Scroll</span>
          <ChevronDown size={20} className="text-gray-600" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-dark-bg/50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionHeading>About <span className="brand-gradient-text">Me</span></SectionHeading>
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-0 overflow-hidden group"
            >
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop" 
                alt="Workspace" 
                className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-primary/20 flex items-center justify-center text-brand-primary">
                    <Code2 size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Developer <span className="text-brand-primary">& Designer</span></h3>
                  </div>
                </div>
              </div>
            </motion.div>
            
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                  I am a dedicated Full Stack Developer with a strong focus on building efficient, user-centric web applications. My expertise lies in the MERN stack, where I combine technical precision with a clean coding philosophy to deliver high-quality digital solutions.
                </p>
                <p className="text-gray-400 leading-relaxed mb-10">
                  With a background deeply rooted in problem-solving and modern web architecture, I thrive on turning complex requirements into seamless user experiences. I am constantly exploring new technologies to stay at the forefront of the ever-evolving tech landscape.
                </p>
                
                <div className="mb-10">
                  <h4 className="flex items-center gap-2 font-bold mb-4 text-white">
                    <Terminal size={18} className="text-brand-primary" /> Core Competencies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {['Tailwind CSS', 'JavaScript', 'MongoDB', 'Express.js', 'React.js', 'Node.js'].map(skill => (
                      <motion.span 
                        key={skill} 
                        whileHover={{ y: -5, scale: 1.05, borderColor: 'var(--color-brand-primary)' }}
                        className="bg-white/5 border border-white/10 px-4 py-2 rounded-lg text-sm transition-colors cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
                
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="gradient-bg text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity"
                >
                  Let's Talk <Send size={18} />
                </motion.button>
              </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionHeading subtitle="A comprehensive overview of my technical abilities and professional toolkit.">
            Skills & <span className="brand-gradient-text">Expertise</span>
          </SectionHeading>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Technical Proficiency */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="md:col-span-2 glass-card h-full"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-lg bg-pink-500/20 flex items-center justify-center text-pink-500">
                  <Cpu size={20} />
                </div>
                <h3 className="text-2xl font-bold">Technical Proficiency</h3>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-x-12 gap-y-8">
                {[
                  { name: 'JavaScript', level: 80 },
                  { name: 'React.js', level: 75 },
                  { name: 'Node.js', level: 70 },
                  { name: 'Express.js', level: 75 },
                  { name: 'MongoDB', level: 65 },
                  { name: 'Next.js', level: 70 },
                  { name: 'TypeScript', level: 60 },
                  { name: 'RESTful APIs', level: 75 },
                ].map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm font-medium">
                      <span>{skill.name}</span>
                      <span className="text-brand-primary">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="h-full gradient-bg rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="space-y-8">
              {/* Soft Skills */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-500">
                    <Layout size={20} />
                  </div>
                  <h3 className="text-xl font-bold">Soft Skills</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Problem Solving', 'Communication', 'Team Collaboration', 'Time Management', 'Critical Thinking'].map(skill => (
                    <motion.span 
                      key={skill} 
                      whileHover={{ y: -3, backgroundColor: 'rgba(99, 102, 241, 0.1)', borderColor: 'rgba(99, 102, 241, 0.3)' }}
                      className="bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg text-xs transition-colors cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Tools */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center text-orange-500">
                    <Terminal size={20} />
                  </div>
                  <h3 className="text-xl font-bold">Tools & Tech</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['VS Code', 'Git', 'GitHub', 'Figma', 'Netlify'].map(tool => (
                    <motion.span 
                      key={tool} 
                      whileHover={{ y: -3, backgroundColor: 'rgba(168, 85, 247, 0.1)', borderColor: 'rgba(168, 85, 247, 0.3)' }}
                      className="bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg text-xs transition-colors cursor-default"
                    >
                      {tool}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Journey */}
      <section id="education" className="py-24 bg-dark-bg/50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionHeading subtitle="My academic path and professional training milestones.">
            Education <span className="brand-gradient-text">Journey</span>
          </SectionHeading>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-[31px] md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-brand-primary to-brand-secondary opacity-30"></div>
            
            {[
              {
                year: '2022 - Present',
                title: 'Bachelor of Science in Computer Science',
                org: 'City University',
                desc: 'Final year student currently conducting thesis research on Artificial Intelligence integrations, focusing on its practical applications in modern software ecosystems.',
                position: 'left'
              },
              {
                year: '2017 - 2018',
                title: 'Higher Secondary Certificate (HSC)',
                org: 'Fulgazi Govt. College, Feni',
                desc: 'Completed higher secondary education with a strong foundation in ICT, Chemistry, Physics and Mathematics.',
                position: 'right'
              }
            ].map((edu, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: edu.position === 'left' ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`relative mb-12 flex flex-col md:flex-row items-center gap-8 ${edu.position === 'right' ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-[24px] md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-dark-bg bg-brand-primary z-10"></div>
                
                <div className={`w-full md:w-1/2 ${edu.position === 'left' ? 'md:text-right' : 'md:text-left'}`}>
                   <motion.div 
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="glass-card inline-block group hover:bg-white/10"
                   >
                      <div className={`flex items-center gap-3 mb-2 font-bold text-sm text-brand-primary ${edu.position === 'left' ? 'md:flex-row-reverse' : ''}`}>
                         <BookOpen size={16} />
                         <span>{edu.year}</span>
                      </div>
                      <h4 className="text-xl font-bold mb-1">{edu.title}</h4>
                      <p className="text-gray-400 font-medium mb-3">{edu.org}</p>
                      <p className="text-sm text-gray-500 max-w-md">{edu.desc}</p>
                   </motion.div>
                </div>
                <div className="hidden md:block w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionHeading subtitle="A showcase of my recent work, featuring full-stack applications and complex UI implementations.">
            Featured <span className="brand-gradient-text">Projects</span>
          </SectionHeading>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[{
              title: 'GadgetHub',
                desc: 'GadgetHub offers latest gadgets with reliable quality, affordable prices and excellent customer service.',
                image: '/GadgetHub.png',
                tags: ['React', 'TypeScript', 'Firebase Firestore'],
                live: 'https://rad-daffodil-9fc82e.netlify.app/',
                source: 'https://github.com/omarfarhatul/gadgethub_plus'
              },
              {
              title: 'Educational& E-commerce Learning Platform',
                desc: 'An educational and e-commerce platform empowers users to study, access courses and develop skills.',
                image: '/Learning_Platform.png',
                tags: ['MongoDB', 'TypeScript', 'Firebase'],
                live: 'https://flourishing-strudel-869e0c.netlify.app/',
                source: 'https://github.com/omarfarhatul/learnpro'
              },
              {
                title: 'Fitness',
                desc: 'Fitness improves strength, boosts energy, supports mental health and maintains a balanced healthy lifestyle.',
                image: '/Fitness.png',
                tags: ['React', 'Tailwind', 'HTML'],
                live: 'https://omarfarhatul.github.io/Assignment-2/',
                source: 'https://github.com/omarfarhatul/Assignment-2'
              },
              {
                title: 'Peddy',
                desc: 'Adopting a pet gives an animal a second chance and brings endless joy and happiness to your life.',
                image: '/pet.png',
                tags: ['JS', 'React', 'Tailwind'],
                live: 'https://poetic-brioche-086f7e.netlify.app/',
                source: 'https://github.com/omarfarhatul/Assignment-6'
              },
              {
                title: 'Rinterio',
                desc: 'The barn house blends rustic charm and modern style, with wood, metal accents and bright natural light.',
                image: '/house.png',
                tags: ['React', 'HTML', 'JS'],
                live: 'https://omarfarhatul.github.io/Assignment-3/',
                source: 'https://github.com/omarfarhatul/Assignment-3'
              }

            ].map((project, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -12 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-0 overflow-hidden group flex flex-col hover:shadow-brand-primary/10"
              >
                <div className="relative overflow-hidden aspect-video">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-dark-bg/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-3 bg-white/10 hover:bg-brand-primary rounded-full backdrop-blur-md transition-all text-white"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a 
                      href={project.source} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-3 bg-white/10 hover:bg-brand-secondary rounded-full backdrop-blur-md transition-all text-white"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h4 className="text-xl font-bold mb-2">{project.title}</h4>
                  <p className="text-gray-400 text-sm mb-6 flex-1">{project.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                      <motion.span 
                        key={tag} 
                        whileHover={{ y: -2, scale: 1.1, backgroundColor: 'rgba(59, 130, 246, 0.2)' }}
                        className="text-[10px] font-bold uppercase tracking-wider bg-white/5 border border-white/10 px-2 py-1 rounded transition-colors cursor-default"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <motion.a 
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer" 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-linear-to-r from-brand-primary to-brand-secondary text-white py-2.5 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                    >
                      Live Demo
                    </motion.a>
                    <motion.a 
                      href={project.source}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white/5 border border-white/10 text-white py-2.5 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 transition-all"
                    >
                      Source
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-dark-bg/50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionHeading subtitle="Have a project in mind or want to collaborate? I'd love to hear from you.">
            Get <span className="brand-gradient-text">In Touch</span>
          </SectionHeading>
          
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="glass-card space-y-8"
            >
              <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
              <div className="space-y-6">
                {[
                  { icon: Mail, label: 'Email', value: 'omarfarhatulhossain@gmail.com' },
                  { icon: Phone, label: 'Phone', value: '+8801625528784' },
                  { icon: MapPin, label: 'Location', value: 'Savar, Dhaka-1340, Bangladesh' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all">
                      <item.icon size={22} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">{item.label}</p>
                      <p className="text-white font-medium">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="pt-8">
                <p className="font-bold mb-4">Connect With Me</p>
                <div className="flex flex-wrap gap-4">
                  {[
                    { Icon: Github, url: 'https://github.com/omarfarhatul', label: 'GitHub' },
                    { Icon: Linkedin, url: 'https://linkedin.com/in/omarfarhatul', label: 'LinkedIn' },
                    { Icon: Facebook, url: 'https://www.facebook.com/ofh.hossain', label: 'Facebook' },
                    { Icon: Mail, url: 'mailto:omarfarhatulhossain@gmail.com', label: 'Email' }
                  ].map(({ Icon, url, label }, idx) => (
                    <motion.a 
                      key={idx} 
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={label}
                      whileHover={{ scale: 1.1, y: -5, backgroundColor: 'var(--color-brand-primary)', color: '#fff' }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-all text-gray-400 shadow-lg shadow-black/20"
                    >
                      <Icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
            
            <motion.form 
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               onSubmit={handleSubmit}
               className="glass-card space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500 px-1">Your Name</label>
                  <input 
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-brand-primary focus:bg-white/10 outline-hidden transition-all text-white" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500 px-1">Your Email</label>
                  <input 
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-brand-primary focus:bg-white/10 outline-hidden transition-all text-white" 
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-500 px-1">Subject</label>
                <input 
                  required
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-brand-primary focus:bg-white/10 outline-hidden transition-all text-white" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-500 px-1">Message</label>
                <textarea 
                  required
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4} 
                  placeholder="Tell me about your project..." 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-brand-primary focus:bg-white/10 outline-hidden transition-all text-white resize-none" 
                />
              </div>
              
              <AnimatePresence mode="wait">
                {formStatus === 'sent' ? (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="bg-green-500/20 border border-green-500/50 text-green-500 p-4 rounded-xl text-center font-bold"
                  >
                    Message Sent Successfully!
                  </motion.div>
                ) : (
                  <button 
                    disabled={formStatus === 'sending'}
                    type="submit" 
                    className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
                  </button>
                )}
              </AnimatePresence>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center">
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            {[
              { Icon: Github, url: 'https://github.com/omarfarhatul', label: 'GitHub' },
              { Icon: Linkedin, url: 'https://linkedin.com/in/omarfarhatul', label: 'LinkedIn' },
              { Icon: Facebook, url: 'https://www.facebook.com/ofh.hossain', label: 'Facebook' },
              { Icon: Mail, url: 'mailto:omarfarhatulhossain@gmail.com', label: 'Email' }
            ].map(({ Icon, url, label }, idx) => (
              <motion.a 
                key={idx}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: 'var(--color-brand-primary)' }}
                className="text-gray-500 transition-colors"
                title={label}
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </div>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Omar Farhatul. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
