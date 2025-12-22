import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6 md:p-10">
        
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Privacy Policy for Job Portal
        </h1>

        <section className="space-y-6 text-gray-700">
          
          <div>
            <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
            <p>
              This Privacy Policy outlines how we collect, use, and protect your
              information when you visit our job portal website.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">2. Information We Collect</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>
                <strong>Personal Information:</strong>
                <ul className="list-disc ml-6 mt-1 space-y-1">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Resume/CV</li>
                </ul>
              </li>
              <li>
                <strong>Usage Data:</strong>
                <ul className="list-disc ml-6 mt-1 space-y-1">
                  <li>IP address</li>
                  <li>Browser type</li>
                  <li>Pages visited</li>
                  <li>Time spent on pages</li>
                </ul>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              3. How We Use Your Information
            </h2>
            <ul className="list-disc ml-6 space-y-1">
              <li>To provide and maintain our services</li>
              <li>To notify you about changes to our services</li>
              <li>To allow participation in interactive features</li>
              <li>To provide customer support</li>
              <li>To improve our services</li>
              <li>To monitor usage</li>
              <li>To detect and prevent technical issues</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">4. Data Security</h2>
            <p>
              We take the security of your personal information seriously and
              implement appropriate technical and organizational measures.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              5. Sharing Your Information
            </h2>
            <p className="mb-2">
              We do not sell or rent your personal information to third parties.
              We may share information with:
            </p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Service providers assisting website operations</li>
              <li>Law enforcement agencies if required by law</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">6. Your Rights</h2>
            <ul className="list-disc ml-6 space-y-1">
              <li>Access your personal information</li>
              <li>Request correction of your information</li>
              <li>Request deletion of your information</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              7. Changes to This Privacy Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Updates will
              be posted on this page.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">8. Contact Us</h2>
            <p>
              If you have any questions, please contact us at{" "}
              <span className="text-blue-600 font-medium">
                your-email@example.com
              </span>
            </p>
          </div>

        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
