import React from "react";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6 md:p-10">

        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Terms and Conditions
        </h1>

        <section className="space-y-6 text-gray-700">

          <div>
            <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
            <p>
              Welcome to <span className="font-medium">[Your Website Name]</span>.
              These Terms and Conditions govern your use of our website located
              at <span className="font-medium">[Your Website URL]</span>. By
              accessing or using our website, you agree to comply with these
              terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">2. Acceptance of Terms</h2>
            <p>
              By using our website, you confirm that you accept these Terms and
              Conditions and that you agree to comply with them. If you do not
              agree with any part of these terms, you must not use our website.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">3. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms and Conditions at any
              time. Any changes will be effective immediately upon posting on
              this page. Continued use of the website constitutes acceptance of
              the updated terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              4. User Responsibilities
            </h2>
            <p>
              You agree to use the website only for lawful purposes and in a way
              that does not infringe the rights of others or restrict their use
              and enjoyment of the website.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              5. Intellectual Property
            </h2>
            <p>
              All content, trademarks, and intellectual property on this website
              are owned by or licensed to{" "}
              <span className="font-medium">[Your Website Name]</span>. You may
              not reproduce, distribute, or create derivative works without
              prior written permission.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              6. Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by law,{" "}
              <span className="font-medium">[Your Website Name]</span> shall not
              be liable for any damages arising from your use of the website.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">7. Governing Law</h2>
            <p>
              These Terms and Conditions shall be governed by and construed in
              accordance with the laws of{" "}
              <span className="font-medium">[Your Jurisdiction]</span>. Any
              disputes shall be subject to the exclusive jurisdiction of the
              courts of{" "}
              <span className="font-medium">[Your Jurisdiction]</span>.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              8. Contact Information
            </h2>
            <p>
              If you have any questions about these Terms and Conditions, please
              contact us at{" "}
              <span className="text-blue-600 font-medium">
                your-email@example.com
              </span>.
            </p>
          </div>

        </section>
      </div>
    </div>
  );
};

export default TermsOfService;
