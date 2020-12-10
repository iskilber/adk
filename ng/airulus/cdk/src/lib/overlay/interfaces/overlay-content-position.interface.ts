export interface IAirulusOverlayContentPosition {
  vertical: 'top' | 'bottom' | 'center' | string;
  horizontal: 'left' | 'center' | 'right' | string;
  anchor?: DOMRect;
  horizontalPadding?: string;
  verticalPadding?: string;
}