
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div>
      <div className="bg-white rounded-xl shadow-xl p-8 mb-8">
        <h3 className="text-2xl font-bold mb-6">Informations de contact</h3>
        <div className="space-y-6">
          <ContactInfoItem 
            icon={<MapPin className="h-5 w-5 text-kheops-gold" />}
            title="Adresse"
            text="123 Avenue du Digital, 75000 Paris, France"
          />
          <ContactInfoItem 
            icon={<Phone className="h-5 w-5 text-kheops-gold" />}
            title="Téléphone"
            text="+33 1 23 45 67 89"
          />
          <ContactInfoItem 
            icon={<Mail className="h-5 w-5 text-kheops-gold" />}
            title="Email"
            text="contact@kheops-set.com"
          />
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-xl p-8">
        <h3 className="text-2xl font-bold mb-6">Horaires d'ouverture</h3>
        <div className="space-y-3">
          <OpeningHoursItem day="Lundi - Vendredi" hours="9:00 - 18:00" />
          <OpeningHoursItem day="Samedi" hours="10:00 - 14:00" />
          <OpeningHoursItem day="Dimanche" hours="Fermé" closed />
        </div>
      </div>
    </div>
  );
};

const ContactInfoItem = ({ 
  icon, 
  title, 
  text 
}: { 
  icon: React.ReactNode; 
  title: string; 
  text: string;
}) => {
  return (
    <div className="flex items-start">
      <div className="w-12 h-12 bg-kheops-gold bg-opacity-10 rounded-full flex items-center justify-center mr-4">
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-gray-800">{title}</h4>
        <p className="text-gray-600">{text}</p>
      </div>
    </div>
  );
};

const OpeningHoursItem = ({ 
  day, 
  hours, 
  closed = false 
}: { 
  day: string; 
  hours: string; 
  closed?: boolean;
}) => {
  return (
    <div className="flex justify-between">
      <span className="text-gray-600">{day}</span>
      <span className={`font-semibold ${closed ? 'text-kheops-salmon' : ''}`}>
        {hours}
      </span>
    </div>
  );
};

export default ContactInfo;
