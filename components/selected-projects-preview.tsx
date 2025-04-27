import Image from 'next/image'
import { PROJECTS } from '@/app/data'

export function SelectedProjectsPreview() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      {PROJECTS.map((project) => (
        <a
          key={project.name}
          href={project.link}
          target="_blank"
          className="group block space-y-2"
        >
          <div className="relative rounded-2xl bg-zinc-50/40 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50">
            <Image src={project.image} alt={project.name} width={500} height={200} className="h-[150px] w-full rounded-2xl object-cover"/>
          </div>
          <div className="px-1">
            <span className="font-base group relative inline-block font-[450] text-zinc-900 dark:text-zinc-50">
              {project.name}
              <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-zinc-900 transition-all duration-200 group-hover:max-w-full"></span>
            </span>
            <p className="text-base text-zinc-600 dark:text-zinc-400">
              {project.description}
            </p>
          </div>
        </a>
      ))}
    </div>
  )
} 