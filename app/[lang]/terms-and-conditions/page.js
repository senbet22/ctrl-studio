import { getDictionary } from "../../dictionaries";

export default async function TermsAndConditions({ params: { lang } }) {
  const dictionary = await getDictionary(lang);
  const { termsAndConditions } = dictionary;

  return (
    <main className="flex min-h-screen flex-col items-center py-24">
      <div className="w-full max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-xl md:text-3xl text-primary font-bold mb-10 text-start">
          {termsAndConditions.title}
        </h1>

        <div className="flex justify-start gap-4 mb-8">
          <p className="text-foreground/70">Date created: 28/11/2025</p>
          <p className="text-secondary">Last updated: 28/11/2025</p>
        </div>

        <div className="space-y-6 text-base leading-relaxed text-foreground/80">
          <p>
            These Terms & Conditions govern your use of the website operated by{" "}
            <strong>Ctrl Studio AS</strong>. By accessing this site or signing
            up for our mailing list, you agree to the terms listed below.
          </p>

          <h2 className="text-2xl font-semibold mt-8">1. About Us</h2>
          <p>
            Ctrl Studio AS
            <br />
            Contact:{" "}
            <strong className="text-primary/60">ctrlstudio.as@gmail.com</strong>
          </p>

          <h2 className="text-2xl font-semibold mt-8">
            2. Purpose of the Service
          </h2>
          <p>
            This website allows users to sign up to receive updates about our
            game development, announcements, and potential invitations to future
            playtesting (beta testing). Access to updates or invitations is not
            guaranteed.
          </p>

          <h2 className="text-2xl font-semibold mt-8">
            3. User Responsibilities
          </h2>
          <ul className="list-disc list-inside ml-4">
            <li>You must provide accurate information when signing up.</li>
            <li>You must be at least 13 years old to join our mailing list.</li>
            <li>
              You may not misuse the website, attempt to disrupt services, or
              submit spam.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8">
            4. Intellectual Property
          </h2>
          <p>
            All content on this website—including text, images, artwork, logos,
            branding, and game-related materials—is the property of{" "}
            <strong>Ctrl Studio AS</strong>. You may not copy, modify,
            distribute, or reuse this content without written permission.
          </p>

          <h2 className="text-2xl font-semibold mt-8">
            5. Third-Party Services
          </h2>
          <p>
            We use external service providers such as{" "}
            <strong className="text-primary/60">Mailtrap</strong> to send
            emails. By signing up, you acknowledge that your information may be
            processed by these providers solely for delivering our messages.
          </p>

          <h2 className="text-2xl font-semibold mt-8">6. No Guarantees</h2>
          <p>
            The website and all information provided are offered “as is.” We do
            not guarantee availability, accuracy, or completeness of the
            content, nor eligibility for playtesting invitations.
          </p>

          <h2 className="text-2xl font-semibold mt-8">
            7. Limitation of Liability
          </h2>
          <p>
            Ctrl Studio AS is not liable for any direct or indirect damages
            resulting from the use of this website, technical issues, data loss,
            or reliance on information provided here.
          </p>

          <h2 className="text-2xl font-semibold mt-8">
            8. Removal / Termination
          </h2>
          <p>
            We reserve the right to remove users from our mailing list or
            restrict access to the site if these terms are violated or if misuse
            occurs.
          </p>

          <h2 className="text-2xl font-semibold mt-8">9. Governing Law</h2>
          <p>These Terms & Conditions are governed by Norwegian law.</p>
        </div>
      </div>
    </main>
  );
}
