import React from 'react';
import Header from '../components/header';

export default function PrivacyPolicy() {
  return (
    <main className="h-screen pb-12">
      <Header />
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-center">Privacy Policy</h1>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-8 text-center">
          Last Updated: February 2025
        </p>

        <div className="space-y-6 text-gray-800 dark:text-gray-200">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p>
              Your privacy is important to us. This Privacy Policy explains how Nomap collects, uses, and protects your personal information when you use our mobile application (&quot;App&quot;) and related services (&quot;Services&quot;).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>
                <strong>Personal Information:</strong> Name, email address, phone number, and any other details you provide.
              </li>
              <li>
                <strong>Usage Data:</strong> Information about your interactions with the App, such as log data, IP address, and device information.
              </li>
              <li>
                <strong>Location Data:</strong> If you allow location access, we may collect and use location data to enhance user experience.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Provide, maintain, and improve our App and Services.</li>
              <li>Personalize your experience.</li>
              <li>Communicate updates, promotions, and support.</li>
              <li>Ensure security and prevent fraudulent activities.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Data Sharing and Disclosure</h2>
            <p>
              We do not sell your personal information. However, we may share information:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>With third-party service providers that assist us in operating the App.</li>
              <li>To comply with legal obligations or protect rights and safety.</li>
              <li>With your consent, where applicable.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
            <p>
              We implement security measures to protect your data, but no method of transmission is 100% secure. You acknowledge and accept the inherent risks of data transmission online.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Your Rights and Choices</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Access, update, or delete your personal data.</li>
              <li>Withdraw consent for data processing where applicable.</li>
              <li>Opt out of promotional communications.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Third-Party Links</h2>
            <p>
              Our App may contain links to third-party websites. We are not responsible for their privacy practices and encourage you to review their privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Continued use of the App after changes take effect constitutes your acceptance of the revised policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at carlosalvarez1391@gmail.com.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}