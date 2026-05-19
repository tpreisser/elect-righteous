/* Auto-normalized with issue-mapped social/online cross-reference signals.
 * To refresh:
 *   node scripts/hydrate-v2-social-signals.mjs
 */

import type { CandidateFullV2 } from "@/data/types-v2";
import { validateCandidateV2 } from "@/data/types-v2";

export const SCOTT_SCHWAB_V2: CandidateFullV2 = {
  "slug": "scott-schwab",
  "name": "Scott Schwab",
  "party": "R",
  "position": "Governor candidate",
  "electionSlug": "kansas-governor-2026",
  "incumbent": false,
  "occupation": "Kansas Secretary of State",
  "religion": "Non-denominational",
  "campaignWebsite": "https://scottschwab.com/",
  "issues": [
    {
      "id": "i-abortion-sanctity-of-life-1",
      "title": "Abortion / Sanctity of Life",
      "stated": {
        "text": "Opposes abortion. Believes personhood begins at implantation. At a GOP debate he said: \"I feel horrible that a young woman can be manipulated to have an abortion, and there's no recourse.\"",
        "sourceIds": [
          "s-1",
          "s-5",
          "s-6",
          "s-7"
        ]
      },
      "actions": [],
      "socialSignals": []
    },
    {
      "id": "i-marriage-family-lgbtq-policy-2",
      "title": "Marriage & Family / LGBTQ+ Policy",
      "stated": {
        "text": "No candidate-controlled statement was found in the reviewed public record for this issue. This page therefore does not infer a position from party label, faith affiliation, follows, likes, comments, or associations.",
        "sourceIds": [
          "s-1",
          "s-5",
          "s-6",
          "s-7"
        ]
      },
      "actions": [],
      "socialSignals": []
    },
    {
      "id": "i-religious-liberty-3",
      "title": "Religious Liberty",
      "stated": {
        "text": "No candidate-controlled statement was found in the reviewed public record for this issue. This page therefore does not infer a position from party label, faith affiliation, follows, likes, comments, or associations.",
        "sourceIds": [
          "s-1",
          "s-5",
          "s-6",
          "s-7"
        ]
      },
      "actions": [],
      "socialSignals": []
    },
    {
      "id": "i-guns-second-amendment-4",
      "title": "Guns / Second Amendment",
      "stated": {
        "text": "Has said \"We will protect our Second Amendment rights\" on his campaign website.",
        "sourceIds": [
          "s-18",
          "s-25",
          "s-26",
          "s-29",
          "s-30",
          "s-43"
        ]
      },
      "actions": [],
      "socialSignals": []
    },
    {
      "id": "i-immigration-border-5",
      "title": "Immigration / Border",
      "stated": {
        "text": "Supports working with the Trump administration to enforce immigration laws and fund public safety.",
        "sourceIds": [
          "s-14",
          "s-32",
          "s-35",
          "s-1",
          "s-5",
          "s-6"
        ]
      },
      "actions": [],
      "socialSignals": []
    },
    {
      "id": "i-school-choice-parental-rights-in-education-6",
      "title": "School Choice / Parental Rights in Education",
      "stated": {
        "text": "No candidate-controlled statement was found in the reviewed public record for this issue. This page therefore does not infer a position from party label, faith affiliation, follows, likes, comments, or associations.",
        "sourceIds": [
          "s-1",
          "s-5",
          "s-6",
          "s-7"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Public web",
          "observation": "Several issue areas were not visible in the accessible material reviewed. The public set did not include captured items centered on Medicaid expansion, rural hospital closures, child care, K-12 school finance, higher education affordability, foster care, housing costs, water policy, Ogallala aquifer policy, veterans services, road and bridge funding, or broadband buildout. The available record is therefore most...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-2"
          ],
          "mappedToIssueId": "i-school-choice-parental-rights-in-education-6"
        }
      ]
    },
    {
      "id": "i-marijuana-drug-policy-7",
      "title": "Marijuana / Drug Policy",
      "stated": {
        "text": "Runs as a Republican. The Kansas Republican Party has not endorsed marijuana legali",
        "sourceIds": [
          "s-32",
          "s-14",
          "s-5",
          "s-8",
          "s-12",
          "s-13"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "kctv5.com",
          "observation": "The reviewed set contains one personal health update rather than a health-policy item. KCTV/WIBW reported Schwab’s March 21, 2025 social-media post on surgery for cancer, quoting him: \"My doctors have confirmed it was found very early, and no further treatment will be required post-surgery. I will make a full recovery.\" (source)",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "i-marijuana-drug-policy-7"
        }
      ]
    }
  ],
  "whoTheyAre": "Scott Schwab is the Kansas secretary of state and a Republican candidate for governor in 2026. He grew up in Great Bend, graduated from Fort Hays State University in 1994, worked in Farm Bureau insurance and medical-equipment sales, and spent years in the Kansas House before moving into statewide office. He represented House District 49 over seven terms, served as speaker pro tempore, and won the secretary of state's office in 2018 and 2022.\n\nSchwab is an established Kansas Republican, but not a fringe figure. His public image is that of an institutional conservative with a business background, a long legislative resume, and direct election-management experience. His personal story also carries a nationally known tragedy: the 2016 death of his son Caleb on the Verruckt waterslide, an event that has shaped the public way Schwab talks about faith, family, and leadership.",
  "recordSummary": "As secretary of state, Schwab has been responsible for Kansas elections, business filings, and state records. He supported voter ID and other election-integrity measures earlier in his legislative career, but he also broke with election conspiracy politics after 2020 and publicly said he had seen no evidence that the presidential election in Kansas was stolen. That made him stand out inside his own party.\n\nHis record is not without controversy. Kansas courts ruled that his office violated the state's open-records law by altering a computer system in a way that made some records harder to obtain. He has also been under pressure from both sides of the election debate, drawing criticism from hard-line skeptics who wanted more fraud claims and from transparency advocates who wanted more openness.\n\nIn the governor's race, Schwab has centered property taxes, state control over elections, and opposition to federal interference. He also entered 2026 while dealing publicly with a lung-cancer diagnosis, which added another personal challenge to a campaign already shaped by grief, faith, and years in the spotlight.",
  "ownWordsNarrative": "_A summary of what Scott Schwab has publicly said, posted, and amplified across social media, campaign channels, and official public records. Drawn from public captures of X, Facebook, Instagram, YouTube, LinkedIn, the campaign site, and Kansas Secretary of State records from January 2025 through May 2026. We report patterns; we do not interpret intent._\n\nAcross the public set reviewed, Schwab’s visible record centers first on election administration and voter-roll maintenance. That category accounts for 5 of the 11 accessible items in the harvest, including the campaign site, office social profiles, and Secretary of State releases. In a Jan. 7, 2026 office release, Schwab said, \"We use a mix of laws, regulations, and internal reforms to deliver better service, protect election integrity, modernize the agency, and run government more efficiently.\" ([source](https://www.sos.ks.gov/media/press-releases/2026/01-07-26-secretary-schwab-outlines-legislative-agenda-centered-on-efficiency-integrity-and-better-service.html))\n\nHis campaign channel presents the governor race through tax costs, rural Kansas, business regulation, public safety, and state authority over elections. The campaign site says, \"As Governor, Scott will continue to fight against federal interference in our state.\" ([source](https://scottschwab.com/)) KCUR’s January 2025 campaign-launch report quoted Schwab saying, \"I believe that to do something great, we have to throw off the chains that hold you back,\" ([source](https://www.kcur.org/politics-elections-and-government/2025-01-08/kansas-governor-race-2026-scott-schwab)) and \"In Kansas, those chains come from big government.\" ([source](https://www.kcur.org/politics-elections-and-government/2025-01-08/kansas-governor-race-2026-scott-schwab))\n\nThe public platform footprint is compact and mostly campaign- or office-directed. The campaign site links Facebook, X, and Instagram. Public Facebook metadata listed 1,759 likes and 63 talking about this on May 11, 2026, and the page description began, \"Kansas has a decision to make: Which path will we take?\" ([source](https://www.facebook.com/SchwabforGovernor)) Public Instagram metadata listed 184 followers, 167 following, and 57 posts on the same capture date, with the bio line, \"2026 Candidate for Kansas Governor\" ([source](https://www.instagram.com/scottschwabks/))\n\nThe X presence separates personal/campaign and office accounts. The @ScottSchwabKS profile metadata described him as, \"Husband. Father. Honored to serve as Kansas' 32nd @kansassos.\" ([source](https://x.com/ScottSchwabKS)) The @KansasSOS profile metadata described the account as, \"Official Twitter account for the Office of Kansas Secretary of State @scottschwabks\" ([source](https://x.com/KansasSOS)) Logged-out capture did not expose a dependable post-level X feed or repost inventory, so no X engagement totals are reported.\n\nThe clearest official-record signal in 2026 is administrative language about voter rolls, business services, regulations, and office modernization. On Apr. 9, 2026, Schwab said, \"This legislation reflects our commitment to maintaining accurate voter rolls while protecting the rights of every eligible Kansas voter for decades to come,\" ([source](https://www.sos.ks.gov/media/press-releases/2026/04-09-26-secretary-schwabs-voter-roll-maintenance-bill-becomes-law-after-veto-override.html)) and \"I appreciate the Kansas Legislature overriding Governor Kelly’s veto.\" ([source](https://www.sos.ks.gov/media/press-releases/2026/04-09-26-secretary-schwabs-voter-roll-maintenance-bill-becomes-law-after-veto-override.html)) In the same January 2026 office release, he said, \"Good government isn’t about how much government does,\" ([source](https://www.sos.ks.gov/media/press-releases/2026/01-07-26-secretary-schwab-outlines-legislative-agenda-centered-on-efficiency-integrity-and-better-service.html)) and \"It’s about making smart, practical improvements that save money and serve Kansans better.\" ([source](https://www.sos.ks.gov/media/press-releases/2026/01-07-26-secretary-schwab-outlines-legislative-agenda-centered-on-efficiency-integrity-and-better-service.html))\n\nThe reviewed set contains one personal health update rather than a health-policy item. KCTV/WIBW reported Schwab’s March 21, 2025 social-media post on surgery for cancer, quoting him: \"My doctors have confirmed it was found very early, and no further treatment will be required post-surgery. I will make a full recovery.\" ([source](https://www.kctv5.com/2025/03/21/ks-secretary-state-announces-cancer-diagnosis/))\n\nSeveral issue areas were not visible in the accessible material reviewed. The public set did not include captured items centered on Medicaid expansion, rural hospital closures, child care, K-12 school finance, higher education affordability, foster care, housing costs, water policy, Ogallala aquifer policy, veterans services, road and bridge funding, or broadband buildout. The available record is therefore most complete on elections, state administration, taxes, rural/economic positioning, and basic campaign identity, and less complete on those absent policy areas.\n\nMethodology: Public capture was conducted on May 11, 2026. Date range covered: Jan. 8, 2025 to May 11, 2026. Platforms surveyed: X, Facebook, Instagram, YouTube, LinkedIn, TikTok, Truth Social, Gab, Gettr, Substack, Reddit, the campaign website, and Kansas Secretary of State public pages. Items examined: 11 accessible original/profile/public-record items and 0 verified reposts. Login-walled or script-blocked material was not counted as reviewed. Engagement was reported only when visible in public metadata on capture date. We report patterns; we do not interpret intent.",
  "whereTheyWorship": "Public sources tie Schwab and his family to LifeMission Church in Olathe. The church website is https://www.lifemission.church/, and the congregation became part of the public record after Caleb Schwab's funeral was held there in 2016.",
  "church": {
    "name": "LifeMission Church, Olathe, KS",
    "denomination": "Non-denominational",
    "url": "https://www.ihm-church.com/",
    "details": "Denomination: Non-denominational. Church Address: 16111 S Lone Elm Rd, Olathe, KS."
  },
  "campaignFinance": {
    "totalRaised": "$1,418,672 (2025 year-end)",
    "narrative": "Schwab's 2025 year-end report showed $1,418,671.56 raised, $365,533.06 spent, and $1,053,138.50 cash on hand. The filing also reported $1,045,000 in personal loans, which means most of the campaign's financial strength came from Schwab himself rather than outside donors. That leaves him well funded, but it also opens him to the same line faced by other self-financed candidates in the 2026 Republican field: real resources, but a money trail dominated by personal wealth rather than a broad donor base.",
    "donors": [
      {
        "name": "Scott Schwab (self-funded loans)",
        "amount": "$1,045,000"
      },
      {
        "name": "Jenni Prochnow",
        "amount": "$4,000"
      },
      {
        "name": "Frankie Giudicessi",
        "amount": "$4,000"
      },
      {
        "name": "Michael Rader",
        "amount": "$2,000"
      },
      {
        "name": "Jeanette Prenger",
        "amount": "$2,000"
      },
      {
        "name": "Julie Mirray",
        "amount": "$2,000"
      },
      {
        "name": "Kent Needham",
        "amount": "$500"
      },
      {
        "name": "Tim Garvey",
        "amount": "$500"
      }
    ],
    "undisclosed": "Full line-item donor detail remains in the Kansas ethics filing PDF and itemized-contributions database.",
    "reportingPeriod": "2025 year-end (2026 election cycle)",
    "source": "Kansas ethics filing SW01SS_202601 and Kansas Reflector"
  },
  "socialResearchNote": "Social research is included as observed public behavior, not as a proxy for belief. Platforms/sources checked: X, Facebook, Instagram, YouTube, LinkedIn, TikTok, Truth Social, Gab, Gettr, Substack, Reddit, Campaign website, Kansas Secretary of State public pages. Harvest range: 2025-01-08 through 2026-05-11.",
  "sources": [
    {
      "id": "s-1",
      "tier": "secondary",
      "url": "https://scottschwab.com/",
      "title": "source",
      "publisher": "Scottschwab",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Scott Schwab."
      ]
    },
    {
      "id": "s-2",
      "tier": "social",
      "url": "https://www.facebook.com/SchwabforGovernor",
      "title": "source",
      "publisher": "Facebook",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Scott Schwab."
      ]
    },
    {
      "id": "s-5",
      "tier": "secondary",
      "url": "https://www.kcur.org/politics-elections-and-government/2025-01-08/kansas-governor-race-2026-scott-schwab",
      "title": "source",
      "publisher": "Kcur",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Scott Schwab."
      ]
    },
    {
      "id": "s-6",
      "tier": "primary",
      "url": "https://www.sos.ks.gov/media/press-releases/2026/01-07-26-secretary-schwab-outlines-legislative-agenda-centered-on-efficiency-integrity-and-better-service.html",
      "title": "source",
      "publisher": "Sos.Ks",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Scott Schwab."
      ]
    },
    {
      "id": "s-7",
      "tier": "primary",
      "url": "https://www.sos.ks.gov/media/press-releases/2026/04-09-26-secretary-schwabs-voter-roll-maintenance-bill-becomes-law-after-veto-override.html",
      "title": "source",
      "publisher": "Sos.Ks",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Scott Schwab."
      ]
    },
    {
      "id": "s-8",
      "tier": "primary",
      "url": "https://www.sos.ks.gov/about/schwab-biography.html",
      "title": "Kansas SOS biography",
      "publisher": "Sos.Ks",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Scott Schwab."
      ]
    },
    {
      "id": "s-12",
      "tier": "secondary",
      "url": "https://heavy.com/news/2016/08/scott-schwab-michele-caleb-rep-parents-father-dad-mother-mom-family-verruckt-water-slide-kansas-schlitterbahn-photos-death-accident/",
      "title": "Heavy.com: Scott & Michele Schwab, Caleb's Parents",
      "publisher": "Heavy",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Scott Schwab."
      ]
    },
    {
      "id": "s-13",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/01/09/latest-kansas-campaign-finance-reports-schwab-takes-in-1-3m-corson-receives-900k/",
      "title": "Kansas Reflector: Campaign finance reports (Jan 9, 2026)",
      "publisher": "Kansasreflector",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Scott Schwab."
      ]
    },
    {
      "id": "s-14",
      "tier": "secondary",
      "url": "https://sunflowerstatejournal.com/colyer-schwab-most-recognized-republicans-in-gubernatorial-field-survey-shows/",
      "title": "Sunflower State Journal - Colyer, Schwab most recognized",
      "publisher": "Sunflowerstatejournal",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Scott Schwab."
      ]
    },
    {
      "id": "s-18",
      "tier": "secondary",
      "url": "https://justfacts.votesmart.org/candidate/key-votes/34505/scott-schwab",
      "title": "Key Votes page",
      "publisher": "Justfacts.Votesmart",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Scott Schwab."
      ]
    },
    {
      "id": "s-25",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/01/08/scott-schwab-runs-for-kansas-governor-after-two-terms-as-states-top-election-official/",
      "title": "Kansas Reflector: Schwab runs for governor",
      "publisher": "Kansasreflector",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Scott Schwab."
      ]
    },
    {
      "id": "s-26",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/06/02/kansas-governor-candidate-scott-schwab-certain-voting-secure-eager-to-cut-property-taxes/",
      "title": "Kansas Reflector: Schwab certain voting secure, eager to cut property taxes",
      "publisher": "Kansasreflector",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Scott Schwab."
      ]
    },
    {
      "id": "s-29",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2022/07/22/kansas-appeals-court-says-secretary-of-state-violated-open-records-law-by-altering-computer-system/",
      "title": "Kansas Reflector: Appeals court says Schwab violated open records law",
      "publisher": "Kansasreflector",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Scott Schwab."
      ]
    },
    {
      "id": "s-30",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2022/08/01/kansas-secretary-of-state-refuses-to-provide-provisional-ballot-records-despite-court-ruling/",
      "title": "Kansas Reflector: Schwab refuses to provide records despite court ruling",
      "publisher": "Kansasreflector",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Scott Schwab."
      ]
    },
    {
      "id": "s-32",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2020/11/09/as-other-republicans-lied-about-voter-fraud-kansas-secretary-of-state-was-a-voice-of-sanity/",
      "title": "Kansas Reflector: As other Republicans lied about voter fraud, Schwab was a voice of sanity",
      "publisher": "Kansasreflector",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Scott Schwab."
      ]
    },
    {
      "id": "s-35",
      "tier": "secondary",
      "url": "https://www.kcur.org/politics-elections-and-government/2025-10-26/president-trump-kansas-secretary-of-state-scott-schwab",
      "title": "KCUR: Trump praises Kansas secretary of state",
      "publisher": "Kcur",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Scott Schwab."
      ]
    },
    {
      "id": "s-43",
      "tier": "secondary",
      "url": "https://law.justia.com/cases/kansas/supreme-court/2023/124378.html",
      "title": "Kansas Supreme Court: LWV v. Schwab (2023)",
      "publisher": "Law.Justia",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Scott Schwab."
      ]
    },
    {
      "id": "s-social-crossref-1",
      "tier": "secondary",
      "url": "https://www.kctv5.com/2025/03/21/ks-secretary-state-announces-cancer-diagnosis/",
      "title": "kctv5.com / Kctv5",
      "publisher": "Kctv5",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Marijuana / Drug Policy.",
        "The reviewed set contains one personal health update rather than a health-policy item. KCTV/WIBW reported Schwab’s March 21, 2025 social-media post on surgery for cancer, quoting h"
      ]
    }
  ]
};

if (process.env.NODE_ENV !== "production") {
  const result = validateCandidateV2(SCOTT_SCHWAB_V2);
  if (!result.ok) {
    // eslint-disable-next-line no-console
    console.error(
      "[scott-schwab.ts] validateCandidateV2 FAILED:\n" +
        result.errors.join("\n"),
    );
  }
}
