
import type { MDXComponents } from 'mdx/types'

import CodeWithImage from '@/components/blog/code-with-image'
import Code from '@/components/blog/code'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    Cover: ({
      src,
      alt,
      caption,
    }: {
      src: string
      alt: string
      caption: string
    }) => {
      return (
        <figure>
          <img src={src} alt={alt} className="rounded-xl" />
          <figcaption className="text-center">{caption}</figcaption>
        </figure>
      )
    },
    CodeWithImage,
    Code
  }
}
