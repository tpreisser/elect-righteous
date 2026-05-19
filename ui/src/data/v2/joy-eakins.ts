/* Auto-normalized with issue-mapped social/online cross-reference signals.
 * To refresh:
 *   node scripts/hydrate-v2-social-signals.mjs
 */

import type { CandidateFullV2 } from "@/data/types-v2";
import { validateCandidateV2 } from "@/data/types-v2";

export const JOY_EAKINS_V2: CandidateFullV2 = {
  "slug": "joy-eakins",
  "name": "Joy Eakins",
  "party": "R",
  "position": "Governor candidate",
  "electionSlug": "kansas-governor-2026",
  "incumbent": false,
  "occupation": "Governor candidate",
  "campaignWebsite": "https://docs.house.gov/meetings/GO/GO28/20130918/101319/HHRG-113-GO28-Bio-ColyerJ-20130918.pdf",
  "issues": [
    {
      "id": "i-abortion-sanctity-of-life-1",
      "title": "Abortion / Sanctity of Life",
      "stated": {
        "text": "Has not taken a specific public position on abortion in the available record, though her self-described identity as a \"strong conservative and America First patriot\" and alignment with Trump suggest a pro-life stance.",
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
          "platform": "Kansas Reflector",
          "observation": "19, 2026 campaign-finance article: Eakins' $1 million self-loan and \"golden age\" frame under President Donald Trump. (source) 12. Kansas Reflector Jan. 30, 2026 debate article: GOP debate coverage; Eakins says established politicians \"have been stewarding our decline\"; candidates aligned on abortion, marijuana opposition, Supreme Court elections, and Trump praise. (source) 13.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "i-abortion-sanctity-of-life-1"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Public web",
          "observation": "Across the accessible reviewed set, no candidate-controlled item centered water policy, the Ogallala Aquifer, Medicaid expansion, rural hospitals, child care, foster care, broadband, roads/bridges, public safety beyond ICE/law-enforcement remarks, gun policy, or LGBTQ+ policy. Abortion, marijuana, judicial selection, immigration/ICE, and energy were visible mainly through debate coverage/transcripts rather than...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-2"
          ],
          "mappedToIssueId": "i-abortion-sanctity-of-life-1"
        },
        {
          "id": "ss-crossref-5",
          "platform": "LinkedIn",
          "observation": "Eakins' biography and faith language are part of the public pitch but less frequent than education and taxes. Her About page says she has been married to Eric for 31 years, has a son serving in the U.S. Air Force, has a bonus son in Chicago, is a devout Christian, and is a faithful member of River Community Church. (source) LinkedIn preview shows a shared post beginning, \"I overcame a difficult upbringing through...",
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
          "s-3",
          "s-4",
          "s-5"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Public web",
          "observation": "The visible absences are important. Across the accessible reviewed set, no candidate-controlled item centered water policy, the Ogallala Aquifer, Medicaid expansion, rural hospitals, child care, foster care, broadband, roads and bridges, gun policy, or LGBTQ+ policy. Abortion, marijuana, judicial selection, immigration/ICE, and energy appeared in debate coverage and transcripts rather than as standalone campaign...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-2"
          ],
          "mappedToIssueId": "i-marriage-family-lgbtq-policy-2"
        }
      ]
    },
    {
      "id": "i-religious-liberty-3",
      "title": "Religious Liberty",
      "stated": {
        "text": "No candidate-controlled statement was found in the reviewed public record for this issue. This page therefore does not infer a position from party label, faith affiliation, follows, likes, comments, or associations.",
        "sourceIds": [
          "s-1",
          "s-3",
          "s-4",
          "s-5"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "kansascomeback.com",
          "observation": "The campaign website frames Eakins as a \"strong conservative and America First patriot\" who founded Cornerstone Data, served on the Wichita Board of Education, fought for parents' rights and fiscal responsibility, and belongs to River Community Church. It says she has been married to Eric for 31 years, has a biological son serving in the U.S. Air Force, and has a bonus son in Chicago. (source)",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-2"
          ],
          "mappedToIssueId": "i-religious-liberty-3"
        },
        {
          "id": "ss-crossref-3",
          "platform": "X",
          "observation": "1. Campaign homepage/current metadata: official campaign site; title and description position Eakins as a conservative Kansas Comeback candidate focused on education reform, economic growth, and family values. The page's OpenGraph/Twitter metadata includes \"Joy Eakins for Kansas Governor\" and \"Conservative Leadership for a Kansas Comeback.\" (source) 2. Campaign About page: biography, professional background,...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-3"
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
          "s-3",
          "s-4",
          "s-5"
        ]
      },
      "actions": [],
      "socialSignals": []
    },
    {
      "id": "i-immigration-border-5",
      "title": "Immigration / Border",
      "stated": {
        "text": "No candidate-controlled statement was found in the reviewed public record for this issue. This page therefore does not infer a position from party label, faith affiliation, follows, likes, comments, or associations.",
        "sourceIds": [
          "s-1",
          "s-3",
          "s-4",
          "s-5"
        ]
      },
      "actions": [],
      "socialSignals": []
    },
    {
      "id": "i-school-choice-parental-rights-in-education-6",
      "title": "School Choice / Parental Rights in Education",
      "stated": {
        "text": "Her signature issue. She fought for school reopening during COVID using data from her analytics firm and champions \"parents' rights\" in education decisions. Wants to root out what she calls \"left-leaning cultural influences from Kansas institutions.\"",
        "sourceIds": [
          "s-1",
          "s-3",
          "s-4",
          "s-5"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "kansascomeback.com",
          "observation": "The campaign site's Education page is the largest candidate-controlled issue page in the capture. It says Kansas needs a comeback in education, lists NAEP proficiency/ranking figures, and argues parents \"know best\" and should have choices. The platform includes robust school choice, civics education, reading and math outcomes, repealing the law requiring districts to negotiate with teachers' unions, a new...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-4"
          ],
          "mappedToIssueId": "i-school-choice-parental-rights-in-education-6"
        },
        {
          "id": "ss-crossref-3",
          "platform": "LinkedIn",
          "observation": "LinkedIn public preview listed Joy Eakins as Wichita-based, with 1K followers and 500+ connections, and websites for joyeakins.com and the campaign site. Visible activity previews included: \"Kansas deserves a leader who never caves. I fought for Wichita kids and families on the School Board. I fought for small business owners on the...\" and \"In America, no one gets to decide your future except YOU. I overcame a...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-2"
          ],
          "mappedToIssueId": "i-school-choice-parental-rights-in-education-6"
        },
        {
          "id": "ss-crossref-5",
          "platform": "KAKE",
          "observation": "Campaign News page: three media items dated June 17, June 18, and June 19, 2025. (source) 6. Campaign repost of KAKE interview: opportunity, brain drain, school outcomes, school choice, financial cliff, affordable/appropriate housing, outsider pitch, and \"government to get out of their way\" line. (source) 7. Campaign repost of Pete Mundo appearance: launch and Kansas Comeback radio interview reference. (source) 8.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-5"
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
          "s-1",
          "s-3",
          "s-4",
          "s-5"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Facebook",
          "observation": "Facebook campaign page metadata: 780 likes, 130 talking about this, Joy Eakins for Governor page identity and description. (source) 9. X campaign profile metadata: @JoyforKS, created 2025-06-09, 82 followers, 18 following, 160 statuses/posts, 97 media, Wichita, KS, campaign bio. (source) 10. LinkedIn public profile preview: 1K followers, 500+ connections, campaign website listed, public activity previews on never...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-6"
          ],
          "mappedToIssueId": "i-marijuana-drug-policy-7"
        },
        {
          "id": "ss-crossref-3",
          "platform": "KAKE",
          "observation": "The campaign site amplifies three June 2025 media items: the announcement, a Pete Mundo/KCMO Talk Radio appearance, and KAKE's interview. LinkedIn previews show Eakins sharing campaign-oriented posts about never caving, her upbringing, God's grace, and The Policy Circle; the same preview shows likes on posts about business leadership, Newsmax, women investing, and technology events. X and Facebook did not expose...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-2"
          ],
          "mappedToIssueId": "i-marijuana-drug-policy-7"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Kansas Reflector",
          "observation": "On Republican primary alignment, she places herself on the Trump/America First side and against career politicians. Kansas Reflector reported in January 2026 that she argued the United States was on the cusp of a \"golden age\" under President Donald Trump, but Kansas could miss out without a conservative governor. (source) Kansas Reflector's debate coverage said all six participating Republican candidates found...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "i-marijuana-drug-policy-7"
        }
      ]
    }
  ],
  "whoTheyAre": "Joy Eakins is a Wichita business executive and Republican candidate for governor in 2026. Her public biography runs through the technology and data world before turning to local education politics. Campaign material and business profiles tie her to Cornerstone Data, the Wichita school board, and a long professional resume that includes Bell Labs, Lucent, and Avaya before she founded her own analytics firm in 2008.\n\nEakins served on the Wichita Board of Education after winning a close race in 2013. Her statewide campaign leans heavily on that chapter, especially her arguments during the COVID era that schools could reopen safely. She presents herself as an outsider to the party hierarchy, but not as a newcomer to public arguments over education, public health, and local government.",
  "recordSummary": "Eakins' clearest public record comes from the Wichita school board. She has used that experience to argue that Kansas leaders were too slow and too rigid during the pandemic, and she has said her firm's data analysis showed schools could bring students back sooner. That reopening fight is the strongest policy thread running through her campaign.\n\nHer gubernatorial message also puts her on the populist side of the Republican primary. In debate coverage and campaign interviews, she has embraced Donald Trump, talked about a coming \"golden age,\" and argued that families should have more control over medical and educational decisions. Her record is thinner on statewide office or legislation, but her school-board years and business history give voters a clear sense of the issues she wants to own.",
  "ownWordsNarrative": "_A summary of what Joy Eakins has publicly said, posted, and amplified across campaign-controlled pages, public social profile metadata, LinkedIn previews, public news coverage, and indexed debate transcripts. Drawn from public captures between June 9, 2025 and May 11, 2026. We report patterns; we do not interpret intent._\n\nAcross the accessible public set, Eakins' message is built around a \"Kansas Comeback\" frame: Kansas should be the best place to live the American dream, but career politicians have let the state decline. Her campaign About page calls her a \"strong conservative and America First patriot\" and ties that identity to Cornerstone Data, Wichita school-board service, parents' rights, fiscal responsibility, and education reform. ([source](https://www.kansascomeback.com/about)) In the January 30, 2026 GOP debate, she opened by saying, \"Kansas should be the best place to live the American dream, but it's not, because for too long career politicians, have been stewarding our decline.\" ([source](https://freestatenews.net/local-issues/transcript-of-the-gop-governors-debate-january-30-2026-part-1/))\n\nEducation is the dominant issue in her candidate-controlled material. Her Education page says Kansas students are average or below average on major NAEP assessments, that parents \"know best what their child needs to succeed,\" and that every family should have educational choices. The platform calls for robust school choice, stronger civics education, reading and math outcomes, repeal of the law requiring districts to negotiate with teachers' unions, a new finance formula, school-board training, and teacher training focused on outcomes. ([source](https://www.kansascomeback.com/education)) In the debate transcript, she said, \"I put out an education plan in September. Nobody else has put a plan out with details,\" and promised to sign school choice in the first 90 days. ([source](https://freestatenews.net/local-issues/gop-governors-debate-transcript-part-2/))\n\nHer education argument repeatedly uses her Wichita school-board record and her data-business identity. The campaign says she advanced parents' rights, advocated for school choice, opposed suing the state for more money, opposed longer school days that she said prioritized janitors over kids, and used her data analytics firm to show Kansas could return children to classrooms safely during COVID. ([source](https://www.kansascomeback.com/education)) In the debate transcript, she said she had done \"a lot of data work in the state during COVID,\" fought to get the state open, and testified that state data was wrong. ([source](https://freestatenews.net/local-issues/transcript-of-the-gop-governors-debate-january-30-2026-part-1/))\n\nThe second major theme is taxes, especially property taxes and appraisal growth. Her Property Tax Reform page says Kansas' taxes are \"more like California's than our neighboring states,\" describes rising appraisals as a \"backdoor tax increase,\" and proposes capping annual appraisal hikes at 3% or inflation, whichever is less. ([source](https://www.kansascomeback.com/propertytaxreform)) At the GOP debate, she said people such as the Riedels from Ellis were opening appraisal notices and getting \"a total shock,\" and that appraisers should have to show their work while government bears the burden of proof. ([source](https://freestatenews.net/local-issues/transcript-of-the-gop-governors-debate-january-30-2026-part-1/)) Hays Post reported that her April 2026 Ellis town hall focused on education reform and property tax relief. ([source](https://hayspost.com/posts/2c52043f-2180-461b-9a64-4fd75c91236f))\n\nBusiness, entrepreneurship, and skepticism of targeted incentives are recurring signals. The campaign biography says she built Cornerstone Data into a successful Kansas data-analytics firm with nationwide reach. ([source](https://www.kansascomeback.com/about)) At the debate, she said she spent 17 years building the most successful data consulting firm in Kansas, with customers in 160 cities and 27 states. On economic incentives, she said government involvement in business is \"about picking winners and losers\" and that it was her job to make her profit-and-loss statement work, not taxpayers' job. ([source](https://freestatenews.net/local-issues/transcript-of-the-gop-governors-debate-january-30-2026-part-1/))\n\nHer social footprint is present but not deeply visible from logged-out capture. Facebook metadata listed \"Joy Eakins for Governor\" with 780 likes and 130 talking about this, and described her as a strong conservative and America First patriot running to lead the Kansas Comeback. ([source](https://www.facebook.com/JoyforKS/)) X metadata for [@JoyforKS](https://x.com/JoyforKS) listed Wichita, KS, account creation on June 9, 2025, 82 followers, 18 following, 160 statuses/posts, and 97 media items, with the bio \"Running to lead the Kansas Comeback as the next Governor of Kansas.\" ([source](https://x.com/JoyforKS)) LinkedIn preview listed 1K followers and 500+ connections, and exposed activity snippets including \"Kansas deserves a leader who never caves\" and \"In America, no one gets to decide your future except YOU.\" ([source](https://www.linkedin.com/in/joyeakins/))\n\nEakins' biography and faith language are part of the public pitch but less frequent than education and taxes. Her About page says she has been married to Eric for 31 years, has a son serving in the U.S. Air Force, has a bonus son in Chicago, is a devout Christian, and is a faithful member of River Community Church. ([source](https://www.kansascomeback.com/about)) LinkedIn preview shows a shared post beginning, \"I overcame a difficult upbringing through grit, God's grace, and by doing the next right...\" ([source](https://www.linkedin.com/in/joyeakins/)) At the debate, she connected her abortion stance to her own childhood, saying, \"I was born into a bad situation. What if I wasn't here?\" ([source](https://freestatenews.net/local-issues/gop-governors-debate-transcript-part-2/))\n\nOn Republican primary alignment, she places herself on the Trump/America First side and against career politicians. Kansas Reflector reported in January 2026 that she argued the United States was on the cusp of a \"golden age\" under President Donald Trump, but Kansas could miss out without a conservative governor. ([source](https://kansasreflector.com/2026/01/19/millionaire-candidates-for-kansas-governor-burnish-fundraising-with-personal-loans/)) Kansas Reflector's debate coverage said all six participating Republican candidates found consensus on reducing abortions, opposing marijuana legalization, backing a constitutional amendment for Kansas Supreme Court elections, and praising Trump. ([source](https://kansasreflector.com/2026/01/30/six-kansas-gop-candidates-for-governor-toss-haymakers-in-first-debate-find-unity-on-key-issues/))\n\nSeveral policy positions were visible mainly through debate coverage rather than the campaign site. On marijuana, Kansas Reflector quoted Eakins saying legalized marijuana creates service costs and cultural problems, and that she did not want high school students thinking about where to get marijuana instead of reading and math. ([source](https://kansasreflector.com/2026/01/30/six-kansas-gop-candidates-for-governor-toss-haymakers-in-first-debate-find-unity-on-key-issues/)) On judicial selection, the Free State News transcript has her supporting a move away from the Missouri Plan and toward elected judges. On immigration/law enforcement, the same transcript has her criticizing Johnson County's Democratic sheriff for not cooperating with ICE and saying Republicans must stand by law enforcement. ([source](https://freestatenews.net/local-issues/gop-governors-debate-transcript-part-2/))\n\nThe highest visible engagement was not an individual post; it was Facebook page-level metadata: 780 likes and 130 talking about this. X showed 160 statuses/posts and 97 media items but no reliable post-level engagement from logged-out capture. LinkedIn showed the largest follower base among accessible social profiles, with 1K followers and 500+ connections, but public previews did not expose reliable engagement counts. No candidate-controlled Instagram, YouTube, TikTok, Bluesky, Truth Social, Gab, Gettr, Substack, or Reddit account was found in the public capture. ([harvest](social-harvest.md#highest-visible-engagement))\n\nThe visible absences are important. Across the accessible reviewed set, no candidate-controlled item centered water policy, the Ogallala Aquifer, Medicaid expansion, rural hospitals, child care, foster care, broadband, roads and bridges, gun policy, or LGBTQ+ policy. Abortion, marijuana, judicial selection, immigration/ICE, and energy appeared in debate coverage and transcripts rather than as standalone campaign issue pages. ([harvest](social-harvest.md#visible-absences))\n\nMethodology: Public capture was conducted on May 11, 2026. Date range covered: June 9, 2025 to May 11, 2026 for campaign social presence and public campaign-cycle statements. Platforms surveyed: campaign website, Facebook, X/Twitter, personal X, LinkedIn, WinRed, YouTube, Instagram, Bluesky, TikTok, Truth Social, Gab, Gettr, Substack, Reddit, public news coverage, and indexed debate transcripts. Items examined: 17 accessible campaign/profile/public-record/news/transcript items and 0 verified repost inventories from platform-native feeds. Login-walled or script-blocked material was not counted as reviewed. We report patterns; we do not interpret intent.",
  "whereTheyWorship": "Eakins' campaign biography says she is a faithful member of River Community Church. The church website is https://www.rivercc.org/, and that is the clearest public church tie in the available record.",
  "church": {
    "name": "River Community Church",
    "url": "https://bottradionetwork.com/ministry/encounter-special-edition/2025-10-03-philip-sarnecki-on-leadership-and-the-kansas-governors-race/",
    "details": "The campaign bio says she is a \"devout Christian\" and a \"faithful member of River Community Church. Church URL verified in public web search: https://www.rivercc.org/."
  },
  "campaignFinance": {
    "totalRaised": "$1,142,759.55 (2025 year-end)",
    "narrative": "Eakins reported $1,142,759.55 in receipts, $116,268.91 in spending, and $1,026,490.64 cash on hand. The filing also shows a $1,000,000 personal loan made on December 29, 2025, which means the campaign's financial strength came primarily from her own money. That makes her one of the most heavily self-funded candidates in the race. The campaign has resources, but the public filing shows far less evidence of a broad outside donor base than of personal wealth underwriting the run.",
    "donors": [
      {
        "name": "Joy Eakins (self-loan)",
        "amount": "$1,000,000.00"
      },
      {
        "name": "Ryan Baty",
        "amount": "$1,041.02"
      },
      {
        "name": "Debby Ponton",
        "amount": "$364.36"
      },
      {
        "name": "Sandy Pickert",
        "amount": "$250.00"
      },
      {
        "name": "Walter Rosenbaum",
        "amount": "$260.25"
      },
      {
        "name": "Fred Postlewait",
        "amount": "$100.00"
      }
    ],
    "reportingPeriod": "2025 year-end (2026 election cycle)",
    "source": "Kansas ethics filing and public finance reporting"
  },
  "socialResearchNote": "Social research is included as observed public behavior, not as a proxy for belief. Platforms/sources checked: Campaign website, Facebook, X / Twitter, Personal X, LinkedIn, WinRed, YouTube, Instagram, Bluesky, TikTok, Truth Social, Gab, Gettr, Substack, Reddit, Public news, Debate transcripts. Harvest range: 2025-06-09 through 2026-05-11.",
  "sources": [
    {
      "id": "s-1",
      "tier": "secondary",
      "url": "https://www.kansascomeback.com/news/joy-eakins-discusses-her-run-for-the-governors-office",
      "title": "KAKE repost",
      "publisher": "Kansascomeback",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Joy Eakins."
      ]
    },
    {
      "id": "s-2",
      "tier": "social",
      "url": "https://www.linkedin.com/in/joyeakins/",
      "title": "Joy Eakins",
      "publisher": "Linkedin",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Joy Eakins.",
        "Observed public online activity mapped to School Choice / Parental Rights in Education."
      ]
    },
    {
      "id": "s-3",
      "tier": "secondary",
      "url": "https://www.kansascomeback.com/news/joy-eakins-announces-kansas-comeback-with-pete-mundo",
      "title": "source",
      "publisher": "Kansascomeback",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Joy Eakins."
      ]
    },
    {
      "id": "s-4",
      "tier": "secondary",
      "url": "https://www.ksn.com/news/your-local-election-hq/joy-eakins-announces-bid-for-kansas-governor/",
      "title": "KSN News",
      "publisher": "Ksn",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Joy Eakins."
      ]
    },
    {
      "id": "s-5",
      "tier": "secondary",
      "url": "https://www.kake.com/news/joy-eakins-discusses-her-run-for-the-governors-office/article_7947e2be-8651-4a43-963e-5ee064c2d6c5.html",
      "title": "KAKE: Eakins discusses run",
      "publisher": "Kake",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Joy Eakins."
      ]
    },
    {
      "id": "s-6",
      "tier": "secondary",
      "url": "https://www.wichitachamber.org/blog/2023/01/04/wichita-chamber-business-accelerator/faithful-investment-in-people-episode-104-wichita-chamber-business-accelerator-joy-eakins/",
      "title": "Wichita Chamber: Eakins podcast (Jan 2023)",
      "publisher": "Wichitachamber",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Joy Eakins."
      ]
    },
    {
      "id": "s-social-crossref-1",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/01/19/millionaire-candidates-for-kansas-governor-burnish-fundraising-with-personal-loans/",
      "title": "Kansas Reflector / Kansasreflector",
      "publisher": "Kansasreflector",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Abortion / Sanctity of Life.",
        "19, 2026 campaign-finance article: Eakins' $1 million self-loan and \"golden age\" frame under President Donald Trump. (source) 12. Kansas Reflector Jan. 30, 2026 debate article: GOP",
        "Observed public online activity mapped to Marijuana / Drug Policy."
      ]
    },
    {
      "id": "s-social-crossref-2",
      "tier": "secondary",
      "url": "https://www.kansascomeback.com/about",
      "title": "LinkedIn / Kansascomeback",
      "publisher": "Kansascomeback",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Abortion / Sanctity of Life.",
        "Eakins' biography and faith language are part of the public pitch but less frequent than education and taxes. Her About page says she has been married to Eric for 31 years, has a s",
        "Observed public online activity mapped to Religious Liberty."
      ]
    },
    {
      "id": "s-social-crossref-3",
      "tier": "secondary",
      "url": "https://www.kansascomeback.com/",
      "title": "X / Kansascomeback",
      "publisher": "Kansascomeback",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Religious Liberty.",
        "1. Campaign homepage/current metadata: official campaign site; title and description position Eakins as a conservative Kansas Comeback candidate focused on education reform, econom"
      ]
    },
    {
      "id": "s-social-crossref-4",
      "tier": "secondary",
      "url": "https://www.kansascomeback.com/education",
      "title": "kansascomeback.com / Kansascomeback",
      "publisher": "Kansascomeback",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to School Choice / Parental Rights in Education.",
        "The campaign site's Education page is the largest candidate-controlled issue page in the capture. It says Kansas needs a comeback in education, lists NAEP proficiency/ranking figur"
      ]
    },
    {
      "id": "s-social-crossref-5",
      "tier": "secondary",
      "url": "https://www.kansascomeback.com/news",
      "title": "KAKE / Kansascomeback",
      "publisher": "Kansascomeback",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to School Choice / Parental Rights in Education.",
        "Campaign News page: three media items dated June 17, June 18, and June 19, 2025. (source) 6. Campaign repost of KAKE interview: opportunity, brain drain, school outcomes, school ch"
      ]
    },
    {
      "id": "s-social-crossref-6",
      "tier": "social",
      "url": "https://www.facebook.com/JoyforKS/",
      "title": "Facebook / Facebook",
      "publisher": "Facebook",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Marijuana / Drug Policy.",
        "Facebook campaign page metadata: 780 likes, 130 talking about this, Joy Eakins for Governor page identity and description. (source) 9. X campaign profile metadata: @JoyforKS, creat"
      ]
    }
  ]
};

if (process.env.NODE_ENV !== "production") {
  const result = validateCandidateV2(JOY_EAKINS_V2);
  if (!result.ok) {
    // eslint-disable-next-line no-console
    console.error(
      "[joy-eakins.ts] validateCandidateV2 FAILED:\n" +
        result.errors.join("\n"),
    );
  }
}
