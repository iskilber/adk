export abstract class TimeRange {
  public static SECOND = 1000;

  public static MINUTE = TimeRange.SECOND * 60;

  public static HOUR = TimeRange.MINUTE * 60;

  public static DAY = TimeRange.HOUR * 24;
}