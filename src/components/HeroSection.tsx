"use client";

import { motion, useReducedMotion } from "motion/react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { TbMail, TbArrowDown, TbDownload, TbSend } from "react-icons/tb";
import { useTypewriter } from "@/hooks/useTypewriter";
import { site, typedRoles, heroIntro } from "@/data/site";
import { TerminalWindow } from "./TerminalWindow";

export function HeroSection() {
  const typed = useTypewriter(typedRoles);
  const reduced = useReducedMotion();

  const fadeUp = {
    initial: reduced ? { opacity: 0 } : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-16"
    >
      {/* Subtle grid backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 30%, black, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 30%, black, transparent 75%)",
        }}
      />

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        {/* Left: copy */}
        <div>
          <motion.p
            {...fadeUp}
            transition={{ duration: 0.5 }}
            className="font-mono text-sm text-accent"
          >
            <span className="cursor-blink mr-1">&nbsp;</span> Hello, world.
          </motion.p>

          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            Hi, I&apos;m <span className="text-gradient">Marc Esteban</span>
          </motion.h1>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 h-8 font-mono text-lg text-muted sm:text-xl"
            aria-live="polite"
          >
            <span className="text-muted-dim">&gt; </span>
            <span className="text-foreground">{typed}</span>
            <span className="cursor-blink ml-0.5">&nbsp;</span>
          </motion.div>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-6 max-w-xl text-base leading-7 text-muted"
          >
            {heroIntro}
          </motion.p>

          {/* CTAs */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-accent-glow transition-all hover:-translate-y-0.5 hover:brightness-110"
            >
              <TbArrowDown size={18} /> View Projects
            </a>
            <a
              href={site.resumeUrl}
              download
              className="inline-flex items-center gap-2 rounded-lg border border-border-strong bg-surface px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-surface-strong"
            >
              <TbDownload size={18} /> Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-border-strong bg-surface px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-surface-strong"
            >
              <TbSend size={18} /> Contact Me
            </a>
          </motion.div>

          {/* Socials */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-8 flex items-center gap-4"
          >
            <SocialLink href={site.socials.github} label="GitHub">
              <FaGithub size={22} />
            </SocialLink>
            <SocialLink href={site.socials.linkedin} label="LinkedIn">
              <FaLinkedin size={22} />
            </SocialLink>
            <SocialLink href={site.socials.email} label="Email">
              <TbMail size={22} />
            </SocialLink>
          </motion.div>
        </div>

        {/* Right: terminal card */}
        <motion.div
          initial={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden lg:block"
        >
          <TerminalWindow title="marc@portfolio: ~">
            <pre className="whitespace-pre-wrap break-words">
              <span className="text-muted-dim">$ </span>
              <span className="text-accent-2">whoami</span>
              {"\n"}
              <span className="text-foreground">Marc Esteban — Full-Stack Web Developer</span>
              {"\n\n"}
              <span className="text-muted-dim">$ </span>
              <span className="text-accent-2">cat</span> stack.json
              {"\n"}
              <span className="text-muted">{"{"}</span>
              {"\n"}
              {"  "}<span className="text-accent">&quot;frontend&quot;</span>
              <span className="text-muted">: [</span>
              <span className="text-foreground">&quot;React&quot;, &quot;TypeScript&quot;, &quot;Tailwind&quot;</span>
              <span className="text-muted">],</span>
              {"\n"}
              {"  "}<span className="text-accent">&quot;backend&quot;</span>
              <span className="text-muted">: [</span>
              <span className="text-foreground">&quot;Node.js&quot;, &quot;Express&quot;, &quot;PHP&quot;</span>
              <span className="text-muted">],</span>
              {"\n"}
              {"  "}<span className="text-accent">&quot;data&quot;</span>
              <span className="text-muted">: [</span>
              <span className="text-foreground">&quot;MySQL&quot;, &quot;MongoDB&quot;</span>
              <span className="text-muted">],</span>
              {"\n"}
              {"  "}<span className="text-accent">&quot;ai&quot;</span>
              <span className="text-muted">: [</span>
              <span className="text-foreground">&quot;Google Gemini&quot;</span>
              <span className="text-muted">]</span>
              {"\n"}
              <span className="text-muted">{"}"}</span>
              {"\n\n"}
              <span className="text-muted-dim">$ </span>
              <span className="text-accent-2">./build</span> --value --for-business
              <span className="cursor-blink ml-1">&nbsp;</span>
            </pre>
          </TerminalWindow>
        </motion.div>
      </div>
    </section>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      aria-label={label}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="rounded-md p-2 text-muted transition-colors hover:text-accent"
    >
      {children}
    </a>
  );
}
