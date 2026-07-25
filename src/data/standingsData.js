// Placeholder standings data — will eventually be replaced by a
// Google Sheets JSON endpoint (same pattern as StandingsAPI.gs).
// Points = 2 per match win. Legs For/Against drive tiebreaks.

const buildStanding = (name, won, lost, legsFor, legsAgainst) => {
  const played = won + lost;
  return {
    name,
    played,
    won,
    lost,
    legsFor,
    legsAgainst,
    legDiff: legsFor - legsAgainst,
    points: won * 2,
  };
};

const sortStandings = (players) =>
  [...players]
    .sort((a, b) => b.points - a.points || b.legDiff - a.legDiff)
    .map((player, index) => ({ ...player, rank: index + 1 }));

const rawDivisions = {
  "Premier League": [
    ["Jason Evans", 7, 1, 52, 30],
    ["Badger The Bully", 6, 2, 49, 34],
    ["Les Pratt", 5, 3, 47, 38],
    ["Ben Jones", 5, 3, 45, 40],
    ["Chris Hall", 4, 4, 42, 42],
    ["Ryan James", 3, 5, 38, 45],
    ["Tom Harris", 2, 6, 33, 49],
    ["Mark White", 0, 8, 22, 54],
  ],
  "Division 1": [
    ["Steve Young", 8, 0, 56, 28],
    ["Adam Clarke", 6, 2, 48, 36],
    ["Josh Turner", 5, 3, 44, 39],
    ["Liam Foster", 4, 4, 41, 41],
    ["Ollie Bennett", 4, 4, 40, 42],
    ["Nathan Reed", 3, 5, 37, 46],
    ["Dean Walsh", 2, 6, 34, 48],
    ["Kevin Price", 0, 8, 24, 52],
  ],
  "Division 2": [
    ["Ryan James", 7, 1, 51, 31],
    ["Callum Shaw", 6, 2, 47, 35],
    ["George Hunt", 5, 3, 45, 37],
    ["Aaron Wells", 4, 4, 42, 40],
    ["Sam Doyle", 4, 4, 39, 43],
    ["Jamie Cross", 3, 5, 36, 45],
    ["Ellis Grant", 2, 6, 33, 48],
    ["Owen Marsh", 1, 7, 28, 52],
  ],
  "Division 3": [
    ["Harry Dixon", 8, 0, 54, 26],
    ["Freddie Blake", 6, 2, 46, 34],
    ["Toby Sharp", 5, 3, 44, 38],
    ["Archie Lowe", 5, 3, 43, 39],
    ["Ethan Ross", 4, 4, 40, 42],
    ["Charlie Webb", 2, 6, 34, 47],
    ["Leo Fenton", 2, 6, 31, 49],
    ["Finn Harper", 0, 8, 23, 55],
  ],
  "Division 4": [
    ["Steve Young", 7, 1, 50, 32],
    ["Mark White", 6, 2, 47, 35],
    ["Jack Bishop", 5, 3, 43, 39],
    ["Alfie Dunn", 4, 4, 41, 41],
    ["Reece Ford", 4, 4, 39, 43],
    ["Connor Vale", 3, 5, 36, 44],
    ["Bradley Kane", 1, 7, 30, 50],
    ["Jake Preston", 2, 6, 29, 51],
  ],
  "Division 5": [
    ["Dylan Frost", 7, 1, 49, 33],
    ["Max Carter", 6, 2, 46, 36],
    ["Louis Hart", 5, 3, 43, 39],
    ["Oscar Bond", 5, 3, 42, 40],
    ["Theo Barr", 3, 5, 38, 44],
    ["Elliot Payne", 3, 5, 37, 45],
    ["Jenson Rowe", 2, 6, 34, 47],
    ["Bailey Sims", 1, 7, 29, 48],
  ],
  "Division 6": [
    ["Kyle Denton", 8, 0, 53, 27],
    ["Ross Bryant", 5, 3, 44, 38],
    ["Danny Rees", 5, 3, 43, 39],
    ["Aiden Voss", 4, 4, 41, 41],
    ["Corey Lang", 4, 4, 40, 42],
    ["Marcus Pike", 3, 5, 36, 45],
    ["Jordan Wade", 2, 6, 33, 47],
    ["Craig Neale", 1, 7, 28, 49],
  ],
  "Division 7": [
    ["Wayne Todd", 6, 2, 46, 36],
    ["Gary Mellor", 6, 2, 45, 37],
    ["Phil Kearns", 5, 3, 42, 40],
    ["Neil Sutton", 4, 4, 40, 42],
    ["Ian Faulkner", 4, 4, 39, 43],
    ["Barry Nash", 3, 5, 37, 44],
    ["Colin Pratt", 2, 6, 33, 47],
    ["Derek Moss", 2, 6, 32, 48],
  ],
  "Division 8": [
    ["Terry Alcock", 7, 1, 48, 32],
    ["Keith Lambert", 5, 3, 43, 38],
    ["Brian Otter", 5, 3, 42, 39],
    ["Alan Frost", 4, 4, 40, 41],
    ["Roy Hastings", 4, 4, 38, 43],
    ["Trevor Bond", 3, 5, 35, 44],
    ["Vince Carr", 2, 6, 32, 46],
    ["Norman Blythe", 2, 6, 30, 49],
  ],
  "Division 19": [
    ["Simon Wharton", 8, 0, 52, 28],
    ["Peter Aldous", 6, 2, 45, 35],
    ["Martin Coe", 5, 3, 43, 38],
    ["Graham Ives", 4, 4, 40, 40],
    ["Stuart Land", 4, 4, 38, 42],
    ["Robert Pyne", 2, 6, 33, 46],
    ["Anthony Reeve", 2, 6, 31, 48],
    ["Malcolm Groves", 1, 7, 26, 51],
  ],
};

export const standingsData = Object.fromEntries(
  Object.entries(rawDivisions).map(([division, rows]) => [
    division,
    sortStandings(
      rows.map(([name, won, lost, legsFor, legsAgainst]) =>
        buildStanding(name, won, lost, legsFor, legsAgainst),
      ),
    ),
  ]),
);

export const divisions = Object.keys(standingsData);
