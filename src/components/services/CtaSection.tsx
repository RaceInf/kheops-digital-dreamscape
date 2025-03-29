
import React from "react";
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-kheops-gold to-kheops-salmon text-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="mb-6 text-white">Prêt à transformer votre présence digitale ?</h2>
          <p className="text-white opacity-90 mb-8 text-lg">
            Contactez-nous dès aujourd'hui pour discuter de votre projet et découvrir comment nous pouvons vous aider à atteindre vos objectifs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-kheops-gold hover:bg-gray-100 font-medium px-8 py-6 text-lg">
              Demander un devis
            </Button>
            <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-kheops-gold font-medium px-8 py-6 text-lg">
              Prendre rendez-vous
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
