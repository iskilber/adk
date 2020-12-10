import {
  BehaviorSubject,
  fromEvent,
  Subject
  } from 'rxjs';
import {
  debounceTime,
  filter,
  share,
  skip,
  takeUntil,
  tap
  } from 'rxjs/operators';
import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  Output
  } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import {
  FILE_FILTER_NOT,
  filterFileByMimeTypes,
  filterFileMaxBySize,
  fromFileList,
  InvalidFileMimeTypesError,
  InvalidFileSizeError
  } from '@airulus/cdk';
import { IAirulusFileDropFilesEvent } from '../interfaces';

@Directive({
  selector: '[arlFileDrop]',
})
export class AirulusFileDropDirective implements OnInit, OnDestroy { 

  private dragging$ = new BehaviorSubject(false);

  private destroy$ = new Subject();

  /**
   * Accepted file mime types
   */
  @Input()
  public fileAccept: '*' | string[];

  @Input()
  public maxSize: number;

  @Output()
  public documentDragStart = new EventEmitter();

  @Output()
  public documentDragEnd = new EventEmitter();

  @Output()
  public dragError = new EventEmitter<any>();

  @Output()
  public files = new EventEmitter<IAirulusFileDropFilesEvent>();

  @HostListener('dragover', ['$event'])
  public onDragOver(event: Event) {
    // stopPropagation would break the global listener!
    event.preventDefault();
  }

  @HostListener('dragenter', ['$event'])
  public onDragEnter(event: Event) {
    // stopPropagation would break the global listener!
    event.preventDefault();
  }

  @HostListener('drop', ['$event'])
  public onDrop(event: DragEvent) {
    event.stopPropagation();
    event.preventDefault();

    const filesArr = fromFileList(event.dataTransfer.files);
    const files = filesArr
      .filter(filterFileByMimeTypes(this.fileAccept))
      .filter(filterFileMaxBySize(this.maxSize));
    const rejectedInvalidMimeType = filesArr.filter(
      filterFileByMimeTypes(this.fileAccept, FILE_FILTER_NOT));
    const rejectedExceededSizeLimit = filesArr.filter(
      filterFileMaxBySize(this.maxSize, FILE_FILTER_NOT));

    this.files.next({ files, rejectedExceededSizeLimit, rejectedInvalidMimeType });

    if (rejectedInvalidMimeType.length > 0) {
      this.dragError.next(new InvalidFileMimeTypesError(filesArr, this.fileAccept));
    } else if (rejectedExceededSizeLimit.length > 0) {
      this.dragError.next(new InvalidFileSizeError(filesArr, this.maxSize));
    }
  }

  constructor(
    @Inject(DOCUMENT)
    private document: Document,
    private elementRef: ElementRef
  ) {}

  public ngOnInit() {
    fromEvent(document, 'dragenter')
      .pipe(
        takeUntil(this.destroy$),
        filter((event: DragEvent) => 
            event.dataTransfer.types.includes('Files')),
        filter(() => !this.dragging$.getValue()))
      .subscribe((event: DragEvent) => {
        this.dragging$.next(true);
      });
    fromEvent(document, 'dragover')
      .pipe(
        takeUntil(this.destroy$),
        filter(() => this.dragging$.getValue()),
        debounceTime(150))
      .subscribe((event: DragEvent) => {
        this.dragging$.next(false);
      });

    document.addEventListener('drop', (event) => {
      event.preventDefault();
    })

    fromEvent(document, 'drop')
      .pipe(takeUntil(this.destroy$))
      .subscribe((event: DragEvent) => {
        event.preventDefault();
        event.stopPropagation();
      })

    this.dragging$.pipe(skip(1)).subscribe((isDragging) => {
      if (isDragging) {
        this.documentDragStart.next();
      } else {
        this.documentDragEnd.next();
      }
    })
  }

  public ngOnDestroy() {
    this.destroy$.next();
  }
}