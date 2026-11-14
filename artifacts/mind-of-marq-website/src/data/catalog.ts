/**
 * SHOP BOOKS CATALOG — one record per edition.
 *
 * How to edit:
 * - Prices are tentative USD values shown in the catalog. Set `price` to null to show "Price coming soon".
 * - A purchase button is enabled ONLY when BOTH `checkoutUrl` is set AND `checkoutApproved` is true.
 *   Until then the format shows "Coming Soon" and no link is rendered.
 * - Full paid PDFs live on the checkout platform. Never put a paid PDF in /public.
 * - `sampleUrl` adds a "Preview Sample Pages" link. Only point it at a sample, never at a full PDF.
 * - Order within `catalog` is the display order.
 */

export type SeriesId = "caterpillars" | "percy";

export type FormatType = "print" | "pdf";

export interface BookFormat {
  type: FormatType;
  /** Format name shown beside the price, e.g. "Paperback" */
  label: string;
  /** Tentative price in USD, or null if not yet set */
  price: number | null;
  /** Purchase button text */
  buyLabel: string;
  /** Checkout link on the checkout platform. Null until supplied. */
  checkoutUrl: string | null;
  /** Set to true only after the checkout URL has been reviewed and approved. */
  checkoutApproved: boolean;
}

export interface CatalogEdition {
  /** Stable id, also used as the page anchor: /shop#<id> */
  id: string;
  series: SeriesId;
  title: string;
  edition: string;
  ages: string;
  cover: string;
  coverAlt: string;
  description: string;
  formats: BookFormat[];
  /** Link to free sample pages. Null hides "Preview Sample Pages". */
  sampleUrl: string | null;
}

export const series: { id: SeriesId; name: string; blurb: string }[] = [
  {
    id: "caterpillars",
    name: "Caterpillars",
    blurb:
      "The Brief but Spectacular Lives of Caterpillars: transformation, courage, and the science of becoming.",
  },
  {
    id: "percy",
    name: "Percy",
    blurb: "Percy the penguin and friends: warm, playful stories that build early learning and big feelings.",
  },
];

const coloringFormats = (print: number | null, pdf: number | null): BookFormat[] => [
  {
    type: "print",
    label: "Paperback",
    price: print,
    buyLabel: "Buy Print Copy",
    checkoutUrl: null,
    checkoutApproved: false,
  },
  {
    type: "pdf",
    label: "Printable PDF",
    price: pdf,
    buyLabel: "Buy Printable PDF",
    checkoutUrl: null,
    checkoutApproved: false,
  },
];

export const catalog: CatalogEdition[] = [
  {
    id: "caterpillars-color-and-learn",
    series: "caterpillars",
    title: "The Brief but Spectacular Lives of Caterpillars",
    edition: "Color & Learn",
    ages: "Ages 3–5",
    cover: "images/books/caterpillars-color-and-learn-cover.jpg",
    coverAlt:
      "The Brief but Spectacular Lives of Caterpillars: Color & Learn, ages 3–5. Cream cover with one yellow caterpillar on a leaf.",
    description:
      "Big, friendly coloring pages for the youngest readers. They meet the caterpillar, explore leaves and growth, and learn first nature words.",
    formats: coloringFormats(6.99, 3.99),
    sampleUrl: null,
  },
  {
    id: "percy-and-friends-color-and-learn",
    series: "percy",
    title: "Percy and Friends",
    edition: "Color & Learn",
    ages: "Ages 3–5",
    cover: "images/books/percy-and-friends-color-and-learn-cover.png",
    coverAlt:
      "Percy and Friends: Color & Learn, ages 3–5. Percy the penguin wearing goggles and a blue scarf.",
    description:
      "Color along with Percy and friends. Simple shapes, cheerful characters, and early-learning prompts for preschool and pre-K.",
    formats: coloringFormats(6.99, 3.99),
    sampleUrl: null,
  },
  {
    id: "caterpillars-coloring-adventure",
    series: "caterpillars",
    title: "The Brief but Spectacular Lives of Caterpillars",
    edition: "A Coloring Adventure",
    ages: "Ages 6–8",
    cover: "images/books/caterpillars-coloring-adventure-cover.jpg",
    coverAlt:
      "The Brief but Spectacular Lives of Caterpillars: A Coloring Adventure, ages 6–8. Bright forest cover with orange and pink butterflies.",
    description:
      "Detailed scenes from the caterpillars' journey, from egg to chrysalis to wings. A coloring companion for early elementary readers.",
    formats: coloringFormats(7.99, 4.99),
    sampleUrl: null,
  },
  {
    id: "caterpillars-read-aloud-coloring-adventure",
    series: "caterpillars",
    title: "The Brief but Spectacular Lives of Caterpillars",
    edition: "A Read-Aloud Coloring Adventure",
    ages: "Ages 6–8",
    cover: "images/books/caterpillars-read-aloud-coloring-adventure-cover.png",
    coverAlt:
      "The Brief but Spectacular Lives of Caterpillars: A Read-Aloud Coloring Adventure, ages 6–8. Pale line-art cover with a caterpillar looking up at a glowing drop.",
    description:
      "The full story to read aloud, paired with line-art pages to color. Built for classroom read-alouds and STEM + SEL discussion.",
    // PDF price not yet supplied
    formats: coloringFormats(12.99, null),
    sampleUrl: null,
  },
  {
    id: "caterpillars-cinematic-storybook",
    series: "caterpillars",
    title: "The Brief but Spectacular Lives of Caterpillars",
    edition: "A Cinematic Storybook",
    ages: "Ages 6–8",
    cover: "images/books/caterpillars-cinematic-storybook-cover.png",
    coverAlt:
      "The Brief but Spectacular Lives of Caterpillars: A Cinematic Storybook. Golden forest cover with three caterpillars on a branch.",
    description:
      "The full-color cinematic edition of the story. Rich illustrations follow three caterpillars as they discover what they are becoming.",
    formats: [
      {
        type: "print",
        label: "Print Storybook",
        price: 12.99,
        buyLabel: "Buy Print Copy",
        checkoutUrl: null,
        checkoutApproved: false,
      },
      {
        type: "pdf",
        label: "Digital Storybook PDF",
        price: 7.99,
        buyLabel: "Buy Digital Storybook PDF",
        checkoutUrl: null,
        checkoutApproved: false,
      },
    ],
    sampleUrl: null,
  },
];

export const isPurchasable = (f: BookFormat) => Boolean(f.checkoutUrl && f.checkoutApproved);

export const formatPrice = (price: number | null) =>
  price === null ? null : `$${price.toFixed(2)}`;

/** Options for the bulk order / license forms */
export const editionOptions = catalog.map((b) => `${b.title}: ${b.edition} (${b.ages})`);

/** Netlify Image CDN URL for a cover in /public */
export const coverSrc = (path: string, width: number) =>
  `/.netlify/images?url=/${path}&w=${width}&q=80`;
