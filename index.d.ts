declare module "my-functions" {
  /**
   * Validates if a text string is a valid URL.
   * @param str The text string to validate as URL.
   */
  export function isURL(str: string): boolean;

  /**
   * Validates if a URL is an image.
   * @param url The URL to verify.
   */
  export function isImageURL(url: string): Promise<boolean>;

  type CrowAPIType = "video" | "wiki" | "lyrics" | "weather" | "pin";

  /**
   * Makes a request to a specific API based on the provided type and query.
   * @param type Type of request.
   * @param query Consult for the application.
   */
  export function crowAPI(type: CrowAPIType, query: string): Promise<any>;
}

interface Array<T> {
  /**
   * Shuffles the elements of an Array randomly.
   */
  shuffle(): T[];
}

interface String {
  /**
   * Randomly shuffles the characters of a text string.
   */
  shuffle(): string;

  /**
   * Shortens a text string based on the specified limit.
   * @param limit The character limit to shorten the text.
   * @param suffix The optional suffix to add at the end of the shortened text.
   */
  shorten(limit: number, suffix?: string | undefined): string;
}
