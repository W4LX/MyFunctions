declare module "my-functions" {
  /**
   * Validates if a text string is a valid URL.
   * @param { string } str - The text string to validate as URL.
   */
  export function isURL(str: string): boolean;

  /**
   * Validates if a URL is an image.
   * @param { string } url - The URL to verify.
   */
  export function isImageURL(url: string): Promise<boolean>;
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
   * @param { number } limit - The character limit to shorten the text.
   * @param { string } [ suffix = "" ] - The optional suffix to add at the end of the shortened text.
   */
  shorten(limit: number, suffix?: string | undefined): string;
}
