import { groq } from "next-sanity";
import { createClient } from "@sanity/client"
import { dataset, projectId, apiVersion } from "../env"
import { Page } from "@/types/Page";

export async function getPages(): Promise<Page[]> {
    const client = createClient({
        dataset,
        projectId,
        apiVersion
    });

    return client.fetch(
        groq`*[_type == "page"]{
            _id,
            _createdAt,
            title,
            "slug": slug.current,
            "heroImage": heroImage.asset->url,
            heroImageAltText,
            mainTitle,
            snippet,
            mainText,
            bottomButtonText,
            bottomButtonLink,
            secondaryTitle,
            secondaryText,
            buttonText,
            buttonLink
        }`
    )    
}

export async function getVendorOverviewPages(): Promise<Page[]> {
    const client = createClient({
        dataset,
        projectId,
        apiVersion
    });

    return client.fetch(
        groq`*[_type == "page"]{
            _id,
            _createdAt,
            title
        }`
    )    
}

export async function getMainPages(): Promise<Page[]> {
    const client = createClient({
        dataset,
        projectId,
        apiVersion
    });

    return client.fetch(
        groq`*[_type == "page"]{
            _id,
            _createdAt,
            title
        }`
    )    
}