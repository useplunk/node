export interface SendParams {
  to: string | string[];
  subject: string;
  body: string;
  type?: "html" | "markdown";
  from?: string;
  name?: string;
  withUnsubscribe?: boolean;
  subscribed?: boolean;
}
