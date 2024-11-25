import { SimonColors } from '../consts/SimonColors';

describe('Sequence Comparison and Validation', () => {
  it('should validate user input against the correct sequence', () => {
    const simonSequence = [SimonColors.Red, SimonColors.Blue];
    const userInput = [SimonColors.Red];

    const isCorrect = userInput.every((input, index) => input === simonSequence[index]);
    expect(isCorrect).toBe(true); // Input matches Simon sequence
  });

  it('should detect incorrect user input', () => {
    const simonSequence = [SimonColors.Red, SimonColors.Blue];
    const userInput = [SimonColors.Red, SimonColors.Green];

    const isCorrect = userInput.every((input, index) => input === simonSequence[index]);
    expect(isCorrect).toBe(false); // Input does not match Simon sequence
  });
});
