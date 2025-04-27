export default function MinigramLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col gap-4">
            <h1 className="pb-4">Minigram</h1>
            {children}
        </div>
    )
}