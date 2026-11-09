Try To Do List — General Productivity App
Version: v64 — Standalone Breathing, Moss Animation & Navigation

This is the General app package. Keep it separate from Try-To-Do-Education.

v51 changes:
- Keeps Moss's five evolution forms permanent: once he reaches Elder of the Wildwood, he never cycles back to Sproutling.
- Preserves the earned Elder appearance after the final evolution.
- Adds the Living Forest progression after Moss's final evolution, with permanent discoveries at 25, 50, 75, 100 and 125 lifetime growth points.
- Shows lifetime growth points and the next forest discovery; progress continues to accumulate rather than resetting.
- Retains the v50 Moss companion visual feedback improvements.
- Bumps the service-worker cache version so GitHub Pages clients can receive the update.

Deployment:
Upload the contents of this folder to the root of the Try-To-Do-General GitHub repository.
Do not upload this ZIP file into the repository. Keep a backup of the current files first.

v54 changes:
- Adds an intentional “Reset Moss to Sproutling” control under Settings → Preferences, away from the everyday Moss settings.
- Requires confirmation and resets only Moss’s evolution, lifetime growth points and Living Forest discoveries; tasks and preferences are preserved.
- Keeps automatic progress protection in place everywhere else; the reset is the sole intentional way to restart Moss.
- Bumps the service-worker cache version.


Version 56: clearer Living Forest review control, first-load recognition of already-earned discoveries, and cache refresh.

Version 56: fixed Living Forest modal controls with delegated click handling and Escape-to-close support; cache version v12.


Version 57: Living Forest redesigned as Moss's illustrated woodland home, with evolving discovery progress and renamed Explore the Living Forest button. Cache version v13.


Version 58: clickable Living Forest reward titles open illustrated story cards describing each discovery and Moss's interaction. Includes personal 'And you helped Moss find that!' message. Cache version v14.


Version 59: Adds an optional Breathe with Moss experience inside the Living Forest sanctuary. Gentle visual inhale, pause and exhale cues; can be paused or closed at any time. Cache version v15.


v61 changes:
- Makes Breathe with Moss available directly from a button over Moss's forest scene.
- Moves the breathing overlay outside the forest review dialog and adds an explicit close handler so the X reliably closes it.
- Adds versioned Moss home-screen icons, including an Apple touch icon, to replace the generic letter icon on newly installed/updated shortcuts.
- Bumps the service-worker cache version.

Deployment: back up the current repository, then upload the extracted contents of this folder to the repository root. Existing home-screen shortcuts may need to be removed and re-added once for their icon to refresh, especially on iOS.

Version 62 changes:
- Moves the update-ready notice to the top safe area with stronger contrast and a larger action button.
- Makes Living Forest story cards viewport-level overlays on mobile.
- Adds direct touch/click close handlers for both the story X and Back to the forest button, plus backdrop dismissal.
- Bumps service-worker cache to v19.


v63 changes:
- Fixes Breathe with Moss controls with direct click bindings for the forest hero button, breathing start, pause, and close.
- Removes the duplicate Breathe with Moss button at the bottom of the Living Forest.
- Bumps service-worker cache to v20.


Version 64 changes:
- Rebuilds Living Forest breathing as a standalone controller, independent of the main app startup scope.
- Breathe with Moss opens from the forest with independent start, pause, close, and Escape controls.
- Adds an eyes-closed Moss illustration and gentle 4-2-6 chest/glow breathing animation.
- Renames the forest exit to “Return to Main”.
- Uses newly versioned Moss home-screen icons and Apple touch icon; cache v21.

Corrected v64 package:
- Internal folder and documentation consistently identify v64.
- Breathe with Moss uses a standalone event controller independent of the main app's click delegation and helper functions.
- Added selectable Gentle (4-2-6), Slow (4-4-8), and Natural breathing options.
- Added synchronized chest-glow expansion/contraction with the inhale, pause, and exhale phases.
- Added explicit close, Escape, and Return to Main behavior.
- Forest exit label changed to Return to Main.
- Updated Moss home-screen icon references to uniquely versioned v4 assets.
- Service-worker cache bumped to v22.

FINAL v64 PACKAGE CONTENTS
- Standalone breathing controller is bound directly to the forest hero button and its own controls; it does not rely on the app's delegated event system or main-app helper functions.
- Breathing options: Gentle 4-2-6, Slow 4-4-8, and Natural breathing.
- Moss breathing artwork shows eyes closed; a synchronized chest glow expands on inhale, remains gently lit during the pause, and softens on exhale.
- Close (X), Escape, and Return to Main controls are wired in the standalone controller.
- Forest exit label is Return to Main.
- Manifest and Apple touch icon point to uniquely versioned Moss v4 icon assets.
- Service-worker cache: try-to-do-list-pwa-v22.
- This package has passed ZIP integrity and JavaScript syntax checks. Live iPhone testing remains necessary.
