/* Auto-normalized with issue-mapped social/online cross-reference signals.
 * To refresh:
 *   node scripts/hydrate-v2-social-signals.mjs
 */

import type { CandidateFullV2 } from "@/data/types-v2";
import { validateCandidateV2 } from "@/data/types-v2";

export const MARTY_TULEY_V2: CandidateFullV2 = {
  "slug": "marty-tuley",
  "name": "Marty Tuley",
  "party": "D",
  "position": "Governor candidate",
  "electionSlug": "kansas-governor-2026",
  "incumbent": false,
  "occupation": "Governor candidate",
  "campaignWebsite": "https://www.tuley4gov2026.com/about-marty",
  "issues": [
    {
      "id": "i-abortion-sanctity-of-life-1",
      "title": "Abortion / Sanctity of Life",
      "stated": {
        "text": "No candidate-controlled statement was found in the reviewed public record for this issue. This page therefore does not infer a position from party label, faith affiliation, follows, likes, comments, or associations.",
        "sourceIds": [
          "s-17",
          "s-23",
          "s-24",
          "s-25",
          "s-31",
          "s-44"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Public web",
          "observation": "Across candidate-controlled site/platform text and indexed public coverage, no detailed candidate-controlled statements were captured on abortion, gun policy, religious liberty, Medicaid expansion, rural hospitals, water policy, the Ogallala Aquifer, property taxes, child care, foster care, policing, prisons, higher education beyond junior colleges and technical schools, tribal issues, or Kansas Supreme Court...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-2"
          ],
          "mappedToIssueId": "i-abortion-sanctity-of-life-1"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Public web",
          "observation": "Several issue areas remain absent or thin in the captured public record. Across the campaign site, indexed platform text, public campaign release, and accessible social metadata, the harvest did not capture detailed candidate-controlled statements on abortion, guns, religious liberty, Medicaid expansion, rural hospitals, water policy, the Ogallala Aquifer, property taxes, child care, foster care, policing,...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-2"
          ],
          "mappedToIssueId": "i-abortion-sanctity-of-life-1"
        }
      ]
    },
    {
      "id": "i-marriage-family-lgbtq-policy-2",
      "title": "Marriage & Family / LGBTQ+ Policy",
      "stated": {
        "text": "Opposes allowing transgender girls to compete in girls' sports. This is an unusual position for a Democrat in a gubernatorial primary and one of his most politically distinctive stances.",
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
          "platform": "player.kmaj1440.com",
          "observation": "KSNT's candidate guide characterized Tuley as a moderate Democrat and summarized his visible issue set as teacher pay, farm-to-table public health, transgender girls' sports, cannabis revenue for schools and health programs, and opposition to large tax breaks for out-of-state corporations (source).",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "i-marriage-family-lgbtq-policy-2"
        },
        {
          "id": "ss-crossref-3",
          "platform": "tuley4gov2026.com",
          "observation": "On cultural and family-policy issues, Tuley's most visible distinctive position is his statement that he supports transgender rights but opposes transgender girls competing in sports with biological girls (source). The campaign launch release stated the same sports position and framed it around fairness and safety (source). WIBW included the position in its announcement story, and KSNT's candidate guide...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-2"
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
          "s-11",
          "s-21",
          "s-31",
          "s-40",
          "s-41",
          "s-42"
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
          "s-17",
          "s-23",
          "s-24",
          "s-25",
          "s-31",
          "s-44"
        ]
      },
      "actions": [],
      "socialSignals": []
    },
    {
      "id": "i-immigration-border-5",
      "title": "Immigration / Border",
      "stated": {
        "text": "Runs as a Democrat. The Kansas Democratic Party platform supports immigration reform with a pathway to citi",
        "sourceIds": [
          "s-6",
          "s-8",
          "s-9",
          "s-10",
          "s-11",
          "s-12"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "tuley4gov2026.com",
          "observation": "The campaign's governance language emphasizes practicality, transparency, and limits on political theater. The \"Meet Marty\" page says he is running to bring practical leadership and real solutions to Kansas, with a focus on showing up, listening, and avoiding political noise (source). The platform says he would not use executive orders or pardons as political tools, would make voting easier and more accessible,...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-3"
          ],
          "mappedToIssueId": "i-immigration-border-5"
        }
      ]
    }
  ],
  "whoTheyAre": "Marty Tuley is a Lawrence-area Democrat running for governor in 2026. He presents himself as a fourth-generation Kansan whose family roots run through farming, football, and public education, and his campaign biography says his people are \"farmers, teachers, and working people.\" He is married to Lovena Tuley.\n\nUnlike the better-known Democrats in the race, Tuley is not coming out of the Legislature, county government, or statewide advocacy groups. His public identity is built around work as an author, personal trainer, and former gym owner. His campaign has relied heavily on his own website and social-media accounts rather than on a long trail of public office, endorsements, or institutional support.\n\nThat outsider status is one of the main facts about his candidacy. The record available online shows a first-time statewide candidate trying to build a plain-spoken, culturally moderate Democratic message around health, schools, family life, and personal freedom.",
  "recordSummary": "Tuley does not bring an elected-office record into the governor's race. What voters have instead is a campaign platform centered on public schools, health and fitness, marijuana legali",
  "ownWordsNarrative": "*A summary of what Marty Tuley has publicly said, posted, and promoted through campaign-controlled pages, social profiles, and indexed public coverage. Drawn from public campaign pages, campaign-linked social accounts, a campaign-distributed press release, TikTok account metadata, and credible indexed coverage between May 30, 2025 and May 11, 2026. We report patterns; we do not interpret intent.*\n\n---\n\nMarty Tuley's public campaign record is built less around a long elected-office record and more around a candidate-controlled platform: public schools, health and fitness, marijuana legalization, Kansas-centered economic development, energy, voting access, and restrained executive power. His campaign home page frames the race as [\"Building a Kansas Worth Investing In\"](https://www.tuley4gov2026.com/) and says Kansas should lead through schools, healthier communities, and workforce investment. The indexed platform page is the densest statement of priorities: 27 bullet-level positions, led by 10 education/public-school items and 6 health-and-fitness items ([harvest](social-harvest.md#indexed-candidate-controlled-statements)).\n\nEducation is the clearest and most repeated issue cluster. Tuley's platform calls for top-25 national teacher pay, better benefits, fully funded junior college and technical school tuition, two healthy meals per day for public school students, no cell phones during public school hours, reduced administrative bloat, higher support-staff pay, and opposition to vouchers ([source](https://www.tuley4gov2026.com/to-do-list)). His public schools page condenses the same message into a promise to keep public dollars in public schools and reject private-school tax breaks ([source](https://www.tuley4gov2026.com/public-schools)). WIBW's launch coverage likewise led its summary with teacher pay, school meals, legal cannabis revenue for schools, and opposition to public funding for private schools ([source](https://www.wibw.com/2025/07/28/democrat-marty-tuley-announces-candidacy-2026-kansas-governor/)).\n\nHealth and fitness are the second strongest candidate-controlled signal, reflecting Tuley's identity as an author and personal trainer. The campaign platform calls for daily physical education, farm-to-table school food, prevention-focused obesity policy, and a broader culture of wellness ([source](https://www.tuley4gov2026.com/to-do-list)). KCUR / Kansas News Service summarized his campaign in similar terms, noting his support for daily physical education and banning padded football for children under 13 ([source](https://www.kcur.org/politics-elections-and-government/2025-07-24/kansas-governor-race-2026-election-candidates)). The campaign-distributed EIN Presswire release also put obesity prevention, school food systems, and health-program funding in the launch platform ([source](https://www.einpresswire.com/article/824455910/invest-in-kansas-tuley-s-platform-to-rebuild-schools-health-and-economy)).\n\nOn cultural and family-policy issues, Tuley's most visible distinctive position is his statement that he supports transgender rights but opposes transgender girls competing in sports with biological girls ([source](https://www.tuley4gov2026.com/to-do-list)). The campaign launch release stated the same sports position and framed it around fairness and safety ([source](https://www.einpresswire.com/article/824455910/invest-in-kansas-tuley-s-platform-to-rebuild-schools-health-and-economy)). WIBW included the position in its announcement story, and KSNT's candidate guide highlighted it as part of his moderate-Democrat positioning ([source](https://player.kmaj1440.com/2025/08/01/who-is-running-for-governor-in-kansas-for-2026/)).\n\nTuley's economic message is less technocratic than investment-oriented. His campaign home page says Kansas should attract businesses by investing in education, workforce development, and local growth rather than relying on corporate giveaways ([source](https://www.tuley4gov2026.com/)). The platform calls for legal marijuana with revenue directed to education and health, reforming corporate tax incentives for out-of-state companies, prioritizing Kansas-grown businesses, and resisting tax cuts used as political messaging ([source](https://www.tuley4gov2026.com/to-do-list)). KCUR summarized this as support for recreational cannabis revenue and opposition to large out-of-state corporate incentives ([source](https://www.kcur.org/politics-elections-and-government/2025-07-24/kansas-governor-race-2026-election-candidates)).\n\nThe campaign's governance language emphasizes practicality, transparency, and limits on political theater. The \"Meet Marty\" page says he is running to bring practical leadership and real solutions to Kansas, with a focus on showing up, listening, and avoiding political noise ([source](https://www.tuley4gov2026.com/meet-marty)). The platform says he would not use executive orders or pardons as political tools, would make voting easier and more accessible, and supports a secure but accessible border for hardworking people and families ([source](https://www.tuley4gov2026.com/to-do-list)). Kansas Reflector's March 8, 2026 debate coverage captured the outsider frame when it reported Tuley describing himself as a different kind of Democrat with a nontraditional background ([source](https://kansasreflector.com/2026/03/08/democrats-in-governors-race-use-debate-stage-to-spotlight-affordability-health-care-rural-kansas/)).\n\nThe public social footprint is broad enough to confirm official channels, but uneven in what it exposes. The campaign site links Facebook, TikTok, Instagram, and YouTube ([harvest](social-harvest.md#official-campaign-site-and-social-links)). TikTok is the strongest measurable account: [@tuley_for_gov](https://www.tiktok.com/@tuley_for_gov) showed 1,936 followers, 132 following, 185 videos, and 10.4K likes at capture. Its bio says, \"Hi, my name is Martin Tuley, and I'm fighting for Kansas!\" ([harvest](social-harvest.md#tiktok)). Facebook, Instagram, and YouTube were present but did not expose reliable post-level text or engagement in the logged-out capture.\n\nAudience response can only be measured at the account level from the accessible public data. The highest visible engagement signal was TikTok's 10.4K account likes across 185 videos as of May 11, 2026 ([harvest](social-harvest.md#highest-visible-engagement)). No individual TikTok, Facebook, Instagram, or YouTube post could be ranked by engagement from the logged-out harvest. An X account named Marty Tuley exists at [@TuleyMarty](https://x.com/TuleyMarty), but it is not linked from the campaign site and showed 0 statuses; it was treated as identity-adjacent rather than a current campaign channel ([harvest](social-harvest.md#presence-detector)).\n\nSeveral issue areas remain absent or thin in the captured public record. Across the campaign site, indexed platform text, public campaign release, and accessible social metadata, the harvest did not capture detailed candidate-controlled statements on abortion, guns, religious liberty, Medicaid expansion, rural hospitals, water policy, the Ogallala Aquifer, property taxes, child care, foster care, policing, prisons, tribal issues, or Kansas Supreme Court selection ([harvest](social-harvest.md#visible-absences-and-limits)). The record is much more developed on schools, health, cannabis, local business, energy, voting access, and the transgender-athlete sports position.\n\n---\n\n**Methodology:** Date range covered: May 30, 2025 to May 11, 2026 for visible account metadata, with campaign-controlled and indexed public statements from June 30, 2025 through May 11, 2026. Platforms surveyed: campaign website, Facebook, TikTok, Instagram, YouTube, X, LinkedIn, Bluesky, Threads, Truth Social, Gab, Gettr, Substack, Reddit, and broad web/news search. Posts examined: official campaign pages, 27 candidate-controlled platform bullets, campaign-linked social-profile metadata, TikTok account-level metadata, campaign-distributed press release, and indexed public coverage. Facebook, Instagram, TikTok, and YouTube did not expose reliable individual post bodies in the logged-out harvest.\n\n*We report patterns; we do not interpret intent.*",
  "whereTheyWorship": "Public sources do not identify a current church affiliation for Tuley. His campaign language leans heavily on values, family, and Kansas roots, but the available public record does not name a congregation or denomination.",
  "campaignFinance": {
    "totalRaised": "$2,600.00 (2025 year-end)",
    "narrative": "Tuley's 2025 year-end Kansas ethics filing showed $2,600.00 raised, $193.89 spent, and $2,406.11 cash on hand. By gubernatorial standards, that is a very small campaign operation. The filing shows a short list of named contributors, including Todd Decuir ($500), George Grieb ($500), Ernesto Hodison ($100), and William England ($50). The available public finance record points to a low-dollar campaign with limited outside support.",
    "donors": [
      {
        "name": "Todd Decuir",
        "amount": "$500"
      },
      {
        "name": "George Grieb",
        "amount": "$500"
      },
      {
        "name": "Ernesto Hodison",
        "amount": "$100"
      },
      {
        "name": "William England",
        "amount": "$50"
      }
    ],
    "undisclosed": "The raw-dump pass did not fully reconstruct the complete itemized schedule.",
    "reportingPeriod": "2025 year-end (2026 election cycle)",
    "source": "Kansas ethics filing and public finance reporting"
  },
  "socialResearchNote": "Social research is included as observed public behavior, not as a proxy for belief. Platforms/sources checked: Campaign website, Facebook, TikTok, Instagram, YouTube, X, LinkedIn, Bluesky, Threads, Truth Social, Gab, Gettr, Substack, Reddit, Public news coverage. Harvest range: 2025-05-30 through 2026-05-11.",
  "sources": [
    {
      "id": "s-1",
      "tier": "secondary",
      "url": "https://www.tuley4gov2026.com/",
      "title": "Tuley4gov2026.Com",
      "publisher": "tuley4gov2026.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Marty Tuley's generated v2 profile."
      ]
    },
    {
      "id": "s-2",
      "tier": "social",
      "url": "https://www.facebook.com/profile.php?id=100088545015076",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Marty Tuley's generated v2 profile."
      ]
    },
    {
      "id": "s-3",
      "tier": "social",
      "url": "https://www.instagram.com/tuley_for_gov",
      "title": "Instagram.Com",
      "publisher": "instagram.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Marty Tuley's generated v2 profile."
      ]
    },
    {
      "id": "s-4",
      "tier": "social",
      "url": "https://www.youtube.com/@MartyTuley",
      "title": "Youtube.Com",
      "publisher": "youtube.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Marty Tuley's generated v2 profile."
      ]
    },
    {
      "id": "s-5",
      "tier": "social",
      "url": "http://www.tiktok.com/@tuley_for_gov",
      "title": "Tiktok.Com",
      "publisher": "tiktok.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Marty Tuley's generated v2 profile."
      ]
    },
    {
      "id": "s-6",
      "tier": "primary",
      "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/202601/SW01MT_202601.pdf",
      "title": "Kansas.Gov",
      "publisher": "kansas.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Marty Tuley's generated v2 profile."
      ]
    },
    {
      "id": "s-7",
      "tier": "secondary",
      "url": "https://www.tuley4gov2026.com/about-marty",
      "title": "Tuley4gov2026.Com",
      "publisher": "tuley4gov2026.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Marty Tuley's generated v2 profile."
      ]
    },
    {
      "id": "s-8",
      "tier": "primary",
      "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/SWLinks2026EC.htm",
      "title": "Kansas.Gov",
      "publisher": "kansas.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Marty Tuley's generated v2 profile."
      ]
    },
    {
      "id": "s-9",
      "tier": "primary",
      "url": "https://www.kansas.gov/ethics/CFAScanned/StWide/2026ElecCycle/Treasurers/SW01MT_AT.pdf",
      "title": "Kansas.Gov",
      "publisher": "kansas.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Marty Tuley's generated v2 profile."
      ]
    },
    {
      "id": "s-10",
      "tier": "secondary",
      "url": "https://ethanforkansas.com",
      "title": "Ethanforkansas.Com",
      "publisher": "ethanforkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Marty Tuley's generated v2 profile."
      ]
    },
    {
      "id": "s-11",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/03/08/democrats-in-governors-race-use-debate-stage-to-spotlight-affordability-health-care-rural-kansas/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Marty Tuley's generated v2 profile."
      ]
    },
    {
      "id": "s-12",
      "tier": "social",
      "url": "https://www.facebook.com/ethanforkansas",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Marty Tuley's generated v2 profile."
      ]
    },
    {
      "id": "s-13",
      "tier": "social",
      "url": "https://www.instagram.com/ethanforkansas/",
      "title": "Instagram.Com",
      "publisher": "instagram.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Marty Tuley's generated v2 profile."
      ]
    },
    {
      "id": "s-14",
      "tier": "social",
      "url": "https://www.linkedin.com/in/ethancorson/",
      "title": "Linkedin.Com",
      "publisher": "linkedin.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Marty Tuley's generated v2 profile."
      ]
    },
    {
      "id": "s-15",
      "tier": "secondary",
      "url": "https://cindyforkansas.com",
      "title": "Cindyforkansas.Com",
      "publisher": "cindyforkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Marty Tuley's generated v2 profile."
      ]
    },
    {
      "id": "s-16",
      "tier": "secondary",
      "url": "https://johnsoncountypost.com/2023/03/13/capitol-update-sen-cindy-holscher-voucher-bill-196217/",
      "title": "Johnsoncountypost.Com",
      "publisher": "johnsoncountypost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Marty Tuley's generated v2 profile."
      ]
    },
    {
      "id": "s-17",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/08/01/kansas-governor-candidate-cindy-holscher-objects-to-alleged-pressure-campaign-by-kellys-staff/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Marty Tuley's generated v2 profile."
      ]
    },
    {
      "id": "s-18",
      "tier": "social",
      "url": "https://www.facebook.com/cindyforkansas/",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Marty Tuley's generated v2 profile."
      ]
    },
    {
      "id": "s-19",
      "tier": "secondary",
      "url": "https://www.cindyforsenateks.com/",
      "title": "Cindyforsenateks.Com",
      "publisher": "cindyforsenateks.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Marty Tuley's generated v2 profile."
      ]
    },
    {
      "id": "s-20",
      "tier": "secondary",
      "url": "https://www.tuley4gov2026.com",
      "title": "Tuley4gov2026.Com",
      "publisher": "tuley4gov2026.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Marty Tuley's generated v2 profile."
      ]
    },
    {
      "id": "s-21",
      "tier": "secondary",
      "url": "https://www.wibw.com/2025/07/28/democrat-marty-tuley-announces-candidacy-2026-kansas-governor/",
      "title": "Wibw.Com",
      "publisher": "wibw.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Marty Tuley's generated v2 profile."
      ]
    },
    {
      "id": "s-22",
      "tier": "secondary",
      "url": "https://oharaforkansas.com",
      "title": "Oharaforkansas.Com",
      "publisher": "oharaforkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Marty Tuley's generated v2 profile."
      ]
    },
    {
      "id": "s-23",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/11/28/its-an-honesty-dozens-of-columns-voice-the-politics-of-one-candidate-for-kansas-governor/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Marty Tuley's generated v2 profile."
      ]
    },
    {
      "id": "s-24",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/02/16/kansas-gop-candidate-for-governor-says-state-needs-a-true-conservative/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Marty Tuley's generated v2 profile."
      ]
    },
    {
      "id": "s-25",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/01/30/six-kansas-gop-candidates-for-governor-toss-haymakers-in-first-debate-find-unity-on-key-issues/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Marty Tuley's generated v2 profile."
      ]
    },
    {
      "id": "s-26",
      "tier": "social",
      "url": "https://www.facebook.com/oharaforjoco/",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Marty Tuley's generated v2 profile."
      ]
    },
    {
      "id": "s-27",
      "tier": "secondary",
      "url": "https://stacyrogersforks.com",
      "title": "Stacyrogersforks.Com",
      "publisher": "stacyrogersforks.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Marty Tuley's generated v2 profile."
      ]
    },
    {
      "id": "s-28",
      "tier": "social",
      "url": "https://www.facebook.com/StacyHepnerRogers/",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Marty Tuley's generated v2 profile."
      ]
    },
    {
      "id": "s-29",
      "tier": "social",
      "url": "https://www.linkedin.com/in/stacy-rogers-for-kansas/",
      "title": "Linkedin.Com",
      "publisher": "linkedin.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Marty Tuley's generated v2 profile."
      ]
    },
    {
      "id": "s-30",
      "tier": "secondary",
      "url": "https://www.kansascomeback.com",
      "title": "Kansascomeback.Com",
      "publisher": "kansascomeback.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Marty Tuley's generated v2 profile."
      ]
    },
    {
      "id": "s-31",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/01/19/millionaire-candidates-for-kansas-governor-burnish-fundraising-with-personal-loans/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Marty Tuley's generated v2 profile."
      ]
    },
    {
      "id": "s-32",
      "tier": "secondary",
      "url": "https://www.ksn.com/news/your-local-election-hq/joy-eakins-announces-bid-for-kansas-governor/",
      "title": "Ksn.Com",
      "publisher": "ksn.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Marty Tuley's generated v2 profile."
      ]
    },
    {
      "id": "s-33",
      "tier": "social",
      "url": "https://www.facebook.com/JoyforKS/",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Marty Tuley's generated v2 profile."
      ]
    },
    {
      "id": "s-34",
      "tier": "social",
      "url": "https://x.com/JoyforKS",
      "title": "X.Com",
      "publisher": "x.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Marty Tuley's generated v2 profile."
      ]
    },
    {
      "id": "s-35",
      "tier": "social",
      "url": "https://www.linkedin.com/in/joyeakins/",
      "title": "Linkedin.Com",
      "publisher": "linkedin.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Marty Tuley's generated v2 profile."
      ]
    },
    {
      "id": "s-36",
      "tier": "secondary",
      "url": "https://philipsarnecki.org",
      "title": "Philipsarnecki.Org",
      "publisher": "philipsarnecki.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Marty Tuley's generated v2 profile."
      ]
    },
    {
      "id": "s-37",
      "tier": "social",
      "url": "https://www.facebook.com/p/Philip-Sarnecki-For-Governor-61579950041528/",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Marty Tuley's generated v2 profile."
      ]
    },
    {
      "id": "s-38",
      "tier": "social",
      "url": "https://www.linkedin.com/in/philipsarnecki/",
      "title": "Linkedin.Com",
      "publisher": "linkedin.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Marty Tuley's generated v2 profile."
      ]
    },
    {
      "id": "s-39",
      "tier": "secondary",
      "url": "https://www.imdb.com/name/nm3671154/",
      "title": "Imdb.Com",
      "publisher": "imdb.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Marty Tuley's generated v2 profile."
      ]
    },
    {
      "id": "s-40",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/07/22/kansas-sen-ethan-corson-enters-race-for-democratic-partys-nomination-for-governor/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Marty Tuley's generated v2 profile."
      ]
    },
    {
      "id": "s-41",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/11/17/gov-laura-kelly-offers-formal-endorsement-of-democratic-sen-ethan-corson-for-governor/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Marty Tuley's generated v2 profile."
      ]
    },
    {
      "id": "s-42",
      "tier": "secondary",
      "url": "https://kansasreflector.com/briefs/former-kansas-gov-kathleen-sebelius-endorses-sen-ethan-corson-in-democratic-race-for-governor/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Marty Tuley's generated v2 profile."
      ]
    },
    {
      "id": "s-43",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/01/09/latest-kansas-campaign-finance-reports-schwab-takes-in-1-3m-corson-receives-900k/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Marty Tuley's generated v2 profile."
      ]
    },
    {
      "id": "s-44",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/11/25/kansas-democratic-candidates-for-governor-shaping-2026-campaigns-to-entice-rural-voters/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Marty Tuley's generated v2 profile."
      ]
    },
    {
      "id": "s-45",
      "tier": "secondary",
      "url": "https://www.kcjc.com/index.php/current-news/latest-news/5736-ethan-corson-announces-candidacy-for-kansas-senate-district-7",
      "title": "Kcjc.Com",
      "publisher": "kcjc.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Marty Tuley's generated v2 profile."
      ]
    },
    {
      "id": "s-46",
      "tier": "secondary",
      "url": "https://en.wikipedia.org/wiki/Ethan_Corson",
      "title": "En.Wikipedia.Org",
      "publisher": "en.wikipedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Marty Tuley's generated v2 profile."
      ]
    },
    {
      "id": "s-47",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Ethan_Corson",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Marty Tuley's generated v2 profile."
      ]
    },
    {
      "id": "s-48",
      "tier": "secondary",
      "url": "https://www.kssenatedems.org/ethan-corson",
      "title": "Kssenatedems.Org",
      "publisher": "kssenatedems.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Marty Tuley's generated v2 profile."
      ]
    },
    {
      "id": "s-49",
      "tier": "secondary",
      "url": "https://doleinstitute.org/about/fellows/ethan-corson/",
      "title": "Doleinstitute.Org",
      "publisher": "doleinstitute.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Marty Tuley's generated v2 profile."
      ]
    },
    {
      "id": "s-50",
      "tier": "secondary",
      "url": "https://johnsoncountypost.com/2025/07/22/ethan-corson-governor-264717/",
      "title": "Johnsoncountypost.Com",
      "publisher": "johnsoncountypost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Marty Tuley's generated v2 profile."
      ]
    },
    {
      "id": "s-51",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li/b2025_26/members/sen_corson_ethan_1/",
      "title": "Kslegislature.Gov",
      "publisher": "kslegislature.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Marty Tuley's generated v2 profile."
      ]
    },
    {
      "id": "s-52",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/06/12/democrat-steps-forward-in-race-for-kansas-governor-focuses-on-schools-and-kitchen-table-issues/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Marty Tuley's generated v2 profile."
      ]
    },
    {
      "id": "s-53",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/10/06/kansas-senator-leans-into-bipartisan-allure-in-campaign-for-kansas-governor/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Marty Tuley's generated v2 profile."
      ]
    },
    {
      "id": "s-54",
      "tier": "secondary",
      "url": "https://en.wikipedia.org/wiki/Cindy_Holscher",
      "title": "En.Wikipedia.Org",
      "publisher": "en.wikipedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Marty Tuley's generated v2 profile."
      ]
    },
    {
      "id": "s-55",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Cindy_Holscher",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Marty Tuley's generated v2 profile."
      ]
    },
    {
      "id": "s-56",
      "tier": "secondary",
      "url": "https://cindyforkansas.com/endorsements/",
      "title": "Cindyforkansas.Com",
      "publisher": "cindyforkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Marty Tuley's generated v2 profile."
      ]
    },
    {
      "id": "s-57",
      "tier": "secondary",
      "url": "https://www.amazon.com/Get-Off-Your-Ass-Definitive/dp/1591201292",
      "title": "Amazon.Com",
      "publisher": "amazon.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Marty Tuley's generated v2 profile."
      ]
    },
    {
      "id": "s-58",
      "tier": "secondary",
      "url": "https://www.amazon.com/Busting-Your-Butt-Gut-Minimizing/dp/1591202086",
      "title": "Amazon.Com",
      "publisher": "amazon.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Marty Tuley's generated v2 profile."
      ]
    },
    {
      "id": "s-59",
      "tier": "secondary",
      "url": "https://www.readhowyouwant.com/authors/details/Marty-Tuley/6407",
      "title": "Readhowyouwant.Com",
      "publisher": "readhowyouwant.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Marty Tuley's generated v2 profile."
      ]
    },
    {
      "id": "s-60",
      "tier": "secondary",
      "url": "https://www2.ljworld.com/news/2003/mar/27/legal_battles_weigh/",
      "title": "Www2.Ljworld.Com",
      "publisher": "www2.ljworld.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Marty Tuley's generated v2 profile."
      ]
    },
    {
      "id": "s-61",
      "tier": "secondary",
      "url": "https://openpowerlifting.org/u/martytuley",
      "title": "Openpowerlifting.Org",
      "publisher": "openpowerlifting.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Marty Tuley's generated v2 profile."
      ]
    },
    {
      "id": "s-62",
      "tier": "secondary",
      "url": "https://johnsoncountypost.com/2025/03/10/charlotte-ohara-kansas-governor-bid-254803/",
      "title": "Johnsoncountypost.Com",
      "publisher": "johnsoncountypost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Marty Tuley's generated v2 profile."
      ]
    },
    {
      "id": "s-63",
      "tier": "secondary",
      "url": "https://johnsoncountypost.com/2024/11/05/county-commission-races-2024-general-246243/",
      "title": "Johnsoncountypost.Com",
      "publisher": "johnsoncountypost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Marty Tuley's generated v2 profile."
      ]
    },
    {
      "id": "s-64",
      "tier": "secondary",
      "url": "https://en.wikipedia.org/wiki/Charlotte_O'Hara",
      "title": "En.Wikipedia.Org",
      "publisher": "en.wikipedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Marty Tuley's generated v2 profile."
      ]
    },
    {
      "id": "s-65",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Charlotte_O'Hara",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Marty Tuley's generated v2 profile."
      ]
    },
    {
      "id": "s-66",
      "tier": "secondary",
      "url": "https://www.kake.com/news/wichitan-stacy-rogers-announces-candidacy-for-kansas-governor/article_8298d24e-ea47-11ef-aa00-ab042b86252d.html",
      "title": "Kake.Com",
      "publisher": "kake.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Marty Tuley's generated v2 profile."
      ]
    },
    {
      "id": "s-67",
      "tier": "secondary",
      "url": "https://www.ksn.com/news/your-local-election-hq/republican-woman-wants-to-be-next-kansas-governor/",
      "title": "Ksn.Com",
      "publisher": "ksn.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Marty Tuley's generated v2 profile."
      ]
    },
    {
      "id": "s-68",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Stacy_Rogers",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Marty Tuley's generated v2 profile."
      ]
    },
    {
      "id": "s-69",
      "tier": "secondary",
      "url": "https://www.kcur.org/politics-elections-and-government/2025-07-24/kansas-governor-race-2026-election-candidates",
      "title": "Kcur.Org",
      "publisher": "kcur.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Marty Tuley's generated v2 profile."
      ]
    },
    {
      "id": "s-70",
      "tier": "secondary",
      "url": "https://www.schooleymitchell.com/news/rholter/feature-story-eberly-farm-and-kids-closet-connection/",
      "title": "Schooleymitchell.Com",
      "publisher": "schooleymitchell.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Marty Tuley's generated v2 profile."
      ]
    },
    {
      "id": "s-71",
      "tier": "secondary",
      "url": "https://rileyks.gop/2025/01/23/meet-gubernatorial-candidate-stacy-rogers-in-randolph/",
      "title": "Rileyks.Gop",
      "publisher": "rileyks.gop",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Marty Tuley's generated v2 profile."
      ]
    },
    {
      "id": "s-72",
      "tier": "secondary",
      "url": "https://www.kake.com/news/joy-eakins-discusses-her-run-for-the-governors-office/article_7947e2be-8651-4a43-963e-5ee064c2d6c5.html",
      "title": "Kake.Com",
      "publisher": "kake.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Marty Tuley's generated v2 profile."
      ]
    },
    {
      "id": "s-73",
      "tier": "secondary",
      "url": "https://www.wichitachamber.org/blog/2023/01/04/wichita-chamber-business-accelerator/faithful-investment-in-people-episode-104-wichita-chamber-business-accelerator-joy-eakins/",
      "title": "Wichitachamber.Org",
      "publisher": "wichitachamber.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Marty Tuley's generated v2 profile."
      ]
    },
    {
      "id": "s-74",
      "tier": "secondary",
      "url": "https://cornerstonedata.com/about-us/",
      "title": "Cornerstonedata.Com",
      "publisher": "cornerstonedata.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Marty Tuley's generated v2 profile."
      ]
    },
    {
      "id": "s-75",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Joy_Eakins",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Marty Tuley's generated v2 profile."
      ]
    },
    {
      "id": "s-76",
      "tier": "secondary",
      "url": "https://kansasreflector.com/briefs/johnson-county-businessman-launches-campaign-to-win-gop-nomination-for-governor/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Marty Tuley's generated v2 profile."
      ]
    },
    {
      "id": "s-77",
      "tier": "secondary",
      "url": "https://wltreport.com/2026/03/18/meet-republican-businessman-outsider-running-kansas-governor-gaining/",
      "title": "Wltreport.Com",
      "publisher": "wltreport.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Marty Tuley's generated v2 profile."
      ]
    },
    {
      "id": "s-78",
      "tier": "secondary",
      "url": "https://trendingpoliticsnews.com/new-frontrunner-emerges-in-key-race-as-gop-candidate-shatters-fundraising-records-mace/",
      "title": "Trendingpoliticsnews.Com",
      "publisher": "trendingpoliticsnews.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Marty Tuley's generated v2 profile."
      ]
    },
    {
      "id": "s-79",
      "tier": "secondary",
      "url": "https://www.wibw.com/2025/09/02/kansas-businessman-announces-campaign-governor/",
      "title": "Wibw.Com",
      "publisher": "wibw.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Marty Tuley's generated v2 profile."
      ]
    },
    {
      "id": "s-80",
      "tier": "secondary",
      "url": "https://www.noln.net/site-placement/latest-news/news/55314781/strickland-brothers-10-minute-oil-change-franchise-owner-running-for-kansas-governor",
      "title": "Noln.Net",
      "publisher": "noln.net",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Marty Tuley's generated v2 profile."
      ]
    },
    {
      "id": "s-81",
      "tier": "secondary",
      "url": "https://bottradionetwork.com/ministry/encounter-special-edition/2025-10-03-philip-sarnecki-on-leadership-and-the-kansas-governors-race/",
      "title": "Bottradionetwork.Com",
      "publisher": "bottradionetwork.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Marty Tuley's generated v2 profile."
      ]
    },
    {
      "id": "s-82",
      "tier": "secondary",
      "url": "https://www.realmediakc.com/podcast/philip-sarnecki-for-kansas-governor-faith-business-outsider-vision/",
      "title": "Realmediakc.Com",
      "publisher": "realmediakc.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Marty Tuley's generated v2 profile."
      ]
    },
    {
      "id": "s-83",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas_gubernatorial_and_lieutenant_gubernatorial_election,_2026",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Marty Tuley's generated v2 profile."
      ]
    },
    {
      "id": "s-84",
      "tier": "secondary",
      "url": "https://en.wikipedia.org/wiki/2026_Kansas_gubernatorial_election",
      "title": "En.Wikipedia.Org",
      "publisher": "en.wikipedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Marty Tuley's generated v2 profile."
      ]
    },
    {
      "id": "s-85",
      "tier": "secondary",
      "url": "https://www.kansascatholic.org/current-news/election-2026",
      "title": "Kansascatholic.Org",
      "publisher": "kansascatholic.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Marty Tuley's generated v2 profile."
      ]
    },
    {
      "id": "s-86",
      "tier": "primary",
      "url": "https://www.haysusa.com/269/City-Commission",
      "title": "Haysusa.Com",
      "publisher": "haysusa.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Marty Tuley's generated v2 profile."
      ]
    },
    {
      "id": "s-87",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/eb1182bd-00f4-4751-912d-03481e2570d8",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Marty Tuley's generated v2 profile."
      ]
    },
    {
      "id": "s-88",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/27dd42ff-4f55-4a66-8957-7259a3e90c28",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Marty Tuley's generated v2 profile."
      ]
    },
    {
      "id": "s-89",
      "tier": "primary",
      "url": "https://www.ellisco.net/120/County-Commission",
      "title": "Ellisco.Net",
      "publisher": "ellisco.net",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Marty Tuley's generated v2 profile."
      ]
    },
    {
      "id": "s-90",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/8400acf8-32ea-486a-b087-8423d8f728e0",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Marty Tuley's generated v2 profile."
      ]
    },
    {
      "id": "s-91",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/1873ff67-3bab-44c2-896b-8aee3a992496",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Marty Tuley's generated v2 profile."
      ]
    },
    {
      "id": "s-92",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/18d99844-46b7-4bc0-a558-9d9a87fa92e6",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Marty Tuley's generated v2 profile."
      ]
    },
    {
      "id": "s-93",
      "tier": "primary",
      "url": "https://www.ellisco.net/626/Candidate-Filings",
      "title": "Ellisco.Net",
      "publisher": "ellisco.net",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Marty Tuley's generated v2 profile."
      ]
    },
    {
      "id": "s-94",
      "tier": "primary",
      "url": "https://www.ellisco.net/425/Election",
      "title": "Ellisco.Net",
      "publisher": "ellisco.net",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Marty Tuley's generated v2 profile."
      ]
    },
    {
      "id": "s-95",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/7bf9c6e7-b64c-4412-ba77-c1174d969816",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Marty Tuley's generated v2 profile."
      ]
    },
    {
      "id": "s-96",
      "tier": "primary",
      "url": "https://www.usd489.com/page/board-of-education",
      "title": "Usd489.Com",
      "publisher": "usd489.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Marty Tuley's generated v2 profile."
      ]
    },
    {
      "id": "s-97",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Hays_Unified_School_District_489,_Kansas,_elections",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Marty Tuley's generated v2 profile."
      ]
    },
    {
      "id": "s-98",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/5de6670c-0b28-4836-820e-a80866aa4e94",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Marty Tuley's generated v2 profile."
      ]
    },
    {
      "id": "s-99",
      "tier": "secondary",
      "url": "https://barbforkansas.com/",
      "title": "Barbforkansas.Com",
      "publisher": "barbforkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Marty Tuley's generated v2 profile."
      ]
    },
    {
      "id": "s-100",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li_2024/b2023_24/members/rep_wasinger_barbara_1/",
      "title": "Kslegislature.Gov",
      "publisher": "kslegislature.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Marty Tuley's generated v2 profile."
      ]
    },
    {
      "id": "s-101",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas_State_Senate_District_38",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Marty Tuley's generated v2 profile."
      ]
    },
    {
      "id": "s-102",
      "tier": "secondary",
      "url": "https://ballotpedia.org/United_States_Senate_election_in_Kansas,_2026",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Marty Tuley's generated v2 profile."
      ]
    },
    {
      "id": "s-103",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas'_1st_Congressional_District_election,_2026",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Marty Tuley's generated v2 profile."
      ]
    },
    {
      "id": "s-104",
      "tier": "secondary",
      "url": "https://www.kcur.org/politics-elections-and-government/2025-12-30/whos-running-to-represent-kansas-in-the-u-s-senate-in-2026-heres-a-guide-to-the-candidates",
      "title": "Kcur.Org",
      "publisher": "kcur.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Marty Tuley's generated v2 profile."
      ]
    },
    {
      "id": "s-105",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas_2026_ballot_measures",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Marty Tuley's generated v2 profile."
      ]
    },
    {
      "id": "s-106",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas_Elections_for_Supreme_Court_Justices_Amendment_(August_2026",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Marty Tuley's generated v2 profile."
      ]
    },
    {
      "id": "s-107",
      "tier": "secondary",
      "url": "https://www.votenokansas.org/",
      "title": "Votenokansas.Org",
      "publisher": "votenokansas.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Marty Tuley's generated v2 profile."
      ]
    },
    {
      "id": "s-108",
      "tier": "primary",
      "url": "https://www.haysusa.com/335/Public-Library-Board",
      "title": "Haysusa.Com",
      "publisher": "haysusa.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Marty Tuley's generated v2 profile."
      ]
    },
    {
      "id": "s-109",
      "tier": "secondary",
      "url": "https://haysmedfoundation.org/board/",
      "title": "Haysmedfoundation.Org",
      "publisher": "haysmedfoundation.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Marty Tuley's generated v2 profile."
      ]
    },
    {
      "id": "s-110",
      "tier": "primary",
      "url": "https://sos.ks.gov/elections/important-election-dates.html",
      "title": "Sos.Ks.Gov",
      "publisher": "sos.ks.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Marty Tuley's generated v2 profile."
      ]
    },
    {
      "id": "s-111",
      "tier": "primary",
      "url": "https://haysusa.com",
      "title": "Haysusa.Com",
      "publisher": "haysusa.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Marty Tuley's generated v2 profile."
      ]
    },
    {
      "id": "s-112",
      "tier": "primary",
      "url": "https://sos.ks.gov/elections/elections.html",
      "title": "Sos.Ks.Gov",
      "publisher": "sos.ks.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Marty Tuley's generated v2 profile."
      ]
    },
    {
      "id": "s-113",
      "tier": "primary",
      "url": "https://www.usd489.com",
      "title": "Usd489.Com",
      "publisher": "usd489.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Marty Tuley's generated v2 profile."
      ]
    },
    {
      "id": "s-114",
      "tier": "secondary",
      "url": "https://ministryofinfluence.org/candidates/martin-tuley/",
      "title": "Ministryofinfluence.Org",
      "publisher": "ministryofinfluence.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Marty Tuley's generated v2 profile."
      ]
    },
    {
      "id": "s-115",
      "tier": "secondary",
      "url": "https://www.tuley4gov2026.com/contact",
      "title": "Tuley4gov2026.Com",
      "publisher": "tuley4gov2026.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Marty Tuley's generated v2 profile."
      ]
    },
    {
      "id": "s-social-crossref-1",
      "tier": "secondary",
      "url": "https://player.kmaj1440.com/2025/08/01/who-is-running-for-governor-in-kansas-for-2026/",
      "title": "player.kmaj1440.com / Player.Kmaj1440",
      "publisher": "Player.Kmaj1440",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Marriage & Family / LGBTQ+ Policy.",
        "KSNT's candidate guide characterized Tuley as a moderate Democrat and summarized his visible issue set as teacher pay, farm-to-table public health, transgender girls' sports, canna"
      ]
    },
    {
      "id": "s-social-crossref-2",
      "tier": "secondary",
      "url": "https://www.tuley4gov2026.com/to-do-list",
      "title": "tuley4gov2026.com / Tuley4gov2026",
      "publisher": "Tuley4gov2026",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Marriage & Family / LGBTQ+ Policy.",
        "On cultural and family-policy issues, Tuley's most visible distinctive position is his statement that he supports transgender rights but opposes transgender girls competing in spor"
      ]
    },
    {
      "id": "s-social-crossref-3",
      "tier": "secondary",
      "url": "https://www.tuley4gov2026.com/meet-marty",
      "title": "tuley4gov2026.com / Tuley4gov2026",
      "publisher": "Tuley4gov2026",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Immigration / Border.",
        "The campaign's governance language emphasizes practicality, transparency, and limits on political theater. The \"Meet Marty\" page says he is running to bring practical leadership an"
      ]
    }
  ]
};

if (process.env.NODE_ENV !== "production") {
  const result = validateCandidateV2(MARTY_TULEY_V2);
  if (!result.ok) {
    // eslint-disable-next-line no-console
    console.error(
      "[marty-tuley.ts] validateCandidateV2 FAILED:\n" +
        result.errors.join("\n"),
    );
  }
}
