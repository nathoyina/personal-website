export function About() {
  return (
    <section id="about" className="border-t border-stone-200 bg-stone-50">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="mb-6 text-2xl font-semibold tracking-tight text-zinc-900">
          A bit about me
        </h2>
        <div className="max-w-2xl space-y-4 leading-relaxed text-zinc-600">
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
    </section>
  );
}
