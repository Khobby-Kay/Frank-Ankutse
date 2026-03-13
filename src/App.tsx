import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'motion/react';
import useEmblaCarousel from 'embla-carousel-react';
import { 
  User, 
  Target, 
  Award, 
  MessageSquare, 
  ChevronRight, 
  ChevronLeft,
  Facebook, 
  Twitter, 
  Instagram, 
  Mail, 
  Phone,
  MapPin,
  CheckCircle2,
  Menu,
  X,
  TrendingUp,
  ShieldCheck,
  Users,
  Flag,
  Vote
} from 'lucide-react';

// --- Components ---

const NDCLogo = ({ className = "w-12 h-12" }: { className?: string }) => (
  <div className={`relative flex items-center justify-center rounded-full overflow-hidden border-2 border-ndc-green bg-white shadow-inner ${className}`}>
    <div className="absolute inset-0 flex flex-col">
      <div className="h-1/3 bg-ndc-red" />
      <div className="h-1/3 bg-white" />
      <div className="h-1/3 bg-ndc-green" />
    </div>
    <div className="relative z-10 flex flex-col items-center justify-center">
      <div className="font-black text-ndc-black text-[10px] leading-none tracking-tighter">NDC</div>
      <div className="w-4 h-[1px] bg-ndc-black/20 my-0.5" />
      <div className="text-[6px] font-bold text-ndc-black/60 leading-none">VOLTA</div>
    </div>
  </div>
);

// --- Animations ---
const spinSlow = {
  animate: {
    rotate: 360,
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: "linear"
    }
  }
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Vision', href: '#vision' },
    { name: 'News', href: '#news' },
    { name: 'Platform', href: '#platform' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <NDCLogo className="w-10 h-10 md:w-12 md:h-12" />
          <div className="flex flex-col">
            <span className={`font-black text-xs md:text-xl leading-none tracking-tighter ${isScrolled ? 'text-ndc-black' : 'text-white'}`}>
              FRANK SELORM K. ANKUTSE
            </span>
            <span className={`text-[7px] md:text-[10px] font-bold tracking-[0.2em] uppercase ${isScrolled ? 'text-ndc-green' : 'text-ndc-red'}`}>
              Volta Regional Deputy Treasurer Candidate
            </span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`text-xs font-black uppercase tracking-widest transition-colors hover:text-ndc-red ${isScrolled ? 'text-slate-800' : 'text-white'}`}
            >
              {link.name}
            </a>
          ))}
          <button className="bg-ndc-red hover:bg-red-700 text-white px-6 py-2 rounded-sm text-xs font-black uppercase tracking-widest transition-all shadow-lg">
            Donate
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} className="text-ndc-red" /> : <Menu size={28} className={isScrolled ? 'text-ndc-black' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-50 bg-ndc-black text-white p-8 flex flex-col gap-8 lg:hidden"
          >
            <div className="flex justify-between items-center">
              <NDCLogo />
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <X size={32} />
              </button>
            </div>
            <div className="flex flex-col gap-6 mt-12">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-3xl font-black uppercase tracking-tighter hover:text-ndc-red transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <button className="mt-auto bg-ndc-red text-white py-4 font-black uppercase tracking-widest">
              Donate to Campaign
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-ndc-black">
      {/* Background Image with NDC Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.55 }}
          transition={{ duration: 2, ease: "easeOut" }}
          src="https://scontent.facc1-1.fna.fbcdn.net/v/t39.30808-6/625875009_34460314656892661_880893076253517866_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeE3uZNgxtdT8NZBWQDQ6yumTRzIeORoBKNNHMh45GgEo2_Rl9ah-CIuVLFwdwW5Hhm8PfRvnOvfcQTclx3jYcGq&_nc_ohc=l6D-fvRmRLUQ7kNvwEp1JHs&_nc_oc=AdlDGyY6cQ9LlmzrBABeJEmnu3eY5Nl24HU5DUZ24aq3jXdUZLDAQ7gLIbKay-kFBRk&_nc_zt=23&_nc_ht=scontent.facc1-1.fna&_nc_gid=5lCGDD5vDSRwIptVOG8XIQ&_nc_ss=8&oh=00_Afx7uHcnwJ3BAl5vIFZJzm4M57BOGdKgcUJYFkBTh-5bew&oe=69B9E92D" 
          alt="Frank Selorm K. Ankutse with the People" 
          className="w-full h-full object-cover object-center md:object-top"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ndc-black via-ndc-black/80 to-transparent hidden lg:block" />
        <div className="absolute inset-0 bg-gradient-to-t from-ndc-black via-ndc-black/40 to-transparent lg:hidden" />
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] border border-ndc-green/30 rounded-full hidden lg:block"
        />
        <motion.div 
          animate={{ 
            rotate: [360, 0],
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] border border-ndc-red/20 rounded-full hidden lg:block"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:col-span-8"
          >
            <div className="flex items-center gap-4 mb-8">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: 64 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-[2px] bg-ndc-red" 
              />
              <span className="text-ndc-red font-black uppercase tracking-[0.4em] text-xs md:text-sm">
                National Democratic Congress
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[11rem] font-black text-white leading-[0.85] mb-8 tracking-tighter uppercase">
              MITSO <br />
              <span className="text-ndc-green">MIDZO!</span>
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <motion.div 
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="bg-ndc-red text-white px-4 py-1.5 md:px-8 md:py-4 font-black text-[10px] md:text-2xl uppercase tracking-widest md:transform md:-skew-x-12 shadow-2xl rounded-full md:rounded-none"
              >
                FRANK SELORM K. ANKUTSE
              </motion.div>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {["#MistoMidzo", "#Accountability", "#Innovation", "#Servanthood"].map((tag, i) => (
                  <motion.span 
                    key={tag}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1 + (i * 0.1) }}
                    className="bg-white/5 backdrop-blur-md border border-white/10 text-white/80 px-3 py-1 md:px-4 md:py-2 rounded-full font-black uppercase tracking-widest text-[8px] md:text-[10px] hover:bg-ndc-green hover:text-white transition-all cursor-default"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>

            <p className="text-lg md:text-2xl text-slate-300 mb-12 max-w-2xl leading-snug font-medium">
              A proven leader from Hohoe, dedicated to <span className="text-ndc-green font-bold">Innovation</span> and <span className="text-ndc-red font-bold">Accountability</span> for the grassroots empowerment of the Volta Regional NDC.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <a href="#contact" className="group bg-ndc-green hover:bg-green-700 text-white px-10 py-5 md:px-12 md:py-6 font-black uppercase tracking-widest transition-all flex items-center justify-center gap-4 shadow-2xl relative overflow-hidden">
                <span className="relative z-10">Join The Campaign</span>
                <ChevronRight className="relative z-10 group-hover:translate-x-2 transition-transform" />
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </a>
              <a href="#vision" className="bg-white/5 backdrop-blur-xl text-white border-2 border-white/20 hover:bg-white/20 px-10 py-5 md:px-12 md:py-6 font-black uppercase tracking-widest transition-all flex items-center justify-center">
                Our Vision
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="lg:col-span-4 hidden lg:flex flex-col items-end gap-8"
          >
            <div className="bg-ndc-black/40 backdrop-blur-md p-8 border border-white/10 rounded-2xl shadow-2xl text-right group hover:border-ndc-green/50 transition-all">
              <Vote className="text-ndc-red mb-4 ml-auto group-hover:scale-110 transition-transform" size={48} />
              <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-tighter">Volta's Choice</h3>
              <p className="text-white/60 text-sm font-medium leading-relaxed">
                Empowering the 18 constituencies of the Volta Region with transparent financial leadership.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-ndc-green font-black text-4xl leading-none">2026</p>
                <p className="text-white/40 text-[10px] font-black uppercase tracking-widest">Election Year</p>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div className="text-right">
                <p className="text-ndc-red font-black text-4xl leading-none">18</p>
                <p className="text-white/40 text-[10px] font-black uppercase tracking-widest">Constituencies</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/30"
      >
        <span className="text-[10px] font-black uppercase tracking-[0.4em]">Scroll</span>
        <div className="w-[2px] h-12 bg-gradient-to-b from-white/30 to-transparent" />
      </motion.div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <div className="relative">
            <div className="aspect-square md:aspect-[4/5] bg-slate-100 overflow-hidden border-[12px] border-ndc-green/10">
              <img 
                src="https://scontent.facc6-1.fna.fbcdn.net/v/t39.30808-6/634876580_34642916431965815_5623338786244481568_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=1d70fc&_nc_eui2=AeGg-Pc_aNiGOPETRSVIx504rEM9dJHMh-asQz10kcyH5lVteeXlESQW45pC2-2eb-EA34Y4OWfjHRL4j2SValEl&_nc_ohc=ddMyB2yerHQQ7kNvwF6mRlt&_nc_oc=Adn7DBU2oG5QegX7eg8fwb2CzonJOYdq_kdWDHAS0Jd51pXqRWZmxtWby2SuxLuwnfw&_nc_zt=23&_nc_ht=scontent.facc6-1.fna&_nc_gid=ynb98g0nBdl8aQdv77-ksQ&_nc_ss=8&oh=00_Afz2tdDRcHEgCpUEcYS6m0bV2gjpDMRfqt-hYIUjxwPITQ&oe=69B9FDB0" 
                alt="Frank Selorm K. Ankutse" 
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 bg-ndc-red p-6 md:p-10 text-white max-w-[200px] md:max-w-xs shadow-2xl">
              <h3 className="text-2xl md:text-4xl font-black mb-2 leading-none uppercase">Mitso Midzo</h3>
              <p className="font-bold text-[10px] md:text-sm uppercase tracking-widest opacity-80">A legacy of service from Hohoe.</p>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-1 w-12 bg-ndc-green" />
              <span className="text-ndc-green font-black uppercase tracking-widest text-sm">The Candidate</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-ndc-black mb-8 leading-[0.9] tracking-tighter uppercase">
              LEADERSHIP WITH <br />
              <span className="text-ndc-red text-3xl md:text-5xl">INTEGRITY.</span>
            </h2>
            <div className="space-y-6 text-lg text-slate-700 font-medium leading-relaxed">
              <p>
                Frank Selorm K. Ankutse is a veteran of the National Democratic Congress with a track record of unwavering commitment. Having contested in the <strong>Hohoe Constituency NDC Parliamentary Primaries</strong>, he brings a wealth of grassroots experience and political maturity to the regional stage.
              </p>
              <p>
                His professional background in finance, combined with his deep roots in Hohoe, positions him as a bridge-builder who understands the unique challenges of our constituencies. Frank believes that a strong regional treasury is the backbone of a winning campaign.
              </p>
              <p>
                As we prepare for the 2026 general elections, Frank is offering himself to serve as your Volta Regional Deputy Treasurer—to ensure transparency, accountability, and the strategic mobilization of resources for an NDC landslide victory.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 md:gap-8 mt-12">
              <div className="border-l-4 border-ndc-green pl-4 md:pl-6">
                <h4 className="text-2xl md:text-3xl font-black text-ndc-black">100%</h4>
                <p className="text-[10px] md:text-sm font-bold text-slate-500 uppercase tracking-widest">NDC Loyalty</p>
              </div>
              <div className="border-l-4 border-ndc-red pl-4 md:pl-6">
                <h4 className="text-2xl md:text-3xl font-black text-ndc-black">15+</h4>
                <p className="text-[10px] md:text-sm font-bold text-slate-500 uppercase tracking-widest">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TiltCard = ({ children, className = "" }: { children: React.ReactNode, className?: string, key?: React.Key }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className={`relative ${className}`}
    >
      <div
        style={{
          transform: "translateZ(50px)",
          transformStyle: "preserve-3d",
        }}
        className="h-full w-full"
      >
        {children}
      </div>
    </motion.div>
  );
};

const Vision = () => {
  const visions = [
    {
      title: "Financial Integrity",
      desc: "Ensuring every cedi in the regional treasury is managed with transparency and used for the party's growth.",
      icon: <ShieldCheck size={48} />
    },
    {
      title: "Grassroots Support",
      desc: "Directing resources to empower our constituency and branch executives across the Volta Region.",
      icon: <Users size={48} />
    },
    {
      title: "Victory 2026",
      desc: "Building a robust financial war-chest to ensure a resounding NDC victory in the upcoming elections.",
      icon: <TrendingUp size={48} />
    }
  ];

  return (
    <section id="vision" className="py-24 bg-ndc-green text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase mb-6">OUR VISION FOR VOLTA</h2>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-medium">
            Together, we will build a stronger regional party structure that serves the interests of all members.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {visions.map((v, i) => (
            <div key={i} className="bg-white/10 backdrop-blur-sm p-6 md:p-10 border border-white/20 hover:bg-white/20 transition-all group">
              <div className="text-ndc-red mb-6 md:mb-8 group-hover:scale-110 transition-transform duration-300">{v.icon}</div>
              <h3 className="text-3xl font-black mb-4 uppercase tracking-tighter">{v.title}</h3>
              <p className="text-white/70 leading-relaxed font-medium">
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const News = () => {
  const updates = [
    {
      date: "Oct 24, 2025",
      title: "Frank K Ankutse Meets with Ho Central Executives",
      category: "Campaign Trail",
      image: "https://picsum.photos/seed/meeting1/600/400"
    },
    {
      date: "Nov 02, 2025",
      title: "Transparency in Party Financing: A New Proposal",
      category: "Policy",
      image: "https://picsum.photos/seed/policy1/600/400"
    },
    {
      date: "Nov 15, 2025",
      title: "Volta Region Youth Wing Endorses Frank K Ankutse",
      category: "Endorsement",
      image: "https://picsum.photos/seed/youth1/600/400"
    },
    {
      date: "Dec 05, 2025",
      title: "Grassroots Mobilization Drive in Keta",
      category: "Campaign Trail",
      image: "https://picsum.photos/seed/keta1/600/400"
    },
    {
      date: "Jan 12, 2026",
      title: "New Digital Portal for Regional NDC Members",
      category: "Innovation",
      image: "https://picsum.photos/seed/digital1/600/400"
    }
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section id="news" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-1 w-12 bg-ndc-red" />
              <span className="text-ndc-red font-black uppercase tracking-widest text-sm">Latest Updates</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-ndc-black leading-[0.9] tracking-tighter uppercase">
              CAMPAIGN <br />
              <span className="text-ndc-green">JOURNAL.</span>
            </h2>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={scrollPrev}
              className="w-14 h-14 border-2 border-ndc-black flex items-center justify-center hover:bg-ndc-black hover:text-white transition-all"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={scrollNext}
              className="w-14 h-14 border-2 border-ndc-black flex items-center justify-center hover:bg-ndc-black hover:text-white transition-all"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="embla" ref={emblaRef}>
          <div className="embla__container flex gap-8">
            {updates.map((item, i) => (
              <div key={i} className="embla__slide flex-[0_0_100%] md:flex-[0_0_45%] lg:flex-[0_0_30%] min-w-0">
                <TiltCard className="group h-full">
                  <div className="bg-white p-4 h-full flex flex-col border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="relative aspect-video overflow-hidden mb-6">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-4 left-4 bg-ndc-black text-white text-[10px] font-black uppercase tracking-widest px-3 py-1">
                        {item.category}
                      </div>
                    </div>
                    <p className="text-ndc-red font-bold text-xs uppercase tracking-widest mb-2">{item.date}</p>
                    <h3 className="text-2xl font-black text-ndc-black leading-tight uppercase tracking-tighter group-hover:text-ndc-green transition-colors">
                      {item.title}
                    </h3>
                  </div>
                </TiltCard>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Platform = () => {
  const points = [
    { title: "Resource Mobilization", desc: "Innovative fundraising strategies to keep our regional party financially independent." },
    { title: "Digital Accounting", desc: "Modernizing our financial records for real-time tracking and reporting." },
    { title: "Branch Empowerment", desc: "Ensuring funds reach the grassroots where the real work happens." },
    { title: "Accountability First", desc: "Regular audits and public financial statements for all regional members." }
  ];

  return (
    <section id="platform" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
          <div className="lg:w-1/3 lg:sticky lg:top-32">
            <span className="text-ndc-red font-black uppercase tracking-widest text-sm mb-4 block">The Platform</span>
            <h2 className="text-4xl md:text-6xl font-black text-ndc-black mb-8 leading-[0.9] tracking-tighter uppercase">
              THE NDC <br />
              <span className="text-ndc-green">WAY.</span>
            </h2>
            <p className="text-lg text-slate-600 font-medium mb-8">
              Our platform is built on the principles of social democracy and the specific needs of the Volta Regional NDC.
            </p>
            <button className="bg-ndc-black text-white px-8 py-4 font-black uppercase tracking-widest hover:bg-ndc-red transition-colors">
              Download Manifesto
            </button>
          </div>

          <div className="lg:w-2/3 grid md:grid-cols-2 gap-8">
            {points.map((point, i) => (
              <TiltCard key={i}>
                <div className="bg-white p-6 md:p-10 shadow-sm border-b-4 border-ndc-green hover:shadow-xl transition-all h-full">
                  <span className="text-ndc-red font-black text-3xl md:text-4xl mb-6 block">0{i + 1}</span>
                  <h3 className="text-2xl font-black text-ndc-black mb-4 uppercase tracking-tighter">{point.title}</h3>
                  <p className="text-slate-600 font-medium leading-relaxed">{point.desc}</p>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Constituencies = () => {
  const constituencies = [
    "Adaklu", "Afadzato South", "Agotime-Ziope", "Akatsi North", "Akatsi South", 
    "Anlo", "Central Tongu", "Ho Central", "Ho West", "Hohoe", 
    "Keta", "Ketu North", "Ketu South", "Kpando", "North Dayi", 
    "North Tongu", "South Dayi", "South Tongu"
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-1 w-12 bg-ndc-green" />
              <span className="text-ndc-green font-black uppercase tracking-widest text-sm">The 18 Strongholds</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-ndc-black leading-[0.9] tracking-tighter uppercase">
              OUR VOLTA <br />
              <span className="text-ndc-red">CONSTITUENCIES.</span>
            </h2>
          </div>
          <div className="text-slate-400 font-black text-8xl opacity-10 hidden lg:block">18</div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
          {constituencies.map((name, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.05, backgroundColor: '#006838', color: '#ffffff' }}
              className="border border-slate-100 p-4 md:p-6 text-center transition-all cursor-default group"
            >
              <MapPin className="mx-auto mb-3 text-ndc-red group-hover:text-white transition-colors" size={20} />
              <span className="text-xs font-black uppercase tracking-widest block">{name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const images = [
    { url: "https://picsum.photos/seed/campaign1/800/600", caption: "Community Engagement in Hohoe" },
    { url: "https://picsum.photos/seed/campaign2/800/600", caption: "Youth Empowerment Summit" },
    { url: "https://picsum.photos/seed/campaign3/800/600", caption: "Strategic Planning with Regional Executives" },
    { url: "https://picsum.photos/seed/campaign4/800/600", caption: "Grassroots Mobilization in Keta" },
    { url: "https://picsum.photos/seed/campaign5/800/600", caption: "Town Hall Meeting in Kpando" }
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="py-24 bg-ndc-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-1 w-12 bg-ndc-green" />
              <span className="text-ndc-green font-black uppercase tracking-widest text-sm">Campaign Moments</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white leading-[0.9] tracking-tighter uppercase">
              OUR JOURNEY <br />
              <span className="text-ndc-red">IN PHOTOS.</span>
            </h2>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={scrollPrev}
              className="w-14 h-14 border-2 border-white flex items-center justify-center hover:bg-white hover:text-ndc-black transition-all"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={scrollNext}
              className="w-14 h-14 border-2 border-white flex items-center justify-center hover:bg-white hover:text-ndc-black transition-all"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="embla" ref={emblaRef}>
          <div className="embla__container flex gap-6">
            {images.map((img, i) => (
              <div key={i} className="embla__slide flex-[0_0_100%] md:flex-[0_0_80%] lg:flex-[0_0_60%] min-w-0">
                <div className="relative aspect-[16/9] overflow-hidden group">
                  <img 
                    src={img.url} 
                    alt={img.caption} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ndc-black via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8">
                    <p className="text-sm md:text-xl font-black uppercase tracking-widest">{img.caption}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Supporters = () => {
  const groups = [
    "Volta Youth Wing",
    "Women's Caucus",
    "Ho Central Branch",
    "Ketu North Executives",
    "NDC Professionals Forum",
    "Tertiary Education Institutions Network (TEIN)"
  ];

  return (
    <section className="py-16 bg-ndc-black border-y border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-white/40 text-[10px] font-black uppercase tracking-[0.3em] mb-10">Endorsed By</p>
        <div className="flex flex-wrap justify-center items-center gap-x-8 lg:gap-16 gap-y-8 opacity-60 grayscale hover:grayscale-0 transition-all">
          {groups.map((group, i) => (
            <span key={i} className="text-white font-black text-lg md:text-2xl tracking-tighter uppercase text-center">
              {group}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-ndc-black text-white p-12 md:p-20 relative overflow-hidden">
          {/* Decorative NDC Stripes */}
          <div className="absolute top-0 left-0 w-full h-2 flex">
            <div className="flex-1 bg-ndc-red" />
            <div className="flex-1 bg-white" />
            <div className="flex-1 bg-ndc-green" />
          </div>

          <div className="grid lg:grid-cols-2 gap-20 relative z-10">
            <div>
              <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter uppercase leading-[0.9]">
                JOIN THE <br />
                <span className="text-ndc-red">REVOLUTION.</span>
              </h2>
              <p className="text-slate-400 text-lg mb-12 font-medium">
                Be part of the movement that will secure the Volta Region for the NDC. Your support makes the difference.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-white/5 flex items-center justify-center text-ndc-red border border-white/10">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase font-black tracking-[0.2em]">Email</p>
                    <p className="text-xl font-bold">frank@ndcvolta.org</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-white/5 flex items-center justify-center text-ndc-green border border-white/10">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase font-black tracking-[0.2em]">Phone</p>
                    <p className="text-xl font-bold">+233 24 000 0000</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 mt-12">
                {[Facebook, Twitter, Instagram].map((Icon, i) => (
                  <a key={i} href="#" className="w-14 h-14 bg-white/5 hover:bg-ndc-red flex items-center justify-center transition-all border border-white/10">
                    <Icon size={24} />
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 md:p-10 text-ndc-black">
              <h3 className="text-2xl md:text-3xl font-black mb-8 uppercase tracking-tighter">Volunteer Now</h3>
              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Full Name</label>
                  <input type="text" className="w-full border-b-2 border-slate-200 px-0 py-3 focus:border-ndc-green outline-none transition-all font-bold text-lg" placeholder="Enter your name" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Phone Number</label>
                  <input type="tel" className="w-full border-b-2 border-slate-200 px-0 py-3 focus:border-ndc-green outline-none transition-all font-bold text-lg" placeholder="Enter your phone" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Constituency</label>
                  <select className="w-full border-b-2 border-slate-200 px-0 py-3 focus:border-ndc-green outline-none transition-all font-bold text-lg bg-transparent">
                    <option value="">Select Constituency</option>
                    <option>Adaklu</option>
                    <option>Afadzato South</option>
                    <option>Agotime-Ziope</option>
                    <option>Akatsi North</option>
                    <option>Akatsi South</option>
                    <option>Anlo</option>
                    <option>Central Tongu</option>
                    <option>Ho Central</option>
                    <option>Ho West</option>
                    <option>Hohoe</option>
                    <option>Keta</option>
                    <option>Ketu North</option>
                    <option>Ketu South</option>
                    <option>Kpando</option>
                    <option>North Dayi</option>
                    <option>North Tongu</option>
                    <option>South Dayi</option>
                    <option>South Tongu</option>
                  </select>
                </div>
                <button className="w-full bg-ndc-red hover:bg-red-700 text-white font-black py-5 uppercase tracking-widest transition-all shadow-xl mt-4">
                  Register as Volunteer
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-ndc-black text-white py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-12">
          <div className="flex items-center gap-4">
            <NDCLogo className="w-16 h-16" />
            <div>
              <span className="font-black text-2xl tracking-tighter block leading-none uppercase">FRANK SELORM K. ANKUTSE</span>
              <span className="text-xs font-bold text-ndc-red uppercase tracking-widest">Volta Regional Deputy Treasurer Candidate</span>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8">
            {['Home', 'About', 'Vision', 'Manifesto', 'Contact'].map(item => (
              <a key={item} href="#" className="text-sm font-black uppercase tracking-widest hover:text-ndc-green transition-colors">{item}</a>
            ))}
          </div>
        </div>

        <div className="h-px w-full bg-white/10 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 font-bold text-[10px] uppercase tracking-[0.2em]">
          <p>© 2026 FRANK K ANKUTSE CAMPAIGN. ALL RIGHTS RESERVED.</p>
          <p>PAID FOR BY THE COMMITTEE TO ELECT FRANK K ANKUTSE.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-ndc-green selection:text-white relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Vision />
      <News />
      <Gallery />
      <Constituencies />
      <Platform />
      <Supporters />
      <Contact />
      <Footer />

      {/* Floating Action Button */}
      <motion.a
        href="#contact"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 z-40 bg-ndc-red text-white p-4 rounded-full shadow-2xl flex items-center gap-2 group"
      >
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 font-black uppercase tracking-widest text-xs whitespace-nowrap">
          Join The Movement
        </span>
        <Users size={24} />
      </motion.a>
    </div>
  );
}
