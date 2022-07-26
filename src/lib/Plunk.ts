import axios, { AxiosInstance } from "axios";
import { request } from "../utils/request";
import { PublishParams } from "../types/events";

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
      withCredentials: true,
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
    publish: async ({ event, email, data }: PublishParams) => {
      return await request<{
        success: true;
      }>(this.client, {
        method: "POST",
        url: "/",
        body: { event, email, data },
      });
    },
  };
}
