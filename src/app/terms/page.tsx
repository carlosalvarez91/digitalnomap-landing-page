import React from 'react';
import Header from '../components/header';

export default function TermsAndConditions() {
  return (
    <main className="h-screen">
        <Header />
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-center">Terms and Conditions</h1>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-8 text-center">
          Last Updated: February 2025
        </p>

        <div className="space-y-6 text-gray-800 dark:text-gray-200">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p>
              Welcome to Nomap! These Terms and Conditions ("Terms") govern your use of the Nomap mobile application ("App") and any related services provided by Nomap ("Services"). By using Nomap, you agree to these Terms. If you do not agree, please do not use the App.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Eligibility</h2>
            <p>
              You must be at least 18 years old or have the consent of a legal guardian to use Nomap. By using the App, you confirm that you meet these eligibility requirements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Account Registration</h2>
            <p>
              To access certain features, you may need to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activity under your account. Nomap reserves the right to suspend or terminate accounts that violate these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Use of the App</h2>
            <p>
              You agree to use Nomap in compliance with all applicable laws and regulations. You shall not:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Use the App for any illegal or unauthorized purpose.</li>
              <li>Interfere with or disrupt the operation of the App.</li>
              <li>Attempt to gain unauthorized access to other users' accounts.</li>
              <li>Upload or share content that is false, misleading, harmful, or violates third-party rights.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Content Ownership</h2>
            <p>
              All content provided on Nomap, including text, graphics, and trademarks, is owned by Nomap or its licensors. You may not copy, distribute, or reproduce any content without prior permission. By submitting content to Nomap, you grant us a worldwide, non-exclusive, royalty-free license to use, display, and distribute your content within the App.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Third-Party Services</h2>
            <p>
              Nomap may contain links to third-party websites or services. We are not responsible for any content, policies, or practices of third-party services and encourage you to review their terms before engaging with them.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Termination</h2>
            <p>
              We may suspend or terminate your access to Nomap at our discretion if you violate these Terms or for any other reason. Upon termination, you must cease using the App and delete your account.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Limitation of Liability</h2>
            <p>
              Nomap is provided "as is" without warranties of any kind. We are not responsible for any losses, damages, or liabilities arising from your use of the App.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Changes to These Terms</h2>
            <p>
              We may update these Terms from time to time. Continued use of Nomap after changes take effect constitutes your acceptance of the revised Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at carlosalvarez1391@gmail.com.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}