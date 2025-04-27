import Link from "next/link";

export function PolaroidPhoto({ src, alt, href }: { src: string; alt: string; href: string }) {
    return (
        <Link href={href}>
            <div className="flex flex-col overflow-hidden rounded-2xl bg-white dark:bg-zinc-100 shadow-lg p-4">
                <div className="flex flex-col overflow-hidden rounded-xl overflow-hidden">
                    <img src={src} alt={alt} className="w-full h-auto"/>
                </div>
            </div>
        </Link>
    )
}