
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
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Demande d'information 
            <span className="text-kheops-gold ml-2">
              {selectedPlan === "Starter" && "Forfait Starter"}
              {selectedPlan === "Pro" && "Forfait Pro"}
              {selectedPlan === "Premium" && "Forfait Premium"}
            </span>
          </DialogTitle>
          <DialogDescription className="text-gray-600">
            Complétez le formulaire ci-dessous pour recevoir plus d'informations ou souscrire au forfait sélectionné.
          </DialogDescription>
        </DialogHeader>
        <PricingContactForm 
          initialPlan={selectedPlan} 
          onSuccess={() => {
            // Close dialog after a delay to show success message
            setTimeout(() => onOpenChange(false), 3000);
          }}
        />
      </DialogContent>
    </Dialog>
  );
};

export default PricingFormDialog;
