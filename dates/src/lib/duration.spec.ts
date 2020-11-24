import { Duration } from './duration';
import { TimeRange } from './time-range';

describe('Duration', () => {
  describe('parseToParts()', () => {
    it ('should return correct hours count', () => {
      const time = 5 * TimeRange.HOUR + 1425;

      const { hours } = Duration.parseToParts(time);

      expect(hours).toEqual(5);
    });

    it ('should return correct minutes count', () => {
      const time = 8 * TimeRange.MINUTE + 1234;

      const { minutes } = Duration.parseToParts(time);

      expect(minutes).toEqual(8);
    })

    it ('should return correct seconds count', () => {
      const time = 8 * TimeRange.SECOND + 123;

      const { seconds } = Duration.parseToParts(time);

      expect(seconds).toEqual(8);
    })
  });

  describe('toNumber()', () => {
    it ('should compute a number', () => {
      const duration = {
        hours: 2,
        minutes: 2,
        seconds: 2,
      };
      const numVal = Duration.toNumber(duration);

      expect(numVal).toEqual(7322000)
    });

    it ('should get one second', () => {
      const duration = {hours: 0, minutes: 0, seconds: 1, milliseconds: 0}
      const numVal = Duration.toNumber(duration);

      expect(numVal).toEqual(1000);
    })
  })
});
