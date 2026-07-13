# Bead Buddies Website Operations

## Live website

- Primary public address: `https://www.beadbuddies.com.au/`
- TikTok-friendly address: `https://tiktok.beadbuddies.com.au/`
- Cloudflare Pages project: `beadbuddiesv1-1`
- Cloudflare Pages domain: `https://beadbuddiesv1-1-cv1.pages.dev/`

The naked address `https://beadbuddies.com.au/` cannot be attached directly to Cloudflare Pages while the domain remains on Wix nameservers. Wix access is required to replace the current broken apex records with a supported forwarding or hosting arrangement.

## Payment routing

The website does not process or hold payments. It links customers to two hosted Square checkouts owned by the same public Square merchant ID (`MLQQXF6MDZTRB`):

- Once-only $14 deposit: `https://square.link/u/egRTioGV`
- Confirmed balance payment: `https://square.link/u/p8mzgLtx`

Payments, transaction history, refunds, Square balance and bank transfers are managed in the Square account that owns these links.

## Account-owner checks

Helen or an authorised Square team member must:

1. Sign in to the Square account that created the links.
2. Find the test payment under Payments/Transactions and confirm its status.
3. Check Settings > Account & Settings > Money > Bank accounts.
4. Confirm the linked bank account and transfer schedule.
5. Enable email notifications for Payment Link transactions if desired.
6. Review the Afterpay eligibility range and processing fees under Settings > Account & Settings > Payments > Payment methods.

Afterpay Online was publicly verified on both checkout links on 13 July 2026. The deposit checkout displayed four instalments of $3.50, and the balance checkout displayed Afterpay after a harmless sample amount was entered. No payment was submitted during verification.

## PayPal

PayPal is not connected to the current Square checkout links. A PayPal Business payment link or PayPal Invoicing workflow would be a separate payment route and must use a Helen-owned PayPal Business account.

Do not add PayPal branding to the public website until the PayPal account, payment destination and live payment link have been verified.
