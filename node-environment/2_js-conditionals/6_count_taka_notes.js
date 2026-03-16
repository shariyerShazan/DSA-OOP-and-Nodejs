const countNote = (taka, noteObj) => {
  if (typeof taka !== "number" || isNaN(taka) || taka < 0) {
    return "Invalid input";
  }

  const result = {};

  const notes = Object.values(noteObj).sort((a, b) => b - a);

  for (const note of notes) {
    const count = Math.floor(taka / note);

    if (count > 0) {
      result[note] = count;
      taka = taka % note;
    }
  }

  return result;
};

const noteArr = {
  NOTE_500: 500,
  NOTE_200: 200,
  NOTE_100: 100,
  NOTE_50: 50,
  NOTE_20: 20,
  NOTE_10: 10,
  NOTE_5: 5,
  NOTE_2: 2,
  NOTE_1: 1,
};

console.log(countNote(5673, noteArr));
