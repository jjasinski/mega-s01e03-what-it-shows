## Problem

Booking-v3 displays `MM/DD/YYYY` for tenants whose locale is day first, while the form reads the date in the tenant's order. Following the displayed hint can swap day and month. For example, report R-41230 is a form report from a day-first booking-v3 tenant.

## Scope and evidence

33 unique reports in the 4 October export of #4471 are classified as hint by the supplied `causeOf` logic, across three tenants: Alder Physio, Copper Studio and Pale Harbour. The browser-based intake tag calls 15 of these parser; it is a guess and does not override tenant, form and channel.

## Expected

Display a date hint consistent with the tenant locale and the form's actual parser; verify the intended date is preserved with ambiguous inputs across supported locales and forms. The shared month-first parser is a separate problem.
