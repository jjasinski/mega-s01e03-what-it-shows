## Problem

The shared date parser reads dates month first for day-first tenant locales. A booking for 7 April can become 4 July (report R-41200). Invites and reminders can land on the wrong day.

## Scope and evidence

379 unique reports in the 4 October export of #4471 are classified as parser by the supplied `causeOf` logic, across 11 tenants. The export contains 427 rows but 412 distinct IDs in total. Intake's browser-based tag is not the cause: 23 of these parser reports carry the hint tag.

Five reports flagged in desk-notes have unusual descriptions, including possible one-day discrepancies. They are included in the 379 based on the supplied classification, but need individual investigation, including actual timestamps and time zones; their root causes are not established by the classification.

## Expected

Interpret dates according to the tenant's locale and preserve the intended calendar date through booking, invitation and reminder. Cover day-first and month-first inputs with regression tests, including ambiguous dates.

The booking-v3 date hint is a separate problem; correcting the parser alone does not prove the form is fixed.
