/* Auto-normalized with issue-mapped social/online cross-reference signals.
 * To refresh:
 *   node scripts/hydrate-v2-social-signals.mjs
 */

import type { CandidateFullV2 } from "@/data/types-v2";
import { validateCandidateV2 } from "@/data/types-v2";

export const STACY_ROGERS_V2: CandidateFullV2 = {
  "slug": "stacy-rogers",
  "name": "Stacy Rogers",
  "party": "R",
  "position": "Governor candidate",
  "electionSlug": "kansas-governor-2026",
  "incumbent": false,
  "occupation": "Businesswoman / Former School Board Member",
  "campaignWebsite": "https://stacyrogersforks.com/",
  "issues": [
    {
      "id": "i-abortion-sanctity-of-life-1",
      "title": "Abortion / Sanctity of Life",
      "stated": {
        "text": "Describes herself as pro-life. Her campaign lists \"Supporting families and protecting life\" with expanded resources for parents and affordable healthcare.",
        "sourceIds": [
          "s-11",
          "s-37",
          "s-38",
          "s-47",
          "s-70",
          "s-73"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Public web",
          "observation": "Several issue areas were not prominent in the accessible material reviewed. The capture set did not include detailed candidate-controlled positions on Medicaid expansion, marijuana legalization, LGBTQ+ policy, higher education, housing affordability, child care affordability, broadband, road funding, labor policy, state employee pay, or water/Ogallala policy. The campaign provides broad pro-life, pro-family,...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-6"
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
          "s-11",
          "s-17",
          "s-18",
          "s-19",
          "s-25",
          "s-38"
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
          "s-11",
          "s-17",
          "s-18",
          "s-19",
          "s-25",
          "s-38"
        ]
      },
      "actions": [],
      "socialSignals": []
    },
    {
      "id": "i-guns-second-amendment-4",
      "title": "Guns / Second Amendment",
      "stated": {
        "text": "No candidate-controlled statement was found in the reviewed public record for this issue. This page therefore does not infer a position from party label, faith affiliation, follows, likes, comments, or associations.",
        "sourceIds": [
          "s-11",
          "s-17",
          "s-18",
          "s-19",
          "s-25",
          "s-38"
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
          "s-11",
          "s-17",
          "s-18",
          "s-19",
          "s-25",
          "s-38"
        ]
      },
      "actions": [],
      "socialSignals": []
    },
    {
      "id": "i-school-choice-parental-rights-in-education-6",
      "title": "School Choice / Parental Rights in Education",
      "stated": {
        "text": "Emphasi",
        "sourceIds": [
          "s-46",
          "s-64",
          "s-173",
          "s-174",
          "s-175",
          "s-199"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "TikTok",
          "observation": "The richest long-form candidate voice came from podcast appearances rather than platform-native posts. On the Billy Dees Podcast, Rogers said she is on \"Snapchat,\" TikTok, Rumble, YouTube, Truth Social, Facebook, Instagram, LinkedIn, and her website, and said she personally answers text messages, Facebook messages, and email. The same transcript covered special interests, fentanyl and human trafficking,...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "i-school-choice-parental-rights-in-education-6"
        },
        {
          "id": "ss-crossref-3",
          "platform": "stacyrogersforks.com",
          "observation": "Campaign Stacy's Team page, captured 2026-05-11. Key signals: Rogers biography; Lt. Gov. running mate Michael Smith; campaign manager Amanda Pearce; treasurer Archie Macias and Kansans for Life board history. (source) 4. The Rogers Report page, captured 2026-05-11. Key signals: official campaign update/video/policy hub, \"straight talk\" frame, and a visible Business & Beards podcast heading. (source) 5. Campaign...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-2"
          ],
          "mappedToIssueId": "i-school-choice-parental-rights-in-education-6"
        },
        {
          "id": "ss-crossref-5",
          "platform": "iheart.com",
          "observation": "Billy Dees Podcast episode, June 12/13, 2025. Key signals: candidate says she is accessible across many social platforms; themes include people lacking a voice, special interests, Kansas aerospace/agriculture, fentanyl and human trafficking, foster care, education, term limits, and judicial selection. (source) 14. Politics Not Included podcast listing, March 10, 2026.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "i-school-choice-parental-rights-in-education-6"
        }
      ]
    }
  ],
  "whoTheyAre": "Stacy Rogers is a Wichita business owner running in the 2026 Republican primary for governor. Public campaign materials present her as a political newcomer, a mother of three sons, and a candidate shaped by family experience rather than time in the Legislature. Two of her sons have learning challenges, and that has become part of how she talks about education, parental authority, and state policy.\n\nRogers built her campaign around a straight-talk, outsider image. She was one of the earliest Republicans to enter the race, and she has tried to frame that early start as proof that she is less cautious and less consultant-driven than better-known candidates in the field. Her public profile is much thinner than candidates such as Ty Masterson, Jeff Colyer, or Vicki Schmidt, but her campaign has worked to make family life, small business, and frustration with politics-as-usual the center of her biography.",
  "recordSummary": "Rogers does not have a legislative voting record or a long history in statewide office, so her record is mostly the campaign itself and the themes she has emphasi",
  "ownWordsNarrative": "_A summary of what Stacy Rogers has publicly said, posted, linked, and amplified across her campaign site, campaign social directory, LinkedIn, X, Facebook, Instagram, YouTube, TikTok, Truth Social references, podcast appearances, indexed public profile metadata, and local news coverage. Drawn from public captures and indexed sources from November 6, 2024 through May 11, 2026. We report patterns; we do not interpret intent._\n\nRogers' public campaign identity is built around outsider, grassroots, and \"people over politics\" messaging. Her homepage opens with \"People Over Politics. Kansas First.\" and says she wants a stronger future for every Kansas community. The campaign describes the Rogers-Smith ticket as first to formally enter the 2026 governor's race and frames that as proof of readiness to lead, listen, and serve before better-known candidates moved. ([source](https://stacyrogersforks.com/))\n\nThe strongest recurring theme is that Kansans need a voice against insiders and special interests. In the campaign's announcement language, Rogers says she has not been afraid to \"step out, speak up, and lead,\" and that Kansas deserves leaders who stand with people, not special interests. On the Billy Dees Podcast, she said many Kansans feel discounted and unrepresented, and she connected that frustration to career politicians, lobbyists, and special-interest influence. ([campaign source](https://stacyrogersforks.com/), [podcast source](https://www.iheart.com/podcast/966-billy-dees-podcast-28826157/episode/stacy-rogers-candidate-for-governor-280748522/))\n\nThe Meet Stacy page gives her most explicit candidate-controlled policy list. Rogers says Kansans are asking why schools are struggling, property taxes keep rising, and policies benefit special interests instead of local families. Her listed priorities include sunsetting STAR bonds, returning ALBTR cigarette and alcohol tax revenue to Kansas counties, protecting Kansans from predatory energy projects, encouraging homegrown business development, and putting service above politics. ([source](https://stacyrogersforks.com/meet-stacy))\n\nHer values list is broad and conservative rather than technocratic. The campaign describes Rogers as pro-Second Amendment, pro-business, pro-veteran, pro-family, pro-law enforcement, a supporter of term limits, and a defender of natural and constitutional rights. It also presents her as a lifelong Kansan, proud Republican, business owner, mother, and non-career politician. ([source](https://stacyrogersforks.com/meet-stacy))\n\nEconomic messaging usually comes through small-business and local-control language. The homepage says she wants policies that uplift hardworking Kansans and protect life, while the Meet Stacy page says she supports fair wages, job training, and incentives for local and small businesses. Her site also emphasizes rural Kansas, agriculture, and homegrown business over investor-driven development. ([homepage source](https://stacyrogersforks.com/), [Meet Stacy source](https://stacyrogersforks.com/meet-stacy))\n\nEducation and family experience are another recurring signal. Podcast descriptions and campaign material present Rogers as a mother of three and former homeschool parent with firsthand experience around children with learning challenges. The Billy Dees Podcast listing says she is especially focused on students with learning challenges and believes every student should have resources and support to thrive. ([source](https://www.iheart.com/podcast/966-billy-dees-podcast-28826157/episode/stacy-rogers-candidate-for-governor-280748522/))\n\nPublic safety and vulnerable communities come through most clearly in long-form interviews. In the Billy Dees transcript, Rogers identified fentanyl and human trafficking as Kansas problems, tying trafficking to the I-70 and I-35 corridors. The same episode's public chapter markers identify discussions of drug and human trafficking, vulnerable communities, foster care, education failures, term limits, and judicial power. ([source](https://www.iheart.com/podcast/966-billy-dees-podcast-28826157/episode/stacy-rogers-candidate-for-governor-280748522/))\n\nJudicial selection and term limits are prominent in her longer-form political argument. Near the end of the Billy Dees interview, Rogers argued that ordinary Kansas voters do not have a real say in selecting Kansas Supreme Court justices, distinguished retention votes from selection power, and said the 2026 judicial-selection vote would put power back in voters' hands. She also said she supports term limits for state and federal legislators. ([source](https://www.iheart.com/podcast/966-billy-dees-podcast-28826157/episode/stacy-rogers-candidate-for-governor-280748522/))\n\nHer social-media posture is unusually broad for a lower-funded statewide candidate. The campaign Linktree links donation, website, TikTok, Facebook, LinkedIn, and X. The campaign website lists Truth Social `@StacyForThePeople`, Instagram `@StacyforKansasGovernor`, YouTube `@StacyRogersForThePeople`, and Facebook/Twitter `@StacyRogersKS`. In the Billy Dees transcript, Rogers said people could find her on Snapchat, TikTok, Rumble, YouTube, Truth Social, Facebook, Instagram, LinkedIn, and her website. ([Linktree source](https://linktr.ee/stacyrogersforkansas), [campaign source](https://stacyrogersforks.com/meet-stacy), [podcast source](https://www.iheart.com/podcast/966-billy-dees-podcast-28826157/episode/stacy-rogers-candidate-for-governor-280748522/))\n\nHer direct-contact message is part of the campaign brand. In the Billy Dees transcript, she said she personally answers text messages, Facebook messages, and email. The Politics Not Included podcast listing similarly frames her campaign around traveling Kansas, grassroots support, social-media engagement, handling supporters and critics, and the humanity of candidates and voters. ([Billy Dees source](https://www.iheart.com/podcast/966-billy-dees-podcast-28826157/episode/stacy-rogers-candidate-for-governor-280748522/), [Politics Not Included source](https://podcast.app/politics-not-included-p7151166))\n\nThe highest visible social-presence metric in the public capture was LinkedIn, where the campaign profile listed roughly 2K followers and 500+ connections. Its public activity snippets included volunteer recruitment through a Facebook chat, a campaign share saying she \"cannot be bought,\" and a county-travel schedule. Indexed public sources also showed `@stacyrogersforthepeople` with 718 TikTok followers and `@StacyRogersForThePeople` with 66 YouTube subscribers; indexed X snippets showed [@stacyrogersks](https://x.com/stacyrogersks) in the mid-hundreds of followers. ([LinkedIn source](https://www.linkedin.com/in/stacy-rogers-for-kansas), [indexed social source](https://www.idcrawl.com/stacy-rogers), [X indexed source](https://twstalker.com/Geebu55288))\n\nRogers' business identity remains mixed into her public footprint. Local indexed social mirrors show Mary Kay, Eberly Farm, and Kids Closet Connection posts adjacent to campaign links, including a Nov. 7, 2024 post sharing the campaign Linktree. The campaign itself leans into small-business credibility rather than presenting a long government record. ([source](https://www.beautynailhairsalons.com/US/Wichita/1661097797458013/Stacy-Rogers%2C-Mary-Kay-Independent-Sales-Director))\n\nLocal news coverage echoed her launch framing. KWCH reported that Rogers was first to announce in November 2024 and quoted her saying Kansas needs leadership that listens and acts to protect rights, improve schools, support local businesses, and restore values. The article identified her as a Wichita business owner and advocate for constitutional freedoms. ([source](https://www.kwch.com/2025/05/14/gop-field-already-getting-crowded-bid-flip-kansas-governors-office/))\n\nSeveral issue areas were not prominent in the accessible material reviewed. The capture set did not include detailed candidate-controlled positions on Medicaid expansion, marijuana legalization, LGBTQ+ policy, higher education, housing affordability, child care affordability, broadband, road funding, labor policy, state employee pay, or water/Ogallala policy. The campaign provides broad pro-life, pro-family, constitutional-rights, rural, agriculture, and public-safety language, but detailed policy papers were not visible in the reviewed pages.\n\nMethodology: Public capture was conducted on May 11, 2026. Date range covered: Nov. 6, 2024 to May 11, 2026. Platforms surveyed: campaign website, Linktree, Facebook, X, LinkedIn, Instagram, YouTube, TikTok, Truth Social, Rumble, Snapchat, Bluesky, Threads, Gab, Gettr, Substack, Reddit, public podcast platforms, indexed public profile sources, and local news. Items examined: 16 accessible campaign/profile/public-record/news/podcast items and 0 complete verified repost inventories from platform-native feeds. Login-walled, script-blocked, temporarily blocked, or otherwise inaccessible feeds were not counted as post-level reviewed. Engagement was reported only when visible in public metadata or indexed public snippets. We report patterns; we do not interpret intent.",
  "whereTheyWorship": "Public sources do not identify a current church affiliation. Rogers uses Christian language in her public presentation, including describing herself as a \"Child of God,\" but the available record does not name a congregation, denomination, or church website.",
  "campaignFinance": {
    "totalRaised": "$24,862.65 (2025 year-end)",
    "narrative": "Rogers' 2025 year-end filing showed roughly $25,542.98 raised and $14,470.23 cash on hand. That is enough to show a functioning campaign committee, but it leaves her far behind the better-funded candidates in the Republican field. The public money trail suggests a modest campaign still trying to build donor support rather than a statewide operation with major institutional backing. No large self-funding pattern surfaced in the reporting reviewed for this profile.",
    "donors": [
      {
        "name": "James Korf Jr.",
        "amount": "$200.00"
      },
      {
        "name": "Shae's Point of View (in-kind video services)",
        "amount": "$1,200.00"
      },
      {
        "name": "Stacy Rogers loan to campaign",
        "amount": "$2,397.79"
      },
      {
        "name": "Itemized receipts",
        "amount": "$20,989.36"
      },
      {
        "name": "Unitemized contributions",
        "amount": "$3,873.29"
      }
    ],
    "reportingPeriod": "2025 year-end (2026 election cycle)",
    "source": "Kansas ethics filing and public finance reporting"
  },
  "socialResearchNote": "Social research is included as observed public behavior, not as a proxy for belief. Platforms/sources checked: Campaign website, Linktree, Facebook, X, LinkedIn, Instagram, YouTube, TikTok, Truth Social, Rumble, Snapchat, Bluesky, Threads, Gab, Gettr, Substack, Reddit, Public podcast platforms, Local news. Harvest range: 2024-11-06 through 2026-05-11.",
  "sources": [
    {
      "id": "s-1",
      "tier": "secondary",
      "url": "https://stacyrogersforks.com/",
      "title": "Stacyrogersforks.Com",
      "publisher": "stacyrogersforks.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-2",
      "tier": "primary",
      "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/SWLinks2026EC.htm",
      "title": "Kansas.Gov",
      "publisher": "kansas.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-3",
      "tier": "primary",
      "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/202601/SW01SR_202601.pdf",
      "title": "Kansas.Gov",
      "publisher": "kansas.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-4",
      "tier": "secondary",
      "url": "https://ethanforkansas.com",
      "title": "Ethanforkansas.Com",
      "publisher": "ethanforkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-5",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/03/08/democrats-in-governors-race-use-debate-stage-to-spotlight-affordability-health-care-rural-kansas/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-6",
      "tier": "social",
      "url": "https://www.facebook.com/ethanforkansas",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-7",
      "tier": "social",
      "url": "https://www.instagram.com/ethanforkansas/",
      "title": "Instagram.Com",
      "publisher": "instagram.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-8",
      "tier": "social",
      "url": "https://www.linkedin.com/in/ethancorson/",
      "title": "Linkedin.Com",
      "publisher": "linkedin.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-9",
      "tier": "secondary",
      "url": "https://cindyforkansas.com",
      "title": "Cindyforkansas.Com",
      "publisher": "cindyforkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-10",
      "tier": "secondary",
      "url": "https://johnsoncountypost.com/2023/03/13/capitol-update-sen-cindy-holscher-voucher-bill-196217/",
      "title": "Johnsoncountypost.Com",
      "publisher": "johnsoncountypost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-11",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/08/01/kansas-governor-candidate-cindy-holscher-objects-to-alleged-pressure-campaign-by-kellys-staff/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-12",
      "tier": "social",
      "url": "https://www.facebook.com/cindyforkansas/",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-13",
      "tier": "secondary",
      "url": "https://www.cindyforsenateks.com/",
      "title": "Cindyforsenateks.Com",
      "publisher": "cindyforsenateks.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-14",
      "tier": "secondary",
      "url": "https://www.tuley4gov2026.com",
      "title": "Tuley4gov2026.Com",
      "publisher": "tuley4gov2026.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-15",
      "tier": "secondary",
      "url": "https://www.wibw.com/2025/07/28/democrat-marty-tuley-announces-candidacy-2026-kansas-governor/",
      "title": "Wibw.Com",
      "publisher": "wibw.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-16",
      "tier": "secondary",
      "url": "https://oharaforkansas.com",
      "title": "Oharaforkansas.Com",
      "publisher": "oharaforkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-17",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/11/28/its-an-honesty-dozens-of-columns-voice-the-politics-of-one-candidate-for-kansas-governor/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-18",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/02/16/kansas-gop-candidate-for-governor-says-state-needs-a-true-conservative/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-19",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/01/30/six-kansas-gop-candidates-for-governor-toss-haymakers-in-first-debate-find-unity-on-key-issues/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-20",
      "tier": "social",
      "url": "https://www.facebook.com/oharaforjoco/",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-21",
      "tier": "secondary",
      "url": "https://stacyrogersforks.com",
      "title": "Stacyrogersforks.Com",
      "publisher": "stacyrogersforks.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-22",
      "tier": "social",
      "url": "https://www.facebook.com/StacyHepnerRogers/",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-23",
      "tier": "social",
      "url": "https://www.linkedin.com/in/stacy-rogers-for-kansas/",
      "title": "Linkedin.Com",
      "publisher": "linkedin.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-24",
      "tier": "secondary",
      "url": "https://www.kansascomeback.com",
      "title": "Kansascomeback.Com",
      "publisher": "kansascomeback.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-25",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/01/19/millionaire-candidates-for-kansas-governor-burnish-fundraising-with-personal-loans/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-26",
      "tier": "secondary",
      "url": "https://www.ksn.com/news/your-local-election-hq/joy-eakins-announces-bid-for-kansas-governor/",
      "title": "Ksn.Com",
      "publisher": "ksn.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-27",
      "tier": "social",
      "url": "https://www.facebook.com/JoyforKS/",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-28",
      "tier": "social",
      "url": "https://x.com/JoyforKS",
      "title": "X.Com",
      "publisher": "x.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-29",
      "tier": "social",
      "url": "https://www.linkedin.com/in/joyeakins/",
      "title": "Linkedin.Com",
      "publisher": "linkedin.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-30",
      "tier": "secondary",
      "url": "https://philipsarnecki.org",
      "title": "Philipsarnecki.Org",
      "publisher": "philipsarnecki.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-31",
      "tier": "social",
      "url": "https://www.facebook.com/p/Philip-Sarnecki-For-Governor-61579950041528/",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-32",
      "tier": "social",
      "url": "https://www.linkedin.com/in/philipsarnecki/",
      "title": "Linkedin.Com",
      "publisher": "linkedin.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-33",
      "tier": "secondary",
      "url": "https://www.imdb.com/name/nm3671154/",
      "title": "Imdb.Com",
      "publisher": "imdb.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-34",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/07/22/kansas-sen-ethan-corson-enters-race-for-democratic-partys-nomination-for-governor/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-35",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/11/17/gov-laura-kelly-offers-formal-endorsement-of-democratic-sen-ethan-corson-for-governor/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-36",
      "tier": "secondary",
      "url": "https://kansasreflector.com/briefs/former-kansas-gov-kathleen-sebelius-endorses-sen-ethan-corson-in-democratic-race-for-governor/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-37",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/01/09/latest-kansas-campaign-finance-reports-schwab-takes-in-1-3m-corson-receives-900k/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-38",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/11/25/kansas-democratic-candidates-for-governor-shaping-2026-campaigns-to-entice-rural-voters/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-39",
      "tier": "secondary",
      "url": "https://www.kcjc.com/index.php/current-news/latest-news/5736-ethan-corson-announces-candidacy-for-kansas-senate-district-7",
      "title": "Kcjc.Com",
      "publisher": "kcjc.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-40",
      "tier": "secondary",
      "url": "https://en.wikipedia.org/wiki/Ethan_Corson",
      "title": "En.Wikipedia.Org",
      "publisher": "en.wikipedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-41",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Ethan_Corson",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-42",
      "tier": "secondary",
      "url": "https://www.kssenatedems.org/ethan-corson",
      "title": "Kssenatedems.Org",
      "publisher": "kssenatedems.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-43",
      "tier": "secondary",
      "url": "https://doleinstitute.org/about/fellows/ethan-corson/",
      "title": "Doleinstitute.Org",
      "publisher": "doleinstitute.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-44",
      "tier": "secondary",
      "url": "https://johnsoncountypost.com/2025/07/22/ethan-corson-governor-264717/",
      "title": "Johnsoncountypost.Com",
      "publisher": "johnsoncountypost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-45",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li/b2025_26/members/sen_corson_ethan_1/",
      "title": "Kslegislature.Gov",
      "publisher": "kslegislature.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-46",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/06/12/democrat-steps-forward-in-race-for-kansas-governor-focuses-on-schools-and-kitchen-table-issues/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-47",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/10/06/kansas-senator-leans-into-bipartisan-allure-in-campaign-for-kansas-governor/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-48",
      "tier": "secondary",
      "url": "https://en.wikipedia.org/wiki/Cindy_Holscher",
      "title": "En.Wikipedia.Org",
      "publisher": "en.wikipedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-49",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Cindy_Holscher",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-50",
      "tier": "secondary",
      "url": "https://cindyforkansas.com/endorsements/",
      "title": "Cindyforkansas.Com",
      "publisher": "cindyforkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-51",
      "tier": "secondary",
      "url": "https://www.amazon.com/Get-Off-Your-Ass-Definitive/dp/1591201292",
      "title": "Amazon.Com",
      "publisher": "amazon.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-52",
      "tier": "secondary",
      "url": "https://www.amazon.com/Busting-Your-Butt-Gut-Minimizing/dp/1591202086",
      "title": "Amazon.Com",
      "publisher": "amazon.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-53",
      "tier": "secondary",
      "url": "https://www.readhowyouwant.com/authors/details/Marty-Tuley/6407",
      "title": "Readhowyouwant.Com",
      "publisher": "readhowyouwant.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-54",
      "tier": "secondary",
      "url": "https://www2.ljworld.com/news/2003/mar/27/legal_battles_weigh/",
      "title": "Www2.Ljworld.Com",
      "publisher": "www2.ljworld.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-55",
      "tier": "secondary",
      "url": "https://openpowerlifting.org/u/martytuley",
      "title": "Openpowerlifting.Org",
      "publisher": "openpowerlifting.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-56",
      "tier": "secondary",
      "url": "https://johnsoncountypost.com/2025/03/10/charlotte-ohara-kansas-governor-bid-254803/",
      "title": "Johnsoncountypost.Com",
      "publisher": "johnsoncountypost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-57",
      "tier": "secondary",
      "url": "https://johnsoncountypost.com/2024/11/05/county-commission-races-2024-general-246243/",
      "title": "Johnsoncountypost.Com",
      "publisher": "johnsoncountypost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-58",
      "tier": "secondary",
      "url": "https://en.wikipedia.org/wiki/Charlotte_O'Hara",
      "title": "En.Wikipedia.Org",
      "publisher": "en.wikipedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-59",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Charlotte_O'Hara",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-60",
      "tier": "secondary",
      "url": "https://www.kake.com/news/wichitan-stacy-rogers-announces-candidacy-for-kansas-governor/article_8298d24e-ea47-11ef-aa00-ab042b86252d.html",
      "title": "Kake.Com",
      "publisher": "kake.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-61",
      "tier": "secondary",
      "url": "https://www.ksn.com/news/your-local-election-hq/republican-woman-wants-to-be-next-kansas-governor/",
      "title": "Ksn.Com",
      "publisher": "ksn.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-62",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Stacy_Rogers",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-63",
      "tier": "secondary",
      "url": "https://www.kcur.org/politics-elections-and-government/2025-07-24/kansas-governor-race-2026-election-candidates",
      "title": "Kcur.Org",
      "publisher": "kcur.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-64",
      "tier": "secondary",
      "url": "https://www.schooleymitchell.com/news/rholter/feature-story-eberly-farm-and-kids-closet-connection/",
      "title": "Schooleymitchell.Com",
      "publisher": "schooleymitchell.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-65",
      "tier": "secondary",
      "url": "https://rileyks.gop/2025/01/23/meet-gubernatorial-candidate-stacy-rogers-in-randolph/",
      "title": "Rileyks.Gop",
      "publisher": "rileyks.gop",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-66",
      "tier": "secondary",
      "url": "https://www.kake.com/news/joy-eakins-discusses-her-run-for-the-governors-office/article_7947e2be-8651-4a43-963e-5ee064c2d6c5.html",
      "title": "Kake.Com",
      "publisher": "kake.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-67",
      "tier": "secondary",
      "url": "https://www.wichitachamber.org/blog/2023/01/04/wichita-chamber-business-accelerator/faithful-investment-in-people-episode-104-wichita-chamber-business-accelerator-joy-eakins/",
      "title": "Wichitachamber.Org",
      "publisher": "wichitachamber.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-68",
      "tier": "secondary",
      "url": "https://cornerstonedata.com/about-us/",
      "title": "Cornerstonedata.Com",
      "publisher": "cornerstonedata.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-69",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Joy_Eakins",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-70",
      "tier": "secondary",
      "url": "https://kansasreflector.com/briefs/johnson-county-businessman-launches-campaign-to-win-gop-nomination-for-governor/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-71",
      "tier": "secondary",
      "url": "https://wltreport.com/2026/03/18/meet-republican-businessman-outsider-running-kansas-governor-gaining/",
      "title": "Wltreport.Com",
      "publisher": "wltreport.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-72",
      "tier": "secondary",
      "url": "https://trendingpoliticsnews.com/new-frontrunner-emerges-in-key-race-as-gop-candidate-shatters-fundraising-records-mace/",
      "title": "Trendingpoliticsnews.Com",
      "publisher": "trendingpoliticsnews.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-73",
      "tier": "secondary",
      "url": "https://www.wibw.com/2025/09/02/kansas-businessman-announces-campaign-governor/",
      "title": "Wibw.Com",
      "publisher": "wibw.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-74",
      "tier": "secondary",
      "url": "https://www.noln.net/site-placement/latest-news/news/55314781/strickland-brothers-10-minute-oil-change-franchise-owner-running-for-kansas-governor",
      "title": "Noln.Net",
      "publisher": "noln.net",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-75",
      "tier": "secondary",
      "url": "https://bottradionetwork.com/ministry/encounter-special-edition/2025-10-03-philip-sarnecki-on-leadership-and-the-kansas-governors-race/",
      "title": "Bottradionetwork.Com",
      "publisher": "bottradionetwork.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-76",
      "tier": "secondary",
      "url": "https://www.realmediakc.com/podcast/philip-sarnecki-for-kansas-governor-faith-business-outsider-vision/",
      "title": "Realmediakc.Com",
      "publisher": "realmediakc.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-77",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas_gubernatorial_and_lieutenant_gubernatorial_election,_2026",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-78",
      "tier": "secondary",
      "url": "https://en.wikipedia.org/wiki/2026_Kansas_gubernatorial_election",
      "title": "En.Wikipedia.Org",
      "publisher": "en.wikipedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-79",
      "tier": "secondary",
      "url": "https://www.kansascatholic.org/current-news/election-2026",
      "title": "Kansascatholic.Org",
      "publisher": "kansascatholic.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-80",
      "tier": "secondary",
      "url": "https://jeffcolyer.com/",
      "title": "Jeffcolyer.Com",
      "publisher": "jeffcolyer.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-81",
      "tier": "secondary",
      "url": "https://www.colyerforgovernor.com/",
      "title": "Colyerforgovernor.Com",
      "publisher": "colyerforgovernor.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-82",
      "tier": "social",
      "url": "https://x.com/DrJeffColyer",
      "title": "X.Com",
      "publisher": "x.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-83",
      "tier": "social",
      "url": "https://x.com/govjeffcolyer",
      "title": "X.Com",
      "publisher": "x.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-84",
      "tier": "social",
      "url": "https://www.facebook.com/JeffColyerMD/",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-85",
      "tier": "social",
      "url": "https://www.linkedin.com/in/jeff-colyer-6894363/",
      "title": "Linkedin.Com",
      "publisher": "linkedin.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-86",
      "tier": "secondary",
      "url": "https://en.wikipedia.org/wiki/Jeff_Colyer",
      "title": "En.Wikipedia.Org",
      "publisher": "en.wikipedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-87",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Jeff_Colyer",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-88",
      "tier": "primary",
      "url": "https://www.kansashistory.gov/kansapedia/jeff-colyer/20011",
      "title": "Kansashistory.Gov",
      "publisher": "kansashistory.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-89",
      "tier": "secondary",
      "url": "https://www.nga.org/governor/jeff-colyer/",
      "title": "Nga.Org",
      "publisher": "nga.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-90",
      "tier": "secondary",
      "url": "https://politics.georgetown.edu/profile/jeff-colyer/",
      "title": "Politics.Georgetown.Edu",
      "publisher": "politics.georgetown.edu",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-91",
      "tier": "secondary",
      "url": "https://www.jeffcolyer.com/about/",
      "title": "Jeffcolyer.Com",
      "publisher": "jeffcolyer.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-92",
      "tier": "secondary",
      "url": "https://www.jeffcolyer.com/about-gov/",
      "title": "Jeffcolyer.Com",
      "publisher": "jeffcolyer.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-93",
      "tier": "secondary",
      "url": "https://jeffcolyer.com/announcements.html",
      "title": "Jeffcolyer.Com",
      "publisher": "jeffcolyer.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-94",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/02/23/republican-candidate-for-kansas-governor-offering-voters-a-prescription-for-change/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-95",
      "tier": "secondary",
      "url": "https://kansasreflector.com/briefs/former-gov-jeff-colyer-maneuvers-closer-to-2026-gop-campaign-for-kansas-governor/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-96",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2023/11/25/former-kansas-gov-jeff-colyer-endorses-trump-in-2024-republican-presidential-campaign/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-97",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2021/08/30/jeff-colyer-diagnosed-with-prostate-cancer-ends-campaign-for-kansas-governor/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-98",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/11/07/can-former-kansas-gov-jeff-colyer-define-wokeism-consider-the-oxpecker-bird/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-99",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2021/07/12/colyers-narrow-miss-in-2018-fueling-resurgent-gop-campaign-for-governor/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-100",
      "tier": "secondary",
      "url": "https://www.kcur.org/politics-elections-and-government/2025-05-16/former-kansas-governor-jeff-colyer-jumps-into-2026-race",
      "title": "Kcur.Org",
      "publisher": "kcur.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-101",
      "tier": "secondary",
      "url": "https://www.kcur.org/news/2021-08-30/the-kansas-a-g-s-path-to-governor-gets-easier-after-his-opponent-endorses-him",
      "title": "Kcur.Org",
      "publisher": "kcur.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-102",
      "tier": "secondary",
      "url": "https://www.kcur.org/post/colyers-first-executive-order-kansas-governor-fight-sexual-harassment",
      "title": "Kcur.Org",
      "publisher": "kcur.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-103",
      "tier": "secondary",
      "url": "https://www.kcur.org/politics-elections-and-government/2018-05-18/faith-based-adoption-law-signed-quickly-becoming-kansas-campaign-fodder",
      "title": "Kcur.Org",
      "publisher": "kcur.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-104",
      "tier": "secondary",
      "url": "https://www.kake.com/home/jeff-colyer-launches-kansas-governor-bid-after-being-inspired-by-president-trumps-campaign/article_a6636e42-0936-41ef-8e13-56a9dc7a9300.html",
      "title": "Kake.Com",
      "publisher": "kake.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-105",
      "tier": "secondary",
      "url": "https://www.ksnt.com/capitol-bureau/dr-jeff-colyer-announces-bid-for-kansas-governor/",
      "title": "Ksnt.Com",
      "publisher": "ksnt.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-106",
      "tier": "secondary",
      "url": "https://www.kshb.com/news/local-news/former-kansas-governor-volunteers-on-medical-mission-in-ukraine",
      "title": "Kshb.Com",
      "publisher": "kshb.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-107",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/af650bef-0c19-4f73-b418-bded940b0b7a",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-108",
      "tier": "secondary",
      "url": "https://salinapost.com/posts/68a90d33-8d9a-49ec-abbb-9190b4f87f7e",
      "title": "Salinapost.Com",
      "publisher": "salinapost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-109",
      "tier": "secondary",
      "url": "https://salinapost.com/posts/9f9b260b-5c26-4cd6-a81c-212904371850",
      "title": "Salinapost.Com",
      "publisher": "salinapost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-110",
      "tier": "secondary",
      "url": "https://www.nbcnews.com/politics/elections/kansas-governor-colyer-concedes-gop-primary-secretary-state-kobach-n900776",
      "title": "Nbcnews.Com",
      "publisher": "nbcnews.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-111",
      "tier": "secondary",
      "url": "https://www.cnn.com/2018/08/14/politics/kris-kobach-wins-kansas-republican-governor-primary",
      "title": "Cnn.Com",
      "publisher": "cnn.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-112",
      "tier": "secondary",
      "url": "https://www.npr.org/2018/08/14/638703832/trump-ally-kris-kobach-wins-primary-for-kansas-governor-as-gop-incumbent-concede",
      "title": "Npr.Org",
      "publisher": "npr.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-113",
      "tier": "secondary",
      "url": "https://www.npr.org/2018/01/25/580577126/kansas-lt-gov-will-takeover-as-brownback-leaves-for-ambassadorship",
      "title": "Npr.Org",
      "publisher": "npr.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-114",
      "tier": "secondary",
      "url": "https://www.pbs.org/newshour/politics/new-kansas-governor-to-require-annual-sexual-harassment-training",
      "title": "Pbs.Org",
      "publisher": "pbs.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-115",
      "tier": "secondary",
      "url": "https://thehill.com/homenews/campaign/570029-colyer-ends-campaign-for-kansas-governor-following-prostate-cancer/",
      "title": "Thehill.Com",
      "publisher": "thehill.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-116",
      "tier": "secondary",
      "url": "https://smartpolitics.lib.umn.edu/2025/05/14/jeff-colyer-and-a-review-of-kansas-gubernatorial-comeback-bids/",
      "title": "Smartpolitics.Lib.Umn.Edu",
      "publisher": "smartpolitics.lib.umn.edu",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-117",
      "tier": "secondary",
      "url": "https://www.cgscfoundation.org/person-of-the-month-may-2020/",
      "title": "Cgscfoundation.Org",
      "publisher": "cgscfoundation.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-118",
      "tier": "secondary",
      "url": "https://jag.org/dipl-team-member/jeff-colyer/",
      "title": "Jag.Org",
      "publisher": "jag.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-119",
      "tier": "primary",
      "url": "https://docs.house.gov/meetings/GO/GO28/20130918/101319/HHRG-113-GO28-Bio-ColyerJ-20130918.pdf",
      "title": "Docs.House.Gov",
      "publisher": "docs.house.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-120",
      "tier": "secondary",
      "url": "https://www.kscbnews.net/jeff-colyer-m-d-sworn-in-as-47th-governor-of-the-state-of-kansas/",
      "title": "Kscbnews.Net",
      "publisher": "kscbnews.net",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-121",
      "tier": "secondary",
      "url": "https://www.nga.org/governor-spouse/ruth-gutierrez-colyer/",
      "title": "Nga.Org",
      "publisher": "nga.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-122",
      "tier": "secondary",
      "url": "https://justfacts.votesmart.org/candidate/biography/34449/jeff-colyer",
      "title": "Justfacts.Votesmart.Org",
      "publisher": "justfacts.votesmart.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-123",
      "tier": "secondary",
      "url": "https://www.ontheissues.org/Jeff_Colyer.htm",
      "title": "Ontheissues.Org",
      "publisher": "ontheissues.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-124",
      "tier": "secondary",
      "url": "https://sanokc.com/provider/dr-colyer/",
      "title": "Sanokc.Com",
      "publisher": "sanokc.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-125",
      "tier": "secondary",
      "url": "https://www.renaissanceplasticsurgicalarts.com/",
      "title": "Renaissanceplasticsurgicalarts.Com",
      "publisher": "renaissanceplasticsurgicalarts.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-126",
      "tier": "secondary",
      "url": "https://www.healthgrades.com/physician/dr-jeffrey-colyer-xpdcb",
      "title": "Healthgrades.Com",
      "publisher": "healthgrades.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-127",
      "tier": "secondary",
      "url": "https://www.nkchealth.org/provider/jeffrey-w-colyer-plastic-surgery",
      "title": "Nkchealth.Org",
      "publisher": "nkchealth.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-128",
      "tier": "secondary",
      "url": "https://doctor.webmd.com/doctor/jeffrey-colyer-31dcc3a2-b552-47fe-acf3-0ec6615c7ca3-overview",
      "title": "Doctor.Webmd.Com",
      "publisher": "doctor.webmd.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-129",
      "tier": "secondary",
      "url": "https://internationalmedicalcorps.org/press-release/lt-governor-to-climb-mt-kilimanjaro-in-support-of-international-medical-corps-humanitarian-relief-efforts/",
      "title": "Internationalmedicalcorps.Org",
      "publisher": "internationalmedicalcorps.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-130",
      "tier": "secondary",
      "url": "https://www.findagrave.com/memorial/142168654/james-daniel-colyer",
      "title": "Findagrave.Com",
      "publisher": "findagrave.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-131",
      "tier": "secondary",
      "url": "https://www.legacy.com/obituaries/kansascity/obituary.aspx?pid=174049747",
      "title": "Legacy.Com",
      "publisher": "legacy.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-132",
      "tier": "primary",
      "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/202601/SW01JC_202601.pdf",
      "title": "Kansas.Gov",
      "publisher": "kansas.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-133",
      "tier": "secondary",
      "url": "https://sunflowerstatejournal.com/colyer-schwab-most-recognized-republicans-in-gubernatorial-field-survey-shows/",
      "title": "Sunflowerstatejournal.Com",
      "publisher": "sunflowerstatejournal.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-134",
      "tier": "secondary",
      "url": "https://en.wikipedia.org/wiki/2018_Kansas_gubernatorial_election",
      "title": "En.Wikipedia.Org",
      "publisher": "en.wikipedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-135",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas_Elections_for_Supreme_Court_Justices_Amendment_(August_2026",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-136",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/08/07/rivals-launch-fight-over-kansas-constitutional-amendment-to-elect-supreme-court-justices/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-137",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/02/10/kansas-method-of-picking-supreme-court-justices-could-be-improved-but-will-an-amendment-do-that/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-138",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/03/19/kansas-house-endorses-plan-to-elect-supreme-court-justices-placing-question-on-august-2026-ballot/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-139",
      "tier": "secondary",
      "url": "https://thebeaconnews.org/stories/2025/03/19/kansas-supreme-court-elections-voters-will-decide-in-2026/",
      "title": "Thebeaconnews.Org",
      "publisher": "thebeaconnews.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-140",
      "tier": "secondary",
      "url": "https://www.kcur.org/politics-elections-and-government/2026-01-26/kansas-lawmakers-want-to-reveal-more-about-the-people-picking-supreme-court-justices",
      "title": "Kcur.Org",
      "publisher": "kcur.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-141",
      "tier": "secondary",
      "url": "https://sunflowerstatejournal.com/judicial-amendment-campaign-shapes-up-outside-group-books-nearly-1-million-in-ads/",
      "title": "Sunflowerstatejournal.Com",
      "publisher": "sunflowerstatejournal.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-142",
      "tier": "secondary",
      "url": "https://www.votenokansas.org/",
      "title": "Votenokansas.Org",
      "publisher": "votenokansas.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-143",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li/b2025_26/measures/documents/summary_scr_1611_2025",
      "title": "Kslegislature.Gov",
      "publisher": "kslegislature.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-144",
      "tier": "secondary",
      "url": "https://www.brennancenter.org/our-work/analysis-opinion/wisconsin-supreme-court-race-breaks-spending-record-fueled-out-state",
      "title": "Brennancenter.Org",
      "publisher": "brennancenter.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-145",
      "tier": "secondary",
      "url": "https://pbswisconsin.org/news-item/billionaires-push-spending-in-the-2025-wisconsin-supreme-court-race-over-the-100-million-mark/",
      "title": "Pbswisconsin.Org",
      "publisher": "pbswisconsin.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-146",
      "tier": "secondary",
      "url": "https://www.npr.org/2025/04/01/nx-s1-5345862/wisconsin-supreme-court-crawford-schimel-election-results",
      "title": "Npr.Org",
      "publisher": "npr.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-147",
      "tier": "secondary",
      "url": "https://www.kansasinformationnetwork.com/2026-Kansas-Constitutional-Amendment",
      "title": "Kansasinformationnetwork.Com",
      "publisher": "kansasinformationnetwork.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-148",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas_Citizenship_Voting_Requirement_Amendment_(2026",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-149",
      "tier": "secondary",
      "url": "https://news.ballotpedia.org/2025/03/27/kansas-voters-will-decide-on-citizenship-voting-requirement-amendment-in-2026-similar-measures-were-approved-in-eight-states-in-2024/",
      "title": "News.Ballotpedia.Org",
      "publisher": "news.ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-150",
      "tier": "secondary",
      "url": "https://www.npr.org/2018/06/19/621304260/judge-tosses-kansas-proof-of-citizenship-voter-law-and-rebukes-sec-of-state-koba",
      "title": "Npr.Org",
      "publisher": "npr.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-151",
      "tier": "secondary",
      "url": "https://www.aclukansas.org/press-releases/resounding-victory-tens-thousands-disenfranchised-kansas-voters-supreme-court-refuses/",
      "title": "Aclukansas.Org",
      "publisher": "aclukansas.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-152",
      "tier": "secondary",
      "url": "https://www.cnn.com/2024/11/03/politics/noncitizen-voting-ballot-measures-election/index.html",
      "title": "Cnn.Com",
      "publisher": "cnn.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-153",
      "tier": "secondary",
      "url": "https://www.prismnews.com/news/kansas-proof-of-citizenship-voting-law-blocked-31000",
      "title": "Prismnews.Com",
      "publisher": "prismnews.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-154",
      "tier": "secondary",
      "url": "https://www.pbs.org/newshour/nation/kansas-hopes-to-resurrect-proof-of-citizenship-voting-law",
      "title": "Pbs.Org",
      "publisher": "pbs.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-155",
      "tier": "secondary",
      "url": "https://www.kcur.org/politics-elections-and-government/2025-12-30/whos-running-to-represent-kansas-in-the-u-s-senate-in-2026-heres-a-guide-to-the-candidates",
      "title": "Kcur.Org",
      "publisher": "kcur.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-156",
      "tier": "secondary",
      "url": "https://www.kmuw.org/government/2026-03-25/democratic-candidate-in-u-s-senate-race-opens-arms-to-kansas-republicans-lost-in-the-wilderness",
      "title": "Kmuw.Org",
      "publisher": "kmuw.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-157",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/11/25/kansas-democratic-candidates-for-u-s-senate-sharpen-attack-on-gop-incumbent-roger-marshall/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-158",
      "tier": "secondary",
      "url": "https://smartpolitics.lib.umn.edu/2025/03/05/how-well-can-democrats-fare-in-kansas-2026-us-senate-election/",
      "title": "Smartpolitics.Lib.Umn.Edu",
      "publisher": "smartpolitics.lib.umn.edu",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-159",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/01/05/lawrence-democrats-take-aim-at-kansas-republicans-congressional-seat/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-160",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas'_1st_Congressional_District_election,_2026",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-161",
      "tier": "primary",
      "url": "https://mann.house.gov/",
      "title": "Mann.House.Gov",
      "publisher": "mann.house.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-162",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/07/30/kansas-election-for-attorney-general-in-2026-may-become-a-repeat-of-2022-showdown/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-163",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas_Attorney_General_election,_2026",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-164",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/04/04/leavenworth-house-member-first-republican-to-declare-as-2026-candidate-for-secretary-of-state/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-165",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas_Secretary_of_State_election,_2026",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-166",
      "tier": "secondary",
      "url": "https://kspress.com/news/2026/03/27/kansas-legislature-passes-package-of-elections-bills-that-alter-voting-processes",
      "title": "Kspress.Com",
      "publisher": "kspress.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-167",
      "tier": "secondary",
      "url": "https://kansasreflector.com/briefs/kansas-senate-minority-leader-challenges-gop-house-speaker-for-state-insurance-commissioner/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-168",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/05/13/kansas-house-speaker-launches-campaign-for-insurance-commissioner-with-pro-trump-rhetoric-1/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-169",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas_Insurance_Commissioner_election,_2026",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-170",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li/b2025_26/members/rep_wasinger_barbara_1/",
      "title": "Kslegislature.Gov",
      "publisher": "kslegislature.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-171",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas_House_of_Representatives_District_111",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-172",
      "tier": "secondary",
      "url": "https://barbforkansas.com/",
      "title": "Barbforkansas.Com",
      "publisher": "barbforkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-173",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas_State_Board_of_Education_election,_2026",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-174",
      "tier": "primary",
      "url": "https://www.ksde.gov/Board/Kansas-State-Board-of-Education/District-5",
      "title": "Ksde.Gov",
      "publisher": "ksde.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-175",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2024/10/22/kansas-board-of-education-races-could-shift-power-to-conservative-bloc/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-176",
      "tier": "secondary",
      "url": "https://vickiforgovernor.com/",
      "title": "Vickiforgovernor.Com",
      "publisher": "vickiforgovernor.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-177",
      "tier": "secondary",
      "url": "https://vickischmidt.org/",
      "title": "Vickischmidt.Org",
      "publisher": "vickischmidt.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-178",
      "tier": "social",
      "url": "https://www.facebook.com/VickiSchmidtKS/",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-179",
      "tier": "social",
      "url": "https://x.com/VickiSchmidtKS",
      "title": "X.Com",
      "publisher": "x.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-180",
      "tier": "social",
      "url": "https://www.linkedin.com/in/vicki-schmidt-50b11810/",
      "title": "Linkedin.Com",
      "publisher": "linkedin.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-181",
      "tier": "secondary",
      "url": "https://en.wikipedia.org/wiki/Vicki_Schmidt",
      "title": "En.Wikipedia.Org",
      "publisher": "en.wikipedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-182",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Vicki_Schmidt",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-183",
      "tier": "primary",
      "url": "https://insurance.kansas.gov/about-us/",
      "title": "Insurance.Kansas.Gov",
      "publisher": "insurance.kansas.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-184",
      "tier": "secondary",
      "url": "https://justfacts.votesmart.org/candidate/biography/34584/vicki-schmidt",
      "title": "Justfacts.Votesmart.Org",
      "publisher": "justfacts.votesmart.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-185",
      "tier": "secondary",
      "url": "https://content.naic.org/node/8831",
      "title": "Content.Naic.Org",
      "publisher": "content.naic.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-186",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/07/21/kansas-republican-vicki-schmidt-anchors-2026-campaign-for-governor-on-record-of-service/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-187",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/07/09/kansas-insurance-commissioner-vicki-schmidt-initiates-republican-campaign-for-governor/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-188",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/02/03/kansas-insurance-commissioner-blends-personal-experience-advocacy-on-breast-cancer-bill/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-189",
      "tier": "secondary",
      "url": "https://www.kcur.org/politics-elections-and-government/2026-03-17/kansas-bill-to-expand-free-breast-cancer-screening-likely-killed-by-republican-lawmakers",
      "title": "Kcur.Org",
      "publisher": "kcur.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-190",
      "tier": "secondary",
      "url": "https://thebeaconnews.org/stories/2026/03/16/breast-cancer-screening-bill-killed-by-kansas-gop/",
      "title": "Thebeaconnews.Org",
      "publisher": "thebeaconnews.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-191",
      "tier": "secondary",
      "url": "https://www.kwch.com/2026/02/02/kansas-insurance-commissioner-backs-bill-eliminate-breast-cancer-screening-costs/",
      "title": "Kwch.Com",
      "publisher": "kwch.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-192",
      "tier": "secondary",
      "url": "https://www.kwch.com/2023/10/17/its-humbling-ks-insurance-commissioner-discusses-breast-cancer-journey/",
      "title": "Kwch.Com",
      "publisher": "kwch.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-193",
      "tier": "secondary",
      "url": "https://kansasreflector.com/briefs/kansas-insurance-commissioner-has-breast-cancer-expects-full-recovery/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-194",
      "tier": "secondary",
      "url": "https://www2.ljworld.com/news/state-government/2023/jun/14/kansas-insurance-commissioner-says-shes-been-diagnosed-with-breast-cancer/",
      "title": "Www2.Ljworld.Com",
      "publisher": "www2.ljworld.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-195",
      "tier": "secondary",
      "url": "https://kflpac.org/kfl-pac-releases-statement-on-insurance-commissioner-vicki-schmidt-seeking-the-republican-nomination-for-governor/",
      "title": "Kflpac.Org",
      "publisher": "kflpac.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-196",
      "tier": "secondary",
      "url": "https://www.insurancejournal.com/news/midwest/2025/12/03/849821.htm",
      "title": "Insurancejournal.Com",
      "publisher": "insurancejournal.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-197",
      "tier": "secondary",
      "url": "https://www.wibw.com/2024/06/21/ks-insurance-commissioner-touts-new-law-protect-seniors-scams/",
      "title": "Wibw.Com",
      "publisher": "wibw.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-198",
      "tier": "secondary",
      "url": "https://tkmagazine.com/blog/2024/11/14/at-the-core-spotlight-on-vicki-schmidt",
      "title": "Tkmagazine.Com",
      "publisher": "tkmagazine.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-199",
      "tier": "secondary",
      "url": "https://news.ku.edu/news/article/vicki-schmidt-earns-schools-top-honor",
      "title": "News.Ku.Edu",
      "publisher": "news.ku.edu",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-200",
      "tier": "secondary",
      "url": "https://mittelpolitan.substack.com/p/insight-kansas-column-for-july-vicki",
      "title": "Mittelpolitan.Substack.Com",
      "publisher": "mittelpolitan.substack.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-201",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/10/14/kansas-young-republicans-shut-down-after-politico-report-on-racist-violent-encrypted-chat/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-202",
      "tier": "secondary",
      "url": "https://doctor.webmd.com/doctor/michael-schmidt-a19fa618-8410-4d00-8e68-60d8c85f6524-overview",
      "title": "Doctor.Webmd.Com",
      "publisher": "doctor.webmd.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-203",
      "tier": "secondary",
      "url": "https://www.md.com/doctor/michael-j-schmidt-md",
      "title": "Md.Com",
      "publisher": "md.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-204",
      "tier": "primary",
      "url": "https://sos.ks.gov/elections/22elec/2022-General-Official-Vote-Totals.pdf",
      "title": "Sos.Ks.Gov",
      "publisher": "sos.ks.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-205",
      "tier": "secondary",
      "url": "https://en.wikipedia.org/wiki/2022_Kansas_Insurance_Commissioner_election",
      "title": "En.Wikipedia.Org",
      "publisher": "en.wikipedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-206",
      "tier": "secondary",
      "url": "https://legiscan.com/KS/rollcall/SB95/id/475027",
      "title": "Legiscan.Com",
      "publisher": "legiscan.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-207",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li_2016/b2015_16/measures/documents/sb95_00_0000.pdf",
      "title": "Kslegislature.Gov",
      "publisher": "kslegislature.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-208",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li/b2025_26/measures/documents/sb409_00_0000.pdf",
      "title": "Kslegislature.Gov",
      "publisher": "kslegislature.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-209",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li_2014/b2013_14/measures/documents/summary_hb_2744_2014.pdf",
      "title": "Kslegislature.Gov",
      "publisher": "kslegislature.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-210",
      "tier": "secondary",
      "url": "https://stacyrogersforks.com/the-rogers-report",
      "title": "Stacyrogersforks.Com",
      "publisher": "stacyrogersforks.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-211",
      "tier": "secondary",
      "url": "https://www.jocoelection.org/candidates-elected-officials/stacy-l-rogers-michael-w-smith",
      "title": "Jocoelection.Org",
      "publisher": "jocoelection.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-212",
      "tier": "secondary",
      "url": "https://www.yahoo.com/news/articles/stacy-rogers-says-shes-taking-090609003.html",
      "title": "Yahoo.Com",
      "publisher": "yahoo.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-213",
      "tier": "primary",
      "url": "https://www.kdor.ks.gov/Apps/VoterReg/",
      "title": "Kdor.Ks.Gov",
      "publisher": "kdor.ks.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-214",
      "tier": "secondary",
      "url": "https://myvoteinfo.voteks.org/",
      "title": "Myvoteinfo.Voteks.Org",
      "publisher": "myvoteinfo.voteks.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-215",
      "tier": "social",
      "url": "https://x.com/stacyrogersKS",
      "title": "X.Com",
      "publisher": "x.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-216",
      "tier": "social",
      "url": "https://www.instagram.com/stacyforthepeople/",
      "title": "Instagram.Com",
      "publisher": "instagram.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-217",
      "tier": "social",
      "url": "https://www.tiktok.com/@stacyrogersforthepeople",
      "title": "Tiktok.Com",
      "publisher": "tiktok.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-218",
      "tier": "social",
      "url": "https://www.youtube.com/@StacyRogersForThePeople",
      "title": "Youtube.Com",
      "publisher": "youtube.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Stacy Rogers's generated v2 profile."
      ]
    },
    {
      "id": "s-social-crossref-1",
      "tier": "secondary",
      "url": "https://www.iheart.com/podcast/966-billy-dees-podcast-28826157/episode/stacy-rogers-candidate-for-governor-280748522/",
      "title": "TikTok / Iheart",
      "publisher": "Iheart",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to School Choice / Parental Rights in Education.",
        "The richest long-form candidate voice came from podcast appearances rather than platform-native posts. On the Billy Dees Podcast, Rogers said she is on \"Snapchat,\" TikTok, Rumble, "
      ]
    },
    {
      "id": "s-social-crossref-2",
      "tier": "secondary",
      "url": "https://stacyrogersforks.com/stacys-team",
      "title": "stacyrogersforks.com / Stacyrogersforks",
      "publisher": "Stacyrogersforks",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to School Choice / Parental Rights in Education.",
        "Campaign Stacy's Team page, captured 2026-05-11. Key signals: Rogers biography; Lt. Gov. running mate Michael Smith; campaign manager Amanda Pearce; treasurer Archie Macias and Kan"
      ]
    }
  ]
};

if (process.env.NODE_ENV !== "production") {
  const result = validateCandidateV2(STACY_ROGERS_V2);
  if (!result.ok) {
    // eslint-disable-next-line no-console
    console.error(
      "[stacy-rogers.ts] validateCandidateV2 FAILED:\n" +
        result.errors.join("\n"),
    );
  }
}
