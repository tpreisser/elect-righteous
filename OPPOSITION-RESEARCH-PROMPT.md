# OPPOSITION RESEARCH DIRECTIVE — Paste This Entire Document After The Main Research Pass

## MISSION

This is a SEPARATE phase from the broad biography/profile research pass.

The first pass finds the candidate's public profile, campaign materials, church information, quotes, and campaign finance. This second pass is the deliberate adverse-public-record pass. Its job is to search for the negative, contradictory, disciplinary, embarrassing, litigious, deceptive, or self-serving material that would otherwise be missed if you only read campaign bios, favorable interviews, and mainstream profile pieces.

The goal is not to smear anyone. The goal is balance.

For EVERY candidate, produce a verified, source-cited `memory/candidates/{slug}/opposition-research.md` that answers:

- What would an opposition researcher surface first?
- What public criticism or controversy exists?
- What lawsuits, complaints, investigations, ethics issues, donor conflicts, deleted statements, contradictions, or business problems exist?
- If nothing meaningful exists, can you say that plainly and honestly?

If the first research pass is "who they are," this pass is "what critics, court records, adversaries, watchdogs, and old internet traces say."

---

## HARD RULES

1. **PUBLIC RECORD ONLY** — No private leaks, no doxxing, no rumor presented as fact.
2. **VERIFY IDENTITY** — Namesakes are common. Match office, city, age, employer, or photo before inclusion.
3. **ADVERSE DOES NOT MEAN FALSE** — Criticism can be true, false, partisan, or unresolved. Label it accurately.
4. **URL OR IT DIDN'T HAPPEN** — Every finding needs a source URL.
5. **SEPARATE ALLEGATION FROM DISPOSITION** — "Complaint filed" is not the same as "liable" or "convicted."
6. **NO BOOSTER LANGUAGE** — This file is evidentiary, not admiring or hostile.
7. **NO "NOTHING FOUND" SHORTCUTS** — Search first. If nothing adverse turns up, say `No verified adverse public-record findings surfaced in this pass.`

---

## SEARCH CATEGORIES — DO ALL OF THEM

### A. Controversy & Criticism Searches

1. `"[Full Name]" controversy`
2. `"[Full Name]" scandal`
3. `"[Full Name]" complaint`
4. `"[Full Name]" ethics`
5. `"[Full Name]" investigation`
6. `"[Full Name]" lawsuit`
7. `"[Full Name]" disciplined`
8. `"[Full Name]" censure`
9. `"[Full Name]" recall`
10. `"[Full Name]" fired`
11. `"[Full Name]" arrested`
12. `"[Full Name]" bankruptcy`
13. `"[Full Name]" tax lien`
14. `"[Full Name]" fraud`
15. `"[Full Name]" conflict of interest`

### B. Court, Agency, and Complaint Records

16. PACER
17. Kansas courts portal
18. County court dockets
19. State licensing-board discipline pages
20. AG/consumer complaint databases
21. BBB complaints
22. State ethics commission orders or complaints
23. FEC enforcement or reporting problems
24. Campaign-finance late filings, amendments, missing reports
25. Public bankruptcy, lien, foreclosure, or judgment records

### C. Donor & Self-Dealing Conflicts

26. Major donors with business before the office
27. PAC money from regulated industries
28. Self-dealing accusations
29. Contract awards, grants, abatements, zoning votes, or appointments connected to donors/family/business partners
30. Personal business interests that overlap with public duties
31. Family employment or nepotism questions

### D. Contradictions & Reversals

32. Old versus new campaign positions
33. Deleted or changed issue pages
34. Quotes that conflict with later quotes
35. Votes that conflict with campaign rhetoric
36. Public biography claims that do not match official records
37. Party switches, ideological reversals, endorsement reversals
38. "Said X to one audience, Y to another" situations

### E. Social & Media Dirt

39. Search old Facebook posts
40. Search old Twitter/X posts and replies
41. Search deleted/cached content via Wayback/Archive.today
42. Search YouTube comments, town halls, and debate clips for angry exchanges or walkouts
43. Search Reddit/community forums for specific documented incidents
44. Search newspaper letters to the editor or op-eds criticizing the candidate
45. Search local public-comment videos involving them

### F. Workplace, Business, and Reputation Issues

46. Employer disputes or criticism
47. Lawsuits involving their company
48. Reviews or complaints tied to their business
49. Licensing actions or malpractice/discipline (if licensed professional)
50. Nonprofit governance problems (if they ran a nonprofit)

---

## REQUIRED OUTPUT FILE

Write to `memory/candidates/{slug}/opposition-research.md` using THIS structure:

```markdown
# Opposition Research: {Full Name}
## Compiled: YYYY-MM-DD

## Bottom Line
{2-4 sentence neutral summary of the adverse public-record picture. If little surfaced, say so clearly.}

## Verified Adverse Findings
- {Finding} — {why it matters} — Source: {URL}
- {Finding} — {status/disposition if known} — Source: {URL}

## Litigation, Complaints, and Investigations
- {Case/complaint/agency action} — {date/status} — Source: {URL}

## Conflicts of Interest and Donor Conflicts
- {Conflict or overlap} — Source: {URL}

## Contradictions and Reversals
- {Earlier statement/action}
- {Later statement/action}
- Source: {URL}

## Public Criticism and Controversies
- {Substantive criticism from public officials, news coverage, watchdogs, or community reporting}

## Deleted / Changed / Archived Content
- {What changed or disappeared} — Source: {URL}

## What Did NOT Surface
- {Be explicit about adverse areas searched but not verified}

## Quotes Critics Will Use
> "{Exact quote}" — {Source, Date, URL}

## Sources
- {URL} — {brief note} — accessed YYYY-MM-DD
```

---

## WHAT COUNTS AS A GOOD FILE

A good `opposition-research.md` does NOT read like gossip. It reads like a file a sharp investigative reporter or campaign opposition team would keep:

- specific
- dated
- source-cited
- clear about uncertainty
- separated from the candidate's self-description

If the candidate truly has a clean or sparse public record, the file should still exist and say that after documenting the searches performed.

---

## PIPELINE INSTRUCTION

After this file is written:

1. Keep `raw-dump.md` as the broad master profile dump.
2. Keep `opposition-research.md` separate as the adverse-public-record file.
3. The site-generation step should use BOTH, so final candidate pages reflect both biography/background and verified criticism/controversy.
