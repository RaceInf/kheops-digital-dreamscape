
import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import { ShoppingBag, CreditCard, Truck, RotateCcw, Shield, HelpCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const TermsOfSale = () => {
  useEffect(() => {
    // Set page title
    document.title = "Conditions Générales de Vente | KHEOPS SET DIGITAL";
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  const faqItems = [
    {
      question: "Comment puis-je payer mes achats ?",
      answer: "Nous acceptons plusieurs méthodes de paiement, notamment par carte bancaire, mobile money, et virement bancaire. Tous les paiements sont sécurisés."
    },
    {
      question: "Quelle est la politique de remboursement pour les ebooks ?",
      answer: "En raison de la nature numérique de nos produits, les ebooks ne sont pas remboursables une fois téléchargés. Cependant, si vous rencontrez des problèmes techniques, veuillez nous contacter."
    },
    {
      question: "Les prix affichés incluent-ils la TVA ?",
      answer: "Oui, tous les prix affichés sur notre site incluent la TVA applicable."
    },
    {
      question: "Combien de temps ai-je accès aux ebooks après l'achat ?",
      answer: "Une fois achetés, vous avez un accès illimité dans le temps à vos ebooks."
    },
    {
      question: "Puis-je partager mes ebooks avec d'autres personnes ?",
      answer: "Non, nos ebooks sont protégés par des droits d'auteur et sont destinés à un usage personnel uniquement."
    }
  ];

  return (
    <main className="min-h-screen w-full">
      <Navbar />
      
      <div className="pt-32 pb-20 bg-gradient-to-b from-white to-kheops-lightGray">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              Conditions Générales de <span className="text-kheops-gold">Vente</span>
            </h1>
            
            <div className="bg-white p-6 rounded-xl shadow-sm mb-10">
              <p className="text-gray-700">
                Les présentes conditions générales de vente (CGV) définissent les droits et obligations de KHEOPS SET DIGITAL et de ses clients dans le cadre de la vente de produits et services digitaux. Veuillez les lire attentivement avant tout achat.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-10">
              {[
                { icon: ShoppingBag, text: "Commande" },
                { icon: CreditCard, text: "Paiement" },
                { icon: Truck, text: "Livraison" },
                { icon: RotateCcw, text: "Retours" },
                { icon: Shield, text: "Garantie" },
                { icon: HelpCircle, text: "Support" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-white p-4 rounded-xl shadow-sm flex flex-col items-center text-center"
                >
                  <item.icon className="text-kheops-salmon mb-2" size={24} />
                  <p className="text-xs md:text-sm font-medium">{item.text}</p>
                </motion.div>
              ))}
            </div>
            
            <div className="space-y-8 text-gray-700 mb-12">
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-kheops-gold">1. Préambule</h2>
                <p>
                  Les présentes CGV sont conclues entre la société KHEOPS SET DIGITAL, SARL au capital de 10 000 000 FCFA, immatriculée au RCCM sous le numéro SN-DKR-2020-B-12345, dont le siège social est situé 123 Avenue du Digital, Dakar, Sénégal (ci-après "KHEOPS SET DIGITAL") et toute personne physique ou morale souhaitant procéder à un achat via le site Internet kheops-set.com (ci-après "le Client").
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-kheops-gold">2. Produits et services</h2>
                <p className="mb-4">
                  KHEOPS SET DIGITAL commercialise des produits et services digitaux, notamment des ebooks, formations en ligne, et prestations de services en communication digitale.
                </p>
                <p>
                  Les offres de produits et services sont valables tant qu'elles sont visibles sur le site, dans la limite des stocks disponibles. KHEOPS SET DIGITAL se réserve le droit de modifier l'assortiment des produits et services proposés à la vente à tout moment.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-kheops-gold">3. Prix</h2>
                <p className="mb-4">
                  Les prix des produits et services sont indiqués en FCFA toutes taxes comprises (TTC). KHEOPS SET DIGITAL se réserve le droit de modifier ses prix à tout moment, étant entendu que les produits et services seront facturés sur la base des tarifs en vigueur au moment de la validation de la commande.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-kheops-gold">4. Commande</h2>
                <p className="mb-4">
                  Le Client peut passer commande en suivant les étapes suivantes :
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Sélection des produits et services souhaités</li>
                  <li>Validation du panier</li>
                  <li>Création d'un compte client ou identification</li>
                  <li>Validation des informations de livraison et de facturation</li>
                  <li>Choix du mode de paiement</li>
                  <li>Validation de la commande après vérification</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-kheops-gold">5. Paiement</h2>
                <p className="mb-4">
                  Le paiement s'effectue en ligne par carte bancaire, mobile money, ou virement bancaire. Les paiements par carte bancaire sont sécurisés par des protocoles de cryptage SSL.
                </p>
                <p>
                  La commande du Client sera considérée comme validée après confirmation du paiement intégral.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-kheops-gold">6. Livraison</h2>
                <p className="mb-4">
                  Pour les produits digitaux (ebooks, formations en ligne), la livraison s'effectue par email ou directement sur le compte client, immédiatement après validation du paiement.
                </p>
                <p>
                  Pour les prestations de services, les délais de livraison sont précisés dans le devis ou le bon de commande.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-kheops-gold">7. Droit de rétractation</h2>
                <p className="mb-4">
                  Conformément à la réglementation applicable, le Client dispose d'un délai de 14 jours à compter de la conclusion du contrat pour exercer son droit de rétractation, sans avoir à justifier de motifs ni à payer de pénalités.
                </p>
                <p className="mb-4">
                  Toutefois, le droit de rétractation ne peut être exercé pour les contenus numériques fournis sur un support immatériel dont l'exécution a commencé avec l'accord du Client et pour lesquels il a renoncé expressément à son droit de rétractation.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-kheops-gold">8. Garanties</h2>
                <p>
                  KHEOPS SET DIGITAL garantit que les produits et services fournis sont conformes à leur description. En cas de non-conformité, le Client peut demander le remplacement ou le remboursement du produit ou service concerné.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-kheops-gold">9. Propriété intellectuelle</h2>
                <p>
                  Tous les contenus présents sur le site kheops-set.com et dans les produits vendus (textes, images, vidéos, etc.) sont la propriété exclusive de KHEOPS SET DIGITAL ou de ses partenaires. Toute reproduction, distribution ou utilisation sans autorisation écrite préalable est strictement interdite.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-kheops-gold">10. Protection des données personnelles</h2>
                <p>
                  Les données personnelles collectées auprès du Client font l'objet d'un traitement informatique réalisé par KHEOPS SET DIGITAL. Elles sont enregistrées dans son fichier clients et sont indispensables au traitement de la commande. Ces informations et données personnelles sont également conservées à des fins de sécurité. Pour plus d'informations, veuillez consulter notre Politique de Confidentialité.
                </p>
              </section>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm mb-10">
              <h2 className="text-2xl font-semibold mb-6 text-center">Foire aux questions</h2>
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left font-medium">{item.question}</AccordionTrigger>
                    <AccordionContent className="text-gray-600">{item.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            
            <Separator className="my-8 bg-kheops-gold/30" />
            
            <p className="text-sm text-gray-500 text-center">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
            </p>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
};

export default TermsOfSale;
