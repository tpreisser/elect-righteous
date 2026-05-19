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
          "s-2",
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
          "s-15",
          "s-51",
          "s-60",
          "s-63",
          "s-85",
          "s-91"
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
          "s-15",
          "s-51",
          "s-59",
          "s-64",
          "s-85",
          "s-91"
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
          "s-64",
          "s-85",
          "s-110",
          "s-111",
          "s-120",
          "s-142"
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
          "s-193",
          "s-201",
          "s-208",
          "s-307",
          "s-344",
          "s-1"
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
          "s-44",
          "s-51",
          "s-85",
          "s-91",
          "s-92",
          "s-93"
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
            "s-3"
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
          "s-6",
          "s-7",
          "s-20",
          "s-30",
          "s-52",
          "s-53"
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
      "title": "Scottschwab.Com",
      "publisher": "scottschwab.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-2",
      "tier": "primary",
      "url": "https://www.sos.ks.gov/about/schwab-biography.html",
      "title": "Sos.Ks.Gov",
      "publisher": "sos.ks.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-3",
      "tier": "social",
      "url": "https://www.facebook.com/SchwabforGovernor",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-4",
      "tier": "social",
      "url": "https://www.instagram.com/scottschwabks",
      "title": "Instagram.Com",
      "publisher": "instagram.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-5",
      "tier": "social",
      "url": "https://x.com/ScottSchwabKS",
      "title": "X.Com",
      "publisher": "x.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-6",
      "tier": "primary",
      "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/202601/SW01SS_202601.pdf",
      "title": "Kansas.Gov",
      "publisher": "kansas.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-7",
      "tier": "primary",
      "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/SWLinks2026EC.htm",
      "title": "Kansas.Gov",
      "publisher": "kansas.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-8",
      "tier": "secondary",
      "url": "https://www.hfehays.org/o/hfe/article/923439",
      "title": "Hfehays.Org",
      "publisher": "hfehays.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-9",
      "tier": "secondary",
      "url": "https://www.ihm-church.com/",
      "title": "Ihm-church.Com",
      "publisher": "ihm-church.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-10",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/5c04aec5-5ab3-413c-8844-d90e91aa0d31",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-11",
      "tier": "secondary",
      "url": "https://tigermedianet.com/?p=75270",
      "title": "Tigermedianet.Com",
      "publisher": "tigermedianet.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-12",
      "tier": "primary",
      "url": "https://haysusa.com/273/Shaun-Musil",
      "title": "Haysusa.Com",
      "publisher": "haysusa.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-13",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/49060a66-e8fc-4755-a296-382a14c00a3d",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-14",
      "tier": "primary",
      "url": "https://haysusa.com/270/Sandy-Jacobs",
      "title": "Haysusa.Com",
      "publisher": "haysusa.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-15",
      "tier": "secondary",
      "url": "https://heartlandcommunityfoundation.org/",
      "title": "Heartlandcommunityfoundation.Org",
      "publisher": "heartlandcommunityfoundation.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-16",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/5e243ec1-847a-40f8-a7dd-665ffe2f85de",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-17",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/a0f7dc0e-e11c-483b-95ef-cbd4ad3ac930",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-18",
      "tier": "primary",
      "url": "https://www.haysusa.com/149/City-Managers-Office",
      "title": "Haysusa.Com",
      "publisher": "haysusa.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-19",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/cc4157ce-3ec5-4765-b6c7-84923c7cee55",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-20",
      "tier": "secondary",
      "url": "https://www.kansassheriffs.org/county_map/county/914",
      "title": "Kansassheriffs.Org",
      "publisher": "kansassheriffs.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-21",
      "tier": "secondary",
      "url": "https://archive.hayspost.com/2019/10/31/undersheriff-braun-announces-run-for-ellis-county-sheriff-in-2020/",
      "title": "Archive.Hayspost.Com",
      "publisher": "archive.hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-22",
      "tier": "secondary",
      "url": "https://salinadiocese.org/parish/st-nicholas-of-myra-parish-hays/",
      "title": "Salinadiocese.Org",
      "publisher": "salinadiocese.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-23",
      "tier": "secondary",
      "url": "https://about.me/aaron.cunningham",
      "title": "About.Me",
      "publisher": "about.me",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-24",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/7ccb3a8f-a8c6-4baa-9767-cf155c00f4a1",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-25",
      "tier": "secondary",
      "url": "https://hayshighguidon.com/news/2019/10/26/assistant-ellis-county-attorney-aaron-cunningham-speaks-to-students-about-career-in-law/",
      "title": "Hayshighguidon.Com",
      "publisher": "hayshighguidon.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-26",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/08825e68-f663-4a03-96f4-0b2c6f0b4ec7",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-27",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/8400acf8-32ea-486a-b087-8423d8f728e0",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-28",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/70a84c66-2d84-4023-b4bb-df360cbe90dd",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-29",
      "tier": "secondary",
      "url": "https://www.haysmemorial.com/obituary/Marilyn-KlausLeiker/",
      "title": "Haysmemorial.Com",
      "publisher": "haysmemorial.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-30",
      "tier": "secondary",
      "url": "https://fhsuguides.fhsu.edu/kansasheritage/elliscounty",
      "title": "Fhsuguides.Fhsu.Edu",
      "publisher": "fhsuguides.fhsu.edu",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-31",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/46c0cb3c-bd1a-435f-9d5a-598963fe942a",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-32",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/a828fae7-451a-45b3-aed9-e12596bf13f4",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-33",
      "tier": "primary",
      "url": "https://www.ellisco.net/100/Register-of-Deeds",
      "title": "Ellisco.Net",
      "publisher": "ellisco.net",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-34",
      "tier": "secondary",
      "url": "https://ksrods.com/contact-information/ellis-county-el-nc-district/",
      "title": "Ksrods.Com",
      "publisher": "ksrods.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-35",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/635f478c-4649-44c1-80d8-631bc0897878",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-36",
      "tier": "secondary",
      "url": "https://salinadiocese.org/parish/our-lady-help-of-christians-parish-antonino/",
      "title": "Salinadiocese.Org",
      "publisher": "salinadiocese.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-37",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/e153a0fc-fe06-4de4-b5c7-d6f0d57fa59b",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-38",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/4f225559-3a1c-4499-af0d-d0c7affa85a1",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-39",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/2613aaa8-8055-4feb-9a79-d1b5479babca",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-40",
      "tier": "secondary",
      "url": "https://www.haysmed.com/provider/derek-m-yarmer-md/",
      "title": "Haysmed.Com",
      "publisher": "haysmed.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-41",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/7acb9e0e-4c56-4e6f-a618-4312a49cd922",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-42",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/8c99812c-9463-4172-9aef-4df43a05b5d9",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-43",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/66f0b3ef-9525-40e2-a3f2-f74e9deebb43",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-44",
      "tier": "secondary",
      "url": "https://hayshighguidon.com/news/2019/02/13/school-board-votes-approves-ron-wilson-as-new-superintendent/",
      "title": "Hayshighguidon.Com",
      "publisher": "hayshighguidon.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-45",
      "tier": "secondary",
      "url": "https://en.wikipedia.org/wiki/Tracey_Mann",
      "title": "En.Wikipedia.Org",
      "publisher": "en.wikipedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-46",
      "tier": "secondary",
      "url": "https://ksopen.org/mann-2",
      "title": "Ksopen.Org",
      "publisher": "ksopen.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-47",
      "tier": "primary",
      "url": "https://mann.house.gov/about",
      "title": "Mann.House.Gov",
      "publisher": "mann.house.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-48",
      "tier": "secondary",
      "url": "https://www.au.org/the-latest/church-and-state/articles/unhealthy-breakfast-how-the-national-prayer-breakfast-a-relic-from-the-1950s-era-of-civil-religion-evolved-into-a-florid-display-of-christian-nationalism/",
      "title": "Au.Org",
      "publisher": "au.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-49",
      "tier": "secondary",
      "url": "https://kansansformarshall.com/meet-doc/",
      "title": "Kansansformarshall.Com",
      "publisher": "kansansformarshall.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-50",
      "tier": "secondary",
      "url": "https://ksopen.org/marshall",
      "title": "Ksopen.Org",
      "publisher": "ksopen.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-51",
      "tier": "secondary",
      "url": "https://justfacts.votesmart.org/candidate/biography/172080/roger-marshall",
      "title": "Justfacts.Votesmart.Org",
      "publisher": "justfacts.votesmart.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-52",
      "tier": "secondary",
      "url": "https://kansasdisciples.org/property/great-bend-first-christian-church/",
      "title": "Kansasdisciples.Org",
      "publisher": "kansasdisciples.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-53",
      "tier": "secondary",
      "url": "https://barbforkansas.com/about/",
      "title": "Barbforkansas.Com",
      "publisher": "barbforkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-54",
      "tier": "secondary",
      "url": "https://barbwasinger.com/",
      "title": "Barbwasinger.Com",
      "publisher": "barbwasinger.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-55",
      "tier": "secondary",
      "url": "https://www.ksn.com/news/your-local-election-hq/election-guide-barbara-k-wasinger-r-kansas-house-district-111/",
      "title": "Ksn.Com",
      "publisher": "ksn.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-56",
      "tier": "secondary",
      "url": "https://whatreligionisinfo.com/kobach-religion/",
      "title": "Whatreligionisinfo.Com",
      "publisher": "whatreligionisinfo.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-57",
      "tier": "secondary",
      "url": "https://msclawrence.com/",
      "title": "Msclawrence.Com",
      "publisher": "msclawrence.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-58",
      "tier": "secondary",
      "url": "https://sunflowerstatejournal.com/kobach-denounces-vandalism-at-his-church/",
      "title": "Sunflowerstatejournal.Com",
      "publisher": "sunflowerstatejournal.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-59",
      "tier": "secondary",
      "url": "https://www.kcur.org/government/2017-08-22/kansas-trial-investigates-religious-discrimination-claim-in-kobachs-office",
      "title": "Kcur.Org",
      "publisher": "kcur.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-60",
      "tier": "secondary",
      "url": "https://www.christianpost.com/news/caleb-schwab-10-attended-church-with-family-hours-before-death-verruckt-schlitterbahn-water-park.html",
      "title": "Christianpost.Com",
      "publisher": "christianpost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-61",
      "tier": "secondary",
      "url": "https://fox4kc.com/news/at-funeral-for-his-son-caleb-schwabs-dad-tells-stories-that-show-calebs-love-and-humor/",
      "title": "Fox4kc.Com",
      "publisher": "fox4kc.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-62",
      "tier": "secondary",
      "url": "https://www.lifemission.church/",
      "title": "Lifemission.Church",
      "publisher": "lifemission.church",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-63",
      "tier": "secondary",
      "url": "https://heavy.com/news/2016/08/scott-schwab-michele-caleb-rep-parents-father-dad-mother-mom-family-verruckt-water-slide-kansas-schlitterbahn-photos-death-accident/",
      "title": "Heavy.Com",
      "publisher": "heavy.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-64",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/07/09/kansas-insurance-commissioner-vicki-schmidt-initiates-republican-campaign-for-governor/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-65",
      "tier": "secondary",
      "url": "https://vickiforgovernor.com/",
      "title": "Vickiforgovernor.Com",
      "publisher": "vickiforgovernor.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-66",
      "tier": "secondary",
      "url": "https://www.mastersonforgovernor.com/services",
      "title": "Mastersonforgovernor.Com",
      "publisher": "mastersonforgovernor.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-67",
      "tier": "secondary",
      "url": "https://csgmidwest.org/wp-content/uploads/2022/07/sen-masterson.pdf",
      "title": "Csgmidwest.Org",
      "publisher": "csgmidwest.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-68",
      "tier": "secondary",
      "url": "https://www.newspring.org/",
      "title": "Newspring.Org",
      "publisher": "newspring.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-69",
      "tier": "secondary",
      "url": "https://combatantisemitism.org/interview/its-important-to-understand-the-truth-and-spread-it-kansas-senate-president-ty-masterson-reflects-on-state-lawmakers-delegation-visit-to-israel/",
      "title": "Combatantisemitism.Org",
      "publisher": "combatantisemitism.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-70",
      "tier": "secondary",
      "url": "https://en.wikipedia.org/wiki/Jeff_Colyer",
      "title": "En.Wikipedia.Org",
      "publisher": "en.wikipedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-71",
      "tier": "primary",
      "url": "https://www.kansashistory.gov/kansapedia/jeff-colyer/20011",
      "title": "Kansashistory.Gov",
      "publisher": "kansashistory.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-72",
      "tier": "secondary",
      "url": "https://www.kshb.com/news/local-news/former-kansas-governor-volunteers-on-medical-mission-in-ukraine",
      "title": "Kshb.Com",
      "publisher": "kshb.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-73",
      "tier": "secondary",
      "url": "https://www.jeffcolyer.com/index.html",
      "title": "Jeffcolyer.Com",
      "publisher": "jeffcolyer.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-74",
      "tier": "secondary",
      "url": "https://ethanforkansas.com/",
      "title": "Ethanforkansas.Com",
      "publisher": "ethanforkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-75",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/07/22/kansas-sen-ethan-corson-enters-race-for-democratic-partys-nomination-for-governor/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-76",
      "tier": "secondary",
      "url": "https://en.wikipedia.org/wiki/Cindy_Holscher",
      "title": "En.Wikipedia.Org",
      "publisher": "en.wikipedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-77",
      "tier": "secondary",
      "url": "https://cindyforkansas.com/about/",
      "title": "Cindyforkansas.Com",
      "publisher": "cindyforkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-78",
      "tier": "secondary",
      "url": "https://ethanforkansas.com",
      "title": "Ethanforkansas.Com",
      "publisher": "ethanforkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-79",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/03/08/democrats-in-governors-race-use-debate-stage-to-spotlight-affordability-health-care-rural-kansas/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-80",
      "tier": "social",
      "url": "https://www.facebook.com/ethanforkansas",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-81",
      "tier": "social",
      "url": "https://www.instagram.com/ethanforkansas/",
      "title": "Instagram.Com",
      "publisher": "instagram.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-82",
      "tier": "social",
      "url": "https://www.linkedin.com/in/ethancorson/",
      "title": "Linkedin.Com",
      "publisher": "linkedin.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-83",
      "tier": "secondary",
      "url": "https://cindyforkansas.com",
      "title": "Cindyforkansas.Com",
      "publisher": "cindyforkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-84",
      "tier": "secondary",
      "url": "https://johnsoncountypost.com/2023/03/13/capitol-update-sen-cindy-holscher-voucher-bill-196217/",
      "title": "Johnsoncountypost.Com",
      "publisher": "johnsoncountypost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-85",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/08/01/kansas-governor-candidate-cindy-holscher-objects-to-alleged-pressure-campaign-by-kellys-staff/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-86",
      "tier": "social",
      "url": "https://www.facebook.com/cindyforkansas/",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-87",
      "tier": "secondary",
      "url": "https://www.cindyforsenateks.com/",
      "title": "Cindyforsenateks.Com",
      "publisher": "cindyforsenateks.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-88",
      "tier": "secondary",
      "url": "https://www.tuley4gov2026.com",
      "title": "Tuley4gov2026.Com",
      "publisher": "tuley4gov2026.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-89",
      "tier": "secondary",
      "url": "https://www.wibw.com/2025/07/28/democrat-marty-tuley-announces-candidacy-2026-kansas-governor/",
      "title": "Wibw.Com",
      "publisher": "wibw.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-90",
      "tier": "secondary",
      "url": "https://oharaforkansas.com",
      "title": "Oharaforkansas.Com",
      "publisher": "oharaforkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-91",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/11/28/its-an-honesty-dozens-of-columns-voice-the-politics-of-one-candidate-for-kansas-governor/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-92",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/02/16/kansas-gop-candidate-for-governor-says-state-needs-a-true-conservative/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-93",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/01/30/six-kansas-gop-candidates-for-governor-toss-haymakers-in-first-debate-find-unity-on-key-issues/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-94",
      "tier": "social",
      "url": "https://www.facebook.com/oharaforjoco/",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-95",
      "tier": "secondary",
      "url": "https://stacyrogersforks.com",
      "title": "Stacyrogersforks.Com",
      "publisher": "stacyrogersforks.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-96",
      "tier": "social",
      "url": "https://www.facebook.com/StacyHepnerRogers/",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-97",
      "tier": "social",
      "url": "https://www.linkedin.com/in/stacy-rogers-for-kansas/",
      "title": "Linkedin.Com",
      "publisher": "linkedin.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-98",
      "tier": "secondary",
      "url": "https://www.kansascomeback.com",
      "title": "Kansascomeback.Com",
      "publisher": "kansascomeback.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-99",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/01/19/millionaire-candidates-for-kansas-governor-burnish-fundraising-with-personal-loans/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-100",
      "tier": "secondary",
      "url": "https://www.ksn.com/news/your-local-election-hq/joy-eakins-announces-bid-for-kansas-governor/",
      "title": "Ksn.Com",
      "publisher": "ksn.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-101",
      "tier": "social",
      "url": "https://www.facebook.com/JoyforKS/",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-102",
      "tier": "social",
      "url": "https://x.com/JoyforKS",
      "title": "X.Com",
      "publisher": "x.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-103",
      "tier": "social",
      "url": "https://www.linkedin.com/in/joyeakins/",
      "title": "Linkedin.Com",
      "publisher": "linkedin.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-104",
      "tier": "secondary",
      "url": "https://philipsarnecki.org",
      "title": "Philipsarnecki.Org",
      "publisher": "philipsarnecki.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-105",
      "tier": "social",
      "url": "https://www.facebook.com/p/Philip-Sarnecki-For-Governor-61579950041528/",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-106",
      "tier": "social",
      "url": "https://www.linkedin.com/in/philipsarnecki/",
      "title": "Linkedin.Com",
      "publisher": "linkedin.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-107",
      "tier": "secondary",
      "url": "https://www.imdb.com/name/nm3671154/",
      "title": "Imdb.Com",
      "publisher": "imdb.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-108",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/11/17/gov-laura-kelly-offers-formal-endorsement-of-democratic-sen-ethan-corson-for-governor/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-109",
      "tier": "secondary",
      "url": "https://kansasreflector.com/briefs/former-kansas-gov-kathleen-sebelius-endorses-sen-ethan-corson-in-democratic-race-for-governor/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-110",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/01/09/latest-kansas-campaign-finance-reports-schwab-takes-in-1-3m-corson-receives-900k/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-111",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/11/25/kansas-democratic-candidates-for-governor-shaping-2026-campaigns-to-entice-rural-voters/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-112",
      "tier": "secondary",
      "url": "https://www.kcjc.com/index.php/current-news/latest-news/5736-ethan-corson-announces-candidacy-for-kansas-senate-district-7",
      "title": "Kcjc.Com",
      "publisher": "kcjc.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-113",
      "tier": "secondary",
      "url": "https://en.wikipedia.org/wiki/Ethan_Corson",
      "title": "En.Wikipedia.Org",
      "publisher": "en.wikipedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-114",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Ethan_Corson",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-115",
      "tier": "secondary",
      "url": "https://www.kssenatedems.org/ethan-corson",
      "title": "Kssenatedems.Org",
      "publisher": "kssenatedems.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-116",
      "tier": "secondary",
      "url": "https://doleinstitute.org/about/fellows/ethan-corson/",
      "title": "Doleinstitute.Org",
      "publisher": "doleinstitute.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-117",
      "tier": "secondary",
      "url": "https://johnsoncountypost.com/2025/07/22/ethan-corson-governor-264717/",
      "title": "Johnsoncountypost.Com",
      "publisher": "johnsoncountypost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-118",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li/b2025_26/members/sen_corson_ethan_1/",
      "title": "Kslegislature.Gov",
      "publisher": "kslegislature.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-119",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/06/12/democrat-steps-forward-in-race-for-kansas-governor-focuses-on-schools-and-kitchen-table-issues/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-120",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/10/06/kansas-senator-leans-into-bipartisan-allure-in-campaign-for-kansas-governor/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-121",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Cindy_Holscher",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-122",
      "tier": "secondary",
      "url": "https://cindyforkansas.com/endorsements/",
      "title": "Cindyforkansas.Com",
      "publisher": "cindyforkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-123",
      "tier": "secondary",
      "url": "https://www.amazon.com/Get-Off-Your-Ass-Definitive/dp/1591201292",
      "title": "Amazon.Com",
      "publisher": "amazon.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-124",
      "tier": "secondary",
      "url": "https://www.amazon.com/Busting-Your-Butt-Gut-Minimizing/dp/1591202086",
      "title": "Amazon.Com",
      "publisher": "amazon.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-125",
      "tier": "secondary",
      "url": "https://www.readhowyouwant.com/authors/details/Marty-Tuley/6407",
      "title": "Readhowyouwant.Com",
      "publisher": "readhowyouwant.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-126",
      "tier": "secondary",
      "url": "https://www2.ljworld.com/news/2003/mar/27/legal_battles_weigh/",
      "title": "Www2.Ljworld.Com",
      "publisher": "www2.ljworld.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-127",
      "tier": "secondary",
      "url": "https://openpowerlifting.org/u/martytuley",
      "title": "Openpowerlifting.Org",
      "publisher": "openpowerlifting.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-128",
      "tier": "secondary",
      "url": "https://johnsoncountypost.com/2025/03/10/charlotte-ohara-kansas-governor-bid-254803/",
      "title": "Johnsoncountypost.Com",
      "publisher": "johnsoncountypost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-129",
      "tier": "secondary",
      "url": "https://johnsoncountypost.com/2024/11/05/county-commission-races-2024-general-246243/",
      "title": "Johnsoncountypost.Com",
      "publisher": "johnsoncountypost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-130",
      "tier": "secondary",
      "url": "https://en.wikipedia.org/wiki/Charlotte_O'Hara",
      "title": "En.Wikipedia.Org",
      "publisher": "en.wikipedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-131",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Charlotte_O'Hara",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-132",
      "tier": "secondary",
      "url": "https://www.kake.com/news/wichitan-stacy-rogers-announces-candidacy-for-kansas-governor/article_8298d24e-ea47-11ef-aa00-ab042b86252d.html",
      "title": "Kake.Com",
      "publisher": "kake.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-133",
      "tier": "secondary",
      "url": "https://www.ksn.com/news/your-local-election-hq/republican-woman-wants-to-be-next-kansas-governor/",
      "title": "Ksn.Com",
      "publisher": "ksn.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-134",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Stacy_Rogers",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-135",
      "tier": "secondary",
      "url": "https://www.kcur.org/politics-elections-and-government/2025-07-24/kansas-governor-race-2026-election-candidates",
      "title": "Kcur.Org",
      "publisher": "kcur.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-136",
      "tier": "secondary",
      "url": "https://www.schooleymitchell.com/news/rholter/feature-story-eberly-farm-and-kids-closet-connection/",
      "title": "Schooleymitchell.Com",
      "publisher": "schooleymitchell.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-137",
      "tier": "secondary",
      "url": "https://rileyks.gop/2025/01/23/meet-gubernatorial-candidate-stacy-rogers-in-randolph/",
      "title": "Rileyks.Gop",
      "publisher": "rileyks.gop",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-138",
      "tier": "secondary",
      "url": "https://www.kake.com/news/joy-eakins-discusses-her-run-for-the-governors-office/article_7947e2be-8651-4a43-963e-5ee064c2d6c5.html",
      "title": "Kake.Com",
      "publisher": "kake.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-139",
      "tier": "secondary",
      "url": "https://www.wichitachamber.org/blog/2023/01/04/wichita-chamber-business-accelerator/faithful-investment-in-people-episode-104-wichita-chamber-business-accelerator-joy-eakins/",
      "title": "Wichitachamber.Org",
      "publisher": "wichitachamber.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-140",
      "tier": "secondary",
      "url": "https://cornerstonedata.com/about-us/",
      "title": "Cornerstonedata.Com",
      "publisher": "cornerstonedata.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-141",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Joy_Eakins",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-142",
      "tier": "secondary",
      "url": "https://kansasreflector.com/briefs/johnson-county-businessman-launches-campaign-to-win-gop-nomination-for-governor/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-143",
      "tier": "secondary",
      "url": "https://wltreport.com/2026/03/18/meet-republican-businessman-outsider-running-kansas-governor-gaining/",
      "title": "Wltreport.Com",
      "publisher": "wltreport.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-144",
      "tier": "secondary",
      "url": "https://trendingpoliticsnews.com/new-frontrunner-emerges-in-key-race-as-gop-candidate-shatters-fundraising-records-mace/",
      "title": "Trendingpoliticsnews.Com",
      "publisher": "trendingpoliticsnews.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-145",
      "tier": "secondary",
      "url": "https://www.wibw.com/2025/09/02/kansas-businessman-announces-campaign-governor/",
      "title": "Wibw.Com",
      "publisher": "wibw.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-146",
      "tier": "secondary",
      "url": "https://www.noln.net/site-placement/latest-news/news/55314781/strickland-brothers-10-minute-oil-change-franchise-owner-running-for-kansas-governor",
      "title": "Noln.Net",
      "publisher": "noln.net",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-147",
      "tier": "secondary",
      "url": "https://bottradionetwork.com/ministry/encounter-special-edition/2025-10-03-philip-sarnecki-on-leadership-and-the-kansas-governors-race/",
      "title": "Bottradionetwork.Com",
      "publisher": "bottradionetwork.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-148",
      "tier": "secondary",
      "url": "https://www.realmediakc.com/podcast/philip-sarnecki-for-kansas-governor-faith-business-outsider-vision/",
      "title": "Realmediakc.Com",
      "publisher": "realmediakc.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-149",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas_gubernatorial_and_lieutenant_gubernatorial_election,_2026",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-150",
      "tier": "secondary",
      "url": "https://en.wikipedia.org/wiki/2026_Kansas_gubernatorial_election",
      "title": "En.Wikipedia.Org",
      "publisher": "en.wikipedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-151",
      "tier": "secondary",
      "url": "https://www.kansascatholic.org/current-news/election-2026",
      "title": "Kansascatholic.Org",
      "publisher": "kansascatholic.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-152",
      "tier": "primary",
      "url": "https://www.haysusa.com/269/City-Commission",
      "title": "Haysusa.Com",
      "publisher": "haysusa.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-153",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/eb1182bd-00f4-4751-912d-03481e2570d8",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-154",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/27dd42ff-4f55-4a66-8957-7259a3e90c28",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-155",
      "tier": "primary",
      "url": "https://www.ellisco.net/120/County-Commission",
      "title": "Ellisco.Net",
      "publisher": "ellisco.net",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-156",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/1873ff67-3bab-44c2-896b-8aee3a992496",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-157",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/18d99844-46b7-4bc0-a558-9d9a87fa92e6",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-158",
      "tier": "primary",
      "url": "https://www.ellisco.net/626/Candidate-Filings",
      "title": "Ellisco.Net",
      "publisher": "ellisco.net",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-159",
      "tier": "primary",
      "url": "https://www.ellisco.net/425/Election",
      "title": "Ellisco.Net",
      "publisher": "ellisco.net",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-160",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/7bf9c6e7-b64c-4412-ba77-c1174d969816",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-161",
      "tier": "primary",
      "url": "https://www.usd489.com/page/board-of-education",
      "title": "Usd489.Com",
      "publisher": "usd489.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-162",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Hays_Unified_School_District_489,_Kansas,_elections",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-163",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/5de6670c-0b28-4836-820e-a80866aa4e94",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-164",
      "tier": "secondary",
      "url": "https://barbforkansas.com/",
      "title": "Barbforkansas.Com",
      "publisher": "barbforkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-165",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li_2024/b2023_24/members/rep_wasinger_barbara_1/",
      "title": "Kslegislature.Gov",
      "publisher": "kslegislature.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-166",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas_State_Senate_District_38",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-167",
      "tier": "secondary",
      "url": "https://ballotpedia.org/United_States_Senate_election_in_Kansas,_2026",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-168",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas'_1st_Congressional_District_election,_2026",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-169",
      "tier": "secondary",
      "url": "https://www.kcur.org/politics-elections-and-government/2025-12-30/whos-running-to-represent-kansas-in-the-u-s-senate-in-2026-heres-a-guide-to-the-candidates",
      "title": "Kcur.Org",
      "publisher": "kcur.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-170",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas_2026_ballot_measures",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-171",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas_Elections_for_Supreme_Court_Justices_Amendment_(August_2026",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-172",
      "tier": "secondary",
      "url": "https://www.votenokansas.org/",
      "title": "Votenokansas.Org",
      "publisher": "votenokansas.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-173",
      "tier": "primary",
      "url": "https://www.haysusa.com/335/Public-Library-Board",
      "title": "Haysusa.Com",
      "publisher": "haysusa.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-174",
      "tier": "secondary",
      "url": "https://haysmedfoundation.org/board/",
      "title": "Haysmedfoundation.Org",
      "publisher": "haysmedfoundation.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-175",
      "tier": "primary",
      "url": "https://sos.ks.gov/elections/important-election-dates.html",
      "title": "Sos.Ks.Gov",
      "publisher": "sos.ks.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-176",
      "tier": "primary",
      "url": "https://haysusa.com",
      "title": "Haysusa.Com",
      "publisher": "haysusa.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-177",
      "tier": "primary",
      "url": "https://sos.ks.gov/elections/elections.html",
      "title": "Sos.Ks.Gov",
      "publisher": "sos.ks.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-178",
      "tier": "primary",
      "url": "https://www.usd489.com",
      "title": "Usd489.Com",
      "publisher": "usd489.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-179",
      "tier": "secondary",
      "url": "https://jeffcolyer.com/",
      "title": "Jeffcolyer.Com",
      "publisher": "jeffcolyer.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-180",
      "tier": "secondary",
      "url": "https://www.colyerforgovernor.com/",
      "title": "Colyerforgovernor.Com",
      "publisher": "colyerforgovernor.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-181",
      "tier": "social",
      "url": "https://x.com/DrJeffColyer",
      "title": "X.Com",
      "publisher": "x.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-182",
      "tier": "social",
      "url": "https://x.com/govjeffcolyer",
      "title": "X.Com",
      "publisher": "x.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-183",
      "tier": "social",
      "url": "https://www.facebook.com/JeffColyerMD/",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-184",
      "tier": "social",
      "url": "https://www.linkedin.com/in/jeff-colyer-6894363/",
      "title": "Linkedin.Com",
      "publisher": "linkedin.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-185",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Jeff_Colyer",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-186",
      "tier": "secondary",
      "url": "https://www.nga.org/governor/jeff-colyer/",
      "title": "Nga.Org",
      "publisher": "nga.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-187",
      "tier": "secondary",
      "url": "https://politics.georgetown.edu/profile/jeff-colyer/",
      "title": "Politics.Georgetown.Edu",
      "publisher": "politics.georgetown.edu",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-188",
      "tier": "secondary",
      "url": "https://www.jeffcolyer.com/about/",
      "title": "Jeffcolyer.Com",
      "publisher": "jeffcolyer.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-189",
      "tier": "secondary",
      "url": "https://www.jeffcolyer.com/about-gov/",
      "title": "Jeffcolyer.Com",
      "publisher": "jeffcolyer.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-190",
      "tier": "secondary",
      "url": "https://jeffcolyer.com/announcements.html",
      "title": "Jeffcolyer.Com",
      "publisher": "jeffcolyer.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-191",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/02/23/republican-candidate-for-kansas-governor-offering-voters-a-prescription-for-change/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-192",
      "tier": "secondary",
      "url": "https://kansasreflector.com/briefs/former-gov-jeff-colyer-maneuvers-closer-to-2026-gop-campaign-for-kansas-governor/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-193",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2023/11/25/former-kansas-gov-jeff-colyer-endorses-trump-in-2024-republican-presidential-campaign/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-194",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2021/08/30/jeff-colyer-diagnosed-with-prostate-cancer-ends-campaign-for-kansas-governor/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-195",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/11/07/can-former-kansas-gov-jeff-colyer-define-wokeism-consider-the-oxpecker-bird/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-196",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2021/07/12/colyers-narrow-miss-in-2018-fueling-resurgent-gop-campaign-for-governor/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-197",
      "tier": "secondary",
      "url": "https://www.kcur.org/politics-elections-and-government/2025-05-16/former-kansas-governor-jeff-colyer-jumps-into-2026-race",
      "title": "Kcur.Org",
      "publisher": "kcur.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-198",
      "tier": "secondary",
      "url": "https://www.kcur.org/news/2021-08-30/the-kansas-a-g-s-path-to-governor-gets-easier-after-his-opponent-endorses-him",
      "title": "Kcur.Org",
      "publisher": "kcur.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-199",
      "tier": "secondary",
      "url": "https://www.kcur.org/post/colyers-first-executive-order-kansas-governor-fight-sexual-harassment",
      "title": "Kcur.Org",
      "publisher": "kcur.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-200",
      "tier": "secondary",
      "url": "https://www.kcur.org/politics-elections-and-government/2018-05-18/faith-based-adoption-law-signed-quickly-becoming-kansas-campaign-fodder",
      "title": "Kcur.Org",
      "publisher": "kcur.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-201",
      "tier": "secondary",
      "url": "https://www.kake.com/home/jeff-colyer-launches-kansas-governor-bid-after-being-inspired-by-president-trumps-campaign/article_a6636e42-0936-41ef-8e13-56a9dc7a9300.html",
      "title": "Kake.Com",
      "publisher": "kake.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-202",
      "tier": "secondary",
      "url": "https://www.ksnt.com/capitol-bureau/dr-jeff-colyer-announces-bid-for-kansas-governor/",
      "title": "Ksnt.Com",
      "publisher": "ksnt.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-203",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/af650bef-0c19-4f73-b418-bded940b0b7a",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-204",
      "tier": "secondary",
      "url": "https://salinapost.com/posts/68a90d33-8d9a-49ec-abbb-9190b4f87f7e",
      "title": "Salinapost.Com",
      "publisher": "salinapost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-205",
      "tier": "secondary",
      "url": "https://salinapost.com/posts/9f9b260b-5c26-4cd6-a81c-212904371850",
      "title": "Salinapost.Com",
      "publisher": "salinapost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-206",
      "tier": "secondary",
      "url": "https://www.nbcnews.com/politics/elections/kansas-governor-colyer-concedes-gop-primary-secretary-state-kobach-n900776",
      "title": "Nbcnews.Com",
      "publisher": "nbcnews.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-207",
      "tier": "secondary",
      "url": "https://www.cnn.com/2018/08/14/politics/kris-kobach-wins-kansas-republican-governor-primary",
      "title": "Cnn.Com",
      "publisher": "cnn.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-208",
      "tier": "secondary",
      "url": "https://www.npr.org/2018/08/14/638703832/trump-ally-kris-kobach-wins-primary-for-kansas-governor-as-gop-incumbent-concede",
      "title": "Npr.Org",
      "publisher": "npr.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-209",
      "tier": "secondary",
      "url": "https://www.npr.org/2018/01/25/580577126/kansas-lt-gov-will-takeover-as-brownback-leaves-for-ambassadorship",
      "title": "Npr.Org",
      "publisher": "npr.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-210",
      "tier": "secondary",
      "url": "https://www.pbs.org/newshour/politics/new-kansas-governor-to-require-annual-sexual-harassment-training",
      "title": "Pbs.Org",
      "publisher": "pbs.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-211",
      "tier": "secondary",
      "url": "https://thehill.com/homenews/campaign/570029-colyer-ends-campaign-for-kansas-governor-following-prostate-cancer/",
      "title": "Thehill.Com",
      "publisher": "thehill.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-212",
      "tier": "secondary",
      "url": "https://smartpolitics.lib.umn.edu/2025/05/14/jeff-colyer-and-a-review-of-kansas-gubernatorial-comeback-bids/",
      "title": "Smartpolitics.Lib.Umn.Edu",
      "publisher": "smartpolitics.lib.umn.edu",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-213",
      "tier": "secondary",
      "url": "https://www.cgscfoundation.org/person-of-the-month-may-2020/",
      "title": "Cgscfoundation.Org",
      "publisher": "cgscfoundation.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-214",
      "tier": "secondary",
      "url": "https://jag.org/dipl-team-member/jeff-colyer/",
      "title": "Jag.Org",
      "publisher": "jag.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-215",
      "tier": "primary",
      "url": "https://docs.house.gov/meetings/GO/GO28/20130918/101319/HHRG-113-GO28-Bio-ColyerJ-20130918.pdf",
      "title": "Docs.House.Gov",
      "publisher": "docs.house.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-216",
      "tier": "secondary",
      "url": "https://www.kscbnews.net/jeff-colyer-m-d-sworn-in-as-47th-governor-of-the-state-of-kansas/",
      "title": "Kscbnews.Net",
      "publisher": "kscbnews.net",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-217",
      "tier": "secondary",
      "url": "https://www.nga.org/governor-spouse/ruth-gutierrez-colyer/",
      "title": "Nga.Org",
      "publisher": "nga.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-218",
      "tier": "secondary",
      "url": "https://justfacts.votesmart.org/candidate/biography/34449/jeff-colyer",
      "title": "Justfacts.Votesmart.Org",
      "publisher": "justfacts.votesmart.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-219",
      "tier": "secondary",
      "url": "https://www.ontheissues.org/Jeff_Colyer.htm",
      "title": "Ontheissues.Org",
      "publisher": "ontheissues.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-220",
      "tier": "secondary",
      "url": "https://sanokc.com/provider/dr-colyer/",
      "title": "Sanokc.Com",
      "publisher": "sanokc.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-221",
      "tier": "secondary",
      "url": "https://www.renaissanceplasticsurgicalarts.com/",
      "title": "Renaissanceplasticsurgicalarts.Com",
      "publisher": "renaissanceplasticsurgicalarts.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-222",
      "tier": "secondary",
      "url": "https://www.healthgrades.com/physician/dr-jeffrey-colyer-xpdcb",
      "title": "Healthgrades.Com",
      "publisher": "healthgrades.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-223",
      "tier": "secondary",
      "url": "https://www.nkchealth.org/provider/jeffrey-w-colyer-plastic-surgery",
      "title": "Nkchealth.Org",
      "publisher": "nkchealth.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-224",
      "tier": "secondary",
      "url": "https://doctor.webmd.com/doctor/jeffrey-colyer-31dcc3a2-b552-47fe-acf3-0ec6615c7ca3-overview",
      "title": "Doctor.Webmd.Com",
      "publisher": "doctor.webmd.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-225",
      "tier": "secondary",
      "url": "https://internationalmedicalcorps.org/press-release/lt-governor-to-climb-mt-kilimanjaro-in-support-of-international-medical-corps-humanitarian-relief-efforts/",
      "title": "Internationalmedicalcorps.Org",
      "publisher": "internationalmedicalcorps.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-226",
      "tier": "secondary",
      "url": "https://www.findagrave.com/memorial/142168654/james-daniel-colyer",
      "title": "Findagrave.Com",
      "publisher": "findagrave.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-227",
      "tier": "secondary",
      "url": "https://www.legacy.com/obituaries/kansascity/obituary.aspx?pid=174049747",
      "title": "Legacy.Com",
      "publisher": "legacy.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-228",
      "tier": "primary",
      "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/202601/SW01JC_202601.pdf",
      "title": "Kansas.Gov",
      "publisher": "kansas.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-229",
      "tier": "secondary",
      "url": "https://sunflowerstatejournal.com/colyer-schwab-most-recognized-republicans-in-gubernatorial-field-survey-shows/",
      "title": "Sunflowerstatejournal.Com",
      "publisher": "sunflowerstatejournal.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-230",
      "tier": "secondary",
      "url": "https://en.wikipedia.org/wiki/2018_Kansas_gubernatorial_election",
      "title": "En.Wikipedia.Org",
      "publisher": "en.wikipedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-231",
      "tier": "secondary",
      "url": "https://colinforkansas.com/",
      "title": "Colinforkansas.Com",
      "publisher": "colinforkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-232",
      "tier": "social",
      "url": "https://www.instagram.com/colinforkansas/",
      "title": "Instagram.Com",
      "publisher": "instagram.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-233",
      "tier": "social",
      "url": "https://www.facebook.com/colinforkansas",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-234",
      "tier": "secondary",
      "url": "https://bsky.app/profile/colinmcroberts.bsky.social",
      "title": "Bsky.App",
      "publisher": "bsky.app",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-235",
      "tier": "social",
      "url": "https://www.linkedin.com/in/colin-mcroberts-5781291/",
      "title": "Linkedin.Com",
      "publisher": "linkedin.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-236",
      "tier": "secondary",
      "url": "https://www.colin-mcroberts.com/",
      "title": "Colin-mcroberts.Com",
      "publisher": "colin-mcroberts.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-237",
      "tier": "secondary",
      "url": "https://business.ku.edu/people/colin-mcroberts",
      "title": "Business.Ku.Edu",
      "publisher": "business.ku.edu",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-238",
      "tier": "secondary",
      "url": "https://www.ratemyprofessors.com/professor/2506562",
      "title": "Ratemyprofessors.Com",
      "publisher": "ratemyprofessors.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-239",
      "tier": "secondary",
      "url": "https://www.take-bac-congress.us/team/colin-mcroberts",
      "title": "Take-bac-congress.Us",
      "publisher": "take-bac-congress.us",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-240",
      "tier": "primary",
      "url": "https://www.fec.gov/data/candidate/H6KS01195/",
      "title": "Fec.Gov",
      "publisher": "fec.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-241",
      "tier": "primary",
      "url": "https://www.fec.gov/data/committee/C00919860/",
      "title": "Fec.Gov",
      "publisher": "fec.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-242",
      "tier": "primary",
      "url": "https://www.fec.gov/data/elections/house/KS/01/2026/",
      "title": "Fec.Gov",
      "publisher": "fec.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-243",
      "tier": "secondary",
      "url": "https://www.laurenforkansas.com",
      "title": "Laurenforkansas.Com",
      "publisher": "laurenforkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-244",
      "tier": "social",
      "url": "https://www.linkedin.com/in/laurenreinhold/",
      "title": "Linkedin.Com",
      "publisher": "linkedin.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-245",
      "tier": "social",
      "url": "https://www.facebook.com/dgcodems/videos/2299093513898616/",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-246",
      "tier": "secondary",
      "url": "https://unitedkansas.com/",
      "title": "Unitedkansas.Com",
      "publisher": "unitedkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-247",
      "tier": "social",
      "url": "https://www.facebook.com/unitedksparty/",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-248",
      "tier": "social",
      "url": "https://www.linkedin.com/in/craig-musser-82880838/",
      "title": "Linkedin.Com",
      "publisher": "linkedin.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-249",
      "tier": "secondary",
      "url": "https://unitedkansas.com/candidates",
      "title": "Unitedkansas.Com",
      "publisher": "unitedkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-250",
      "tier": "primary",
      "url": "https://www.fec.gov/data/",
      "title": "Fec.Gov",
      "publisher": "fec.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-251",
      "tier": "secondary",
      "url": "https://www.opensecrets.org/members-of-congress/tracey-mann/summary?cid=N00030743",
      "title": "Opensecrets.Org",
      "publisher": "opensecrets.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-252",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Colin_McRoberts",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-253",
      "tier": "secondary",
      "url": "https://www.kwch.com/2025/09/17/colin-mcroberts-files-1st-congressional-district-seat/",
      "title": "Kwch.Com",
      "publisher": "kwch.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-254",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/01/05/lawrence-democrats-take-aim-at-kansas-republicans-congressional-seat/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-255",
      "tier": "secondary",
      "url": "https://www2.ljworld.com/news/state-government/2026/jan/07/lawrence-democrats-take-aim-at-manns-congressional-seat/",
      "title": "Www2.Ljworld.Com",
      "publisher": "www2.ljworld.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-256",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/886b8285-39fd-4828-ac95-b3d6d19331b9",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-257",
      "tier": "secondary",
      "url": "https://aeon.co/users/colin-mcroberts",
      "title": "Aeon.Co",
      "publisher": "aeon.co",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-258",
      "tier": "secondary",
      "url": "https://skepticalinquirer.org/exclusive/a-skeptic-on-the-conspirasea-cruiseinterview-with-colin-mcroberts/",
      "title": "Skepticalinquirer.Org",
      "publisher": "skepticalinquirer.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-259",
      "tier": "secondary",
      "url": "https://kansaspublicradio.org/show/genres-when-experts-attack/2020-03-04/live-performance-when-experts-attack-1-colin-mcroberts",
      "title": "Kansaspublicradio.Org",
      "publisher": "kansaspublicradio.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-260",
      "tier": "secondary",
      "url": "https://www.texasbar.com/AM/Template.cfm?Section=Find_A_Lawyer&template=/Customsource/MemberDirectory/MemberDirectoryDetail.cfm&ContactID=281096",
      "title": "Texasbar.Com",
      "publisher": "texasbar.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-261",
      "tier": "secondary",
      "url": "https://salinapost.com/posts/25bbb2eb-ae15-4419-8096-972bb919a48a",
      "title": "Salinapost.Com",
      "publisher": "salinapost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-262",
      "tier": "secondary",
      "url": "https://www.kcnonline.com/wp/2026/01/05/two-lawrence-dems-seek-1st-district-seat/",
      "title": "Kcnonline.Com",
      "publisher": "kcnonline.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-263",
      "tier": "secondary",
      "url": "https://kansasreflector.com/tag/lauren-reinhold/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-264",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Craig_Musser",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-265",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/2ac5a87c-4b19-4a42-8db8-1deab18eb3f7",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-266",
      "tier": "secondary",
      "url": "https://greatbendpost.com/posts/d2d97c94-1d35-4fc6-a09d-3453408c580e",
      "title": "Greatbendpost.Com",
      "publisher": "greatbendpost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-267",
      "tier": "primary",
      "url": "https://docquery.fec.gov/pdf/966/202602149834322966/202602149834322966.pdf",
      "title": "Docquery.Fec.Gov",
      "publisher": "docquery.fec.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-268",
      "tier": "secondary",
      "url": "https://www.zoominfo.com/p/Craig-Musser/9122088966",
      "title": "Zoominfo.Com",
      "publisher": "zoominfo.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-269",
      "tier": "secondary",
      "url": "https://unitedkansas.com/about",
      "title": "Unitedkansas.Com",
      "publisher": "unitedkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-270",
      "tier": "secondary",
      "url": "https://en.wikipedia.org/wiki/United_Kansas",
      "title": "En.Wikipedia.Org",
      "publisher": "en.wikipedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-271",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2024/07/12/united-kansas-party-files-lawsuits-to-challenge-state-law-forbidding-multi-party-nominations/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-272",
      "tier": "secondary",
      "url": "https://kansasreflector.com/briefs/united-kansas-officially-earns-spot-on-kansas-ballots-as-states-fifth-political-party/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-273",
      "tier": "primary",
      "url": "https://sos.ks.gov/media/press-releases/2024/05-24-24-united-kansas-recognized-as-a-political-party.html",
      "title": "Sos.Ks.Gov",
      "publisher": "sos.ks.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-274",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas'_1st_Congressional_District_election,_2026_(August_4_Democratic_primary",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-275",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas'_1st_Congressional_District_election,_2026_(August_4_Republican_primary",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-276",
      "tier": "secondary",
      "url": "https://www.cookpolitical.com/house/race/483106",
      "title": "Cookpolitical.Com",
      "publisher": "cookpolitical.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-277",
      "tier": "secondary",
      "url": "https://en.wikipedia.org/wiki/2026_United_States_House_of_Representatives_elections_in_Kansas",
      "title": "En.Wikipedia.Org",
      "publisher": "en.wikipedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-278",
      "tier": "primary",
      "url": "https://www.fec.gov/data/candidate/H0KS01123/",
      "title": "Fec.Gov",
      "publisher": "fec.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-279",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/08/07/rivals-launch-fight-over-kansas-constitutional-amendment-to-elect-supreme-court-justices/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-280",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/02/10/kansas-method-of-picking-supreme-court-justices-could-be-improved-but-will-an-amendment-do-that/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-281",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/03/19/kansas-house-endorses-plan-to-elect-supreme-court-justices-placing-question-on-august-2026-ballot/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-282",
      "tier": "secondary",
      "url": "https://thebeaconnews.org/stories/2025/03/19/kansas-supreme-court-elections-voters-will-decide-in-2026/",
      "title": "Thebeaconnews.Org",
      "publisher": "thebeaconnews.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-283",
      "tier": "secondary",
      "url": "https://www.kcur.org/politics-elections-and-government/2026-01-26/kansas-lawmakers-want-to-reveal-more-about-the-people-picking-supreme-court-justices",
      "title": "Kcur.Org",
      "publisher": "kcur.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-284",
      "tier": "secondary",
      "url": "https://sunflowerstatejournal.com/judicial-amendment-campaign-shapes-up-outside-group-books-nearly-1-million-in-ads/",
      "title": "Sunflowerstatejournal.Com",
      "publisher": "sunflowerstatejournal.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-285",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li/b2025_26/measures/documents/summary_scr_1611_2025",
      "title": "Kslegislature.Gov",
      "publisher": "kslegislature.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-286",
      "tier": "secondary",
      "url": "https://www.brennancenter.org/our-work/analysis-opinion/wisconsin-supreme-court-race-breaks-spending-record-fueled-out-state",
      "title": "Brennancenter.Org",
      "publisher": "brennancenter.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-287",
      "tier": "secondary",
      "url": "https://pbswisconsin.org/news-item/billionaires-push-spending-in-the-2025-wisconsin-supreme-court-race-over-the-100-million-mark/",
      "title": "Pbswisconsin.Org",
      "publisher": "pbswisconsin.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-288",
      "tier": "secondary",
      "url": "https://www.npr.org/2025/04/01/nx-s1-5345862/wisconsin-supreme-court-crawford-schimel-election-results",
      "title": "Npr.Org",
      "publisher": "npr.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-289",
      "tier": "secondary",
      "url": "https://www.kansasinformationnetwork.com/2026-Kansas-Constitutional-Amendment",
      "title": "Kansasinformationnetwork.Com",
      "publisher": "kansasinformationnetwork.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-290",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas_Citizenship_Voting_Requirement_Amendment_(2026",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-291",
      "tier": "secondary",
      "url": "https://news.ballotpedia.org/2025/03/27/kansas-voters-will-decide-on-citizenship-voting-requirement-amendment-in-2026-similar-measures-were-approved-in-eight-states-in-2024/",
      "title": "News.Ballotpedia.Org",
      "publisher": "news.ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-292",
      "tier": "secondary",
      "url": "https://www.npr.org/2018/06/19/621304260/judge-tosses-kansas-proof-of-citizenship-voter-law-and-rebukes-sec-of-state-koba",
      "title": "Npr.Org",
      "publisher": "npr.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-293",
      "tier": "secondary",
      "url": "https://www.aclukansas.org/press-releases/resounding-victory-tens-thousands-disenfranchised-kansas-voters-supreme-court-refuses/",
      "title": "Aclukansas.Org",
      "publisher": "aclukansas.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-294",
      "tier": "secondary",
      "url": "https://www.cnn.com/2024/11/03/politics/noncitizen-voting-ballot-measures-election/index.html",
      "title": "Cnn.Com",
      "publisher": "cnn.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-295",
      "tier": "secondary",
      "url": "https://www.prismnews.com/news/kansas-proof-of-citizenship-voting-law-blocked-31000",
      "title": "Prismnews.Com",
      "publisher": "prismnews.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-296",
      "tier": "secondary",
      "url": "https://www.pbs.org/newshour/nation/kansas-hopes-to-resurrect-proof-of-citizenship-voting-law",
      "title": "Pbs.Org",
      "publisher": "pbs.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-297",
      "tier": "secondary",
      "url": "https://www.kmuw.org/government/2026-03-25/democratic-candidate-in-u-s-senate-race-opens-arms-to-kansas-republicans-lost-in-the-wilderness",
      "title": "Kmuw.Org",
      "publisher": "kmuw.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-298",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/11/25/kansas-democratic-candidates-for-u-s-senate-sharpen-attack-on-gop-incumbent-roger-marshall/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-299",
      "tier": "secondary",
      "url": "https://smartpolitics.lib.umn.edu/2025/03/05/how-well-can-democrats-fare-in-kansas-2026-us-senate-election/",
      "title": "Smartpolitics.Lib.Umn.Edu",
      "publisher": "smartpolitics.lib.umn.edu",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-300",
      "tier": "primary",
      "url": "https://mann.house.gov/",
      "title": "Mann.House.Gov",
      "publisher": "mann.house.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-301",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/07/30/kansas-election-for-attorney-general-in-2026-may-become-a-repeat-of-2022-showdown/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-302",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas_Attorney_General_election,_2026",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-303",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/04/04/leavenworth-house-member-first-republican-to-declare-as-2026-candidate-for-secretary-of-state/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-304",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas_Secretary_of_State_election,_2026",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-305",
      "tier": "secondary",
      "url": "https://kspress.com/news/2026/03/27/kansas-legislature-passes-package-of-elections-bills-that-alter-voting-processes",
      "title": "Kspress.Com",
      "publisher": "kspress.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-306",
      "tier": "secondary",
      "url": "https://kansasreflector.com/briefs/kansas-senate-minority-leader-challenges-gop-house-speaker-for-state-insurance-commissioner/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-307",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/05/13/kansas-house-speaker-launches-campaign-for-insurance-commissioner-with-pro-trump-rhetoric-1/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-308",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas_Insurance_Commissioner_election,_2026",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-309",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li/b2025_26/members/rep_wasinger_barbara_1/",
      "title": "Kslegislature.Gov",
      "publisher": "kslegislature.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-310",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas_House_of_Representatives_District_111",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-311",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas_State_Board_of_Education_election,_2026",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-312",
      "tier": "primary",
      "url": "https://www.ksde.gov/Board/Kansas-State-Board-of-Education/District-5",
      "title": "Ksde.Gov",
      "publisher": "ksde.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-313",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2024/10/22/kansas-board-of-education-races-could-shift-power-to-conservative-bloc/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-314",
      "tier": "social",
      "url": "https://x.com/KansasSOS",
      "title": "X.Com",
      "publisher": "x.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-315",
      "tier": "social",
      "url": "https://www.facebook.com/SchwabforSOS/",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-316",
      "tier": "social",
      "url": "https://www.instagram.com/kansassos/",
      "title": "Instagram.Com",
      "publisher": "instagram.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-317",
      "tier": "social",
      "url": "https://www.linkedin.com/in/scott-schwab-8306713/",
      "title": "Linkedin.Com",
      "publisher": "linkedin.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile.",
        "Observed public online activity mapped to Immigration / Border."
      ]
    },
    {
      "id": "s-318",
      "tier": "primary",
      "url": "https://sos.ks.gov/media/press-releases/2024/10-10-24-schwab-satisfied-with-one-on-one-call-with-usps-postmaster-general.html",
      "title": "Sos.Ks.Gov",
      "publisher": "sos.ks.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-319",
      "tier": "secondary",
      "url": "https://justfacts.votesmart.org/candidate/key-votes/34505/scott-schwab",
      "title": "Justfacts.Votesmart.Org",
      "publisher": "justfacts.votesmart.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-320",
      "tier": "secondary",
      "url": "https://www.billtrack50.com/legislatordetail/2823",
      "title": "Billtrack50.Com",
      "publisher": "billtrack50.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-321",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li_2018/b2017_18/members/rep_schwab_scott_1/",
      "title": "Kslegislature.Gov",
      "publisher": "kslegislature.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-322",
      "tier": "primary",
      "url": "https://sos.ks.gov/about/schwab-biography.html",
      "title": "Sos.Ks.Gov",
      "publisher": "sos.ks.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-323",
      "tier": "primary",
      "url": "https://sos.ks.gov/media/press-releases.html",
      "title": "Sos.Ks.Gov",
      "publisher": "sos.ks.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-324",
      "tier": "secondary",
      "url": "https://en.wikipedia.org/wiki/Scott_Schwab",
      "title": "En.Wikipedia.Org",
      "publisher": "en.wikipedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-325",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Scott_Schwab",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-326",
      "tier": "secondary",
      "url": "https://www.kshs.org/kansapedia/scott-schwab/20461",
      "title": "Kshs.Org",
      "publisher": "kshs.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-327",
      "tier": "secondary",
      "url": "https://justfacts.votesmart.org/candidate/biography/34505/scott-schwab",
      "title": "Justfacts.Votesmart.Org",
      "publisher": "justfacts.votesmart.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-328",
      "tier": "secondary",
      "url": "https://www.kcur.org/politics-elections-and-government/2025-01-08/kansas-governor-race-2026-scott-schwab",
      "title": "Kcur.Org",
      "publisher": "kcur.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-329",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/01/08/scott-schwab-runs-for-kansas-governor-after-two-terms-as-states-top-election-official/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-330",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/06/02/kansas-governor-candidate-scott-schwab-certain-voting-secure-eager-to-cut-property-taxes/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-331",
      "tier": "secondary",
      "url": "https://kansasreflector.com/briefs/scott-schwab-aims-gop-gubernatorial-campaign-at-property-tax-reform/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-332",
      "tier": "secondary",
      "url": "https://www.ksnt.com/capitol-bureau/i-will-make-a-full-recovery-scott-schwab-announces-cancer-diagnosis/",
      "title": "Ksnt.Com",
      "publisher": "ksnt.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-333",
      "tier": "secondary",
      "url": "https://www.kwch.com/2025/03/21/ks-secretary-state-announces-cancer-diagnosis/",
      "title": "Kwch.Com",
      "publisher": "kwch.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-334",
      "tier": "secondary",
      "url": "https://www.kcur.org/news/2022-07-22/kansas-court-says-the-secretary-of-state-violated-open-records-law-and-made-it-hard-to-get-documents",
      "title": "Kcur.Org",
      "publisher": "kcur.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-335",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2022/07/22/kansas-appeals-court-says-secretary-of-state-violated-open-records-law-by-altering-computer-system/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-336",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2022/08/01/kansas-secretary-of-state-refuses-to-provide-provisional-ballot-records-despite-court-ruling/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-337",
      "tier": "secondary",
      "url": "https://www.aclukansas.org/cases/loud-light-hammet-v-schwab-2020/",
      "title": "Aclukansas.Org",
      "publisher": "aclukansas.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-338",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2020/11/09/as-other-republicans-lied-about-voter-fraud-kansas-secretary-of-state-was-a-voice-of-sanity/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-339",
      "tier": "secondary",
      "url": "https://www.pbs.org/newshour/politics/kansas-secretary-of-state-defeats-election-conspiracy-promoter",
      "title": "Pbs.Org",
      "publisher": "pbs.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-340",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2022/07/26/schwabs-campaign-rebuffs-late-campaign-criticism-from-kansas-gop-rival-brown/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-341",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2024/09/15/kansas-secretary-of-state-scott-schwab-works-to-build-trust-in-elections-in-the-face-of-skepticism/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-342",
      "tier": "secondary",
      "url": "https://www.ksnt.com/capitol-bureau/this-is-unacceptable-top-kansas-election-official-demands-answers-from-usps-after-mail-errors-in-primary-election/",
      "title": "Ksnt.Com",
      "publisher": "ksnt.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-343",
      "tier": "secondary",
      "url": "https://www.kwch.com/2024/09/10/kansas-secretary-state-sends-letter-usps-over-mail-in-ballot-problems/",
      "title": "Kwch.Com",
      "publisher": "kwch.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-344",
      "tier": "secondary",
      "url": "https://www.kcur.org/politics-elections-and-government/2025-10-26/president-trump-kansas-secretary-of-state-scott-schwab",
      "title": "Kcur.Org",
      "publisher": "kcur.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-345",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/07/31/secretary-of-state-scott-schwab-welcomes-federal-assist-with-cleansing-voter-list/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-346",
      "tier": "secondary",
      "url": "https://abcnews.go.com/US/family-boy-killed-waterslide-speaks-hurting/story?id=45445546",
      "title": "Abcnews.Go.Com",
      "publisher": "abcnews.go.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-347",
      "tier": "secondary",
      "url": "https://fox4kc.com/news/scott-schwab-speaks-as-criminal-cases-loom-dad-talks-of-journey-forward-after-tragedy-on-verruckt/",
      "title": "Fox4kc.Com",
      "publisher": "fox4kc.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-348",
      "tier": "secondary",
      "url": "https://www.kshb.com/news/local-news/family-friends-and-community-honor-10-year-old-caleb-schwab",
      "title": "Kshb.Com",
      "publisher": "kshb.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-349",
      "tier": "secondary",
      "url": "https://www.kshb.com/news/local-news/caleb-schwabs-family-to-recieve-20-million-in-settlement",
      "title": "Kshb.Com",
      "publisher": "kshb.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-350",
      "tier": "secondary",
      "url": "https://bflawfirm.com/schlitterbahn-wrongful-death-claims-settle-for-19732125-00/",
      "title": "Bflawfirm.Com",
      "publisher": "bflawfirm.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-351",
      "tier": "secondary",
      "url": "https://www.npr.org/2019/02/25/697647804/judge-dismisses-murder-charges-over-boys-death-on-kansas-waterslide",
      "title": "Npr.Org",
      "publisher": "npr.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-352",
      "tier": "secondary",
      "url": "https://time.com/4444447/caleb-schwab-verruckt-water-slide-death/",
      "title": "Time.Com",
      "publisher": "time.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-353",
      "tier": "secondary",
      "url": "https://www.penwellgabelkc.com/obituaries/caleb-thomas-schwab",
      "title": "Penwellgabelkc.Com",
      "publisher": "penwellgabelkc.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-354",
      "tier": "secondary",
      "url": "https://www.lwv.org/legal-center/league-women-voters-kansas-v-schwab",
      "title": "Lwv.Org",
      "publisher": "lwv.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-355",
      "tier": "secondary",
      "url": "https://www.democracydocket.com/cases/kansas-voter-suppression-laws/",
      "title": "Democracydocket.Com",
      "publisher": "democracydocket.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-356",
      "tier": "secondary",
      "url": "https://law.justia.com/cases/kansas/supreme-court/2023/124378.html",
      "title": "Law.Justia.Com",
      "publisher": "law.justia.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-357",
      "tier": "secondary",
      "url": "https://vickischmidt.org/",
      "title": "Vickischmidt.Org",
      "publisher": "vickischmidt.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-358",
      "tier": "social",
      "url": "https://www.facebook.com/VickiSchmidtKS/",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-359",
      "tier": "social",
      "url": "https://x.com/VickiSchmidtKS",
      "title": "X.Com",
      "publisher": "x.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-360",
      "tier": "social",
      "url": "https://www.linkedin.com/in/vicki-schmidt-50b11810/",
      "title": "Linkedin.Com",
      "publisher": "linkedin.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-361",
      "tier": "secondary",
      "url": "https://en.wikipedia.org/wiki/Vicki_Schmidt",
      "title": "En.Wikipedia.Org",
      "publisher": "en.wikipedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-362",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Vicki_Schmidt",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-363",
      "tier": "primary",
      "url": "https://insurance.kansas.gov/about-us/",
      "title": "Insurance.Kansas.Gov",
      "publisher": "insurance.kansas.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-364",
      "tier": "secondary",
      "url": "https://justfacts.votesmart.org/candidate/biography/34584/vicki-schmidt",
      "title": "Justfacts.Votesmart.Org",
      "publisher": "justfacts.votesmart.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-365",
      "tier": "secondary",
      "url": "https://content.naic.org/node/8831",
      "title": "Content.Naic.Org",
      "publisher": "content.naic.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-366",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/07/21/kansas-republican-vicki-schmidt-anchors-2026-campaign-for-governor-on-record-of-service/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-367",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/02/03/kansas-insurance-commissioner-blends-personal-experience-advocacy-on-breast-cancer-bill/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-368",
      "tier": "secondary",
      "url": "https://www.kcur.org/politics-elections-and-government/2026-03-17/kansas-bill-to-expand-free-breast-cancer-screening-likely-killed-by-republican-lawmakers",
      "title": "Kcur.Org",
      "publisher": "kcur.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-369",
      "tier": "secondary",
      "url": "https://thebeaconnews.org/stories/2026/03/16/breast-cancer-screening-bill-killed-by-kansas-gop/",
      "title": "Thebeaconnews.Org",
      "publisher": "thebeaconnews.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-370",
      "tier": "secondary",
      "url": "https://www.kwch.com/2026/02/02/kansas-insurance-commissioner-backs-bill-eliminate-breast-cancer-screening-costs/",
      "title": "Kwch.Com",
      "publisher": "kwch.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-371",
      "tier": "secondary",
      "url": "https://www.kwch.com/2023/10/17/its-humbling-ks-insurance-commissioner-discusses-breast-cancer-journey/",
      "title": "Kwch.Com",
      "publisher": "kwch.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-372",
      "tier": "secondary",
      "url": "https://kansasreflector.com/briefs/kansas-insurance-commissioner-has-breast-cancer-expects-full-recovery/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-373",
      "tier": "secondary",
      "url": "https://www2.ljworld.com/news/state-government/2023/jun/14/kansas-insurance-commissioner-says-shes-been-diagnosed-with-breast-cancer/",
      "title": "Www2.Ljworld.Com",
      "publisher": "www2.ljworld.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-374",
      "tier": "secondary",
      "url": "https://kflpac.org/kfl-pac-releases-statement-on-insurance-commissioner-vicki-schmidt-seeking-the-republican-nomination-for-governor/",
      "title": "Kflpac.Org",
      "publisher": "kflpac.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-375",
      "tier": "secondary",
      "url": "https://www.insurancejournal.com/news/midwest/2025/12/03/849821.htm",
      "title": "Insurancejournal.Com",
      "publisher": "insurancejournal.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-376",
      "tier": "secondary",
      "url": "https://www.wibw.com/2024/06/21/ks-insurance-commissioner-touts-new-law-protect-seniors-scams/",
      "title": "Wibw.Com",
      "publisher": "wibw.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-377",
      "tier": "secondary",
      "url": "https://tkmagazine.com/blog/2024/11/14/at-the-core-spotlight-on-vicki-schmidt",
      "title": "Tkmagazine.Com",
      "publisher": "tkmagazine.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-378",
      "tier": "secondary",
      "url": "https://news.ku.edu/news/article/vicki-schmidt-earns-schools-top-honor",
      "title": "News.Ku.Edu",
      "publisher": "news.ku.edu",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-379",
      "tier": "secondary",
      "url": "https://mittelpolitan.substack.com/p/insight-kansas-column-for-july-vicki",
      "title": "Mittelpolitan.Substack.Com",
      "publisher": "mittelpolitan.substack.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-380",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/10/14/kansas-young-republicans-shut-down-after-politico-report-on-racist-violent-encrypted-chat/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-381",
      "tier": "secondary",
      "url": "https://doctor.webmd.com/doctor/michael-schmidt-a19fa618-8410-4d00-8e68-60d8c85f6524-overview",
      "title": "Doctor.Webmd.Com",
      "publisher": "doctor.webmd.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-382",
      "tier": "secondary",
      "url": "https://www.md.com/doctor/michael-j-schmidt-md",
      "title": "Md.Com",
      "publisher": "md.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-383",
      "tier": "primary",
      "url": "https://sos.ks.gov/elections/22elec/2022-General-Official-Vote-Totals.pdf",
      "title": "Sos.Ks.Gov",
      "publisher": "sos.ks.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-384",
      "tier": "secondary",
      "url": "https://en.wikipedia.org/wiki/2022_Kansas_Insurance_Commissioner_election",
      "title": "En.Wikipedia.Org",
      "publisher": "en.wikipedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-385",
      "tier": "secondary",
      "url": "https://legiscan.com/KS/rollcall/SB95/id/475027",
      "title": "Legiscan.Com",
      "publisher": "legiscan.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-386",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li_2016/b2015_16/measures/documents/sb95_00_0000.pdf",
      "title": "Kslegislature.Gov",
      "publisher": "kslegislature.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-387",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li/b2025_26/measures/documents/sb409_00_0000.pdf",
      "title": "Kslegislature.Gov",
      "publisher": "kslegislature.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-388",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li_2014/b2013_14/measures/documents/summary_hb_2744_2014.pdf",
      "title": "Kslegislature.Gov",
      "publisher": "kslegislature.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-389",
      "tier": "secondary",
      "url": "https://apnews.com/article/4587939711dc7a5effb1879374405147",
      "title": "Apnews.Com",
      "publisher": "apnews.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-390",
      "tier": "primary",
      "url": "https://www.kdor.ks.gov/Apps/VoterReg/",
      "title": "Kdor.Ks.Gov",
      "publisher": "kdor.ks.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-391",
      "tier": "secondary",
      "url": "https://myvoteinfo.voteks.org/",
      "title": "Myvoteinfo.Voteks.Org",
      "publisher": "myvoteinfo.voteks.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-392",
      "tier": "primary",
      "url": "https://sos.ks.gov/media/press-releases/2026/01-07-26-secretary-schwab-outlines-legislative-agenda-centered-on-efficiency-integrity-and-better-service.html",
      "title": "Sos.Ks.Gov",
      "publisher": "sos.ks.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-393",
      "tier": "secondary",
      "url": "https://kriskobach.com/meet-kris/",
      "title": "Kriskobach.Com",
      "publisher": "Kriskobach.Com",
      "accessed": "2026-03-31",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-394",
      "tier": "primary",
      "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/202601/SW02KK_202601.pdf",
      "title": "Kansas.Gov",
      "publisher": "Kansas.Gov",
      "accessed": "2026-03-31",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-395",
      "tier": "secondary",
      "url": "https://www.kansasreflector.com/2022/12/31/kobachs-u-s-senate-campaign-we-build-the-wall-hit-by-30000-fine-for-campaign-law-violations/",
      "title": "Kansasreflector.Com",
      "publisher": "Kansasreflector.Com",
      "accessed": "2026-03-31",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-396",
      "tier": "secondary",
      "url": "https://www.opensecrets.org/officeholders/kris-kobach/summary",
      "title": "Opensecrets.Org",
      "publisher": "Opensecrets.Org",
      "accessed": "2026-03-31",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-397",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/03/19/kansas-supreme-court-justices-election-amendment/",
      "title": "Kansasreflector.Com",
      "publisher": "Kansasreflector.Com",
      "accessed": "2026-03-31",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-398",
      "tier": "secondary",
      "url": "https://kriskobach.com/wp-content/uploads/2022/05/Kris-Kobachs-Five-Point-Plan-for-the-Kansas-Attorney-Generals-Office.pdf",
      "title": "Kriskobach.Com",
      "publisher": "Kriskobach.Com",
      "accessed": "2026-03-31",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-399",
      "tier": "secondary",
      "url": "https://kcur.org/news/2025-03-20/voters-will-decide-how-to-pick-kansas-supreme-court-justices-but-how-many-will-cast-a-ballot",
      "title": "Kcur.Org",
      "publisher": "Kcur.Org",
      "accessed": "2026-03-31",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
      ]
    },
    {
      "id": "s-400",
      "tier": "secondary",
      "url": "https://kcur.org/news/2026-01-26/reveal-more-about-the-people-picking-supreme-court-justices-kansas-lawmakers-propose-transparency-push",
      "title": "Kcur.Org",
      "publisher": "Kcur.Org",
      "accessed": "2026-03-31",
      "claimsAnchored": [
        "Source carried forward for Scott Schwab's generated v2 profile."
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
