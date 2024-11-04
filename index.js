import seedrandom from "seedrandom";

export const letters = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;

/**
 * Gets the seed based on current date
 * 
 * @returns {number} The seed
 */
export function getSeed() {
    return Math.floor(new Date().getTime() / 1000);
}

/**
 * Generates text.
 * 
 * @param {number?} length The text length
 * @param {number?} seed The seed; if not set, defaults to current epoch in seconds
 * @returns {string} The generated text
 */
export function genText(length = 500, seed = null) {
    if(seed === null)
        seed = getSeed();
    const rng = seedrandom(seed);
    let text = "";
    for(let i = 0; i < length; i++)
        text += letters[Math.floor(rng() * letters.length)];
    return text;
}