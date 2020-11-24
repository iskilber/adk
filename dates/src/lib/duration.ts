import { TimeRange } from './time-range';

export interface DurationParts {
  hours?: number;
  minutes?: number;
  seconds?: number;
  milliseconds?: number;
}

export class Duration {
  public static parseToParts(duration: number) {
    const hours = Math.floor(duration / TimeRange.HOUR);
    const minutes = Math.floor((duration % TimeRange.HOUR) / TimeRange.MINUTE);
    const seconds = Math.floor((duration % TimeRange.MINUTE) / TimeRange.SECOND);
    const milliseconds = duration % TimeRange.SECOND;
  
    return { hours, minutes, seconds, milliseconds };
  }

  public static toNumber(duration: DurationParts): number {
    return ((duration.hours || 0) * TimeRange.HOUR) +
        ((duration.minutes || 0) * TimeRange.MINUTE) +
        ((duration.seconds || 0) * TimeRange.SECOND) +
        (duration.milliseconds || 0);
  }
}