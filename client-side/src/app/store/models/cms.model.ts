export interface CMS {
    cms: CmsData;
}

export interface CmsData {
    number: number;
    email: string;
    tooltip: Tooltip;
}

export interface Tooltip {
    facebookIcon: string;
    twitterIcon: string;
    instagramIcon: string;
    mapIcon: string;
    googlePlusIcon: string;
}
