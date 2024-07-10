import { ConfigProps } from "@/types/config";

const config = {
  // REQUIRED
  appName: "JBoilerPlate",
  // REQUIRED: a short description of your app for SEO tags (can be overwritten)
  appDescription:
    "Make SaaS like a pro with JBoilerPlate. A boilerplate for SaaS applications with Next.js, Tailwind CSS, and Stripe.",
  // REQUIRED: SEO applicaton category type
  applicationCategory: "DeveloperApplication",
  // REQUIRED (no https://, not trialing slash at the end, just the naked domain)
  domainName: "quicklang.app",
  // optional
  ownerInfo: {
    ownerName: "Joan Bosch",
    twitterName: "@joanboschpons",
    twitterLink: "https://twitter.com/joanboschpons",
    githubLink: "https://github.com/joanbosch"

  },
  crisp: {
    // Crisp website ID. IF YOU DON'T USE CRISP: just remove this => Then add a support email in this config file (mailgun.supportEmail) otherwise customer support won't work.
    id: "b1216b9c-9259-49ae-a1cc-b5c074228fdf",
    // Hide Crisp by default, except on route "/". Crisp is toggled with <ButtonSupport/>. If you want to show Crisp on every routes, just remove this below
    onlyShowOnRoutes: [""],
  },
  stripe: {
    // Create multiple plans in your Stripe dashboard, then add them here. You can add as many plans as you want, just make sure to add the priceId
    plans: [
      {
        // REQUIRED — we use this to find the plan in the webhook (for instance if you want to update the user's credits based on the plan)
        priceId:
          process.env.NODE_ENV === "development"
            ? "price_456"
            : "price_456",
        //  REQUIRED - Name of the plan, displayed on the pricing page
        free: true,
        name: "basic",
        // A friendly description of the plan, displayed on the pricing page. Tip: explain why this plan and not others
        description: "Perfect for on-the-spot translations",
        // The price you want to display, the one user will be charged on Stripe.
        price: 0,
        // If you have an anchor price (i.e. $29) that you want to display crossed out, put it here. Otherwise, leave it empty

        features: [
          {
            name: `1 project`,
          },
          { name: "Unlimited languages" },
          { name: "Optimize your translation workflow" },
          { name: "Sync all your translations" },
          { name: "Pay as you go" },
        ],
      },
      {
        // REQUIRED — we use this to find the plan in the webhook (for instance if you want to update the user's credits based on the plan)
        priceId:
          process.env.NODE_ENV === "development"
            ? "price_456"
            : "price_456",
        //  REQUIRED - Name of the plan, displayed on the pricing page
        name: "pro",
        isFeatured: true,
        // A friendly description of the plan, displayed on the pricing page. Tip: explain why this plan and not others
        description: "Perfect for manage project localization",
        // The price you want to display, the one user will be charged on Stripe.
        price: 10,
        // If you have an anchor price (i.e. $29) that you want to display crossed out, put it here. Otherwise, leave it empty
        priceAnchor: 15,
        features: [
          { name: "Unlimited projects" },
          { name: "Unlimited languages" },
          { name: "Optimize your translation workflow" },
          { name: "Sync all your translations" },
          { name: "Translation history", soon: true },
          { name: "1500 credits per month included (1.500.000 chars)" },
          { name: "1 year of updates" },
          { name: "24/7 support" },
        ],
      }
    ],
    products: [
      {
        // REQUIRED — we use this to find the product in the webhook (for instance if you want to update the user's credits based on the plan)
        priceId:
        process.env.NODE_ENV === "development"
          ? "price_456"
          : "price_456",
        name: "1k Credits",
        price: 10,
      }
    ]
  },
  resend: {
    // subdomain to use when sending emails, if you don't have a subdomain, just remove it. Highly recommended to have one (i.e. mg.yourdomain.com or mail.yourdomain.com)
    subdomain: "",
    // REQUIRED — Email 'From' field to be used when sending magic login links
    fromNoReply: `QuickLang <noreply@quicklang.app>`,
    // REQUIRED — Email 'From' field to be used when sending other emails, like abandoned carts, updates etc..
    fromAdmin: `Joan at QuickLang <joan@quicklang.app>`,
    // Email shown to customer if need support. Leave empty if not needed => if empty, set up Crisp above, otherwise you won't be able to offer customer support."
    supportEmail: "support@joanbosch.dev",
    // When someone replies to supportEmail sent by the app, forward it to the email below (otherwise it's lost). If you set supportEmail to empty, this will be ignored.
    forwardRepliesTo: "support@joanbosch.dev",
  },
  auth: {
    // REQUIRED — the path to log in users. It's use to protect private routes (like /dashboard). It's used in apiClient (/libs/api.js) upon 401 errors from our API
    loginUrl: "/login",
    // REQUIRED — the path you want to redirect users after successfull login (i.e. /dashboard, /private). This is normally a private page for users to manage their accounts. It's used in apiClient (/libs/api.js) upon 401 errors from our API & in ButtonSignin.js
    callbackUrl: "/",
  },
  i18n: {
    // REQUIRED - the default locale page
    defaultLocale: "en",
    // REQUIRED - true to use localized pathnames, false otherwise
    pathLocalized: false
  }
} as ConfigProps;

export default config;
