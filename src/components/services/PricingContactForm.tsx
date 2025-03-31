
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2, Check, Lock } from "lucide-react";
import { toast } from "sonner";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { countriesData } from "./countriesData";

// Form validation schema
const formSchema = z.object({
  firstName: z.string().min(2, "Le prénom doit contenir au moins 2 caractères"),
  lastName: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Veuillez saisir une adresse email valide"),
  phone: z.string().optional()
    .refine(val => !val || /^\d{4,15}$/.test(val), {
      message: "Le numéro de téléphone doit contenir entre 4 et 15 chiffres"
    }),
  selectedPlan: z.enum(["Starter", "Pro", "Premium"]),
  message: z.string().optional(),
  country: z.string(),
});

type FormValues = z.infer<typeof formSchema>;

interface PricingContactFormProps {
  initialPlan: "Starter" | "Pro" | "Premium";
  onSuccess?: () => void;
}

// Map des prix pour chaque forfait
const planPrices = {
  "Starter": "490€/mois",
  "Pro": "890€/mois",
  "Premium": "1490€/mois"
};

const LOCAL_STORAGE_KEY = "pricing-form-data";

const PricingContactForm: React.FC<PricingContactFormProps> = ({ 
  initialPlan, 
  onSuccess 
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      selectedPlan: initialPlan,
      message: "",
      country: "FR",
    },
    mode: "onChange" // Active la validation en temps réel
  });

  // Charger les données du formulaire depuis le localStorage au chargement
  useEffect(() => {
    const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        // On garde le plan sélectionné par l'utilisateur, pas celui sauvegardé
        parsedData.selectedPlan = initialPlan;
        form.reset(parsedData);
      } catch (error) {
        console.error("Erreur lors du chargement des données sauvegardées:", error);
      }
    }
  }, [form, initialPlan]);

  // Sauvegarder les données du formulaire dans le localStorage à chaque changement
  useEffect(() => {
    const subscription = form.watch((value) => {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(value));
    });
    return () => subscription.unsubscribe();
  }, [form]);

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // Préparation des données pour l'envoi
      const formData = {
        ...data,
        // Ajouter l'indicatif téléphonique au numéro
        phone: data.phone ? `${countriesData.find(c => c.code === data.country)?.dial_code} ${data.phone}` : "",
        planPrice: planPrices[data.selectedPlan],
        submittedAt: new Date().toISOString()
      };

      const response = await fetch("https://formspree.io/f/xwplbrgv", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
        localStorage.removeItem(LOCAL_STORAGE_KEY); // Effacer les données sauvegardées
        if (onSuccess) onSuccess();
        toast.success("Merci ! Nous vous contacterons rapidement.");
      } else {
        throw new Error("Une erreur s'est produite lors de l'envoi du formulaire");
      }
    } catch (error) {
      toast.error("Problème technique, veuillez réessayer.");
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const selectedCountry = form.watch("country");
  const selectedCountryData = countriesData.find(c => c.code === selectedCountry);
  const countryPrefix = selectedCountryData?.dial_code || "";

  // Si déjà soumis, afficher l'état de succès
  if (isSubmitted) {
    return (
      <div className="text-center py-10 px-6">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Check className="text-green-600" size={32} />
        </div>
        <h3 className="text-2xl font-bold mb-2">Demande envoyée avec succès !</h3>
        <p className="text-gray-600 mb-6">
          Merci pour votre intérêt. Notre équipe vous contactera dans les plus brefs délais.
        </p>
        <Button 
          onClick={() => setIsSubmitted(false)}
          className="bg-kheops-gold hover:bg-kheops-salmon"
        >
          Envoyer une nouvelle demande
        </Button>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Prénom<span className="text-red-500 ml-1">*</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder="Entrez votre prénom" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Nom<span className="text-red-500 ml-1">*</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder="Entrez votre nom" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Adresse email<span className="text-red-500 ml-1">*</span>
              </FormLabel>
              <FormControl>
                <Input 
                  type="email" 
                  placeholder="exemple@email.com" 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem className="md:col-span-1">
                <FormLabel>Pays</FormLabel>
                <Select 
                  onValueChange={field.onChange} 
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Pays" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="max-h-[300px]">
                    {countriesData.map((country) => (
                      <SelectItem key={country.code} value={country.code} className="flex items-center">
                        <span className="mr-2">{country.emoji}</span>
                        {country.name} ({country.dial_code})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="md:col-span-2">
                <FormLabel>Téléphone (optionnel)</FormLabel>
                <div className="flex">
                  <div className="flex items-center bg-gray-100 px-3 rounded-l-md border border-r-0 border-input min-w-[70px] justify-center">
                    <span className="mr-1">{selectedCountryData?.emoji}</span>
                    {countryPrefix}
                  </div>
                  <FormControl>
                    <Input 
                      className="rounded-l-none" 
                      type="tel"
                      pattern="[0-9]*"
                      inputMode="numeric"
                      placeholder="Numéro de téléphone" 
                      {...field} 
                    />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="selectedPlan"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>
                Forfait sélectionné<span className="text-red-500 ml-1">*</span>
              </FormLabel>
              <FormControl>
                <div className="p-4 border border-kheops-gold rounded-md bg-kheops-lightGray">
                  <div className="flex items-center">
                    <Check className="text-kheops-gold mr-2" />
                    <span className="font-medium">Forfait {field.value} ({planPrices[field.value as keyof typeof planPrices]})</span>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Lock className="text-gray-500 ml-2 h-4 w-4" />
                        </TooltipTrigger>
                        <TooltipContent>
                          Forfait verrouillé
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message (optionnel)</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Partagez-nous plus d'informations sur votre projet ou posez-nous vos questions..."
                  className="resize-none min-h-[120px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-kheops-gold hover:bg-kheops-salmon text-white transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Envoi en cours...
              </>
            ) : (
              "Envoyer ma demande"
            )}
          </Button>
          <div className="text-center mt-4">
            <a href="/contact" className="text-kheops-gold hover:text-kheops-salmon text-sm">
              Questions ? Contactez-nous directement
            </a>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default PricingContactForm;
