import axios, { AxiosInstance } from "axios";
import { request } from "../utils/request";
import { PublishParams } from "../types/events";
import { SendParams } from "../types/emails";

export class Plunk {
  private readonly key: string;
  private readonly client: AxiosInstance;

  constructor(key: string) {
    this.key = key;

    this.client = axios.create({
      baseURL: "https://api.useplunk.com/v1",
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
     * @param {string} event.event - The event you want to publish
     * @param {string} event.email - The email associated with this event
     * @param {Object=} event.data - The user data associated with this event
     */
    track: async (event: PublishParams) => {
      return await request<{
        success: true;
      }>(this.client, {
        method: "POST",
        url: "/track",
        body: { ...event },
      });
    },
  };

  emails = {
    /**
     * Sends a transactional email with Plunk
     *
     * @param {string} body.to - The email you want to send to
     * @param {string} body.subject - The subject of the email
     * @param {string} body.body - The body of the email
     * @param {string=} body.from - The email you want to send from
     * @param {string=} body.name - The name you want to send as
     * @param {boolean=false} body.withUnsubscribe - Whether to include an unsubscribe link
     */
    send: async (body: SendParams) => {
      return await request<{
        success: true;
      }>(this.client, {
        method: "POST",
        url: "/send",
        body: {
          ...body,
        },
      });
    },
  };
}
