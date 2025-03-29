
import React from "react";
import { motion } from "framer-motion";

// Animation variants
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const ProcessSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="mb-4">Notre <span className="text-kheops-gold">Processus</span></h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Une méthodologie éprouvée pour assurer le succès de vos projets digitaux.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-24 left-[calc(12.5%+1rem)] right-[calc(12.5%+1rem)] h-0.5 bg-gray-200"></div>
          
          {/* Process steps */}
          <motion.div variants={fadeIn} className="relative">
            <div className="text-center">
              <div className="w-12 h-12 bg-kheops-gold text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 relative z-10">1</div>
              <h3 className="text-xl font-bold mb-2">Analyse</h3>
              <p className="text-gray-600">Évaluation de vos besoins, objectifs et de l'environnement concurrentiel.</p>
            </div>
          </motion.div>
          
          <motion.div variants={fadeIn} className="relative">
            <div className="text-center">
              <div className="w-12 h-12 bg-kheops-gold text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 relative z-10">2</div>
              <h3 className="text-xl font-bold mb-2">Stratégie</h3>
              <p className="text-gray-600">Élaboration d'un plan d'action personnalisé pour atteindre vos objectifs.</p>
            </div>
          </motion.div>
          
          <motion.div variants={fadeIn} className="relative">
            <div className="text-center">
              <div className="w-12 h-12 bg-kheops-gold text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 relative z-10">3</div>
              <h3 className="text-xl font-bold mb-2">Exécution</h3>
              <p className="text-gray-600">Mise en œuvre des solutions et déploiement des actions définies.</p>
            </div>
          </motion.div>
          
          <motion.div variants={fadeIn} className="relative">
            <div className="text-center">
              <div className="w-12 h-12 bg-kheops-gold text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 relative z-10">4</div>
              <h3 className="text-xl font-bold mb-2">Optimisation</h3>
              <p className="text-gray-600">Suivi des résultats, analyse et amélioration continue des performances.</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
