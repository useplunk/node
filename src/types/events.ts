export interface PublishParams {
  event: string;
  email: string;
  // Data can be a string or an
  data?: { [p: string]: string | { persistent: boolean; value: string } };
}
