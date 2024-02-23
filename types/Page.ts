import { PortableTextBlock } from "sanity";

export type Page = {
    _id: string;
    createdAt: Date;
    title: string;
    slug: string;
    heroImage: string;
    heroImageAltText: string;
    mainTitle: string;
    snippet: PortableTextBlock[];
    mainText: PortableTextBlock[];
    bottomButtonText: string;
    bottomButtonLink: string;
    secondaryTitle: string;
    secondaryText: PortableTextBlock[];
    buttonText: string;
    buttonLink: string;

}