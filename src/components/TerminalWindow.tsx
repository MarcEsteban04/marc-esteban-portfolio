import type { ReactNode } from "react";

type TerminalWindowProps = {
  title?: string;
  children: ReactNode;
  className?: string;
};

/**
 * A macOS-style terminal chrome wrapper used for decorative code blocks.
 */
export function TerminalWindow({
  title = "bash",
  children,
  className = "",
}: TerminalWindowProps) {
  return (
    <div
      className={`glass-strong overflow-hidden rounded-xl shadow-2xl shadow-black/40 ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-border-subtle bg-white/[0.03] px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-500/80" aria-hidden />
        <span className="h-3 w-3 rounded-full bg-yellow-500/80" aria-hidden />
        <span className="h-3 w-3 rounded-full bg-green-500/80" aria-hidden />
        <span className="ml-2 font-mono text-xs text-muted-dim">{title}</span>
      </div>
      <div className="p-4 font-mono text-sm leading-relaxed sm:p-5">
        {children}
      </div>
    </div>
  );
}
