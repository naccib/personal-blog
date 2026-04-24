import Link from "next/link";
import { Tool, TOOLS } from "./data";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ToolsPage() {
    return (
        <div className="flex flex-col gap-4">
            <ul className="flex flex-col gap-4">
                {TOOLS.map((tool) => (
                    <li key={tool.code}>
                        <ToolCard tool={tool} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

function ToolCard({ tool }: { tool: Tool }) {
    return (
        <Link href={`/tools/${tool.code}`}>
            <Card className="transition-all hover:shadow-md hover:-translate-y-1 cursor-pointer">
                <CardHeader>
                    <CardTitle>{tool.displayName}</CardTitle>
                <p className="text-xs text-muted-foreground">{tool.code}</p>
            </CardHeader>
            <CardContent>
                    <p className="text-sm text-muted-foreground mb-2">{tool.description}</p>
                </CardContent>
            </Card>
        </Link>
    );
}

