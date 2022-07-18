import axios, { AxiosInstance } from "axios";
import { request } from "../utils/request";

export class Plunk {
  private readonly key: string;
  private readonly client: AxiosInstance;

  constructor(key: string, options?: { debug?: boolean }) {
    this.key = key;

    this.client = axios.create({
      baseURL: options?.debug
        ? "http://localhost:8080"
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
     * Publishes an event
     * @param {string} event The event you want to publish
     * @param {string} email The email associated with this event
     */
    publish: async ({ event, email }: { event: string; email: string }) => {
      return await request<{
        success: true;
      }>(this.client, {
        method: "POST",
        url: "/",
        body: { event, email },
      });
    },
  };
}
