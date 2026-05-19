/* Auto-normalized with issue-mapped social/online cross-reference signals.
 * To refresh:
 *   node scripts/hydrate-v2-social-signals.mjs
 */

import type { CandidateFullV2 } from "@/data/types-v2";
import { validateCandidateV2 } from "@/data/types-v2";

export const SANDY_JACOBS_V2: CandidateFullV2 = {
  "slug": "sandy-jacobs",
  "name": "Sandy Jacobs",
  "party": "NP",
  "position": "Hays City Commissioner",
  "electionSlug": "hays-city-current",
  "incumbent": true,
  "occupation": "Former Mayor / Foundation Executive",
  "campaignWebsite": "https://www.haysusa.com/269/City-Commission",
  "issues": [
    {
      "id": "i-water-1",
      "title": "Water",
      "stated": {
        "text": "The R9 Ranch water pipeline project is her top priority. She has repeatedly called it the city's number one focus and has defended it as essential for Hays' long-term survival, even as costs rose to nearly $145 million and litigation dragged on. She has said \"We've asked for less water than is allowed by the state.\"",
        "sourceIds": [
          "s-3",
          "s-4",
          "s-5",
          "s-6"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Public web",
          "observation": "I coded 18 accessible candidate-controlled or candidate-attributed items. Categories are non-exclusive because one interview answer or meeting quote often covered water, budget, and development together.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-1"
          ],
          "mappedToIssueId": "i-water-1"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Hays Post",
          "observation": "\"We've asked for less water than is allowed by the state, and that is huge.\" Source: Hays Post Q&A, Oct. 22, 2025.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-5"
          ],
          "mappedToIssueId": "i-water-1"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Hays Post",
          "observation": "Hays Post: New city water rebates more inclusive",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "i-water-1"
        }
      ]
    },
    {
      "id": "i-taxes-budgeting-2",
      "title": "Taxes / Budgeting",
      "stated": {
        "text": "She has defended revenue-neutral budgeting and taken a conservative approach to city spending. She has said the city should avoid overspending and maintain a sustainable budget, telling Hays Post \"we're rock stars compared to other communities.\"",
        "sourceIds": [
          "s-3",
          "s-4",
          "s-5",
          "s-6"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Hays Post",
          "observation": "\"My first goal, other than maintaining taxes, would be retail development.\" Source: Hays Post Q&A, Oct. 22, 2025.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-5"
          ],
          "mappedToIssueId": "i-taxes-budgeting-2"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Hays Post",
          "observation": "Hays Post Archive: Foundation announces results of Twice as Nice fundraising program",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-2"
          ],
          "mappedToIssueId": "i-taxes-budgeting-2"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Hays Post",
          "observation": "Hays Post: Planned travel plaza and 2027 draft budget",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-3"
          ],
          "mappedToIssueId": "i-taxes-budgeting-2"
        }
      ]
    },
    {
      "id": "i-retail-and-economic-development-3",
      "title": "Retail and Economic Development",
      "stated": {
        "text": "She has pushed for retail growth in Hays and supported development incentives when she believed they would strengthen the city long-term.",
        "sourceIds": [
          "s-3",
          "s-4",
          "s-5",
          "s-6"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Hays Post",
          "observation": "\"Retail is really high on my list, and the workforce needs some attention.\" Source: Hays Post, Nov. 6, 2025.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-4"
          ],
          "mappedToIssueId": "i-retail-and-economic-development-3"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Hays Post",
          "observation": "The dominant theme is long-term stewardship of Hays. In her 2025 Hays Post Q&A, Jacobs framed the race around finishing city work already underway, especially the R9 water project. She said she had served eight years and that her \"passion continues to be for this city as a native,\" then described a commission that does not always agree but finds common solutions. In the coded harvest, economic development,...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-1"
          ],
          "mappedToIssueId": "i-retail-and-economic-development-3"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Hays Post",
          "observation": "Her economic-development message is practical and city-budget centered. Jacobs talks about retail not as culture-war identity or partisan branding, but as a sales-tax base and quality-of-life issue. In the 2025 Q&A, she said her first goal beyond maintaining taxes would be retail development and that Grow Hays was focused on it because the general fund depends on sales tax. After winning re-election, she told...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-4"
          ],
          "mappedToIssueId": "i-retail-and-economic-development-3"
        }
      ]
    },
    {
      "id": "i-covid-mask-mandate-4",
      "title": "COVID Mask Mandate",
      "stated": {
        "text": "She voted with the commission majority to extend the mask ordinance in 2020 (3-1 vote).",
        "sourceIds": [
          "s-1",
          "s-3",
          "s-7",
          "s-12",
          "s-13",
          "s-4"
        ]
      },
      "actions": [],
      "socialSignals": []
    }
  ],
  "whoTheyAre": "Sandy Jacobs is a Hays city commissioner, former mayor, retired banker, and former nonprofit executive. Her public identity is rooted in local finance and civic stewardship rather than ideology. City and local-news profiles tie her to a long career at Sunflower Bank, followed by five years as executive director of the Heartland Community Foundation before she retired from that role at the end of 2020.\n\nJacobs is one of the most experienced members of the Hays commission. She has described herself as a Hays native and has spent years in city leadership, including multiple turns as mayor. The public record shows a commissioner whose emphasis stays on infrastructure, water, development, and budgets rather than personal branding.",
  "recordSummary": "Jacobs has been one of the commission's most consistent public advocates for the R9 Ranch water project, the long-running effort to secure Hays' future water supply through a major pipeline project. In local coverage, she has treated water as the city's top long-term responsibility and has defended the project as necessary even as costs rose and litigation dragged on.\n\nShe has also taken visible positions on development and budget questions. Jacobs has argued for retail growth, defended sustainable budgeting, and supported city investment when she believed it would strengthen Hays over the long term. During the pandemic-era mask debate, she voted with the majority to extend the ordinance. In January 2026, she stepped aside from the mayor's role when the commission reorgani",
  "ownWordsNarrative": "Sandy Jacobs' accessible public messaging is local, civic, and operational. The strongest public record is not a modern social feed; it is a trail of candidate letters, Hays Post Q&As, city-meeting coverage, official city pages, and civic appearances. Her verified social footprint is thin: a Facebook page exists with 257 visible likes, and a LinkedIn profile preview shows 246 followers, but neither exposed a reliable public post feed in logged-out capture. [GoodParty lists](https://goodparty.org/candidate/sandy-jacobs/hays-city-commission) her profile as unclaimed and links only Facebook and the city page, with no candidate-filled issues.\n\nThe dominant theme is long-term stewardship of Hays. In her 2025 Hays Post Q&A, Jacobs framed the race around finishing city work already underway, especially the R9 water project. She said she had served eight years and that her \"passion continues to be for this city as a native,\" then described a commission that does not always agree but finds common solutions. In the coded harvest, economic development, retail, workforce, infrastructure, and growth appeared in 8 of 18 accessible items; water, conservation, and R9 appeared in 7; and budget/tax sustainability also appeared in 7. [Harvest details](social-harvest.md#topic-share-analysis).\n\nWater is the clearest policy through-line. Jacobs repeatedly treats it as a generational duty rather than a short-term campaign issue. In the [Oct. 22, 2025 Hays Post Q&A](https://hayspost.com/posts/c0016433-275d-4af3-aabe-af7379f8c56f), she said R9 is among the unfinished projects she wants to see through, defended the city's legal posture, and said Hays has asked for less water than state rules allow. At a July 2025 statewide water task force event, she said Hays understands how vital water is to \"our communities, our economy and our future,\" and pointed to Hays' reduced use, rebate programs, conservation staffing, and youth education efforts ([Lawrence Times/Kansas Reflector](https://lawrencekstimes.com/2025/07/15/ksleg-water-crisis-solutions/)).\n\nHer economic-development message is practical and city-budget centered. Jacobs talks about retail not as culture-war identity or partisan branding, but as a sales-tax base and quality-of-life issue. In the 2025 Q&A, she said her first goal beyond maintaining taxes would be retail development and that Grow Hays was focused on it because the general fund depends on sales tax. After winning re-election, she told Hays Post, \"Retail is really high on my list, and the workforce needs some attention\" ([Hays Post](https://hayspost.com/posts/b7a4b7ea-3e19-4919-a7fa-1de6db7bed8c)). Her older public record also points to Vine Street reconstruction, roundabouts, and business development along that corridor ([Hays Post](https://hayspost.com/posts/64dd8115-641e-489a-970e-22ef124e2781)).\n\nFiscal responsibility is another recurring signal. Jacobs emphasizes revenue-neutral budgeting, line-item review, maintaining the mill levy, and asking residents what they are willing to trade off. In the 2025 Q&A, she said Hays was not overtaxing from her perspective and praised a conservative budget that remained revenue neutral. In April 2026 budget coverage, she questioned where money would come from under proposed property-tax constraints, then said budget mindfulness was \"everybody's job\" and encouraged residents and businesses to interact with city officials because \"We can't think of everything\" ([Hays Post](https://hayspost.com/posts/87cea43b-4017-4065-a707-e19a1389beeb)).\n\nHousing, parks, and quality of life fill out the local frame. Jacobs credits the commission's prior four-year focus on housing, including economic-development policy changes and moderate-income housing tools. She also says low-income housing is difficult without incentives and may require mill-levy decisions the community may not be ready to make. On parks, she points to the ARC Park as a model but says broader park investment may require hard cost discussions. Her older campaign and foundation language uses the same frame: leave Hays better than she found it, pursue sustainable planned growth, protect quality of life, and keep looking 10, 25, and 50 years ahead ([Hays Post](https://hayspost.com/posts/c0016433-275d-4af3-aabe-af7379f8c56f)).\n\nJacobs' style is collaborative and institution-minded. When she stepped down as mayor in January 2026 and continued as commissioner, she said, \"Titles may change, but values don't,\" and described servant leadership as listening, bringing people together, and keeping the community at the center of decisions ([Tiger Media Network](https://tigermedianet.com/?p=93385)). That same theme appears in her Q&A, where she calls herself a collaborator and says she believes in bringing everyone to the table. Her visible public comments rarely try to nationalize local issues.\n\nThe absences are as important as the presences. I found no verified candidate-controlled campaign website beyond the Facebook page and city-page link indexed by GoodParty, and no current candidate-controlled X/Twitter, Instagram, TikTok, YouTube, Bluesky, Threads, Truth Social, Gab, Gettr, Substack, Medium, or Reddit account. Across the accessible material, Jacobs does not publicly center abortion, guns, immigration, national party identity, Donald Trump, Joe Biden, LGBTQ policy, school curriculum, or religious-liberty policy. No public church affiliation was found in this harvest. These are public-capture findings, not proof of private views.\n\nMethodology: I reviewed public sources through May 11, 2026, including the City of Hays commission page and agenda/video archive, GoodParty, Facebook metadata, LinkedIn public previews, Hays Post, Tiger Media Network, Kansas Reflector/Lawrence Times, JC Post/Hays Post, and targeted searches for major social platforms. I counted only accessible candidate-controlled or candidate-attributed material. Login-walled, robot-blocked, script-blocked, or preview-only material was described as limited and was not used for post-level claims. The full source list and topic coding are in the [social harvest](social-harvest.md).\n\nDisclaimer: This summary describes public, accessible messaging and attributed remarks. It does not infer private beliefs, summarize inaccessible social posts, or treat silence as a definitive policy position.",
  "whereTheyWorship": "Public sources do not identify a current church affiliation.",
  "campaignFinance": {
    "totalRaised": "No clean total verified in reviewed public sources",
    "narrative": "No campaign finance data available online.",
    "donors": [
      {
        "name": "Campaign finance data",
        "amount": "No campaign finance data available online"
      }
    ],
    "reportingPeriod": "2026 cycle",
    "source": "Local reporting, county records, and reviewed public filings"
  },
  "socialResearchNote": "Social research is included as observed public behavior, not as a proxy for belief. Platforms/sources checked: City of Hays commission page, City agenda/video archive, GoodParty, Facebook metadata, LinkedIn public previews, Hays Post, Tiger Media Network, Kansas Reflector / Lawrence Times, JC Post / Hays Post, X / Twitter, Instagram, TikTok, YouTube, Bluesky, Threads, Truth Social, Gab, Gettr, Substack, Medium, Reddit, Public search. Harvest range: 2016-01-25 through 2026-05-11.",
  "sources": [
    {
      "id": "s-1",
      "tier": "social",
      "url": "https://www.facebook.com/people/Sandy-Jacobs-Hays-City-Commission/100063604999773/",
      "title": "Sandy Jacobs - Hays City Commission",
      "publisher": "Facebook",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Sandy Jacobs."
      ]
    },
    {
      "id": "s-3",
      "tier": "secondary",
      "url": "https://goodparty.org/candidate/sandy-jacobs/hays-city-commission",
      "title": "GoodParty",
      "publisher": "Goodparty",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Sandy Jacobs."
      ]
    },
    {
      "id": "s-4",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/b54fadff-9d52-40bc-b6b8-e51faec8edaf",
      "title": "Hays Post: Jacobs announces filing",
      "publisher": "Hayspost",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Sandy Jacobs."
      ]
    },
    {
      "id": "s-5",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/c0016433-275d-4af3-aabe-af7379f8c56f",
      "title": "Hays Post: Sandy Jacobs Q&A",
      "publisher": "Hayspost",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Sandy Jacobs.",
        "Observed public online activity mapped to Water.",
        "Observed public online activity mapped to Taxes / Budgeting."
      ]
    },
    {
      "id": "s-6",
      "tier": "primary",
      "url": "https://haysusa.com/270/Sandy-Jacobs",
      "title": "Sandy Jacobs - City of Hays Profile",
      "publisher": "Haysusa",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Sandy Jacobs."
      ]
    },
    {
      "id": "s-7",
      "tier": "secondary",
      "url": "https://www.hdnews.net/reorganization-of-commission-names-jacobs-as-mayor-ruder-as-vice-mayor/",
      "title": "HDN: Jacobs elected Mayor, Ruder Vice Mayor",
      "publisher": "Hdnews",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Sandy Jacobs."
      ]
    },
    {
      "id": "s-12",
      "tier": "social",
      "url": "https://www.facebook.com/Sandy-Jacobs-Hays-City-Commission-354164551685996/`",
      "title": "Facebook",
      "publisher": "Facebook",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Sandy Jacobs."
      ]
    },
    {
      "id": "s-13",
      "tier": "social",
      "url": "https://www.facebook.com/people/Sandy-Jacobs-Hays-City-Commission/100063604999773/`",
      "title": "Facebook",
      "publisher": "Facebook",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Sandy Jacobs."
      ]
    },
    {
      "id": "s-social-crossref-1",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/5e5871c7b0e3671763224d5c",
      "title": "Hays Post / Hayspost",
      "publisher": "Hayspost",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Water.",
        "Hays Post: New city water rebates more inclusive"
      ]
    },
    {
      "id": "s-social-crossref-2",
      "tier": "secondary",
      "url": "https://archive.hayspost.com/2017/03/21/foundation-announces-results-of-twice-as-nice-fundraising-program/",
      "title": "Hays Post / Archive.Hayspost",
      "publisher": "Archive.Hayspost",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Taxes / Budgeting.",
        "Hays Post Archive: Foundation announces results of Twice as Nice fundraising program"
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
        "Observed public online activity mapped to Taxes / Budgeting.",
        "Hays Post: Planned travel plaza and 2027 draft budget"
      ]
    },
    {
      "id": "s-social-crossref-4",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/b7a4b7ea-3e19-4919-a7fa-1de6db7bed8c",
      "title": "Hays Post / Hayspost",
      "publisher": "Hayspost",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Retail and Economic Development.",
        "\"Retail is really high on my list, and the workforce needs some attention.\" Source: Hays Post, Nov. 6, 2025."
      ]
    }
  ]
};

if (process.env.NODE_ENV !== "production") {
  const result = validateCandidateV2(SANDY_JACOBS_V2);
  if (!result.ok) {
    // eslint-disable-next-line no-console
    console.error(
      "[sandy-jacobs.ts] validateCandidateV2 FAILED:\n" +
        result.errors.join("\n"),
    );
  }
}
