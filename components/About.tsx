import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <Reveal>
        <div className="rounded-card bg-lavender px-6 py-12 shadow-soft sm:rounded-panel sm:px-12 sm:py-16 lg:rounded-sheet">
          <h2 className="section-heading mb-6 text-foreground">A bit about me</h2>
          <div className="max-w-2xl space-y-4 text-lg leading-relaxed text-foreground">
            <p>
              I&apos;m a product manager who ships, not just writes specs. When I
              run into a problem — fumbling through Mandarin standups, hunting
              halal food across five apps, helping a kid I tutor drill fractions without
              pictures — I prototype and build.
            </p>
            <p>
              I lean on ML and LLMs where they genuinely help: Gemini for language
              breakdowns and lesson drafts, TTS for conversation practice, data
              pipelines for real-world utility. I also use loop engineering to keep
              improving what works — measuring clicks and iterating on the
              portfolio itself.
            </p>
            <p>
              Everything here is live and on GitHub. Click through, try them, poke
              around.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
