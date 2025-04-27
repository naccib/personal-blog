"use client"

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import hljs from "highlight.js";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { FileIcon, CopyIcon, ChevronDownIcon, ChevronUpIcon, Maximize2Icon } from "lucide-react";

type CodeWithImageProps = {
    image: string;
    code: string;
    filename?: string;
    display?: 'side-by-side' | 'stacked';
}

export default function CodeWithImage({ 
    image, 
    code, 
    filename, 
    display = 'side-by-side' 
}: CodeWithImageProps) {
    const codeRef = useRef<HTMLPreElement>(null);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [copyText, setCopyText] = useState('Copy');
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        if (codeRef.current) {
            hljs.highlightElement(codeRef.current);
        }

        // Load image dimensions
        const img = new window.Image();
        img.src = image;
        img.onload = () => {
            const aspectRatio = img.width / img.height;
            const maxHeight = 720;
            const calculatedWidth = maxHeight * aspectRatio;
            setImageDimensions({
                width: calculatedWidth,
                height: maxHeight
            });
        };
    }, [code, image]);

    const handleCopy = async () => {
        await navigator.clipboard.writeText(code);
        setCopyText('Copied!');
        setTimeout(() => setCopyText('Copy'), 2000);
    };

    const handleImageClick = () => {
        setIsFullscreen(!isFullscreen);
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
                    <span>{filename || 'Code with Image'}</span>
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
                        className={cn(
                            "p-4",
                            display === 'side-by-side' ? "grid grid-cols-2" : "flex flex-col"
                        )}
                    >
                        <div className="relative rounded-lg overflow-hidden pr-4">
                            <pre className="relative rounded-lg overflow-hidden">
                                <code ref={codeRef} className="language-typescript">
                                    {code}
                                </code>
                            </pre>
                        </div>
                        <div className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[1px] before:bg-gradient-to-b before:from-transparent before:via-zinc-300 dark:before:via-zinc-700 before:to-transparent">
                            <div 
                                className="relative rounded-lg overflow-hidden cursor-pointer group"
                                onClick={handleImageClick}
                                style={{ 
                                    width: imageDimensions.width,
                                    height: imageDimensions.height,
                                    maxWidth: '100%'
                                }}
                            >
                                <Image
                                    src={image}
                                    alt="Code illustration"
                                    fill
                                    className="object-contain transition-transform duration-300 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                                <div className="absolute top-2 right-2 p-1.5 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <Maximize2Icon className="w-4 h-4" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            <AnimatePresence>
                {isFullscreen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
                        onClick={handleImageClick}
                    >
                        <div className="relative w-full h-full max-w-7xl max-h-[90vh]">
                            <Image
                                src={image}
                                alt="Code illustration"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}