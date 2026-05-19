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
          "s-2"
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
            "s-1"
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
          "s-2"
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
            "s-social-crossref-5"
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
          "s-1",
          "s-2",
          "s-3"
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
      "tier": "social",
      "url": "https://www.linkedin.com/in/ron-wilson-96762118a",
      "title": "LinkedIn",
      "publisher": "Linkedin",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Ron Wilson."
      ]
    },
    {
      "id": "s-2",
      "tier": "secondary",
      "url": "https://hayshighguidon.com/news/2019/02/13/school-board-votes-approves-ron-wilson-as-new-superintendent/",
      "title": "Guidon Online: School board approves Ron Wilson as superintendent",
      "publisher": "Hayshighguidon",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Ron Wilson."
      ]
    },
    {
      "id": "s-3",
      "tier": "social",
      "url": "https://www.linkedin.com/in/ron-wilson-96762118a/",
      "title": "linkedin.com/in/ron-wilson-96762118a",
      "publisher": "Linkedin",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Ron Wilson."
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
    },
    {
      "id": "s-social-crossref-5",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/e4ec7011-734d-4c18-ab28-c5b38d236126",
      "title": "hayspost.com / Hayspost",
      "publisher": "Hayspost",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to School Funding.",
        "In 2024-2026 coverage, Wilson's message stays focused on getting the bond and capital projects finished. He defended using the existing construction manager and district administra"
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
