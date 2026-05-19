/* Auto-normalized with issue-mapped social/online cross-reference signals.
 * To refresh:
 *   node scripts/hydrate-v2-social-signals.mjs
 */

import type { CandidateFullV2 } from "@/data/types-v2";
import { validateCandidateV2 } from "@/data/types-v2";

export const MICHAEL_BERGES_V2: CandidateFullV2 = {
  "slug": "michael-berges",
  "name": "Michael Berges",
  "party": "R",
  "position": "Ellis County Commissioner, District 1",
  "electionSlug": "ellis-county-2026-ballot",
  "incumbent": true,
  "occupation": "Ellis County commissioner; Business Services Director at NWKEICI",
  "hometown": "Hays / Ellis County, Kansas",
  "religion": "Catholic / Methodist family worship context",
  "issues": [
    {
      "id": "i-county-budget-1",
      "title": "County Budget and Taxes",
      "stated": {
        "text": "Berges's reviewed public profile centers county-government service rather than a broad ideological platform. The available record ties him to the county commission's budget, compensation, and administrative decisions; this page does not infer positions beyond those public records.",
        "sourceIds": [
          "s-1",
          "s-2",
          "s-4"
        ]
      },
      "actions": [],
      "socialSignals": []
    },
    {
      "id": "i-county-services-2",
      "title": "County Services and Administration",
      "stated": {
        "text": "The county commission role covers roads, county services, land-use decisions, and department oversight. Berges is treated here as an incumbent officeholder whose public record should be read through those duties rather than through national-party issue categories.",
        "sourceIds": [
          "s-1",
          "s-2",
          "s-3"
        ]
      },
      "actions": [],
      "socialSignals": []
    },
    {
      "id": "i-public-communication-3",
      "title": "Public Communication",
      "stated": {
        "text": "The reviewed source trail includes local-news and public-social references to Berges's commission comments. Those items are recorded as public communication evidence; no private view or motive is inferred from them.",
        "sourceIds": [
          "s-2",
          "s-5"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-hays-daily-news-1",
          "platform": "Facebook",
          "observation": "A Hays Daily News public post referenced Berges making comments in his capacity as Ellis County Commission chair. This is recorded only as a public-reference signal.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-5"
          ],
          "mappedToIssueId": "i-public-communication-3"
        }
      ]
    }
  ],
  "whoTheyAre": "Michael Berges is the Ellis County commissioner for District 1, the northwest Ellis County seat that includes part of Hays. Project election research identifies him as first elected in 2022, with the seat returning to the ballot in November 2026. Before joining the county commission, Berges served on the Hays City Commission, leaving a vacancy later filled by Alaina Cunningham.",
  "recordSummary": "The public record places Berges in the center of ordinary county-government work: commission meetings, budget and compensation decisions, county service oversight, and constituent-facing local issues. The important election-accuracy correction is that District 1 is a 2026 county commission seat, paired on the ballot with Nathan Leiker's District 3 seat.",
  "ownWordsNarrative": "The public social trail available in the repository is thin compared with higher-profile candidates. The site records local-news and public-social references to Berges's commission comments, but does not infer private views from limited social visibility.",
  "whereTheyWorship": "Faith research in the repository identifies Berges as Catholic, connected with St. Joseph, while also attending First United Methodist with his wife. This is presented as descriptive family/church context only, not as a policy inference.",
  "campaignFinance": {
    "totalRaised": "No itemized public web total found",
    "narrative": "No donor-by-donor finance table for Berges's county commission race was available in the reviewed public web record. Local county candidates may have filing paths that do not produce an easily indexed online donor table.",
    "donors": [],
    "undisclosed": "No itemized donor table was found in the reviewed public sources.",
    "reportingPeriod": "2022 county commission cycle / 2026 incumbent context",
    "source": "Ellis County and Hays Post public source trail"
  },
  "socialResearchNote": "Social research is included only where it is observable and relevant. For Berges, the accessible trail is local-news/public-social references rather than a broad candidate-controlled social feed.",
  "sources": [
    {
      "id": "s-1",
      "tier": "primary",
      "url": "https://www.ellisco.net/120/County-Commission",
      "title": "Ellis County Commission official page",
      "publisher": "Ellis County, Kansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Michael Berges is listed as an Ellis County commissioner."
      ]
    },
    {
      "id": "s-2",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/8400acf8-32ea-486a-b087-8423d8f728e0",
      "title": "Hays Post candidate profile: Michael Berges",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Berges's 2022 county commission candidacy and public profile."
      ]
    },
    {
      "id": "s-3",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/cc38c04a-09f2-41be-8708-04cc33013376",
      "title": "Hays commissioner announces county run",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Berges moved from Hays City Commission into the Ellis County Commission race."
      ]
    },
    {
      "id": "s-4",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/18d99844-46b7-4bc0-a558-9d9a87fa92e6",
      "title": "Ellis County commission salary adjustments",
      "publisher": "Hays Post",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "County commissioner compensation and county budget context."
      ]
    },
    {
      "id": "s-5",
      "tier": "social",
      "url": "https://www.facebook.com/HaysDailyNews/posts/ellis-county-commission-chair-michael-berges-asserted-that-commissioners-are-not/1509240304362171/",
      "title": "Hays Daily News public post referencing Berges commission comments",
      "publisher": "Hays Daily News / Facebook",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Public social/news reference to Berges commission comments."
      ]
    }
  ]
};

if (process.env.NODE_ENV !== "production") {
  const result = validateCandidateV2(MICHAEL_BERGES_V2);
  if (!result.ok) {
    // eslint-disable-next-line no-console
    console.error(
      "[michael-berges.ts] validateCandidateV2 FAILED:\n" +
        result.errors.join("\n"),
    );
  }
}
