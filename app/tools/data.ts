
/**
 * A tool is a self-contained small program that performs specific tasks.
 */
export type Tool = {
    /**
     * The code of the tool.
     */
    code: string;

    /**
     * The display name of the tool.
     */
    displayName: string;

    /**
     * The description of the tool.
     */
    description: string;
};

export const TOOLS: Tool[] = [
    {
        code: "rational-clinical-examination",
        displayName: "Rational Clinical Examination",
        description: "Ever wanted to have get help from a very much curated body of evidence-based medicine? This is the tool for you. Try it out!",
    },
];