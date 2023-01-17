export interface SendParamsWithoutTemplate {
  to: string;
  subject: string;
  body: string;
  withUnsubscribe?: boolean;
}

export interface SendParamsWithTemplate {
  to: string;
  template: string;
  withUnsubscribe?: boolean;
}

export type SendParams = SendParamsWithTemplate | SendParamsWithoutTemplate;
