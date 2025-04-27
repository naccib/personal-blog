import { PolaroidPhoto } from "@/components/minigram/polaroid-photo";
import { Bento } from "@/components/minigram/bento";

import { POSTS } from "./posts";
import { resolve } from "@/lib/media-resolver";
import PostViewport from "@/components/minigram/post-viewport";

export default function Minigram() {
    return (
        <div className="flex flex-col gap-4">
            {POSTS.map((post) => (
                <PostViewport key={post.id} post={post} aspect="square" displayName="Guilherme Almeida" />
            ))}
        </div>
    )
}