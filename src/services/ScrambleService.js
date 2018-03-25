/* eslint-disable class-methods-use-this */
import { ScrambleServiceException } from '../exceptions/Exceptions';

const cube3x3 = [
  { name: 'R', turns: ['R', 'R\'', 'R2'], restricted: ['L'] },
  { name: 'L', turns: ['L', 'L\'', 'L2'], restricted: ['R'] },
  { name: 'U', turns: ['U', 'U\'', 'U2'], restricted: ['D'] },
  { name: 'D', turns: ['D', 'D\'', 'D2'], restricted: ['U'] },
  { name: 'F', turns: ['F', 'F\'', 'F2'], restricted: ['B'] },
  { name: 'B', turns: ['B', 'B\'', 'B2'], restricted: ['F'] },
];

class ScrambleService {
  constructor(puzzle, scrambleLength) {
    this.puzzle = puzzle;
    this.scrambleLength = scrambleLength;
    this.supportedCubeTypes = ['cube3x3'];
  }

  call() {
    if (this.cubeTypeSupported) return this.generateScramble();
    throw new ScrambleServiceException('Unsupported Cube Type');
  }

  cubeTypeSupported() {
    return this.supportedCubeTypes.includes(this.puzzle);
  }

  generateScramble() {
    return [...Array(this.scrambleLength).keys()].map(() => (
      cube3x3[this.randInt(0, (cube3x3.length - 1))].name
    ));
  }

  randInt(a, b) {
    const lower = Math.min(a, b);
    const upper = Math.max(a, b);
    const diff = upper - lower;

    return Math.floor((Math.random() * (diff + 1)) + lower);
  }
}

export default ScrambleService;
