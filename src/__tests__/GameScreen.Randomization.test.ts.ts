import { SimonColors } from '../consts/SimonColors';

describe('Sequence Randomization Logic', () => {
  const getRandomColor = (): SimonColors => {
    const colors = Object.values(SimonColors) as SimonColors[];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  it('should generate a random Simon color from the valid set of colors', () => {
    const colors = Object.values(SimonColors);
    const randomColor = getRandomColor();

    expect(colors).toContain(randomColor); // Ensure the random color is valid
  });
});
