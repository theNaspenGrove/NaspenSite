import React from 'react';

const MessageOfTheMoment: React.FC = () => {
	return (
		<div>
			{SelectMessageOfTheMoment()}
		</div>
	);
	
};

var quirks = [
	'Gamer', 
	'Coder', 
	'Programmer', 
	'Artist', 
	'Writer', 
	'Creator', 
	'Thinker', 
	'Confused', 
	'Helper',
	'Trans' 
];

var phrases = [
	'Forever in progress.',
	'Always learning.',
	'Somewhat broken.', 
	'Processes are my *jam*.'
]

function SelectMessageOfTheMoment() {
	// Select either a random phrase or a 3 unique quirks
	const random = Math.random();
	if (random < 0.5) {
		return SelectRandomPhrase();
	} else {
		return SelectThreeUniqueQuirks();
	}
}

function SelectRandomPhrase() {
	// Clone the messages array to avoid modifying the original array
	let shuffledPhrases = [...phrases];
	shuffleArray(shuffledPhrases);
	

	// Select the first entry in the shuffled array
	return (
		<span>{shuffledPhrases[0]}</span>
	);

}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function SelectThreeUniqueQuirks() {
    // Clone the messages array to avoid modifying the original array
    let shuffledQuirks = [...quirks];
    shuffleArray(shuffledQuirks);
    
    // Select the first three unique entries
    const selectedQuirks = shuffledQuirks.slice(0, 3);
    
    return (
        <span>{selectedQuirks[0]} | {selectedQuirks[1]} | {selectedQuirks[2]}</span>
    );
}

export default MessageOfTheMoment;