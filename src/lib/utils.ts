import { type ClassValue, clsx } from "clsx";
import { Metadata } from "next";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function constructMetadata({
	title = "Spaceclips - Generate high-quality shorts using AI",
	description = "Spaceclips uses state-of-the art AI to generate compelling shorts from speech-based long-form videos.",
	icons = "/spaceclips_logo.png",
	image = "",
	noIndex = false,
}: {
	title?: string;
	description?: string;
	image?: string;
	icons?: string;
	noIndex?: boolean;
} = {}): Metadata {
	return {
		title,
		description,
		openGraph: {
			title,
			description,
			images: [
				{
					url: image,
				},
			],
		},
		icons,
		metadataBase: new URL("https://spaceclips.app/"),
		themeColor: "#FFF",
		...(noIndex && {}),
	};
}
