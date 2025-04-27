import React from "react";

type BentoProps = {
    children: React.ReactNode;
}

export function Bento({ children }: BentoProps) {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {React.Children.toArray(children).reduce((columns: React.ReactNode[][], child, i) => {
                const columnIndex = i % 4;
                if (!columns[columnIndex]) {
                    columns[columnIndex] = [];
                }
                columns[columnIndex].push(child);
                return columns;
            }, []).map((column, i) => (
                <div key={i} className="grid gap-4">
                    {column}
                </div>
            ))}
        </div>
    )
}