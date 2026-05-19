/* Auto-normalized with issue-mapped social/online cross-reference signals.
 * To refresh:
 *   node scripts/hydrate-v2-social-signals.mjs
 */

import type { CandidateFullV2 } from "@/data/types-v2";
import { validateCandidateV2 } from "@/data/types-v2";

export const DAVID_VILAYSING_V2: CandidateFullV2 = {
  "slug": "david-vilaysing",
  "name": "David Vilaysing",
  "party": "NP",
  "position": "Hays City Commissioner",
  "electionSlug": "hays-city-current",
  "incumbent": true,
  "occupation": "Retired Police Officer / Trainer",
  "campaignWebsite": "https://www.haysusa.com/269/City-Commission",
  "issues": [
    {
      "id": "i-water-1",
      "title": "Water",
      "stated": {
        "text": "Considers securing the city's water supply a top priority. Hays sits over the depleting Ogallala Aquifer and the city's long-term water future depends on the R9 Ranch water project.",
        "sourceIds": [
          "s-1",
          "s-2",
          "s-3"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Hays Post",
          "observation": "Candidate Q&A, Oct. 25, 2025: He described water and housing as the most pressing city issues and said Hays needs a secure water source, transparency on R9 progress, and housing options for low- to medium-income residents. Source: Hays Post.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-2"
          ],
          "mappedToIssueId": "i-water-1"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Hays Post",
          "observation": "Election-night quote, Nov. 6, 2025: He said he was \"a little surprised\" and \"very eager to get to work,\" and called water supply and affordable housing top issues. Source: Hays Post.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "i-water-1"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Tiger Media Network",
          "observation": "The most consistent city-policy themes are water, housing, and cost discipline. Vilaysing calls the R9 water project important but not enough by itself, saying Hays needs both a secure near-term source and a permanent long-term answer. On housing, he talks about low- and middle-income residents, city land, developer partnerships, and practical ways to make qualifying homes possible. On taxes and budgets, he...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-2"
          ],
          "mappedToIssueId": "i-water-1"
        }
      ]
    },
    {
      "id": "i-housing-2",
      "title": "Housing",
      "stated": {
        "text": "Supports efforts to increase affordable housing in Hays. Lists housing as one of his top three issues alongside water and retail.",
        "sourceIds": [
          "s-1",
          "s-2",
          "s-3"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Facebook",
          "observation": "His visible engagement footprint is modest and unevenly public. The DXI Facebook page exposed public metadata showing 125 likes and 5 people talking about it, but major social platforms did not expose reliable post timelines or per-post engagement without scripts or login. Search results did not verify a dedicated campaign website, a campaign X account, a public campaign LinkedIn profile, or an explicit...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-1"
          ],
          "mappedToIssueId": "i-housing-2"
        }
      ]
    },
    {
      "id": "i-city-spending-transparency-3",
      "title": "City Spending / Transparency",
      "stated": {
        "text": "Has asked pointed operational questions about the cost and purpose of city programs. His first notable initiative was questioning pet licensing requirements, noting the city collects about $14,000 per year in pet license fees while most owners already buy their own tags.",
        "sourceIds": [
          "s-1",
          "s-2",
          "s-3"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Hays Post",
          "observation": "Candidate Q&A, Oct. 25, 2025: On taxes, he said he did not think a mill levy increase was needed and wanted creative budgeting to remain revenue neutral. Source: Hays Post.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-2"
          ],
          "mappedToIssueId": "i-city-spending-transparency-3"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Tiger Media Network",
          "observation": "Public comment, Sept. 12, 2025: At a revenue-neutral budget hearing, he said residents were \"heavily taxed\" and \"burdened\" and asked the city to provide relief if possible. Source: Tiger Media Network.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-2"
          ],
          "mappedToIssueId": "i-city-spending-transparency-3"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Hays Post",
          "observation": "2027 budget work session, Apr. 6, 2026: He challenged department heads to ask frontline staff for budget input because they can identify what the city does not need to do. Source: Hays Post.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-3"
          ],
          "mappedToIssueId": "i-city-spending-transparency-3"
        }
      ]
    },
    {
      "id": "i-law-enforcement-4",
      "title": "Law Enforcement",
      "stated": {
        "text": "Comes from 19 years in the Hays Police Department plus military police service. His background in de-escalation training shapes his approach to community safety.",
        "sourceIds": [
          "s-1",
          "s-2",
          "s-3"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Hays Post",
          "observation": "Candidate Q&A, Oct. 25, 2025: He said he had 22 years of combined Hays Police Department and military police experience and missed \"giving back to my community.\" Source: Hays Post.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-2"
          ],
          "mappedToIssueId": "i-law-enforcement-4"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Hays Post",
          "observation": "Pet licensing, Feb. 14, 2026: He asked city staff to research changes to pet licensing because many pets already have owner tags or microchips, and said it could save city staff, police, and dispatch time. Source: Hays Post.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-4"
          ],
          "mappedToIssueId": "i-law-enforcement-4"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Public web",
          "observation": "No substantial partisan national messaging found; the visible record is almost entirely local governance, law enforcement training, library-board controversy, and city operations.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-1"
          ],
          "mappedToIssueId": "i-law-enforcement-4"
        }
      ]
    },
    {
      "id": "i-core-values-in-governance-5",
      "title": "Core Values in Governance",
      "stated": {
        "text": "Has spoken broadly about \"core values\" being \"missing in how the current city commission handles matters,\" though he has not spelled out specific policy details beyond his operational focus on water, housing, and fiscal accountability.",
        "sourceIds": [
          "s-1",
          "s-2",
          "s-3"
        ]
      },
      "actions": [],
      "socialSignals": []
    }
  ],
  "whoTheyAre": "David Vilaysing is a Hays city commissioner, retired police sergeant, and owner of DXI Training Solutions. Public records credit him with 19 years in the Hays Police Department and additional military police service, giving him more than two decades in law enforcement and public safety before he entered city politics. His business work after policing has centered on de-escalation, tactical communication, and self-defense training.\n\nVilaysing's public image is practical and service-oriented. He is not a career politician and did not rise through a party ladder. He came to the commission from the worlds of policing, instruction, and community safety, which helps explain why his public comments often focus on operations, procedures, and whether the city is handling everyday problems effectively.",
  "recordSummary": "Vilaysing was elected to the Hays City Commission in 2025, so his formal governing record is still new. In candidate statements and early meeting coverage, he emphasi",
  "ownWordsNarrative": "David Vilaysing's public messaging is built around service, practical city management, and conflict control. In his [Hays Post candidate Q&A](https://hayspost.com/posts/5e243ec1-847a-40f8-a7dd-665ffe2f85de), he framed the move from policing and first-responder training into city government as a return to community service: Hays is home, he missed giving back, and his personal motto is the same as his company mission, \"to leave the world better than I found it.\"\n\nThe most consistent city-policy themes are water, housing, and cost discipline. Vilaysing calls the R9 water project important but not enough by itself, saying Hays needs both a secure near-term source and a permanent long-term answer. On housing, he talks about low- and middle-income residents, city land, developer partnerships, and practical ways to make qualifying homes possible. On taxes and budgets, he repeatedly argues for relief where possible: at a September 2025 budget hearing, [Tiger Media Network](https://tigermedianet.com/?p=89367) quoted him saying residents were \"heavily taxed\" and \"burdened.\"\n\nHis preferred governing style is bottom-up and operational. In the candidate Q&A, he said the city should talk to \"the people actually doing the jobs\" before deciding what is needed or not needed. After taking office, he repeated that approach during 2026 budget discussions, challenging department heads to ask frontline staff what the city can stop doing, according to [Hays Post](https://hayspost.com/posts/87cea43b-4017-4065-a707-e19a1389beeb). His February 2026 request to review pet licensing fits the same pattern: small fee, staff time, police time, dispatch time, and whether an existing ordinance still makes sense when owners use tags and microchips.\n\nVilaysing's law-enforcement and training background is a major part of how he presents himself. His [DXI Training Solutions](https://dxitrainingsolutions.com/) site describes responsible conflict management for first responders, businesses, and individuals. In a [February 2026 Hays Post story](https://hayspost.com/posts/a0f7dc0e-e11c-483b-95ef-cbd4ad3ac930), he said de-escalation training is meant to make law enforcement, civilians, and everyone safer. He also emphasized self-control and emotional intelligence, arguing that officers have to understand themselves before they can understand others.\n\nThat conflict-management language also shows up in politics. At the October 2025 candidate forum, [Tiger Media Network](https://tigermedianet.com/?p=90544) quoted him saying commissioners have to lead by example when conflict arises, or they have no business sitting in those seats. He proposed workforce collaboration among the city, local businesses, Hays High, and Fort Hays State University, and his early swearing-in comments praised department leaders, educators, health care professionals, civic groups, and the chamber as part of the city's backbone.\n\nOne public social-media controversy stands out. The November 2025 issue of [The Guidon](https://hayshighguidon.com/wp-content/uploads/2025/11/Guidon_11-25_CombinedReduced.pdf) quoted a public Oct. 12 Facebook post in which Vilaysing said parents had raised concerns about books in the young adult section of the Hays Public Library, that he inspected the area, and that he found graphic material he believed encouraged inappropriate behavior in children. The article also reported that his accompanying video urged residents to attend the Oct. 15 library board meeting. The original post URL was not publicly verified in this harvest, so the quote is attributed to The Guidon rather than independently harvested from Facebook.\n\nHis visible engagement footprint is modest and unevenly public. The DXI Facebook page exposed public metadata showing 125 likes and 5 people talking about it, but major social platforms did not expose reliable post timelines or per-post engagement without scripts or login. Search results did not verify a dedicated campaign website, a campaign X account, a public campaign LinkedIn profile, or an explicit faith/church message. The public record is overwhelmingly local: water, housing, budgets, city operations, de-escalation, library-content concerns, and a nonpartisan service identity.\n\nMethodology: This summary uses public, candidate-controlled, candidate-attributed, or official sources available through May 11, 2026, including Hays Post, Tiger Media Network, City of Hays pages and agenda material, DXI Training Solutions, ILEETA, GoodParty directory metadata, and The Guidon. Social platforms were checked, but login-walled or script-blocked content was not treated as accessible evidence. The current campaignWebsite value was flagged as bad, so it was not used without independent verification.\n\nDisclaimer: This is a public-record messaging summary, not a complete biography or endorsement analysis. Absence of public evidence means only that the item was not found in accessible sources during this harvest; it does not prove the candidate lacks a private view, affiliation, or account.",
  "whereTheyWorship": "Public sources do not identify a current church affiliation.",
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
    "source": "Local reporting, county records, and reviewed public filings"
  },
  "socialResearchNote": "Social research is included as observed public behavior, not as a proxy for belief. Platforms/sources checked: Hays Post, Tiger Media Network, City of Hays pages and agenda material, DXI Training Solutions, ILEETA, GoodParty directory metadata, The Guidon, Facebook, LinkedIn, X / Twitter, Instagram, TikTok, YouTube, Public search. Harvest range: 2023-06-15 through 2026-05-11.",
  "sources": [
    {
      "id": "s-1",
      "tier": "secondary",
      "url": "https://goodparty.org/candidate/david-vilaysing/hays-city-commission//",
      "title": "GoodParty David Vilaysing profile, unclaimed",
      "publisher": "Goodparty",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for David Vilaysing."
      ]
    },
    {
      "id": "s-2",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/5e243ec1-847a-40f8-a7dd-665ffe2f85de",
      "title": "HaysPost Candidate Q&A: David Vilaysing",
      "publisher": "Hayspost",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for David Vilaysing.",
        "Observed public online activity mapped to Water.",
        "Observed public online activity mapped to City Spending / Transparency.",
        "Observed public online activity mapped to Law Enforcement."
      ]
    },
    {
      "id": "s-3",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/39c5ed3b-dd7b-4248-a71f-a7ca06694a9e",
      "title": "Hays Post: No Kings protest (Barrick, not Vilaysing)",
      "publisher": "Hayspost",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for David Vilaysing."
      ]
    },
    {
      "id": "s-social-crossref-1",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/b7a4b7ea-3e19-4919-a7fa-1de6db7bed8c",
      "title": "Hays Post / Hayspost",
      "publisher": "Hayspost",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Water.",
        "Election-night quote, Nov. 6, 2025: He said he was \"a little surprised\" and \"very eager to get to work,\" and called water supply and affordable housing top issues. Source: Hays Pos"
      ]
    },
    {
      "id": "s-social-crossref-2",
      "tier": "secondary",
      "url": "https://tigermedianet.com/?p=89367",
      "title": "Tiger Media Network / Tigermedianet",
      "publisher": "Tigermedianet",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Water.",
        "The most consistent city-policy themes are water, housing, and cost discipline. Vilaysing calls the R9 water project important but not enough by itself, saying Hays needs both a se",
        "Observed public online activity mapped to City Spending / Transparency."
      ]
    },
    {
      "id": "s-social-crossref-3",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/87cea43b-4017-4065-a707-e19a1389beeb",
      "title": "Hays Post / Hayspost",
      "publisher": "Hayspost",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to City Spending / Transparency.",
        "2027 budget work session, Apr. 6, 2026: He challenged department heads to ask frontline staff for budget input because they can identify what the city does not need to do. Source: "
      ]
    },
    {
      "id": "s-social-crossref-4",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/603fb2e8-f14d-4075-a541-c9522b43ef76",
      "title": "Hays Post / Hayspost",
      "publisher": "Hayspost",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Law Enforcement.",
        "Pet licensing, Feb. 14, 2026: He asked city staff to research changes to pet licensing because many pets already have owner tags or microchips, and said it could save city staff, p"
      ]
    }
  ]
};

if (process.env.NODE_ENV !== "production") {
  const result = validateCandidateV2(DAVID_VILAYSING_V2);
  if (!result.ok) {
    // eslint-disable-next-line no-console
    console.error(
      "[david-vilaysing.ts] validateCandidateV2 FAILED:\n" +
        result.errors.join("\n"),
    );
  }
}
