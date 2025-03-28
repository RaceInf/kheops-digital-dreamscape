
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Award, Briefcase, Heart, Medal, Target, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const values = [
    {
      icon: <Target className="w-10 h-10 text-kheops-gold" />,
      title: "Excellence",
      description: "Nous visons l'excellence dans chaque projet, en cherchant constamment à dépasser les attentes de nos clients."
    },
    {
      icon: <Heart className="w-10 h-10 text-kheops-salmon" />,
      title: "Passion",
      description: "La passion pour le digital guide notre travail quotidien et nous pousse à rester à la pointe de l'innovation."
    },
    {
      icon: <Briefcase className="w-10 h-10 text-kheops-gold" />,
      title: "Professionnalisme",
      description: "Nous respectons nos engagements avec rigueur et transparence dans toutes nos relations professionnelles."
    },
    {
      icon: <Users className="w-10 h-10 text-kheops-salmon" />,
      title: "Collaboration",
      description: "Nous croyons en la puissance de la collaboration, tant au sein de notre équipe qu'avec nos clients."
    }
  ];

  const milestones = [
    { year: "2015", title: "Fondation", description: "Création de KHEOPS SET DIGITAL par une équipe de passionnés du digital." },
    { year: "2017", title: "Expansion", description: "Ouverture de nos bureaux à Lyon et recrutement de nouveaux talents." },
    { year: "2019", title: "Innovation", description: "Lancement de notre département d'intelligence artificielle et de data science." },
    { year: "2021", title: "International", description: "Premiers projets internationaux et partenariats stratégiques." },
    { year: "2023", title: "Évolution", description: "Renouvellement de notre identité visuelle et de notre approche stratégique." }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-gray-50 to-white">
        <div className="container-custom">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              À Propos de <span className="text-kheops-gold">Nous</span>
            </h1>
            <p className="text-gray-600 text-lg md:text-xl mb-8">
              Découvrez l'équipe passionnée derrière KHEOPS SET DIGITAL et notre mission de transformation digitale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Notre <span className="text-kheops-gold">Mission</span></h2>
              <p className="text-gray-600 mb-4">
                KHEOPS SET DIGITAL est née d'une vision simple mais ambitieuse : accompagner les entreprises dans leur transformation digitale en proposant des solutions sur mesure, innovantes et impactantes.
              </p>
              <p className="text-gray-600 mb-4">
                Notre mission est d'être le partenaire stratégique qui vous aide à naviguer dans l'écosystème digital en constante évolution, en combinant expertise technique, créativité et compréhension approfondie de vos objectifs d'affaires.
              </p>
              <p className="text-gray-600 mb-6">
                Nous croyons que la réussite digitale n'est pas seulement une question de technologie, mais aussi d'expérience humaine et d'alignement stratégique avec vos valeurs et vos ambitions.
              </p>
              <Button className="bg-kheops-gold hover:bg-kheops-salmon text-white">
                Découvrir nos services
              </Button>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10 overflow-hidden rounded-lg shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" 
                  alt="Notre équipe en réunion" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-kheops-salmon rounded-full opacity-20 z-0"></div>
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-kheops-gold rounded-full opacity-20 z-0"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Nos <span className="text-kheops-gold">Valeurs</span></h2>
            <p className="text-gray-600">
              Ces principes fondamentaux guident notre travail au quotidien et définissent notre identité en tant qu'agence.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                variants={fadeIn}
              >
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Notre <span className="text-kheops-gold">Histoire</span></h2>
            <p className="text-gray-600">
              Un parcours d'innovation et de croissance depuis notre création.
            </p>
          </motion.div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>
            
            {/* Timeline items */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div 
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="w-1/2"></div>
                  
                  {/* Circle on timeline */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-kheops-gold flex items-center justify-center z-10">
                    <div className="w-4 h-4 rounded-full bg-white"></div>
                  </div>
                  
                  <div className={`w-1/2 ${
                    index % 2 === 0 ? 'pl-8' : 'pr-8 text-right'
                  }`}>
                    <div className={`bg-white p-6 rounded-lg shadow-md inline-block ${
                      index % 2 === 0 ? 'rounded-tl-none' : 'rounded-tr-none'
                    }`}>
                      <span className="text-kheops-salmon font-bold text-lg">{milestone.year}</span>
                      <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Notre <span className="text-kheops-gold">Équipe</span></h2>
            <p className="text-gray-600">
              Des professionnels passionnés qui font vivre KHEOPS SET DIGITAL au quotidien.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeIn} className="group">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=1000" 
                  alt="Thomas Dubois" 
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <div className="flex justify-center space-x-3">
                      <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-gray-800 hover:bg-kheops-gold hover:text-white transition-colors">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M22.162 5.656c-.75.36-1.566.599-2.415.719.87-.521 1.532-1.349 1.851-2.34-.813.48-1.713.83-2.669 1.02-.766-.815-1.859-1.324-3.066-1.324-2.34 0-4.237 1.897-4.237 4.235 0 .332.033.65.107.956-3.52-.178-6.639-1.86-8.718-4.42-.366.625-.577 1.351-.577 2.124 0 1.472.75 2.773 1.881 3.537-.693-.022-1.343-.21-1.911-.525v.052c0 2.059 1.472 3.777 3.42 4.167-.358.098-.729.147-1.117.147-.273 0-.538-.026-.8-.075.543 1.693 2.123 2.927 3.99 2.963-1.459 1.145-3.298 1.827-5.293 1.827-.343 0-.68-.02-1.013-.06 1.888 1.211 4.128 1.915 6.537 1.915 7.844 0 12.135-6.49 12.135-12.135 0-.182-.004-.366-.012-.55.833-.6 1.554-1.351 2.125-2.207l.01-.01z"/>
                        </svg>
                      </a>
                      <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-gray-800 hover:bg-kheops-gold hover:text-white transition-colors">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98zm6.44-3.77a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z"/>
                        </svg>
                      </a>
                      <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-gray-800 hover:bg-kheops-gold hover:text-white transition-colors">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M19.55 3.08h-15.1c-.75 0-1.37.61-1.37 1.37v15.1c0 .75.62 1.37 1.37 1.37h15.1c.75 0 1.37-.62 1.37-1.37v-15.1c0-.76-.62-1.37-1.37-1.37zm-11.08 15.1h-2.75v-8.24h2.75v8.24zm-1.37-9.36c-.88 0-1.6-.72-1.6-1.6 0-.88.72-1.6 1.6-1.6.88 0 1.6.72 1.6 1.6 0 .88-.72 1.6-1.6 1.6zm11.08 9.36h-2.75v-4.01c0-1.03-.02-2.35-1.43-2.35-1.43 0-1.65 1.12-1.65 2.27v4.09h-2.75v-8.24h2.64v1.21h.04c.37-.7 1.26-1.43 2.6-1.43 2.77 0 3.29 1.82 3.29 4.2v4.26z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold">Thomas Dubois</h3>
                <p className="text-kheops-salmon">CEO & Stratège Digital</p>
              </div>
            </motion.div>

            <motion.div variants={fadeIn} className="group">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1000" 
                  alt="Marie Laurent" 
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <div className="flex justify-center space-x-3">
                      <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-gray-800 hover:bg-kheops-gold hover:text-white transition-colors">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M22.162 5.656c-.75.36-1.566.599-2.415.719.87-.521 1.532-1.349 1.851-2.34-.813.48-1.713.83-2.669 1.02-.766-.815-1.859-1.324-3.066-1.324-2.34 0-4.237 1.897-4.237 4.235 0 .332.033.65.107.956-3.52-.178-6.639-1.86-8.718-4.42-.366.625-.577 1.351-.577 2.124 0 1.472.75 2.773 1.881 3.537-.693-.022-1.343-.21-1.911-.525v.052c0 2.059 1.472 3.777 3.42 4.167-.358.098-.729.147-1.117.147-.273 0-.538-.026-.8-.075.543 1.693 2.123 2.927 3.99 2.963-1.459 1.145-3.298 1.827-5.293 1.827-.343 0-.68-.02-1.013-.06 1.888 1.211 4.128 1.915 6.537 1.915 7.844 0 12.135-6.49 12.135-12.135 0-.182-.004-.366-.012-.55.833-.6 1.554-1.351 2.125-2.207l.01-.01z"/>
                        </svg>
                      </a>
                      <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-gray-800 hover:bg-kheops-gold hover:text-white transition-colors">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98zm6.44-3.77a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z"/>
                        </svg>
                      </a>
                      <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-gray-800 hover:bg-kheops-gold hover:text-white transition-colors">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M19.55 3.08h-15.1c-.75 0-1.37.61-1.37 1.37v15.1c0 .75.62 1.37 1.37 1.37h15.1c.75 0 1.37-.62 1.37-1.37v-15.1c0-.76-.62-1.37-1.37-1.37zm-11.08 15.1h-2.75v-8.24h2.75v8.24zm-1.37-9.36c-.88 0-1.6-.72-1.6-1.6 0-.88.72-1.6 1.6-1.6.88 0 1.6.72 1.6 1.6 0 .88-.72 1.6-1.6 1.6zm11.08 9.36h-2.75v-4.01c0-1.03-.02-2.35-1.43-2.35-1.43 0-1.65 1.12-1.65 2.27v4.09h-2.75v-8.24h2.64v1.21h.04c.37-.7 1.26-1.43 2.6-1.43 2.77 0 3.29 1.82 3.29 4.2v4.26z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold">Marie Laurent</h3>
                <p className="text-kheops-salmon">Directrice Créative</p>
              </div>
            </motion.div>

            <motion.div variants={fadeIn} className="group">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=1000" 
                  alt="Sophie Moreau" 
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <div className="flex justify-center space-x-3">
                      <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-gray-800 hover:bg-kheops-gold hover:text-white transition-colors">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M22.162 5.656c-.75.36-1.566.599-2.415.719.87-.521 1.532-1.349 1.851-2.34-.813.48-1.713.83-2.669 1.02-.766-.815-1.859-1.324-3.066-1.324-2.34 0-4.237 1.897-4.237 4.235 0 .332.033.65.107.956-3.52-.178-6.639-1.86-8.718-4.42-.366.625-.577 1.351-.577 2.124 0 1.472.75 2.773 1.881 3.537-.693-.022-1.343-.21-1.911-.525v.052c0 2.059 1.472 3.777 3.42 4.167-.358.098-.729.147-1.117.147-.273 0-.538-.026-.8-.075.543 1.693 2.123 2.927 3.99 2.963-1.459 1.145-3.298 1.827-5.293 1.827-.343 0-.68-.02-1.013-.06 1.888 1.211 4.128 1.915 6.537 1.915 7.844 0 12.135-6.49 12.135-12.135 0-.182-.004-.366-.012-.55.833-.6 1.554-1.351 2.125-2.207l.01-.01z"/>
                        </svg>
                      </a>
                      <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-gray-800 hover:bg-kheops-gold hover:text-white transition-colors">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98zm6.44-3.77a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z"/>
                        </svg>
                      </a>
                      <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-gray-800 hover:bg-kheops-gold hover:text-white transition-colors">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M19.55 3.08h-15.1c-.75 0-1.37.61-1.37 1.37v15.1c0 .75.62 1.37 1.37 1.37h15.1c.75 0 1.37-.62 1.37-1.37v-15.1c0-.76-.62-1.37-1.37-1.37zm-11.08 15.1h-2.75v-8.24h2.75v8.24zm-1.37-9.36c-.88 0-1.6-.72-1.6-1.6 0-.88.72-1.6 1.6-1.6.88 0 1.6.72 1.6 1.6 0 .88-.72 1.6-1.6 1.6zm11.08 9.36h-2.75v-4.01c0-1.03-.02-2.35-1.43-2.35-1.43 0-1.65 1.12-1.65 2.27v4.09h-2.75v-8.24h2.64v1.21h.04c.37-.7 1.26-1.43 2.6-1.43 2.77 0 3.29 1.82 3.29 4.2v4.26z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold">Sophie Moreau</h3>
                <p className="text-kheops-salmon">Community Manager</p>
              </div>
            </motion.div>

            <motion.div variants={fadeIn} className="group">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?auto=format&fit=crop&q=80&w=1000" 
                  alt="Alexandre Martin" 
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <div className="flex justify-center space-x-3">
                      <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-gray-800 hover:bg-kheops-gold hover:text-white transition-colors">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M22.162 5.656c-.75.36-1.566.599-2.415.719.87-.521 1.532-1.349 1.851-2.34-.813.48-1.713.83-2.669 1.02-.766-.815-1.859-1.324-3.066-1.324-2.34 0-4.237 1.897-4.237 4.235 0 .332.033.65.107.956-3.52-.178-6.639-1.86-8.718-4.42-.366.625-.577 1.351-.577 2.124 0 1.472.75 2.773 1.881 3.537-.693-.022-1.343-.21-1.911-.525v.052c0 2.059 1.472 3.777 3.42 4.167-.358.098-.729.147-1.117.147-.273 0-.538-.026-.8-.075.543 1.693 2.123 2.927 3.99 2.963-1.459 1.145-3.298 1.827-5.293 1.827-.343 0-.68-.02-1.013-.06 1.888 1.211 4.128 1.915 6.537 1.915 7.844 0 12.135-6.49 12.135-12.135 0-.182-.004-.366-.012-.55.833-.6 1.554-1.351 2.125-2.207l.01-.01z"/>
                        </svg>
                      </a>
                      <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-gray-800 hover:bg-kheops-gold hover:text-white transition-colors">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98zm6.44-3.77a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z"/>
                        </svg>
                      </a>
                      <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-gray-800 hover:bg-kheops-gold hover:text-white transition-colors">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M19.55 3.08h-15.1c-.75 0-1.37.61-1.37 1.37v15.1c0 .75.62 1.37 1.37 1.37h15.1c.75 0 1.37-.62 1.37-1.37v-15.1c0-.76-.62-1.37-1.37-1.37zm-11.08 15.1h-2.75v-8.24h2.75v8.24zm-1.37-9.36c-.88 0-1.6-.72-1.6-1.6 0-.88.72-1.6 1.6-1.6.88 0 1.6.72 1.6 1.6 0 .88-.72 1.6-1.6 1.6zm11.08 9.36h-2.75v-4.01c0-1.03-.02-2.35-1.43-2.35-1.43 0-1.65 1.12-1.65 2.27v4.09h-2.75v-8.24h2.64v1.21h.04c.37-.7 1.26-1.43 2.6-1.43 2.77 0 3.29 1.82 3.29 4.2v4.26z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold">Alexandre Martin</h3>
                <p className="text-kheops-salmon">Développeur Web</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-kheops-gold to-kheops-salmon rounded-lg overflow-hidden shadow-xl">
            <div className="p-8 md:p-12 text-white text-center">
              <h2 className="text-3xl font-bold mb-6">Prêt à Travailler Avec Nous?</h2>
              <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                Contactez-nous dès aujourd'hui pour discuter de votre projet et découvrir comment notre équipe peut vous aider à atteindre vos objectifs digitaux.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button className="bg-white text-kheops-gold hover:bg-gray-100">
                  Demander un devis
                </Button>
                <Button className="bg-transparent border border-white hover:bg-white/10">
                  Nous contacter
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
