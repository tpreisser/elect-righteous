/* Auto-normalized with issue-mapped social/online cross-reference signals.
 * To refresh:
 *   node scripts/hydrate-v2-social-signals.mjs
 */

import type { CandidateFullV2 } from "@/data/types-v2";
import { validateCandidateV2 } from "@/data/types-v2";

export const JASON_HART_V2: CandidateFullV2 = {
  "slug": "jason-hart",
  "name": "Jason Hart",
  "party": "D",
  "position": "U.S. Senate candidate",
  "electionSlug": "us-senate-2026",
  "incumbent": false,
  "occupation": "U.S. Senate candidate",
  "hometown": "Wichita, KS",
  "family": "Married with family. Describes himself as a husband and father.",
  "campaignWebsite": "https://hartforsenate.com",
  "issues": [
    {
      "id": "i-abortion-sanctity-of-life-1",
      "title": "Abortion / Sanctity of Life",
      "stated": {
        "text": "Has not taken a specific public position on abortion in the available record.",
        "sourceIds": [
          "s-31",
          "s-32",
          "s-69",
          "s-79",
          "s-80",
          "s-81"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "hartforsenate.com",
          "observation": "Issues page: hartforsenate.com/issues lists ten issue areas: Assert Congressional Authority; Provide for Our Veterans; Provide for Kansans' Health; Promote Rational Immigration Solutions; Help Rural Kansas; Recognize Our Shared Dignity; Protect Public Education; Protecting Reproductive Rights; Hold Big Tech Accountable; Promote Democratic Values.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "i-abortion-sanctity-of-life-1"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Bluesky",
          "observation": "Across the captured Bluesky period the feed contains no post-length discussion of abortion; the official issues page lists \"Protecting Reproductive Rights\" and \"Support Kansans' 2022 Vote.\"",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-9"
          ],
          "mappedToIssueId": "i-abortion-sanctity-of-life-1"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Bluesky",
          "observation": "Across 35 captured Bluesky posts, Hart's largest single category is policy and issue statements, with 14 posts, or 40 percent of the captured original feed. The March 16 opening post wrote, \"Jason Hart has filed to run for U.S. Senate\" (source), then listed family bills, health, veterans, immigration, and children online as the opening frame. On April 23, he wrote, \"Rural Kansas needs real access to healthcare...",
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
          "s-6",
          "s-7",
          "s-16",
          "s-31",
          "s-32",
          "s-46"
        ]
      },
      "actions": [],
      "socialSignals": []
    },
    {
      "id": "i-religious-liberty-3",
      "title": "Religious Liberty",
      "stated": {
        "text": "Runs as a Democrat. No specific personal statement found in public sources.",
        "sourceIds": [
          "s-6",
          "s-18",
          "s-22",
          "s-23",
          "s-27",
          "s-31"
        ]
      },
      "actions": [],
      "socialSignals": []
    },
    {
      "id": "i-guns-second-amendment-4",
      "title": "Guns / Second Amendment",
      "stated": {
        "text": "Describes himself as \"2A-friendly\" and has made his support for gun rights a central part of his electability pitch as a Democrat in Kansas.",
        "sourceIds": [
          "s-82",
          "s-83",
          "s-84",
          "s-88",
          "s-94",
          "s-95"
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
          "s-3",
          "s-6",
          "s-7",
          "s-8",
          "s-9",
          "s-10"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Public web",
          "observation": "Most-used tags: #HartForKansas, #KansansHaveHart, #Democrats, #Senate. Issue tags appeared on immigration enforcement, Pride, Iran, and ICT SOS posts.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-9"
          ],
          "mappedToIssueId": "i-immigration-border-5"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Kansas Reflector",
          "observation": "On immigration enforcement, he wrote, \"Renée Good and Alex Pretti were killed, and five‑year‑old Liam Ramos was taken into ICE custody during a federal enforcement operation\" (source). In the KMUW/Kansas Reflector interview, he said, \"That service has been as an advocate for your interests\" (source).",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-3"
          ],
          "mappedToIssueId": "i-immigration-border-5"
        }
      ]
    }
  ],
  "whoTheyAre": "Jason Hart is a Wichita lawyer and former federal prosecutor running for the Democratic nomination for U.S. Senate in 2026. His public biography is built around more than two decades in prosecution, including work in Dodge City, the Shawnee County District Attorney's office, the Kansas Attorney General's office, and 16 years as an assistant U.S. attorney in Kansas.\n\nHart entered the race in March 2026 after leaving his federal post. That made him one of the latest entrants in the field, but also one of the most unusual. He launched with a law-and-order résumé, a deliberate pitch to disaffected Republicans, and a party-history story that drew immediate attention.\n\nThat party-history story is central to his profile. Hart had been registered as an independent, changed to Republican in February 2026 while considering a run against Rep. Ron Estes, and then changed to Democrat in March 2026 when he entered the Senate race. He has described the decision to run as the product of prayerful and tearful discussions with his wife and family.",
  "recordSummary": "Hart does not have a legislative record, so his public record is mostly his work as a prosecutor and the circumstances of his campaign launch. The strongest credential in the raw material is his 16-year tenure as an assistant U.S. attorney handling child exploitation and cybercrime cases under both Republican and Democratic administrations.\n\nHis candidacy has been shaped as much by rhetoric as by résumé. Kansas Reflector reported that Hart has openly courted Republicans who feel estranged from the current GOP, and he has argued that Kansas Democrats need a candidate who can draw those voters rather than just consolidate the party base.\n\nThat argument has also created controversy inside the Democratic field. Hart publicly described himself as a \"white, male, Christian, hetero, 2A-friendly, LEO-friendly\" candidate, presenting those traits as part of his electability case in Kansas. Supporters can read that as blunt realism; critics can read it as a narrow theory of representation.",
  "ownWordsNarrative": "*A summary of what Jason Hart has publicly said, posted, and amplified across social media. Drawn from public posts on Bluesky, X, Facebook, YouTube, Instagram, TikTok, LinkedIn, and official campaign pages between March 16, 2026 and May 11, 2026. We report patterns; we do not interpret intent.*\n\n---\n\nAcross [35 captured Bluesky posts](social-harvest.md), Hart's largest single category is policy and issue statements, with 14 posts, or 40 percent of the captured original feed. The March 16 opening post wrote, \"Jason Hart has filed to run for U.S. Senate\" ([source](https://bsky.app/profile/kansanshavehart.bsky.social/post/3mh7eajrwos2f)), then listed family bills, health, veterans, immigration, and children online as the opening frame. On April 23, he wrote, \"Rural Kansas needs real access to healthcare providers\" ([source](https://bsky.app/profile/kansanshavehart.bsky.social/post/3mk6fxkfosc2x)). His [official issues page](https://hartforsenate.com/issues) lists ten policy areas, including veterans, healthcare, immigration, rural Kansas, public education, reproductive rights, technology, and campaign-finance rules.\n\nHart's public alignment signal is built more through events and organizations than through reposts. The captured Bluesky feed contains no reposts from other accounts and no shared posts from Democratic primary opponents. He posted appearances with the [Harvey County Democratic Party](https://bsky.app/profile/kansanshavehart.bsky.social/post/3mklfhsqnvc22), [Kingman County Democrats](https://bsky.app/profile/kansanshavehart.bsky.social/post/3mjwqagwvp222), and [Riley County Democratic Party](https://bsky.app/profile/kansanshavehart.bsky.social/post/3mhyeggmxh22l), and wrote that he attended [Little Apple Pride](https://bsky.app/profile/kansanshavehart.bsky.social/post/3mklf7g4loc22) and [ICT SOS's 15th Anniversary Celebration](https://bsky.app/profile/kansanshavehart.bsky.social/post/3miegj7xaa22s). In a March 25 KMUW republication of a Kansas Reflector interview, he said, \"There are many Republicans who are in the wilderness right now\" ([source](https://www.kmuw.org/government/2026-03-25/democratic-candidate-in-u-s-senate-race-opens-arms-to-kansas-republicans-lost-in-the-wilderness)).\n\nVisible audience response is small on Bluesky and larger on YouTube Shorts. The most-engaged Bluesky item was the March 16 filing post, with 7 likes, 1 repost, 0 replies, and 0 quotes as of the May 11, 2026 capture ([source](https://bsky.app/profile/kansanshavehart.bsky.social/post/3mh7eajrwos2f)). Two issue-and-record posts each had 2 likes and 2 reposts: the April 23 rural-healthcare post ([source](https://bsky.app/profile/kansanshavehart.bsky.social/post/3mk6fxkfosc2x)) and the March 26 prosecutor-record post ([source](https://bsky.app/profile/kansanshavehart.bsky.social/post/3mhxxymz6k22j)). On YouTube, the highest-viewed captured short was the April 23 Iran video, titled \"To clarify… this has happened five times now,\" ([source](https://www.youtube.com/shorts/PCjrC2kT-QA)) with 1,245 views and a star-rating count of 19 as of May 11, 2026.\n\nHart's national and foreign-policy posts are present but less frequent than healthcare, agriculture, campaign events, and biography. On April 23, he posted, \"When troops are in active operations, accountability matters at every level\" ([source](https://bsky.app/profile/kansanshavehart.bsky.social/post/3mk6wzvbujk25)). His YouTube channel also includes an April 7 Iran short titled \"This isn’t right\" ([source](https://www.youtube.com/shorts/-OCEAu9lf84)), with 881 views and a star-rating count of 38 as of May 11, 2026. On immigration enforcement, he wrote, \"Renée Good and Alex Pretti were killed, and five‑year‑old Liam Ramos was taken into ICE custody during a federal enforcement operation\" ([source](https://bsky.app/profile/kansanshavehart.bsky.social/post/3mj3eahdcyc2p)). In the KMUW/Kansas Reflector interview, he said, \"That service has been as an advocate for your interests\" ([source](https://www.kmuw.org/government/2026-03-25/democratic-candidate-in-u-s-senate-race-opens-arms-to-kansas-republicans-lost-in-the-wilderness)).\n\nFor Kansas-specific issues, Hart's feed names rural healthcare, agriculture, severe-weather forecasting, and county-level campaign stops. On April 22, he wrote that he heard from farmers \"across the political spectrum\" ([source](https://bsky.app/profile/kansanshavehart.bsky.social/post/3mk4bhpgo4c2p)) at a Harvey County Farm Bureau Association event. On April 8, he wrote, \"Kansas farmers are getting hit from every direction with higher fuel and fertilizer costs\" ([source](https://bsky.app/profile/kansanshavehart.bsky.social/post/3miyghyp6jc2b)). His events feed includes Dodge City, Pittsburg, Harvey County, Kingman County, Riley County, Manhattan, Hesston, and Wichita. His official issues page separately lists water conservation, foreign markets for farmers and ranchers, Medicaid and Medicare expansion, VA staffing, and public education as policy priorities ([source](https://hartforsenate.com/issues)).\n\nAcross the captured social period the feed contains no posts about the Farm Bill by name, Fort Riley by name, higher-education affordability, housing costs, child care costs, or the Ogallala Aquifer by name. Across the captured social period the feed contains no post-length discussion of abortion, though the official campaign issues page lists Protecting Reproductive Rights and Support Kansans' 2022 Vote ([source](https://hartforsenate.com/issues)). Across the captured social period the feed contains no reposts or quote-posts from primary opponents.\n\nHart's platform footprint spans several accounts, with low visible engagement in the captured metrics. His campaign website links to [Facebook](https://www.facebook.com/KansansHaveHart), [Instagram](https://www.instagram.com/kansanshavehart), [Bluesky](https://bsky.app/profile/kansanshavehart.bsky.social), [X](https://x.com/kansanshavehart), [TikTok](https://www.tiktok.com/@hartforkansas), and [YouTube](https://www.youtube.com/@kansanshavehart). As of May 11, 2026, Bluesky showed 6 followers, 2 follows, and 35 posts; X showed 7 followers, 2 following, and 36 statuses; Facebook showed 281 likes; TikTok showed 131 followers, 4 following, 788 likes, and 7 videos; YouTube RSS showed 7 public Shorts. No candidate-controlled Truth Social, Gab, Gettr, Substack, or Reddit account was found in the captured search pass.\n\n**Methodology:** Date range covered: March 16, 2026 to May 11, 2026. Platforms surveyed: official campaign site, Bluesky, X, Facebook, YouTube, Instagram, TikTok, LinkedIn, Truth Social, Gab, Gettr, Substack, and Reddit. Posts examined: 35 original Bluesky posts, 0 visible Bluesky reposts, 7 YouTube Shorts, and account-level TikTok, Facebook, X, Instagram, and LinkedIn metadata.\n\n*We report patterns; we do not interpret intent.*",
  "whereTheyWorship": "Public sources identify Hart as Christian, but they do not identify a current church affiliation.",
  "campaignFinance": {
    "totalRaised": "No public FEC finance summary available online as of 2026-04-01",
    "narrative": "No campaign finance data available online. The raw material cited his campaign site, ActBlue page, and FEC registration, but it did not provide a usable public totals summary.",
    "donors": [
      {
        "name": "Campaign finance data",
        "amount": "No campaign finance data available online yet"
      }
    ],
    "undisclosed": "Hart's first meaningful federal finance report may still be pending the next FEC disclosure window.",
    "reportingPeriod": "through 2026-04-01",
    "source": "FEC search, campaign records, and reviewed public reporting"
  },
  "socialResearchNote": "Social research is included as observed public behavior, not as a proxy for belief. Platforms/sources checked: Campaign website, Bluesky, X, Facebook, YouTube, Instagram, TikTok, LinkedIn, Truth Social, Gab, Gettr, Substack, Reddit. Harvest range: 2026-03-16 through 2026-05-11.",
  "sources": [
    {
      "id": "s-1",
      "tier": "primary",
      "url": "https://www.fec.gov/data/elections/senate/KS/2026/",
      "title": "Fec.Gov",
      "publisher": "fec.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-2",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Chase_LaPorte",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-3",
      "tier": "secondary",
      "url": "https://www.christydavisforkansas.com/",
      "title": "Christydavisforkansas.Com",
      "publisher": "christydavisforkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-4",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Christy_Davis",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-5",
      "tier": "secondary",
      "url": "https://www.emporiagazette.com/free/article_a62c2b8f-db73-4d78-b386-94bee4080a06.html",
      "title": "Emporiagazette.Com",
      "publisher": "emporiagazette.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-6",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/08/18/democratic-u-s-senate-candidate-eager-to-broaden-kansas-voice-in-d-c-politics/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-7",
      "tier": "secondary",
      "url": "https://www.kcur.org/politics-elections-and-government/2025-12-30/whos-running-to-represent-kansas-in-the-u-s-senate-in-2026-heres-a-guide-to-the-candidates",
      "title": "Kcur.Org",
      "publisher": "kcur.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-8",
      "tier": "secondary",
      "url": "https://patrickforkansas.com/",
      "title": "Patrickforkansas.Com",
      "publisher": "patrickforkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-9",
      "tier": "social",
      "url": "https://www.facebook.com/patrickforkansas/",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-10",
      "tier": "secondary",
      "url": "https://patrickforkansas.com/about/",
      "title": "Patrickforkansas.Com",
      "publisher": "patrickforkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-11",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Patrick_Schmidt",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-12",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li/b2025_26/members/sen_schmidt_patrick_1/",
      "title": "Kslegislature.Gov",
      "publisher": "kslegislature.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-13",
      "tier": "secondary",
      "url": "https://en.wikipedia.org/wiki/Patrick_Schmidt_(politician",
      "title": "En.Wikipedia.Org",
      "publisher": "en.wikipedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-14",
      "tier": "secondary",
      "url": "https://www.wibw.com/2026/02/05/kansas-state-senator-files-us-senate/",
      "title": "Wibw.Com",
      "publisher": "wibw.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-15",
      "tier": "secondary",
      "url": "https://sandyforkansas.com/",
      "title": "Sandyforkansas.Com",
      "publisher": "sandyforkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-16",
      "tier": "primary",
      "url": "https://www.fec.gov/data/candidate/S6KS00262/",
      "title": "Fec.Gov",
      "publisher": "fec.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-17",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Sandy_Spidel_Neumann",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-18",
      "tier": "secondary",
      "url": "https://kansasreflector.com/briefs/kansas-democrat-launches-u-s-senate-campaign-criticizes-gop-incumbent-marshall/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-19",
      "tier": "secondary",
      "url": "https://www.anneforkansas.com/",
      "title": "Anneforkansas.Com",
      "publisher": "anneforkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-20",
      "tier": "social",
      "url": "https://www.linkedin.com/in/anne-lea-parelkar-83095659/",
      "title": "Linkedin.Com",
      "publisher": "linkedin.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-21",
      "tier": "secondary",
      "url": "https://1350kman.com/2026/03/within-reason-with-mike-matson-anne-parelkar-overland-park-immigration-attorney/",
      "title": "1350kman.Com",
      "publisher": "1350kman.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-22",
      "tier": "secondary",
      "url": "https://kansasreflector.com/podcasts/anne-parelkar-latest-democrat-running-for-kansas-u-s-senate-seat/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-23",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/08/25/democratic-immigration-lawyer-wants-to-fix-broken-system-with-run-for-u-s-senate-in-kansas/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-24",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Anne_Parelkar",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-25",
      "tier": "secondary",
      "url": "https://erikforkansas.com/",
      "title": "Erikforkansas.Com",
      "publisher": "erikforkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-26",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/03/16/kansas-city-entrepreneur-prioritizes-passion-decency-in-campaign-for-u-s-senate/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-27",
      "tier": "secondary",
      "url": "https://sunflowerstatejournal.com/kck-developer-announces-for-u-s-senate-as-democratic-primary-grows-to-five/",
      "title": "Sunflowerstatejournal.Com",
      "publisher": "sunflowerstatejournal.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-28",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Erik_Murray",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-29",
      "tier": "secondary",
      "url": "https://erikforkansas.com/meet-erik/",
      "title": "Erikforkansas.Com",
      "publisher": "erikforkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-30",
      "tier": "secondary",
      "url": "https://hartforsenate.com/",
      "title": "Hartforsenate.Com",
      "publisher": "hartforsenate.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-31",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/03/23/democratic-candidate-in-u-s-senate-race-opens-arms-to-kansas-republicans-lost-in-the-wilderness/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-32",
      "tier": "secondary",
      "url": "https://www.kmuw.org/government/2026-03-25/democratic-candidate-in-u-s-senate-race-opens-arms-to-kansas-republicans-lost-in-the-wilderness",
      "title": "Kmuw.Org",
      "publisher": "kmuw.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-33",
      "tier": "secondary",
      "url": "https://mikeforkansas.my.canva.site/",
      "title": "Mikeforkansas.My.Canva.Site",
      "publisher": "mikeforkansas.my.canva.site",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-34",
      "tier": "secondary",
      "url": "https://secure.actblue.com/donate/michael-soetaert",
      "title": "Secure.Actblue.Com",
      "publisher": "secure.actblue.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-35",
      "tier": "social",
      "url": "https://www.facebook.com/michael.soetaert1/",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-36",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Michael_Soetaert",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-37",
      "tier": "secondary",
      "url": "https://www.noahforkansas.com/",
      "title": "Noahforkansas.Com",
      "publisher": "noahforkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-38",
      "tier": "secondary",
      "url": "https://www.kwch.com/2026/03/17/kansas-veteran-noah-taylor-announces-campaign-us-senate/",
      "title": "Kwch.Com",
      "publisher": "kwch.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-39",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/01/29/will-sharice-davids-run-for-u-s-senate-from-kansas-shes-not-saying-no-and-signs-point-to-yes/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-40",
      "tier": "secondary",
      "url": "https://www.kcur.org/podcast/up-to-date/2026-02-24/will-sharice-davids-run-to-represent-kansas-in-the-u-s-senate-shes-not-ruling-it-out",
      "title": "Kcur.Org",
      "publisher": "kcur.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-41",
      "tier": "secondary",
      "url": "https://www.cookpolitical.com/senate/race/488581",
      "title": "Cookpolitical.Com",
      "publisher": "cookpolitical.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-42",
      "tier": "secondary",
      "url": "https://centerforpolitics.org/crystalball/2026-senate/",
      "title": "Centerforpolitics.Org",
      "publisher": "centerforpolitics.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-43",
      "tier": "secondary",
      "url": "https://www.270towin.com/polls/latest-2026-senate-election-polls/",
      "title": "270towin.Com",
      "publisher": "270towin.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-44",
      "tier": "secondary",
      "url": "https://www.realclearpolling.com/latest-polls/senate",
      "title": "Realclearpolling.Com",
      "publisher": "realclearpolling.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-45",
      "tier": "secondary",
      "url": "https://www.racetothewh.com/senate/26polls",
      "title": "Racetothewh.Com",
      "publisher": "racetothewh.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-46",
      "tier": "primary",
      "url": "https://sos.ks.gov/elections/elections_upcoming_candidate.aspx",
      "title": "Sos.Ks.Gov",
      "publisher": "sos.ks.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-47",
      "tier": "primary",
      "url": "https://kpdc.kansas.gov/campaign-finance/view-submitted-forms-and-reports/",
      "title": "Kpdc.Kansas.Gov",
      "publisher": "kpdc.kansas.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-48",
      "tier": "secondary",
      "url": "https://ballotpedia.org/United_States_Senate_election_in_Kansas,_2026",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-49",
      "tier": "secondary",
      "url": "https://en.wikipedia.org/wiki/2026_United_States_Senate_election_in_Kansas",
      "title": "En.Wikipedia.Org",
      "publisher": "en.wikipedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-50",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/03/08/kansas-democrats-in-u-s-senate-campaign-focus-on-defeating-gop-incumbent/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-51",
      "tier": "secondary",
      "url": "https://smartpolitics.lib.umn.edu/2025/03/05/how-well-can-democrats-fare-in-kansas-2026-us-senate-election/",
      "title": "Smartpolitics.Lib.Umn.Edu",
      "publisher": "smartpolitics.lib.umn.edu",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-52",
      "tier": "social",
      "url": "https://www.facebook.com/christy.davis.710/",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-53",
      "tier": "social",
      "url": "https://x.com/speumann",
      "title": "X.Com",
      "publisher": "x.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-54",
      "tier": "social",
      "url": "https://www.instagram.com/speumann/",
      "title": "Instagram.Com",
      "publisher": "instagram.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-55",
      "tier": "social",
      "url": "https://www.linkedin.com/in/sandy-spidel-neumann-a278536/",
      "title": "Linkedin.Com",
      "publisher": "linkedin.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-56",
      "tier": "social",
      "url": "https://www.facebook.com/",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-57",
      "tier": "primary",
      "url": "https://www.fec.gov/data/candidate/S2KS00097/",
      "title": "Fec.Gov",
      "publisher": "fec.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-58",
      "tier": "secondary",
      "url": "https://www.kssenatedems.org/patrick-schmidt",
      "title": "Kssenatedems.Org",
      "publisher": "kssenatedems.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-59",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li/b2025_26/members/rep_hawkins_daniel_1/",
      "title": "Kslegislature.Gov",
      "publisher": "kslegislature.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-60",
      "tier": "secondary",
      "url": "https://www.hawkinsforinsurance.com/",
      "title": "Hawkinsforinsurance.Com",
      "publisher": "hawkinsforinsurance.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-61",
      "tier": "social",
      "url": "https://x.com/danhawkinsks",
      "title": "X.Com",
      "publisher": "x.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-62",
      "tier": "secondary",
      "url": "https://www.dinahsykes.com/",
      "title": "Dinahsykes.Com",
      "publisher": "dinahsykes.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-63",
      "tier": "social",
      "url": "https://www.facebook.com/Sykes4KS/",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-64",
      "tier": "secondary",
      "url": "https://www.kssenatedems.org/dinah-sykes",
      "title": "Kssenatedems.Org",
      "publisher": "kssenatedems.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-65",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li/b2025_26/members/sen_sykes_dinah_1/",
      "title": "Kslegislature.Gov",
      "publisher": "kslegislature.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-66",
      "tier": "secondary",
      "url": "https://kansasreflector.com/briefs/kansas-senate-minority-leader-challenges-gop-house-speaker-for-state-insurance-commissioner/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-67",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/03/22/kansas-house-speaker-desperately-maneuvers-to-sabotage-vote-on-senate-bill-capping-drug-costs/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-68",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/05/13/kansas-house-speaker-launches-campaign-for-insurance-commissioner-with-pro-trump-rhetoric-1/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-69",
      "tier": "secondary",
      "url": "https://heartlandsignal.com/2026/03/26/kansas-republicans-defy-house-speaker-dan-hawkins-and-pass-prescription-drug-consumer-protections-bill/",
      "title": "Heartlandsignal.Com",
      "publisher": "heartlandsignal.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-70",
      "tier": "secondary",
      "url": "https://www.kmuw.org/government/2026-03-26/kansas-house-passes-bill-providing-stricter-regulation-of-prescription-drug-middlemen",
      "title": "Kmuw.Org",
      "publisher": "kmuw.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-71",
      "tier": "primary",
      "url": "https://www.fec.gov/data/candidate/S0KS00315/",
      "title": "Fec.Gov",
      "publisher": "fec.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-72",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas_Insurance_Commissioner_election,_2026",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-73",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Daniel_Hawkins_(Kansas",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-74",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Dinah_Sykes",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-75",
      "tier": "secondary",
      "url": "https://sunflowerstatejournal.com/hawkins-reveals-campaign-fundraising-for-insurance-commissioner/",
      "title": "Sunflowerstatejournal.Com",
      "publisher": "sunflowerstatejournal.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-76",
      "tier": "secondary",
      "url": "https://www.nrsc.org/press-releases/nrsc-calls-for-investigation-into-four-kansas-democrat-senate-candidates-for-violating-the-law-2026-03-11/",
      "title": "Nrsc.Org",
      "publisher": "nrsc.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-77",
      "tier": "secondary",
      "url": "https://freebeacon.com/democrats/kansas-senate-candidate-names-his-political-inspiration-a-black-panther-soldier-working-to-destroy-the-american-empire/",
      "title": "Freebeacon.Com",
      "publisher": "freebeacon.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-78",
      "tier": "secondary",
      "url": "https://www.ksn.com/news/state-regional/kansas-us-senate-candidates-under-scrutiny-over-missing-financial-disclosures/",
      "title": "Ksn.Com",
      "publisher": "ksn.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-79",
      "tier": "secondary",
      "url": "https://www.cnn.com/2018/12/19/politics/kansas-legislature-republican-democrat/index.html",
      "title": "Cnn.Com",
      "publisher": "cnn.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-80",
      "tier": "secondary",
      "url": "https://www.kcur.org/politics-elections-and-government/2018-12-19/more-kansas-legislative-republicans-jump-ship-become-democrats",
      "title": "Kcur.Org",
      "publisher": "kcur.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-81",
      "tier": "secondary",
      "url": "https://www.salon.com/2018/12/21/three-kansas-republicans-switch-parties-in-one-week-more-defections-expected/",
      "title": "Salon.Com",
      "publisher": "salon.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-82",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas_Elections_for_Supreme_Court_Justices_Amendment_(August_2026",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-83",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/08/07/rivals-launch-fight-over-kansas-constitutional-amendment-to-elect-supreme-court-justices/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-84",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/02/10/kansas-method-of-picking-supreme-court-justices-could-be-improved-but-will-an-amendment-do-that/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-85",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/03/19/kansas-house-endorses-plan-to-elect-supreme-court-justices-placing-question-on-august-2026-ballot/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-86",
      "tier": "secondary",
      "url": "https://thebeaconnews.org/stories/2025/03/19/kansas-supreme-court-elections-voters-will-decide-in-2026/",
      "title": "Thebeaconnews.Org",
      "publisher": "thebeaconnews.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-87",
      "tier": "secondary",
      "url": "https://www.kcur.org/politics-elections-and-government/2026-01-26/kansas-lawmakers-want-to-reveal-more-about-the-people-picking-supreme-court-justices",
      "title": "Kcur.Org",
      "publisher": "kcur.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-88",
      "tier": "secondary",
      "url": "https://sunflowerstatejournal.com/judicial-amendment-campaign-shapes-up-outside-group-books-nearly-1-million-in-ads/",
      "title": "Sunflowerstatejournal.Com",
      "publisher": "sunflowerstatejournal.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-89",
      "tier": "secondary",
      "url": "https://www.votenokansas.org/",
      "title": "Votenokansas.Org",
      "publisher": "votenokansas.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-90",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li/b2025_26/measures/documents/summary_scr_1611_2025",
      "title": "Kslegislature.Gov",
      "publisher": "kslegislature.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-91",
      "tier": "secondary",
      "url": "https://www.brennancenter.org/our-work/analysis-opinion/wisconsin-supreme-court-race-breaks-spending-record-fueled-out-state",
      "title": "Brennancenter.Org",
      "publisher": "brennancenter.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-92",
      "tier": "secondary",
      "url": "https://pbswisconsin.org/news-item/billionaires-push-spending-in-the-2025-wisconsin-supreme-court-race-over-the-100-million-mark/",
      "title": "Pbswisconsin.Org",
      "publisher": "pbswisconsin.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-93",
      "tier": "secondary",
      "url": "https://www.npr.org/2025/04/01/nx-s1-5345862/wisconsin-supreme-court-crawford-schimel-election-results",
      "title": "Npr.Org",
      "publisher": "npr.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-94",
      "tier": "secondary",
      "url": "https://www.kansasinformationnetwork.com/2026-Kansas-Constitutional-Amendment",
      "title": "Kansasinformationnetwork.Com",
      "publisher": "kansasinformationnetwork.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-95",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas_Citizenship_Voting_Requirement_Amendment_(2026",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-96",
      "tier": "secondary",
      "url": "https://news.ballotpedia.org/2025/03/27/kansas-voters-will-decide-on-citizenship-voting-requirement-amendment-in-2026-similar-measures-were-approved-in-eight-states-in-2024/",
      "title": "News.Ballotpedia.Org",
      "publisher": "news.ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-97",
      "tier": "secondary",
      "url": "https://www.npr.org/2018/06/19/621304260/judge-tosses-kansas-proof-of-citizenship-voter-law-and-rebukes-sec-of-state-koba",
      "title": "Npr.Org",
      "publisher": "npr.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-98",
      "tier": "secondary",
      "url": "https://www.aclukansas.org/press-releases/resounding-victory-tens-thousands-disenfranchised-kansas-voters-supreme-court-refuses/",
      "title": "Aclukansas.Org",
      "publisher": "aclukansas.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-99",
      "tier": "secondary",
      "url": "https://www.cnn.com/2024/11/03/politics/noncitizen-voting-ballot-measures-election/index.html",
      "title": "Cnn.Com",
      "publisher": "cnn.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-100",
      "tier": "secondary",
      "url": "https://www.prismnews.com/news/kansas-proof-of-citizenship-voting-law-blocked-31000",
      "title": "Prismnews.Com",
      "publisher": "prismnews.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-101",
      "tier": "secondary",
      "url": "https://www.pbs.org/newshour/nation/kansas-hopes-to-resurrect-proof-of-citizenship-voting-law",
      "title": "Pbs.Org",
      "publisher": "pbs.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-102",
      "tier": "secondary",
      "url": "https://www.kcur.org/politics-elections-and-government/2025-07-24/kansas-governor-race-2026-election-candidates",
      "title": "Kcur.Org",
      "publisher": "kcur.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-103",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/01/30/six-kansas-gop-candidates-for-governor-toss-haymakers-in-first-debate-find-unity-on-key-issues/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-104",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/07/22/kansas-sen-ethan-corson-enters-race-for-democratic-partys-nomination-for-governor/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-105",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas_gubernatorial_and_lieutenant_gubernatorial_election,_2026",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-106",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/11/25/kansas-democratic-candidates-for-u-s-senate-sharpen-attack-on-gop-incumbent-roger-marshall/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-107",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2026/01/05/lawrence-democrats-take-aim-at-kansas-republicans-congressional-seat/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-108",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas'_1st_Congressional_District_election,_2026",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-109",
      "tier": "primary",
      "url": "https://mann.house.gov/",
      "title": "Mann.House.Gov",
      "publisher": "mann.house.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-110",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/07/30/kansas-election-for-attorney-general-in-2026-may-become-a-repeat-of-2022-showdown/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-111",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas_Attorney_General_election,_2026",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-112",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/04/04/leavenworth-house-member-first-republican-to-declare-as-2026-candidate-for-secretary-of-state/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-113",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas_Secretary_of_State_election,_2026",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-114",
      "tier": "secondary",
      "url": "https://kspress.com/news/2026/03/27/kansas-legislature-passes-package-of-elections-bills-that-alter-voting-processes",
      "title": "Kspress.Com",
      "publisher": "kspress.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-115",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li/b2025_26/members/rep_wasinger_barbara_1/",
      "title": "Kslegislature.Gov",
      "publisher": "kslegislature.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-116",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas_House_of_Representatives_District_111",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-117",
      "tier": "secondary",
      "url": "https://barbforkansas.com/",
      "title": "Barbforkansas.Com",
      "publisher": "barbforkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-118",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas_State_Board_of_Education_election,_2026",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-119",
      "tier": "primary",
      "url": "https://www.ksde.gov/Board/Kansas-State-Board-of-Education/District-5",
      "title": "Ksde.Gov",
      "publisher": "ksde.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-120",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2024/10/22/kansas-board-of-education-races-could-shift-power-to-conservative-bloc/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-121",
      "tier": "primary",
      "url": "https://www.marshall.senate.gov/about/",
      "title": "Marshall.Senate.Gov",
      "publisher": "marshall.senate.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-122",
      "tier": "primary",
      "url": "https://www.congress.gov/member/roger-marshall/M001198",
      "title": "Congress.Gov",
      "publisher": "congress.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-123",
      "tier": "primary",
      "url": "https://www.fec.gov/data/committee/C00576173/?cycle=2026",
      "title": "Fec.Gov",
      "publisher": "fec.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-124",
      "tier": "primary",
      "url": "https://www.govtrack.us/congress/members/roger_marshall/412704",
      "title": "Govtrack.Us",
      "publisher": "govtrack.us",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-125",
      "tier": "secondary",
      "url": "https://en.wikipedia.org/wiki/Roger_Marshall",
      "title": "En.Wikipedia.Org",
      "publisher": "en.wikipedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-126",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Roger_Marshall",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-127",
      "tier": "primary",
      "url": "https://www.kansashistory.gov/kansapedia/roger-w-marshall/19968",
      "title": "Kansashistory.Gov",
      "publisher": "kansashistory.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-128",
      "tier": "secondary",
      "url": "https://justfacts.votesmart.org/candidate/biography/172080/roger-marshall",
      "title": "Justfacts.Votesmart.Org",
      "publisher": "justfacts.votesmart.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-129",
      "tier": "secondary",
      "url": "https://www.opensecrets.org/members-of-congress/roger-marshall/summary?cid=N00037034",
      "title": "Opensecrets.Org",
      "publisher": "opensecrets.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-130",
      "tier": "secondary",
      "url": "https://www.opensecrets.org/members-of-congress/roger-marshall/industries?cid=N00037034",
      "title": "Opensecrets.Org",
      "publisher": "opensecrets.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-131",
      "tier": "secondary",
      "url": "https://www.quiverquant.com/congresstrading/politician/Roger%20Marshall-M001198/net-worth",
      "title": "Quiverquant.Com",
      "publisher": "quiverquant.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-132",
      "tier": "secondary",
      "url": "https://justfacts.votesmart.org/candidate/key-votes/172080/roger-marshall",
      "title": "Justfacts.Votesmart.Org",
      "publisher": "justfacts.votesmart.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-133",
      "tier": "secondary",
      "url": "https://heritageaction.com/scorecard/members/m001198",
      "title": "Heritageaction.Com",
      "publisher": "heritageaction.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-134",
      "tier": "secondary",
      "url": "https://sbaprolife.org/senator/roger-marshall",
      "title": "Sbaprolife.Org",
      "publisher": "sbaprolife.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-135",
      "tier": "secondary",
      "url": "https://www.ontheissues.org/house/Roger_Marshall_Principles_+_Values.htm",
      "title": "Ontheissues.Org",
      "publisher": "ontheissues.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-136",
      "tier": "secondary",
      "url": "https://www.cnn.com/2021/05/03/politics/roger-marshall-january-6-cnn-big-lie",
      "title": "Cnn.Com",
      "publisher": "cnn.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-137",
      "tier": "secondary",
      "url": "https://www.cbsnews.com/news/anthony-fauci-roger-marshall-hot-mic-moron/",
      "title": "Cbsnews.Com",
      "publisher": "cbsnews.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-138",
      "tier": "secondary",
      "url": "https://www.kcur.org/news/2021-08-26/kansas-senator-roger-marshall-is-a-doctor-but-his-covid-19-advice-doesnt-always-sound-like-it",
      "title": "Kcur.Org",
      "publisher": "kcur.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-139",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/03/05/marshall-says-paid-agitators-swamped-kansas-forum-if-he-proves-it-ill-eat-a-copy-of-project-2025/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-140",
      "tier": "secondary",
      "url": "https://www.yahoo.com/news/roger-marshall-calls-kansas-cabin-160558825.html",
      "title": "Yahoo.Com",
      "publisher": "yahoo.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-141",
      "tier": "secondary",
      "url": "https://kansasreflector.com/briefs/moran-marshall-diverge-on-95-billion-ukraine-israel-aid-passed-by-congress/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-142",
      "tier": "secondary",
      "url": "https://kansansformarshall.com/",
      "title": "Kansansformarshall.Com",
      "publisher": "kansansformarshall.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-143",
      "tier": "secondary",
      "url": "https://www.avvo.com/attorneys/67202-ks-jason-hart-1922169.html",
      "title": "Avvo.Com",
      "publisher": "avvo.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-144",
      "tier": "primary",
      "url": "https://www.justice.gov/usao-ks/pr/kansas-man-sentenced-480-months-production-child-porn",
      "title": "Justice.Gov",
      "publisher": "justice.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-145",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/03/03/freshman-kansas-senator-trying-to-stop-bad-stuff-while-pressing-for-property-tax-relief/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-146",
      "tier": "secondary",
      "url": "https://www.kwch.com/2026/02/05/kansas-state-senator-files-us-senate/",
      "title": "Kwch.Com",
      "publisher": "kwch.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-147",
      "tier": "secondary",
      "url": "https://legiscan.com/KS/people/patrick-schmidt/id/26167",
      "title": "Legiscan.Com",
      "publisher": "legiscan.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-148",
      "tier": "social",
      "url": "https://www.linkedin.com/in/christy-davis-19286b224/",
      "title": "Linkedin.Com",
      "publisher": "linkedin.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-149",
      "tier": "primary",
      "url": "https://www.rd.usda.gov/newsroom/news-release/usda-announces-rural-development-state-director-kansas",
      "title": "Rd.Usda.Gov",
      "publisher": "rd.usda.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-150",
      "tier": "secondary",
      "url": "https://justfacts.votesmart.org/candidate/biography/192415/christy-cauble-davis",
      "title": "Justfacts.Votesmart.Org",
      "publisher": "justfacts.votesmart.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-151",
      "tier": "secondary",
      "url": "https://americancoinop.com/articles/clean-history-laundromat-anchors-kansas-town",
      "title": "Americancoinop.Com",
      "publisher": "americancoinop.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-152",
      "tier": "secondary",
      "url": "https://www.threads.com/@speumann",
      "title": "Threads.Com",
      "publisher": "threads.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-153",
      "tier": "secondary",
      "url": "https://johnsoncountypost.com/2026/01/07/2026-u-s-senate-candidates-kansas-277190/sandy-spidel-neumann/",
      "title": "Johnsoncountypost.Com",
      "publisher": "johnsoncountypost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-154",
      "tier": "social",
      "url": "https://www.facebook.com/erik.murray.820582/",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-155",
      "tier": "social",
      "url": "https://www.instagram.com/erik4ks/",
      "title": "Instagram.Com",
      "publisher": "instagram.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-156",
      "tier": "social",
      "url": "https://www.linkedin.com/in/erikmurraysior",
      "title": "Linkedin.Com",
      "publisher": "linkedin.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-157",
      "tier": "secondary",
      "url": "https://afrotech.com/erik-murray-oakland-impact-group",
      "title": "Afrotech.Com",
      "publisher": "afrotech.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-158",
      "tier": "secondary",
      "url": "https://www.genglobal.org/user/erik",
      "title": "Genglobal.Org",
      "publisher": "genglobal.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-159",
      "tier": "secondary",
      "url": "https://lenspoliticalnotes.com/lens-political-note-792-erik-murray-kansas-us-senate/",
      "title": "Lenspoliticalnotes.Com",
      "publisher": "lenspoliticalnotes.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-160",
      "tier": "secondary",
      "url": "https://www.anneforkansas.com/about",
      "title": "Anneforkansas.Com",
      "publisher": "anneforkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-161",
      "tier": "secondary",
      "url": "https://immirail.com/profile-anne-lea-parelkar",
      "title": "Immirail.Com",
      "publisher": "immirail.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-162",
      "tier": "secondary",
      "url": "https://replacejerrymoran.org/",
      "title": "Replacejerrymoran.Org",
      "publisher": "replacejerrymoran.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-163",
      "tier": "secondary",
      "url": "https://mike4kansas.org/",
      "title": "Mike4kansas.Org",
      "publisher": "mike4kansas.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-164",
      "tier": "secondary",
      "url": "https://mikeforkansas.net/",
      "title": "Mikeforkansas.Net",
      "publisher": "mikeforkansas.net",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-165",
      "tier": "secondary",
      "url": "https://justfacts.votesmart.org/candidate/biography/192430/michael-soetaert",
      "title": "Justfacts.Votesmart.Org",
      "publisher": "justfacts.votesmart.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-166",
      "tier": "secondary",
      "url": "https://www.cityofwellington.net/newsview.aspx?nid=6940",
      "title": "Cityofwellington.Net",
      "publisher": "cityofwellington.net",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-167",
      "tier": "secondary",
      "url": "https://www.sumnernewscow.com/wellington-city-council-accepts-michael-mike-soetaerts-resignation-at-tuesdays-meeting/",
      "title": "Sumnernewscow.Com",
      "publisher": "sumnernewscow.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-168",
      "tier": "secondary",
      "url": "https://www.kake.com/kansas-senate-candidate-shows-support-for-respect-for-marriage-act/article_7d6721ed-79ed-52f2-8765-2e521ef88df5.html",
      "title": "Kake.Com",
      "publisher": "kake.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-169",
      "tier": "secondary",
      "url": "https://www.laporte4ksgov.com/",
      "title": "Laporte4ksgov.Com",
      "publisher": "laporte4ksgov.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-170",
      "tier": "primary",
      "url": "https://www.fec.gov/data/candidate/H6KS03258/",
      "title": "Fec.Gov",
      "publisher": "fec.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-171",
      "tier": "secondary",
      "url": "https://www.opencampaign.com/politicians-in-united-states/197957/chase-laporte/issue-positions",
      "title": "Opencampaign.Com",
      "publisher": "opencampaign.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-172",
      "tier": "social",
      "url": "https://www.facebook.com/alaina.cunningham.9/",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-173",
      "tier": "social",
      "url": "https://www.linkedin.com/in/alaina-cunningham-4436ba1/",
      "title": "Linkedin.Com",
      "publisher": "linkedin.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-174",
      "tier": "secondary",
      "url": "https://www.haysmed.com/provider/alaina-cunningham/",
      "title": "Haysmed.Com",
      "publisher": "haysmed.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-175",
      "tier": "secondary",
      "url": "https://haysmedfoundation.org/foundation-elects-new-officers-and-board-members/",
      "title": "Haysmedfoundation.Org",
      "publisher": "haysmedfoundation.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-176",
      "tier": "secondary",
      "url": "https://tigermedianet.com/?p=75270",
      "title": "Tigermedianet.Com",
      "publisher": "tigermedianet.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-177",
      "tier": "secondary",
      "url": "https://www.avvo.com/attorneys/67601-ks-aaron-cunningham-5075775.html",
      "title": "Avvo.Com",
      "publisher": "avvo.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-178",
      "tier": "secondary",
      "url": "https://about.me/aaron.cunningham",
      "title": "About.Me",
      "publisher": "about.me",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-179",
      "tier": "social",
      "url": "https://www.facebook.com/musilcomish/",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-180",
      "tier": "social",
      "url": "https://www.linkedin.com/in/shaun-musil-26539490/",
      "title": "Linkedin.Com",
      "publisher": "linkedin.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-181",
      "tier": "primary",
      "url": "https://haysusa.com/273/Shaun-Musil",
      "title": "Haysusa.Com",
      "publisher": "haysusa.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-182",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/49060a66-e8fc-4755-a296-382a14c00a3d",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-183",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/d835988d-3ad1-481c-a439-657747f04a70",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-184",
      "tier": "secondary",
      "url": "https://www.nex-tech.com/business/shaun/",
      "title": "Nex-tech.Com",
      "publisher": "nex-tech.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-185",
      "tier": "secondary",
      "url": "https://hutchpost.com/posts/f240fb89-d1f0-4373-ac4b-605d5e5f9c32",
      "title": "Hutchpost.Com",
      "publisher": "hutchpost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-186",
      "tier": "social",
      "url": "https://www.facebook.com/people/Sandy-Jacobs-Hays-City-Commission/100063604999773/",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-187",
      "tier": "primary",
      "url": "https://haysusa.com/270/Sandy-Jacobs",
      "title": "Haysusa.Com",
      "publisher": "haysusa.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-188",
      "tier": "secondary",
      "url": "https://heartlandcommunityfoundation.org/",
      "title": "Heartlandcommunityfoundation.Org",
      "publisher": "heartlandcommunityfoundation.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-189",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/b54fadff-9d52-40bc-b6b8-e51faec8edaf",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-190",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/0de13ea6-3e03-4110-a99e-58f98b4d361c",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-191",
      "tier": "secondary",
      "url": "https://www.ileeta.org/dxi-training-solutions-llc/",
      "title": "Ileeta.Org",
      "publisher": "ileeta.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-192",
      "tier": "social",
      "url": "https://www.facebook.com/people/DXI-Training-Solutions-LLC/61553945955697/",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-193",
      "tier": "primary",
      "url": "https://www.haysusa.com/directory.aspx?eid=6",
      "title": "Haysusa.Com",
      "publisher": "haysusa.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-194",
      "tier": "secondary",
      "url": "https://www.strongtowns.org/journal/2015/10/7/toby-dougherty-city-manager-of-haysks",
      "title": "Strongtowns.Org",
      "publisher": "strongtowns.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-195",
      "tier": "secondary",
      "url": "https://podcast.strongtowns.org/e/toby-dougherty-1535377231/",
      "title": "Podcast.Strongtowns.Org",
      "publisher": "podcast.strongtowns.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-196",
      "tier": "secondary",
      "url": "https://issuu.com/waterstrategies/docs/mwl_october_2020/s/11017849",
      "title": "Issuu.Com",
      "publisher": "issuu.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-197",
      "tier": "secondary",
      "url": "https://www.kwch.com/2025/04/03/city-hays-awarded-15m-grant-secure-long-term-water-supply/",
      "title": "Kwch.Com",
      "publisher": "kwch.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-198",
      "tier": "secondary",
      "url": "https://www.eenews.net/articles/farm-vs-city-kansas-water-law-gets-a-major-stress-test/",
      "title": "Eenews.Net",
      "publisher": "eenews.net",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-199",
      "tier": "secondary",
      "url": "https://openpayrolls.com/rank/highest-paid-employees/hays-ks",
      "title": "Openpayrolls.Com",
      "publisher": "openpayrolls.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-200",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/70a84c66-2d84-4023-b4bb-df360cbe90dd",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-201",
      "tier": "secondary",
      "url": "https://voterly.com/politicians/DmRJRnnSKN/neal-younger",
      "title": "Voterly.Com",
      "publisher": "voterly.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-202",
      "tier": "primary",
      "url": "https://www.ellisco.net/120/County-Commission",
      "title": "Ellisco.Net",
      "publisher": "ellisco.net",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-203",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/0e698b7b-a28f-4a21-9b40-880346e893ec",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-204",
      "tier": "social",
      "url": "https://www.linkedin.com/in/nathan-leiker-1236bb276",
      "title": "Linkedin.Com",
      "publisher": "linkedin.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-205",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/6e260438-27db-4402-bf8e-e8df621996d4",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-206",
      "tier": "secondary",
      "url": "https://www.manta.com/c/mhxwpdc/l5-farms-inc",
      "title": "Manta.Com",
      "publisher": "manta.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-207",
      "tier": "social",
      "url": "https://www.facebook.com/people/Bobbi-Dreiling-for-Ellis-County-Clerk/100067810926476/",
      "title": "Facebook.Com",
      "publisher": "facebook.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-208",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/64efa3e4-3296-4e5c-897f-8417a78e7fc3",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-209",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/3d32625b-57dc-4a18-9152-1013ddb13531",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-210",
      "tier": "secondary",
      "url": "https://www.aclukansas.org/press-releases/hundreds-ellis-county-sign-petition-polling-location-fhsu/",
      "title": "Aclukansas.Org",
      "publisher": "aclukansas.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-211",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/3a3f06a1-6b07-45c6-bf3c-8b76f4d564d7",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-212",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/17997478-c7b3-4601-a433-c8f9623b09da",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-213",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/7c1c8817-1e3a-4c50-951e-895526935cf1",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-214",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/1ff3108c-562d-421d-9200-395f040c2103",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-215",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/1873ff67-3bab-44c2-896b-8aee3a992496",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-216",
      "tier": "primary",
      "url": "https://www.ellisco.net/100/Register-of-Deeds",
      "title": "Ellisco.Net",
      "publisher": "ellisco.net",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-217",
      "tier": "secondary",
      "url": "https://ksrods.com/contact-information/ellis-county-el-nc-district/",
      "title": "Ksrods.Com",
      "publisher": "ksrods.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-218",
      "tier": "primary",
      "url": "https://www.kdor.ks.gov/Apps/VoterReg/",
      "title": "Kdor.Ks.Gov",
      "publisher": "kdor.ks.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-219",
      "tier": "secondary",
      "url": "https://myvoteinfo.voteks.org/",
      "title": "Myvoteinfo.Voteks.Org",
      "publisher": "myvoteinfo.voteks.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-220",
      "tier": "primary",
      "url": "https://www.justice.gov/archive/usao/ks/PressReleases/2012/Nov%202012/Nov29a.html",
      "title": "Justice.Gov",
      "publisher": "justice.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-221",
      "tier": "secondary",
      "url": "https://secure.actblue.com/donate/jason-hart",
      "title": "Secure.Actblue.Com",
      "publisher": "secure.actblue.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jason Hart's generated v2 profile."
      ]
    },
    {
      "id": "s-social-crossref-1",
      "tier": "secondary",
      "url": "https://hartforsenate.com/issues",
      "title": "hartforsenate.com / Hartforsenate",
      "publisher": "Hartforsenate",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Abortion / Sanctity of Life.",
        "Issues page: hartforsenate.com/issues lists ten issue areas: Assert Congressional Authority; Provide for Our Veterans; Provide for Kansans' Health; Promote Rational Immigration Sol"
      ]
    },
    {
      "id": "s-social-crossref-2",
      "tier": "social",
      "url": "https://bsky.app/profile/kansanshavehart.bsky.social/post/3mh7eajrwos2f",
      "title": "Bluesky / Bsky",
      "publisher": "Bsky",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Abortion / Sanctity of Life.",
        "Across 35 captured Bluesky posts, Hart's largest single category is policy and issue statements, with 14 posts, or 40 percent of the captured original feed. The March 16 opening po"
      ]
    },
    {
      "id": "s-social-crossref-3",
      "tier": "social",
      "url": "https://bsky.app/profile/kansanshavehart.bsky.social/post/3mj3eahdcyc2p",
      "title": "Kansas Reflector / Bsky",
      "publisher": "Bsky",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Immigration / Border.",
        "On immigration enforcement, he wrote, \"Renée Good and Alex Pretti were killed, and five‑year‑old Liam Ramos was taken into ICE custody during a federal enforcement operation\" (sour"
      ]
    }
  ]
};

if (process.env.NODE_ENV !== "production") {
  const result = validateCandidateV2(JASON_HART_V2);
  if (!result.ok) {
    // eslint-disable-next-line no-console
    console.error(
      "[jason-hart.ts] validateCandidateV2 FAILED:\n" +
        result.errors.join("\n"),
    );
  }
}
