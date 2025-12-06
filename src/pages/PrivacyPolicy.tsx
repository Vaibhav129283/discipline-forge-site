import { useEffect } from "react";
import { Mail, MapPin, Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = "Privacy Policy — Discipline Fitness Coach";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "The Discipline Fitness Coach respects your privacy and is committed to protecting your personal information in accordance with the Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs).");
    }
  }, []);

  const handleDownload = () => {
    window.open("/docs/privacy-policy.pdf", "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-16">
        <div className="container mx-auto max-w-3xl px-4">
          {/* Header */}
          <header className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold uppercase tracking-wider text-foreground md:text-5xl">
              PRIVACY POLICY
            </h1>
            <p className="mb-2 text-lg text-primary">The Discipline Fitness Coach</p>
            <div className="space-y-1 text-sm text-muted-foreground">
              <p><strong>Effective Date:</strong> 23 October 2025</p>
              <p><strong>Jurisdiction:</strong> Queensland, Australia</p>
            </div>
          </header>

          {/* Content */}
          <article className="space-y-8 text-sm leading-relaxed text-foreground">
            <section>
              <h2 className="mb-3 text-xl font-semibold text-primary">1. INTRODUCTION</h2>
              <p>
                The Discipline Fitness Coach ("we", "our", "us") respects your privacy and is committed to protecting your personal information in accordance with the Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs).
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-primary">2. INFORMATION WE COLLECT</h2>
              <p>
                We collect personal information such as your name, contact details, health and fitness data, payment information, and any information you voluntarily provide through our website, forms, or third-party platforms like Wix, PTminder, and Ezidebit.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-primary">3. NDIS PARTICIPANT INFORMATION</h2>
              <p>
                For clients receiving services under the National Disability Insurance Scheme (NDIS), we collect and handle personal and sensitive information in accordance with the Privacy Act 1988 (Cth), the NDIS Act 2013, and the NDIS Code of Conduct. This includes information about your health, disability, and support needs. We use this information solely to provide appropriate services, manage your Service Agreement, coordinate supports, and meet our reporting and compliance obligations under the NDIS. We will not share your information with any third parties (including support coordinators, plan managers, or allied health providers) without your explicit consent unless required by law or to prevent serious harm.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-primary">4. HOW WE USE YOUR INFORMATION</h2>
              <p>
                We use your information to provide coaching, training, scheduling, billing, and communication services, and to comply with NDIS and legal obligations.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-primary">5. SHARING YOUR INFORMATION</h2>
              <p>
                We do not share your personal data with third parties except where required to deliver our services, comply with legal obligations, or with your explicit consent.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-primary">6. CHILDREN'S PRIVACY</h2>
              <p>
                Our Services are not directed at children under 13 years of age. However, we may provide services to children under the age of 13 with the express consent of a parent or legal guardian. We do not knowingly collect Personal Information from minors without parental or guardian permission. If you believe a child has provided us with Personal Information without consent, please contact us immediately, and we will promptly delete such information from our records.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-primary">7. DATA SECURITY</h2>
              <p>
                We store data securely using industry-standard encryption and access controls to prevent unauthorised access, alteration, or disclosure.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-primary">8. YOUR RIGHTS</h2>
              <p>
                You have the right to access, correct, or request deletion of your personal information. You may also withdraw consent at any time.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-primary">9. THIRD-PARTY SERVICES</h2>
              <p>
                We use third-party systems such as Wix (website and CRM), PTminder (client management), Ezidebit (payment processing), and Google Forms (check-ins). Each provider has its own privacy and data security measures, and we ensure all comply with Australian data protection standards.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-primary">10. CONTACT</h2>
              <p>
                If you have any privacy-related questions or complaints, please contact:
              </p>
            </section>
          </article>

          {/* Contact Box */}
          <div className="mt-12 rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-elevated)]">
            <h3 className="mb-4 text-lg font-semibold text-foreground">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:info@disciplinefitness.com.au" className="hover:text-primary">
                  info@disciplinefitness.com.au
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Browns Plains, Queensland</span>
              </div>
            </div>
          </div>

          {/* Download Button */}
          <div className="mt-8 flex justify-center">
            <Button onClick={handleDownload} variant="outline" className="gap-2">
              <Download className="h-4 w-4" />
              Download PDF
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
