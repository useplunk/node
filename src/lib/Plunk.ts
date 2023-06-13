import { fetch } from "native-fetch";
import { PublishParams } from "../types/events";
import { SendParams } from "../types/emails";
import { NotFoundError } from "../errors/NotFound";
import { TokenError } from "../errors/TokenError";

export class Plunk {
  private readonly key: string;

  private async fetch<T>({
    json,
    url,
    ...options
  }: RequestInit & {
    url: string;
    json: any;
    headers?: Record<string, string>;
  }) {
    const res = await fetch(
      new URL(url, "https://api.useplunk.com/v1/").toString(),
      {
        ...options,
        headers: {
          Authorization: `Bearer ${this.key}`,
          ...(json && { "Content-Type": "application/json" }),
          ...options.headers,
        },
        body: json ? JSON.stringify(json) : undefined,
      }
    );

    const text = await res.text();

    const data = safeJsonParse(text);

    if (res?.status === 401) {
      throw new TokenError(data?.message);
    }

    if (res?.status === 404) {
      throw new NotFoundError(data?.message);
    }

    if (!res.ok) {
      throw new Error(data?.message ?? "Unknown API Error");
    }
    return data as T;
  }

  constructor(key: string) {
    this.key = key;
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
      return await this.fetch<{
        success: true;
      }>({
        method: "POST",
        url: "track",
        json: { ...event },
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
     * @param {string=html} body.type - The type of email you want to send
     * @param {boolean=false} body.withUnsubscribe - Whether to include an unsubscribe link
     */
    send: async (body: SendParams) => {
      return await this.fetch<{
        success: true;
      }>({
        method: "POST",
        url: "send",
        json: {
          ...body,
        },
      });
    },
  };
}

function safeJsonParse(text: string) {
  try {
    return JSON.parse(text);
  } catch (e) {
    return text;
  }
}
