import {describe, it, expect} from 'vitest';
import {YAMS} from './YAMS.js';

describe('YAMS Game', () => {
  it('should create a new YAMS game instance', () => {
    const game = new YAMS();
    expect(game).toBeInstanceOf(YAMS);
  });

  it('should return 50 for a YAMS roll', () => {
    const game = new YAMS();
    expect(game.score([[1, 1, 1, 1, 1]])).toBe(50);
  });
});