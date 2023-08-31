export interface PublishParams {
  event: string;
  email: string;
  subscribed?: boolean;
  data?: { [p: string]: string | { persistent: boolean; value: string } };
}
