'use client';

import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ExpandableCaptionProps {
  text: string;
  displayName: string;
  className?: string;
}

export default function ExpandableCaption({ 
  text, 
  displayName,
  className = ''
}: ExpandableCaptionProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const shouldShowExpand = useMemo(() => text.length > 48 || text.includes('\n'), [text]);

  // Get the first line of text for truncated view
  const firstLine = useMemo(() => {
    if (!text) return '';
    const lines = text.split('\n');
    return lines[0];
  }, [text]);


  return (
    <div className={className}>
      <motion.div
        className={`prose prose-sm dark:prose-invert`}
        initial={false}
        animate={{
          height: isExpanded ? 'auto' : 'auto',
        }}
        transition={{
          duration: 0.3,
          ease: 'easeOut'
        }}
      >
        <span className="font-medium">{displayName}</span>
        {text && (
          <div className="mt-1">
            {isExpanded ? (
              text.split('\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))
            ) : (
              <p>{shouldShowExpand ? firstLine : text}</p>
            )}
          </div>
        )}
      </motion.div>
      
      <AnimatePresence>
        {shouldShowExpand && !isExpanded && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsExpanded(true)}
            className="mt-1 text-xs text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 transition-colors cursor-pointer select-none"
          >
            Read more...
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
} 