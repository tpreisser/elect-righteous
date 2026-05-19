/* Auto-normalized with issue-mapped social/online cross-reference signals.
 * To refresh:
 *   node scripts/hydrate-v2-social-signals.mjs
 */

import type { CandidateFullV2 } from "@/data/types-v2";
import { validateCandidateV2 } from "@/data/types-v2";

export const SHAUN_MUSIL_V2: CandidateFullV2 = {
  "slug": "shaun-musil",
  "name": "Shaun Musil",
  "party": "NP",
  "position": "Hays City Commissioner",
  "electionSlug": "hays-city-current",
  "incumbent": true,
  "occupation": "Nex-Tech Employee / Business Owner",
  "campaignWebsite": "https://www.haysusa.com/269/City-Commission",
  "issues": [
    {
      "id": "i-water-supply-1",
      "title": "Water Supply",
      "stated": {
        "text": "Musil has consistently treated the R9 Ranch water pipeline as the city's top long-term responsibility, calling it \"unfinished business\" and saying \"I believe it's going to happen.\"",
        "sourceIds": [
          "s-7",
          "s-1",
          "s-2",
          "s-3",
          "s-4",
          "s-5"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Hays Post",
          "observation": "2024 R9 ruling: As mayor, Musil called the favorable R9 water-transfer ruling a huge win for Hays, Russell, and the region, said conservation would continue, and emphasized being good neighbors to Kinsley. Source: Hays Post, Feb. 8, 2024.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "i-water-supply-1"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Hays Post",
          "observation": "2025 candidate forum: Musil said he believed R9 would happen, that Hays had the state's lowest per-person water usage, that parks should be reprioritized, that more housing should open up affordability, and that funding nonprofits more would probably require a mill levy increase. Source: Hays Post, Oct. 8, 2025.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-2"
          ],
          "mappedToIssueId": "i-water-supply-1"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Hays Post",
          "observation": "2025 Q&A: Musil said he was running because of unfinished business, mainly the water project; called water, housing, and retail the hardest issues he had handled; said he had no thought of raising the mill levy in the next few years; and closed by saying he would listen and represent the whole community. Source: Hays Post, Oct. 24, 2025.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-6"
          ],
          "mappedToIssueId": "i-water-supply-1"
        }
      ]
    },
    {
      "id": "i-retail-and-economic-development-2",
      "title": "Retail and Economic Development",
      "stated": {
        "text": "Has pushed for retail growth and a stronger sales-tax base, supporting incentives like IRBs for new businesses and calling retail development a \"priority.\"",
        "sourceIds": [
          "s-1",
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
          "observation": "2021 Grow Hays funding: Musil called Grow Hays the best economic development program since he had been on the commission and said Hays could not go backwards. Source: Hays Post, Jun. 11, 2021.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-3"
          ],
          "mappedToIssueId": "i-retail-and-economic-development-2"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Hays Post",
          "observation": "2024 retail development: Musil said city-owned land north of I-70 showed Hays was serious about development and said retail was a priority. Source: Hays Post, Dec. 7, 2024.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-4"
          ],
          "mappedToIssueId": "i-retail-and-economic-development-2"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Hays Post",
          "observation": "2026 economic development: After a Grow Hays annual review, Musil was described as pleased with 2025 economic-development momentum. Source: Hays Post, Jan. 17, 2026.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-5"
          ],
          "mappedToIssueId": "i-retail-and-economic-development-2"
        }
      ]
    },
    {
      "id": "i-housing-3",
      "title": "Housing",
      "stated": {
        "text": "Strong advocate for Reinvestment Housing Incentive Districts (RHIDs), calling them one of the \"most impactful pieces of legislation\" and pointing to more houses being built as proof.",
        "sourceIds": [
          "s-1",
          "s-4",
          "s-5",
          "s-6"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "haysusa.com",
          "observation": "2026 city minutes/agendas: April 2026 city materials show Musil present for meetings involving development incentives, housing fee waivers, and routine governance, but the minutes are mostly procedural rather than quote-rich. Source: City agenda packet, Apr. 16, 2026.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-6"
          ],
          "mappedToIssueId": "i-housing-3"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Facebook",
          "observation": "I searched Shaun Musil with Hays, Hays City Commission, mayor, campaign, Facebook, musilcomish, LinkedIn, GoodParty, Hays Post, Hays USA, agenda/minutes, R9 Ranch, water, retail, housing, Grow Hays, Paisley Pear, FHSU, airport, masks, COVID, and 2026. I prioritized public, candidate-controlled or candidate-attributed material: the City of Hays profile and commission page, city agenda/minute packets, GoodParty's...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-2"
          ],
          "mappedToIssueId": "i-housing-3"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Hays Post",
          "observation": "Musil pairs that water message with a pro-growth, pro-retail view of Hays. He repeatedly says Hays needs more retail, more housing, and a stronger sales-tax base. In 2024, he said city-owned land north of I-70 showed Hays was serious about development and that retail was a priority. In 2026, after discussion of Chick-fil-A incentives, he credited Grow Hays and city staff and asked, \"Chick-fil-A now; what's next?\"...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-4"
          ],
          "mappedToIssueId": "i-housing-3"
        }
      ]
    },
    {
      "id": "i-covid-response-4",
      "title": "COVID Response",
      "stated": {
        "text": "Voted to extend the Hays mask ordinance while serving as mayor, a decision that led to vandalism and threats against his family. As a city commissioner, Musil's public record centers on local infrastructure and development rather than state or federal policy issues. He has not taken clear public positions on abortion, guns, immigration, or other statewide debates.",
        "sourceIds": [
          "s-1",
          "s-2",
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
          "observation": "His COVID-era comments are the sharpest example of his governing style under pressure. As mayor in 2020, Musil backed mask rules and enforcement while saying his goal was to keep schools and businesses open. After his mayoral year ended, he said the commission disagreed, worked it out, and acted for the community, adding that he had been scared by some decisions but felt the commission did the right thing. The...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-7"
          ],
          "mappedToIssueId": "i-covid-response-4"
        }
      ]
    }
  ],
  "whoTheyAre": "Shaun Musil is a longtime Hays city commissioner and former mayor whose public profile is built on local government, business, and infrastructure. He works as an account representative for Nex-Tech, has lived in Hays for about 30 years, and spent seven years as co-owner of the Paisley Pear Wine Bar, Bistro and Market with his wife, Heather, before the business was sold in 2024.\n\nMusil has been on the commission since 2013, which makes him one of the city's most experienced elected officials. His public style is understated. He is not a partisan brand-builder. He reads instead as a city hall veteran whose name is tied to the daily grind of water policy, development debates, and pandemic decisions.",
  "recordSummary": "Musil's record is dominated by the R9 Ranch water project, the long-running effort to secure Hays' future water supply. In candidate Q&A coverage, he has repeatedly described water as the city's main unfinished business and has treated the pipeline as a generational project rather than a routine utility upgrade.\n\nHe also had a prominent role during the COVID period. Musil voted to extend Hays' mask ordinance while serving as mayor, and local coverage later reported that his family faced vandalism and threats after the decision. That episode remains one of the sharpest tests of political pressure in recent Hays city government.\n\nMusil has also backed housing and retail-development efforts and has argued that city growth depends on expanding the tax base while keeping long-term utility planning on track. His ownership of the Paisley Pear gave him a visible downtown stake during some of those debates, though the public record reviewed here showed no formal ethics complaint.",
  "ownWordsNarrative": "Shaun Musil's public messaging is not built around a fully visible campaign-social operation. Through May 11, 2026, the clearest record comes from Hays Post candidate interviews, candidate forums, city meeting coverage, official City of Hays materials, GoodParty's unclaimed candidate profile, limited LinkedIn public previews, and civic/business coverage tied to the Paisley Pear and Fort Hays State University.\n\nThe strongest recurring theme is water. In his 2025 candidate Q&A, Musil said he was running again because Hays had \"unfinished business,\" mainly the water project, and said water should always be the city's No. 1 issue. At the 2025 forum, he said he believed R9 would happen, defended Hays' conservation record, and argued that the city was not taking water from Kinsley. Earlier, after a favorable 2024 ruling, he called R9 a huge win for Hays, Russell, and the region, said conservation would continue, and stressed being good neighbors to Kinsley. Sources: [Hays Post, Oct. 24, 2025](https://hayspost.com/posts/49060a66-e8fc-4755-a296-382a14c00a3d), [Hays Post, Oct. 8, 2025](https://hayspost.com/posts/1afb725b-f6c4-4d09-93de-94b9008ba5ae), [Hays Post, Feb. 8, 2024](https://hayspost.com/posts/8d8e87f6-e3c9-4950-bcea-9cac40e269bd).\n\nMusil pairs that water message with a pro-growth, pro-retail view of Hays. He repeatedly says Hays needs more retail, more housing, and a stronger sales-tax base. In 2024, he said city-owned land north of I-70 showed Hays was serious about development and that retail was a priority. In 2026, after discussion of Chick-fil-A incentives, he credited Grow Hays and city staff and asked, \"Chick-fil-A now; what's next?\" Sources: [Hays Post, Dec. 7, 2024](https://hayspost.com/posts/93368d50-a4df-410c-93b2-0ea148af9b4b), [Hays Post, Mar. 21, 2026](https://hayspost.com/posts/fd894259-fd52-4ccb-92c6-945bd172e875).\n\nHousing is a constant companion issue, but his language is practical rather than slogan-driven. He credits relaxed RHID policy with getting more houses built, says the city has supported low-income housing grant applications, and argues that simply giving land away does not overcome the cost of building low-cost homes. His 2025 forum answer framed the goal as building more houses so that some existing housing becomes more affordable, while acknowledging that the work is harder than it looks. Sources: [Hays Post, Oct. 24, 2025](https://hayspost.com/posts/49060a66-e8fc-4755-a296-382a14c00a3d), [Hays Post, Oct. 8, 2025](https://hayspost.com/posts/1afb725b-f6c4-4d09-93de-94b9008ba5ae).\n\nOn budgets and taxes, Musil's message is cautious. He says he does not want to raise the mill levy in the next few years, but also says costs change and \"you never want to say never.\" In 2023 budget coverage, he acknowledged that residents and business owners were feeling cost pressure and said he wanted efficiencies without putting future commissioners in a dire position. In 2026 budget discussions, his concern turned to outside nonprofit services: if agencies ask for more money and the city cannot provide it, he asked what happens if those services disappear. Sources: [Hays Post, Oct. 24, 2025](https://hayspost.com/posts/49060a66-e8fc-4755-a296-382a14c00a3d), [Hays Post, Sep. 16, 2023](https://hayspost.com/posts/0013a2b9-05a4-4aae-9794-ed48359742f0), [Hays Post, Apr. 6, 2026](https://hayspost.com/posts/87cea43b-4017-4065-a707-e19a1389beeb).\n\nHis COVID-era comments are the sharpest example of his governing style under pressure. As mayor in 2020, Musil backed mask rules and enforcement while saying his goal was to keep schools and businesses open. After his mayoral year ended, he said the commission disagreed, worked it out, and acted for the community, adding that he had been scared by some decisions but felt the commission did the right thing. The public record also notes threats and vandalism against his family vehicles after mask-ordinance conflict. Sources: [Hays Post, Aug. 28, 2020](https://hayspost.com/posts/71b2e036-1db2-45b6-86a9-c9d86520f000), [Hays Post, Jan. 15, 2021](https://hayspost.com/posts/d835988d-3ad1-481c-a439-657747f04a70).\n\nMusil also uses business-owner language. As co-owner of the former Paisley Pear, he described downtown as a welcoming place for students and families, saying FHSU students used the back room to study and relax and that he loved welcoming college students downtown. His 2021 profile ties that business background to fiscal thinking and face-to-face access, with Musil saying he prefers one-on-one conversations with constituents. Sources: [FHSU, Aug. 29, 2018](https://www.fhsu.edu/news/2018/08/marching-together-to-main-and-to-friends), [Hays Post, Oct. 31, 2021](https://hayspost.com/posts/64dd8115-641e-489a-970e-22ef124e2781).\n\nThe visible social footprint is limited. GoodParty lists Facebook, LinkedIn, and city links for Musil, but says the profile is unclaimed and issue fields are not filled out. The Facebook page at facebook.com/musilcomish was not publicly accessible in this environment, and LinkedIn activity was visible only through public search previews. No clear X/Twitter, Instagram, Threads, Bluesky, TikTok, Substack, or candidate-controlled YouTube channel surfaced. The highest visible engagement signal found was electoral rather than social: Hays Post reported Musil won re-election in 2025 with 1,772 votes, the top total among city commission candidates. Sources: [GoodParty](https://goodparty.org/candidate/shaun-musil/hays-city-commission), [Hays Post, Nov. 6, 2025](https://hayspost.com/posts/b7a4b7ea-3e19-4919-a7fa-1de6db7bed8c).\n\nMethodology: I reviewed public sources visible through May 11, 2026, including the City of Hays profile and commission pages, city agenda/minute packets, Hays Post and FHSU coverage, GoodParty's unclaimed profile, public Facebook/LinkedIn link checks, and targeted searches for campaign sites and major social platforms. I did not fabricate inaccessible social content. Login-walled, blocked, or script-dependent platform material was treated as an absence or preview unless the public page text itself was accessible.\n\nDisclaimer: This summary reflects public, candidate-attributed or candidate-amplified messaging found in accessible sources. It is not a complete archive of private social media, deleted posts, login-only activity, or every public meeting statement.",
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
  "socialResearchNote": "Social research is included as observed public behavior, not as a proxy for belief. Platforms/sources checked: City of Hays profile and commission pages, City agenda/minute packets, Hays Post, FHSU coverage, GoodParty unclaimed profile, Facebook link checks, LinkedIn public previews, X / Twitter, Instagram, Threads, Bluesky, TikTok, Substack, YouTube, Public search. Harvest range: 2018-08-29 through 2026-05-11.",
  "sources": [
    {
      "id": "s-1",
      "tier": "primary",
      "url": "https://haysusa.com/273/Shaun-Musil",
      "title": "Shaun Musil",
      "publisher": "Haysusa",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Shaun Musil."
      ]
    },
    {
      "id": "s-2",
      "tier": "social",
      "url": "https://www.facebook.com/musilcomish/",
      "title": "facebook.com/musilcomish",
      "publisher": "Facebook",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Shaun Musil."
      ]
    },
    {
      "id": "s-3",
      "tier": "social",
      "url": "https://www.linkedin.com/in/shaun-musil-26539490/",
      "title": "linkedin.com/in/shaun-musil-26539490",
      "publisher": "Linkedin",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Shaun Musil."
      ]
    },
    {
      "id": "s-4",
      "tier": "secondary",
      "url": "https://goodparty.org/candidate/shaun-musil/hays-city-commission",
      "title": "GoodParty",
      "publisher": "Goodparty",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Shaun Musil."
      ]
    },
    {
      "id": "s-5",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/d835988d-3ad1-481c-a439-657747f04a70",
      "title": "Hays Post - Musil pandemic reflection",
      "publisher": "Hayspost",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Shaun Musil."
      ]
    },
    {
      "id": "s-6",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/49060a66-e8fc-4755-a296-382a14c00a3d",
      "title": "HaysPost Candidate Q&A: Shaun Musil",
      "publisher": "Hayspost",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Shaun Musil.",
        "Observed public online activity mapped to Water Supply."
      ]
    },
    {
      "id": "s-7",
      "tier": "secondary",
      "url": "https://www.nex-tech.com/business/shaun/",
      "title": "Nex-Tech: Shaun profile",
      "publisher": "Nex-Tech",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Shaun Musil."
      ]
    },
    {
      "id": "s-social-crossref-1",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/8d8e87f6-e3c9-4950-bcea-9cac40e269bd",
      "title": "Hays Post / Hayspost",
      "publisher": "Hayspost",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Water Supply.",
        "2024 R9 ruling: As mayor, Musil called the favorable R9 water-transfer ruling a huge win for Hays, Russell, and the region, said conservation would continue, and emphasized being g"
      ]
    },
    {
      "id": "s-social-crossref-2",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/1afb725b-f6c4-4d09-93de-94b9008ba5ae",
      "title": "Hays Post / Hayspost",
      "publisher": "Hayspost",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Water Supply.",
        "2025 candidate forum: Musil said he believed R9 would happen, that Hays had the state's lowest per-person water usage, that parks should be reprioritized, that more housing should "
      ]
    },
    {
      "id": "s-social-crossref-3",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/ff990305-fdea-40c2-a1c9-1e07624baf77",
      "title": "Hays Post / Hayspost",
      "publisher": "Hayspost",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Retail and Economic Development.",
        "2021 Grow Hays funding: Musil called Grow Hays the best economic development program since he had been on the commission and said Hays could not go backwards. Source: Hays Post, Ju"
      ]
    },
    {
      "id": "s-social-crossref-4",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/93368d50-a4df-410c-93b2-0ea148af9b4b",
      "title": "Hays Post / Hayspost",
      "publisher": "Hayspost",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Retail and Economic Development.",
        "2024 retail development: Musil said city-owned land north of I-70 showed Hays was serious about development and said retail was a priority. Source: Hays Post, Dec. 7, 2024.",
        "Observed public online activity mapped to Housing."
      ]
    },
    {
      "id": "s-social-crossref-5",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/25729bbf-6cf9-4d9e-a74e-e7a60f5e43e9",
      "title": "Hays Post / Hayspost",
      "publisher": "Hayspost",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Retail and Economic Development.",
        "2026 economic development: After a Grow Hays annual review, Musil was described as pleased with 2025 economic-development momentum. Source: Hays Post, Jan. 17, 2026."
      ]
    },
    {
      "id": "s-social-crossref-6",
      "tier": "primary",
      "url": "https://www.haysusa.com/AgendaCenter/ViewFile/Agenda/_04162026-1606",
      "title": "haysusa.com / Haysusa",
      "publisher": "Haysusa",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Housing.",
        "2026 city minutes/agendas: April 2026 city materials show Musil present for meetings involving development incentives, housing fee waivers, and routine governance, but the minutes "
      ]
    },
    {
      "id": "s-social-crossref-7",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/71b2e036-1db2-45b6-86a9-c9d86520f000",
      "title": "Hays Post / Hayspost",
      "publisher": "Hayspost",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to COVID Response.",
        "His COVID-era comments are the sharpest example of his governing style under pressure. As mayor in 2020, Musil backed mask rules and enforcement while saying his goal was to keep s"
      ]
    }
  ]
};

if (process.env.NODE_ENV !== "production") {
  const result = validateCandidateV2(SHAUN_MUSIL_V2);
  if (!result.ok) {
    // eslint-disable-next-line no-console
    console.error(
      "[shaun-musil.ts] validateCandidateV2 FAILED:\n" +
        result.errors.join("\n"),
    );
  }
}
