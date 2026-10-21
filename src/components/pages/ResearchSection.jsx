"use client";

import { useLanguage } from "@/components/LanguageProvider";
import PublicationsList from "@/components/pages/PublicationsList";
import StudyBlock from "@/components/StudyBlock";
import { uxDimensions } from "@/data/site";

const stats = [
  { key: "respondents", value: "193" },
  { key: "interviews", value: "5" },
  { key: "dimensions", value: "13" },
  { key: "hedonic", value: "5.49" },
  { key: "pragmatic", value: "5.41" },
];

const uxScores = [
  { label: "Pragmatic UX", value: 5.41 },
  { label: "Hedonic UX", value: 5.49 },
];

// The thesis, in full: context, aims, both strands, the instrument results, the
// disclosed limits and the design implications.
export default function ResearchSection() {
  const { text } = useLanguage();

  return (
    // Research: the instrument, its numbers, its result.
    <section className='border-t border-border bg-surface'>
      <div className='mx-auto max-w-shell px-5 py-20 md:px-10 md:py-28'>
        <div className='grid gap-x-16 gap-y-8 lg:grid-cols-12'>
          <h2 className='text-3xl md:text-4xl lg:col-span-4'>{text.home.research}</h2>
          <p className='measure text-lg text-secondary lg:col-span-8'>
            {text.home.researchIntro}
          </p>
        </div>

        <div className='mt-16 border-t-2 border-primary pt-10'>
          <h3 className='max-w-4xl text-2xl font-medium md:text-3xl'>{text.home.studyTitle}</h3>
          <p className='measure mt-6 text-secondary'>{text.home.studyBody}</p>

          <dl className='mt-16 space-y-8'>
            <StudyBlock label={text.home.contextTitle}>
              <p className='measure text-secondary'>{text.home.context}</p>
            </StudyBlock>

            <StudyBlock label={text.home.aimsTitle}>
              <ol className='space-y-3'>
                {text.home.aims.map((aim, index) => (
                  <li key={aim} className='grid grid-cols-[2rem_1fr] gap-x-4'>
                    <span className='mono text-secondary'>{String(index + 1).padStart(2, "0")}</span>
                    <span className='text-secondary'>{aim}</span>
                  </li>
                ))}
              </ol>
            </StudyBlock>

            <StudyBlock label={text.home.strandsTitle}>
              <div className='grid gap-10 sm:grid-cols-2'>
                {text.home.strands.map((strand) => (
                  <div key={strand.label} className='border-t border-primary pt-5'>
                    <h4 className='mono uppercase text-primary'>{strand.label}</h4>
                    <p className='mt-3 text-secondary leading-6'>{strand.body}</p>
                  </div>
                ))}
              </div>
            </StudyBlock>
          </dl>

          <div className='mt-14 grid grid-cols-2 gap-px border border-border bg-border sm:grid-cols-3 lg:grid-cols-5'>
            {stats.map((stat) => (
              <div key={stat.key} className='bg-background px-5 py-6'>
                <strong className='block font-display text-3xl font-semibold tabular-nums tracking-[-0.03em] text-primary'>
                  {stat.value}
                </strong>
                <span className='mono mt-3 block text-secondary'>{text.home.stats[stat.key]}</span>
              </div>
            ))}
          </div>

          <div className='mt-14 max-w-3xl'>
            {uxScores.map((score) => (
              <div
                key={score.label}
                className='grid grid-cols-[6.5rem_1fr_3.5rem] items-center gap-4 border-b border-border py-5'>
                <span className='mono text-secondary'>{score.label}</span>
                <span className='relative block h-[6px] w-full bg-border'>
                  <span
                    className='block h-full bg-primary'
                    style={{ width: `${(score.value / 7) * 100}%` }}
                  />
                    {/* Midpoint of the 7-point scale, so "above the midpoint" is legible. */}
                    <span
                      aria-hidden='true'
                      className='pointer-events-none absolute inset-y-0 left-1/2 w-px bg-background'
                    />
                  {/* Scale ticks: quarter marks on the track, no added copy. */}
                  <span
                    className='pointer-events-none absolute inset-0 flex justify-between'
                    aria-hidden='true'>
                    <span className='w-px bg-background' />
                    <span className='w-px bg-background' />
                    <span className='w-px bg-background' />
                  </span>
                </span>
                <span className='mono text-right tabular-nums text-primary'>{score.value}</span>
              </div>
            ))}
            <dl className='mt-16 space-y-8'>
              <StudyBlock label={text.home.touchpointsTitle}>
                <ul className='border-t border-border'>
                  {text.home.touchpoints.map(([num, name, level]) => (
                    <li
                      key={num}
                      className='grid grid-cols-[2.5rem_1fr_auto] items-baseline gap-x-4 border-b border-border py-3'>
                      <span className='mono text-secondary'>{num}</span>
                      <span className='text-[0.95rem] text-primary'>{name}</span>
                      <span className='mono text-right text-secondary'>{level}</span>
                    </li>
                  ))}
                </ul>
              </StudyBlock>

              <StudyBlock label={text.home.dimensionTitle}>
                <ul className='border-t border-border'>
                  {uxDimensions.map(([name, value]) => (
                    <li
                      key={name}
                      className='grid grid-cols-[1fr_3.5rem] items-center gap-x-6 border-b border-border py-2.5 sm:grid-cols-[13rem_1fr_3.5rem]'>
                      <span className='text-[0.95rem] text-primary'>{name}</span>
                      <span className='relative hidden h-[6px] w-full bg-border sm:block'>
                        <span
                          className='block h-full bg-primary'
                          style={{ width: `${(value / 7) * 100}%` }}
                        />
                          {/* Midpoint of the 7-point scale, so "above the midpoint" is legible. */}
                          <span
                            aria-hidden='true'
                            className='pointer-events-none absolute inset-y-0 left-1/2 w-px bg-background'
                          />
                      </span>
                      <span className='mono text-right tabular-nums text-primary'>
                        {value.toFixed(2)}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className='mono mt-4 text-secondary'>{text.home.dimensionNote}</p>
              </StudyBlock>

              <StudyBlock label={text.home.findingsTitle}>
                <ul className='space-y-3'>
                  {text.home.findings.map((finding) => (
                    <li key={finding} className='relative pl-6 text-secondary leading-6'>
                      <span
                        aria-hidden='true'
                        className='absolute left-0 top-[0.7em] h-px w-3 bg-primary'
                      />
                      {finding}
                    </li>
                  ))}
                </ul>
              </StudyBlock>

              <StudyBlock label={text.home.rigourTitle}>
                <ul className='space-y-3'>
                  {text.home.rigour.map((item) => (
                    <li key={item} className='measure text-secondary leading-6'>
                      {item}
                    </li>
                  ))}
                </ul>
              </StudyBlock>

              <StudyBlock label={text.home.implicationsTitle}>
                <ul className='space-y-3'>
                  {text.home.implications.map((item) => (
                    <li key={item} className='relative pl-6 text-secondary leading-6'>
                      <span
                        aria-hidden='true'
                        className='absolute left-0 top-[0.7em] h-px w-3 bg-primary'
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </StudyBlock>

              <StudyBlock label={text.home.roleTitle}>
                <p className='measure text-secondary'>{text.home.roleNote}</p>
              </StudyBlock>
            </dl>
          </div>
        </div>

      <PublicationsList />
    </div>
    </section>
  );
}
