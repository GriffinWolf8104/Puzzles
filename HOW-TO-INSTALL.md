# Putting Puzzles on your phones

This `app` folder is Puzzles packed as a home-screen app. It has its own icon, opens full screen
with no browser bars, and keeps working without internet once it has been opened.

Phones can't install an app straight from a file on your PC, so the folder has to go on the web first.
That part is free and takes a couple of minutes. You only do it once.

## 1. Put the folder online (on your PC)

1. Make a free account at https://app.netlify.com/signup
2. Go to https://app.netlify.com/drop
3. Drag this whole `app` folder onto the page.
4. You'll get an address like `https://random-name-123.netlify.app`. To give it a nicer name, go to
   **Site configuration > Change site name**, e.g. `jvl-puzzles` gives `https://jvl-puzzles.netlify.app`.

Anyone who has the address can open the page. Nobody else can find it, though, because it isn't listed
anywhere. Your games and settings stay on each phone and never get uploaded.

## 2. iPhone 16

1. Open the address in **Safari**. It has to be Safari for this step.
2. Tap the **Share** button (the square with an arrow pointing up).
3. Scroll down and tap **Add to Home Screen**.
4. If you see **Open as Web App**, leave it switched on. Then tap **Add**.

## 3. Galaxy A13

**Chrome:** open the address, tap the **⋮** menu (top right), choose **Add to home screen** and then **Install**.

**Samsung Internet:** open the address, tap the **≡** menu (bottom right), then choose **Add page to > Home screen**.

## 4. Updating it later

When we change Puzzles, I'll put the new files in this `app` folder. On Netlify, open your site, go to
the **Deploys** tab and drag the `app` folder in again. The phones pick up the new version the next time
they open Puzzles with internet. You might need to close it and open it again once.

## Good to know

- Each phone keeps its own settings and progress. Deleting the icon also deletes them.
- To send a puzzle from one phone to the other, use Share and Import inside the app.
- A real App Store or Play Store app is a separate, bigger job. For iPhone it needs a Mac and a
  paid Apple developer account. The home-screen version is the simple way to use it yourself.
