/* Auto-normalized with issue-mapped social/online cross-reference signals.
 * To refresh:
 *   node scripts/hydrate-v2-social-signals.mjs
 */

import type { CandidateFullV2 } from "@/data/types-v2";
import { validateCandidateV2 } from "@/data/types-v2";

export const CATHY_HOPKINS_V2: CandidateFullV2 = {
  "slug": "cathy-hopkins",
  "name": "Cathy Hopkins",
  "party": "R",
  "position": "State Board of Education Member, District 5",
  "electionSlug": "sboe-district-5",
  "incumbent": true,
  "occupation": "Kansas State Board of Education chair",
  "district": "Kansas State Board of Education District 5",
  "issues": [
    {
      "id": "i-statewide-k-12-governance",
      "title": "Statewide K-12 Education Governance",
      "stated": {
        "text": "Hopkins is the current District 5 member and chair of the Kansas State Board of Education. The board sets statewide K-12 education policy, adopts academic standards, oversees educator licensure, establishes accreditation, and appoints the commissioner of education.",
        "sourceIds": [
          "s-ksde-state-board",
          "s-ksde-district-5"
        ]
      },
      "actions": [
        {
          "id": "a-current-chair-2026",
          "date": "2026-05-19",
          "body": "The Kansas State Department of Education's current State Board page lists Cathy Hopkins as the chair and identifies District 5 as the western Kansas district represented by Hopkins.",
          "sourceIds": [
            "s-ksde-state-board"
          ]
        }
      ],
      "socialSignals": []
    },
    {
      "id": "i-curriculum-standards-local-control",
      "title": "Curriculum, Standards, and Local Control",
      "stated": {
        "text": "A public candidate-guide questionnaire archive attributes to Hopkins a local-control education posture: K-12 funding and academics should be shaped by local boards, parents, and standards set by local members rather than primarily by state or federal actors. This is included as attributed questionnaire material, not as a fresh 2026 campaign platform.",
        "sourceIds": [
          "s-ivoterguide-hopkins"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-questionnaire-archive-local-control",
          "platform": "Candidate questionnaire archive",
          "observation": "The public iVoterGuide archive links Hopkins to a 2021 Hays NEA questionnaire and summarizes a local-control position on K-12 funding, academics, local boards, parents, and standards.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-ivoterguide-hopkins"
          ],
          "mappedToIssueId": "i-curriculum-standards-local-control"
        }
      ]
    },
    {
      "id": "i-board-leadership-commissioner-search",
      "title": "Board Leadership and Commissioner Search",
      "stated": {
        "text": "As chair, Hopkins is tied to board-level leadership decisions, including the 2026 commissioner-of-education finalist process. Public KSDE releases attribute board-chair statements to Hopkins in that search.",
        "sourceIds": [
          "s-ksde-commissioner-finalists"
        ]
      },
      "actions": [
        {
          "id": "a-commissioner-finalists-2026",
          "date": "2026-04-14",
          "body": "KSDE announced finalists for commissioner of education in April 2026 and quoted State Board Chair Cathy Hopkins in the announcement.",
          "sourceIds": [
            "s-ksde-commissioner-finalists"
          ]
        }
      ],
      "socialSignals": []
    }
  ],
  "whoTheyAre": "Cathy Hopkins represents District 5 on the Kansas State Board of Education, the district covering western Kansas. The site now includes her because District 5 is the education race relevant to Hays-area voters in the 2026 cycle, even while the filing field remains an item to monitor.",
  "recordSummary": "The State Board of Education sets statewide K-12 standards, educator licensure rules, accreditation, and commissioner-of-education leadership. Hopkins's current public record is therefore a board-governance record rather than a local school-board record.",
  "ownWordsNarrative": "The accessible public trail reviewed for this profile is official-board and questionnaire-archive material, not a broad candidate-controlled social feed. No 2026 campaign feed was used to infer a private position.",
  "whereTheyWorship": "Public sources reviewed for this quick corrective profile do not identify a current church affiliation. This profile does not infer policy positions from faith references.",
  "campaignFinance": {
    "totalRaised": "No 2026 campaign total rendered yet",
    "narrative": "This corrective pass adds Hopkins as the current District 5 officeholder so the race is not blank. A later finance pass should check Kansas campaign-finance records after the 2026 filing field is final.",
    "donors": [],
    "undisclosed": "No donor-by-donor table was rendered in this corrective pass.",
    "reportingPeriod": "2026 District 5 watchlist",
    "source": "KSDE official board pages and public candidate-guide archive"
  },
  "socialResearchNote": "Social research is limited on this corrective pass. Sources checked for the rendered profile: KSDE state board page, KSDE District 5 page, KSDE commissioner-finalist release, Ballotpedia 2026 SBOE election page, and public questionnaire archive.",
  "sources": [
    {
      "id": "s-ksde-state-board",
      "tier": "primary",
      "url": "https://www.ksde.gov/state-board",
      "title": "Kansas State Board of Education current board page",
      "publisher": "Kansas State Department of Education",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Cathy Hopkins is the current State Board chair",
        "District 5 covers western Kansas and is represented by Cathy Hopkins",
        "The State Board oversees K-12 standards, licensure, accreditation, and commissioner appointment"
      ]
    },
    {
      "id": "s-ksde-district-5",
      "tier": "primary",
      "url": "https://www.ksde.gov/Board/Kansas-State-Board-of-Education/District-5",
      "title": "Kansas State Board of Education District 5 page",
      "publisher": "Kansas State Department of Education",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Official District 5 member page for Cathy Hopkins."
      ]
    },
    {
      "id": "s-ksde-commissioner-finalists",
      "tier": "primary",
      "url": "https://www.ksde.gov/news-center/news-releases/2026/04/14/kansas-state-board-of-education-names-finalists-for-commissioner-of-education",
      "title": "Kansas State Board of Education names finalists for commissioner of education",
      "publisher": "Kansas State Department of Education",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "KSDE quoted State Board Chair Cathy Hopkins in the commissioner-finalist process."
      ]
    },
    {
      "id": "s-ballotpedia-sboe-2026",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas_State_Board_of_Education_election,_2026",
      "title": "Kansas State Board of Education election, 2026",
      "publisher": "Ballotpedia",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "2026 Kansas State Board of Education election context."
      ]
    },
    {
      "id": "s-ivoterguide-hopkins",
      "tier": "secondary",
      "url": "https://ivoterguide.com/candidate/70910/race/17825/election/987",
      "title": "Cathy Hopkins candidate-guide questionnaire archive",
      "publisher": "iVoterGuide",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Public archive of Hopkins questionnaire material and local-control education statement."
      ]
    }
  ]
};

if (process.env.NODE_ENV !== "production") {
  const result = validateCandidateV2(CATHY_HOPKINS_V2);
  if (!result.ok) {
    // eslint-disable-next-line no-console
    console.error(
      "[cathy-hopkins.ts] validateCandidateV2 FAILED:\n" +
        result.errors.join("\n"),
    );
  }
}
