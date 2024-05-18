// Bible verses array
const bibleVerses = [
  "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life. - John 3:16",
  "Trust in the LORD with all your heart and lean not on your own understanding. - Proverbs 3:5",
  "I can do all this through him who gives me strength. - Philippians 4:13",
  "The LORD is my shepherd, I lack nothing. - Psalm 23:1",
  "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. - Philippians 4:6",
  "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life. - John 3:16",
  "Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight. - Proverbs 3:5-6",
  "I can do all this through him who gives me strength. - Philippians 4:13",
  "The Lord is my shepherd; I shall not want. He makes me lie down in green pastures. He leads me beside still waters. He restores my soul. He leads me in paths of righteousness for his name's sake. - Psalm 23:1-3",
  "And we know that in all things God works for the good of those who love him, who have been called according to his purpose. - Romans 8:28",
  "In the beginning, God created the heavens and the earth. - Genesis 1:1",
  "Then the Lord God formed a man from the dust of the ground and breathed into his nostrils the breath of life, and the man became a living being. - Genesis 2:7 ",
  "That is why a man leaves his father and mother and is united to his wife, and they become one flesh. - Genesis 2:24",
  "By the sweat of your brow you will eat your food until you return to the ground, since from it you were taken; for dust you are and to dust you will return. - Genesis 3:19",
  "The Lord had said to Abram, 'Go from your country, your people and your father’s household to the land I will show you. I will make you into a great nation, and I will bless you; I will make your name great, and you will be a blessing. - Genesis 12:1-2",

];

// About yourself descriptions array
const aboutMySelf = [
  "Hi Im Arsenio Banagodos my age is 21 and school in ACSAT.",
  "My strength is God, Family and Friends.",
  "I like to eat some foods like dessert.",
  "The only way to  do great work is to love what you do .",
  "For me God is love, and his love never fails.",
  "I talk to God about my problems and depression.",
  "I will never give up beacuse God is with us.",
  "Prayers is very important to our daily lives.",
];

// Function to generate a random Bible verse
function generateVerse() {
  const randomIndex = Math.floor(Math.random() * bibleVerses.length);
  document.getElementById('verse').textContent = bibleVerses[randomIndex];
}

// Function to generate a random about yourself description
function generateAbout() {
  const randomIndex = Math.floor(Math.random() * aboutMySelf.length);
  document.getElementById('about').textContent = aboutMySelf[randomIndex];
}

// Event listeners for generate buttons
document.getElementById('generateVerse').addEventListener('click', generateVerse);
document.getElementById('generateAbout').addEventListener('click', generateAbout);
