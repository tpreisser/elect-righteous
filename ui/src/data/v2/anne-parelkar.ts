/* Auto-normalized with issue-mapped social/online cross-reference signals.
 * To refresh:
 *   node scripts/hydrate-v2-social-signals.mjs
 */

import type { CandidateFullV2 } from "@/data/types-v2";
import { validateCandidateV2 } from "@/data/types-v2";

export const ANNE_PARELKAR_V2: CandidateFullV2 = {
  "slug": "anne-parelkar",
  "name": "Anne Parelkar",
  "party": "D",
  "position": "U.S. Senate candidate",
  "electionSlug": "us-senate-2026",
  "incumbent": false,
  "occupation": "Community Advocate",
  "hometown": "Overland Park, KS (Johnson County)",
  "campaignWebsite": "https://www.anneforkansas.com/",
  "issues": [
    {
      "id": "i-abortion-sanctity-of-life-1",
      "title": "Abortion / Sanctity of Life",
      "stated": {
        "text": "No candidate-controlled statement was found in the reviewed public record for this issue. This page therefore does not infer a position from party label, faith affiliation, follows, likes, comments, or associations.",
        "sourceIds": [
          "s-20",
          "s-21",
          "s-22",
          "s-24"
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
          "s-20",
          "s-21",
          "s-22",
          "s-24"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Bluesky",
          "observation": "Approximate Bluesky topic distribution among the 51 cataloged originals: local outreach and public access — 22 posts (43%); government accountability, unity, campaign finance, and party independence — 10 posts (20%); health care, labor, child care, consumer costs, agriculture, and veterans — 8 posts (16%); immigration, LGBTQ policy, voting, and civil rights — 6 posts (12%); foreign policy, war, Russia, Iran, and...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-1"
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
          "s-20",
          "s-21",
          "s-22",
          "s-24"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Public web",
          "observation": "Thought I'd share this clip from one of our upcoming podcasts where I talk about my faith and a conversation I had recently about that very same message.\"",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-1"
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
          "s-20",
          "s-21",
          "s-22",
          "s-24"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Bluesky",
          "observation": "Across the captured period the Bluesky feed contains no standalone posts centered on gun policy.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-1"
          ],
          "mappedToIssueId": "i-guns-second-amendment-4"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Bluesky",
          "observation": "Across the captured period the feed contains no standalone posts centered on gun policy, Fort Riley, or water policy including the Ogallala Aquifer. The captured Bluesky feed contains one agriculture post and a linked campaign agriculture plank, but no detailed Farm Bill post. Veterans appear in a Veterans Day post, \"Our Veterans served us selflessly. Now it's our turn to serve them\" (source), but the captured...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-23"
          ],
          "mappedToIssueId": "i-guns-second-amendment-4"
        }
      ]
    },
    {
      "id": "i-immigration-border-5",
      "title": "Immigration / Border",
      "stated": {
        "text": "Parelkar says the immigration system is broken in practical ways, not just ideological ones. As a working immigration attorney, she has made fixing the system a centerpiece of her campaign, arguing that it fails both families and employers.",
        "sourceIds": [
          "s-28",
          "s-25",
          "s-77",
          "s-74",
          "s-20",
          "s-21"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "YouTube",
          "observation": "2026-02-17 — \"Last weekend we took our roundtable tour to #Lawrence! I had a lovely time meeting everyone, and on Saturday morning I joined #WomenForKansas to give a presentation on #immigration law, which is now up on YouTube so please check it out! www.youtube.com/watch?v=6TLY...\"",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-1"
          ],
          "mappedToIssueId": "i-immigration-border-5"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Kansas Reflector",
          "observation": "Source: Kansas Reflector, \"Democratic immigration lawyer wants to fix broken system with run for U.S. Senate in Kansas\" — https://kansasreflector.com/2025/08/25/democratic-immigration-lawyer-wants-to-fix-broken-system-with-run-for-u-s-senate-in-kansas/",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-28"
          ],
          "mappedToIssueId": "i-immigration-border-5"
        },
        {
          "id": "ss-crossref-5",
          "platform": "Bluesky",
          "observation": "She also posted appearances with the Riley County Democratic Party (source), Saline County Democratic Women, Kansas House candidate Cheri Koochel (source), the Kansas Democratic Party candidate forum (source), and Women for Kansas in Lawrence, where she said she gave a presentation on immigration law (source).",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-10"
          ],
          "mappedToIssueId": "i-immigration-border-5"
        }
      ]
    },
    {
      "id": "i-school-choice-parental-rights-in-education-6",
      "title": "School Choice / Parental Rights in Education",
      "stated": {
        "text": "No candidate-controlled statement was found in the reviewed public record for this issue. This page therefore does not infer a position from party label, faith affiliation, follows, likes, comments, or associations.",
        "sourceIds": [
          "s-20",
          "s-21",
          "s-22",
          "s-24"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Bluesky",
          "observation": "For Kansas-specific policy, Parelkar's feed combines statewide stops with issue planks on agriculture, health care, public schools, local communities, and worker protections. On March 25, 2026, she posted, \"Happy #NationalAgDay, everyone. I hear politicians talk a lot about supporting farmers. I say, enough talk. We need action. It's time to break the corporate stranglehold on agriculture and put power back in...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-19"
          ],
          "mappedToIssueId": "i-school-choice-parental-rights-in-education-6"
        }
      ]
    },
    {
      "id": "i-marijuana-drug-policy-7",
      "title": "Marijuana / Drug Policy",
      "stated": {
        "text": "Runs as a Democrat. No specific personal statement found in public sources.",
        "sourceIds": [
          "s-20",
          "s-21",
          "s-22",
          "s-24"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Bluesky",
          "observation": "Across the captured period the Bluesky feed contains no posts about water policy or the Ogallala Aquifer.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-1"
          ],
          "mappedToIssueId": "i-marijuana-drug-policy-7"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Bluesky",
          "observation": "On national and foreign-policy questions, Parelkar posts less often than she posts about campaign events and public access, but the captured feed includes immigration enforcement, voting, Russia, Iran, Gaza, federal labor policy, and the government shutdown. On March 1, 2026, she wrote, \"Politicians fight and we the people pay the price. #Trump #Iran\" (source). On November 29, 2025, she posted, \"Today is the...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-16"
          ],
          "mappedToIssueId": "i-marijuana-drug-policy-7"
        }
      ]
    },
    {
      "id": "i-healthcare-for-children-8",
      "title": "Healthcare for Children",
      "stated": {
        "text": "She has proposed replacing the patchwork of Medicaid, CHIP, and other programs for minors with a single consolidated health-care program for everyone under 18.",
        "sourceIds": [
          "s-21",
          "s-20",
          "s-22",
          "s-24"
        ]
      },
      "actions": [],
      "socialSignals": [
        {
          "id": "ss-crossref-1",
          "platform": "Bluesky",
          "observation": "Most-reposted Parelkar-authored Bluesky post in the captured set: 2025-11-17 ACA subsidy post — Likes 2, Reposts 4, Replies 0, Quotes 0 as of 2026-05-11 capture.",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-1"
          ],
          "mappedToIssueId": "i-healthcare-for-children-8"
        },
        {
          "id": "ss-crossref-3",
          "platform": "Bluesky",
          "observation": "Audience response on Parelkar's measurable Bluesky feed is small and concentrated around party independence, health care, and campaign-media clips. Her highest-engagement Parelkar-authored Bluesky post in the captured set was a June 24, 2025 post with 6 likes, 1 repost, 1 reply, and 0 quotes as of May 11, 2026: \"Pro Tip: You owe loyalty to no political party or political figure. Not now. Not ever. If your party...",
          "observedAt": "2026-05-19",
          "sourceIds": [
            "s-1"
          ],
          "mappedToIssueId": "i-healthcare-for-children-8"
        }
      ]
    },
    {
      "id": "i-consumer-protection-9",
      "title": "Consumer Protection",
      "stated": {
        "text": "She has called for stronger antitrust and consumer-protection laws, though specific policy details beyond that broad call have not been made public.",
        "sourceIds": [
          "s-71",
          "s-75",
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
      "id": "i-transparency-and-constituent-access-10",
      "title": "Transparency and Constituent Access",
      "stated": {
        "text": "She has said frustration with Roger Marshall's town halls and lack of constituent communication helped push her into the race, and she frames responsiveness as a core difference between herself and the incumbent.",
        "sourceIds": [
          "s-20",
          "s-21",
          "s-22",
          "s-24"
        ]
      },
      "actions": [],
      "socialSignals": []
    }
  ],
  "whoTheyAre": "Anne Parelkar is an Overland Park immigration attorney running in the 2026 Democratic primary for the U.S. Senate seat held by Roger Marshall. She was born in Pine Bluff, Arkansas, raised in White Hall, and studied at Lyon College before earning her law degree at the University of Arkansas at Little Rock in 2011. She later moved to Kansas through marriage and built a practice focused on immigration law.\n\nParelkar has never held elected office. Her public biography is that of a lawyer and mother of two who says she sees the country's immigration machinery up close and believes Washington is failing both families and employers. In a crowded Democratic field, that professional specialty makes her more distinct than many first-time candidates.",
  "recordSummary": "Because she is a first-time candidate, Parelkar's record is rooted less in prior office than in the issues she has chosen to make central. She has argued that the immigration system is broken in practical ways, not just ideological ones, and she has paired that message with a proposal to replace the patchwork of Medicaid, CHIP, and other programs for minors with a single health-care program for people under 18. She has also called for stronger antitrust and consumer-protection laws.\n\nHer campaign grew partly out of frustration with constituent access. Public interviews say attending Marshall town halls helped convince her to run, and she has used transparency and responsiveness as a contrast point. The one clear controversy in the source file is procedural: she was named in an NRSC complaint over a late personal financial disclosure filing.",
  "ownWordsNarrative": "*A summary of what Anne Parelkar has publicly said, posted, and amplified across social media. Drawn from public posts on Bluesky and campaign-controlled website records between February 2025 and April 2026, with official platform links checked on May 11, 2026. We report patterns; we do not interpret intent.*\n\n---\n\nAcross the [51 Parelkar-authored Bluesky posts cataloged in the harvest](social-harvest.md), her most frequent subject is in-person contact with Kansans: roundtables, coffee meetings, county Democratic gatherings, candidate forums, and listening-tour stops account for 22 posts, or 43 percent of the cataloged Bluesky originals. On April 9, 2026, she posted, \"We'll be in #GardenCity this Sunday for another roundtable! Hope to see you there! Doesn't matter what party you are, bring a friend, come say hi, and let's talk about what we can do to make this government work for We the People. #AnneForKansas\" ([source](https://bsky.app/profile/anneforkansas.bsky.social/post/3mj3d3l447c2u)). On January 23, 2026, she wrote, \"Last year I traveled all across #KS & got to hear from so many of you. And next week we will be back on the road for the #afkRoundtableTour!\" ([source](https://bsky.app/profile/anneforkansas.bsky.social/post/3md47b33fx22v)).\n\nParelkar's public alignment network centers on county Democratic organizations, Kansas civic events, and campaign-controlled media. She tagged the Miami County Democratic Party account in an April 6, 2026 post: \"See you tonight, Miami County! 💙 Join us at the @miamicoksdems.org meeting or watch online at miamicoksdems.org\" ([source](https://bsky.app/profile/anneforkansas.bsky.social/post/3miu5xsa5ik22)). She also posted appearances with the Riley County Democratic Party ([source](https://bsky.app/profile/anneforkansas.bsky.social/post/3mg6vmtz4ek2h)), Saline County Democratic Women, Kansas House candidate Cheri Koochel ([source](https://bsky.app/profile/anneforkansas.bsky.social/post/3md22ycezhc2o)), the Kansas Democratic Party candidate forum ([source](https://bsky.app/profile/anneforkansas.bsky.social/post/3m6ftcfo33o2t)), and Women for Kansas in Lawrence, where she said she gave a presentation on immigration law ([source](https://bsky.app/profile/anneforkansas.bsky.social/post/3mf37k7cpxc25)). The captured feed does not show her reposting or tagging Democratic U.S. Senate primary opponents by name.\n\nAudience response on Parelkar's measurable Bluesky feed is small and concentrated around party independence, health care, and campaign-media clips. Her highest-engagement Parelkar-authored Bluesky post in the captured set was a June 24, 2025 post with 6 likes, 1 repost, 1 reply, and 0 quotes as of May 11, 2026: \"Pro Tip: You owe loyalty to no political party or political figure. Not now. Not ever. If your party demands your loyalty, it is antithetical to the values of the USA. We the People, not We the Party, not We the Politicians, not We the Billionaires, not We the Corporations. WE THE PEOPLE.\" ([source](https://bsky.app/profile/anneforkansas.bsky.social/post/3lscxyycowc2a)). Her most-reposted captured post was a November 17, 2025 health-care post with 2 likes, 4 reposts, 0 replies, and 0 quotes as of May 11, 2026: \"Don't let Roger Marshall fool you... As a doctor, he knows exactly how the loss of ACA subsidized healthcare will harm Kansas families. He just doesn't care. #healthcare #shutdown #anneforkansas\" ([source](https://bsky.app/profile/anneforkansas.bsky.social/post/3m5uak52jlk2s)).\n\nOn national and foreign-policy questions, Parelkar posts less often than she posts about campaign events and public access, but the captured feed includes immigration enforcement, voting, Russia, Iran, Gaza, federal labor policy, and the government shutdown. On March 1, 2026, she wrote, \"Politicians fight and we the people pay the price. #Trump #Iran\" ([source](https://bsky.app/profile/anneforkansas.bsky.social/post/3mfxk5laymk2i)). On November 29, 2025, she posted, \"Today is the International Day of Solidarity with the Palestinian People. No child should be bombed, starved, or treated as collateral. Not once, not ever.\" ([source](https://bsky.app/profile/anneforkansas.bsky.social/post/3m6rvxtlpms2g)). Her immigration-law posts include a February 17, 2026 note that she joined Women for Kansas to give \"a presentation on #immigration law\" ([source](https://bsky.app/profile/anneforkansas.bsky.social/post/3mf37k7cpxc25)) and an April 3, 2025 post linking Brennan Center material on the Alien Enemies Act ([source](https://bsky.app/profile/anneforkansas.bsky.social/post/3llwcbhwmps2s)).\n\nFor Kansas-specific policy, Parelkar's feed combines statewide stops with issue planks on agriculture, health care, public schools, local communities, and worker protections. On March 25, 2026, she posted, \"Happy #NationalAgDay, everyone. I hear politicians talk a lot about supporting farmers. I say, enough talk. We need action. It's time to break the corporate stranglehold on agriculture and put power back in the hands of family farms.\" ([source](https://bsky.app/profile/anneforkansas.bsky.social/post/3mhtzhs7hyk2c)). Her campaign website's issue page says, \"In Washington, Anne will fight for parity pricing, cooperative strength, and a fair marketplace that rewards the people who feed our nation\" ([source](https://www.anneforkansas.com/issues)). The campaign's health-care page says, \"Guarantee Medicare for all children as the first incremental step toward a universal system that puts families ahead of insurance company profits\" ([source](https://www.anneforkansas.com/healthcare)), and a campaign newsroom post about a statewide listening tour quoted her saying, \"I’m not showing up with answers. I’m showing up with questions\" ([source](https://www.anneforkansas.com/newsroom/anne-parelkar-begins-listening-tour-across-kansas)).\n\nAcross the captured period the feed contains no standalone posts centered on gun policy, Fort Riley, or water policy including the Ogallala Aquifer. The captured Bluesky feed contains one agriculture post and a linked campaign agriculture plank, but no detailed Farm Bill post. Veterans appear in a Veterans Day post, \"Our Veterans served us selflessly. Now it's our turn to serve them\" ([source](https://bsky.app/profile/anneforkansas.bsky.social/post/3m5efumlyih2b)), but the captured feed contains no detailed post about veterans' health care, military housing, or base operations. Parelkar's issue pages address public education, environmental cleanup, local media, health care, immigration, labor, and government reform ([source](https://www.anneforkansas.com/issues)).\n\nParelkar's platform footprint is broader than the portion that was measurable in this harvest. Her campaign website links official Facebook, Instagram, Bluesky, TikTok, and YouTube accounts ([source](https://www.anneforkansas.com/)); Bluesky is the only account in that set that yielded public post counts and engagement through a logged-out API capture. The Bluesky profile listed 106 followers, 35 follows, and 126 posts as of May 11, 2026 ([source](https://bsky.app/profile/anneforkansas.bsky.social)). The captured pass found no campaign X account, no Truth Social account, no Gab account, no Gettr account, no candidate-controlled Reddit account, and no confirmed official campaign Substack. A LinkedIn profile exists in the candidate source file, but no public activity was harvested from LinkedIn.\n\n**Methodology:** Date range covered: February 25, 2025 to April 23, 2026. Platforms surveyed: campaign website, Bluesky, Facebook, Instagram, YouTube, TikTok, LinkedIn, X / Twitter, Truth Social, Gab, Gettr, Substack, and Reddit; 51 cataloged Bluesky originals, approximately 3 reposted/external Bluesky records, and 22 campaign-site/news/local records examined.\n\n*We report patterns; we do not interpret intent.*",
  "whereTheyWorship": "Public sources do not identify a current church affiliation.\n\nParelkar has spoken publicly about being raised Presbyterian in Arkansas, but the source material does not identify a current Kansas congregation.",
  "campaignFinance": {
    "totalRaised": "$16,982.00 (FEC coverage: 03/03/2025 to 12/31/2025)",
    "narrative": "Federal filings in the source material show a small campaign. Through December 31, 2025, her committee reported $16,982 in receipts, $16,478.89 in disbursements, and $503.11 cash on hand, including $4,500 in candidate loans. That is enough to show a real campaign structure, but it leaves her far behind the better-funded statewide contenders.",
    "donors": [
      {
        "name": "Itemized individual contributions",
        "amount": "$8,876.00"
      },
      {
        "name": "Unitemized individual contributions",
        "amount": "$3,606.00"
      },
      {
        "name": "Loans made by candidate",
        "amount": "$4,500.00"
      }
    ],
    "undisclosed": "The FEC summary totals and candidate-loan figure are public, but a full donor-by-donor transaction table is not summarized here.",
    "reportingPeriod": "through 2025-12-31",
    "source": "FEC candidate overview S6KS00239 / committee C00913293"
  },
  "socialResearchNote": "Social research is included as observed public behavior, not as a proxy for belief. Platforms/sources checked: Campaign website, Bluesky, Facebook, Instagram, YouTube, TikTok, LinkedIn, X, Truth Social, Gab, Gettr, Substack, Reddit. Harvest range: 2025-02-25 through 2026-04-23.",
  "sources": [
    {
      "id": "s-1",
      "tier": "social",
      "url": "https://bsky.app/profile/anneforkansas.bsky.social",
      "title": "@anneforkansas.bsky.social",
      "publisher": "Bsky",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Anne Parelkar."
      ]
    },
    {
      "id": "s-2",
      "tier": "social",
      "url": "https://www.facebook.com/AnneForKansas/",
      "title": "AnneForKansas",
      "publisher": "Facebook",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Anne Parelkar."
      ]
    },
    {
      "id": "s-3",
      "tier": "social",
      "url": "http://instagram.com/anneforkansas",
      "title": "@anneforkansas",
      "publisher": "Instagram",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Anne Parelkar."
      ]
    },
    {
      "id": "s-4",
      "tier": "social",
      "url": "https://www.youtube.com/@AnneForKansas",
      "title": "@AnneForKansas",
      "publisher": "Youtube",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Anne Parelkar."
      ]
    },
    {
      "id": "s-10",
      "tier": "social",
      "url": "https://bsky.app/profile/anneforkansas.bsky.social/post/3mg6vmtz4ek2h",
      "title": "source",
      "publisher": "Bsky",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Anne Parelkar.",
        "Observed public online activity mapped to Immigration / Border."
      ]
    },
    {
      "id": "s-16",
      "tier": "social",
      "url": "https://bsky.app/profile/anneforkansas.bsky.social/post/3mfxk5laymk2i",
      "title": "source",
      "publisher": "Bsky",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Anne Parelkar.",
        "Observed public online activity mapped to Marijuana / Drug Policy."
      ]
    },
    {
      "id": "s-19",
      "tier": "social",
      "url": "https://bsky.app/profile/anneforkansas.bsky.social/post/3mhtzhs7hyk2c",
      "title": "source",
      "publisher": "Bsky",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Anne Parelkar.",
        "Observed public online activity mapped to School Choice / Parental Rights in Education."
      ]
    },
    {
      "id": "s-20",
      "tier": "secondary",
      "url": "https://www.anneforkansas.com/issues",
      "title": "source",
      "publisher": "Anneforkansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Anne Parelkar."
      ]
    },
    {
      "id": "s-21",
      "tier": "secondary",
      "url": "https://www.anneforkansas.com/healthcare",
      "title": "source",
      "publisher": "Anneforkansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Anne Parelkar."
      ]
    },
    {
      "id": "s-22",
      "tier": "secondary",
      "url": "https://www.anneforkansas.com/newsroom/anne-parelkar-begins-listening-tour-across-kansas",
      "title": "source",
      "publisher": "Anneforkansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Anne Parelkar."
      ]
    },
    {
      "id": "s-23",
      "tier": "social",
      "url": "https://bsky.app/profile/anneforkansas.bsky.social/post/3m5efumlyih2b",
      "title": "source",
      "publisher": "Bsky",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Anne Parelkar.",
        "Observed public online activity mapped to Guns / Second Amendment."
      ]
    },
    {
      "id": "s-24",
      "tier": "secondary",
      "url": "https://www.anneforkansas.com/",
      "title": "source",
      "publisher": "Anneforkansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Anne Parelkar."
      ]
    },
    {
      "id": "s-25",
      "tier": "secondary",
      "url": "https://1350kman.com/2026/03/within-reason-with-mike-matson-anne-parelkar-overland-park-immigration-attorney/",
      "title": "Within Reason with Mike Matson (News Radio KMAN, March 2026)",
      "publisher": "1350kman",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Anne Parelkar."
      ]
    },
    {
      "id": "s-28",
      "tier": "secondary",
      "url": "https://kansasreflector.com/2025/08/25/democratic-immigration-lawyer-wants-to-fix-broken-system-with-run-for-u-s-senate-in-kansas/",
      "title": "Anne Parelkar Announcement (Aug 25, 2025)",
      "publisher": "Kansasreflector",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Anne Parelkar.",
        "Observed public online activity mapped to Immigration / Border."
      ]
    },
    {
      "id": "s-71",
      "tier": "secondary",
      "url": "https://www.anneforkansas.com/newsroom/republicans-shut-down-the-government-and-kansas-families-will-pay",
      "title": "Anneforkansas",
      "publisher": "Anneforkansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Anne Parelkar."
      ]
    },
    {
      "id": "s-74",
      "tier": "secondary",
      "url": "https://www.anneforkansas.com/newsroom/she-arrived-in-overland-park-undocumented-it-took-her-22-years-to-get-her-citizenship",
      "title": "Anneforkansas",
      "publisher": "Anneforkansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Anne Parelkar."
      ]
    },
    {
      "id": "s-75",
      "tier": "secondary",
      "url": "https://www.anneforkansas.com/newsroom/statement-on-the-role-of-public-service",
      "title": "Anneforkansas",
      "publisher": "Anneforkansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Anne Parelkar."
      ]
    },
    {
      "id": "s-77",
      "tier": "secondary",
      "url": "https://www.anneforkansas.com/immigration",
      "title": "Anneforkansas",
      "publisher": "Anneforkansas",
      "accessed": "2026-05-19",
      "claimsAnchored": [
        "Candidate-specific source extracted for Anne Parelkar."
      ]
    }
  ]
};

if (process.env.NODE_ENV !== "production") {
  const result = validateCandidateV2(ANNE_PARELKAR_V2);
  if (!result.ok) {
    // eslint-disable-next-line no-console
    console.error(
      "[anne-parelkar.ts] validateCandidateV2 FAILED:\n" +
        result.errors.join("\n"),
    );
  }
}
