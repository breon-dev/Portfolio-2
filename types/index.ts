export type AboutInfoType = {
  description: string;
  birthDetails: AboutInfoIsLinkType[];
  partners: AboutInfoIsLinkType[];
  parents: AboutInfoIsLinkType[];
  siblings: AboutInfoIsLinkType[];
  height: string;
}

export type AboutInfoIsLinkType = {
  value: string;
  href?: string;
}

export type AccordionItemType = {
  value: string;
  triggerName: string;
  content: string;
};

export type ProjectsLinkType = {
  shortenedDomain: string;
  fullDomain: string
  linkTitle: string;
  href: string;
  description: string;
}

export type NavLinkType = {
  name: string;
  href: string;
  title: string;
}
