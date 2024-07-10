export interface ConfigProps {
  appName: string;
  appDescription: string;
  domainName: string;
  ownerName?: string;
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
  i18n?: {
    defaultLocale: string;
    locales: string[];
  };
}
