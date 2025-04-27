
// MARK: - Post

/**
 * A Minigram post object.
 */ 
export type MinigramPost = {
    /**
     * The ID of the post.
     */
    id: string;

    /**
     * The date of the post.
     */
    date: Date;

    /**
     * The media of the post.
     */
    media: MinigramMedia[];

    /**
     * The caption of the post.
     */
    caption?: string;
}

// MARK: - Media

/**
 * A media object.
 */
export type MinigramMedia = ImageMinigramMedia | VideoMinigramMedia

export type ImageMinigramMedia = BaseMinigramMedia & {
    type: 'image';
}

export type VideoMinigramMedia = BaseMinigramMedia & {
    type: 'video';
}


export type BaseMinigramMedia = {
    /**
     * The ID of the media.
     */
    id: string;

    /**
     * The provider of the media.
     */
    provider: MinigramMediaSource;

    /**
     * The alt text of the media.
     */
    alt?: string;
}

/**
 * The source of the media. 
 * 
 * - `r2`: The media is stored in Cloudflare R2.
 * - `url`: The media is stored in a public URL. The ID itself is the URL.
 */
export type MinigramMediaSource = 'r2' | 'url'