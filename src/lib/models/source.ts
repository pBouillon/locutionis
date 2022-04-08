/**
 * Quotable external source such as a website
 * @example { name: "Wikipedia", "href": "https://fr.wikipedia.org" }
 */
export interface Source {

  /** The brand name of the source */
  name: string;

  /** A link to the related resource or to the main page of the source */
  href: string;

}
