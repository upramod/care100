# Care100

**No patient should miss a transplant because they lack a caregiver network.**

Care100 helps transplant social workers turn an incomplete support network into a structured caregiver coverage plan. It maps transplant-center requirements across recovery, assigns available supporters, finds gaps, and prepares a plan for transplant-team review.

## Tomorrow's vertical slice

- Enter recovery requirements by day and responsibility.
- Add caregivers and their availability.
- Assign coverage.
- Show uncovered time or responsibility gaps.
- Display a review-ready plan summary.

This first version is a planning aid. It does not determine transplant eligibility, give medical advice, or replace transplant-team review.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Product principles

- Patient consent comes first.
- Collect the least personal data needed.
- Show every gap. Never imply complete coverage when one remains.
- Keep center requirements distinct from suggested alternatives.
- Require human review before a plan is treated as approved.

See [docs/PLAN.md](docs/PLAN.md) for the build order.