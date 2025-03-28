
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Check } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const ContactForm = () => {
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      toast({
        title: "Message envoyé !",
        description: "Nous vous répondrons dans les meilleurs délais.",
        variant: "default",
      });
    }, 1500);
  };

  return (
    <div className="bg-white rounded-xl shadow-xl p-8">
      <h3 className="text-2xl font-bold mb-6">Envoyez-nous un message</h3>
      
      {formSubmitted ? (
        <SuccessMessage onReset={() => setFormSubmitted(false)} />
      ) : (
        <ContactFormFields 
          formState={formState}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          isSubmitting={isSubmitting}
        />
      )}
    </div>
  );
};

const SuccessMessage = ({ onReset }: { onReset: () => void }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center py-12"
    >
      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <Check size={40} className="text-green-600" />
      </div>
      <h4 className="text-2xl font-bold mb-2">Message envoyé !</h4>
      <p className="text-gray-600 mb-6">
        Merci de nous avoir contacté. Notre équipe vous répondra dans les meilleurs délais.
      </p>
      <Button 
        className="bg-kheops-gold hover:bg-kheops-salmon text-white"
        onClick={onReset}
      >
        Envoyer un autre message
      </Button>
    </motion.div>
  );
};

const ContactFormFields = ({ 
  formState, 
  handleChange, 
  handleSubmit, 
  isSubmitting 
}: { 
  formState: {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
  isSubmitting: boolean;
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <FormField
          id="name"
          label="Nom complet"
          placeholder="John Doe"
          value={formState.name}
          onChange={handleChange}
          required
        />
        <FormField
          id="email"
          label="Email"
          placeholder="john@example.com"
          type="email"
          value={formState.email}
          onChange={handleChange}
          required
        />
        <FormField
          id="phone"
          label="Téléphone"
          placeholder="+33 6 12 34 56 78"
          value={formState.phone}
          onChange={handleChange}
        />
        <FormField
          id="subject"
          label="Sujet"
          placeholder="Votre sujet"
          value={formState.subject}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="space-y-2 mb-6">
        <Label htmlFor="message" className="text-gray-700">Message</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Votre message..."
          className="h-40 border-gray-300 focus:border-kheops-gold focus:ring-kheops-gold"
          required
          value={formState.message}
          onChange={handleChange}
        />
      </div>
      
      <SubmitButton isSubmitting={isSubmitting} />
    </form>
  );
};

const FormField = ({ 
  id, 
  label, 
  placeholder, 
  type = "text", 
  value, 
  onChange, 
  required = false 
}: { 
  id: string; 
  label: string; 
  placeholder: string; 
  type?: string; 
  value: string; 
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; 
  required?: boolean;
}) => {
  return (
    <div className="space-y-2">
      <Label htmlFor={id} className="text-gray-700">{label}</Label>
      <Input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        className="border-gray-300 focus:border-kheops-gold focus:ring-kheops-gold"
        required={required}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

const SubmitButton = ({ isSubmitting }: { isSubmitting: boolean }) => {
  return (
    <Button 
      type="submit" 
      className="w-full bg-kheops-gold hover:bg-kheops-salmon text-white flex items-center justify-center"
      disabled={isSubmitting}
    >
      {isSubmitting ? (
        <span className="flex items-center">
          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Envoi en cours...
        </span>
      ) : (
        <span className="flex items-center">
          Envoyer le message
          <Send size={16} className="ml-2" />
        </span>
      )}
    </Button>
  );
};

export default ContactForm;
