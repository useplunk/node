export interface SendParams {
    to: string;
    subject: string;
    body: string;
    withUnsubscribe?: boolean;
}
