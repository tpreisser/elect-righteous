/* Auto-normalized with issue-mapped social/online cross-reference signals.
 * To refresh:
 *   node scripts/hydrate-v2-social-signals.mjs
 */

import type { CandidateFullV2 } from "@/data/types-v2";
import { validateCandidateV2 } from "@/data/types-v2";

export const JAYME_GOETZ_V2: CandidateFullV2 = {
  "slug": "jayme-goetz",
  "name": "Jayme Goetz",
  "party": "NP",
  "position": "USD 489 Board Member",
  "electionSlug": "usd-489-current",
  "incumbent": true,
  "occupation": "School Board Member",
  "campaignWebsite": "https://usd489.community.highbond.com/portal/members.aspx?id=18",
  "issues": [
    {
      "id": "i-transparency-1",
      "title": "Transparency",
      "stated": {
        "text": "Identified transparency as the number one thing she would change about USD 489. She wants clearer communication between the district and families about decisions and spending.",
        "sourceIds": [
          "s-10",
          "s-12",
          "s-39",
          "s-41",
          "s-63",
          "s-69"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Hays Post",
          "observation": "Transparency and communication are the clearest self-selected improvement areas. In the Oct. 2023 Hays Post Q&A, she said the one thing she would change about USD 489 was \"the transparency of the district\" and said the current board had taken strides but she wanted to see more. In the July 2023 profile and Tiger Media guide, she tied transparency to families entrusting the district with children and tax dollars....",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-114"
          ],
          "mappedToIssueId": "i-transparency-1"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Hays Post",
          "observation": "Hays Post July 2023 candidate profile: biography, local roots, teacher/parent identity, quality instruction, board unity, stakeholder relations, bond facilities, transparency, tax-dollar accountability. (source) 8. Tiger Media Network October 2023 candidate guide: first-person candidate answers on education, Hays, bond, transparency, questions/research, and support during facility changes. (source) 9.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-58"
          ],
          "mappedToIssueId": "i-transparency-1"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Hays Post",
          "observation": "Hays Post October 2023 Q&A: transparency, board/administration views, board role, bond accountability, self-funding. (source) 10. Hays Post October 2023 candidate forum: private bathrooms, board relations, Glassman/HVAC conflict recusal. (source) 11. Hays Post November 2023 canvass story: Goetz won final seat by three votes and gave brief post-election quote. (source) 12.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-114"
          ],
          "mappedToIssueId": "i-transparency-1"
        }
      ]
    },
    {
      "id": "i-student-discipline-2",
      "title": "Student Discipline",
      "stated": {
        "text": "Has pushed for more specific, written-out consequences in the student handbook so that discipline is consistent. She brought at least six complaints about inconsistency at Hays High to the board.",
        "sourceIds": [
          "s-41",
          "s-127",
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
          "platform": "Hays Post",
          "observation": "Her board seat was decided after the November 2023 election canvass. Hays Post reported that she won the fourth USD 489 seat by three votes over incumbent Craig Pallister and quoted her saying she was looking forward to working with the board to make the district the best it could be. (Hays Post, Nov. 14, 2023)",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-116"
          ],
          "mappedToIssueId": "i-student-discipline-2"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Public web",
          "observation": "Goetz does not appear to run a visible campaign-social operation. Her accessible public message is concentrated in 2023 candidate questionnaires, a 2023 candidate forum, public board meetings, official district meeting infrastructure, and local coverage of board debates.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-122"
          ],
          "mappedToIssueId": "i-student-discipline-2"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Hays Post",
          "observation": "Her core candidate identity is local, parent, and teacher-centered. She described herself as a lifelong Hays resident, USD 489 graduate, former Hays High teacher, FHSU math instructor, wife, mother of two, and supporter of education. Her professional identity is confirmed by the FHSU mathematics faculty page, which lists her as an instructor active in Algebra. (Hays Post, July 13, 2023, Tiger Media Network, Oct....",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-58"
          ],
          "mappedToIssueId": "i-student-discipline-2"
        }
      ]
    },
    {
      "id": "i-school-mascot-3",
      "title": "School Mascot",
      "stated": {
        "text": "Supported the board vote to change the Hays Middle School mascot to Indians after reviewing community survey responses and calling many of them ignorant and immature.",
        "sourceIds": [
          "s-1",
          "s-3",
          "s-4",
          "s-5",
          "s-6",
          "s-8"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Hays Post",
          "observation": "Her education message emphasizes quality instruction and staff support. She says her own USD 489 experience gave her relationships, rigor, and relevance, and that teaching at multiple levels showed her how quality instruction benefits students and the community. She said the district should ensure a positive work environment for people educating children. (Hays Post, July 13, 2023, Tiger Media Network)",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-58"
          ],
          "mappedToIssueId": "i-school-mascot-3"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Hays Post",
          "observation": "She supports the bond's facility goals but frames them through accountability. In candidate materials, she said improved facilities could foster a growth mindset and keep staff and students safe. In the Oct. 2023 Q&A, she said the bond buildings are for what staff and students need, not for her, but she wanted accountability and fiscally responsible decisions. (Hays Post, July 13, 2023, Hays Post, Oct. 28, 2023)",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-58"
          ],
          "mappedToIssueId": "i-school-mascot-3"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Hays Post",
          "observation": "Her board-role message accepts administrative day-to-day control while reserving board oversight on policy and accountability. In the Oct. 2023 Q&A, she said the board oversees policy and day-to-day operations are left to hired professionals. In 2025 handbook coverage, however, she argued that the Hays High handbook needed operational definitions so consequences were consistent and teachers could know what would...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-114"
          ],
          "mappedToIssueId": "i-school-mascot-3"
        }
      ]
    },
    {
      "id": "i-technology-in-schools-4",
      "title": "Technology in Schools",
      "stated": {
        "text": "Backed providing laptops to Hays High students after hearing from teachers who preferred them over other options.",
        "sourceIds": [
          "s-41",
          "s-111",
          "s-1",
          "s-2",
          "s-3",
          "s-4"
        ]
      },
      "actions": [],
      "socialSignals": []
    },
    {
      "id": "i-bond-spending-5",
      "title": "Bond Spending",
      "stated": {
        "text": "Generally supports the district's approach to bond project management, though she has asked questions about how salary and spending figures are calculated.",
        "sourceIds": [
          "s-3",
          "s-5",
          "s-50",
          "s-71",
          "s-115",
          "s-124"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Hays Post",
          "observation": "On private bathrooms, Goetz's visible position is supportive. At the Oct. 2023 forum, she said students avoiding bathrooms because of privacy and bullying should have a say in what school looks like. In April 2024 board coverage, she questioned why bathrooms were the focus and said she did not think the bathrooms would change who children are. (Hays Post, Oct. 18, 2023, Tiger Media Network, Apr. 9, 2024)",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "i-bond-spending-5"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Hays Post",
          "observation": "On the Hays Middle School mascot, Goetz brought the discussion back to the board after receiving emails and questions. Tiger Media reported that she raised the Kansas Board of Education recommendation to phase out Indian mascots and asked whether the board was willing to incur costs later if a recommendation became a mandate. Hays Post later reported she supported the vote to change the middle school mascot to...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-2"
          ],
          "mappedToIssueId": "i-bond-spending-5"
        },
        {
          "id": "ss-crossref-5",
          "platform": "usd489.com",
          "observation": "On calendars and professional development, Goetz's teacher experience is central. USD 489's reposted article says she found it difficult to transition between teaching and professional development on early-release days, understood family child-care challenges, and believed full in-service days were better for staff and ultimately students. (USD 489, Feb. 2024)",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-3"
          ],
          "mappedToIssueId": "i-bond-spending-5"
        }
      ]
    }
  ],
  "whoTheyAre": "Jayme Goet",
  "recordSummary": "Goet",
  "ownWordsNarrative": "_A summary of what Jayme Goetz has publicly said, posted, and had attributed to her across USD 489 board pages, USD 489 meeting/video records, local candidate Q&As, local news, school coverage, public professional profiles, and public profile previews. Drawn from public captures from March 10, 2020 through May 11, 2026. We report patterns; we do not interpret intent._\n\nGoetz's public message is local, educator-centered, and mostly candidate-attributed through Hays Post and Tiger Media Network rather than through campaign social media. She presents herself as a lifelong Hays resident, USD 489 graduate, former Hays High teacher, FHSU math instructor, wife, mother of two, and supporter of public education. FHSU's faculty page confirms her current professional role as a mathematics instructor active in Algebra. ([Hays Post](https://hayspost.com/posts/8c99812c-9463-4172-9aef-4df43a05b5d9), [Tiger Media Network](https://tigermedianet.com/?p=75249), [FHSU](https://www.fhsu.edu/macs/faculty-and-staff/))\n\nHer main self-selected improvement area is transparency. In her October 2023 Hays Post Q&A, when asked what one thing she would change about USD 489, she answered \"the transparency of the district.\" In the same campaign cycle, she said she believed in clear communication with community members who entrust the district with their children and tax dollars, and that board decisions affect someone in the community. ([Hays Post Q&A](https://hayspost.com/posts/74087102-4ca2-4d13-89e0-5ddd64e94d6f), [Hays Post profile](https://hayspost.com/posts/8c99812c-9463-4172-9aef-4df43a05b5d9))\n\nShe links education quality to her own path through USD 489 and FHSU. Goetz said she and her husband were products of USD 489 and benefited from a system that emphasized relationships, rigor, and relevance. She said teaching at different levels of education showed her that quality instruction benefits students and the community. ([Hays Post](https://hayspost.com/posts/8c99812c-9463-4172-9aef-4df43a05b5d9), [Tiger Media Network](https://tigermedianet.com/?p=75249))\n\nHer board message is collaborative but not passive. As a candidate, she said she wanted to strengthen and unify the board, improve relations with stakeholders, and ensure a positive work environment for educators. At the same time, she said board members have a responsibility to research, ask questions, and understand options before selecting the best one. ([Hays Post](https://hayspost.com/posts/8c99812c-9463-4172-9aef-4df43a05b5d9), [Tiger Media Network](https://tigermedianet.com/?p=75249))\n\nOn board role, she says day-to-day operations belong to hired professionals while policy and accountability remain board work. In the October 2023 Q&A, she said the board oversees policy and that day-to-day operations are left to professionals hired for those positions. In 2025 handbook debates, she treated discipline language as policy, arguing that operational definitions help teachers and students know whether consequences will be consistent. ([Hays Post Q&A](https://hayspost.com/posts/74087102-4ca2-4d13-89e0-5ddd64e94d6f), [Tiger Media Network](https://tigermedianet.com/?p=87800), [Hays Post](https://hayspost.com/posts/bc933c79-2f23-4279-8171-bc6dcf391cf0))\n\nFacilities and the bond are a major part of her message, but she frames them through students, staff, and accountability. She said the bond would give staff and students improved facilities that foster growth and safety. She also said the buildings are for what staff and students need, not what she needs, and that accountability and fiscal responsibility around the money are priorities. ([Hays Post profile](https://hayspost.com/posts/8c99812c-9463-4172-9aef-4df43a05b5d9), [Hays Post Q&A](https://hayspost.com/posts/74087102-4ca2-4d13-89e0-5ddd64e94d6f))\n\nOn private bathrooms at the new Hays High, Goetz's visible position is supportive. During the October 2023 candidate forum, Hays Post reported that she favored the new bathroom design because students were avoiding bathrooms due to privacy and bullying issues. In April 2024 board coverage, she questioned why bathrooms were the focus and said she did not think the bathrooms would change who children are, putting responsibility on parents to talk with their children. ([Hays Post forum](https://hayspost.com/posts/19aa6807-369c-4e64-9c1c-8af9d88c84df), [Tiger Media Network](https://tigermedianet.com/?p=78383))\n\nOn professional development calendars, she used her classroom experience to support full in-service days over early release. USD 489's reposted article says she found it hard to transition between teaching and professional development during early-release days and believed full in-service days were better for staff and ultimately students, while acknowledging child-care issues for families. ([USD 489](https://www.usd489.com/article/1447496))\n\nOn cell phones, Goetz called student phone use a real problem but not only a school problem. Tiger Media reported that, as a Hays High teacher, she used classroom phone holders and still saw students work around them. She also noted that cell phones can be used positively in classroom lessons. ([Tiger Media Network](https://tigermedianet.com/?p=79974))\n\nOn discipline and handbooks, she has been one of the more visible voices for clearer written consequences. Tiger Media reported that she opposed the Hays High handbook when it removed operational definitions, saying those definitions help ensure consequences are equal for all students. Hays Post later reported that she had received at least six complaints about consistency in high-school discipline and encouraged a teacher committee for future handbook work. ([Tiger Media Network](https://tigermedianet.com/?p=87800), [Hays Post](https://hayspost.com/posts/bc933c79-2f23-4279-8171-bc6dcf391cf0))\n\nOn mascot issues, Goetz brought the Hays Middle School mascot discussion back to the board after receiving emails and having questions about keeping the middle school mascot as Falcons. Tiger Media reported that she pointed to the Kansas Board of Education recommendation to phase out Indian mascots and asked the board to consider future costs if that recommendation became a mandate. Later Hays Post coverage reported she supported changing the middle school mascot to Indians after reviewing survey responses. ([Tiger Media Network](https://tigermedianet.com/?p=78383), [USD 489](https://www.usd489.com/article/1542245), [Hays Post](https://hayspost.com/posts/5b2cf14f-06bc-4086-9693-c33581fe6a7c))\n\nHer fiscal/process comments are usually questions about clarity rather than blanket opposition. In June 2025, Hays Post reported she questioned how a 2.5 percent raise figure was calculated when the same dollar increase affected newer and seasoned teachers differently. In September 2025, she voted against exceeding the revenue-neutral rate, while the budget itself passed with only Allen Park opposed. In Felten project coverage, she said she was trying to make sure the board had the right information before approval. ([Hays Post raises](https://hayspost.com/posts/de2764c1-3767-4d5a-8353-888aa39a31cf), [Hays Post budget](https://hayspost.com/posts/78d0c0ef-e656-4526-892f-35f245aa0336), [Tiger Media Network](https://tigermedianet.com/?p=94701))\n\nHer post-election public comment was brief and district-focused. After the November 2023 canvass gave her the final USD 489 seat by three votes over Craig Pallister, Hays Post quoted her saying she looked forward to working with the board to make the district the best it could be. ([Hays Post](https://hayspost.com/posts/c83d9d32-2242-4092-8fa5-f0a1321bb826))\n\nRole records are straightforward as of this capture. The USD 489 Diligent/HighBond member page lists Jayme Goetz as Board Member, and public meeting pages list her among members for 2025-2026 meetings. A June 2025 Hays Post story reported she was then vice president and willing to serve another term if elected, but the current official portal listing reviewed here identifies her as Board Member. ([USD 489 member page](https://usd489.community.highbond.com/portal/members.aspx?id=18), [USD 489 meeting page](https://usd489.community.highbond.com/Portal/MeetingInformation.aspx?Id=217), [Hays Post](https://hayspost.com/posts/17bd928c-22c6-4be8-980e-34e878be6c58))\n\nThe accessible social footprint is thin. A LinkedIn public preview identifies Jayme Goetz in Hays with Fort Hays State University and 167 followers/connections, but it does not expose a reliable school-board campaign post inventory. No verified campaign website or candidate-controlled campaign social feed surfaced. ([LinkedIn](https://www.linkedin.com/in/jayme-goetz), [harvest](social-harvest.md#visible-absences))\n\nThe absences matter. No clear candidate-controlled campaign account was found on Facebook, X/Twitter, Instagram, YouTube, TikTok, Bluesky, Threads, Truth Social, Gab, Gettr, Substack, Medium, Reddit, or a newsletter platform. No candidate-controlled public video channel surfaced; USD 489 YouTube links are public meeting records maintained by the district. ([harvest](social-harvest.md#visible-absences))\n\nAcross the accessible set, Goetz does not center national partisan issues. I found no candidate-controlled or candidate-attributed messaging focused on Donald Trump, Joe Biden, abortion, guns, immigration, Medicaid, rural hospitals, water/Ogallala policy, roads, broadband, policing, or statewide tax policy outside USD 489 budget/tax/rate votes. Her visible words stay close to USD 489 operations: transparency, board role, bond/facility work, bathrooms/privacy, discipline/handbook consistency, cell phones, professional development, staff/admin support, taxes/raises, and mascot process. ([harvest](social-harvest.md#topic-share-analysis))\n\nMethodology: Public capture was conducted on May 11, 2026. Date range covered: March 10, 2020 through May 11, 2026. Sources surveyed included USD 489 official pages, USD 489 Diligent/HighBond board portal, USD 489 meeting/video entry points where indexed, Hays Post, Tiger Media Network, Hays High Guidon, FHSU, LinkedIn, Ballotpedia, Facebook, X/Twitter, Instagram, YouTube, TikTok, Bluesky, Threads, Truth Social, Gab, Gettr, Substack, Medium, Reddit, broad public web search, and existing project memory for source leads. Login-walled, script-blocked, unindexed, or otherwise inaccessible social feeds were not counted as reviewed content. We report visible patterns and documented absences; we do not infer private views, inaccessible account activity, or intent.",
  "whereTheyWorship": "Public sources do not identify a current church affiliation.",
  "campaignFinance": {
    "totalRaised": "No clean total verified in reviewed public sources",
    "narrative": "No campaign finance data available online.",
    "donors": [
      {
        "name": "Campaign finance data",
        "amount": "No campaign finance data available online"
      }
    ],
    "reportingPeriod": "2026 cycle",
    "source": "Candidate questionnaires, local reporting, and reviewed public records"
  },
  "socialResearchNote": "Social research is included as observed public behavior, not as a proxy for belief. Platforms/sources checked: USD 489 official pages, USD 489 Diligent/HighBond board portal, USD 489 meeting/video entry points, Hays Post, Tiger Media Network, Hays High Guidon, FHSU, LinkedIn, Ballotpedia, Facebook, X / Twitter, Instagram, YouTube, TikTok, Bluesky, Threads, Truth Social, Gab, Gettr, Substack, Medium, Reddit, Public search. Harvest range: 2020-03-10 through 2026-05-11.",
  "sources": [
    {
      "id": "s-1",
      "tier": "primary",
      "url": "https://www.usd489.com/page/board-of-education",
      "title": "Usd489.Com",
      "publisher": "usd489.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-2",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/ff929dc5-f4f5-433c-876e-59fc19df6a2d",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-3",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Hays_Unified_School_District_489,_Kansas,_elections",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-4",
      "tier": "primary",
      "url": "https://go.boarddocs.com/ks/usd489/Board.nsf/vpublic",
      "title": "Go.Boarddocs.Com",
      "publisher": "go.boarddocs.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-5",
      "tier": "primary",
      "url": "https://www.ksde.gov/Board/Kansas-State-Board-of-Education/District-5",
      "title": "Ksde.Gov",
      "publisher": "ksde.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-6",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas_State_Board_of_Education_election,_2026",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-7",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Cathy_Hopkins",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-8",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2024/10/22/kansas-board-of-education-races-could-shift-power-to-conservative-bloc/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-9",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/eee8fa4b-005e-4c47-8558-a0c9729e7bd0",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-10",
      "tier": "primary",
      "url": "https://www.kansasregents.gov/about/meet_the_board",
      "title": "Kansasregents.Gov",
      "publisher": "kansasregents.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-11",
      "tier": "secondary",
      "url": "https://en.wikipedia.org/wiki/Kansas_Board_of_Regents",
      "title": "En.Wikipedia.Org",
      "publisher": "en.wikipedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-12",
      "tier": "secondary",
      "url": "https://fhtechnc.edu/about-us/our-college/board-trustees",
      "title": "Fhtechnc.Edu",
      "publisher": "fhtechnc.edu",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-13",
      "tier": "secondary",
      "url": "https://www.fhsu.edu/news/2023/01/kansas-board-of-regents-approves-the-affiliation-of-three-rural-higher-education-institutions",
      "title": "Fhsu.Edu",
      "publisher": "fhsu.edu",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-14",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/04cfdd2f-367b-48f6-b13c-fa85378ae474",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-15",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/2eac70a2-defb-441a-b6ec-ebd4a44fd068",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-16",
      "tier": "secondary",
      "url": "https://www.hdnews.net/usd489-fy26-budget-essentially-flat-3-10th-of-a-mill-increase/",
      "title": "Hdnews.Net",
      "publisher": "hdnews.net",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-17",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/3f40f8ab-02ff-465d-a0b9-edf33a81482e",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-18",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas_Elections_for_Supreme_Court_Justices_Amendment_(August_2026",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-19",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Kansas_Citizenship_Voting_Requirement_Amendment_(2026",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-20",
      "tier": "primary",
      "url": "https://www.kslegislature.gov/li/b2025_26/measures/sb75/",
      "title": "Kslegislature.Gov",
      "publisher": "kslegislature.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-21",
      "tier": "primary",
      "url": "https://www.ellisco.net/425/Election",
      "title": "Ellisco.Net",
      "publisher": "ellisco.net",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-22",
      "tier": "primary",
      "url": "https://www.sos.ks.gov/elections/candidate-information.html",
      "title": "Sos.Ks.Gov",
      "publisher": "sos.ks.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-23",
      "tier": "secondary",
      "url": "https://www.kasb.org/boe-elections",
      "title": "Kasb.Org",
      "publisher": "kasb.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-24",
      "tier": "secondary",
      "url": "https://www.hfehays.org/o/hfe/article/923439",
      "title": "Hfehays.Org",
      "publisher": "hfehays.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-25",
      "tier": "secondary",
      "url": "https://www.ihm-church.com/",
      "title": "Ihm-church.Com",
      "publisher": "ihm-church.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-26",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/5c04aec5-5ab3-413c-8844-d90e91aa0d31",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-27",
      "tier": "secondary",
      "url": "https://tigermedianet.com/?p=75270",
      "title": "Tigermedianet.Com",
      "publisher": "tigermedianet.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-28",
      "tier": "primary",
      "url": "https://haysusa.com/273/Shaun-Musil",
      "title": "Haysusa.Com",
      "publisher": "haysusa.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-29",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/49060a66-e8fc-4755-a296-382a14c00a3d",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-30",
      "tier": "primary",
      "url": "https://haysusa.com/270/Sandy-Jacobs",
      "title": "Haysusa.Com",
      "publisher": "haysusa.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-31",
      "tier": "secondary",
      "url": "https://heartlandcommunityfoundation.org/",
      "title": "Heartlandcommunityfoundation.Org",
      "publisher": "heartlandcommunityfoundation.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-32",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/5e243ec1-847a-40f8-a7dd-665ffe2f85de",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-33",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/a0f7dc0e-e11c-483b-95ef-cbd4ad3ac930",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-34",
      "tier": "primary",
      "url": "https://www.haysusa.com/149/City-Managers-Office",
      "title": "Haysusa.Com",
      "publisher": "haysusa.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-35",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/cc4157ce-3ec5-4765-b6c7-84923c7cee55",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-36",
      "tier": "secondary",
      "url": "https://www.kansassheriffs.org/county_map/county/914",
      "title": "Kansassheriffs.Org",
      "publisher": "kansassheriffs.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-37",
      "tier": "secondary",
      "url": "https://archive.hayspost.com/2019/10/31/undersheriff-braun-announces-run-for-ellis-county-sheriff-in-2020/",
      "title": "Archive.Hayspost.Com",
      "publisher": "archive.hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-38",
      "tier": "secondary",
      "url": "https://salinadiocese.org/parish/st-nicholas-of-myra-parish-hays/",
      "title": "Salinadiocese.Org",
      "publisher": "salinadiocese.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-39",
      "tier": "secondary",
      "url": "https://about.me/aaron.cunningham",
      "title": "About.Me",
      "publisher": "about.me",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-40",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/7ccb3a8f-a8c6-4baa-9767-cf155c00f4a1",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-41",
      "tier": "secondary",
      "url": "https://hayshighguidon.com/news/2019/10/26/assistant-ellis-county-attorney-aaron-cunningham-speaks-to-students-about-career-in-law/",
      "title": "Hayshighguidon.Com",
      "publisher": "hayshighguidon.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-42",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/08825e68-f663-4a03-96f4-0b2c6f0b4ec7",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-43",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/8400acf8-32ea-486a-b087-8423d8f728e0",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-44",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/70a84c66-2d84-4023-b4bb-df360cbe90dd",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-45",
      "tier": "secondary",
      "url": "https://www.haysmemorial.com/obituary/Marilyn-KlausLeiker/",
      "title": "Haysmemorial.Com",
      "publisher": "haysmemorial.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-46",
      "tier": "secondary",
      "url": "https://fhsuguides.fhsu.edu/kansasheritage/elliscounty",
      "title": "Fhsuguides.Fhsu.Edu",
      "publisher": "fhsuguides.fhsu.edu",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-47",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/46c0cb3c-bd1a-435f-9d5a-598963fe942a",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-48",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/a828fae7-451a-45b3-aed9-e12596bf13f4",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-49",
      "tier": "primary",
      "url": "https://www.ellisco.net/100/Register-of-Deeds",
      "title": "Ellisco.Net",
      "publisher": "ellisco.net",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-50",
      "tier": "secondary",
      "url": "https://ksrods.com/contact-information/ellis-county-el-nc-district/",
      "title": "Ksrods.Com",
      "publisher": "ksrods.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-51",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/635f478c-4649-44c1-80d8-631bc0897878",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-52",
      "tier": "secondary",
      "url": "https://salinadiocese.org/parish/our-lady-help-of-christians-parish-antonino/",
      "title": "Salinadiocese.Org",
      "publisher": "salinadiocese.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-53",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/e153a0fc-fe06-4de4-b5c7-d6f0d57fa59b",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-54",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/4f225559-3a1c-4499-af0d-d0c7affa85a1",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-55",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/2613aaa8-8055-4feb-9a79-d1b5479babca",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-56",
      "tier": "secondary",
      "url": "https://www.haysmed.com/provider/derek-m-yarmer-md/",
      "title": "Haysmed.Com",
      "publisher": "haysmed.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-57",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/7acb9e0e-4c56-4e6f-a618-4312a49cd922",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-58",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/8c99812c-9463-4172-9aef-4df43a05b5d9",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile.",
        "Observed public online activity mapped to Transparency.",
        "Observed public online activity mapped to School Mascot.",
        "Observed public online activity mapped to Student Discipline."
      ]
    },
    {
      "id": "s-59",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/66f0b3ef-9525-40e2-a3f2-f74e9deebb43",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-60",
      "tier": "secondary",
      "url": "https://hayshighguidon.com/news/2019/02/13/school-board-votes-approves-ron-wilson-as-new-superintendent/",
      "title": "Hayshighguidon.Com",
      "publisher": "hayshighguidon.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-61",
      "tier": "secondary",
      "url": "https://en.wikipedia.org/wiki/Tracey_Mann",
      "title": "En.Wikipedia.Org",
      "publisher": "en.wikipedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-62",
      "tier": "secondary",
      "url": "https://ksopen.org/mann-2",
      "title": "Ksopen.Org",
      "publisher": "ksopen.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-63",
      "tier": "primary",
      "url": "https://mann.house.gov/about",
      "title": "Mann.House.Gov",
      "publisher": "mann.house.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-64",
      "tier": "secondary",
      "url": "https://www.au.org/the-latest/church-and-state/articles/unhealthy-breakfast-how-the-national-prayer-breakfast-a-relic-from-the-1950s-era-of-civil-religion-evolved-into-a-florid-display-of-christian-nationalism/",
      "title": "Au.Org",
      "publisher": "au.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-65",
      "tier": "secondary",
      "url": "https://kansansformarshall.com/meet-doc/",
      "title": "Kansansformarshall.Com",
      "publisher": "kansansformarshall.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-66",
      "tier": "secondary",
      "url": "https://ksopen.org/marshall",
      "title": "Ksopen.Org",
      "publisher": "ksopen.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-67",
      "tier": "secondary",
      "url": "https://justfacts.votesmart.org/candidate/biography/172080/roger-marshall",
      "title": "Justfacts.Votesmart.Org",
      "publisher": "justfacts.votesmart.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-68",
      "tier": "secondary",
      "url": "https://kansasdisciples.org/property/great-bend-first-christian-church/",
      "title": "Kansasdisciples.Org",
      "publisher": "kansasdisciples.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-69",
      "tier": "secondary",
      "url": "https://barbforkansas.com/about/",
      "title": "Barbforkansas.Com",
      "publisher": "barbforkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-70",
      "tier": "secondary",
      "url": "https://barbwasinger.com/",
      "title": "Barbwasinger.Com",
      "publisher": "barbwasinger.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-71",
      "tier": "secondary",
      "url": "https://www.ksn.com/news/your-local-election-hq/election-guide-barbara-k-wasinger-r-kansas-house-district-111/",
      "title": "Ksn.Com",
      "publisher": "ksn.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-72",
      "tier": "secondary",
      "url": "https://whatreligionisinfo.com/kobach-religion/",
      "title": "Whatreligionisinfo.Com",
      "publisher": "whatreligionisinfo.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-73",
      "tier": "secondary",
      "url": "https://msclawrence.com/",
      "title": "Msclawrence.Com",
      "publisher": "msclawrence.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-74",
      "tier": "secondary",
      "url": "https://sunflowerstatejournal.com/kobach-denounces-vandalism-at-his-church/",
      "title": "Sunflowerstatejournal.Com",
      "publisher": "sunflowerstatejournal.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-75",
      "tier": "secondary",
      "url": "https://www.kcur.org/government/2017-08-22/kansas-trial-investigates-religious-discrimination-claim-in-kobachs-office",
      "title": "Kcur.Org",
      "publisher": "kcur.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-76",
      "tier": "secondary",
      "url": "https://www.christianpost.com/news/caleb-schwab-10-attended-church-with-family-hours-before-death-verruckt-schlitterbahn-water-park.html",
      "title": "Christianpost.Com",
      "publisher": "christianpost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-77",
      "tier": "secondary",
      "url": "https://fox4kc.com/news/at-funeral-for-his-son-caleb-schwabs-dad-tells-stories-that-show-calebs-love-and-humor/",
      "title": "Fox4kc.Com",
      "publisher": "fox4kc.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-78",
      "tier": "secondary",
      "url": "https://www.lifemission.church/",
      "title": "Lifemission.Church",
      "publisher": "lifemission.church",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-79",
      "tier": "secondary",
      "url": "https://heavy.com/news/2016/08/scott-schwab-michele-caleb-rep-parents-father-dad-mother-mom-family-verruckt-water-slide-kansas-schlitterbahn-photos-death-accident/",
      "title": "Heavy.Com",
      "publisher": "heavy.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-80",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/07/09/kansas-insurance-commissioner-vicki-schmidt-initiates-republican-campaign-for-governor/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-81",
      "tier": "secondary",
      "url": "https://vickiforgovernor.com/",
      "title": "Vickiforgovernor.Com",
      "publisher": "vickiforgovernor.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-82",
      "tier": "secondary",
      "url": "https://www.mastersonforgovernor.com/services",
      "title": "Mastersonforgovernor.Com",
      "publisher": "mastersonforgovernor.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-83",
      "tier": "secondary",
      "url": "https://csgmidwest.org/wp-content/uploads/2022/07/sen-masterson.pdf",
      "title": "Csgmidwest.Org",
      "publisher": "csgmidwest.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-84",
      "tier": "secondary",
      "url": "https://www.newspring.org/",
      "title": "Newspring.Org",
      "publisher": "newspring.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-85",
      "tier": "secondary",
      "url": "https://combatantisemitism.org/interview/its-important-to-understand-the-truth-and-spread-it-kansas-senate-president-ty-masterson-reflects-on-state-lawmakers-delegation-visit-to-israel/",
      "title": "Combatantisemitism.Org",
      "publisher": "combatantisemitism.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
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
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-87",
      "tier": "primary",
      "url": "https://www.kansashistory.gov/kansapedia/jeff-colyer/20011",
      "title": "Kansashistory.Gov",
      "publisher": "kansashistory.gov",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-88",
      "tier": "secondary",
      "url": "https://www.kshb.com/news/local-news/former-kansas-governor-volunteers-on-medical-mission-in-ukraine",
      "title": "Kshb.Com",
      "publisher": "kshb.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-89",
      "tier": "secondary",
      "url": "https://www.jeffcolyer.com/index.html",
      "title": "Jeffcolyer.Com",
      "publisher": "jeffcolyer.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-90",
      "tier": "secondary",
      "url": "https://ethanforkansas.com/",
      "title": "Ethanforkansas.Com",
      "publisher": "ethanforkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-91",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/07/22/kansas-sen-ethan-corson-enters-race-for-democratic-partys-nomination-for-governor/",
      "title": "Kansasreflector.Com",
      "publisher": "kansasreflector.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-92",
      "tier": "secondary",
      "url": "https://en.wikipedia.org/wiki/Cindy_Holscher",
      "title": "En.Wikipedia.Org",
      "publisher": "en.wikipedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-93",
      "tier": "secondary",
      "url": "https://cindyforkansas.com/about/",
      "title": "Cindyforkansas.Com",
      "publisher": "cindyforkansas.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-94",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/23c8a445-672d-44c2-be79-5d6dc47a2b3a",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-95",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/199257e6-fc97-4089-8a4c-67a87d3422f8",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-96",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/5e878e4beb7f170536019f51",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-97",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/6942435f-2284-422c-9ed9-5bf7d68c4984",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-98",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/e4ec7011-734d-4c18-ab28-c5b38d236126",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-99",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/b833cbe0-37a8-4535-be13-b7d1c2ca645a",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-100",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/0187e996-15de-4377-95c2-cc428ed058e5",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-101",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/03620484-d421-4ae2-b3be-d87652788a17",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-102",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/665c7e1e-0989-4038-b3ed-a1ca37030c6f",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-103",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/8ce0d386-aba6-4c42-b880-1307752c8220",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-104",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/5b2cf14f-06bc-4086-9693-c33581fe6a7c",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-105",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/ae86883e-49b6-4bb5-af6c-acddd174da30",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-106",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/0ef676f6-e0ff-4a1c-b697-d9f74d3d7649",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-107",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/52e53c90-5182-42f0-919e-2c7dc145305b",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-108",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/ed7e23f5-7116-4798-87ff-ff11bf8563d4",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-109",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/87f9b442-e928-4c9d-bb85-03acad9d2a3f",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-110",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/d89d076f-4f16-4002-a12d-d27ea8cd6471",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-111",
      "tier": "secondary",
      "url": "https://archive.hayspost.com/2015/05/19/park-announces-retirement-after-30-years-with-usd-489/",
      "title": "Archive.Hayspost.Com",
      "publisher": "archive.hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-112",
      "tier": "secondary",
      "url": "https://www.citizenjournal.us/takeaways-from-hays-usd-489-education-board-meeting/",
      "title": "Citizenjournal.Us",
      "publisher": "citizenjournal.us",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-113",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/9fb91da0-f9e5-4d80-a065-c5c2727c6fb8",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-114",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/74087102-4ca2-4d13-89e0-5ddd64e94d6f",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile.",
        "Observed public online activity mapped to Transparency.",
        "Observed public online activity mapped to Bond Spending.",
        "Observed public online activity mapped to School Mascot."
      ]
    },
    {
      "id": "s-115",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Jayme_Goetz_(Hays_Unified_School_District_489,_At-large,_Kansas,_candidate_2023",
      "title": "Ballotpedia.Org",
      "publisher": "ballotpedia.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile.",
        "Observed public online activity mapped to School Mascot."
      ]
    },
    {
      "id": "s-116",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/c83d9d32-2242-4092-8fa5-f0a1321bb826",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile.",
        "Observed public online activity mapped to Bond Spending.",
        "Observed public online activity mapped to Student Discipline."
      ]
    },
    {
      "id": "s-117",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/bc933c79-2f23-4279-8171-bc6dcf391cf0",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-118",
      "tier": "secondary",
      "url": "https://www.fhsu.edu/macs/faculty-and-staff/",
      "title": "Fhsu.Edu",
      "publisher": "fhsu.edu",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile.",
        "Observed public online activity mapped to Transparency."
      ]
    },
    {
      "id": "s-119",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/d484e173-9cdf-49f3-b7fa-5effce503aab",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-120",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/7b0b83c9-2b64-4462-959d-ff904e2d896e",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-121",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/94f59897-4370-450a-b4ed-f5ebbf54a523",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-122",
      "tier": "social",
      "url": "https://www.linkedin.com/in/ron-wilson-96762118a/",
      "title": "Linkedin.Com",
      "publisher": "linkedin.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-123",
      "tier": "secondary",
      "url": "https://www.kwch.com/2022/05/26/county-attorney-declines-action-hays-superintendent-email-staff/",
      "title": "Kwch.Com",
      "publisher": "kwch.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-124",
      "tier": "secondary",
      "url": "https://www.hdnews.net/2022/05/02/superintendents-email-sparks-controversy-as-election-day-approaches-for-school-bond/",
      "title": "Hdnews.Net",
      "publisher": "hdnews.net",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-125",
      "tier": "secondary",
      "url": "https://sentinelksmo.org/choosing-which-crimes-to-prosecute-comes-to-kansas-on-election-bribery/",
      "title": "Sentinelksmo.Org",
      "publisher": "sentinelksmo.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-126",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/caf3d4b9-e869-42ad-84f8-def54af685e2",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-127",
      "tier": "secondary",
      "url": "https://sentinelksmo.org/usd-489-hays-no-apparent-written-plan-to-improve-low-proficiency-levels/",
      "title": "Sentinelksmo.Org",
      "publisher": "sentinelksmo.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-128",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/a1ad62ca-72ac-46d4-a3c1-e2248ae736b3",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-129",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/09e13f5d-3612-4ec5-9106-d99396d14ac3",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-130",
      "tier": "secondary",
      "url": "https://sentinelksmo.org/hays-high-school-contstruction-project-restrooms-stirs-controversy/",
      "title": "Sentinelksmo.Org",
      "publisher": "sentinelksmo.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-131",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/677ac412-2adb-48bd-85f8-bbd5f05bb92f",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-132",
      "tier": "secondary",
      "url": "https://www.kwch.com/content/news/Hays-School-District-hires-new-superintendent-505712821.html",
      "title": "Kwch.Com",
      "publisher": "kwch.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-133",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/ae1e5e6f-c630-4c15-b42e-fa787284525d",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-134",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/95dab7ab-70ba-44ee-91ee-2760e55665bf",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-135",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/1cd56ea1-18ea-4126-aa69-97b826446d03",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-136",
      "tier": "secondary",
      "url": "https://openpayrolls.com/rank/highest-paid-employees/kansas-hays",
      "title": "Openpayrolls.Com",
      "publisher": "openpayrolls.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-137",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/18d3a237-b1c0-45a5-886e-980bb0c81483",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-138",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/232ef2ef-ffa2-4666-9afa-3fe0993b01bb",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-139",
      "tier": "secondary",
      "url": "https://ffrf.org/news/news-releases/item/41401-ffrf-prompts-kan-school-board-to-repeal-discriminatory-dress-code",
      "title": "Ffrf.Org",
      "publisher": "ffrf.org",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-140",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/a8daf6b6-7bf6-4ce8-b9a8-f367aeb9494c",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-141",
      "tier": "primary",
      "url": "https://www.usd489.com/",
      "title": "Usd489.Com",
      "publisher": "usd489.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-142",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/b8de0496-38a0-459d-813c-fbb70028b4c8",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-143",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/de2764c1-3767-4d5a-8353-888aa39a31cf",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-144",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/fc95a5ee-b8b3-4d06-b876-7cba2008d1cb",
      "title": "Hayspost.Com",
      "publisher": "hayspost.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile."
      ]
    },
    {
      "id": "s-145",
      "tier": "primary",
      "url": "https://usd489.community.highbond.com/portal/members.aspx?id=18",
      "title": "Usd489.Community.Highbond.Com",
      "publisher": "usd489.community.highbond.com",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Source carried forward for Jayme Goetz's generated v2 profile.",
        "Observed public online activity mapped to Student Discipline.",
        "Observed public online activity mapped to Bond Spending."
      ]
    },
    {
      "id": "s-social-crossref-1",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/19aa6807-369c-4e64-9c1c-8af9d88c84df",
      "title": "Hays Post / Hayspost",
      "publisher": "Hayspost",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Bond Spending.",
        "On private bathrooms, Goetz's visible position is supportive. At the Oct. 2023 forum, she said students avoiding bathrooms because of privacy and bullying should have a say in what"
      ]
    },
    {
      "id": "s-social-crossref-2",
      "tier": "secondary",
      "url": "https://tigermedianet.com/?p=78383",
      "title": "Hays Post / Tigermedianet",
      "publisher": "Tigermedianet",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Bond Spending.",
        "On the Hays Middle School mascot, Goetz brought the discussion back to the board after receiving emails and questions. Tiger Media reported that she raised the Kansas Board of Educ"
      ]
    },
    {
      "id": "s-social-crossref-3",
      "tier": "primary",
      "url": "https://www.usd489.com/article/1447496",
      "title": "usd489.com / Usd489",
      "publisher": "Usd489",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Bond Spending.",
        "On calendars and professional development, Goetz's teacher experience is central. USD 489's reposted article says she found it difficult to transition between teaching and professi"
      ]
    }
  ]
};

if (process.env.NODE_ENV !== "production") {
  const result = validateCandidateV2(JAYME_GOETZ_V2);
  if (!result.ok) {
    // eslint-disable-next-line no-console
    console.error(
      "[jayme-goetz.ts] validateCandidateV2 FAILED:\n" +
        result.errors.join("\n"),
    );
  }
}
