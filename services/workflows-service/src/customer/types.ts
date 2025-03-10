import { Customer } from '@prisma/client';

export type TAuthenticationConfiguration = {
  apiType: 'API_KEY' | 'OAUTH2' | 'BASIC_AUTH';
  authValue: string;
  validUntil?: string;
  isValid: boolean;
  webhookSharedSecret: string;
};

export const FEATURE_LIST = {
  ONGOING_MERCHANT_REPORT_T1: 'ONGOING_MERCHANT_REPORT_T1',
  ONGOING_MERCHANT_REPORT_T2: 'ONGOING_MERCHANT_REPORT_T2',
} as const;

export type TCustomerFeatures = {
  name: keyof typeof FEATURE_LIST;
  enabled: boolean;
  options: TOngoingAuditReportDefinitionConfig;
};

export type TOngoingAuditReportDefinitionConfig = {
  definitionVariation: string;
  intervalInDays: number;
  active: boolean;
  checkTypes: string[];
  proxyViaCountry: string;
};

export type TFeaturesWithFeatures = Record<string, TCustomerFeatures>;

export const CUSTOMER_FEATURES = {
  [FEATURE_LIST.ONGOING_MERCHANT_REPORT_T1]: {
    name: 'ONGOING_MERCHANT_REPORT_T1',
    enabled: true, // show option in UI
    options: {
      definitionVariation: 'ongoing_merchant_audit_t1',
      intervalInDays: 7,
      active: true,
      checkTypes: ['lob', 'content', 'reputation'],
      proxyViaCountry: 'GB',
    },
  },
  [FEATURE_LIST.ONGOING_MERCHANT_REPORT_T2]: {
    name: 'ONGOING_MERCHANT_REPORT_T2',
    enabled: false, // show option in UI
    options: {
      definitionVariation: 'ongoing_merchant_audit_t2',
      intervalInDays: 7,
      active: false,
      checkTypes: ['lob', 'content', 'reputation'],
      proxyViaCountry: 'GB',
    },
  },
} satisfies TFeaturesWithFeatures;

export type TCustomerWithDefinitionsFeatures = Customer & {
  features?: TFeaturesWithFeatures | Record<string, boolean> | null;
};
