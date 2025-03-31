
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2, Check } from "lucide-react";
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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

// Form validation schema
const formSchema = z.object({
  firstName: z.string().min(2, "Le prénom doit contenir au moins 2 caractères"),
  lastName: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Veuillez saisir une adresse email valide"),
  phone: z.string().optional(),
  selectedPlan: z.enum(["Starter", "Pro", "Premium"]),
  message: z.string().optional(),
  country: z.string().optional(),
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

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://formspree.io/f/xwplbrgv", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
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

  const countries = [
    { code: "FR", name: "France", prefix: "+33" },
    { code: "BE", name: "Belgique", prefix: "+32" },
    { code: "CH", name: "Suisse", prefix: "+41" },
    { code: "CA", name: "Canada", prefix: "+1" },
    { code: "LU", name: "Luxembourg", prefix: "+352" },
    { code: "MC", name: "Monaco", prefix: "+377" },
    { code: "MA", name: "Maroc", prefix: "+212" },
    { code: "DZ", name: "Algérie", prefix: "+213" },
    { code: "TN", name: "Tunisie", prefix: "+216" },
    { code: "SN", name: "Sénégal", prefix: "+221" },
  ];

  const selectedCountry = form.watch("country");
  const countryPrefix = countries.find(c => c.code === selectedCountry)?.prefix || "";

  // If already submitted, show success state
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
                <FormLabel>Prénom*</FormLabel>
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
                <FormLabel>Nom*</FormLabel>
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
              <FormLabel>Adresse email*</FormLabel>
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
                  <SelectContent>
                    {countries.map((country) => (
                      <SelectItem key={country.code} value={country.code}>
                        {country.name} ({country.prefix})
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
                  <div className="flex items-center bg-gray-100 px-3 rounded-l-md border border-r-0 border-input">
                    {countryPrefix}
                  </div>
                  <FormControl>
                    <Input 
                      className="rounded-l-none" 
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
            <FormItem className="space-y-3">
              <FormLabel>Forfait choisi*</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Starter" id="starter" />
                    <label
                      htmlFor="starter"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Forfait Starter (490€/mois)
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Pro" id="pro" />
                    <label
                      htmlFor="pro"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Forfait Pro (890€/mois)
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Premium" id="premium" />
                    <label
                      htmlFor="premium"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Forfait Premium (1490€/mois)
                    </label>
                  </div>
                </RadioGroup>
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
            className="w-full bg-kheops-gold hover:bg-kheops-salmon text-white transition-all"
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
