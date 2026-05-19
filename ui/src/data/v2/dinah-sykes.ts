/* Auto-normalized with issue-mapped social/online cross-reference signals.
 * To refresh:
 *   node scripts/hydrate-v2-social-signals.mjs
 */

import type { CandidateFullV2 } from "@/data/types-v2";
import { validateCandidateV2 } from "@/data/types-v2";

export const DINAH_SYKES_V2: CandidateFullV2 = {
  "slug": "dinah-sykes",
  "name": "Dinah Sykes",
  "party": "D",
  "position": "Insurance Commissioner candidate",
  "electionSlug": "kansas-insurance-2026",
  "incumbent": false,
  "occupation": "Kansas Senate, District 21 -- Senate Minority Leader (since 2021)",
  "born": "April 10, 1977",
  "hometown": "Lenexa, KS (Johnson County)",
  "family": "Jeffrey Sykes; Two sons: William and Tyler",
  "campaignWebsite": "https://www.dinahsykes.com/",
  "issues": [
    {
      "id": "i-abortion-sanctity-of-life-1",
      "title": "Abortion / Sanctity of Life",
      "stated": {
        "text": "Supports access to abortion. Her legislative platform includes abortion access as part of her broader healthcare and consumer-protection agenda.",
        "sourceIds": [
          "s-9",
          "s-1",
          "s-6",
          "s-7",
          "s-8"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "KCUR",
          "observation": "29, 2024: Sykes spoke at a reproductive-rights rally and vowed to knock on doors to break the supermajority after abortion-related veto override activity. (source) 18. Johnson County Post, Feb. 13, 2023: Sykes's candidate-attributed Capitol Update criticized public-health limits, anti-trans bills, abortion restrictions, vouchers, Medicaid refusal, and flat-tax policy. (source) 19. KCUR, Jun.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "i-abortion-sanctity-of-life-1"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Public web",
          "observation": "Within the accessible material reviewed, no sustained campaign-controlled 2026 insurance messaging centered guns, immigration/border policy, marijuana policy, rural broadband, road and bridge funding, water policy, the Ogallala aquifer, energy policy, farm policy, or election administration. Sykes has public legislative material on LGBTQ+ policy, abortion/reproductive rights, public schools, taxes, health care,...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-2"
          ],
          "mappedToIssueId": "i-abortion-sanctity-of-life-1"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Kansas Reflector",
          "observation": "On civil rights and social issues, the visible record is sharper and more confrontational. In 2024, Sykes told The Advocate that anti-trans legislation was \"filled with hate\" and said decisions about gender-affirming care involve children, families, mental-health counseling, and physicians. At an April 2024 reproductive-rights rally, Kansas Reflector quoted her vowing to knock on doors and break the Republican...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-2"
          ],
          "mappedToIssueId": "i-abortion-sanctity-of-life-1"
        }
      ]
    },
    {
      "id": "i-marriage-family-lgbtq-policy-2",
      "title": "Marriage & Family / LGBTQ+ Policy",
      "stated": {
        "text": "No candidate-controlled statement was found in the reviewed public record for this issue. This page therefore does not infer a position from party label, faith affiliation, follows, likes, comments, or associations.",
        "sourceIds": [
          "s-1",
          "s-6",
          "s-7",
          "s-8"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Kansas Reflector",
          "observation": "3, 2022: archived @dinah_sykes thread on redistricting said the Ad Astra 2 map fell short and urged a fair, legal map. (source) 16. Advocate, Apr. 3, 2024: Sykes discussed anti-LGBTQ+ legislation and gender-affirming care, saying legislation targeting trans Kansans was \"filled with hate\" and warning about effects on children. (source) 17. Kansas Reflector, Apr.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-3"
          ],
          "mappedToIssueId": "i-marriage-family-lgbtq-policy-2"
        },
        {
          "id": "ss-crossref-3",
          "platform": "X",
          "observation": "Her older candidate-attributed writing and indexed posts reinforce a theme of opposing what she calls extremism and overreach. In a February 2023 Capitol Update, she criticized public-health restrictions, anti-trans bills, abortion limits, school vouchers, Medicaid refusal, and flat-tax policy. In a 2022 archived X thread, she said redistricting was a once-in-a-decade constitutional responsibility and urged...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-10"
          ],
          "mappedToIssueId": "i-marriage-family-lgbtq-policy-2"
        }
      ]
    },
    {
      "id": "i-religious-liberty-3",
      "title": "Religious Liberty",
      "stated": {
        "text": "Runs as a Democrat. No specific personal statement found in public sources.",
        "sourceIds": [
          "s-1",
          "s-6",
          "s-7",
          "s-8"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "kcur",
          "observation": "17, 2025: interview after the assassination of Minnesota Rep. Melissa Hortman. Sykes discussed safety concerns, divisiveness, and the need to go after policy rather than people. (source) 20. Yahoo/Kansas City Star opinion, May 21, 2023: Sykes wrote as a Christian, mother, and daughter who lost her mother to breast cancer, linking those experiences to public schools, health care, justice, and mercy. (source) 21....",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-11"
          ],
          "mappedToIssueId": "i-religious-liberty-3"
        },
        {
          "id": "ss-crossref-3",
          "platform": "yahoo.com",
          "observation": "Sykes also uses personal and moral biography in public writing. In a 2023 opinion piece, she described herself as a mom, a daughter who lost her mother to breast cancer, and a Christian, linking those experiences to public schools, health care, justice, and mercy. That language does not dominate the current insurance campaign, but it explains why school funding, health access, and compassion recur in her public...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-4"
          ],
          "mappedToIssueId": "i-religious-liberty-3"
        }
      ]
    },
    {
      "id": "i-guns-second-amendment-4",
      "title": "Guns / Second Amendment",
      "stated": {
        "text": "No candidate-controlled statement was found in the reviewed public record for this issue. This page therefore does not infer a position from party label, faith affiliation, follows, likes, comments, or associations.",
        "sourceIds": [
          "s-1",
          "s-6",
          "s-7",
          "s-8"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "YouTube",
          "observation": "The main visible absences are platform and issue absences. No verified candidate-controlled YouTube, TikTok, Bluesky, Threads, Truth Social, Gab, Gettr, Substack, or Reddit account surfaced in this pass. In the current insurance-campaign material reviewed, there was no sustained messaging on guns, immigration, marijuana, broadband, roads, water, energy, farm policy, or election administration. The accessible 2026...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-2"
          ],
          "mappedToIssueId": "i-guns-second-amendment-4"
        }
      ]
    },
    {
      "id": "i-immigration-border-5",
      "title": "Immigration / Border",
      "stated": {
        "text": "Runs as a Democrat. The Kansas Democratic Party platform supports immigration reform with a pathway to citi",
        "sourceIds": [
          "s-11",
          "s-13",
          "s-1",
          "s-6",
          "s-7",
          "s-8"
        ]
      },
      "actions": [],
      "socialSignals": []
    }
  ],
  "whoTheyAre": "Dinah Sykes is a Lenexa state senator who serves as Kansas Senate minority leader and is running for insurance commissioner in 2026 as a Democrat. She first won her Senate seat in 2016, then switched parties in late 2018 after breaking with Kansas Republicans. That party switch remains one of the most visible turning points in her public career.\n\nSykes has built her public profile in Johnson County and in the Statehouse as a legislative leader rather than as an insurance-industry figure. In this race, she is presenting herself as a consumer-focused candidate who wants the insurance department to concentrate on household costs, coverage problems, and oversight of insurers.\n\nHer campaign has also benefited from support from two former Kansas insurance commissioners, Kathleen Sebelius and Sandy Praeger. That gives her a notable coalition in a race where most candidates are trying to prove they understand both regulation and retail politics.",
  "recordSummary": "Sykes's record is rooted in legislative leadership. As Senate minority leader, she has been one of the most visible Democrats in the Kansas Legislature, and her public record includes advocacy on health care costs, Medicaid expansion, school funding, and protections for vulnerable Kansans. Her insurance campaign extends that same affordability argument into a regulatory office.\n\nIn the insurance race, Sykes has made the clearest public case that Kansas households are paying too much for coverage and that the office should be more willing to challenge insurers. She has said the cost of health insurance in Kansas is out of control, and she has framed the job as one that should protect policyholders rather than the industry it regulates.\n\nShe has also tried to draw a sharper ethical distinction in the field by pledging to reject insurance-industry money. That stance, together with endorsements from Praeger and Sebelius, has helped define her as the candidate arguing for a more independent regulator.",
  "ownWordsNarrative": "_A summary of what Dinah Sykes has publicly said, posted, and amplified across campaign channels, official legislative pages, social profile metadata, indexed public posts, and public news/interview items. Drawn from public captures through May 11, 2026. We report patterns; we do not interpret intent._\n\nSykes's current insurance-commissioner campaign is built around affordability, consumer protection, transparency, and fairness. Her verified campaign site says she is \"Fighting for Affordable Insurance and Protecting Kansas Families\" and that Kansas deserves an insurance commissioner \"who puts people first.\" The same page says she is tired of seeing the insurance industry deny payment or block treatment, and describes the race as a fight to hold insurers accountable. ([source](https://www.dinahsykes.com/))\n\nHer launch message sharpened that frame. In January 2026 coverage, Sykes said the cost of Kansas health insurance was \"simply out of control\" and that families cannot keep up with rising premiums for health, auto, property, and other insurance. She also pledged not to \"take a single dime from the insurance industry,\" making independence from regulated companies part of her public case. ([source](https://kansasreflector.com/briefs/kansas-senate-minority-leader-challenges-gop-house-speaker-for-state-insurance-commissioner/))\n\nThe campaign footprint is compact and Meta-centered. The campaign site links Facebook and Instagram, but not X, LinkedIn, YouTube, TikTok, Bluesky, Threads, Truth Social, Gab, Gettr, Substack, or Reddit. Facebook identified the page as \"Senator Dinah Sykes\" with 3,401 likes and 105 talking about this; Instagram identified [@dinah_sykes](https://www.instagram.com/dinah_sykes/) with 1,411 followers, 86 following, and 222 posts. Both profiles describe her as a Kansas state senator and insurance-commissioner candidate. ([campaign site](https://www.dinahsykes.com/), [Facebook](https://www.facebook.com/Sykes4KS/), [Instagram](https://www.instagram.com/dinah_sykes/))\n\nThe largest visible audience signal was X, even though the current campaign site does not link it. Public X metadata for [@dinah_sykes](https://x.com/dinah_sykes) showed 4,907 followers, 749 following, 6,322 posts, and a bio presenting her as Kansas Senate Minority Leader representing District 21 and working in #ksleg for Lenexa and Overland Park. Direct logged-out X did not expose a reliable current timeline, so the harvest uses account metadata and indexed posts only. ([source](https://x.com/dinah_sykes))\n\nHer legislative identity remains central to the way she presents herself. Kansas Senate Democrats call her the first woman in Kansas history to serve as Senate Democratic leader and describe her as a champion for public-school funding, early childhood education, and protections for survivors of domestic violence, sexual assault, human trafficking, and stalking. The profile says she leads with \"courage, compassion, and common sense.\" ([source](https://www.kssenatedems.org/dinah-sykes))\n\nThe broader issue pattern is affordability. In January 2025, Sykes said every Republican priority should pass a test: whether it makes life more affordable and improves quality of life. In a joint February 2025 statement with Gov. Laura Kelly and House Minority Leader Brandon Woodard, she backed a $15 minimum wage and argued Kansas workers should not make less than workers in Missouri. ([WIBW](https://www.wibw.com/2025/01/15/kansas-democrats-outline-legislative-priorities/), [Governor's office](https://www.governor.ks.gov/Home/Components/News/News/537/56))\n\nTax policy is another recurring signal. Sykes has repeatedly criticized flat-tax proposals as reckless and skewed away from working families. An indexed X post thanked Gov. Kelly for vetoing a flat tax that Sykes said would return Kansas to the Brownback era while doing little for the middle class. In Kansas Reflector coverage, she said it was time for honest conversations about tax relief for all Kansans and responsible tax cuts that support working families. ([indexed X source](https://twstalker.com/RepSydneyCarlin), [Kansas Reflector](https://kansasreflector.com/2024/02/20/kansas-house-republicans-fail-to-override-governors-veto-on-massive-tax-reform-bill/))\n\nHealth care and family economics overlap in her legislative messaging. The official Kansas Legislature profile shows sponsored bills on paid sick time, the Kansas minimum wage, child income tax credits, property-tax relief, Social Security and homestead eligibility, and breast-cancer screening coverage. A 2024 tax-cut event quoted her calling a child-care tax credit a \"win-win\" that would help families, employers, and workforce participation. ([Legislature](https://www.kslegislature.gov/li/b2025_26/members/sen_sykes_dinah_1/), [WIBW](https://www.wibw.com/2024/01/08/gov-kelly-state-lawmakers-unveil-tax-cut-proposal-first-day-session/))\n\nOn civil rights and social issues, the visible record is sharper and more confrontational. In 2024, Sykes told The Advocate that anti-trans legislation was \"filled with hate\" and said decisions about gender-affirming care involve children, families, mental-health counseling, and physicians. At an April 2024 reproductive-rights rally, Kansas Reflector quoted her vowing to knock on doors and break the Republican supermajority after abortion-related veto override efforts. ([Advocate](https://www.advocate.com/politics/kansas-lgbtq-laws), [Kansas Reflector](https://kansasreflector.com/2024/04/29/with-veto-override-attempt-underway-kansas-abortion-rights-supporters-sound-alarm/))\n\nHer older candidate-attributed writing and indexed posts reinforce a theme of opposing what she calls extremism and overreach. In a February 2023 Capitol Update, she criticized public-health restrictions, anti-trans bills, abortion limits, school vouchers, Medicaid refusal, and flat-tax policy. In a 2022 archived X thread, she said redistricting was a once-in-a-decade constitutional responsibility and urged lawmakers to draw a fair, legal map. ([Johnson County Post](https://johnsoncountypost.com/2023/02/13/capitol-update-sen-dinah-sykes-gop-harmful-193705/), [Thread Reader](https://threadreaderapp.com/thread/1489374594314211338.html))\n\nSykes also uses personal and moral biography in public writing. In a 2023 opinion piece, she described herself as a mom, a daughter who lost her mother to breast cancer, and a Christian, linking those experiences to public schools, health care, justice, and mercy. That language does not dominate the current insurance campaign, but it explains why school funding, health access, and compassion recur in her public profile. ([source](https://www.yahoo.com/news/kansas-republicans-religion-fuel-hate-101700931.html))\n\nThe main visible absences are platform and issue absences. No verified candidate-controlled YouTube, TikTok, Bluesky, Threads, Truth Social, Gab, Gettr, Substack, or Reddit account surfaced in this pass. In the current insurance-campaign material reviewed, there was no sustained messaging on guns, immigration, marijuana, broadband, roads, water, energy, farm policy, or election administration. The accessible 2026 campaign is strongest on insurance costs, consumer protection, fairness, and industry accountability.\n\nMethodology: Public capture was conducted on May 11, 2026. Date range covered: June 11, 2015 through May 11, 2026 for platform presence and account metadata; Feb. 3, 2022 through May 11, 2026 for indexed candidate-attributed posts and public quote/interview items; and Jan. 8, 2026 through May 11, 2026 for the current insurance-commissioner campaign. Platforms and sources surveyed included the campaign site, Facebook, Instagram, X, LinkedIn, Kansas Senate Democrats, Kansas Legislature, YouTube, Vimeo, TikTok, Bluesky, Threads, Truth Social, Gab, Gettr, Substack, Reddit, Thread Reader, public news, public radio/interview pages, and candidate-attributed opinion. Login-walled, script-blocked, private, deleted, or non-indexed content was not counted as reviewed.\n\nDisclaimer: This is a public, logged-out harvest of candidate-controlled, official, and candidate-attributed material. It reports visible patterns and documented absences in the capture set; it does not infer private strategy, intent, or unobserved activity.",
  "whereTheyWorship": "Public sources do not identify a current church affiliation.",
  "campaignFinance": {
    "totalRaised": "No Kansas statewide finance report listed online as of 2026-04-01",
    "narrative": "No campaign finance data available online. The public filing trail cited in the raw material included a treasurer filing, but not a usable receipts-and-expenditures report with totals or donor patterns.",
    "donors": [
      {
        "name": "Kansas statewide filing report",
        "amount": "No report listed online"
      },
      {
        "name": "Insurance-industry contributions",
        "amount": "Pledged to decline"
      }
    ],
    "undisclosed": "The treasurer appointment is public, but a statewide donor ledger/report was not listed on the Kansas filing index as of April 1, 2026.",
    "reportingPeriod": "through 2026-04-01",
    "source": "Kansas statewide filings index / campaign statements / Kansas Reflector"
  },
  "socialResearchNote": "Social research is included as observed public behavior, not as a proxy for belief. Platforms/sources checked: Campaign website, Facebook, Instagram, X / Twitter, LinkedIn, Kansas Senate Democrats, Kansas Legislature, YouTube, Vimeo, TikTok, Bluesky, Threads, Truth Social, Gab, Gettr, Substack, Reddit, Thread Reader, Public news, Public radio/interviews, Candidate-attributed opinion. Harvest range: 2015-06-11 through 2026-05-11.",
  "sources": [
    {
      "id": "s-1",
      "tier": "secondary",
      "url": "https://www.dinahsykes.com/",
      "title": "source",
      "publisher": "Dinahsykes",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Dinah Sykes."
      ]
    },
    {
      "id": "s-2",
      "tier": "social",
      "url": "https://www.facebook.com/Sykes4KS/",
      "title": "source",
      "publisher": "Facebook",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Dinah Sykes."
      ]
    },
    {
      "id": "s-6",
      "tier": "secondary",
      "url": "https://www.kssenatedems.org/dinah-sykes",
      "title": "source",
      "publisher": "Kssenatedems",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Dinah Sykes."
      ]
    },
    {
      "id": "s-7",
      "tier": "secondary",
      "url": "https://www.kssenatedems.org/dinah-sykes1",
      "title": "source",
      "publisher": "Kssenatedems",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Dinah Sykes."
      ]
    },
    {
      "id": "s-8",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li/b2025_26/members/sen_sykes_dinah_1/",
      "title": "source",
      "publisher": "Kslegislature",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Dinah Sykes."
      ]
    },
    {
      "id": "s-9",
      "tier": "secondary",
      "url": "https://www.nwksradio.net/post/dinah-sykes-legislative-update-end-of-sessions-recap",
      "title": "source",
      "publisher": "Nwksradio",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Dinah Sykes."
      ]
    },
    {
      "id": "s-10",
      "tier": "secondary",
      "url": "https://johnsoncountypost.com/2023/02/13/capitol-update-sen-dinah-sykes-gop-harmful-193705/",
      "title": "source",
      "publisher": "Johnsoncountypost",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Dinah Sykes.",
        "Observed public online activity mapped to Marriage & Family / LGBTQ+ Policy."
      ]
    },
    {
      "id": "s-11",
      "tier": "secondary",
      "url": "https://www.kcur.org/podcast/up-to-date/2025-06-17/dinah-sykes-kansas-senate-democrat-hartman-assassination",
      "title": "source",
      "publisher": "Kcur",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Dinah Sykes.",
        "Observed public online activity mapped to Religious Liberty."
      ]
    },
    {
      "id": "s-13",
      "tier": "secondary",
      "url": "https://kansasreflector.com/briefs/kansas-senate-minority-leader-challenges-gop-house-speaker-for-state-insurance-commissioner/",
      "title": "Kansas Reflector: Sykes challenges Hawkins",
      "publisher": "Kansasreflector",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Dinah Sykes."
      ]
    },
    {
      "id": "s-social-crossref-1",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2024/04/29/with-veto-override-attempt-underway-kansas-abortion-rights-supporters-sound-alarm/",
      "title": "KCUR / Kansasreflector",
      "publisher": "Kansasreflector",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Abortion / Sanctity of Life.",
        "29, 2024: Sykes spoke at a reproductive-rights rally and vowed to knock on doors to break the supermajority after abortion-related veto override activity. (source) 18. Johnson Coun"
      ]
    },
    {
      "id": "s-social-crossref-2",
      "tier": "secondary",
      "url": "https://www.advocate.com/politics/kansas-lgbtq-laws",
      "title": "Kansas Reflector / Advocate",
      "publisher": "Advocate",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Abortion / Sanctity of Life.",
        "On civil rights and social issues, the visible record is sharper and more confrontational. In 2024, Sykes told The Advocate that anti-trans legislation was \"filled with hate\" and s"
      ]
    },
    {
      "id": "s-social-crossref-3",
      "tier": "secondary",
      "url": "https://threadreaderapp.com/thread/1489374594314211338.html",
      "title": "Kansas Reflector / Threadreaderapp",
      "publisher": "Threadreaderapp",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Marriage & Family / LGBTQ+ Policy.",
        "3, 2022: archived @dinah_sykes thread on redistricting said the Ad Astra 2 map fell short and urged a fair, legal map. (source) 16. Advocate, Apr. 3, 2024: Sykes discussed anti-LGB"
      ]
    },
    {
      "id": "s-social-crossref-4",
      "tier": "secondary",
      "url": "https://www.yahoo.com/news/kansas-republicans-religion-fuel-hate-101700931.html",
      "title": "yahoo.com / Yahoo",
      "publisher": "Yahoo",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Religious Liberty.",
        "Sykes also uses personal and moral biography in public writing. In a 2023 opinion piece, she described herself as a mom, a daughter who lost her mother to breast cancer, and a Chri"
      ]
    }
  ]
};

if (process.env.NODE_ENV !== "production") {
  const result = validateCandidateV2(DINAH_SYKES_V2);
  if (!result.ok) {
    // eslint-disable-next-line no-console
    console.error(
      "[dinah-sykes.ts] validateCandidateV2 FAILED:\n" +
        result.errors.join("\n"),
    );
  }
}
