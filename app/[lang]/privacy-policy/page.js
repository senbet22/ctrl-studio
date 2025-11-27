import { getDictionary } from "../../dictionaries";

export default async function PrivacyPolicy({ params: { lang } }) {
  const dictionary = await getDictionary(lang);
  const { privacyPolicy } = dictionary;

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="w-full max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl text-primary font-bold mb-6 text-center">
          {privacyPolicy.title}
        </h1>

        <p className="text-center text-secondary mb-8">
          Last updated: 28/11/2025
        </p>

        <div className="space-y-6 text-lg leading-relaxed text-foreground/80">
          <p>
            This privacy notice explains how <strong>Ctrl Studio</strong>{" "}
            collects and uses personal data when you sign up for our mailing
            list.
          </p>

          <h2 className="text-2xl font-semibold mt-8">
            1. What data we collect and why
          </h2>
          <p>When you sign up to receive updates from us, we collect:</p>
          <ul className="list-disc list-inside ml-4">
            <li>
              <strong className=" text-primary/60">Name</strong> – used to
              address you in our emails.
            </li>
            <li>
              <strong className=" text-primary/60">Email address</strong> – used
              to send you updates and invitations.
            </li>
          </ul>
          <p>
            <strong className=" text-primary/60">Purpose:</strong> We use this
            information to send you news about the development of our game and
            potential invitations to future playtesting (beta testing).
          </p>

          <h2 className="text-2xl font-semibold mt-8">2. Legal basis</h2>
          <p>
            We process your personal data based on your <strong>consent</strong>
            . You provide this consent by voluntarily checking the sign-up box
            and clicking “Sign up” on our website.
          </p>

          <h2 className="text-2xl font-semibold mt-8">
            3. Who we share your data with
          </h2>
          <p>We do not sell your information to anyone.</p>
          <p>
            We use an external service provider to send emails (
            <strong className=" text-primary/60">Mailtrap</strong>). Your name
            and email address are stored securely by this provider solely so we
            can deliver our newsletters.
          </p>

          <h2 className="text-2xl font-semibold mt-8">
            4. Storage and deletion
          </h2>
          <p>
            We keep your data for as long as you want to receive emails from us.
          </p>
          <p>You can withdraw your consent at any time by:</p>
          <ul className="list-disc list-inside ml-4">
            <li>
              Clicking “unsubscribe” at the bottom of any email we send, or by
              Contacting us directly at <strong>ctrlstudio.as@gmail.com</strong>
            </li>
          </ul>
          <p>
            When you unsubscribe, your data is removed from our mailing list.
          </p>

          <h2 className="text-2xl font-semibold mt-8">5. Contact</h2>
          <p>
            The data controller is <strong>Ctrl Studio AS</strong>. If you have
            questions about how we handle your data, or if you want to request
            access, correction, or deletion, you can contact us at:
          </p>
          <p>
            <strong className=" text-primary/60">
              ctrlstudio.as@gmail.com
            </strong>
          </p>
        </div>
      </div>
    </main>
  );
}
