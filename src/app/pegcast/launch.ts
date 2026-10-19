/**
 * The App Store launch switch. Set it to true when the App Store listing is live.
 * It swaps "Coming soon" for the App Store badge and adds Safari's Smart App Banner.
 * In the same publish, export the privacy page again from PegCast with its App Store link.
 */
export const onAppStore = false;

export const appStoreId = "6816743261";
export const appStoreUrl = `https://apps.apple.com/app/id${appStoreId}`;

/** The short status that the home page and the PegCast page show. */
export const storeStatus = onAppStore ? "On the App Store" : "Coming soon to the App Store";
