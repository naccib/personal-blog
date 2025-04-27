"use client"

import { motion, AnimatePresence } from "framer-motion";
import hljs from "highlight.js";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { FileIcon, CopyIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react";

type CodeProps = {
    code: string;
    filename?: string;
    language?: string;
}

export default function Code({ 
    code, 
    filename,
    language = 'typescript'
}: CodeProps) {
    const codeRef = useRef<HTMLPreElement>(null);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [copyText, setCopyText] = useState('Copy');

    useEffect(() => {
        if (codeRef.current) {
            hljs.highlightElement(codeRef.current);
        }
    }, [code]);

    const handleCopy = async () => {
        await navigator.clipboard.writeText(code);
        setCopyText('Copied!');
        setTimeout(() => setCopyText('Copy'), 2000);
    };

    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900"
        >
            <div className="flex items-center justify-between px-4 py-2 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800/50">
                <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                    <FileIcon className="w-4 h-4" />
                    <span>{filename || 'Code'}</span>
                </div>
                <div className="flex items-center gap-2">
                    <button
                        onClick={handleCopy}
                        className="p-1 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded transition-colors"
                        title="Copy code"
                    >
                        <CopyIcon className="w-4 h-4 text-zinc-600 dark:text-zinc-400" />
                    </button>
                    <button
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        className="p-1 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded transition-colors"
                        title={isCollapsed ? "Expand" : "Collapse"}
                    >
                        {isCollapsed ? (
                            <ChevronDownIcon className="w-4 h-4 text-zinc-600 dark:text-zinc-400" />
                        ) : (
                            <ChevronUpIcon className="w-4 h-4 text-zinc-600 dark:text-zinc-400" />
                        )}
                    </button>
                </div>
            </div>
            <AnimatePresence initial={false}>
                {!isCollapsed && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="p-4"
                    >
                        <div className="relative rounded-lg overflow-hidden">
                            <pre className="relative rounded-lg overflow-hidden">
                                <code ref={codeRef} className={cn("language-", language)}>
                                    {code}
                                </code>
                            </pre>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
} 