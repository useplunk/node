export interface SendParams {
  to: string;
  subject: string;
  body: string;
  from?: string;
  name?:string;
  withUnsubscribe?: boolean;
}
