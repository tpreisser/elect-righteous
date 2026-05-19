/* Auto-normalized with issue-mapped social/online cross-reference signals.
 * To refresh:
 *   node scripts/hydrate-v2-social-signals.mjs
 */

import type { CandidateFullV2 } from "@/data/types-v2";
import { validateCandidateV2 } from "@/data/types-v2";

export const RON_WILSON_V2: CandidateFullV2 = {
  "slug": "ron-wilson",
  "name": "Ron Wilson",
  "party": "NP",
  "position": "USD 489 Superintendent",
  "electionSlug": "usd-489-current",
  "incumbent": true,
  "occupation": "Superintendent",
  "campaignWebsite": "https://www.usd489.com/staff?org=usd-489&page_no=2",
  "issues": [
    {
      "id": "i-school-facilities-bond-spending-1",
      "title": "School Facilities / Bond Spending",
      "stated": {
        "text": "Wilson is the strongest public advocate for upgrading USD 489 facilities. He has repeatedly said Hays should \"stop settling for the schools and facilities that we have\" and pushed the $143.5 million bond that built the new Hays High School and funded other construction.",
        "sourceIds": [
          "s-37",
          "s-57",
          "s-93",
          "s-100",
          "s-102",
          "s-108"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Public web",
          "observation": "Ron Wilson is an appointed/admin superintendent, not a candidate for elected office in this capture set. This harvest therefore treats his public material as administrator-attributed district messaging, official testimony, board-meeting statements, and public professional/profile traces. It does not treat him as having campaign content or electoral platform content.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-100"
          ],
          "mappedToIssueId": "i-school-facilities-bond-spending-1"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Hays Post",
          "observation": "The earliest located superintendent-candidate profile, published by Hays Post archive on February 7, 2019, framed Wilson's pitch around what is best for students, consensus-building, teacher relationships, interest-based bargaining, and positive school culture. He described a bond role as bringing people toward a plan that fits school needs and community desires. Source: https://archive.hayspost.com/2019/02/page/67/",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "i-school-facilities-bond-spending-1"
        },
        {
          "id": "ss-crossref-5",
          "platform": "usd489.com",
          "observation": "Official USD 489 news pages show his facilities case developing before the 2022 bond. In April 2021, Wilson said a facilities survey could not predict a bond outcome but could show whether people were ready to look at the issue. He argued that low interest rates, local rebound, and community first impressions made the timing favorable. Source: https://www.usd489.com/article/437110",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-2"
          ],
          "mappedToIssueId": "i-school-facilities-bond-spending-1"
        }
      ]
    },
    {
      "id": "i-school-funding-2",
      "title": "School Funding",
      "stated": {
        "text": "He has spoken out against state legislation that threatens district funding, including flagging Kansas HB 2468 (private school tax credits) as a threat to divert public dollars from public schools. He also warned the board about state budget bills that could cut mental health funding.",
        "sourceIds": [
          "s-27",
          "s-37",
          "s-41",
          "s-48",
          "s-51",
          "s-62"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "usd489.com",
          "observation": "Wilson's official live-feed posts during March-April 2020 centered on COVID school closure, continuous learning, meal access, and public-health precautions. These are the only located profile-attributed official feed posts rather than media coverage, and they are district communications rather than personal social commentary. Source: https://www.usd489.com/live-feed?page_no=32",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-3"
          ],
          "mappedToIssueId": "i-school-funding-2"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Hays Post",
          "observation": "The 2022 bond-voting email controversy is part of the public record and is administrator-attributed. Hays Post reported that Wilson sent a staff-wide email offering lunch and possibly dessert to buildings with 100 percent staff turnout in the bond election, and that Wilson did not comment during the investigation. Ellis County Attorney Robert Anderson later declined to pursue charges. Sources:...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-4"
          ],
          "mappedToIssueId": "i-school-funding-2"
        },
        {
          "id": "ss-crossref-5",
          "platform": "hayspost.com",
          "observation": "In 2024-2026 coverage, Wilson's message stays focused on getting the bond and capital projects finished. He defended using the existing construction manager and district administration team instead of adding another project manager, said the district already had oversight through Nabholz and third-party inspections, and said the high school change orders were well below contingency. Source:...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-75"
          ],
          "mappedToIssueId": "i-school-funding-2"
        }
      ]
    },
    {
      "id": "i-turnout-controversy-3",
      "title": "Turnout Controversy",
      "stated": {
        "text": "During the 2022 bond election, Wilson emailed district staff offering to buy lunch for buildings where 100% of eligible voters cast ballots. This was reported as potential election bribery under Kansas law. The county attorney declined to prosecute, citing limited resources, but did not say it wasn't a violation.",
        "sourceIds": [
          "s-27",
          "s-37",
          "s-48",
          "s-93",
          "s-96",
          "s-100"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Hays Post",
          "observation": "The 2022 bond-voting email controversy is a notable part of the public record. Hays Post reported that Wilson sent a staff-wide email offering lunch, and possible dessert, to buildings where all eligible staff voted in the bond election. The article said the email did not require a vote for the bond and that Wilson declined to comment during the investigation. Ellis County Attorney Robert Anderson later announced...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-4"
          ],
          "mappedToIssueId": "i-turnout-controversy-3"
        }
      ]
    }
  ],
  "whoTheyAre": "Ron Wilson is the superintendent of Hays USD 489. He is not an elected candidate, but he is one of the most important figures in local education because he runs the district's day-to-day operations and carries out the decisions the school board makes.\n\nHis public profile is tied almost entirely to administration. In the public record, Wilson is the face of the district's bond-era building projects, staffing questions, facilities debates, and capital planning. That is why he appears in this project: school-board politics in Hays are inseparable from the superintendent who executes the board's agenda.",
  "recordSummary": "Wilson's tenure is closely associated with the district's major facilities push. He has been the superintendent during the construction of the new Hays High School, the Roosevelt Elementary addition, and the broader debate over how aggressively the district should keep investing in its buildings and athletic facilities.\n\nThe most notable controversy in his public record came during the 2022 bond election, when an email he sent to district staff about turnout incentives drew scrutiny and public criticism. Even with that episode, the larger public record still presents him mainly as an operational superintendent: the person responsible for moving bond projects, staffing, and district logistics forward once the board has voted.",
  "ownWordsNarrative": "_A summary of what Ron Wilson has publicly said, posted, testified, and had attributed to him across official USD 489 pages, the USD 489 public board portal, USD 489 live feed, Kansas Legislature testimony, local board/news coverage, and public profile previews. Drawn from public captures from February 7, 2019 through May 11, 2026. Wilson is an appointed/admin superintendent, not an electoral candidate, so this summarizes administrator-attributed messaging rather than campaign content. We report patterns; we do not interpret intent._\n\nWilson's public message is overwhelmingly administrative: student needs, facilities, bond execution, mental-health supports, public-school funding, and day-to-day district operations. The official USD 489 staff directory lists him as Superintendent and Administrator, and the USD 489 public board portal lists him as Superintendent in meeting categories. ([USD 489 staff](https://www.usd489.com/staff?org=usd-489&page_no=2), [USD 489 board portal](https://usd489.community.highbond.com/portal/members.aspx?id=18))\n\nHis earliest located Hays superintendent profile, from February 2019, framed his approach around students and consensus. Wilson said he centered his work on what was best for kids, described himself as a consensus builder on a possible bond, supported long-range facilities planning, emphasized teacher relationships and teacher pay, and said he wanted a positive culture where staff, students, and parents brought their best every day. ([Hays Post archive](https://archive.hayspost.com/2019/02/page/67/))\n\nDuring the early COVID period, Wilson used USD 489's official live feed for district logistics rather than personal commentary. Posts attributed to him announced school closure guidance, free boxed lunches, educators providing meals, continuous learning planning, and a family-facing message that acknowledged hardship for families, staff, and students while saying communication would remain a priority. ([USD 489 live feed](https://www.usd489.com/live-feed?page_no=32))\n\nFacilities are the dominant thread in his public record. In April 2021, Wilson said a facilities survey could show whether residents were ready to look at another bond attempt. He argued that facilities affect first impressions of the community and that investing in buildings helps students feel valued. He also said the community needed to think about building for the future and the next generation. ([USD 489 / Hays Post](https://www.usd489.com/article/437110))\n\nBy February 2022, Wilson's bond message had become more specific: space, career and technical education, an auditorium, maintenance, school choice, local contractors, and long-term investment. He told the board the proposal was about district space needs, said the high school career-tech environment could be better, argued the community needed an auditorium students could be proud of, and described the bond as an investment that could carry for 50 to 100 years. ([USD 489 / Hays Post](https://www.usd489.com/article/651221))\n\nHis public mental-health message is strongest in official testimony to the Kansas Legislature. Wilson described how Herington and then Hays participated in the Mental Health Intervention Team program, said 155 Hays High and Hays Middle School students used the program in the 2020-21 school year, and listed goals around academic performance, attendance, internalizing symptoms, and externalizing symptoms. He urged better outside referrals, summer therapy and case-management availability, mentoring for new districts, telemedicine access, pediatric integration, workforce solutions, and treating youth mental health as urgent. ([Kansas Legislature testimony](https://www.kslegislature.gov/li/b2021_22/committees/ctte_spc_2021_ks_mental_health_modern_1/documents/testimony/20211028_14.pdf))\n\nThe 2022 bond-voting email controversy is a notable part of the public record. Hays Post reported that Wilson sent a staff-wide email offering lunch, and possible dessert, to buildings where all eligible staff voted in the bond election. The article said the email did not require a vote for the bond and that Wilson declined to comment during the investigation. Ellis County Attorney Robert Anderson later announced he would take no action on election-bribery allegations. ([Hays Post, Apr. 28, 2022](https://hayspost.com/posts/806cd3a8-3850-49a6-9c3b-5931d344a290), [Hays Post, May 25, 2022](https://hayspost.com/posts/d0e804e2-319a-4fb7-ae57-a22990fcee2d))\n\nAfter the bond passed, Wilson's public message shifted to implementation and defense of the project structure. In March 2025, when board members pushed for an additional project manager, Wilson argued that Nabholz already served as construction manager at risk, that the district administration team was acting as owner representatives, and that third-party inspections added oversight. He rejected claims that he did not know what he was doing and pointed to low change orders on the high school project. ([Hays Post](https://hayspost.com/posts/e4ec7011-734d-4c18-ab28-c5b38d236126))\n\nWilson's signed March 2025 Hays Post opinion response is one of the clearest first-person statements in the set. He said people sometimes focus so hard on problems that they miss good things, defended the bond projects as creating a better future for students, staff, and the community, and said his district leadership responsibility was to give them what they deserved. He repeated the idea that USD 489 had to stop settling for the schools and facilities it had. ([Hays Post](https://hayspost.com/posts/18d3a237-b1c0-45a5-886e-980bb0c81483))\n\nThe same facilities frame continued at the August 2025 ribbon cutting for the new Hays High School. Wilson said his goal was to give students, staff, and community a modern, safe, inspiring 5A school and said the Hays monument represented community investment in kids. ([Hays Post](https://hayspost.com/posts/b20dc400-848a-4e10-bda4-36f5dad6d626))\n\nOn capital spending, Wilson tends to argue from schedule, readiness, and operational need. In February 2025, he said the district had planned for expenses created by students and staff moving into new buildings and had enough capital-outlay funds with contingency built in. In October 2025, he said Hays Middle School furniture needed to be purchased promptly so the school could open to students on time. In December 2025, Tiger Media Network reported that he called Felten asbestos abatement timing an emergency because delay would disrupt the renovation schedule. ([Hays Post, Feb. 2025](https://hayspost.com/posts/4c6383bb-a3d5-40fe-9d6e-f35e54674e93), [Hays Post, Oct. 2025](https://hayspost.com/posts/42a7f866-c127-423f-80ac-8b3e620f80f4), [Tiger Media Network](https://tigermedianet.com/?p=93176))\n\nOn fees and classroom materials, Wilson opposed another school-fee reduction in April 2025. Hays Post reported that he said earlier fee reductions had lowered the money available for textbooks and classroom materials, with a new English curriculum adoption planned and a much smaller carryover expected. ([Hays Post](https://hayspost.com/posts/b76e200e-de44-4b35-a99c-791e79ca07be))\n\nOn bathrooms, vandalism, and social-media claims, Wilson's public stance is managerial and skeptical of online escalation. Hays Post reported that he said all schools deal with bathroom vandalism, that students lose privileges when they misuse spaces, and that the high school would clean bathrooms twice daily. Tiger Media Network reported that he said monitoring bathrooms for eight hours a day was nearly impossible and warned that Facebook claims exaggerated the scope. ([Hays Post](https://hayspost.com/posts/7b63aeb8-e2d2-40a4-af96-5e92884d3ede), [Tiger Media Network](https://tigermedianet.com/?p=96863))\n\nOn state policy, the accessible March 2026 local summary shows Wilson defending public-school funding channels. Citizen Journal reported that he warned the Kansas Senate budget removed funding from the mental-health intervention program, said inadequate special-education funding forces districts to pull from general funds, and flagged HB 2468 private-school tax credits as a concern because they could divert public tax dollars away from public schools. ([Citizen Journal](https://www.citizenjournal.us/takeaways-from-hays-usd-489-education-board-meeting/))\n\nThe accessible professional social footprint is thin. A LinkedIn public preview identifies Ron Wilson with USD 489 Hays Public Schools, Kansas State University, 4 followers, and 2 connections, but no reliable public activity archive was visible. No verified Wilson-controlled public Facebook page, X/Twitter, Instagram, YouTube, TikTok, Bluesky, Threads, Truth Social, Gab, Gettr, Substack, Medium, Reddit, campaign website, or newsletter surfaced. ([LinkedIn](https://www.linkedin.com/in/ron-wilson-96762118a), [harvest](social-harvest.md#visible-absences))\n\nAcross the accessible set, Wilson does not center national partisan campaign issues. I found no Wilson-controlled or Wilson-attributed messaging focused on Donald Trump, Joe Biden, abortion, guns, immigration, judicial politics, Medicaid expansion, rural hospitals, water/Ogallala policy, roads, broadband, policing, or tax policy outside of public-school funding and facilities issues. His visible administrator-attributed words stay close to USD 489 operations: facilities, bond projects, capital outlay, mental-health supports, student safety, public health, fees, staff/admin process, and state education funding. ([harvest](social-harvest.md#topic-share-analysis))\n\nMethodology: Public capture was conducted on May 11, 2026. Date range covered: February 7, 2019 through May 11, 2026. Sources surveyed included USD 489 official pages, USD 489 staff directory, USD 489 live feed, USD 489 district social-media page, USD 489 Diligent/HighBond public board portal, board-meeting/video entry points where indexed, Kansas Legislature testimony, Hays Post, Hays Post archive, Tiger Media Network, Citizen Journal, LinkedIn public preview, Facebook, X/Twitter, Instagram, YouTube, TikTok, Bluesky, Threads, Truth Social, Gab, Gettr, Substack, Medium, Reddit, broad public web search, and existing project memory for source leads. Login-walled, script-blocked, unindexed, or otherwise inaccessible social content was not treated as verified. We report visible patterns and documented absences; we do not infer private views, inaccessible account activity, unobserved posts, or intent.",
  "whereTheyWorship": "Public sources do not identify Wilson's church home or denomination.",
  "campaignFinance": {
    "totalRaised": "Not applicable",
    "narrative": "Not applicable. Wilson is an appointed superintendent, not a candidate running for office in this source set.",
    "donors": [
      {
        "name": "Campaign finance",
        "amount": "Not applicable"
      }
    ],
    "reportingPeriod": "not applicable",
    "source": "Reviewed public records"
  },
  "socialResearchNote": "Social research is included as observed public behavior, not as a proxy for belief. Platforms/sources checked: USD 489 official pages, USD 489 staff directory, USD 489 live feed, USD 489 district social-media page, USD 489 Diligent/HighBond public board portal, Board-meeting/video entry points, Kansas Legislature testimony, Hays Post, Hays Post archive, Tiger Media Network, Citizen Journal, LinkedIn public preview, Facebook, X / Twitter, Instagram, YouTube, TikTok, Bluesky, Threads, Truth Social, Gab, Gettr, Substack, Medium, Reddit, Public search. Harvest range: 2019-02-07 through 2026-05-11.",
  "sources": [
    {
      "id": "s-1",
      "tier": "secondary",
      "url": "https://www.hfehays.org/o/hfe/article/923439",
      "title": "Hfehays.Org",
      "publisher": "hfehays.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-2",
      "tier": "secondary",
      "url": "https://www.ihm-church.com/",
      "title": "Ihm-church.Com",
      "publisher": "ihm-church.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-3",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/5c04aec5-5ab3-413c-8844-d90e91aa0d31",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-4",
      "tier": "secondary",
      "url": "https://tigermedianet.com/?p=75270",
      "title": "Tigermedianet.Com",
      "publisher": "tigermedianet.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-5",
      "tier": "primary",
      "url": "https://haysusa.com/273/Shaun-Musil",
      "title": "Haysusa.Com",
      "publisher": "haysusa.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-6",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/49060a66-e8fc-4755-a296-382a14c00a3d",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-7",
      "tier": "primary",
      "url": "https://haysusa.com/270/Sandy-Jacobs",
      "title": "Haysusa.Com",
      "publisher": "haysusa.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-8",
      "tier": "secondary",
      "url": "https://heartlandcommunityfoundation.org/",
      "title": "Heartlandcommunityfoundation.Org",
      "publisher": "heartlandcommunityfoundation.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-9",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/5e243ec1-847a-40f8-a7dd-665ffe2f85de",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-10",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/a0f7dc0e-e11c-483b-95ef-cbd4ad3ac930",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-11",
      "tier": "primary",
      "url": "https://www.haysusa.com/149/City-Managers-Office",
      "title": "Haysusa.Com",
      "publisher": "haysusa.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-12",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/cc4157ce-3ec5-4765-b6c7-84923c7cee55",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-13",
      "tier": "secondary",
      "url": "https://www.kansassheriffs.org/county_map/county/914",
      "title": "Kansassheriffs.Org",
      "publisher": "kansassheriffs.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-14",
      "tier": "secondary",
      "url": "https://archive.hayspost.com/2019/10/31/undersheriff-braun-announces-run-for-ellis-county-sheriff-in-2020/",
      "title": "Archive.Hayspost.Com",
      "publisher": "archive.hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-15",
      "tier": "secondary",
      "url": "https://salinadiocese.org/parish/st-nicholas-of-myra-parish-hays/",
      "title": "Salinadiocese.Org",
      "publisher": "salinadiocese.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-16",
      "tier": "secondary",
      "url": "https://about.me/aaron.cunningham",
      "title": "About.Me",
      "publisher": "about.me",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-17",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/7ccb3a8f-a8c6-4baa-9767-cf155c00f4a1",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-18",
      "tier": "secondary",
      "url": "https://hayshighguidon.com/news/2019/10/26/assistant-ellis-county-attorney-aaron-cunningham-speaks-to-students-about-career-in-law/",
      "title": "Hayshighguidon.Com",
      "publisher": "hayshighguidon.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-19",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/08825e68-f663-4a03-96f4-0b2c6f0b4ec7",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-20",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/8400acf8-32ea-486a-b087-8423d8f728e0",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-21",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/70a84c66-2d84-4023-b4bb-df360cbe90dd",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-22",
      "tier": "secondary",
      "url": "https://www.haysmemorial.com/obituary/Marilyn-KlausLeiker/",
      "title": "Haysmemorial.Com",
      "publisher": "haysmemorial.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-23",
      "tier": "secondary",
      "url": "https://fhsuguides.fhsu.edu/kansasheritage/elliscounty",
      "title": "Fhsuguides.Fhsu.Edu",
      "publisher": "fhsuguides.fhsu.edu",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-24",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/46c0cb3c-bd1a-435f-9d5a-598963fe942a",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-25",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/a828fae7-451a-45b3-aed9-e12596bf13f4",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-26",
      "tier": "primary",
      "url": "https://www.ellisco.net/100/Register-of-Deeds",
      "title": "Ellisco.Net",
      "publisher": "ellisco.net",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-27",
      "tier": "secondary",
      "url": "https://ksrods.com/contact-information/ellis-county-el-nc-district/",
      "title": "Ksrods.Com",
      "publisher": "ksrods.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-28",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/635f478c-4649-44c1-80d8-631bc0897878",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-29",
      "tier": "secondary",
      "url": "https://salinadiocese.org/parish/our-lady-help-of-christians-parish-antonino/",
      "title": "Salinadiocese.Org",
      "publisher": "salinadiocese.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-30",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/e153a0fc-fe06-4de4-b5c7-d6f0d57fa59b",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-31",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/4f225559-3a1c-4499-af0d-d0c7affa85a1",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-32",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/2613aaa8-8055-4feb-9a79-d1b5479babca",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-33",
      "tier": "secondary",
      "url": "https://www.haysmed.com/provider/derek-m-yarmer-md/",
      "title": "Haysmed.Com",
      "publisher": "haysmed.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-34",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/7acb9e0e-4c56-4e6f-a618-4312a49cd922",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-35",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/8c99812c-9463-4172-9aef-4df43a05b5d9",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-36",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/66f0b3ef-9525-40e2-a3f2-f74e9deebb43",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-37",
      "tier": "secondary",
      "url": "https://hayshighguidon.com/news/2019/02/13/school-board-votes-approves-ron-wilson-as-new-superintendent/",
      "title": "Hayshighguidon.Com",
      "publisher": "hayshighguidon.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-38",
      "tier": "secondary",
      "url": "https://en.wikipedia.org/wiki/Tracey_Mann",
      "title": "En.Wikipedia.Org",
      "publisher": "en.wikipedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-39",
      "tier": "secondary",
      "url": "https://ksopen.org/mann-2",
      "title": "Ksopen.Org",
      "publisher": "ksopen.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-40",
      "tier": "primary",
      "url": "https://mann.house.gov/about",
      "title": "Mann.House.Gov",
      "publisher": "mann.house.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-41",
      "tier": "secondary",
      "url": "https://www.au.org/the-latest/church-and-state/articles/unhealthy-breakfast-how-the-national-prayer-breakfast-a-relic-from-the-1950s-era-of-civil-religion-evolved-into-a-florid-display-of-christian-nationalism/",
      "title": "Au.Org",
      "publisher": "au.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-42",
      "tier": "secondary",
      "url": "https://kansansformarshall.com/meet-doc/",
      "title": "Kansansformarshall.Com",
      "publisher": "kansansformarshall.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-43",
      "tier": "secondary",
      "url": "https://ksopen.org/marshall",
      "title": "Ksopen.Org",
      "publisher": "ksopen.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-44",
      "tier": "secondary",
      "url": "https://justfacts.votesmart.org/candidate/biography/172080/roger-marshall",
      "title": "Justfacts.Votesmart.Org",
      "publisher": "justfacts.votesmart.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-45",
      "tier": "secondary",
      "url": "https://kansasdisciples.org/property/great-bend-first-christian-church/",
      "title": "Kansasdisciples.Org",
      "publisher": "kansasdisciples.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-46",
      "tier": "secondary",
      "url": "https://barbforkansas.com/about/",
      "title": "Barbforkansas.Com",
      "publisher": "barbforkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-47",
      "tier": "secondary",
      "url": "https://barbwasinger.com/",
      "title": "Barbwasinger.Com",
      "publisher": "barbwasinger.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-48",
      "tier": "secondary",
      "url": "https://www.ksn.com/news/your-local-election-hq/election-guide-barbara-k-wasinger-r-kansas-house-district-111/",
      "title": "Ksn.Com",
      "publisher": "ksn.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-49",
      "tier": "secondary",
      "url": "https://whatreligionisinfo.com/kobach-religion/",
      "title": "Whatreligionisinfo.Com",
      "publisher": "whatreligionisinfo.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-50",
      "tier": "secondary",
      "url": "https://msclawrence.com/",
      "title": "Msclawrence.Com",
      "publisher": "msclawrence.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-51",
      "tier": "secondary",
      "url": "https://sunflowerstatejournal.com/kobach-denounces-vandalism-at-his-church/",
      "title": "Sunflowerstatejournal.Com",
      "publisher": "sunflowerstatejournal.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-52",
      "tier": "secondary",
      "url": "https://www.kcur.org/government/2017-08-22/kansas-trial-investigates-religious-discrimination-claim-in-kobachs-office",
      "title": "Kcur.Org",
      "publisher": "kcur.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-53",
      "tier": "secondary",
      "url": "https://www.christianpost.com/news/caleb-schwab-10-attended-church-with-family-hours-before-death-verruckt-schlitterbahn-water-park.html",
      "title": "Christianpost.Com",
      "publisher": "christianpost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-54",
      "tier": "secondary",
      "url": "https://fox4kc.com/news/at-funeral-for-his-son-caleb-schwabs-dad-tells-stories-that-show-calebs-love-and-humor/",
      "title": "Fox4kc.Com",
      "publisher": "fox4kc.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-55",
      "tier": "secondary",
      "url": "https://www.lifemission.church/",
      "title": "Lifemission.Church",
      "publisher": "lifemission.church",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-56",
      "tier": "secondary",
      "url": "https://heavy.com/news/2016/08/scott-schwab-michele-caleb-rep-parents-father-dad-mother-mom-family-verruckt-water-slide-kansas-schlitterbahn-photos-death-accident/",
      "title": "Heavy.Com",
      "publisher": "heavy.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-57",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/07/09/kansas-insurance-commissioner-vicki-schmidt-initiates-republican-campaign-for-governor/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-58",
      "tier": "secondary",
      "url": "https://vickiforgovernor.com/",
      "title": "Vickiforgovernor.Com",
      "publisher": "vickiforgovernor.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-59",
      "tier": "secondary",
      "url": "https://www.mastersonforgovernor.com/services",
      "title": "Mastersonforgovernor.Com",
      "publisher": "mastersonforgovernor.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-60",
      "tier": "secondary",
      "url": "https://csgmidwest.org/wp-content/uploads/2022/07/sen-masterson.pdf",
      "title": "Csgmidwest.Org",
      "publisher": "csgmidwest.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-61",
      "tier": "secondary",
      "url": "https://www.newspring.org/",
      "title": "Newspring.Org",
      "publisher": "newspring.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-62",
      "tier": "secondary",
      "url": "https://combatantisemitism.org/interview/its-important-to-understand-the-truth-and-spread-it-kansas-senate-president-ty-masterson-reflects-on-state-lawmakers-delegation-visit-to-israel/",
      "title": "Combatantisemitism.Org",
      "publisher": "combatantisemitism.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-63",
      "tier": "secondary",
      "url": "https://en.wikipedia.org/wiki/Jeff_Colyer",
      "title": "En.Wikipedia.Org",
      "publisher": "en.wikipedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-64",
      "tier": "primary",
      "url": "https://www.kansashistory.gov/kansapedia/jeff-colyer/20011",
      "title": "Kansashistory.Gov",
      "publisher": "kansashistory.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-65",
      "tier": "secondary",
      "url": "https://www.kshb.com/news/local-news/former-kansas-governor-volunteers-on-medical-mission-in-ukraine",
      "title": "Kshb.Com",
      "publisher": "kshb.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-66",
      "tier": "secondary",
      "url": "https://www.jeffcolyer.com/index.html",
      "title": "Jeffcolyer.Com",
      "publisher": "jeffcolyer.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-67",
      "tier": "secondary",
      "url": "https://ethanforkansas.com/",
      "title": "Ethanforkansas.Com",
      "publisher": "ethanforkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-68",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/07/22/kansas-sen-ethan-corson-enters-race-for-democratic-partys-nomination-for-governor/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-69",
      "tier": "secondary",
      "url": "https://en.wikipedia.org/wiki/Cindy_Holscher",
      "title": "En.Wikipedia.Org",
      "publisher": "en.wikipedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-70",
      "tier": "secondary",
      "url": "https://cindyforkansas.com/about/",
      "title": "Cindyforkansas.Com",
      "publisher": "cindyforkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-71",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/23c8a445-672d-44c2-be79-5d6dc47a2b3a",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-72",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/199257e6-fc97-4089-8a4c-67a87d3422f8",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-73",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/5e878e4beb7f170536019f51",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-74",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/6942435f-2284-422c-9ed9-5bf7d68c4984",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-75",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/e4ec7011-734d-4c18-ab28-c5b38d236126",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile.",
        "Observed public online activity mapped to School Funding."
      ]
    },
    {
      "id": "s-76",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/b833cbe0-37a8-4535-be13-b7d1c2ca645a",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-77",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/0187e996-15de-4377-95c2-cc428ed058e5",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-78",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/03620484-d421-4ae2-b3be-d87652788a17",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-79",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/665c7e1e-0989-4038-b3ed-a1ca37030c6f",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-80",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/8ce0d386-aba6-4c42-b880-1307752c8220",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-81",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/ff929dc5-f4f5-433c-876e-59fc19df6a2d",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-82",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/5b2cf14f-06bc-4086-9693-c33581fe6a7c",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-83",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/ae86883e-49b6-4bb5-af6c-acddd174da30",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-84",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/0ef676f6-e0ff-4a1c-b697-d9f74d3d7649",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-85",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/52e53c90-5182-42f0-919e-2c7dc145305b",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-86",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/ed7e23f5-7116-4798-87ff-ff11bf8563d4",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-87",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/87f9b442-e928-4c9d-bb85-03acad9d2a3f",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-88",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/d89d076f-4f16-4002-a12d-d27ea8cd6471",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-89",
      "tier": "secondary",
      "url": "https://archive.hayspost.com/2015/05/19/park-announces-retirement-after-30-years-with-usd-489/",
      "title": "Archive.Hayspost.Com",
      "publisher": "archive.hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-90",
      "tier": "secondary",
      "url": "https://www.citizenjournal.us/takeaways-from-hays-usd-489-education-board-meeting/",
      "title": "Citizenjournal.Us",
      "publisher": "citizenjournal.us",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-91",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/9fb91da0-f9e5-4d80-a065-c5c2727c6fb8",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-92",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/74087102-4ca2-4d13-89e0-5ddd64e94d6f",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-93",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Jayme_Goetz_(Hays_Unified_School_District_489,_At-large,_Kansas,_candidate_2023",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-94",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/c83d9d32-2242-4092-8fa5-f0a1321bb826",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-95",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/bc933c79-2f23-4279-8171-bc6dcf391cf0",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-96",
      "tier": "secondary",
      "url": "https://www.fhsu.edu/macs/faculty-and-staff/",
      "title": "Fhsu.Edu",
      "publisher": "fhsu.edu",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-97",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/d484e173-9cdf-49f3-b7fa-5effce503aab",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-98",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/7b0b83c9-2b64-4462-959d-ff904e2d896e",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-99",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/94f59897-4370-450a-b4ed-f5ebbf54a523",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-100",
      "tier": "social",
      "url": "https://www.linkedin.com/in/ron-wilson-96762118a/",
      "title": "Linkedin.Com",
      "publisher": "linkedin.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-101",
      "tier": "secondary",
      "url": "https://www.kwch.com/2022/05/26/county-attorney-declines-action-hays-superintendent-email-staff/",
      "title": "Kwch.Com",
      "publisher": "kwch.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-102",
      "tier": "secondary",
      "url": "https://www.hdnews.net/2022/05/02/superintendents-email-sparks-controversy-as-election-day-approaches-for-school-bond/",
      "title": "Hdnews.Net",
      "publisher": "hdnews.net",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-103",
      "tier": "secondary",
      "url": "https://sentinelksmo.org/choosing-which-crimes-to-prosecute-comes-to-kansas-on-election-bribery/",
      "title": "Sentinelksmo.Org",
      "publisher": "sentinelksmo.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-104",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/caf3d4b9-e869-42ad-84f8-def54af685e2",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-105",
      "tier": "secondary",
      "url": "https://sentinelksmo.org/usd-489-hays-no-apparent-written-plan-to-improve-low-proficiency-levels/",
      "title": "Sentinelksmo.Org",
      "publisher": "sentinelksmo.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-106",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/a1ad62ca-72ac-46d4-a3c1-e2248ae736b3",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-107",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/09e13f5d-3612-4ec5-9106-d99396d14ac3",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-108",
      "tier": "secondary",
      "url": "https://sentinelksmo.org/hays-high-school-contstruction-project-restrooms-stirs-controversy/",
      "title": "Sentinelksmo.Org",
      "publisher": "sentinelksmo.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-109",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/677ac412-2adb-48bd-85f8-bbd5f05bb92f",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-110",
      "tier": "secondary",
      "url": "https://www.kwch.com/content/news/Hays-School-District-hires-new-superintendent-505712821.html",
      "title": "Kwch.Com",
      "publisher": "kwch.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-111",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/ae1e5e6f-c630-4c15-b42e-fa787284525d",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-112",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/95dab7ab-70ba-44ee-91ee-2760e55665bf",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-113",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/1cd56ea1-18ea-4126-aa69-97b826446d03",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-114",
      "tier": "secondary",
      "url": "https://openpayrolls.com/rank/highest-paid-employees/kansas-hays",
      "title": "Openpayrolls.Com",
      "publisher": "openpayrolls.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-115",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/18d3a237-b1c0-45a5-886e-980bb0c81483",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-116",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/232ef2ef-ffa2-4666-9afa-3fe0993b01bb",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-117",
      "tier": "secondary",
      "url": "https://ffrf.org/news/news-releases/item/41401-ffrf-prompts-kan-school-board-to-repeal-discriminatory-dress-code",
      "title": "Ffrf.Org",
      "publisher": "ffrf.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-118",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/a8daf6b6-7bf6-4ce8-b9a8-f367aeb9494c",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-119",
      "tier": "primary",
      "url": "https://go.boarddocs.com/ks/usd489/Board.nsf/vpublic",
      "title": "Go.Boarddocs.Com",
      "publisher": "go.boarddocs.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-120",
      "tier": "primary",
      "url": "https://www.usd489.com/",
      "title": "Usd489.Com",
      "publisher": "usd489.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-121",
      "tier": "primary",
      "url": "https://usd489.community.highbond.com/portal/members.aspx?id=18",
      "title": "Usd489.Community.Highbond.Com",
      "publisher": "usd489.community.highbond.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile.",
        "Observed public online activity mapped to School Funding."
      ]
    },
    {
      "id": "s-122",
      "tier": "primary",
      "url": "https://www.ksde.gov/Portals/0/Directories/2025-26%20Kansas%20Educational%20Directory.pdf?ver=2025-11-07-175254-390",
      "title": "Ksde.Gov",
      "publisher": "ksde.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-123",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/0b83b105-6458-48ce-a689-c56394359c9d",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-124",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/53134bbf-3c90-47ed-ae9b-c3d0232bf211",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-125",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/4ecf935d-41cb-472c-9754-49c567a9dddc",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-126",
      "tier": "secondary",
      "url": "https://core-docs.s3.us-east-1.amazonaws.com/documents/asset/uploaded_file/1196/USD_489/4733695/HMS_2024-2025_Handbook.pdf",
      "title": "Core-docs.S3.Us-east-1.Amazonaws.Com",
      "publisher": "core-docs.s3.us-east-1.amazonaws.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-127",
      "tier": "primary",
      "url": "https://www.usd489.com/page/board-of-education",
      "title": "Usd489.Com",
      "publisher": "usd489.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Ron Wilson's generated v2 profile."
      ]
    },
    {
      "id": "s-social-crossref-1",
      "tier": "secondary",
      "url": "https://archive.hayspost.com/2019/02/page/67/",
      "title": "Hays Post / Archive.Hayspost",
      "publisher": "Archive.Hayspost",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to School Facilities / Bond Spending.",
        "The earliest located superintendent-candidate profile, published by Hays Post archive on February 7, 2019, framed Wilson's pitch around what is best for students, consensus-buildin"
      ]
    },
    {
      "id": "s-social-crossref-2",
      "tier": "primary",
      "url": "https://www.usd489.com/article/437110",
      "title": "usd489.com / Usd489",
      "publisher": "Usd489",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to School Facilities / Bond Spending.",
        "Official USD 489 news pages show his facilities case developing before the 2022 bond. In April 2021, Wilson said a facilities survey could not predict a bond outcome but could show"
      ]
    },
    {
      "id": "s-social-crossref-3",
      "tier": "primary",
      "url": "https://www.usd489.com/live-feed?page_no=32",
      "title": "usd489.com / Usd489",
      "publisher": "Usd489",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to School Funding.",
        "Wilson's official live-feed posts during March-April 2020 centered on COVID school closure, continuous learning, meal access, and public-health precautions. These are the only loca"
      ]
    },
    {
      "id": "s-social-crossref-4",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/806cd3a8-3850-49a6-9c3b-5931d344a290",
      "title": "Hays Post / Hayspost",
      "publisher": "Hayspost",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to School Funding.",
        "The 2022 bond-voting email controversy is part of the public record and is administrator-attributed. Hays Post reported that Wilson sent a staff-wide email offering lunch and possi",
        "Observed public online activity mapped to Turnout Controversy."
      ]
    }
  ]
};

if (process.env.NODE_ENV !== "production") {
  const result = validateCandidateV2(RON_WILSON_V2);
  if (!result.ok) {
    // eslint-disable-next-line no-console
    console.error(
      "[ron-wilson.ts] validateCandidateV2 FAILED:\n" +
        result.errors.join("\n"),
    );
  }
}
