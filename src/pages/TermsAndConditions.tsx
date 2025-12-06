import { useEffect } from "react";
import { Download, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsAndConditions = () => {
  useEffect(() => {
    document.title = "Terms & Conditions — Discipline Fitness Coach";
  }, []);

  const handleDownload = () => {
    window.open("/docs/terms-and-conditions.pdf", "_blank");
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-16">
        <div className="container mx-auto max-w-3xl px-4">
          {/* Header */}
          <header className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold uppercase tracking-wider text-foreground md:text-5xl">
              Terms and Conditions
            </h1>
            <p className="mb-2 text-lg text-primary">The Discipline Fitness Coach</p>
            <p className="text-sm text-muted-foreground">ABN: 79 669 022 634</p>
            <div className="mt-4 space-y-1 text-sm text-muted-foreground">
              <p><strong>Effective Date:</strong> 23rd of October, 2025</p>
              <p><strong>Jurisdiction:</strong> Queensland, Australia</p>
            </div>
          </header>

          {/* Action Buttons */}
          <div className="mb-8 flex justify-center gap-4">
            <Button onClick={handlePrint} variant="outline" className="gap-2">
              <Printer className="h-4 w-4" />
              Print
            </Button>
            <Button onClick={handleDownload} variant="outline" className="gap-2">
              <Download className="h-4 w-4" />
              Download PDF
            </Button>
          </div>

          {/* Content */}
          <article className="space-y-8 text-sm leading-relaxed text-foreground">
            <section>
              <h2 className="mb-3 text-xl font-semibold text-primary">1. INTRODUCTION</h2>
              <p>
                These Terms and Conditions ("Terms") govern your use of the personal training, fitness coaching, nutrition guidance, NLP and mindset coaching, and NDIS support services ("Services") provided by The Discipline Fitness Coach, operated by Thomas Farrell ("we", "our", "us"). By booking, attending, or paying for our Services, you agree to be bound by these Terms. Please read them carefully.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-primary">2. SERVICES OFFERED</h2>
              <p>We provide a range of fitness and wellness services, including but not limited to:</p>
              <ul className="mt-2 list-inside list-disc space-y-1 pl-4">
                <li>Personal Training (in-person and online)</li>
                <li>Nutrition Coaching</li>
                <li>NLP & Mindset Coaching</li>
                <li>NDIS-Funded Fitness and Capacity Building Support</li>
                <li>Group Training and Workshops</li>
              </ul>
              <p className="mt-2">
                All services are tailored to your individual needs, goals, and any medical or physical considerations disclosed during your initial consultation.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-primary">3. ELIGIBILITY</h2>
              <p>
                You must be at least 18 years of age to engage our services independently. Clients under 18 may participate with the written consent of a parent or legal guardian, who will be responsible for the client and these Terms.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-primary">4. HEALTH DECLARATION</h2>
              <p>
                Before commencing any fitness program, you must complete a Pre-Exercise Questionnaire (PEQ) and/or provide relevant medical clearance if required. You agree to disclose any pre-existing health conditions, injuries, or limitations that may affect your ability to participate safely in exercise. Failure to disclose relevant health information may result in injury for which we are not liable.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-primary">5. BOOKINGS & SCHEDULING</h2>
              <p>
                Sessions must be booked in advance via our online booking system (PTminder), phone, or email. We will endeavour to accommodate your preferred times but cannot guarantee availability. Confirmation of a booking constitutes acceptance of these Terms.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-primary">6. CANCELLATION & RESCHEDULING POLICY</h2>
              <ul className="list-inside list-disc space-y-2 pl-4">
                <li>Sessions may be cancelled or rescheduled with at least 24 hours' notice without penalty.</li>
                <li>Cancellations with less than 24 hours' notice will incur the full session fee.</li>
                <li>Repeated no-shows may result in suspension or termination of service.</li>
                <li>We reserve the right to reschedule sessions in case of unforeseen circumstances, including illness or emergency.</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-primary">7. PAYMENT TERMS</h2>
              <ul className="list-inside list-disc space-y-2 pl-4">
                <li>Fees are payable in advance unless otherwise agreed.</li>
                <li>Payment is accepted via direct debit (Ezidebit), bank transfer, or credit/debit card.</li>
                <li>All prices are in Australian Dollars (AUD) and inclusive of GST where applicable.</li>
                <li>Non-payment may result in suspension of services and referral to a collection agency if unresolved.</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-primary">8. REFUND POLICY</h2>
              <p>
                Refunds are not generally provided for completed or attended sessions. Refunds for unused sessions may be considered on a case-by-case basis and at our discretion. Package sessions have an expiry of 3 months unless otherwise stated.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-primary">9. NDIS SERVICES</h2>
              <p>
                For clients receiving NDIS-funded services, additional terms apply. Services are delivered in accordance with the NDIS Act 2013, the NDIS Code of Conduct, and your approved plan and Service Agreement.
              </p>
              <ul className="mt-2 list-inside list-disc space-y-2 pl-4">
                <li>Services are billed in line with the NDIS Price Guide and Support Catalogue.</li>
                <li>A signed Service Agreement is required before services commence.</li>
                <li>Cancellations must comply with NDIS short-notice cancellation policy (2 clear business days).</li>
                <li>We will invoice your plan manager, support coordinator, or the NDIA directly (for agency-managed plans), as applicable.</li>
                <li>In the event your NDIS funding is reduced, exhausted, or discontinued, we will work with you to discuss alternative payment arrangements.</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-primary">10. PRIVACY & DATA PROTECTION</h2>
              <p>
                We collect and store personal information in accordance with the Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs). For full details, please refer to our Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-primary">11. INTELLECTUAL PROPERTY</h2>
              <p>
                All training programs, resources, videos, and written materials provided by The Discipline Fitness Coach are protected by copyright. You may not reproduce, distribute, or use these materials for commercial purposes without prior written consent.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-primary">12. LIMITATION OF LIABILITY</h2>
              <p>
                To the fullest extent permitted by law, The Discipline Fitness Coach will not be liable for any direct, indirect, incidental, or consequential damages arising from your participation in our Services. You agree to participate in all activities at your own risk. We recommend obtaining appropriate personal insurance.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-primary">13. INDEMNITY</h2>
              <p>
                You agree to indemnify and hold harmless The Discipline Fitness Coach, its employees, and contractors from any claims, damages, or expenses arising from your breach of these Terms, negligence, or participation in our Services.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-primary">14. CODE OF CONDUCT</h2>
              <p>We expect all clients to:</p>
              <ul className="mt-2 list-inside list-disc space-y-1 pl-4">
                <li>Treat staff and other clients with respect and courtesy.</li>
                <li>Arrive on time for scheduled sessions.</li>
                <li>Maintain appropriate hygiene and dress suitably for exercise.</li>
                <li>Refrain from using foul language, discrimination, or abusive behaviour.</li>
              </ul>
              <p className="mt-2">
                Breach of this code may result in immediate termination of services without refund.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-primary">15. TERMINATION</h2>
              <p>
                Either party may terminate the service agreement with written notice. We reserve the right to terminate services at any time if Terms are breached, conduct is inappropriate, or payment obligations are not met.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-primary">16. AMENDMENTS</h2>
              <p>
                We may update these Terms from time to time. You will be notified of any significant changes in writing or via email. Continued use of our services constitutes acceptance of the revised Terms.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-primary">17. GOVERNING LAW</h2>
              <p>
                These Terms are governed by the laws of Queensland, Australia. Any disputes arising under these Terms will be subject to the exclusive jurisdiction of the courts of Queensland.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-primary">18. COMPLAINTS & FEEDBACK</h2>
              <p>
                We welcome feedback and are committed to resolving complaints promptly. Please contact us at info@disciplinefitness.com.au to raise any concerns.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold text-primary">19. CONTACT INFORMATION</h2>
              <ul className="space-y-1 pl-4">
                <li><strong>Business Name:</strong> The Discipline Fitness Coach</li>
                <li><strong>ABN:</strong> 79 669 022 634</li>
                <li><strong>Email:</strong> info@disciplinefitness.com.au</li>
                <li><strong>Location:</strong> Browns Plains, Queensland</li>
              </ul>
            </section>

            <section className="rounded-2xl border border-border bg-card p-6">
              <h2 className="mb-3 text-xl font-semibold text-primary">SUPPORT SERVICES</h2>
              <p>For any questions about our Terms and Conditions, please contact us:</p>
              <ul className="mt-2 space-y-1 pl-4">
                <li><strong>Email:</strong> info@disciplinefitness.com.au</li>
                <li><strong>Phone:</strong> Available upon request</li>
              </ul>
            </section>

            <section className="rounded-2xl border border-border bg-card p-6">
              <h2 className="mb-3 text-xl font-semibold text-primary">DOCUMENT CONTROL</h2>
              <ul className="space-y-1 pl-4">
                <li><strong>Version:</strong> 1.0</li>
                <li><strong>Effective Date:</strong> 23rd October 2025</li>
                <li><strong>Next Review Date:</strong> 23rd October 2026</li>
              </ul>
            </section>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;
