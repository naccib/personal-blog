'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

import { MinigramPost } from '@/app/minigram/types'
import { resolve } from '@/lib/media-resolver'

interface MinigramPreviewProps {
  posts: MinigramPost[]
  className?: string
  initialSpacing?: number
}

export function MinigramPreview({ 
  posts, 
  className = '',
  initialSpacing = 60 
}: MinigramPreviewProps) {
  return (
    <Link href="/minigram">
      <motion.div
        className={`group relative h-32 w-full cursor-pointer overflow-hidden rounded-xl bg-zinc-100 p-1 dark:bg-zinc-800 ${className}`}
        whileHover="hover"
        initial="initial"
      >
        {/* Stacked photos */}
        {posts.slice(0, 3).map((post, index) => (
          <motion.div
            key={post.id}
            className="absolute inset-0 h-32 w-32"
            initial={{ x: index * initialSpacing }}
            variants={{
              initial: { x: index * initialSpacing },
              hover: {
                x: index * (initialSpacing * 2.5),
                scale: 1.05,
                transition: {
                  type: 'spring',
                  stiffness: 300,
                  damping: 20,
                  delay: index * 0.05,
                },
              },
            }}
          >
            <div className="relative h-full w-full overflow-hidden rounded-lg">
              <Image
                src={resolve(post.media[0])}
                alt={`Minigram post ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        ))}

        {/* Arrow indicator */}
        <motion.div
          className="absolute bottom-2 right-2 rounded-full bg-white/90 p-1 text-zinc-900 shadow-sm dark:bg-zinc-900/90 dark:text-zinc-100"
          initial={{ opacity: 0, scale: 0.8 }}
          variants={{
            initial: { opacity: 0, scale: 0.8 },
            hover: {
              opacity: 1,
              scale: 1,
              transition: { delay: 0.2 },
            },
          }}
        >
          <ArrowRight className="h-4 w-4" />
        </motion.div>

        {/* More posts indicator */}
        {posts.length > 3 && (
          <motion.div
            className="absolute bottom-2 left-2 rounded-full bg-white/90 px-2 py-1 text-xs text-zinc-900 shadow-sm dark:bg-zinc-900/90 dark:text-zinc-100"
            initial={{ opacity: 0, scale: 0.8 }}
            variants={{
              initial: { opacity: 0, scale: 0.8 },
              hover: {
                opacity: 1,
                scale: 1,
                transition: { delay: 0.2 },
              },
            }}
          >
            See {posts.length - 3} more
          </motion.div>
        )}
      </motion.div>
    </Link>
  )
} 