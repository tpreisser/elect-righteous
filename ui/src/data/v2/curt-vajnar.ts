/* Auto-normalized with issue-mapped social/online cross-reference signals.
 * To refresh:
 *   node scripts/hydrate-v2-social-signals.mjs
 */

import type { CandidateFullV2 } from "@/data/types-v2";
import { validateCandidateV2 } from "@/data/types-v2";

export const CURT_VAJNAR_V2: CandidateFullV2 = {
  "slug": "curt-vajnar",
  "name": "Curt Vajnar",
  "party": "NP",
  "position": "USD 489 Board Member",
  "electionSlug": "usd-489-current",
  "incumbent": true,
  "occupation": "School Board Member",
  "religion": "Roman Catholic (Diocese of Salina)",
  "campaignWebsite": "https://usd489.community.highbond.com/portal/members.aspx?id=18",
  "issues": [
    {
      "id": "i-fiscal-oversight-1",
      "title": "Fiscal Oversight",
      "stated": {
        "text": "His signature issue. Voted against the Hays High and Roosevelt construction contract because he said board members did not have enough time to review it. Has consistently pushed for tighter spending controls on the $143.5 million bond program.",
        "sourceIds": [
          "s-1",
          "s-2",
          "s-3",
          "s-4"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Hays Post",
          "observation": "His basic decision rule is student-centered. In 2021, he said his reason for seeking the board was to secure the best possible education for all USD 489 students, including his own children. Asked for the philosophy behind his decisions, he framed the test as whether the decision is best for USD 489 students. He also said the board's accountability role includes appropriate use of funds and facilities,...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-2"
          ],
          "mappedToIssueId": "i-fiscal-oversight-1"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Hays Post",
          "observation": "That support for facilities does not mean he treats construction decisions as automatic. In 2023, he voted against the guaranteed maximum price contract for Hays High and Roosevelt, saying he did not believe he had enough chance to study the contract. In 2025, he joined the losing side of a vote to explore a separate bond-project manager, while also being quoted as thinking the idea came late in the process. His...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "i-fiscal-oversight-1"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Hays Post",
          "observation": "Vajnar's fiscal message is a tradeoff message, not a simple anti-tax line. In 2025, he said the district was doing well financially but acknowledged that mill-levy increases are hard on residents whose incomes are not rising as fast as costs. He paired that with the teacher-pay problem: if the district does not stay competitive, it risks losing good teachers or failing to recruit them. Source: Hays Post, Oct. 14,...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-3"
          ],
          "mappedToIssueId": "i-fiscal-oversight-1"
        }
      ]
    },
    {
      "id": "i-transparency-2",
      "title": "Transparency",
      "stated": {
        "text": "Has advocated for evening meetings so the public can attend, video recording of all board proceedings, and more time for board members to review agendas and contracts before voting.",
        "sourceIds": [
          "s-1",
          "s-2",
          "s-3",
          "s-4"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Hays Post",
          "observation": "I searched Curt Vajnar, Curt C. Vajnar, Hays USD 489, USD 489 Board of Education, Diligent/HighBond board portal, Hays Post, Tiger Media Network, Guidon/Hays High student media, Kansas Master Teacher, Emporia State, Golden Belt Bank naming rights, bond projects, superintendent, nepotism, board transparency, resource officer, teacher shortage, class size, real-world math, Facebook, LinkedIn, X/Twitter, Instagram,...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-1"
          ],
          "mappedToIssueId": "i-transparency-2"
        }
      ]
    },
    {
      "id": "i-nepotism-ethics-3",
      "title": "Nepotism / Ethics",
      "stated": {
        "text": "Opposed hiring Superintendent Ron Wilson's wife through the consent agenda and pressed for closer scrutiny of nepotism policies.",
        "sourceIds": [
          "s-1",
          "s-2",
          "s-3",
          "s-4"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Hays Post",
          "observation": "2023 nepotism debate: Hays Post reported Vajnar and Allen Park objected to hiring the superintendent's wife through routine personnel approval, prompting debate over the district nepotism policy. Source: Hays Post, Apr. 26, 2023.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-2"
          ],
          "mappedToIssueId": "i-nepotism-ethics-3"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Hays Post",
          "observation": "Hays Post - USD 489 BOE debates nepotism again",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-2"
          ],
          "mappedToIssueId": "i-nepotism-ethics-3"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Hays Post",
          "observation": "The same process instinct shows up in ethics and hiring. Hays Post reported that Vajnar and Allen Park objected in 2023 to hiring the superintendent's wife through the consent-agenda personnel process, leading to another debate over the district's nepotism policy. In his 2025 Q&A, Vajnar said one policy area he had questioned was how the district hires people, including interviews, background checks, and...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-2"
          ],
          "mappedToIssueId": "i-nepotism-ethics-3"
        }
      ]
    },
    {
      "id": "i-naming-rights-district-revenue-4",
      "title": "Naming Rights / District Revenue",
      "stated": {
        "text": "Pulled the Golden Belt Bank naming-rights deal from the agenda, arguing the district should seek better value and let other businesses compete rather than rushing into a weak contract.",
        "sourceIds": [
          "s-1",
          "s-2",
          "s-3",
          "s-4"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Hays Post",
          "observation": "The strongest issue-attention signals are facility/bond coverage and the Golden Belt Bank naming-rights debate, which appeared in Hays Post and Tiger Media Network coverage.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-1"
          ],
          "mappedToIssueId": "i-naming-rights-district-revenue-4"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Hays Post",
          "observation": "2021 reason for running: Vajnar said he wanted the best possible education for all USD 489 students, including his own children in the district. Source: Hays Post, Oct. 5, 2021.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-2"
          ],
          "mappedToIssueId": "i-naming-rights-district-revenue-4"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Hays Post",
          "observation": "2025 naming rights: Vajnar delayed the Golden Belt Bank naming-rights discussion, saying the district should be in charge of naming rather than reacting and should give supporting businesses an opportunity. Sources: Hays Post, Aug. 19, 2025, Tiger Media Network, Aug. 19, 2025.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-3"
          ],
          "mappedToIssueId": "i-naming-rights-district-revenue-4"
        }
      ]
    },
    {
      "id": "i-teacher-retention-5",
      "title": "Teacher Retention",
      "stated": {
        "text": "While his governance focus is on oversight, he has supported the broader goal of keeping good teachers and staff in the district.",
        "sourceIds": [
          "s-4",
          "s-1",
          "s-2",
          "s-3",
          "s-5"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Public web",
          "observation": "Harvest focus: candidate/profile-controlled or clearly candidate-attributed messaging from school-board Q&As, candidate forums, USD 489 board pages and meeting portal, public meeting/news coverage, student/local media, and visible campaign/social-platform absences.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-1"
          ],
          "mappedToIssueId": "i-teacher-retention-5"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Hays Post",
          "observation": "The clearest electoral attention signal is the 2025 result: Hays Post reported Vajnar was re-elected with 2,531 votes, the top total in the USD 489 race. Source: Hays Post, Nov. 5, 2025.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-4"
          ],
          "mappedToIssueId": "i-teacher-retention-5"
        }
      ]
    }
  ],
  "whoTheyAre": "Curt Vajnar is president of the USD 489 Board of Education and one of the best-known education figures in Hays. Public records describe him as a retired agriculture teacher who spent 31 years in the district, won Kansas Teacher of the Year while still relatively young, and later moved into ranching, farming, and small business work around Antonino and Hays. He and his wife Ruth raised five children.\n\nVajnar brings more than a teacher's biography to the board. He is one of those local figures who stayed visible after retirement and then translated a long school career into school governance. In Hays, that gives him credibility with people who know the district from inside and with taxpayers who see him as a rural, fiscally cautious voice.",
  "recordSummary": "Vajnar has made transparency and contract review recurring themes of his board service. He has argued that meetings and work sessions should be held at times the public can actually attend, that proceedings should be recorded, and that board members need enough time to read major contracts before voting. In 2025 he voted against the Hays High and Roosevelt construction contract, saying he did not believe board members had enough opportunity to educate themselves on it.\n\nHe has also been central in several of the district's internal fights. He opposed hiring Superintendent Ron Wilson's wife through the consent agenda, pressed for a closer look at nepotism rules, and pulled the proposed Golden Belt Bank naming-rights agreement from the agenda because he believed the district should seek better value and let other businesses compete. Even as board president, he has not been a reflexive vote for the administration.",
  "ownWordsNarrative": "Curt Vajnar's public voice is local, school-specific, and governance-focused. I found no verified campaign website or campaign social feed for him. The strongest source set is Hays Post candidate Q&As and forum coverage, USD 489 public board infrastructure, local news coverage of board meetings, and student/local media coverage. The official USD 489 public portal lists Vajnar as Board President and connects him to board retreat, regular, special, and work-study sessions. Source: [USD 489 public portal](https://usd489.community.highbond.com/portal/members.aspx?id=18).\n\nHis core credential is his long USD 489 teaching record. In the 2021 Hays NEA candidate profile published by Hays Post, Vajnar said he taught 31 years in USD 489, held National Board Certification, had Kansas teaching endorsements in agriculture education, biology, drivers education, and administration, and had been Kansas Teacher of the Year. Emporia State's public Kansas Master Teacher archive also lists Curt Vajnar of USD 489 Hays among the 1999 Kansas Master Teachers. Sources: [Hays Post, Oct. 5, 2021](https://hayspost.com/posts/23c8a445-672d-44c2-be79-5d6dc47a2b3a), [Emporia State 1999 award winners](https://www.emporia.edu/teachers-college/about-college/honors-awards/kansas-master-teacher-award-home/previous-winners/kansas-master-teacher-award-1999/).\n\nHis basic decision rule is student-centered. In 2021, he said his reason for seeking the board was to secure the best possible education for all USD 489 students, including his own children. Asked for the philosophy behind his decisions, he framed the test as whether the decision is best for USD 489 students. He also said the board's accountability role includes appropriate use of funds and facilities, superintendent oversight, and creating the best daily environment for teachers and students. Source: [Hays Post, Oct. 5, 2021](https://hayspost.com/posts/23c8a445-672d-44c2-be79-5d6dc47a2b3a).\n\nFacilities have been a defining theme. Before the 2022 bond vote, he argued facilities badly needed improvement and said passing a bond was critical after decades without a successful bond issue. By 2025, his message had shifted from passing the bond to finishing it well. In his reelection Q&A, he said he wanted the district to finish the new and renovated facilities, finish strong, and plan beyond a five-year capital cycle because turf and major facility components will come due in waves. Sources: [Hays Post, Oct. 5, 2021](https://hayspost.com/posts/23c8a445-672d-44c2-be79-5d6dc47a2b3a), [Hays Post, Oct. 14, 2025](https://hayspost.com/posts/199257e6-fc97-4089-8a4c-67a87d3422f8).\n\nThat support for facilities does not mean he treats construction decisions as automatic. In 2023, he voted against the guaranteed maximum price contract for Hays High and Roosevelt, saying he did not believe he had enough chance to study the contract. In 2025, he joined the losing side of a vote to explore a separate bond-project manager, while also being quoted as thinking the idea came late in the process. His pattern is pro-facility but review-heavy: the board should finish the bond, but contracts and oversight should not be rushed. Sources: [Hays Post, Oct. 5, 2023](https://hayspost.com/posts/6942435f-2284-422c-9ed9-5bf7d68c4984), [Hays Post, Mar. 28, 2025](https://hayspost.com/posts/e4ec7011-734d-4c18-ab28-c5b38d236126).\n\nVajnar's fiscal message is a tradeoff message, not a simple anti-tax line. In 2025, he said the district was doing well financially but acknowledged that mill-levy increases are hard on residents whose incomes are not rising as fast as costs. He paired that with the teacher-pay problem: if the district does not stay competitive, it risks losing good teachers or failing to recruit them. Source: [Hays Post, Oct. 14, 2025](https://hayspost.com/posts/199257e6-fc97-4089-8a4c-67a87d3422f8).\n\nTeacher recruitment and retention are long-running concerns for him. In 2021, he named teacher shortages and retention as one of the greatest problems facing public education and suggested using student-teacher placements, early postings, and incentives for timely retirement decisions as ways to improve hiring. In 2025 forum coverage, he again connected class size to qualified-teacher retention and the additional space created by the bond. Sources: [Hays Post, Oct. 5, 2021](https://hayspost.com/posts/23c8a445-672d-44c2-be79-5d6dc47a2b3a), [Hays Post, Oct. 7, 2025](https://hayspost.com/posts/e326ecf7-cf47-4f86-8ab8-57f7169f8536).\n\nHis governance style is built around policy, process, and chain of command. In 2021, he said the board's role is overseeing and approving policy, not daily management. In 2025, he told Hays Post that board members discuss items brought by administration and leaders, and that he is willing to listen to concerned residents after they have tried the chain of command. At the candidate forum, he described the superintendent as bringing items to the board while concerns move from teachers to principals, building administrators, superintendent, and then the board if needed. Sources: [Hays Post, Oct. 5, 2021](https://hayspost.com/posts/23c8a445-672d-44c2-be79-5d6dc47a2b3a), [Hays Post, Oct. 14, 2025](https://hayspost.com/posts/199257e6-fc97-4089-8a4c-67a87d3422f8), [Hays Post, Oct. 7, 2025](https://hayspost.com/posts/e326ecf7-cf47-4f86-8ab8-57f7169f8536).\n\nThe same process instinct shows up in ethics and hiring. Hays Post reported that Vajnar and Allen Park objected in 2023 to hiring the superintendent's wife through the consent-agenda personnel process, leading to another debate over the district's nepotism policy. In his 2025 Q&A, Vajnar said one policy area he had questioned was how the district hires people, including interviews, background checks, and selection steps. Sources: [Hays Post, Apr. 26, 2023](https://hayspost.com/posts/9fb91da0-f9e5-4d80-a065-c5c2727c6fb8), [Hays Post, Oct. 14, 2025](https://hayspost.com/posts/199257e6-fc97-4089-8a4c-67a87d3422f8).\n\nThe Golden Belt Bank naming-rights debate is the clearest example of his sponsorship philosophy. Vajnar delayed action on the $200,000 offer for the Hays High football field, arguing the district should decide what is named, set contract terms, avoid merely reacting to the first offer, and give other supporting businesses an opportunity. Later, he said facility names belong to Hays citizens, not a business, and that any naming-rights money should be tied to field maintenance. Sources: [Hays Post, Aug. 19, 2025](https://hayspost.com/posts/a90fb672-f7e5-4826-b5f3-1decd214e83c), [Tiger Media Network, Aug. 19, 2025](https://tigermedianet.com/?p=88429), [Hays Post, Sept. 11, 2025](https://hayspost.com/posts/aefb9f40-2e86-4bb2-976e-2f731e7ce14f).\n\nOn safety, Vajnar has a specific ask: more school resource officer coverage. In the 2025 Q&A, he said he was proud of helping push the first resource officer for the 2023-24 year and would continue pushing for a second one. He framed it as student and staff safety in a more dangerous world, while acknowledging the budget cost. Source: [Hays Post, Oct. 14, 2025](https://hayspost.com/posts/199257e6-fc97-4089-8a4c-67a87d3422f8).\n\nOn technology and operations, Vajnar sounds practical rather than ideological. In 2021, he called technology essential but wanted better staff availability, repairs, replacements, and individual help for educators. In 2025, he supported vehicle leasing because of safety and long road trips, and he praised the board's laptop decision for high-school students because it was researched rather than simply accepting the first recommendation. Sources: [Hays Post, Oct. 5, 2021](https://hayspost.com/posts/23c8a445-672d-44c2-be79-5d6dc47a2b3a), [Hays Post, Oct. 14, 2025](https://hayspost.com/posts/199257e6-fc97-4089-8a4c-67a87d3422f8).\n\nOn curriculum and assessment, his visible comments favor practical learning. Hays Post reported in 2024 that a graduation-policy revision was tabled because Vajnar wanted a list of electives that would meet a new STEM requirement. In 2025, as board president, he said he hoped curriculum would focus on real-world math instead of teaching only to the test. Sources: [Hays Post, Mar. 5, 2024](https://hayspost.com/posts/4186bd0a-c7d1-4fe4-8622-6b0204fed740), [Hays Post, Nov. 14, 2025](https://hayspost.com/posts/a1ad62ca-72ac-46d4-a3c1-e2248ae736b3).\n\nHis reelection result reinforces the local profile. Hays Post reported that Vajnar, the current board president, was re-elected in 2025 with 2,531 votes, the highest total in the USD 489 race, and that all three winning candidates focused on completing bond projects. Vajnar's election-night comment was that he wanted to complete the bond work on budget. Source: [Hays Post, Nov. 5, 2025](https://hayspost.com/posts/ff929dc5-f4f5-433c-876e-59fc19df6a2d).\n\nVisible absences matter. I found no verified campaign website, no campaign donation page, no campaign finance page, and no clearly attributable public Facebook, X/Twitter, Instagram, Threads, Bluesky, TikTok, Substack, LinkedIn activity archive, or personal YouTube channel. USD 489 has official district communications and public meeting infrastructure, but those are not Vajnar-controlled campaign channels. Because no accessible controlled social feed was verified, this summary does not claim post counts, likes, shares, comments, or deleted/private social content.\n\nMethodology: I reviewed public sources visible through May 11, 2026, including USD 489 official pages and public meeting portal, Hays Post candidate profiles, Q&As, forum and board-meeting coverage, Tiger Media Network reporting, Emporia State teaching-award records, and targeted searches for campaign and social platforms. I prioritized official/school sources and clearly attributed candidate or board-member statements. Disclaimer: this is a public-source messaging summary, not a complete biography, endorsement, legal assessment, or transcript archive; inaccessible, private, deleted, login-only, or unverified social content was not reconstructed or invented.",
  "whereTheyWorship": "Vajnar is publicly identified with Our Lady, Help of Christians Catholic Church in Antonino, where the source record says he has served on the parish council. Church website: https://www.ihm-church.com/",
  "church": {
    "name": "Our Lady, Help of Christians Catholic Church, Antonino, KS",
    "denomination": "Roman Catholic (Diocese of Salina)",
    "url": "https://www.ihm-church.com/",
    "details": "Denomination: Roman Catholic (Diocese of Salina). Church Role: Parish Council Member."
  },
  "campaignFinance": {
    "totalRaised": "No clean total verified in reviewed public sources",
    "narrative": "No campaign finance data was available online.",
    "donors": [
      {
        "name": "Campaign finance data",
        "amount": "No campaign finance data available online"
      }
    ],
    "reportingPeriod": "2026 cycle",
    "source": "Candidate questionnaires, local reporting, and reviewed public records"
  },
  "socialResearchNote": "Social research is included as observed public behavior, not as a proxy for belief. Platforms/sources checked: USD 489 official pages, USD 489 public meeting portal, Hays Post, Tiger Media Network, Emporia State teaching-award records, Facebook, X / Twitter, Instagram, Threads, Bluesky, TikTok, Substack, LinkedIn, YouTube, Public search. Harvest range: 2021-10-05 through 2026-05-11.",
  "sources": [
    {
      "id": "s-1",
      "tier": "primary",
      "url": "https://usd489.community.highbond.com/portal/members.aspx?id=18",
      "title": "USD 489 public portal member page - Curt Vajnar listed as Board President",
      "publisher": "Usd489.Community.Highbond",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Curt Vajnar."
      ]
    },
    {
      "id": "s-2",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/23c8a445-672d-44c2-be79-5d6dc47a2b3a",
      "title": "Hays Post - 2021 USD 489 candidate profile: Curt Vajnar",
      "publisher": "Hayspost",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Curt Vajnar.",
        "Observed public online activity mapped to Fiscal Oversight.",
        "Observed public online activity mapped to Naming Rights / District Revenue."
      ]
    },
    {
      "id": "s-3",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/199257e6-fc97-4089-8a4c-67a87d3422f8",
      "title": "Hays Post - 2025 Hays USD candidate Q&A: Curt Vajnar",
      "publisher": "Hayspost",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Curt Vajnar.",
        "Observed public online activity mapped to Fiscal Oversight."
      ]
    },
    {
      "id": "s-4",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/5e878e4beb7f170536019f51",
      "title": "Hays Post - Teacher of the Month: Vajnar says goodbye to HHS",
      "publisher": "Hayspost",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Curt Vajnar."
      ]
    },
    {
      "id": "s-5",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/635f478c-4649-44c1-80d8-631bc0897878",
      "title": "HaysPost USD 489 Candidate Profile: Curt Vajnar",
      "publisher": "Hayspost",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Curt Vajnar."
      ]
    },
    {
      "id": "s-social-crossref-1",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/6942435f-2284-422c-9ed9-5bf7d68c4984",
      "title": "Hays Post / Hayspost",
      "publisher": "Hayspost",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Fiscal Oversight.",
        "That support for facilities does not mean he treats construction decisions as automatic. In 2023, he voted against the guaranteed maximum price contract for Hays High and Roosevelt"
      ]
    },
    {
      "id": "s-social-crossref-2",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/9fb91da0-f9e5-4d80-a065-c5c2727c6fb8",
      "title": "Hays Post / Hayspost",
      "publisher": "Hayspost",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Nepotism / Ethics.",
        "2023 nepotism debate: Hays Post reported Vajnar and Allen Park objected to hiring the superintendent's wife through routine personnel approval, prompting debate over the district n"
      ]
    },
    {
      "id": "s-social-crossref-3",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/a90fb672-f7e5-4826-b5f3-1decd214e83c",
      "title": "Hays Post / Hayspost",
      "publisher": "Hayspost",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Naming Rights / District Revenue.",
        "2025 naming rights: Vajnar delayed the Golden Belt Bank naming-rights discussion, saying the district should be in charge of naming rather than reacting and should give supporting "
      ]
    },
    {
      "id": "s-social-crossref-4",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/ff929dc5-f4f5-433c-876e-59fc19df6a2d",
      "title": "Hays Post / Hayspost",
      "publisher": "Hayspost",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Teacher Retention.",
        "The clearest electoral attention signal is the 2025 result: Hays Post reported Vajnar was re-elected with 2,531 votes, the top total in the USD 489 race. Source: Hays Post, Nov. 5,"
      ]
    }
  ]
};

if (process.env.NODE_ENV !== "production") {
  const result = validateCandidateV2(CURT_VAJNAR_V2);
  if (!result.ok) {
    // eslint-disable-next-line no-console
    console.error(
      "[curt-vajnar.ts] validateCandidateV2 FAILED:\n" +
        result.errors.join("\n"),
    );
  }
}
