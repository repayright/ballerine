export type TAuthenticationConfiguration = {
  apiType: 'API_KEY' | 'OAUTH2' | 'BASIC_AUTH';
  authValue: string;
  validUntil?: string;
  isValid: boolean;
  webhookSharedSecret: string;
};

export const BulkStatus = {
  SUCCESS: 'success',
  PARTIAL: 'partial',
  FAILED: 'failed',
} as const;

export type TBulkStatus = (typeof BulkStatus)[keyof typeof BulkStatus];

export type TAlertUpdateResponse = {
  alertId: string;
  status: string;
}[];

type SuccessResponse = {
  alertId: string;
  status: 'success';
};

type FailedResponse = {
  alertId: string;
  status: 'failed';
  errors: {
    path?: string;
    message: string;
  }[];
};
export type TBulkAssignAlertsResponse = {
  response: (SuccessResponse | FailedResponse)[];
  overallStatus: TBulkStatus;
};
