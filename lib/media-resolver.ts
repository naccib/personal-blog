import { MinigramMedia } from "@/app/minigram/types";

/**
 * Given a MinigramMedia object, return the URL of the media.
 * @param media The MinigramMedia object to resolve.
 */
export function resolve(media: MinigramMedia): string {
    if (media.provider === 'r2') {
        return `https://pub-4156699f48e3436d9bc00c2a132210cb.r2.dev/${media.id}`
    }

    if (media.provider === 'url') {
        return media.id;
    }

    throw new Error(`Unknown media provider: ${media.provider}`);
}