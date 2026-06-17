# Relink User Testing Guide

## How It Works

This game uses **browser localStorage** to save each participant's results automatically.

## Available URLs

### 1. **Main Game** - `yourapp.com` or `yourapp.com/#/`
- Shows intro screen → tutorial → game
- First-time experience for new players

### 2. **Results Page** - `yourapp.com/#/results`
- **Direct link to saved results**
- Shows the end screen with stats from their completed game
- If they haven't played yet, shows "No Results Found" with a button to play

### 3. **Compact Results Page** - `yourapp.com/#/results-compact`
- **Minimal results display**
- Shows only solved rows as colored squares with mistakes marked as X
- Simplified sharing mechanic (emojis only, no white squares)
- If they haven't played yet, shows "No Results Found" with a button to play

### 4. **Results Comparison Page** - `yourapp.com/#/results-comparison`
- **Side-by-side comparison**
- Shows both "Variation A" (full results) and "Variation B" (compact results) next to each other
- Useful for comparing the two different sharing mechanics
- If they haven't played yet, shows "No Results Found" with a button to play

## For UserTesting.com Studies:

### Option A: Two-Part Study
1. **First Session**: Send participants to `yourapp.com` to play the game
   - They complete the game
   - Results auto-save to localStorage
2. **Second Session** (same participants, same browser): Send link to `yourapp.com/#/results`
   - They see their saved game results immediately
   - No need to replay the game

### Option B: Single Session
1. **Single URL**: Give all participants `yourapp.com`
2. **First Play**: Each participant plays the game fresh
3. **Auto-Save**: When they finish, results save to their browser's localStorage
4. **Revisit**: If they return to the same URL (in the same browser), they see their saved results

### What Gets Saved & Displayed on Results Pages:

**Full Results Page** (`#/results`):
- ✅ All guesses and mistakes (shown as emoji grid)
- ✅ Lives remaining at end
- ✅ Win/lose result  
- ✅ Complete game statistics
- ✅ Share button to copy results
- ✅ Streak tracker (mock data)
- ✅ Time remaining until next puzzle

**Compact Results Page** (`#/results-compact`):
- ✅ Only solved rows (shown as colored squares)
- ✅ Mistakes marked with X icons
- ✅ Link phase result (chain or broken link icon)
- ✅ Simplified share text (emojis only)
- ✅ Win/lose result

**Results Comparison Page** (`#/results-comparison`):
- ✅ Both emoji grids displayed side by side
- ✅ "Variation A" label above full results
- ✅ "Variation B" label above compact results
- ✅ No share buttons or streak data (just the grids)

### Important Notes:

- ✅ Each participant's data is stored **locally** in their own browser
- ✅ No server or database required
- ✅ Results persist across page refreshes
- ✅ Privacy-friendly - no data leaves the user's device
- ⚠️ Must use the **same browser** to see saved results
- ⚠️ Clearing browser data will reset the game

### Testing Locally:

**Testing the main game:**
1. Start your dev server
2. Open `http://localhost:5173` (or your local URL)
3. Play the game to completion
4. Results are auto-saved to localStorage

**Testing the results pages:**
1. After completing a game, visit `http://localhost:5173/#/results`
2. You'll see your saved game results (full version)
3. Visit `http://localhost:5173/#/results-compact` to see compact version
4. Visit `http://localhost:5173/#/results-comparison` to see both side by side
5. Click "Play Again" to return to the main game
6. Open in incognito/private mode to test "No Results Found" state

### For Different Test Scenarios:

If you need to test multiple scenarios (e.g., winning vs losing), you can:
- Use different browsers (Chrome, Firefox, Safari)
- Use incognito/private browsing windows
- Clear localStorage between tests

### Clearing Saved Data:

To reset and play again, participants can:
1. Open browser DevTools (F12)
2. Go to Application/Storage tab
3. Find localStorage → your domain
4. Delete the `relink-user-results` entry
5. Refresh the page
