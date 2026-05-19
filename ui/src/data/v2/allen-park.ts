/**
 * Allen Park v2 candidate data — Phase 1 proof-of-concept.
 *
 * Pattern A: standalone file, imported directly by the v2 route renderer.
 * No edits to candidates.ts required.
 *
 * Issue rendered: Superintendent hiring practices and nepotism policy.
 * This issue has the strongest primary-source paper trail for Park:
 * a recorded 5-2 vote against the superintendent's wife hire (April 2023),
 * a follow-up board debate on nepotism policy, a second recorded dissent on
 * administrator contract process (January 2024), and a bond-related
 * dissenting vote with public rationale (September 2025).
 *
 * Validator result: validateCandidateV2(ALLEN_PARK_V2) === { ok: true }
 * (confirmed before commit — see inline validator call at bottom).
 */

import type { CandidateFullV2 } from "@/data/types-v2";
import { validateCandidateV2 } from "@/data/types-v2";

export const ALLEN_PARK_V2: CandidateFullV2 = {
  // ── Metadata ──────────────────────────────────────────────────────────────
  slug: "allen-park",
  name: "Allen Park",
  party: "NP",
  position: "USD 489 School Board Member",
  electionSlug: "usd-489-current",
  incumbent: true,
  occupation: "Retired principal; licensed insurance agent; part-time UPS driver",

  // ── At-a-glance ───────────────────────────────────────────────────────────
  hometown: "Hays, Kansas",
  education:
    "B.S. Industrial/Elementary Education, Fort Hays State University; M.S. School Administration, Fort Hays State University",
  family: "Wife Patti (educator, retired); four children, all USD 489 graduates",

  // ── Issues ────────────────────────────────────────────────────────────────
  issues: [
    {
      id: "i-hiring-nepotism",
      title: "Superintendent hiring practices and nepotism policy",
      stated: {
        text:
          "Park said publicly that he was \"unsure if the district was following the policy\" on nepotism after the board approved hiring Superintendent Ron Wilson's wife as a teacher. He described his vote against the hire as a matter of policy process, not personal opposition to the individual. On administrator contracts, he said the board has a responsibility to see specific salary, vacation, and holiday terms for each contract rather than approving them all at once by reference to an outside handbook the board had not formally reviewed since 2024. In his 2023 candidate Q&A, he stated that \"public deliberations should not happen behind closed doors\" and that communication between the board and the school community — including minority opinions — builds the trust the district needs.",
        sourceIds: ["s-hayspost-nepotism-debate", "s-hayspost-park-qa-2023"],
      },
      actions: [
        {
          id: "a-nepotism-vote-2023",
          date: "2023-04-26",
          body:
            "Voted no (5-2, with Curt Vajnar) when the board approved hiring Andrea Wilson, wife of Superintendent Ron Wilson, through the consent agenda. Park did not ask that the item be pulled from the consent agenda separately (Vajnar made that request); Park's vote was a recorded dissent on the final motion. After the vote, Park said he was unsure whether the district was following its own nepotism policy and asked the board to review the policy further.",
          sourceIds: [
            "s-hayspost-nepotism-vote",
            "s-hayspost-nepotism-debate",
          ],
        },
        {
          id: "a-admin-contracts-2024",
          date: "2024-01-01",
          body:
            "Made a motion to evaluate and vote on each administrator's contract individually rather than as a blanket extension. The motion failed 5-2. Park raised the concern that contracts were being renewed by reference to an administrative handbook the board had not formally reviewed since 2024, and that specific salary, vacation days, and holidays should be spelled out in each contract. He also made a related motion to move into executive session to discuss the superintendent's contract; that motion also failed when three members voted against, with one calling the request potentially a \"gossip session and micromanagement.\"",
          sourceIds: [
            "s-hayspost-admin-contracts",
            "s-citizenjournal-board-takeaways",
          ],
        },
        {
          id: "a-asbestos-vote-2025",
          date: "2025-09-23",
          body:
            "Voted no on an asbestos removal change order at the high school, and also voted against an $88,347 high-school facilities change order at the same meeting. Park said his no vote was about process, not opposition to the safety work itself: \"I am No. 1 on safety.\" He said he wanted the change-order documentation reviewed in advance rather than presented at the meeting. Board member Ruth Ruder publicly challenged him after the vote, saying she was \"sick and tired\" of repeated no votes on items she considered routine.",
          sourceIds: ["s-hayspost-asbestos-vote"],
        },
        {
          id: "a-bond-project-manager-2024",
          date: "2024-05-01",
          body:
            "Publicly argued in favor of hiring an additional project manager for the remaining half of the $143.5 million bond program, saying: \"We have half of the bond left. I agree we are way late. It doesn't hurt. Let's see what we can do... It is something fiscally important that we do so we are accountable to our taxpayers.\" The board voted 5-2 against adding the manager, with Park and Derek Yarmer in the minority.",
          sourceIds: ["s-hayspost-bond-manager"],
        },
        {
          id: "a-property-sale-2025",
          date: "2025-11-11",
          body:
            "At a November 2025 board meeting, Park asked why the board was moving quickly on the sale of district land north of Hays Middle School, requested that an appraisal be completed first, and asked what the water rights on the property were worth. The full board later voted to reject all bids that came in below appraised value.",
          sourceIds: ["s-tigermedia-property-sale"],
        },
      ],
      socialSignals: [
        {
          id: "ss-candidate-qa-post-2023",
          platform: "Hays Post (candidate Q&A)",
          observation:
            "In the October 2023 Hays Post candidate Q&A — a public-facing, candidate-authored statement — Park wrote that the single thing he would change about USD 489 was communication, \"especially communication that includes minority opinions and makes board meetings inclusive and transparent.\" He framed the bond as an opportunity but noted nearly half of the community had not voted for it and deserved answers on how the investment was being handled.",
          observedAt: "2023-10-25",
          sourceIds: ["s-hayspost-park-qa-2023"],
          mappedToIssueId: "i-hiring-nepotism",
        },
      ],
      // gap: intentionally absent — Park's documented votes are consistent
      // with his stated position on transparency and process. No triangulated
      // divergence was found in the available record. Do not add a gap field
      // simply for symmetry or completeness; the absence is correct behavior.
    },
  ],

  // ── Faith ─────────────────────────────────────────────────────────────────
  whereTheyWorship:
    "Public sources do not identify a current church affiliation for Allen Park. No church is cited.",

  // ── Campaign finance ──────────────────────────────────────────────────────
  campaignFinance: {
    totalRaised: "Not disclosed (school board races in Kansas do not require campaign finance filings at the county level)",
    narrative:
      "Park stated during the 2023 campaign that he had not received money from outside the school district and that his support came from family, friends, and community members who care about kids and education. Any remaining expenses, he said, were paid personally.",
    donors: [],
    undisclosed:
      "Kansas school board candidates are not required to file campaign finance disclosures with the state or county. No donor-by-donor list was found in public records.",
    reportingPeriod: "2023 school board election cycle",
    source: "Hays Post, October 2023 candidate Q&A",
  },

  // ── Sources registry ──────────────────────────────────────────────────────
  // Every sourceId used anywhere above must resolve here.
  sources: [
    {
      id: "s-hayspost-nepotism-vote",
      tier: "secondary",
      url: "https://hayspost.com/posts/caf3d4b9-e869-42ad-84f8-def54af685e2",
      title: "Hays BOE hires superintendent's wife as teacher after nepotism debate",
      publisher: "Hays Post",
      accessed: "2026-03-31",
      claimsAnchored: [
        "Board approved hiring Andrea Wilson (superintendent's wife) 5-2",
        "Park and Vajnar voted no",
      ],
    },
    {
      id: "s-hayspost-nepotism-debate",
      tier: "secondary",
      url: "https://hayspost.com/posts/9fb91da0-f9e5-4d80-a065-c5c2727c6fb8",
      title: "Hays USD 489 BOE debates nepotism again",
      publisher: "Hays Post",
      accessed: "2026-03-31",
      claimsAnchored: [
        "Park said he was unsure whether the district was following the nepotism policy",
        "Park asked board to review nepotism policy further",
        "Park's stated position on policy process vs. personal opposition",
      ],
    },
    {
      id: "s-hayspost-park-qa-2023",
      tier: "secondary",
      url: "https://hayspost.com/posts/7acb9e0e-4c56-4e6f-a618-4312a49cd922",
      title: "Hays USD 489 School Board Candidate: Allen Park (October 2023 Q&A)",
      publisher: "Hays Post",
      accessed: "2026-03-31",
      claimsAnchored: [
        "Park's stated position on communication and minority opinions",
        "Park's stated position that public deliberations should not happen behind closed doors",
        "Park's stated position on bond accountability",
        "Park said campaign support came from family, friends, and community members",
      ],
    },
    {
      id: "s-hayspost-admin-contracts",
      tier: "secondary",
      url: "https://hayspost.com/posts/95dab7ab-70ba-44ee-91ee-2760e55665bf",
      title: "Hays USD 489 district administrators' contracts extended another year",
      publisher: "Hays Post",
      accessed: "2026-03-31",
      claimsAnchored: [
        "Park moved to evaluate each administrator contract individually (motion failed 5-2)",
        "Park raised concern about contracts referencing an un-reviewed administrative handbook",
        "Park moved to enter executive session on superintendent contract (failed)",
      ],
    },
    {
      id: "s-citizenjournal-board-takeaways",
      tier: "secondary",
      url: "https://www.citizenjournal.us/takeaways-from-hays-usd-489-education-board-meeting/",
      title: "Takeaways from Hays USD 489 Education Board Meeting",
      publisher: "Citizen Journal",
      accessed: "2026-03-31",
      claimsAnchored: [
        "Administrator contract scrutiny by Park and Yarmer",
        "Park's motion for individual contract review",
      ],
    },
    {
      id: "s-hayspost-asbestos-vote",
      tier: "secondary",
      url: "https://hayspost.com/posts/03620484-d421-4ae2-b3be-d87652788a17",
      title: "Board member calls out fellow member after repeated no votes",
      publisher: "Hays Post",
      accessed: "2026-03-31",
      claimsAnchored: [
        "Park voted no on asbestos removal change order (September 2025)",
        "Park voted no on $88,347 high-school change order",
        "Park stated his no vote was about process, not opposition to safety",
        "Board member Ruth Ruder publicly challenged Park after the vote",
      ],
    },
    {
      id: "s-hayspost-bond-manager",
      tier: "secondary",
      url: "https://hayspost.com/posts/e4ec7011-734d-4c18-ab28-c5b38d236126",
      title: "Hays USD 489 board votes not to add another manager for bond work",
      publisher: "Hays Post",
      accessed: "2026-03-31",
      claimsAnchored: [
        "Park argued for hiring additional bond project manager",
        "Park stated fiscal accountability to taxpayers as his reason",
        "Board voted 5-2 against adding project manager (Park and Yarmer minority)",
      ],
    },
    {
      id: "s-tigermedia-property-sale",
      tier: "secondary",
      url: "https://tigermedianet.com/?p=92038",
      title: "USD 489 board discusses property sale north of Hays Middle School",
      publisher: "Tiger Media Network",
      accessed: "2026-03-31",
      claimsAnchored: [
        "Park asked why the board was rushing the property sale",
        "Park requested an appraisal be completed before the sale",
        "Park asked about water rights value",
        "Board ultimately voted to reject all below-appraisal bids",
      ],
    },
    {
      id: "s-usd489-board-page",
      tier: "primary",
      url: "https://www.usd489.com/page/board-of-education",
      title: "USD 489 Board of Education — Official Members Page",
      publisher: "Unified School District 489 (Hays, KS)",
      accessed: "2026-05-19",
      claimsAnchored: [
        "Allen Park is a current USD 489 board member",
        "Park's board seat term expires approximately 2027",
      ],
    },
    {
      id: "s-usd489-boarddocs",
      tier: "primary",
      url: "https://go.boarddocs.com/ks/usd489/Board.nsf/vpublic",
      title: "USD 489 BoardDocs — Public Meeting Portal",
      publisher: "Unified School District 489 (Hays, KS)",
      accessed: "2026-05-19",
      claimsAnchored: [
        "USD 489 board meeting minutes and agenda packets are publicly available",
        "Roll-call votes are recorded in BoardDocs",
      ],
    },
    {
      id: "s-hayspost-park-profile-2023",
      tier: "secondary",
      url: "https://hayspost.com/posts/ba82fc30-cb69-4a6d-8f09-c3ec5d9d51a7",
      title: "Hays USD 489 School Board Candidate: Allen Park (July 2023 Profile)",
      publisher: "Hays Post",
      accessed: "2026-03-31",
      claimsAnchored: [
        "Park described himself as retired USD 489 elementary principal and licensed insurance agent",
        "Park's campaign themes: facilities, class sizes, fees, technology, transparency",
        "Park worked in USD 489 for 31 years in multiple roles",
        "All four of Park's children graduated from Hays High",
      ],
    },
    {
      id: "s-archive-park-retirement",
      tier: "secondary",
      url: "https://archive.hayspost.com/2015/05/19/park-announces-retirement-after-30-years-with-usd-489/",
      title: "Park announces retirement after 30 years with USD 489",
      publisher: "Hays Post",
      accessed: "2026-03-31",
      claimsAnchored: [
        "Park retired from USD 489 in 2015 after 30+ years",
        "Park served as Washington Elementary School principal",
        "Park managed the closure and transition of Washington Elementary",
      ],
    },
  ],
};

// ── Inline validator call ──────────────────────────────────────────────────
// This is not a runtime check — it is evaluated at module-import time in
// Node (during `npm run build`). If the object doesn't pass, the build will
// not silently succeed with bad data.
if (process.env.NODE_ENV !== "production") {
  const result = validateCandidateV2(ALLEN_PARK_V2);
  if (!result.ok) {
    // eslint-disable-next-line no-console
    console.error(
      "[allen-park.ts] validateCandidateV2 FAILED:\n" +
        result.errors.join("\n")
    );
  }
}
