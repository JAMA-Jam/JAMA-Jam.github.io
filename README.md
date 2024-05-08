# FawnGuardian.github.io
JAMA Jam leader boards and history.
**Website** | https://JAMA-Jam.github.io/

**Credits** | https://github.com/ZpeedTube/trijam

<br />

_________________________
<br />

# Updating Winners List
You can update the Winners list right in the github browser. No additional tool is needed to update the list. After you have made the cahnges, it may take a couple minutes to see the changes hit the hosted pages due to build and refresh time.

**File location**: [docs/data/winner.csv](https://github.com/JAMA-Jam/JAMA-Jam.github.io/blob/main/docs/data/winners.csv)

<br />

### Steps:
1. Open up the winner.csv file in github browser.
2. Click "Edit this file" button at the top right for the file. (Looks like a pencil)
3. Add new entries starting from line 2.
4. Fill out each entry with the following info:
    - Award Categories
       - Best Use of Theme
       - Most Creative
       - Best In Show
    - Use >>> to add links to text
    - Use &&& to add an additional winner
    - [Month Year],[Award category],[Winner's Name]>>>[Winners itch page],[Project Name]>>>[Project itch page],[Jam Theme]
      - Example With 1 winner.
        - "March 2024,Best Use of Theme,Skrimbus>>>https://skrimbus.itch.io/<span>,Astral Tiles>>>https://skrimbus.itch.io/astral-tiles<span>,Celestial"
      - Ecample with 2 winners.
        - "April 2024,Best In Show,WURM FUD>>>https://wurmfud.itch.io/<span>&&&Jonathan Gilleland>>>https://jongilleland.itch.io/<span>,F|_@M3S|{ULL>>>https://wurmfud.itch.io/f-m3sull<span>&&&Monster Hunter Sword>>>https://jongilleland.itch.io/jonathan-gilleland-monster-slaying-sword<span>,Monster"
6. Click "Commit Changes", add a comment to state what kind of update you are making, and commit to the main branch.
  <br />
  
> [!NOTE]
> After you commit to the main branch, the repo will automatically run the pipeline to create a new build and deploy to the hosted server.
