import Container from "@/components/layout/container";
import ElectionCard from "@/components/ui/election-card";
import { ELECTIONS, type ElectionLevel } from "@/data/elections";

const LEVEL_SECTIONS: Array<{
  level: ElectionLevel;
  title: string;
  description: string;
}> = [
  {
    level: "Federal",
    title: "Federal",
    description:
      "The U.S. Senate and KS-01 races are the highest-profile contests for Hays-area voters in 2026.",
  },
  {
    level: "State",
    title: "State",
    description:
      "These statewide and legislative races decide who writes policy in Topeka and how Kansas government is run.",
  },
  {
    level: "Local",
    title: "Local",
    description:
      "These pages group the current city, county, and school leaders whose decisions shape daily life in Hays even when their seats are not all on this year's ballot.",
  },
  {
    level: "Ballot Measure",
    title: "Ballot Measures",
    description:
      "Statewide amendments can change the rules of the game for Kansas voters long after one election cycle ends.",
  },
];

export default function ElectionsPage() {
  return (
    <>

      <main id="main-content">
        <section
          className="section-navy"
          style={{ paddingTop: "3rem", paddingBottom: "3rem" }}
          aria-labelledby="elections-heading"
        >
          <Container>
            <div className="max-w-3xl">
              <p
                className="text-xs font-heading font-semibold uppercase tracking-widest mb-3"
                style={{ color: "var(--color-teal)" }}
              >
                Hays, Kansas &middot; 2026 Cycle
              </p>
              <h1
                id="elections-heading"
                className="font-heading font-bold text-white leading-tight mb-4"
                style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
              >
                2026 Elections
              </h1>
              <p
                className="text-base leading-relaxed"
                style={{ color: "rgba(246,246,246,0.82)" }}
              >
                Every election page on the site, grouped the way most Hays voters actually think about them:
                federal first, then state, then local, then ballot measures.
              </p>
            </div>
          </Container>
        </section>

        <section className="section-light" aria-labelledby="elections-list-heading">
          <Container>
            <div className="max-w-3xl mb-10">
              <h2
                id="elections-list-heading"
                className="font-heading font-bold text-2xl mb-3"
                style={{ color: "var(--color-navy)" }}
              >
                Election Guide
              </h2>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--color-slate)" }}
              >
                Each card links to a plain-English overview of the race, why it matters, and every
                candidate currently wired into that election page.
              </p>
            </div>

            <div className="flex flex-col gap-14">
              {LEVEL_SECTIONS.map((section) => {
                const elections = ELECTIONS.filter((election) => election.level === section.level);

                if (elections.length === 0) {
                  return null;
                }

                return (
                  <section key={section.level} aria-labelledby={`${section.level}-heading`}>
                    <div className="flex flex-col gap-2 mb-6">
                      <p
                        className="text-xs font-heading font-semibold uppercase tracking-widest"
                        style={{ color: "var(--color-teal-dark)" }}
                      >
                        {section.level}
                      </p>
                      <h3
                        id={`${section.level}-heading`}
                        className="font-heading font-bold text-2xl"
                        style={{ color: "var(--color-navy)" }}
                      >
                        {section.title}
                      </h3>
                      <p
                        className="text-sm leading-relaxed max-w-3xl"
                        style={{ color: "var(--color-slate)" }}
                      >
                        {section.description}
                      </p>
                    </div>

                    <ul
                      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                      role="list"
                      aria-label={`${section.title} elections`}
                    >
                      {elections.map((election) => (
                        <li key={election.slug}>
                          <ElectionCard
                            name={election.name}
                            date={election.date}
                            type={election.level}
                            candidateCount={election.candidateCount}
                            jurisdiction={election.jurisdiction}
                            slug={election.slug}
                            plainEnglish={election.plainEnglish}
                          />
                        </li>
                      ))}
                    </ul>
                  </section>
                );
              })}
            </div>
          </Container>
        </section>
      </main>

    </>
  );
}
