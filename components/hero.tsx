export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-3xl px-6 pt-36 pb-20 md:px-10 md:pt-44 md:pb-24">
      <div className="load-in">
        <h1 className="text-4xl tracking-tight md:text-5xl">Andrei Dan</h1>
        <a
          href="https://cs.uwaterloo.ca"
          target="_blank"
          rel="noopener noreferrer"
          className="kicker mt-2 block text-base transition-colors hover:text-foreground hover:underline"
        >
          Computer Science, University of Waterloo
        </a>

        <p className="mt-6 max-w-lg text-[17px] leading-relaxed text-foreground/85">
          I&rsquo;m building AI automation at Corpay, where I work on agents wired into the
          development cycle, and backend systems at UWaterloo CUBE, where I work on an NLP query
          engine.
        </p>

        <p className="mt-4 max-w-lg text-[17px] leading-relaxed text-foreground/85">
          I&rsquo;m interested in agents, retrieval, and the infrastructure that makes AI systems
          reliable enough to depend on. The field moves quickly and I like being close to the part
          of it that&rsquo;s still being figured out.
        </p>

        <p className="mt-4 max-w-lg text-[17px] leading-relaxed text-foreground/85">
          Outside of that I swim and play basketball.
        </p>

        <div className="mt-6 flex flex-wrap items-baseline gap-x-4 gap-y-1 text-[15px]">
          <a
            href="mailto:adan@uwaterloo.ca"
            className="underline decoration-border decoration-1 underline-offset-4 transition-colors hover:text-muted hover:decoration-foreground"
          >
            Email
          </a>
          <span className="text-muted-2">·</span>
          <a
            href="https://github.com/adandreidan"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-border decoration-1 underline-offset-4 transition-colors hover:text-muted hover:decoration-foreground"
          >
            GitHub
          </a>
          <span className="text-muted-2">·</span>
          <a
            href="https://www.linkedin.com/in/andrei-dan1/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-border decoration-1 underline-offset-4 transition-colors hover:text-muted hover:decoration-foreground"
          >
            LinkedIn
          </a>
          <span className="text-muted-2">·</span>
          <a
            href="https://x.com/andreid4n"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-border decoration-1 underline-offset-4 transition-colors hover:text-muted hover:decoration-foreground"
          >
            Twitter
          </a>
        </div>
      </div>
    </section>
  )
}
