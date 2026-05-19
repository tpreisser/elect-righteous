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
          "s-4",
          "s-5",
          "s-2",
          "s-3"
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
            "s-3"
          ],
          "mappedToIssueId": "i-transparency-1"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Hays Post",
          "observation": "Hays Post July 2023 candidate profile: biography, local roots, teacher/parent identity, quality instruction, board unity, stakeholder relations, bond facilities, transparency, tax-dollar accountability. (source) 8. Tiger Media Network October 2023 candidate guide: first-person candidate answers on education, Hays, bond, transparency, questions/research, and support during facility changes. (source) 9.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-2"
          ],
          "mappedToIssueId": "i-transparency-1"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Hays Post",
          "observation": "Hays Post October 2023 Q&A: transparency, board/administration views, board role, bond accountability, self-funding. (source) 10. Hays Post October 2023 candidate forum: private bathrooms, board relations, Glassman/HVAC conflict recusal. (source) 11. Hays Post November 2023 canvass story: Goetz won final seat by three votes and gave brief post-election quote. (source) 12.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-3"
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
          "s-2",
          "s-3",
          "s-4",
          "s-5"
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
            "s-social-crossref-1"
          ],
          "mappedToIssueId": "i-student-discipline-2"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Public web",
          "observation": "Goetz does not appear to run a visible campaign-social operation. Her accessible public message is concentrated in 2023 candidate questionnaires, a 2023 candidate forum, public board meetings, official district meeting infrastructure, and local coverage of board debates.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-1"
          ],
          "mappedToIssueId": "i-student-discipline-2"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Hays Post",
          "observation": "Her core candidate identity is local, parent, and teacher-centered. She described herself as a lifelong Hays resident, USD 489 graduate, former Hays High teacher, FHSU math instructor, wife, mother of two, and supporter of education. Her professional identity is confirmed by the FHSU mathematics faculty page, which lists her as an instructor active in Algebra. (Hays Post, July 13, 2023, Tiger Media Network, Oct....",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-2"
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
          "s-2",
          "s-3",
          "s-4",
          "s-5"
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
            "s-2"
          ],
          "mappedToIssueId": "i-school-mascot-3"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Hays Post",
          "observation": "She supports the bond's facility goals but frames them through accountability. In candidate materials, she said improved facilities could foster a growth mindset and keep staff and students safe. In the Oct. 2023 Q&A, she said the bond buildings are for what staff and students need, not for her, but she wanted accountability and fiscally responsible decisions. (Hays Post, July 13, 2023, Hays Post, Oct. 28, 2023)",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-2"
          ],
          "mappedToIssueId": "i-school-mascot-3"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Hays Post",
          "observation": "Her board-role message accepts administrative day-to-day control while reserving board oversight on policy and accountability. In the Oct. 2023 Q&A, she said the board oversees policy and day-to-day operations are left to hired professionals. In 2025 handbook coverage, however, she argued that the Hays High handbook needed operational definitions so consequences were consistent and teachers could know what would...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-3"
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
          "s-2",
          "s-3",
          "s-4",
          "s-5"
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
          "s-2",
          "s-3",
          "s-4",
          "s-5"
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
            "s-social-crossref-2"
          ],
          "mappedToIssueId": "i-bond-spending-5"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Hays Post",
          "observation": "On the Hays Middle School mascot, Goetz brought the discussion back to the board after receiving emails and questions. Tiger Media reported that she raised the Kansas Board of Education recommendation to phase out Indian mascots and asked whether the board was willing to incur costs later if a recommendation became a mandate. Hays Post later reported she supported the vote to change the middle school mascot to...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-3"
          ],
          "mappedToIssueId": "i-bond-spending-5"
        },
        {
          "id": "ss-crossref-5",
          "platform": "usd489.com",
          "observation": "On calendars and professional development, Goetz's teacher experience is central. USD 489's reposted article says she found it difficult to transition between teaching and professional development on early-release days, understood family child-care challenges, and believed full in-service days were better for staff and ultimately students. (USD 489, Feb. 2024)",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-social-crossref-4"
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
      "tier": "social",
      "url": "https://www.linkedin.com/in/jayme-goetz",
      "title": "source",
      "publisher": "Linkedin",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Jayme Goetz."
      ]
    },
    {
      "id": "s-2",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/8c99812c-9463-4172-9aef-4df43a05b5d9",
      "title": "HaysPost: USD 489 school board candidate Jayme Goetz",
      "publisher": "Hayspost",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Jayme Goetz.",
        "Observed public online activity mapped to Transparency.",
        "Observed public online activity mapped to Student Discipline.",
        "Observed public online activity mapped to School Mascot."
      ]
    },
    {
      "id": "s-3",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/74087102-4ca2-4d13-89e0-5ddd64e94d6f",
      "title": "Hays USD 489 BOE Candidate: Jayme Goetz",
      "publisher": "Hayspost",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Jayme Goetz.",
        "Observed public online activity mapped to Transparency.",
        "Observed public online activity mapped to School Mascot."
      ]
    },
    {
      "id": "s-4",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Jayme_Goetz_(Hays_Unified_School_District_489,_At-large,_Kansas,_candidate_2023",
      "title": "Jayme Goetz -- Ballotpedia",
      "publisher": "Ballotpedia",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Jayme Goetz."
      ]
    },
    {
      "id": "s-5",
      "tier": "secondary",
      "url": "https://ballotpedia.org/Jayme_Goetz_(Hays_Unified_School_District_489,_At-large,_Kansas,_candidate_2023)",
      "title": "Ballotpedia",
      "publisher": "Ballotpedia",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Jayme Goetz."
      ]
    },
    {
      "id": "s-social-crossref-1",
      "tier": "secondary",
      "url": "https://hayspost.com/posts/c83d9d32-2242-4092-8fa5-f0a1321bb826",
      "title": "Hays Post / Hayspost",
      "publisher": "Hayspost",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Observed public online activity mapped to Student Discipline.",
        "Her board seat was decided after the November 2023 election canvass. Hays Post reported that she won the fourth USD 489 seat by three votes over incumbent Craig Pallister and quote"
      ]
    },
    {
      "id": "s-social-crossref-2",
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
      "id": "s-social-crossref-3",
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
      "id": "s-social-crossref-4",
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
