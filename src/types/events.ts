export interface PublishParams {
  event: string;
  email: string;
  data?: { [p: string]: string };
}
