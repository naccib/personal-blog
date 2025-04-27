import { MinigramPost } from "@/app/minigram/types";
import { format } from "date-fns";
import DreamyGradientAvatar from "./dreamy-gradient-avatar";
import ImageCarousel from "./image-carousel";
import ExpandableCaption from "./expandable-caption";

interface PostViewportProps {
  post: MinigramPost;
  /**
   * Controls the aspect ratio of the post.
   * - `square`: Forces a square aspect ratio (1:1)
   * - `native`: Uses the native aspect ratio of the source image
   */
  aspect?: 'square' | 'native';

  /**
   * The name of the author of the post.
   */
  displayName: string;

  /**
   * Whether to show the post actions. Defaults to false.
   */
  showActions?: boolean;
}

/**
 * A viewport for a post that mimics the behavior of Instagram's post view.
 */
export default function PostViewport({ post, aspect = 'square', displayName, showActions = false }: PostViewportProps) {
  return (
    <div className="w-full max-w-4xl mx-auto bg-white dark:bg-zinc-900 rounded-xl shadow-lg overflow-hidden">
      {/* Post Header */}
      <div className="p-4 border-b border-zinc-200 dark:border-zinc-800">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <DreamyGradientAvatar size={32} />
            <span className="font-medium">{displayName}</span>
          </div>
          <button className="text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200">
            •••
          </button>
        </div>
      </div>

      {/* Post Media */}
      <ImageCarousel media={post.media} aspect={aspect} />

      {/* Post Actions */}
      {showActions && (
        <div className="p-4 border-b border-zinc-200 dark:border-zinc-800">
          <div className="flex items-center space-x-4">
            <button className="text-2xl hover:text-zinc-600 dark:hover:text-zinc-300">
              ♡
            </button>
            <button className="text-2xl hover:text-zinc-600 dark:hover:text-zinc-300">
              💬
            </button>
            <button className="text-2xl hover:text-zinc-600 dark:hover:text-zinc-300">
              ↪
            </button>
          </div>
        </div>
      )}

      {!showActions && (
        <div className="h-0.5 bg-zinc-200 dark:bg-zinc-800" />
      )}

      {/* Post Caption */}
      <div className="p-4">
        <div className="space-y-2">
          <ExpandableCaption
            displayName={displayName}
            text={post.caption || ''}
            className="text-sm"
          />
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            {format(post.date, "MMMM d, yyyy")}
          </p>
        </div>
      </div>
    </div>
  );
}