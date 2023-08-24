export interface IEducation {
    id: number;
    field: number;
    schoolName: string;
    website?: string;
    internationalizations: IEducationInternationalization[];
    startAt: string; // For the purpose of stringifying MM-DD-YYYY date format
    endAt?: string;  // For the purpose of stringifying MM-DD-YYYY date format
    technologies?: string[];
    medias?: IEducationMedia[];
    backgroundUrl?: string
}

export interface IEducationInternationalization {
    language: string;
    city: string;
    country: string;
    role: string;
    description: string;
}

export interface IEducationMedia {
    icon: string; // Use the official names of Brand Icons (https://www.w3schools.com/icons/fontawesome_icons_brand.asp)
    title: string;
    http: string;
}