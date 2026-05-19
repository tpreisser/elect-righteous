/* Auto-normalized with issue-mapped social/online cross-reference signals.
 * To refresh:
 *   node scripts/hydrate-v2-social-signals.mjs
 */

import type { CandidateFullV2 } from "@/data/types-v2";
import { validateCandidateV2 } from "@/data/types-v2";

export const CRAIG_MUSSER_V2: CandidateFullV2 = {
  "slug": "craig-musser",
  "name": "Craig Musser",
  "party": "I",
  "position": "U.S. House candidate, KS-01",
  "electionSlug": "ks-01-house-2026",
  "incumbent": false,
  "occupation": "Manager, Environment, Health & Safety at PureField Ingredients (Russell, KS)",
  "campaignWebsite": "https://musserforuscongress.com/",
  "issues": [
    {
      "id": "i-abortion-sanctity-of-life-1",
      "title": "Abortion / Sanctity of Life",
      "stated": {
        "text": "Runs as an independent. No specific personal statement found in public sources.",
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
          "observation": "Across the captured campaign website, the issues page contains statements about healthcare, privacy and bodily autonomy, women, children, Social Security, education, budget and taxes, and agriculture. It does not include issue pages or posts specifically addressing Fort Riley, Fort Hays State University, the Ogallala Aquifer, rural hospital closures, veterans' services, or immigration.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-1"
          ],
          "mappedToIssueId": "i-abortion-sanctity-of-life-1"
        }
      ]
    },
    {
      "id": "i-marriage-family-lgbtq-policy-2",
      "title": "Marriage & Family / LGBTQ+ Policy",
      "stated": {
        "text": "Runs as an independent. No specific personal statement found in public sources.",
        "sourceIds": [
          "s-3",
          "s-4",
          "s-5",
          "s-6"
        ]
      },
      "actions": [],
      "socialSignals": []
    },
    {
      "id": "i-religious-liberty-3",
      "title": "Religious Liberty",
      "stated": {
        "text": "Runs as an independent. No specific personal statement found in public sources.",
        "sourceIds": [
          "s-3",
          "s-4",
          "s-5",
          "s-6"
        ]
      },
      "actions": [],
      "socialSignals": []
    },
    {
      "id": "i-guns-second-amendment-4",
      "title": "Guns / Second Amendment",
      "stated": {
        "text": "Runs as an independent. No specific personal statement found in public sources.",
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
          "observation": "Across the captured social-platform record the feed contains no accessible original posts about wheat prices, water rights or the Ogallala Aquifer, rural hospital closures by name, Fort Riley, Fort Hays State University, immigration, gun policy, foreign affairs, Ukraine, Israel, tariffs, specific federal bills, or named congressional leaders.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-1"
          ],
          "mappedToIssueId": "i-guns-second-amendment-4"
        }
      ]
    },
    {
      "id": "i-immigration-border-5",
      "title": "Immigration / Border",
      "stated": {
        "text": "Runs as an independent. No specific personal statement found in public sources.",
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
          "platform": "musserforuscongress.com",
          "observation": "Across the captured period the feed contains no posts about wheat prices, water rights, the Ogallala Aquifer, rural hospital closures by name, Fort Riley, Fort Hays State University, veterans' services, county-level economic development, or immigration. The campaign website does include broad issue statements on healthcare, education, agriculture, Social Security, budget and taxes, privacy, women, and children....",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-5"
          ],
          "mappedToIssueId": "i-immigration-border-5"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Facebook",
          "observation": "Musser's platform footprint is concentrated on an official campaign website and a small Facebook page. No candidate-controlled X, Instagram, YouTube, Truth Social, Gab, Gettr, Substack, Reddit, or TikTok account was found in the public searches captured for this harvest. A LinkedIn profile URL appears in the local research file, but logged-out access returned LinkedIn's HTTP 999 wall on May 11, 2026, so no...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "i-immigration-border-5"
        }
      ]
    },
    {
      "id": "i-school-choice-parental-rights-in-education-6",
      "title": "School Choice / Parental Rights in Education",
      "stated": {
        "text": "Lists \"strong schools\" as a priority on his platform but has not elaborated publicly.",
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
          "observation": "Topic distribution among the 24 candidate-controlled website statements: healthcare — 5 statements (21%); representation / biography / campaign theme — 7 statements (29%); personal freedoms and child welfare — 4 statements (17%); education — 3 statements (13%); budget and taxes — 2 statements (8%); agriculture — 2 statements (8%); Social Security — 1 statement (4%).",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-1"
          ],
          "mappedToIssueId": "i-school-choice-parental-rights-in-education-6"
        },
        {
          "id": "ss-crossref-3",
          "platform": "musserforuscongress.com",
          "observation": "For KS-01 district issues, Musser's local material centers on agriculture, healthcare, education, and a manufacturing-and-safety biography. Agriculture accounts for 2 of 24 candidate-controlled website statements, or 8 percent. His issues page says, \"Stabilizing markets is paramount: Mother Nature provides farmers with plenty of variables.\" (source).",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-5"
          ],
          "mappedToIssueId": "i-school-choice-parental-rights-in-education-6"
        }
      ]
    },
    {
      "id": "i-marijuana-drug-policy-7",
      "title": "Marijuana / Drug Policy",
      "stated": {
        "text": "Runs as an independent. No specific personal statement found in public sources.",
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
          "platform": "musserforuscongress.com",
          "observation": "On national policy, Musser's public website addresses domestic federal programs rather than foreign affairs. The issues page states, \"It’s mandatory that we maintain social security to ensure everyone who has paid in gets the income and benefits their money has provided others.\" (source). On taxes, the same page says, \"The tax code and the way funds are directed need to be simplified, and at the same time, the...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-5"
          ],
          "mappedToIssueId": "i-marijuana-drug-policy-7"
        }
      ]
    },
    {
      "id": "i-healthcare-8",
      "title": "Healthcare",
      "stated": {
        "text": "Lists \"accessible healthcare\" as a priority and says he will \"bring discipline to fixing the healthcare system that is failing too many Kansans,\" but has not provided specifics.",
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
          "platform": "musserforuscongress.com",
          "observation": "Across the accessible candidate-controlled record, Musser does not have a conventional social feed with regular public posts; the largest body of material is the campaign website. The harvest examined 24 candidate-controlled website statements, with representation, biography, and campaign-theme statements accounting for 7 of 24 statements, or 29 percent, and healthcare accounting for 5 of 24 statements, or 21...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-3"
          ],
          "mappedToIssueId": "i-healthcare-8"
        }
      ]
    },
    {
      "id": "i-taxes-9",
      "title": "Taxes",
      "stated": {
        "text": "Says he will work on \"fixing the tax code,\" but details are thin.",
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
          "platform": "Facebook",
          "observation": "Additional public metadata line from Facebook card: \"Applying Kitchen Table Economics for Pragmatic Budget Solutions\"",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-1"
          ],
          "mappedToIssueId": "i-taxes-9"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Public web",
          "observation": "Undated; captured 2026-05-11 — \"It’s mandatory that we maintain social security to ensure everyone who has paid in gets the income and benefits their money has provided others. To do that, we must maintain a substantial and well-trained workforce, keep the federal budget in line so we can honor our treasury notes, and raise the cap on FICA to match what those who have paid in the most are taking out\"",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-1"
          ],
          "mappedToIssueId": "i-taxes-9"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Facebook",
          "observation": "Audience response is mostly unavailable because the accessible social record contains one Facebook page/post metadata item and no public post body with visible reactions, comments, shares, or views. The campaign Facebook page metadata listed \"Craig Musser for Congress, Great Bend. 2 likes. Serving Kansans Not an Agenda\" as of the May 11, 2026 capture (source). The same public card listed \"Applying Kitchen Table...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-1"
          ],
          "mappedToIssueId": "i-taxes-9"
        }
      ]
    },
    {
      "id": "i-housing-10",
      "title": "Housing",
      "stated": {
        "text": "Lists \"affordable housing\" as a campaign priority.",
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
          "observation": "Undated; captured 2026-05-11 — \"I have worked a full-time job since starting my chemical engineering degree. I have experience working in various industries like housing materials, mining, and manufacturing operations. I have worked as an engineer, human resources manager, maintenance manager, and safety director. I have worked for family businesses and large corporations. Across these jobs, I have been known as...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-1"
          ],
          "mappedToIssueId": "i-housing-10"
        }
      ]
    },
    {
      "id": "i-government-reform-11",
      "title": "Government Reform",
      "stated": {
        "text": "His clearest theme. Argues that Kansans need a representative independent of donors, party bosses, and Washington insiders, and that \"effective governance is not about ideology -- it's about listening and delivering outcomes.\"",
        "sourceIds": [
          "s-3",
          "s-4",
          "s-5",
          "s-6"
        ]
      },
      "actions": [],
      "socialSignals": []
    }
  ],
  "whoTheyAre": "Craig Musser is a 2026 candidate for Kansas' 1st Congressional District running under the United Kansas Party label. Public records describe him as the manager of environment, health, and safety at PureField Ingredients in Russell and place him near Ellinwood in Barton County, squarely inside the geography of the Big First. He filed his federal statement of candidacy on February 14, 2026.\n\nMusser is not coming out of an established Republican or Democratic organi",
  "recordSummary": "Musser has no elected-office record in the source material. The record is the campaign itself: a congressional bid with a modest digital footprint, limited media attention, and a message built around service, practicality, and frustration with party insiders. His public comments argue that government should listen and deliver results rather than serve donors or national party machinery.\n\nThat outsider pitch is paired with a thin campaign infrastructure. The file shows a website, an FEC candidate page, and a party listing, but little sign of the donor network, endorsements, or heavy media presence that usually mark a mature districtwide campaign in western Kansas.",
  "ownWordsNarrative": "*A summary of what Craig Musser has publicly said, posted, and amplified across social media and candidate-controlled web pages. Drawn from public posts and public campaign material on Facebook, the campaign website, FEC, LinkedIn metadata checks, and local news between February 14, 2026 and May 11, 2026. We report patterns; we do not interpret intent.*\n\n---\n\nAcross the accessible candidate-controlled record, Musser does not have a conventional social feed with regular public posts; the largest body of material is the campaign website. The harvest examined [24 candidate-controlled website statements](social-harvest.md), with representation, biography, and campaign-theme statements accounting for 7 of 24 statements, or 29 percent, and healthcare accounting for 5 of 24 statements, or 21 percent. The home page presents the campaign as \"Uniting Kansans For Our Common Good.\" ([source](https://musserforuscongress.com/)) and describes its frame as \"Republican Sensibility with Libertarian Ideals\" ([source](https://musserforuscongress.com/)). On the biography page, Musser wrote, \"I’m not a career politician. In fact, I’m not a politician at all.\" ([source](https://musserforuscongress.com/meetcraig)).\n\nMusser's visible alignment is with the United Kansas Party rather than with a Republican or Democratic campaign structure. His campaign home page links to the [United Kansas Party](https://unitedkansas.com/) and a campaign Facebook poll, and Hays Post reported on March 24, 2026, that he formally announced under the United Kansas banner ([source](https://hayspost.com/posts/2ac5a87c-4b19-4a42-8db8-1deab18eb3f7)). The FEC candidate page lists him as \"Candidate for House Kansas - 01 ID: H6KS01211 OTHER\" ([source](https://www.fec.gov/data/candidate/H6KS01211/)). Across the captured record, no accessible candidate-controlled posts tagged Tracey Mann, Colin McRoberts, Lauren Reinhold, federal party committees, congressional leaders, or national advocacy accounts.\n\nAudience response is mostly unavailable because the accessible social record contains one Facebook page/post metadata item and no public post body with visible reactions, comments, shares, or views. The campaign Facebook page metadata listed \"Craig Musser for Congress, Great Bend. 2 likes. Serving Kansans Not an Agenda\" as of the May 11, 2026 capture ([source](https://www.facebook.com/people/Craig-Musser-for-Congress/61584981264795/)). The same public card listed \"Applying Kitchen Table Economics for Pragmatic Budget Solutions\" ([source](https://www.facebook.com/61584981264795/posts/122103466209166042/)). No representative comment thread was visible in the logged-out capture.\n\nOn national policy, Musser's public website addresses domestic federal programs rather than foreign affairs. The issues page states, \"It’s mandatory that we maintain social security to ensure everyone who has paid in gets the income and benefits their money has provided others.\" ([source](https://musserforuscongress.com/untitled)). On taxes, the same page says, \"The tax code and the way funds are directed need to be simplified, and at the same time, the IRS needs to function primarily as a service.\" ([source](https://musserforuscongress.com/untitled)). Across the captured period the feed contains no posts about Ukraine, Israel, China, NATO, tariffs, defense spending, or specific pending federal bills.\n\nFor KS-01 district issues, Musser's local material centers on agriculture, healthcare, education, and a manufacturing-and-safety biography. Agriculture accounts for [2 of 24 candidate-controlled website statements](social-harvest.md), or 8 percent. His issues page says, \"Stabilizing markets is paramount: Mother Nature provides farmers with plenty of variables.\" ([source](https://musserforuscongress.com/untitled)). In a second agriculture statement, he wrote, \"There are many issues that farmers and ranchers have with how our government and monopolies work regarding equipment, raw materials, markets, processing, etc.\" ([source](https://musserforuscongress.com/untitled)). The FEC page records a February 14, 2026 statement of candidacy filing, and the campaign biography describes work in manufacturing, engineering, maintenance, human resources, and safety management ([source](https://www.fec.gov/data/candidate/H6KS01211/)).\n\nAcross the captured period the feed contains no posts about wheat prices, water rights, the Ogallala Aquifer, rural hospital closures by name, Fort Riley, Fort Hays State University, veterans' services, county-level economic development, or immigration. The campaign website does include broad issue statements on healthcare, education, agriculture, Social Security, budget and taxes, privacy, women, and children. Its healthcare section says, \"Mental healthcare should be a priority: Mental healthcare should be treated with the same urgency and compassion as physical illness.\" ([source](https://musserforuscongress.com/untitled)).\n\nMusser's platform footprint is concentrated on an official campaign website and a small Facebook page. No candidate-controlled X, Instagram, YouTube, Truth Social, Gab, Gettr, Substack, Reddit, or TikTok account was found in the public searches captured for this harvest. A LinkedIn profile URL appears in the local research file, but logged-out access returned LinkedIn's HTTP 999 wall on May 11, 2026, so no current public activity was captured. The FEC page says, \"We don't have MUSSER, CRAIG A for 2025–2026.\" ([source](https://www.fec.gov/data/candidate/H6KS01211/)).\n\n---\n\n**Methodology:** Date range covered: February 14, 2026 to May 11, 2026. Platforms surveyed: X, Facebook, YouTube, Instagram, LinkedIn, Truth Social, Gab, Gettr, Substack, Reddit, TikTok, campaign website, FEC, United Kansas, Ballotpedia, and local news; posts examined: 1 Facebook metadata item, 0 accessible original social posts with body text, and 24 candidate-controlled website statements.\n\nWe report patterns; we do not interpret intent.",
  "whereTheyWorship": "Public sources do not identify a current church affiliation.",
  "campaignFinance": {
    "totalRaised": "FEC says no 2025-2026 finance summary is available yet",
    "narrative": "No campaign finance data was available online. The source material confirms a federal filing and candidate page, but it does not provide a reliable receipts, cash-on-hand, or donor summary for the campaign.",
    "donors": [
      {
        "name": "Campaign finance data",
        "amount": "No campaign finance data available online yet"
      }
    ],
    "undisclosed": "The official candidate page exists, but the FEC is not yet showing a usable finance summary or donor ledger for this cycle.",
    "reportingPeriod": "through 2026-04-01",
    "source": "FEC candidate overview H6KS01211"
  },
  "socialResearchNote": "Social research is included as observed public behavior, not as a proxy for belief. Platforms/sources checked: X, Facebook, YouTube, Instagram, LinkedIn, Truth Social, Gab, Gettr, Substack, Reddit, TikTok, Campaign website, FEC, United Kansas, Local news. Harvest range: 2026-02-14 through 2026-05-11.",
  "sources": [
    {
      "id": "s-1",
      "tier": "social",
      "url": "https://www.facebook.com/people/Craig-Musser-for-Congress/61584981264795/",
      "title": "Craig Musser for Congress",
      "publisher": "Facebook",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Craig Musser.",
        "Observed public online activity mapped to Taxes."
      ]
    },
    {
      "id": "s-3",
      "tier": "secondary",
      "url": "https://musserforuscongress.com/",
      "title": "musserforuscongress.com",
      "publisher": "Musserforuscongress",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Craig Musser.",
        "Observed public online activity mapped to Healthcare."
      ]
    },
    {
      "id": "s-4",
      "tier": "secondary",
      "url": "https://musserforuscongress.com/meetcraig",
      "title": "source",
      "publisher": "Musserforuscongress",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Craig Musser."
      ]
    },
    {
      "id": "s-5",
      "tier": "secondary",
      "url": "https://musserforuscongress.com/untitled",
      "title": "source",
      "publisher": "Musserforuscongress",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Craig Musser.",
        "Observed public online activity mapped to Immigration / Border.",
        "Observed public online activity mapped to School Choice / Parental Rights in Education.",
        "Observed public online activity mapped to Marijuana / Drug Policy."
      ]
    },
    {
      "id": "s-6",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Craig_Musser",
      "title": "Craig Musser - Ballotpedia",
      "publisher": "Ballotpedia",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Craig Musser."
      ]
    },
    {
      "id": "s-social-crossref-1",
      "tier": "primary",
      "url": "https://www.fec.gov/data/candidate/H6KS01211/",
      "title": "Facebook / Fec",
      "publisher": "Fec",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Immigration / Border.",
        "Musser's platform footprint is concentrated on an official campaign website and a small Facebook page. No candidate-controlled X, Instagram, YouTube, Truth Social, Gab, Gettr, Subs"
      ]
    }
  ]
};

if (process.env.NODE_ENV !== "production") {
  const result = validateCandidateV2(CRAIG_MUSSER_V2);
  if (!result.ok) {
    // eslint-disable-next-line no-console
    console.error(
      "[craig-musser.ts] validateCandidateV2 FAILED:\n" +
        result.errors.join("\n"),
    );
  }
}
