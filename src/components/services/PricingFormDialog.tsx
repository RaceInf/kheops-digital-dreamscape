
import * as React from "react";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle 
} from "@/components/ui/dialog";
import PricingContactForm from "./PricingContactForm";

interface PricingFormDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  selectedPlan: "Starter" | "Pro" | "Premium";
}

const PricingFormDialog: React.FC<PricingFormDialogProps> = ({
  isOpen,
  onOpenChange,
  selectedPlan,
}) => {
  // Map for pricing information
  const planInfo = {
    "Starter": { price: "490€/mois", description: "Idéal pour les petites entreprises et les indépendants" },
    "Pro": { price: "890€/mois", description: "Solution complète pour les entreprises en croissance" },
    "Premium": { price: "1490€/mois", description: "Performance maximale pour les grandes entreprises" },
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] p-0 overflow-hidden">
        <div className="bg-gradient-to-r from-kheops-gold to-kheops-salmon p-6 text-white">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">
              Demande d'information
            </DialogTitle>
            <DialogDescription className="text-white/90 mt-2">
              <div className="flex items-center text-xl font-semibold mb-1">
                Forfait {selectedPlan}
              </div>
              <div className="flex items-baseline">
                <span className="text-2xl font-bold mr-2">
                  {planInfo[selectedPlan].price}
                </span>
                <span className="opacity-90">
                  {planInfo[selectedPlan].description}
                </span>
              </div>
            </DialogDescription>
          </DialogHeader>
        </div>
        
        <div className="p-6">
          <p className="text-gray-600 mb-6">
            Complétez le formulaire ci-dessous pour recevoir plus d'informations ou souscrire au forfait sélectionné.
            Les champs marqués d'un <span className="text-destructive">*</span> sont obligatoires.
          </p>
          
          <PricingContactForm 
            initialPlan={selectedPlan} 
            onSuccess={() => {
              // Close dialog after a delay to show success message
              setTimeout(() => onOpenChange(false), 3000);
            }}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PricingFormDialog;
