import seedrandom from "seedrandom";

export const letters = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;

/**
 * Generates text.
 * 
 * @param {number?} length The text length
 * @param {number?} seed The seed; if not set, defaults to current epoch in seconds
 * @returns {string} The generated text
 */
export function genText(length = 500, seed = null) {
    if(seed === null)
        seed = Math.floor(new Date().getTime() / 1000);
    const rng = seedrandom(seed);
    let text = "";
    for(let i = 0; i < length; i++)
        text += letters[Math.floor(rng() * letters.length)];
    return text;
}