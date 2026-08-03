# Bead Buddies Website Operations

## Live website

- Primary public address: `https://www.beadbuddies.com.au/`
- TikTok-friendly address: `https://tiktok.beadbuddies.com.au/`
- Cloudflare Pages project: `beadbuddiesv1-1`
- Cloudflare Pages domain: `https://beadbuddiesv1-1-cv1.pages.dev/`

The naked address `https://beadbuddies.com.au/` cannot be attached directly to Cloudflare Pages while the domain remains on Wix nameservers. Wix access is required to replace the current broken apex records with a supported forwarding or hosting arrangement.

## Payment routing

The website does not process or hold payments. New shoppers can use the hosted Square deposit checkout owned by public Square merchant ID `MLQQXF6MDZTRB`:

- Once-only $14 deposit: `https://square.link/u/egRTioGV`

The deposit is non-refundable and must be deducted from the shopper's first invoice. Final balances are not collected through a generic website link. Helen sends each shopper a personalised Square invoice containing their items, destination-based postage and any first-invoice deposit deduction. Invoices are payable within three days unless otherwise arranged.

Payments, transaction history, refunds, Square balance and bank transfers are managed in the Square account that owns the deposit link and invoices.

## Account-owner checks

Helen or an authorised Square team member must:

1. Sign in to the Square account that created the links.
2. Find the test payment under Payments/Transactions and confirm its status.
3. Check Settings > Account & Settings > Money > Bank accounts.
4. Confirm the linked bank account and transfer schedule.
5. Enable email notifications for Payment Link transactions if desired.
6. Keep Afterpay enabled for Online payments under Settings > Account & Settings > Payments > Payment methods.
7. Enable Afterpay in the default Square Invoice template and verify it remains selected when sending eligible invoices.
8. Add the correct destination-based postage to each invoice and deduct the $14 deposit from each new shopper's first invoice.

Afterpay Online was publicly verified on the deposit checkout on 13 July 2026. The checkout displayed four instalments of $3.50. No payment was submitted during verification.

The default `Square invoice` template was updated and reopened for verification on 3 August 2026. Its saved state is:

- Message: `Claiming during a TikTok Live forms a sales agreement. Once the Live has ended, claims cannot be changed or cancelled for change of mind. This does not limit your rights under Australian Consumer Law.`
- Schedule: send immediately; due in 3 days.
- Accepted methods: credit/debit on; Afterpay on; gift card off.
- Square shipping: off. Postage is entered manually in each personalised invoice.

The former generic balance link (`https://square.link/u/p8mzgLtx`) is no longer published on the website. Deactivate it in Square once no existing customer still needs it.

## PayPal

PayPal is separate from the Square checkout links. The verified Bead Buddies invoice-payment link is:

- PayPal invoice payment: `https://www.paypal.com/ncp/payment/P6JNAU2EK9F5N`

The website publishes this link from `SITE_CONFIG.paypalUrl` near the top of `index.html`.

The Helen-owned PayPal Business Payment Link was created and publicly verified on 3 August 2026 with:

- customer-entered amount in AUD;
- title `Bead Buddies Invoice Payment`;
- instructions to enter the exact final invoice total;
- required customer full name;
- required Square invoice number;
- no delivery address, delivery fee, handling fee or tax added by PayPal;
- checkout methods shown by PayPal included PayPal, Pay in 4, Apple Pay and debit/credit card at verification time.

After a customer pays through PayPal, Helen must match the payment to the Square invoice and mark that invoice as paid externally. The $14 first-shopper deposit remains on Square. Do not add postage again in PayPal because the customer enters the complete final total from their personalised Square invoice.
