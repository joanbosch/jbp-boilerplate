type ApplicationCategory =
 | "GameApplication"
 | "SocialNetworkingApplication"
 | "TravelApplication"
 | "ShoppingApplication"
 | "SportsApplication"
 | "LifestyleApplication"
 | "BusinessApplication"
 | "DesignApplication"
 | "DeveloperApplication"
 | "DriverApplication"
 | "EducationalApplication"
 | "HealthApplication"
 | "FinanceApplication"
 | "SecurityApplication"
 | "BrowserApplication"
 | "CommunicationApplication"
 | "DesktopEnhancementApplication"
 | "EntertainmentApplication"
 | "MultimediaApplication"
 | "HomeApplication"
 | "UtilitiesApplication"
 | "ReferenceApplication"

export interface ConfigProps {
  appName: string;
  appDescription: string;
  domainName: string;
  applicationCategory: ApplicationCategory;
  ownerInfo: {
    ownerName: string;
    twitterName: string;
    twitterLink: string;
    githubLink: string;
    githubOwnerName: string;
    githubRepo: string;
  }
  crisp: {
    id?: string;
    onlyShowOnRoutes?: string[];
  };
  stripe: {
    plans: {
      isFeatured?: boolean;
      priceId: string;
      free?: boolean;
      name: string;
      description?: string;
      price: number;
      priceAnchor?: number;
      features: {
        name: string;
        soon: boolean;
      }[];
    }[],
    products: {
      priceId: string;
      name: string;
      price: number;
      creditCount: number;
    }[];
  };
  resend: {
    subdomain: string;
    fromNoReply: string;
    fromAdmin: string;
    supportEmail?: string;
    forwardRepliesTo?: string;
  };
  auth: {
    loginUrl: string;
    callbackUrl: string;
  };
  i18n: {
    defaultLocale: string;
    pathLocalized: boolean;
    locales?: string[];
  };
}
