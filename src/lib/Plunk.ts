import axios, { AxiosInstance } from "axios";
import { request } from "../utils/request";
import { PublishParams } from "../types/events";
import {SendParams} from "../types/emails";

export class Plunk {
  private readonly key: string;
  private readonly client: AxiosInstance;

  constructor(key: string, options?: { debug?: boolean }) {
    this.key = key;

    this.client = axios.create({
      baseURL: options?.debug
        ? "http://localhost:8080/v1"
        : "https://api.useplunk.com/v1",
      headers: {
        Authorization: `Bearer ${this.key}`,
      },
    });
  }

  /**
   * Resources
   */
  events = {
    /**
     * Publishes an event to Plunk
     * @param {Object} event
     * @param {string} event.event - The event you want to publish
     * @param {string} event.email - The email associated with this event
     * @param {Object=} event.data - The user data associated with this event
     */
    track: async ({ event, email, data }: PublishParams) => {
      return await request<{
        success: true;
      }>(this.client, {
        method: "POST",
        url: "/track",
        body: { event, email, data },
      });
    },
  };

  emails = {
    /**
     * Sends a transactional email with Plunk
     * @param {Object} email
     * @param {string} email.to - The event you want to publish
     * @param {string} email.subject - The event you want to publish
     * @param {string} email.body - The email associated with this event
     * @param {boolean=} email.withUnsubscribe - Whether to include an unsubscribe link hosted by Plunk in the email
     */
    send: async ({ to, subject, body, withUnsubscribe }: SendParams) => {
      return await request<{
        success: true;
      }>(this.client, {
        method: "POST",
        url: "/send",
        body: { to, subject, body, withUnsubscribe: withUnsubscribe ?? false },
      });
    },
  }
}
