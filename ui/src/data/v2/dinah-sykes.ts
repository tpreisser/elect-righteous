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
          "s-54",
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
            "s-5"
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
          "s-10",
          "s-16",
          "s-27",
          "s-29",
          "s-32",
          "s-40"
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
            "s-social-crossref-4"
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
          "s-28",
          "s-29",
          "s-31",
          "s-32",
          "s-36",
          "s-37"
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
            "s-social-crossref-5"
          ],
          "mappedToIssueId": "i-religious-liberty-3"
        },
        {
          "id": "ss-crossref-3",
          "platform": "yahoo.com",
          "observation": "Sykes also uses personal and moral biography in public writing. In a 2023 opinion piece, she described herself as a mom, a daughter who lost her mother to breast cancer, and a Christian, linking those experiences to public schools, health care, justice, and mercy. That language does not dominate the current insurance campaign, but it explains why school funding, health access, and compassion recur in her public...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-6"
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
          "s-10",
          "s-16",
          "s-27",
          "s-29",
          "s-32",
          "s-37"
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
            "s-5"
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
          "s-1",
          "s-2",
          "s-4",
          "s-6",
          "s-11",
          "s-13"
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
      "tier": "primary",
      "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/SWLinks2026EC.htm",
      "title": "Kansas.Gov",
      "publisher": "kansas.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Dinah Sykes's generated v2 profile."
      ]
    },
    {
      "id": "s-2",
      "tier": "primary",
      "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/Treasurers/SW03DS_AT.pdf",
      "title": "Kansas.Gov",
      "publisher": "kansas.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Dinah Sykes's generated v2 profile."
      ]
    },
    {
      "id": "s-3",
      "tier": "secondary",
      "url": "https://hartforsenate.com/",
      "title": "Hartforsenate.Com",
      "publisher": "hartforsenate.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Dinah Sykes's generated v2 profile."
      ]
    },
    {
      "id": "s-4",
      "tier": "secondary",
      "url": "https://www.christydavisforkansas.com/",
      "title": "Christydavisforkansas.Com",
      "publisher": "christydavisforkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Dinah Sykes's generated v2 profile."
      ]
    },
    {
      "id": "s-5",
      "tier": "social",
      "url": "https://www.facebook.com/christy.davis.710/",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Dinah Sykes's generated v2 profile."
      ]
    },
    {
      "id": "s-6",
      "tier": "secondary",
      "url": "https://sandyforkansas.com/",
      "title": "Sandyforkansas.Com",
      "publisher": "sandyforkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Dinah Sykes's generated v2 profile."
      ]
    },
    {
      "id": "s-7",
      "tier": "social",
      "url": "https://x.com/speumann",
      "title": "X.Com",
      "publisher": "x.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Dinah Sykes's generated v2 profile."
      ]
    },
    {
      "id": "s-8",
      "tier": "social",
      "url": "https://www.instagram.com/speumann/",
      "title": "Instagram.Com",
      "publisher": "instagram.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Dinah Sykes's generated v2 profile."
      ]
    },
    {
      "id": "s-9",
      "tier": "social",
      "url": "https://www.linkedin.com/in/sandy-spidel-neumann-a278536/",
      "title": "Linkedin.Com",
      "publisher": "linkedin.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Dinah Sykes's generated v2 profile."
      ]
    },
    {
      "id": "s-10",
      "tier": "primary",
      "url": "https://www.fec.gov/data/candidate/S6KS00262/",
      "title": "Fec.Gov",
      "publisher": "fec.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Dinah Sykes's generated v2 profile."
      ]
    },
    {
      "id": "s-11",
      "tier": "secondary",
      "url": "https://erikforkansas.com/",
      "title": "Erikforkansas.Com",
      "publisher": "erikforkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Dinah Sykes's generated v2 profile."
      ]
    },
    {
      "id": "s-12",
      "tier": "social",
      "url": "https://www.facebook.com/",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Dinah Sykes's generated v2 profile."
      ]
    },
    {
      "id": "s-13",
      "tier": "secondary",
      "url": "https://mikeforkansas.my.canva.site/",
      "title": "Mikeforkansas.My.Canva.Site",
      "publisher": "mikeforkansas.my.canva.site",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Dinah Sykes's generated v2 profile."
      ]
    },
    {
      "id": "s-14",
      "tier": "secondary",
      "url": "https://secure.actblue.com/donate/michael-soetaert",
      "title": "Secure.Actblue.Com",
      "publisher": "secure.actblue.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Dinah Sykes's generated v2 profile."
      ]
    },
    {
      "id": "s-15",
      "tier": "social",
      "url": "https://www.facebook.com/michael.soetaert1/",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Dinah Sykes's generated v2 profile."
      ]
    },
    {
      "id": "s-16",
      "tier": "primary",
      "url": "https://www.fec.gov/data/candidate/S2KS00097/",
      "title": "Fec.Gov",
      "publisher": "fec.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Dinah Sykes's generated v2 profile."
      ]
    },
    {
      "id": "s-17",
      "tier": "secondary",
      "url": "https://patrickforkansas.com/",
      "title": "Patrickforkansas.Com",
      "publisher": "patrickforkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Dinah Sykes's generated v2 profile."
      ]
    },
    {
      "id": "s-18",
      "tier": "social",
      "url": "https://www.facebook.com/patrickforkansas/",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Dinah Sykes's generated v2 profile."
      ]
    },
    {
      "id": "s-19",
      "tier": "secondary",
      "url": "https://www.kssenatedems.org/patrick-schmidt",
      "title": "Kssenatedems.Org",
      "publisher": "kssenatedems.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Dinah Sykes's generated v2 profile."
      ]
    },
    {
      "id": "s-20",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li/b2025_26/members/rep_hawkins_daniel_1/",
      "title": "Kslegislature.Gov",
      "publisher": "kslegislature.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Dinah Sykes's generated v2 profile."
      ]
    },
    {
      "id": "s-21",
      "tier": "secondary",
      "url": "https://www.hawkinsforinsurance.com/",
      "title": "Hawkinsforinsurance.Com",
      "publisher": "hawkinsforinsurance.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Dinah Sykes's generated v2 profile."
      ]
    },
    {
      "id": "s-22",
      "tier": "social",
      "url": "https://x.com/danhawkinsks",
      "title": "X.Com",
      "publisher": "x.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Dinah Sykes's generated v2 profile."
      ]
    },
    {
      "id": "s-23",
      "tier": "secondary",
      "url": "https://www.dinahsykes.com/",
      "title": "Dinahsykes.Com",
      "publisher": "dinahsykes.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Dinah Sykes's generated v2 profile."
      ]
    },
    {
      "id": "s-24",
      "tier": "social",
      "url": "https://www.facebook.com/Sykes4KS/",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Dinah Sykes's generated v2 profile."
      ]
    },
    {
      "id": "s-25",
      "tier": "secondary",
      "url": "https://www.kssenatedems.org/dinah-sykes",
      "title": "Kssenatedems.Org",
      "publisher": "kssenatedems.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Dinah Sykes's generated v2 profile."
      ]
    },
    {
      "id": "s-26",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li/b2025_26/members/sen_sykes_dinah_1/",
      "title": "Kslegislature.Gov",
      "publisher": "kslegislature.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Dinah Sykes's generated v2 profile."
      ]
    },
    {
      "id": "s-27",
      "tier": "secondary",
      "url": "https://www.kcur.org/politics-elections-and-government/2025-12-30/whos-running-to-represent-kansas-in-the-u-s-senate-in-2026-heres-a-guide-to-the-candidates",
      "title": "Kcur.Org",
      "publisher": "kcur.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Dinah Sykes's generated v2 profile."
      ]
    },
    {
      "id": "s-28",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/03/08/kansas-democrats-in-u-s-senate-campaign-focus-on-defeating-gop-incumbent/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Dinah Sykes's generated v2 profile."
      ]
    },
    {
      "id": "s-29",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/03/23/democratic-candidate-in-u-s-senate-race-opens-arms-to-kansas-republicans-lost-in-the-wilderness/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Dinah Sykes's generated v2 profile."
      ]
    },
    {
      "id": "s-30",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/03/16/kansas-city-entrepreneur-prioritizes-passion-decency-in-campaign-for-u-s-senate/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Dinah Sykes's generated v2 profile."
      ]
    },
    {
      "id": "s-31",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/08/25/democratic-immigration-lawyer-wants-to-fix-broken-system-with-run-for-u-s-senate-in-kansas/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Dinah Sykes's generated v2 profile."
      ]
    },
    {
      "id": "s-32",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/08/18/democratic-u-s-senate-candidate-eager-to-broaden-kansas-voice-in-d-c-politics/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Dinah Sykes's generated v2 profile."
      ]
    },
    {
      "id": "s-33",
      "tier": "secondary",
      "url": "https://kansasreflector.com/briefs/kansas-senate-minority-leader-challenges-gop-house-speaker-for-state-insurance-commissioner/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Dinah Sykes's generated v2 profile."
      ]
    },
    {
      "id": "s-34",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/03/22/kansas-house-speaker-desperately-maneuvers-to-sabotage-vote-on-senate-bill-capping-drug-costs/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Dinah Sykes's generated v2 profile."
      ]
    },
    {
      "id": "s-35",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/05/13/kansas-house-speaker-launches-campaign-for-insurance-commissioner-with-pro-trump-rhetoric-1/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Dinah Sykes's generated v2 profile."
      ]
    },
    {
      "id": "s-36",
      "tier": "secondary",
      "url": "https://kansasreflector.com/briefs/kansas-democrat-launches-u-s-senate-campaign-criticizes-gop-incumbent-marshall/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Dinah Sykes's generated v2 profile."
      ]
    },
    {
      "id": "s-37",
      "tier": "secondary",
      "url": "https://heartlandsignal.com/2026/03/26/kansas-republicans-defy-house-speaker-dan-hawkins-and-pass-prescription-drug-consumer-protections-bill/",
      "title": "Heartlandsignal.Com",
      "publisher": "heartlandsignal.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Dinah Sykes's generated v2 profile."
      ]
    },
    {
      "id": "s-38",
      "tier": "secondary",
      "url": "https://www.kmuw.org/government/2026-03-26/kansas-house-passes-bill-providing-stricter-regulation-of-prescription-drug-middlemen",
      "title": "Kmuw.Org",
      "publisher": "kmuw.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Dinah Sykes's generated v2 profile."
      ]
    },
    {
      "id": "s-39",
      "tier": "primary",
      "url": "https://www.fec.gov/data/elections/senate/KS/2026/",
      "title": "Fec.Gov",
      "publisher": "fec.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Dinah Sykes's generated v2 profile."
      ]
    },
    {
      "id": "s-40",
      "tier": "primary",
      "url": "https://www.fec.gov/data/candidate/S0KS00315/",
      "title": "Fec.Gov",
      "publisher": "fec.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Dinah Sykes's generated v2 profile."
      ]
    },
    {
      "id": "s-41",
      "tier": "secondary",
      "url": "https://ballotpedia.org/United_States_Senate_election_in_Kansas,_2026",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Dinah Sykes's generated v2 profile."
      ]
    },
    {
      "id": "s-42",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas_Insurance_Commissioner_election,_2026",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Dinah Sykes's generated v2 profile."
      ]
    },
    {
      "id": "s-43",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Daniel_Hawkins_(Kansas",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Dinah Sykes's generated v2 profile."
      ]
    },
    {
      "id": "s-44",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Dinah_Sykes",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Dinah Sykes's generated v2 profile."
      ]
    },
    {
      "id": "s-45",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Patrick_Schmidt",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Dinah Sykes's generated v2 profile."
      ]
    },
    {
      "id": "s-46",
      "tier": "secondary",
      "url": "https://en.wikipedia.org/wiki/2026_United_States_Senate_election_in_Kansas",
      "title": "En.Wikipedia.Org",
      "publisher": "en.wikipedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Dinah Sykes's generated v2 profile."
      ]
    },
    {
      "id": "s-47",
      "tier": "secondary",
      "url": "https://www.cookpolitical.com/senate/race/488581",
      "title": "Cookpolitical.Com",
      "publisher": "cookpolitical.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Dinah Sykes's generated v2 profile."
      ]
    },
    {
      "id": "s-48",
      "tier": "secondary",
      "url": "https://smartpolitics.lib.umn.edu/2025/03/05/how-well-can-democrats-fare-in-kansas-2026-us-senate-election/",
      "title": "Smartpolitics.Lib.Umn.Edu",
      "publisher": "smartpolitics.lib.umn.edu",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Dinah Sykes's generated v2 profile."
      ]
    },
    {
      "id": "s-49",
      "tier": "secondary",
      "url": "https://sunflowerstatejournal.com/hawkins-reveals-campaign-fundraising-for-insurance-commissioner/",
      "title": "Sunflowerstatejournal.Com",
      "publisher": "sunflowerstatejournal.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Dinah Sykes's generated v2 profile."
      ]
    },
    {
      "id": "s-50",
      "tier": "secondary",
      "url": "https://www.nrsc.org/press-releases/nrsc-calls-for-investigation-into-four-kansas-democrat-senate-candidates-for-violating-the-law-2026-03-11/",
      "title": "Nrsc.Org",
      "publisher": "nrsc.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Dinah Sykes's generated v2 profile."
      ]
    },
    {
      "id": "s-51",
      "tier": "secondary",
      "url": "https://freebeacon.com/democrats/kansas-senate-candidate-names-his-political-inspiration-a-black-panther-soldier-working-to-destroy-the-american-empire/",
      "title": "Freebeacon.Com",
      "publisher": "freebeacon.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Dinah Sykes's generated v2 profile."
      ]
    },
    {
      "id": "s-52",
      "tier": "secondary",
      "url": "https://www.ksn.com/news/state-regional/kansas-us-senate-candidates-under-scrutiny-over-missing-financial-disclosures/",
      "title": "Ksn.Com",
      "publisher": "ksn.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Dinah Sykes's generated v2 profile."
      ]
    },
    {
      "id": "s-53",
      "tier": "secondary",
      "url": "https://www.cnn.com/2018/12/19/politics/kansas-legislature-republican-democrat/index.html",
      "title": "Cnn.Com",
      "publisher": "cnn.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Dinah Sykes's generated v2 profile."
      ]
    },
    {
      "id": "s-54",
      "tier": "secondary",
      "url": "https://www.kcur.org/politics-elections-and-government/2018-12-19/more-kansas-legislative-republicans-jump-ship-become-democrats",
      "title": "Kcur.Org",
      "publisher": "kcur.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Dinah Sykes's generated v2 profile."
      ]
    },
    {
      "id": "s-55",
      "tier": "secondary",
      "url": "https://www.salon.com/2018/12/21/three-kansas-republicans-switch-parties-in-one-week-more-defections-expected/",
      "title": "Salon.Com",
      "publisher": "salon.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Dinah Sykes's generated v2 profile."
      ]
    },
    {
      "id": "s-56",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li/b2025_26/members/sen_schmidt_patrick_1/",
      "title": "Kslegislature.Gov",
      "publisher": "kslegislature.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Dinah Sykes's generated v2 profile."
      ]
    },
    {
      "id": "s-57",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas_Elections_for_Supreme_Court_Justices_Amendment_(August_2026",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Dinah Sykes's generated v2 profile."
      ]
    },
    {
      "id": "s-58",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/08/07/rivals-launch-fight-over-kansas-constitutional-amendment-to-elect-supreme-court-justices/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Dinah Sykes's generated v2 profile."
      ]
    },
    {
      "id": "s-59",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/02/10/kansas-method-of-picking-supreme-court-justices-could-be-improved-but-will-an-amendment-do-that/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Dinah Sykes's generated v2 profile."
      ]
    },
    {
      "id": "s-60",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/03/19/kansas-house-endorses-plan-to-elect-supreme-court-justices-placing-question-on-august-2026-ballot/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Dinah Sykes's generated v2 profile."
      ]
    },
    {
      "id": "s-61",
      "tier": "secondary",
      "url": "https://thebeaconnews.org/stories/2025/03/19/kansas-supreme-court-elections-voters-will-decide-in-2026/",
      "title": "Thebeaconnews.Org",
      "publisher": "thebeaconnews.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Dinah Sykes's generated v2 profile."
      ]
    },
    {
      "id": "s-62",
      "tier": "secondary",
      "url": "https://www.kcur.org/politics-elections-and-government/2026-01-26/kansas-lawmakers-want-to-reveal-more-about-the-people-picking-supreme-court-justices",
      "title": "Kcur.Org",
      "publisher": "kcur.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Dinah Sykes's generated v2 profile."
      ]
    },
    {
      "id": "s-63",
      "tier": "secondary",
      "url": "https://sunflowerstatejournal.com/judicial-amendment-campaign-shapes-up-outside-group-books-nearly-1-million-in-ads/",
      "title": "Sunflowerstatejournal.Com",
      "publisher": "sunflowerstatejournal.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Dinah Sykes's generated v2 profile."
      ]
    },
    {
      "id": "s-64",
      "tier": "secondary",
      "url": "https://www.votenokansas.org/",
      "title": "Votenokansas.Org",
      "publisher": "votenokansas.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Dinah Sykes's generated v2 profile."
      ]
    },
    {
      "id": "s-65",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li/b2025_26/measures/documents/summary_scr_1611_2025",
      "title": "Kslegislature.Gov",
      "publisher": "kslegislature.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Dinah Sykes's generated v2 profile."
      ]
    },
    {
      "id": "s-66",
      "tier": "secondary",
      "url": "https://www.brennancenter.org/our-work/analysis-opinion/wisconsin-supreme-court-race-breaks-spending-record-fueled-out-state",
      "title": "Brennancenter.Org",
      "publisher": "brennancenter.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Dinah Sykes's generated v2 profile."
      ]
    },
    {
      "id": "s-67",
      "tier": "secondary",
      "url": "https://pbswisconsin.org/news-item/billionaires-push-spending-in-the-2025-wisconsin-supreme-court-race-over-the-100-million-mark/",
      "title": "Pbswisconsin.Org",
      "publisher": "pbswisconsin.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Dinah Sykes's generated v2 profile."
      ]
    },
    {
      "id": "s-68",
      "tier": "secondary",
      "url": "https://www.npr.org/2025/04/01/nx-s1-5345862/wisconsin-supreme-court-crawford-schimel-election-results",
      "title": "Npr.Org",
      "publisher": "npr.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Dinah Sykes's generated v2 profile."
      ]
    },
    {
      "id": "s-69",
      "tier": "secondary",
      "url": "https://www.kansasinformationnetwork.com/2026-Kansas-Constitutional-Amendment",
      "title": "Kansasinformationnetwork.Com",
      "publisher": "kansasinformationnetwork.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Dinah Sykes's generated v2 profile."
      ]
    },
    {
      "id": "s-70",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas_Citizenship_Voting_Requirement_Amendment_(2026",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Dinah Sykes's generated v2 profile."
      ]
    },
    {
      "id": "s-71",
      "tier": "secondary",
      "url": "https://news.ballotpedia.org/2025/03/27/kansas-voters-will-decide-on-citizenship-voting-requirement-amendment-in-2026-similar-measures-were-approved-in-eight-states-in-2024/",
      "title": "News.Ballotpedia.Org",
      "publisher": "news.ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Dinah Sykes's generated v2 profile."
      ]
    },
    {
      "id": "s-72",
      "tier": "secondary",
      "url": "https://www.npr.org/2018/06/19/621304260/judge-tosses-kansas-proof-of-citizenship-voter-law-and-rebukes-sec-of-state-koba",
      "title": "Npr.Org",
      "publisher": "npr.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Dinah Sykes's generated v2 profile."
      ]
    },
    {
      "id": "s-73",
      "tier": "secondary",
      "url": "https://www.aclukansas.org/press-releases/resounding-victory-tens-thousands-disenfranchised-kansas-voters-supreme-court-refuses/",
      "title": "Aclukansas.Org",
      "publisher": "aclukansas.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Dinah Sykes's generated v2 profile."
      ]
    },
    {
      "id": "s-74",
      "tier": "secondary",
      "url": "https://www.cnn.com/2024/11/03/politics/noncitizen-voting-ballot-measures-election/index.html",
      "title": "Cnn.Com",
      "publisher": "cnn.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Dinah Sykes's generated v2 profile."
      ]
    },
    {
      "id": "s-75",
      "tier": "secondary",
      "url": "https://www.prismnews.com/news/kansas-proof-of-citizenship-voting-law-blocked-31000",
      "title": "Prismnews.Com",
      "publisher": "prismnews.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Dinah Sykes's generated v2 profile."
      ]
    },
    {
      "id": "s-76",
      "tier": "secondary",
      "url": "https://www.pbs.org/newshour/nation/kansas-hopes-to-resurrect-proof-of-citizenship-voting-law",
      "title": "Pbs.Org",
      "publisher": "pbs.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Dinah Sykes's generated v2 profile."
      ]
    },
    {
      "id": "s-77",
      "tier": "secondary",
      "url": "https://www.kcur.org/politics-elections-and-government/2025-07-24/kansas-governor-race-2026-election-candidates",
      "title": "Kcur.Org",
      "publisher": "kcur.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Dinah Sykes's generated v2 profile."
      ]
    },
    {
      "id": "s-78",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/01/30/six-kansas-gop-candidates-for-governor-toss-haymakers-in-first-debate-find-unity-on-key-issues/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Dinah Sykes's generated v2 profile."
      ]
    },
    {
      "id": "s-79",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/07/22/kansas-sen-ethan-corson-enters-race-for-democratic-partys-nomination-for-governor/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Dinah Sykes's generated v2 profile."
      ]
    },
    {
      "id": "s-80",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas_gubernatorial_and_lieutenant_gubernatorial_election,_2026",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Dinah Sykes's generated v2 profile."
      ]
    },
    {
      "id": "s-81",
      "tier": "secondary",
      "url": "https://www.kmuw.org/government/2026-03-25/democratic-candidate-in-u-s-senate-race-opens-arms-to-kansas-republicans-lost-in-the-wilderness",
      "title": "Kmuw.Org",
      "publisher": "kmuw.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Dinah Sykes's generated v2 profile."
      ]
    },
    {
      "id": "s-82",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/11/25/kansas-democratic-candidates-for-u-s-senate-sharpen-attack-on-gop-incumbent-roger-marshall/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Dinah Sykes's generated v2 profile."
      ]
    },
    {
      "id": "s-83",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/01/05/lawrence-democrats-take-aim-at-kansas-republicans-congressional-seat/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Dinah Sykes's generated v2 profile."
      ]
    },
    {
      "id": "s-84",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas'_1st_Congressional_District_election,_2026",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Dinah Sykes's generated v2 profile."
      ]
    },
    {
      "id": "s-85",
      "tier": "primary",
      "url": "https://mann.house.gov/",
      "title": "Mann.House.Gov",
      "publisher": "mann.house.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Dinah Sykes's generated v2 profile."
      ]
    },
    {
      "id": "s-86",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/07/30/kansas-election-for-attorney-general-in-2026-may-become-a-repeat-of-2022-showdown/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Dinah Sykes's generated v2 profile."
      ]
    },
    {
      "id": "s-87",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas_Attorney_General_election,_2026",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Dinah Sykes's generated v2 profile."
      ]
    },
    {
      "id": "s-88",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/04/04/leavenworth-house-member-first-republican-to-declare-as-2026-candidate-for-secretary-of-state/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Dinah Sykes's generated v2 profile."
      ]
    },
    {
      "id": "s-89",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas_Secretary_of_State_election,_2026",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Dinah Sykes's generated v2 profile."
      ]
    },
    {
      "id": "s-90",
      "tier": "secondary",
      "url": "https://kspress.com/news/2026/03/27/kansas-legislature-passes-package-of-elections-bills-that-alter-voting-processes",
      "title": "Kspress.Com",
      "publisher": "kspress.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Dinah Sykes's generated v2 profile."
      ]
    },
    {
      "id": "s-91",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li/b2025_26/members/rep_wasinger_barbara_1/",
      "title": "Kslegislature.Gov",
      "publisher": "kslegislature.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Dinah Sykes's generated v2 profile."
      ]
    },
    {
      "id": "s-92",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas_House_of_Representatives_District_111",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Dinah Sykes's generated v2 profile."
      ]
    },
    {
      "id": "s-93",
      "tier": "secondary",
      "url": "https://barbforkansas.com/",
      "title": "Barbforkansas.Com",
      "publisher": "barbforkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Dinah Sykes's generated v2 profile."
      ]
    },
    {
      "id": "s-94",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas_State_Board_of_Education_election,_2026",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Dinah Sykes's generated v2 profile."
      ]
    },
    {
      "id": "s-95",
      "tier": "primary",
      "url": "https://www.ksde.gov/Board/Kansas-State-Board-of-Education/District-5",
      "title": "Ksde.Gov",
      "publisher": "ksde.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Dinah Sykes's generated v2 profile."
      ]
    },
    {
      "id": "s-96",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2024/10/22/kansas-board-of-education-races-could-shift-power-to-conservative-bloc/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Dinah Sykes's generated v2 profile."
      ]
    },
    {
      "id": "s-97",
      "tier": "secondary",
      "url": "https://kansasdems.org/candidates",
      "title": "Kansasdems.Org",
      "publisher": "kansasdems.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Dinah Sykes's generated v2 profile."
      ]
    },
    {
      "id": "s-98",
      "tier": "primary",
      "url": "https://www.kdor.ks.gov/Apps/VoterReg/",
      "title": "Kdor.Ks.Gov",
      "publisher": "kdor.ks.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Dinah Sykes's generated v2 profile."
      ]
    },
    {
      "id": "s-99",
      "tier": "secondary",
      "url": "https://myvoteinfo.voteks.org/",
      "title": "Myvoteinfo.Voteks.Org",
      "publisher": "myvoteinfo.voteks.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Dinah Sykes's generated v2 profile."
      ]
    },
    {
      "id": "s-100",
      "tier": "secondary",
      "url": "https://www.kansasreflector.com/briefs/kansas-senate-minority-leader-challenges-gop-house-speaker-for-state-insurance-commissioner/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Dinah Sykes's generated v2 profile."
      ]
    },
    {
      "id": "s-101",
      "tier": "primary",
      "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/",
      "title": "Kansas.Gov",
      "publisher": "kansas.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Dinah Sykes's generated v2 profile."
      ]
    },
    {
      "id": "s-102",
      "tier": "secondary",
      "url": "https://insurancenewsnet.com/oarticle/sen-sykes-campaigning-for-insurance-commissioner",
      "title": "InsuranceNewsNet - Sykes campaigning",
      "publisher": "Insurancenewsnet.Com",
      "accessed": "2026-03-31",
      "claimsAnchored": [
        "Source carried forward for Dinah Sykes's generated v2 profile."
      ]
    },
    {
      "id": "s-103",
      "tier": "secondary",
      "url": "https://en.wikipedia.org/wiki/Dinah_Sykes",
      "title": "Wikipedia",
      "publisher": "En.Wikipedia.Org",
      "accessed": "2026-03-31",
      "claimsAnchored": [
        "Source carried forward for Dinah Sykes's generated v2 profile."
      ]
    },
    {
      "id": "s-104",
      "tier": "secondary",
      "url": "https://www.kshb.com/news/state/kansas/from-pta-president-to-kansas-senate-a-local-mom-readies-for-her-new-job",
      "title": "KSHB - PTA to Senate",
      "publisher": "Kshb.Com",
      "accessed": "2026-03-31",
      "claimsAnchored": [
        "Source carried forward for Dinah Sykes's generated v2 profile."
      ]
    },
    {
      "id": "s-105",
      "tier": "secondary",
      "url": "https://csgmidwest.org/wp-content/uploads/2025/04/leader-sykes.pdf",
      "title": "CSG Midwest - Profile",
      "publisher": "Csgmidwest.Org",
      "accessed": "2026-03-31",
      "claimsAnchored": [
        "Source carried forward for Dinah Sykes's generated v2 profile."
      ]
    },
    {
      "id": "s-106",
      "tier": "secondary",
      "url": "https://lenexarotary.org/stories/new-member-spotlight-dinah-sykes",
      "title": "Lenexa Rotary - New Member Spotlight",
      "publisher": "Lenexarotary.Org",
      "accessed": "2026-03-31",
      "claimsAnchored": [
        "Source carried forward for Dinah Sykes's generated v2 profile."
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
      "url": "https://johnsoncountypost.com/2023/02/13/capitol-update-sen-dinah-sykes-gop-harmful-193705/",
      "title": "X / Johnsoncountypost",
      "publisher": "Johnsoncountypost",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Marriage & Family / LGBTQ+ Policy.",
        "Her older candidate-attributed writing and indexed posts reinforce a theme of opposing what she calls extremism and overreach. In a February 2023 Capitol Update, she criticized pub"
      ]
    },
    {
      "id": "s-social-crossref-5",
      "tier": "secondary",
      "url": "https://www.kcur.org/podcast/up-to-date/2025-06-17/dinah-sykes-kansas-senate-democrat-hartman-assassination",
      "title": "kcur / Kcur",
      "publisher": "Kcur",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Religious Liberty.",
        "17, 2025: interview after the assassination of Minnesota Rep. Melissa Hortman. Sykes discussed safety concerns, divisiveness, and the need to go after policy rather than people. (s"
      ]
    },
    {
      "id": "s-social-crossref-6",
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
