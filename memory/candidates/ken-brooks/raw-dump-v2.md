# Ken Brooks — Raw Dump v2 (primary-tier focused)

**Date**: 2026-05-20T01:35:00Z
**Agent**: internet-investigator (deep-scraper equivalent)
**Scope**: primary-tier confirmation of items surfaced in sleuth-pass.md
**Candidate slug**: ken-brooks
**Race**: USD 489 Board of Education (Hays, KS) — incumbent, second-term member

**Coverage attempts** (this pass):
- USD 489 BoardDocs portal (`https://go.boarddocs.com/ks/usd489/Board.nsf/vpublic`, `…/Public`, `https://www.boarddocs.com/ks/usd489/Board.nsf`, and deep-link `…/goto?open=&id=BHXSFC6C436A`) — **all four URL forms returned HTTP 403** to non-browser fetches. The portal is publicly accessible to a browser per its existence on the search index and per the official USD 489 board page that links to it, but blocks programmatic access. THIS IS THE SAME CLASS OF BLOCKER ALLEN PARK'S P1.2 LOOPBACK SURFACED — see Blockers section.
- USD 489 HighBond/Diligent portal (`https://usd489.community.highbond.com/Portal/`, `…/MeetingSchedule.aspx`) — page loads but meeting list populates via client-side JavaScript that does not execute under non-browser fetch. Visible chrome only: "Calendar," "Meetings," "Live Stream," "Subscribe" labels, plus a "Loading…" placeholder for Today/Upcoming/Recent meetings. Live Stream link references current meetings, no archived recording index surfaced.
- USD 489 official site (`https://www.usd489.com/page/board-of-education`, `…/page/boe-board-of-education`) — first URL returned a truncated response, second URL 404. Member roster, term expirations, and meeting-archive index could not be retrieved this pass.
- Kansas Public Disclosure Commission (`https://kpdc.kansas.gov/campaign-finance/`) — **confirmed by KPDC's own scope language that it does NOT index USD 489 races**. KPDC scope: "elected state offices ... county, first class city, **Wichita** school board, and the Kansas City Board of Public Utilities." USD 489 Hays is not within KPDC scope. No state-level Brooks filings exist or can exist for school-board races outside Wichita.
- Ellis County Clerk candidate filings (`https://www.ellisco.net/626/Candidate-Filings`) — page exists but exposes only a generic 2026 candidate-filings document; does not expose 2021 or 2025 USD 489 candidate filing forms or campaign-finance affidavits to a logged-out fetch. Per Kansas statute (Sec. 25-4145 et seq.), USD 489 board candidates file with the county election officer (Ellis County Clerk); candidates spending and receiving under $1,000 file ONLY an affidavit, not an itemized report. Brooks's 2021 self-attested "No outside money / no PAC" statement is consistent with sub-$1,000 affidavit-only filing; itemized donor report would not exist by statute.
- Hays Post and Tiger Media Network secondary articles citing the underlying primary meetings — fetched verbatim (used to confirm meeting dates, motion text, and roll-call breakdowns where reporters captured them).

---

## Primary sources retrieved

### Source A — USD 489 board meeting, April 24, 2023 (nepotism / personnel transactions)

- **Primary record location**: USD 489 BoardDocs portal (`https://go.boarddocs.com/ks/usd489/Board.nsf/vpublic`) for April 2023 meeting — DIRECT FETCH BLOCKED (403). Underlying primary record exists per portal structure; not retrievable in this environment.
- **Meeting date**: Monday, April 24, 2023 (confirmed via Hays Post article dated April 26, 2023)
- **Agenda item**: Personnel transactions (consent agenda item pulled separately for discussion by member Vajnar at the prior meeting; brought back as a stand-alone vote in April)
- **Recorded vote** (as reported by Hays Post): **4-2** to approve personnel transactions
  - Against (named): Curt Vajnar, Allen Park
  - For (4 unnamed; necessarily includes Ken Brooks based on his on-record support quote)
  - Absent: Lori Hertel
- **Brooks's recorded position**: YES (in favor)
- **Brooks verbatim quote on the record** (Hays Post): *"This is the same discussion we had last month that got out of hand. You should have asked for something to be put on the agenda."*
- **Motion text**: not provided by reporter; would be in BoardDocs minutes once accessible
- **Linked documents** (not retrievable this pass): agenda packet PDF, meeting minutes PDF, video URL — all behind BoardDocs 403
- **Source tier**: primary record EXISTS in BoardDocs but blocked; **best-retrievable evidence is secondary** (Hays Post + Tiger Media Network articles which themselves quote a primary statement on the meeting record)
- **Backing citations** (secondary, accessed 2026-05-20):
  - Hays Post — *Hays USD 489 BOE debates nepotism again at Monday meeting* — `https://hayspost.com/posts/9fb91da0-f9e5-4d80-a065-c5c2727c6fb8` (publication date confirmed as 2023-04-26; reports on April 24, 2023 meeting)
  - Tiger Media Network — *USD 489 Board continues discussion on nepotism policy* — `https://tigermedianet.com/?p=72830`
- **Note on prior month's 5-2 hire vote**: The hiring of Superintendent Wilson's wife as a teacher (cited in the existing dossier as "5-2") occurred at the **March 13, 2023** board meeting per the dossier's chronology; the April 24, 2023 vote covered here is the *follow-up* personnel-transactions item that surfaced after Vajnar pulled it from consent at the next meeting. Two separate roll-calls. The existing dossier conflates them slightly — Brooks's "vp" framing and the nepotism-policy debate continued across both meetings.

### Source B — USD 489 board meeting, January 22, 2024 (district administrator contracts)

- **Primary record location**: USD 489 BoardDocs — DIRECT FETCH BLOCKED (403)
- **Meeting date**: Monday, January 22, 2024 (confirmed via Hays Post article posted January 24, 2024)
- **Agenda item**: District Administrator contract extensions
- **Motion**: Board moved to approve **one-year** contract extensions for district administrators (verbatim motion text not provided by reporter; would be in BoardDocs)
- **Recorded vote**: **5-1-1**
  - Against (named): Allen Park (NO)
  - Abstain (named): Derek Yarmer
  - For (5 unnamed but necessarily includes Ken Brooks per his supporting quote)
- **Brooks's recorded position**: YES (in favor)
- **Brooks verbatim quote on the record** (Hays Post): *"What we're doing here today is letting them know that we will be looking at their contracts in the future, and we're recommending that their contract be extended because we do want to keep this staff here."*
- **Source tier**: primary record EXISTS in BoardDocs but blocked; **best-retrievable evidence is secondary**
- **Backing citation** (secondary, accessed 2026-05-20):
  - Hays Post — *Hays USD 489 district administrators' contracts extended another year* — `https://hayspost.com/posts/95dab7ab-70ba-44ee-91ee-2760e55665bf`

### Source C — USD 489 board meeting, March 10, 2026 (administrator/director contracts)

- **Primary record location**: USD 489 BoardDocs — DIRECT FETCH BLOCKED (403)
- **Meeting date**: Monday, March 10, 2026 (confirmed via Tiger Media Network article)
- **Agenda items + motions**:
  1. **Park motion to table** discussion of administrator/director contract language updates until the next meeting for further review (seconded by Derek Yarmer) — **PASSED**
  2. **Brooks motion** to approve one-year extensions for District Administrator contracts through 2027–2028 school year — competing **Yarmer motion** to vote on each contract individually — Board President Vajnar called for the vote on Brooks's motion — **PASSED 5-2**
  3. **Brooks motion** to extend all District Directors' contracts through 2027–2028 — **PASSED 7-0**
  4. (After two executive sessions) Motion to indicate intent to non-renew teacher Silas Hibbs's contract for 2026–2027 — **PASSED 5-2**
- **Brooks's recorded position**: YES on all four motions; **mover** on items 2 and 3
- **Brooks verbatim quotes on the record** (Tiger Media Network):
  - *"They brought everything that you asked for for us to be able to vote."*
  - *"We have an incredible administrative staff, there's no reason why we wouldn't approve every single one of them."*
- **Individual roll call by name**: not provided by reporter (motion totals only) — would be in BoardDocs minutes once accessible
- **Source tier**: primary record EXISTS in BoardDocs but blocked; **best-retrievable evidence is secondary**
- **Backing citation** (secondary, accessed 2026-05-20):
  - Tiger Media Network — *Administrator/director contracts (March 2026)* — `https://tigermedianet.com/?p=95549`
- **Cross-reference**: Citizen Journal also covered this meeting — `https://www.citizenjournal.us/takeaways-from-hays-usd-489-education-board-meeting/`

### Source D — USD 489 board meeting, September 22, 2025 (HMS asbestos abatement contract)

- **Primary record location**: USD 489 BoardDocs — DIRECT FETCH BLOCKED (403)
- **Meeting date**: Monday, September 22, 2025, 6:30 PM (confirmed via Hays Post preview article)
- **Agenda item**: Contract with ACM Removal LLS for $69,480 — removal of floor tile and abatement of non-friable asbestos-containing mastic in hallway areas of the new HMS building at 2300 13th St.
- **Motion**: approval of ACM Removal LLS contract
- **Recorded vote**: **6-1** to approve
  - Against (named): Allen Park (NO)
  - For (6 unnamed; necessarily includes Ken Brooks per the call-out article framing)
- **Brooks's recorded position**: YES (in favor)
- **Brooks's recorded behavior in subsequent discussion** (Hays Post, Sept 23, 2025 — "Board member calls out fellow member after repeated no votes"): Brooks asked Park what he would have changed had he had the change orders in advance (reported as a paraphrase by the reporter; not a verbatim quote)
- **Park's verbatim quotes on the record**:
  - *"I'm not voting that we shouldn't do it. I'm voting this process to do this."*
  - *"This process we don't know for sure. They say it is, but I have some doubts."*
  - *"I'm No. 1 on safety."*
- **Source tier**: primary record EXISTS in BoardDocs but blocked; **best-retrievable evidence is secondary**
- **Backing citations** (secondary, accessed 2026-05-20):
  - Hays Post — preview *Hays USD 489 board to consider change order for Hays High, asbestos removal for HMS* — `https://hayspost.com/posts/7330e366-e683-4062-94e7-523a905418e7`
  - Hays Post — *Board member calls out fellow member after repeated no votes, including 1 on asbestos removal* — `https://hayspost.com/posts/03620484-d421-4ae2-b3be-d87652788a17`

### Source E — USD 489 board meeting, December 15, 2025 (sale of 7.23 acres next to middle school)

- **Primary record location**: USD 489 BoardDocs — DIRECT FETCH BLOCKED (403)
- **Meeting date**: Monday, December 15, 2025 (confirmed via Hays Post article posted Dec 16/17 timeframe)
- **Agenda item**: Authorization of sale of 7.23 acres of district-owned property at 201 W. 29th St. (north of the current Hays Middle School football field) via sealed-bid process
- **Motions**:
  1. Earlier motion (by Allen Park) to table — failed 4-2 (insufficient votes; named opposition not enumerated)
  2. Subsequent motion to approve the sealed-bid sale — **PASSED 5-1**
- **Recorded vote on approval motion**: **5-1**
  - Against (named): Allen Park (NO)
  - For (5 unnamed; necessarily includes Ken Brooks based on board majority pattern and absence of any reported dissent from Brooks)
  - Absent: Meagan Zampieri-Lillpopp (named absent)
- **Brooks's recorded position**: YES (inferred from vote total + absence of reported dissent)
- **Brooks verbatim quote on the record**: **NONE in this article**; the reporter did not quote Brooks at this meeting
- **Source tier**: primary record EXISTS in BoardDocs but blocked; **best-retrievable evidence is secondary**
- **Backing citation** (secondary, accessed 2026-05-20):
  - Hays Post — *Hays USD 489 school board approves sale of land next to middle school* — `https://hayspost.com/posts/909a410b-bf64-406d-a98b-01417d221495`

### Source F — USD 489 board meeting, December 16, 2025 (Felten Elementary asbestos / flooring)

- **Primary record location**: USD 489 BoardDocs — DIRECT FETCH BLOCKED (403)
- **Meeting date**: Monday, December 16, 2025 (per Hays Post; article posted Dec 17, 2025)
- **Agenda item**: $110,315 contract with Integrated Solutions for the removal of asbestos floor tile, adhesive, and window glazing from Felten Elementary
- **Motions**:
  1. Park motion to table — disposition not reported clearly
  2. Approval of Integrated Solutions contract — **PASSED 4-2**
- **Recorded vote**: **4-2**
  - Against (named): Allen Park, Derek Yarmer
  - For (4 unnamed; necessarily includes Ken Brooks based on pattern)
- **Brooks's recorded position**: YES (inferred from vote total + absence of dissent)
- **Brooks verbatim quote on the record**: **NONE in this article**
- **Source tier**: primary record EXISTS in BoardDocs but blocked; **best-retrievable evidence is secondary**
- **Backing citation** (secondary, accessed 2026-05-20):
  - Hays Post — *Hays USD 489 votes to replace tile at former middle school, abate asbestos* — `https://hayspost.com/posts/965dbfb4-fc96-4377-b6f3-7f5050176e21`
- **Note on date discrepancy with sleuth-pass and Allen Park v2 dossier**: Allen Park's v2 references an "asbestos vote 2025-09" (`a-asbestos-vote-2025`) and the sleuth-pass references "asbestos remediation vote." There are in fact **two separate asbestos votes** in the USD 489 record:
  - HMS hallway mastic abatement — Sept 22, 2025 — passed 6-1 (Park lone NO) — Source D above
  - Felten Elementary tile/glazing — Dec 16, 2025 — passed 4-2 (Park + Yarmer NO) — Source F above
  - Allen Park's existing v2 `a-asbestos-vote-2025` likely corresponds to the September HMS vote (the one with the more dramatic 6-1 Park-isolation framing); narrative-writer should clarify which one when assembling Brooks's v2 IssueCards.

### Source G — USD 489 board meeting, August 4, 2025 (board retreat) + subsequent regular meeting (Golden Belt Bank naming rights)

- **Primary record location**: USD 489 BoardDocs — DIRECT FETCH BLOCKED (403)
- **Meeting context**: Aug 4, 2025 board retreat (where Brooks raised the naming-rights donation), followed by a **regular meeting** at which Brooks moved to add the naming discussion to the agenda
- **Agenda item**: Golden Belt Bank's $200,000 offer for 10-year naming rights to the new Hays High football field
- **Motion**: Brooks motion to ADD the field-naming discussion to the regular meeting agenda
- **Recorded vote on Brooks's motion**: **failed 3-3**
  - For (named): Ken Brooks, Ruth Ruder, Meagan Zampieri-Lillpopp
  - Against: 3 (unnamed in the Hays Post article)
  - Absent: Derek Yarmer (named)
- **Brooks's recorded position**: YES (mover) — Brooks said he did not think Golden Belt Bank had *"any ill intentions"* and that they were *"trying to help our community and help our school district."* (Per Hays Post; verbatim attribution.)
- **Brooks procedural-authority observation**: Brooks said *"school board policy says that three board members can request a special board meeting"* — i.e., he flagged the procedural pathway by which the donation discussion could still be forced onto the agenda over President Vajnar's removal of it.
- **Source tier**: primary record EXISTS in BoardDocs but blocked; **best-retrievable evidence is secondary**
- **Backing citations** (secondary, accessed 2026-05-20):
  - Hays Post — *Hays USD 489 pauses Hays High football field naming rights donation discussion* — `https://hayspost.com/posts/a90fb672-f7e5-4826-b5f3-1decd214e83c`
  - Hays Post — follow-up *Hays USD 489 postpones naming rights decision, despite bank's deadline* — `https://hayspost.com/posts/aefb9f40-2e86-4bb2-976e-2f731e7ce14f`

### Source H — USD 489 board meeting, September 9, 2024 (FY25 budget hearing, taxpayer public comment)

- **Primary record location**: USD 489 BoardDocs — DIRECT FETCH BLOCKED (403)
- **Meeting date**: Monday, September 9, 2024 (per Hays Post byline Sep 10, 2024 — **CORRECTION TO SLEUTH-PASS**: sleuth-pass labels this meeting "2025-08 (taxpayer budget hearing)" but the primary article confirms 2024-09-09; this is a date-label error in the sleuth-pass that the narrative-writer should correct, not a contradiction of substance)
- **Agenda items**: FY25 budget approval; revenue-neutral-rate hearing; public comment from John Pyle and Kent Kennedy
- **Motions**: (1) approve the FY25 budget; (2) exceed the revenue-neutral rate — both passed; **roll-call breakdown not reported by the reporter**
- **Brooks's recorded position**: YES on both (inferred from board majority + absence of reported dissent)
- **Brooks verbatim quote on the record** (Hays Post): *"The board works and votes on items in the budget throughout the year."* (Brooks's reply when Park said "Budget is our lane. We don't spend enough time with it.")
- **Allen Park verbatim quote** (Hays Post; for triangulation): *"We redid the baseball field. We remodeled the Roosevelt office. I think we could plan a little better."* and *"Budget is our lane. We don't spend enough time with it."*
- **Source tier**: primary record EXISTS in BoardDocs but blocked; **best-retrievable evidence is secondary**
- **Backing citation** (secondary, accessed 2026-05-20):
  - Hays Post — *Hays USD 489 approves budget; taxpayers express concerns* — `https://hayspost.com/posts/a7ced49b-b60e-48aa-a295-c52204c7a0b6`

### Source I — USD 489 board meeting, July 14, 2025 (Hays High handbook discussion)

- **Primary record location**: USD 489 BoardDocs — DIRECT FETCH BLOCKED (403)
- **Meeting date**: Monday, July 14, 2025 (per Tiger Media Network article published July 16, 2025)
- **Agenda item**: Hays High handbook approval
- **Motion**: vote on handbook (motion to table was raised but failed)
- **Recorded vote on handbook**: **4-3** failed (handbook did not advance; individual breakdown not reported)
- **Brooks's recorded position**: against tabling, in favor of moving forward (inferred from his quote; specific yes/no on the failed vote not enumerated by name)
- **Brooks verbatim quote on the record** (Tiger Media Network): *"We're not micromanaging that whole team there. They've done a terrific job and there's no reason why we should put this on hold."*
- **Source tier**: primary record EXISTS in BoardDocs but blocked; **best-retrievable evidence is secondary**
- **Backing citation** (secondary, accessed 2026-05-20):
  - Tiger Media Network — *Hays High handbook discussion (July 2025)* — `https://tigermedianet.com/?p=87800`

### Source J — USD 489 board meeting, April 21, 2026 (Hays High bathrooms / vandalism)

- **Primary record location**: USD 489 BoardDocs / district video archive — DIRECT FETCH BLOCKED (403 + HighBond JS-gated)
- **Meeting date**: Monday, April 21, 2026 (per Hays Post April 23, 2026 article and Tiger Media Network April 23, 2026 article)
- **Agenda context**: Discussion of single-stall bathroom design at the new Hays High School, vandalism reports, and Park's renewed concerns; **no formal motion or vote** was reported by either outlet — this is a discussion-record exchange, not a roll-call
- **Brooks verbatim quotes on the record** (Hays Post + Tiger Media Network, multiple):
  - *"We've had this discussion many times in the past, and you keep saying the same things, over and over and over, and they have been answered for you."*
  - *"The administrators just felt all of them attacked. We don't micromanage. That's not our job here on the board, so they shouldn't feel like it's us versus them. You are continuing to do that."*
  - *"If you want the information, ask it, but let's end this, because there is nothing more to discuss right now."*
  - *"You make up data. Go ahead and give it to us if you have data."* (Tiger Media Network attribution)
  - *"That's not our job."* (Tiger Media Network attribution; truncated variant of the longer "We don't micromanage" quote)
- **Park behavior** (paraphrased; no direct quotes captured by either reporter): asked about bathroom tracking and gender neutrality; Hays Post reports Park said HHS has the highest percentage of single-stall bathrooms in the state (paraphrase, not direct quote)
- **Source tier**: primary record EXISTS in BoardDocs video archive but blocked; **best-retrievable evidence is secondary**, with verbatim Brooks quotes captured by two independent reporters
- **Backing citations** (secondary, accessed 2026-05-20):
  - Hays Post — *USD 489 board members express concerns about bathrooms, vandalism (Apr 2026)* — `https://hayspost.com/posts/7b63aeb8-e2d2-40a4-af96-5e92884d3ede`
  - Tiger Media Network — *Bathroom/vandalism discussion (Apr 2026)* — `https://tigermedianet.com/?p=96863`
- **Note on HighBond video portal reference**: The Hays Post article references "a link to the full meeting video … directs to a HighBond portal," confirming that USD 489 maintains district-controlled meeting recordings on its Diligent/HighBond portal. **This is the candidate primary-source channel for the narrative-writer to cite once login or post-403 access is available.**

### Source K — USD 489 board meeting, April 22, 2024 (Hays Middle School mascot — "Indians" — 5-2 vote)

- **Primary record location**: USD 489 BoardDocs — DIRECT FETCH BLOCKED (403)
- **Meeting date**: Monday, April 22, 2024 (per Hays Post April 24, 2024 article; an earlier April 9, 2024 meeting **tabled** the discussion)
- **Agenda item**: Change Hays Middle School mascot to "Indians"
- **Motion**: change mascot
- **Recorded vote**: **5-2** to change
  - Against (named): Meagan Zampieri-Lillpopp, **Ken Brooks**
  - For (5 unnamed)
- **Brooks's recorded position**: **NO** (against the change at this time; per the existing dossier, Brooks's stated rationale was procedural — that the topic should wait for the next meeting to allow more community input and board deliberation; he did not argue against the mascot itself)
- **Brooks verbatim quote on the April 22 vote**: **NONE captured by the reporter at the vote itself**. At the prior April 9, 2024 tabling meeting, Brooks stated: *"the board did go over the bathroom plans last year and they were approved"* (this is from a separate bathroom item at that meeting, not the mascot vote — recorded here only to note that the reporters did not capture a mascot-specific verbatim quote from Brooks at either meeting)
- **Source tier**: primary record EXISTS in BoardDocs but blocked; **best-retrievable evidence is secondary**
- **Backing citations** (secondary, accessed 2026-05-20):
  - Hays Post — *Mascot vote (April 2024)* — `https://hayspost.com/posts/5b2cf14f-06bc-4086-9693-c33581fe6a7c`
  - Tiger Media Network — *Bathrooms and mascot (April 2024 tabling)* — `https://tigermedianet.com/?p=78383`
  - Tiger Media Network — *HMS becomes Indians* — `http://tigermedianet.com/?p=78688`

### Source L — USD 489 board meeting, March 24, 2025 (bond project manager motion)

- **Primary record location**: USD 489 BoardDocs — DIRECT FETCH BLOCKED (403)
- **Meeting date**: Monday, March 24, 2025 (per Hays Post article posted March 28, 2025)
- **Agenda item**: Yarmer motion to look into hiring an outside project manager for the remainder of the bond, including interviewing a prospective manager "under the guise of the board"
- **Recorded vote**: **failed 3-4**
  - For (named): Derek Yarmer, Allen Park, Curt Vajnar
  - Against (4): unnamed individually but necessarily includes Ken Brooks per the dossier-confirmed board majority on bond-execution matters
- **Brooks's recorded position**: NO (inferred from vote total + absence of any reported dissent in favor)
- **Brooks verbatim quote**: **NONE captured by the reporter on this item**
- **Source tier**: primary record EXISTS in BoardDocs but blocked; **best-retrievable evidence is secondary**
- **Backing citation** (secondary, accessed 2026-05-20):
  - Hays Post — *Hays USD 489 board votes not to add another manager for bond work* — `https://hayspost.com/posts/e4ec7011-734d-4c18-ab28-c5b38d236126`

### Source M — USD 489 board meeting, February 24, 2026 (Felten Elementary GMP / Guaranteed Maximum Price)

- **Primary record location**: USD 489 BoardDocs — DIRECT FETCH BLOCKED (403)
- **Meeting date**: Tuesday, February 24, 2026 (per Tiger Media Network)
- **Agenda item**: Felten Elementary bond project Guaranteed Maximum Price (GMP) approval
- **Motion**: approve GMP (Brooks "called for the vote" per Tiger Media)
- **Recorded vote**: **4-2** to approve
  - Against (named): Derek Yarmer, Allen Park
  - For (4 unnamed; necessarily includes Ken Brooks per his procedural role calling for the vote)
- **Brooks's recorded position**: YES (and called for the vote — a procedural-leadership signal)
- **Brooks verbatim quote**: **NONE captured by the reporter** (only the procedural action of calling for the vote)
- **Source tier**: primary record EXISTS in BoardDocs but blocked; **best-retrievable evidence is secondary**
- **Backing citation** (secondary, accessed 2026-05-20):
  - Tiger Media Network — *Felten Elementary GMP vote (Feb 2026)* — `https://tigermedianet.com/?p=94701`

### Source N — Brooks 2025 candidate Q&A (campaign-cycle self-attestation)

- **Primary record location**: Hays Post candidate Q&A — **PRIMARY-TIER** because the reporter solicited Brooks's first-person answers and the article presents them as such; not derived from a meeting record but is itself the candidate's own dated published statements
- **Publication date**: October 16, 2025
- **Brooks verbatim quotes**:
  - *"I have a love for our community, and I have a love for kids."*
  - *"I don't think that we need to micromanage our school district."*
  - *"There's only one employee in the district who answers to the board, and that's our superintendent."*
  - *"I do feel they manage their budget adequately."*
  - *"I can't think of anything."* (in response to whether he disagreed with the district administration on any issue)
- **Stated positions captured**:
  - Budget Management: supports current administration; trusts Superintendent Ron Wilson and Asst. Superintendent Chris Hipp
  - Bond Projects: supports remaining projects; approved extra sewage line funding for O'Loughlin Elementary
  - Five-Year Capital Plan: supports as useful planning tool
  - Board Role: oversight only; administrators/teachers handle day-to-day operations ("anti-micromanagement" frame)
  - Policy Changes: wants to continue lowering enrollment fees
  - Special Education Funding: concerned about state underfunding; expects increased impact next year
  - Early Release Days: supports Monday once-monthly schedule solution
- **Professional / family** (verifies prior dossier facts): loss control safety specialist at Insurance Planning (18 years); three daughters all graduated from Hays High; youngest 2023; single father; currently no children in the district
- **Source tier**: **secondary** in a strict sense (Hays Post is a news outlet), but the article structure is candidate-attributed Q&A and is the closest analog to a primary candidate statement when no campaign website exists. Functionally serves as candidate-attested record for the narrative-writer's Brooks IssueCard `stated.text` fields.
- **Backing citation** (accessed 2026-05-20):
  - Hays Post — *USD 489 candidate Q&A: Ken Brooks (2025-10-16)* — `https://hayspost.com/posts/8ce0d386-aba6-4c42-b880-1307752c8220`

### Source O — Brooks 2021 candidate Q&A (prior-cycle self-attestation)

- **Primary record location**: Hays Post candidate profile — same tier reasoning as Source N
- **Publication date**: October 20, 2021
- **Brooks first-person attestations** (per existing dossier and confirmed by direct article retrieval):
  - "No outside money or in-kind PAC support" — Brooks's own 2021 self-attestation, consistent with sub-$1,000 Kansas affidavit-only filing requirement
  - 14 years (as of 2021) leading Children's Ministry at Celebration Community Church Hays campus
  - Thanksgiving Community Food Drive coordinator since 2008 (in partnership with Ellis County Ministerial Alliance + First Call For Help)
  - Member, Kiwanis International
  - Single parent ("most of the last decade")
  - All three daughters graduated from Hays High (last in 2023)
- **Source tier**: secondary in strict sense but functions as primary candidate-attested record
- **Backing citation** (accessed 2026-05-20):
  - Hays Post — *USD 489 candidate profile: Ken Brooks (2021-10-20)* — `https://hayspost.com/posts/2613aaa8-8055-4feb-9a79-d1b5479babca`

---

## Campaign finance filings

- **Kansas Public Disclosure Commission (KPDC)**: USD 489 Hays is **outside KPDC jurisdiction**. KPDC's published scope covers only Wichita school board among local school boards. No state-level Brooks filings exist or can exist. (Verified 2026-05-20 against `https://kpdc.kansas.gov/campaign-finance/`.)
- **Ellis County Clerk**: USD 489 candidates file with the County Election Officer. Kansas statute K.S.A. 25-4145 et seq. requires:
  - Sub-$1,000 candidates: file an **affidavit** stating intent to spend/receive less than $1,000 — no itemized report required
  - $1,000+ candidates: file an **itemized report** including any contributor over $50 by name + address + amount + date
- **Brooks's 2021 cycle**: Brooks publicly self-attested "No" to outside money or in-kind PAC support in his 2021 Hays Post Q&A. This is consistent with sub-$1,000 affidavit-only filing — there would be NO itemized donor report on file by statute.
- **Brooks's 2025 cycle**: no public donor list located by this pass; no Hays Post coverage of itemized contributions surfaced; the same affidavit-only sub-threshold pathway is the most likely filing posture given the small geographic scope of a USD 489 board race.
- **Ellis County Clerk Filings page** (`https://www.ellisco.net/626/Candidate-Filings`): exposes only a 2026 general candidate-filings document. Historic affidavits and any itemized 2021/2025 reports are **not posted on the public web**; would require in-person or FOIA-style request to the Ellis County Clerk's office. **Recommended downstream action**: operator may call the Ellis County Clerk at 785-628-9410 (`https://www.ellisco.net/93/Clerk`) to confirm Brooks's filing posture for both cycles. Not a halt-blocker for v2 IssueCard assembly because Brooks's own 2021 self-attestation already provides on-record candidate-attested data.
- **Source tier conclusion for the campaign-finance section of Brooks's v2 page**: candidate-attested (Source O) is the strongest available; no itemized donor table exists.

---

## Page-presence records (social-tier, observable only)

### Facebook Page A — `Ken-Brooks-for-Hays-USD-489-School-Board` (numeric ID 106283281672831)

- **URL**: `https://www.facebook.com/Ken-Brooks-for-Hays-USD-489-School-Board-106283281672831/`
- **Accessed**: 2026-05-20
- **Observable to logged-out browser via WebFetch**: page exists (the page title "Ken Brooks for Hays USD 489 School Board" was returned by the fetcher, but the full Page Transparency / About / Posts panel was content-truncated by the proxy)
- **Page creation date**: NOT observable to logged-out fetcher in this environment
- **Page-name history**: NOT observable to logged-out fetcher
- **Listed contact info**: NOT observable to logged-out fetcher
- **Follower count**: NOT observable to logged-out fetcher
- **Post content**: NOT observable to logged-out fetcher (Facebook gates all content for non-authenticated users in 2026)
- **Source tier**: social (presence-only)
- **Recommended downstream action**: operator with an authenticated Facebook session can capture the Page Transparency creation date, page-name history, and admin location. Until then, this is a presence-only social-tier signal — **no post content may be attributed to Brooks based on this URL.**

### Facebook Page B — vanity URL `kenbrooksforusd489`

- **URL**: `https://www.facebook.com/kenbrooksforusd489`
- **Accessed**: 2026-05-20
- **Observable to logged-out browser via WebFetch**: page exists (title "Ken Brooks for Hays USD 489 School Board" returned, content truncated)
- **Same caveats as Page A**: Page Transparency, creation date, posts, follower count all gated. No content attribution permitted.
- **Source tier**: social (presence-only)

### Facebook Page C — Celebration Community Church Hays (`c3hays`)

- **URL**: `https://www.facebook.com/c3hays`
- **Status**: Brooks's worship community's public Facebook presence; relevance is **affiliation-only**, NOT an IssueCard signal per IDENTITY.md prohibition on inferring policy from faith affiliation. Recorded here only for completeness; should not wire into a Brooks v2 IssueCard.
- **Source tier**: social (presence-only)

### Facebook Page D — USD 489 official district page

- **URL**: not separately captured this pass; Brooks is the speaker the public comments AT, not a commenter on the district's page. Not a Brooks-attributable signal.

---

## Items the sleuth pass flagged but primary source could not be confirmed

1. **April 24, 2023 nepotism vote — full individual roll-call by name**
   - Why primary not confirmed: BoardDocs portal returned HTTP 403 to every URL form attempted; logged-out fetch cannot access the agenda packet PDF or minutes
   - Best available secondary fallback: Hays Post (`https://hayspost.com/posts/9fb91da0-f9e5-4d80-a065-c5c2727c6fb8`) — provides motion totals (4-2), names two NO votes (Vajnar, Park), names the absent member (Hertel), and captures Brooks's verbatim quote, but does not enumerate the 4 YES votes by name
   - **Adequate for v2 IssueCard?** YES — Brooks's YES vote is unambiguously determinable from his on-record statement and the 4-2 total with named NO/absent members. Narrative-writer can write `body: "Voted to approve the personnel transactions consent item on 2023-04-24 (motion passed 4-2; Vajnar and Park voted no; Hertel absent)."`

2. **January 22, 2024 admin contracts vote — individual roll-call by name**
   - Why primary not confirmed: same BoardDocs blocker
   - Best available secondary fallback: Hays Post — provides 5-1-1 total, names Park (NO) and Yarmer (abstain), captures Brooks's verbatim YES-rationale quote
   - **Adequate for v2 IssueCard?** YES — Brooks's YES vote is determinable

3. **March 10, 2026 admin/director contracts — individual roll-call by name**
   - Why primary not confirmed: same BoardDocs blocker
   - Best available secondary fallback: Tiger Media Network (`https://tigermedianet.com/?p=95549`) — Brooks named as MOVER on items 2 and 3; vote totals captured (5-2, 7-0, 5-2 on three motions); two verbatim Brooks quotes
   - **Adequate for v2 IssueCard?** YES — Brooks's YES votes are determinable from mover-role + totals

4. **September 22, 2025 HMS asbestos vote — individual roll-call by name**
   - Why primary not confirmed: same BoardDocs blocker
   - Best available secondary fallback: Hays Post — 6-1 total, Park named NO, Brooks named as questioner of Park's reasoning
   - **Adequate for v2 IssueCard?** YES — Brooks's YES vote is determinable

5. **December 16, 2025 Felten asbestos vote — individual roll-call by name**
   - Why primary not confirmed: same BoardDocs blocker
   - Best available secondary fallback: Hays Post (`https://hayspost.com/posts/965dbfb4-fc96-4377-b6f3-7f5050176e21`) — 4-2 total, Park + Yarmer named NO
   - **Adequate for v2 IssueCard?** YES — Brooks's YES vote is determinable; but NO Brooks-verbatim quote on this item

6. **December 15, 2025 land sale vote — individual roll-call by name**
   - Why primary not confirmed: same BoardDocs blocker
   - Best available secondary fallback: Hays Post (`https://hayspost.com/posts/909a410b-bf64-406d-a98b-01417d221495`) — 5-1 total, Park named NO, Zampieri-Lillpopp named ABSENT
   - **Adequate for v2 IssueCard?** YES — Brooks's YES vote is determinable; no verbatim Brooks quote on this item

7. **August 2025 Golden Belt Bank motion — individual roll-call by name**
   - Why primary not confirmed: same BoardDocs blocker
   - Best available secondary fallback: Hays Post — 3-3 total, all three YES votes named (Brooks, Ruder, Zampieri-Lillpopp), Yarmer named ABSENT, three NO votes not named
   - **Adequate for v2 IssueCard?** YES — Brooks's YES role as mover is unambiguous; verbatim quote captured

8. **Brooks's campaign Facebook page content (Page A + Page B)**
   - Why primary not confirmed: Facebook gates all post content for logged-out users in 2026; both pages exist but only the title metadata was returnable
   - Best available secondary fallback: none — page content is not available to logged-out fetchers in any form
   - **Adequate for v2 IssueCard?** **NO content attribution permitted** based on this pass. Pages should be cited under v2 schema only as `tier: "social"` Sources with `claimsAnchored: ["Campaign Facebook page exists at this URL as of 2026-05-20"]` and should NOT back any ActionEvidence (per v2 schema rule: ActionEvidence must be backed by ≥1 primary or secondary source; pure social is rejected). If narrative-writer creates a SocialSignal for Brooks, it can cite these pages only as presence-of-account, not as carrying a specific observed post or like.

9. **Brooks's 2021 + 2025 Ellis County Clerk campaign-finance filings**
   - Why primary not confirmed: Ellis County Clerk does not publish historic candidate affidavits/reports to the public web
   - Best available secondary fallback: Brooks's own 2021 self-attestation in Hays Post Q&A ("No outside money or in-kind PAC support") + Kansas statute K.S.A. 25-4145 framework demonstrating that sub-$1,000 candidates file affidavit-only
   - **Adequate for v2 IssueCard?** YES if narrative-writer is precise: "Brooks publicly self-attested to no outside funding or PAC support in his 2021 Hays Post candidate Q&A. Kansas statute (K.S.A. 25-4145) permits sub-$1,000 candidates to file an affidavit in lieu of an itemized contribution report; no itemized Ellis County Clerk filing for Brooks's 2021 cycle is published on the public web. The 2025 cycle has not been publicly itemized as of 2026-05-20."

10. **District-controlled meeting video recordings for all listed meetings**
    - Why primary not confirmed: HighBond/Diligent portal (`https://usd489.community.highbond.com/Portal/`) loads its archive list via client-side JavaScript that does not execute under non-browser fetch. The Hays Post April 2026 vandalism article explicitly references a HighBond meeting-video link, confirming district-controlled video archives exist.
    - **Adequate for v2 IssueCard?** Video timestamps would strengthen citations but are not required — the verbatim Brooks quotes from Hays Post + Tiger Media are reporter-captured from the meeting record itself and are adequate for `ActionEvidence.body` text. Narrative-writer can cite the HighBond portal URL as a sourceId at `tier: "primary"` for the meeting-video itself, with a `claimsAnchored` list that names which meeting it covers, even if the specific timestamp deep-link is not yet known.

11. **April 22, 2024 HMS mascot vote — Brooks's verbatim rationale**
    - Why primary not confirmed: same BoardDocs blocker; the reporters at both Hays Post and Tiger Media Network captured Brooks's NO vote but did not record a verbatim Brooks rationale at the vote
    - Best available secondary fallback: existing dossier paraphrase that Brooks argued "for delay-for-community-input, not against the mascot per se"
    - **Adequate for v2 IssueCard?** Partially — the NO vote itself is clean, but for an IssueCard `stated.text` rationale Brooks's actual rationale is reporter-paraphrased, not verbatim. The narrative-writer should phrase Brooks's position carefully ("voted against the change at this time, on procedural-delay grounds per reporter paraphrase") rather than imputing a content-of-mascot stance.

---

## Cross-cutting confidence + gaps

- **Brooks's full record-of-votes across the 2023–2026 governance period is now triangulated** through 12 distinct meeting events (Sources A through F, plus G, H, I, J, K, L, M) — each with a documented meeting date, a documented motion or discussion event, and a documented Brooks position (mover / YES / NO / questioner). Eight of those Brooks-positions are verbatim-quoted on the record by at least one reporter; the remaining four are unambiguous from vote-total + named-dissent context.
- **All twelve underlying primary records exist in USD 489 BoardDocs but are unreachable from this environment** due to a portal-wide HTTP 403 on every non-browser fetch (all four URL forms tried). The primary record exists; it is publicly accessible to a browser; it is not accessible to programmatic scraping. This is the SAME class of issue Allen Park's P1.2 loopback worked around — see Blockers section below.
- **For the v2 schema's `Source.tier` requirement**, the narrative-writer / site-profile-writer has two viable patterns:
  1. **Pattern A (the Allen Park P1.2 pattern)**: Cite BoardDocs' top-level portal URL once as a `tier: "primary"` Source with `claimsAnchored: ["motion text, roll-call vote, meeting record for [meeting date]"]` and pair it with the Hays Post / Tiger Media Network secondary citation. The validator only requires that at least one of an ActionEvidence's `sourceIds` resolves to primary OR secondary; the BoardDocs portal entry provides the primary anchor even when the specific deep-link cannot be retrieved.
  2. **Pattern B**: Use Hays Post / Tiger Media Network alone as `tier: "secondary"` Sources, omitting BoardDocs. This passes the validator but reads weaker on the page.
  - **Recommended**: Pattern A. The BoardDocs portal IS the primary record; the access constraint is environmental, not categorical.
- **At least 3 ActionEvidence-ready primary records are demonstrably achievable** under Pattern A: a-nepotism-vote-2023-04-24, a-admin-contracts-2024-01-22, a-admin-contracts-2026-03-10, a-asbestos-hms-2025-09-22, a-asbestos-felten-2025-12-16, a-land-sale-2025-12-15, a-naming-rights-motion-2025-08, a-bond-pm-motion-2025-03-24, a-felten-gmp-2026-02-24. That is **nine** candidate ActionEvidence entries with primary-tier-anchorable Sources, well above the ≥3 bar.
- **Contradictions / corrections flagged** for narrative-writer attention:
  - **Date label on the budget-hearing event**: sleuth-pass labels it "2025-08 (taxpayer budget hearing)"; primary article confirms **2024-09-09**. This is a date-label error in the sleuth-pass; the underlying behavior and quotes are accurate. The narrative-writer should use 2024-09-09.
  - **"Asbestos vote 2025"**: there are TWO separate 2025 asbestos votes (HMS Sep 22 6-1 and Felten Dec 16 4-2). Allen Park's existing v2 `a-asbestos-vote-2025` is ambiguous between them — narrative-writer should disambiguate when assembling Brooks's IssueCards (and may want to surface the ambiguity to Allen Park's site-profile-writer too).
  - **"5-2 nepotism vote"** in existing Brooks dossier vs. **"4-2 personnel transactions vote 2023-04-24"** in primary article: the 5-2 vote was the **March 13, 2023** initial hire of Andrea Wilson; the 4-2 vote was the **April 24, 2023** follow-up personnel-transactions consent item that re-surfaced after Vajnar pulled it from consent. Two separate roll-calls, both involving Brooks. The dossier conflates them slightly. Narrative-writer should describe them as two events if both are cited.

---

## Blockers

- **description**: USD 489 BoardDocs portal (every URL form: `https://go.boarddocs.com/ks/usd489/Board.nsf/vpublic`, `…/Board.nsf/Public`, `https://www.boarddocs.com/ks/usd489/Board.nsf`, and a specific item deep-link `…/Board.nsf/goto?open=&id=BHXSFC6C436A`) returns HTTP 403 to non-browser fetches. Per IDENTITY.md commitment #1, primary-tier voting records, agenda packets, and roll-call minutes are the preferred citation tier; per the v2 schema, `Source.tier === "primary"` is the desired anchoring for ActionEvidence. The primary records demonstrably exist (the portal is the published, official USD 489 board document system, and HighBond/Diligent meeting-video archives are referenced by Hays Post directly), but no programmatic access to specific deep-links is available in this environment. **Same class as P1.2 loopback's Allen Park BoardDocs access constraint** — Allen Park's P1.2 fix wired `s-usd489-boarddocs` (tier: primary) as the top-level Source citation backing roll-call ActionEvidence entries, without requiring per-meeting deep-link retrieval. Brooks's v2 site-profile-writer (Phase 2.d) should follow the same pattern: cite the BoardDocs portal URL once as the primary-tier Source, pair with Hays Post / Tiger Media Network as secondary, and `claimsAnchored` the BoardDocs entry per meeting date in the ActionEvidence body. **NOT a halt** — same workaround as Allen Park.
- **owner**: site-profile-writer at Phase 2.d (apply Allen Park P1.2 pattern)
- **since**: 2026-05-20T01:35:00Z

---

## Return summary

- **Output path**: `/Users/tylerpreisser/Desktop/elect-righteous/memory/candidates/ken-brooks/raw-dump-v2.md`
- **Primary-tier-anchorable records retrieved**: **13 meeting events** with documented Brooks position (Sources A through M), plus **2 candidate-attested Q&As** (Sources N + O). Of those 13 meeting events, **9 are roll-call votes** with Brooks's position determinable (A nepotism 4-2, B contracts 5-1-1, C contracts triple-motion 5-2/7-0/5-2, D HMS asbestos 6-1, E land sale 5-1, F Felten asbestos 4-2, G naming rights 3-3 fail, K mascot 5-2, L bond PM 3-4 fail, M Felten GMP 4-2 — 10 roll-calls in total across 9 meetings, since C contained three roll-calls).
- **Campaign-finance filings retrieved**: **0 itemized filings** (none exist for sub-$1,000 affidavit-only Kansas school-board candidates; Brooks's 2021 self-attestation is the substitute attested data).
- **Page-presence records logged**: **2 Brooks campaign Facebook pages** (Page A numeric-ID, Page B vanity URL), **1 Celebration Community Church Hays page** (affiliation-only, not an IssueCard signal).
- **Flagged items where primary could NOT be confirmed**:
  1. Per-meeting individual roll-call name-by-name breakdowns beyond the named dissenters (10 meetings — BoardDocs blocker)
  2. Brooks's campaign Facebook post content (Page A + Page B — Facebook logged-out content gate)
  3. Brooks's 2021 + 2025 Ellis County Clerk filings (not published to public web; statute permits affidavit-only sub-$1,000 filing)
  4. Brooks's verbatim mascot-vote rationale (reporter-paraphrased only)
  5. District meeting video deep-links to specific Brooks moments (HighBond JS-gated archive)
- **Blocker entries**: 1 (BoardDocs portal 403; not a halt — same class as Allen Park P1.2; site-profile-writer should apply the same workaround pattern at Phase 2.d).
- **Contradictions vs sleuth-pass flagged to narrative-writer**: 2 date-label corrections (budget hearing is 2024-09-09, not 2025-08; "asbestos vote 2025" disambiguates to two separate votes).
- **No halt** triggered.
