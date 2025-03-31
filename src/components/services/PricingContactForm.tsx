
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2, Check, Lock, Info } from "lucide-react";
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

// Form validation schema
const formSchema = z.object({
  firstName: z.string().min(2, "Le prénom doit contenir au moins 2 caractères"),
  lastName: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Veuillez saisir une adresse email valide"),
  phone: z.string().optional()
    .refine(val => !val || /^[0-9]{6,15}$/.test(val), {
      message: "Le numéro de téléphone doit contenir entre 6 et 15 chiffres"
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

const PricingContactForm: React.FC<PricingContactFormProps> = ({ 
  initialPlan, 
  onSuccess 
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formKey, setFormKey] = useState(Date.now());

  // Define all countries with their codes, names and prefixes
  const countries = [
    { code: "FR", name: "France", prefix: "+33", flag: "🇫🇷" },
    { code: "BE", name: "Belgique", prefix: "+32", flag: "🇧🇪" },
    { code: "CH", name: "Suisse", prefix: "+41", flag: "🇨🇭" },
    { code: "CA", name: "Canada", prefix: "+1", flag: "🇨🇦" },
    { code: "LU", name: "Luxembourg", prefix: "+352", flag: "🇱🇺" },
    { code: "MC", name: "Monaco", prefix: "+377", flag: "🇲🇨" },
    { code: "MA", name: "Maroc", prefix: "+212", flag: "🇲🇦" },
    { code: "DZ", name: "Algérie", prefix: "+213", flag: "🇩🇿" },
    { code: "TN", name: "Tunisie", prefix: "+216", flag: "🇹🇳" },
    { code: "SN", name: "Sénégal", prefix: "+221", flag: "🇸🇳" },
    { code: "DE", name: "Allemagne", prefix: "+49", flag: "🇩🇪" },
    { code: "ES", name: "Espagne", prefix: "+34", flag: "🇪🇸" },
    { code: "IT", name: "Italie", prefix: "+39", flag: "🇮🇹" },
    { code: "GB", name: "Royaume-Uni", prefix: "+44", flag: "🇬🇧" },
    { code: "PT", name: "Portugal", prefix: "+351", flag: "🇵🇹" },
    { code: "US", name: "États-Unis", prefix: "+1", flag: "🇺🇸" },
    { code: "AU", name: "Australie", prefix: "+61", flag: "🇦🇺" },
    { code: "NZ", name: "Nouvelle-Zélande", prefix: "+64", flag: "🇳🇿" },
    { code: "JP", name: "Japon", prefix: "+81", flag: "🇯🇵" },
    { code: "CN", name: "Chine", prefix: "+86", flag: "🇨🇳" },
  ];

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
  });

  // Try to load form data from localStorage on initial render
  useEffect(() => {
    const savedData = localStorage.getItem("pricingFormData");
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        // Ensure saved plan is overridden by initialPlan
        parsedData.selectedPlan = initialPlan;
        form.reset(parsedData);
      } catch (e) {
        console.error("Error loading saved form data:", e);
      }
    }
  }, [initialPlan, form]);

  // Save form data to localStorage when it changes
  useEffect(() => {
    const subscription = form.watch((data) => {
      localStorage.setItem("pricingFormData", JSON.stringify(data));
    });
    return () => subscription.unsubscribe();
  }, [form]);

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // Prepare the data with country info for better readability in Formspree
      const selectedCountry = countries.find(c => c.code === data.country);
      const formattedData = {
        ...data,
        countryInfo: selectedCountry ? `${selectedCountry.name} (${selectedCountry.prefix})` : data.country,
        formattedPhone: data.phone ? `${selectedCountry?.prefix || ""} ${data.phone}` : "Non renseigné",
        pricingPlan: `${data.selectedPlan} ${
          data.selectedPlan === "Starter" ? "(490€/mois)" : 
          data.selectedPlan === "Pro" ? "(890€/mois)" : 
          "(1490€/mois)"
        }`,
        submittedAt: new Date().toISOString(),
      };

      const response = await fetch("https://formspree.io/f/xwplbrgv", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formattedData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        // Clear form data from localStorage after successful submission
        localStorage.removeItem("pricingFormData");
        form.reset();
        setFormKey(Date.now()); // Reset form instance
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

  const selectedCountry = countries.find(c => c.code === form.watch("country"));
  const countryPrefix = selectedCountry?.prefix || "";

  // Plan pricing map
  const planPrices = {
    "Starter": "490€/mois",
    "Pro": "890€/mois",
    "Premium": "1490€/mois",
  };

  // If already submitted, show success state
  if (isSubmitted) {
    return (
      <div className="text-center py-10 px-6 animate-fade-in">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Check className="text-green-600" size={32} />
        </div>
        <h3 className="text-2xl font-bold mb-2">Demande envoyée avec succès !</h3>
        <p className="text-gray-600 mb-6">
          Merci pour votre intérêt. Notre équipe vous contactera dans les plus brefs délais.
        </p>
        <Button 
          onClick={() => {
            setIsSubmitted(false);
            setFormKey(Date.now());
          }}
          className="bg-kheops-gold hover:bg-kheops-salmon transition-all"
        >
          Envoyer une nouvelle demande
        </Button>
      </div>
    );
  }

  return (
    <Form {...form} key={formKey}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center">
                  Prénom
                  <span className="text-destructive ml-1">*</span>
                </FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Entrez votre prénom" 
                    {...field} 
                    className="focus-visible:ring-kheops-gold"
                  />
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
                <FormLabel className="flex items-center">
                  Nom
                  <span className="text-destructive ml-1">*</span>
                </FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Entrez votre nom" 
                    {...field} 
                    className="focus-visible:ring-kheops-gold"
                  />
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
              <FormLabel className="flex items-center">
                Adresse email
                <span className="text-destructive ml-1">*</span>
              </FormLabel>
              <FormControl>
                <Input 
                  type="email" 
                  placeholder="exemple@email.com" 
                  {...field} 
                  className="focus-visible:ring-kheops-gold"
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
                    <SelectTrigger className="focus:ring-kheops-gold">
                      <SelectValue placeholder="Sélectionnez votre pays" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="max-h-[300px]">
                    {countries.map((country) => (
                      <SelectItem key={country.code} value={country.code}>
                        <span className="flex items-center">
                          <span className="mr-2">{country.flag}</span>
                          {country.name} ({country.prefix})
                        </span>
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
                    {countryPrefix}
                  </div>
                  <FormControl>
                    <Input 
                      className="rounded-l-none focus-visible:ring-kheops-gold" 
                      type="tel"
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
            <FormItem className="space-y-3 bg-gray-50 p-4 rounded-md border">
              <FormLabel className="flex items-center font-medium">
                Forfait sélectionné
                <span className="text-destructive ml-1">*</span>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="ml-2 cursor-help">
                        <Info className="h-4 w-4 text-gray-500" />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Ce forfait a été présélectionné selon votre choix initial</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </FormLabel>
              <div className="flex items-center space-x-2 bg-white p-3 rounded border">
                <div className="flex items-center justify-center h-5 w-5 rounded-full bg-kheops-gold text-white">
                  <Check className="h-3 w-3" />
                </div>
                <div className="flex-1">
                  {field.value} ({planPrices[field.value as keyof typeof planPrices]})
                </div>
                <Lock className="h-4 w-4 text-gray-400" />
                <input type="hidden" {...field} />
              </div>
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
                  className="resize-none min-h-[120px] focus-visible:ring-kheops-gold"
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
            className="w-full bg-kheops-gold hover:bg-kheops-salmon text-white transition-all duration-300 relative overflow-hidden group"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Envoi en cours...
              </>
            ) : (
              <>
                <span className="relative z-10 group-hover:translate-y-0 transition-transform">
                  Envoyer ma demande
                </span>
                <span className="absolute inset-0 bg-kheops-salmon transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
              </>
            )}
          </Button>
          <div className="text-center mt-4">
            <a href="/contact" className="text-kheops-gold hover:text-kheops-salmon text-sm flex justify-center items-center">
              <Info className="mr-1 h-4 w-4" />
              Questions ? Contactez-nous directement
            </a>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default PricingContactForm;
