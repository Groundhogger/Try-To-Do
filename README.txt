Try To Do List — General Productivity App
Version: v54 — Permanent Moss Evolution, Living Forest & Optional Reset

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
