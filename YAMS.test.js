import {describe, it, expect} from 'vitest';
import {YAMS} from './YAMS.js';

describe('Jeux de YAMS', () => {
  it('doit créer une nouvelle instance de jeu YAMS', () => {
    const game = new YAMS();
    expect(game).toBeInstanceOf(YAMS);
  });

  it('doit retourner 50 pour un lancer de YAMS', () => {
    const game = new YAMS();
    expect(game.score([[1, 1, 1, 1, 1]])).toBe(50);
  });

  it("doit retourner la somme des dés lorsqu'il s'agit d'un lancer de chance", () => {
    const game = new YAMS();
    expect(game.score([[1, 2, 3, 4, 6]])).toBe(16);
  })
  it("doit retourner 40 pour une grande suite 1-5", () => {
    const game = new YAMS();
    expect(game.score([[1, 2, 3, 4, 5]])).toBe(40);
  })
  it("doit retourner 40 pour une grande suite 2-6", () => {
  const game = new YAMS();
  expect(game.score([[2, 3, 4, 5, 6]])).toBe(40);
});
});
