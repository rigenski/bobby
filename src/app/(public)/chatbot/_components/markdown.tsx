import Link from 'next/link';
import type { ReactNode } from 'react';
import { memo } from 'react';
import ReactMarkdown, { type Components } from 'react-markdown';
import remarkGfm from 'remark-gfm';

const NonMemoizedMarkdown = ({ children }: { children: string }) => {
    const components = {
        code: ({ inline, className, children, ...props }: { inline?: boolean; className?: string; children: ReactNode }) => {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
                <pre
                    {...props}
                    className={`${className} mt-2 w-[80dvw] overflow-x-scroll rounded-lg bg-zinc-100 p-3 text-sm md:max-w-[500px] dark:bg-zinc-800`}
                >
                    <code className={match[1]}>{children}</code>
                </pre>
            ) : (
                <code className={`${className} rounded-md bg-zinc-100 px-1 py-0.5 text-sm dark:bg-zinc-800`} {...props}>
                    {children}
                </code>
            );
        },
        ol: ({ children, ...props }: { children: ReactNode }) => {
            return (
                <ol className="ml-4 list-outside list-decimal" {...props}>
                    {children}
                </ol>
            );
        },
        li: ({ children, ...props }: { children: ReactNode }) => {
            return (
                <li className="py-1" {...props}>
                    {children}
                </li>
            );
        },
        ul: ({ children, ...props }: { children: ReactNode }) => {
            return (
                <ul className="ml-4 list-outside list-decimal" {...props}>
                    {children}
                </ul>
            );
        },
        strong: ({ children, ...props }: { children: ReactNode }) => {
            return (
                <span className="font-semibold" {...props}>
                    {children}
                </span>
            );
        },
        a: ({ children, ...props }: { children: ReactNode }) => {
            return (
                <Link href={'#'} className="text-blue-500 hover:underline" target="_blank" rel="noreferrer" {...props}>
                    {children}
                </Link>
            );
        },
        h1: ({ children, ...props }: { children: ReactNode }) => {
            return (
                <h1 className="mb-2 mt-6 text-3xl font-semibold" {...props}>
                    {children}
                </h1>
            );
        },
        h2: ({ children, ...props }: { children: ReactNode }) => {
            return (
                <h2 className="mb-2 mt-6 text-2xl font-semibold" {...props}>
                    {children}
                </h2>
            );
        },
        h3: ({ children, ...props }: { children: ReactNode }) => {
            return (
                <h3 className="mb-2 mt-6 text-xl font-semibold" {...props}>
                    {children}
                </h3>
            );
        },
        h4: ({ children, ...props }: { children: ReactNode }) => {
            return (
                <h4 className="mb-2 mt-6 text-lg font-semibold" {...props}>
                    {children}
                </h4>
            );
        },
        h5: ({ children, ...props }: { children: ReactNode }) => {
            return (
                <h5 className="mb-2 mt-6 text-base font-semibold" {...props}>
                    {children}
                </h5>
            );
        },
        h6: ({ children, ...props }: { children: ReactNode }) => {
            return (
                <h6 className="mb-2 mt-6 text-sm font-semibold" {...props}>
                    {children}
                </h6>
            );
        },
    };
    return (
        <ReactMarkdown remarkPlugins={[remarkGfm]} components={components as Partial<Components>}>
            {children}
        </ReactMarkdown>
    );
};

export const Markdown = memo(NonMemoizedMarkdown, (prevProps, nextProps) => prevProps.children === nextProps.children);
