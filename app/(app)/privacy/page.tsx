import Link from "next/link";
import { getSEOTags } from "@/lib/seo";
import config from "@/config";

// CHATGPT PROMPT TO GENERATE YOUR PRIVACY POLICY — replace with your own data 👇

// 1. Go to https://chat.openai.com/
// 2. Copy paste bellow
// 3. Replace the data with your own (if needed)
// 4. Paste the answer from ChatGPT directly in the <pre> tag below

// You are an excellent lawyer.

// I need your help to write a simple privacy policy for my website. Here is some context:
// - Website: https://shipfa.st
// - Name: ShipFast
// - Description: A JavaScript code boilerplate to help entrepreneurs launch their startups faster
// - User data collected: name, email and payment information
// - Non-personal data collection: web cookies
// - Purpose of Data Collection: Order processing
// - Data sharing: we do not share the data with any other parties
// - Children's Privacy: we do not collect any data from children
// - Updates to the Privacy Policy: users will be updated by email
// - Contact information: marc@shipfa.st

// Please write a simple privacy policy for my site. Add the current date.  Do not add or explain your reasoning. Answer:

export const metadata = getSEOTags({
  title: `Privacy Policy | ${config.appName}`,
  canonicalUrlRelative: "/privacy-policy",
});

const PrivacyPolicy = () => {
  return (
    <main className="max-w-xl mx-auto">
      <div className="p-5">
        <Link href="/" className="btn btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
              clipRule="evenodd"
            />
          </svg>{" "}
          Back
        </Link>
        <h1 className="text-3xl font-extrabold pb-6">
          Privacy Policy for {config.appName}
        </h1>

        <pre
          className="leading-relaxed whitespace-pre-wrap"
          style={{ fontFamily: "sans-serif" }}
        >
          {`Effective Date: June 15, 2024

Welcome to QuickLang (https://quicklang.app). Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you use our website and services.

1. Information We Collect

Personal Data

We collect the following personal data from you:

	•	Name: To personalize your experience and for order processing.
	•	Email: To communicate with you regarding your orders, updates, and promotions.
	•	Payment Information: To process your transactions securely.

Non-Personal Data

We also collect non-personal data through the use of web cookies. This data helps us understand how you use our website, enabling us to improve your user experience.

2. Purpose of Data Collection

The personal data we collect is used for the following purposes:

	•	Order Processing: To manage and fulfill your orders efficiently.
	•	Communication: To send you updates about your orders, respond to your inquiries, and provide customer support.

3. Data Sharing

We respect your privacy and do not share your personal data with any third parties. Your information is used solely for the purposes outlined in this policy.

4. Children’s Privacy

QuickLang is not intended for use by children. We do not knowingly collect any personal data from children under the age of 13. If we become aware that a child has provided us with personal information, we will take steps to delete such information.

5. Updates to the Privacy Policy

We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. When we make significant changes, we will notify you by email. We encourage you to review this policy periodically to stay informed about how we are protecting your information.

6. Contact Information

If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at support@quicklang.app.

By using QuickLang, you agree to the terms of this Privacy Policy. Thank you for trusting QuickLang to handle your translation needs.`}
        </pre>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
