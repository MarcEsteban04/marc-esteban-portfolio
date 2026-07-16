import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { TbMail, TbMapPin } from "react-icons/tb";
import { site } from "@/data/site";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { ContactForm } from "./ContactForm";

export function ContactCTA() {
  return (
    <section id="contact" className="section-py scroll-mt-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="contact --open-to-work"
          title="Let's Build Something Together."
          description="I'm open to junior developer opportunities, freelance projects, and collaborations involving AI and web development."
        />

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-5">
          {/* Contact details */}
          <Reveal className="lg:col-span-2">
            <div className="space-y-3">
              <ContactLink
                href={site.socials.email}
                icon={<TbMail size={20} />}
                label="Email"
                value={site.email}
              />
              <ContactLink
                href={site.socials.linkedin}
                icon={<FaLinkedin size={20} />}
                label="LinkedIn"
                value="Connect with me"
                external
              />
              <ContactLink
                href={site.socials.github}
                icon={<FaGithub size={20} />}
                label="GitHub"
                value="View my code"
                external
              />
              <div className="glass flex items-center gap-3 rounded-xl p-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <TbMapPin size={20} aria-hidden />
                </span>
                <div>
                  <p className="text-xs text-muted-dim">Location</p>
                  <p className="text-sm text-foreground">{site.location}</p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.1} className="lg:col-span-3">
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ContactLink({
  href,
  icon,
  label,
  value,
  external = false,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  value: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="glass group flex items-center gap-3 rounded-xl p-4 transition-colors hover:border-accent/40 hover:bg-surface-strong"
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent transition-transform duration-300 group-hover:scale-110">
        {icon}
      </span>
      <div>
        <p className="text-xs text-muted-dim">{label}</p>
        <p className="text-sm text-foreground">{value}</p>
      </div>
    </a>
  );
}
