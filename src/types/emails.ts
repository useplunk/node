export interface SendParams {
  to: string | string[];
  subject: string;
  body: string;
  type?: "html" | "markdown";
  from?: string;
  name?: string;
  subscribed?: boolean;
}
