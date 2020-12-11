import { AirulusFileUploaderImageResizeService } from '../../services';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
  } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup
  } from '@angular/forms';

@Component({
  selector: 'arl-explorer-file-images-preview',
  templateUrl: './file-images-preview.component.html',
  styleUrls: ['./file-images-preview.component.scss']
})
export class AirulusExplorerFileImagesPreviewComponent implements OnInit {

  public form = new FormGroup({});

  public pending = false;

  @Input()
  public files: File[];

  @Output()
  public formSubmit = new EventEmitter<FormData>();

  @Output()
  public formReset = new EventEmitter<any>();

  @Input()
  public maxWidth: number;

  @Input()
  public quality = 0.9;

  constructor(
    private resizeService: AirulusFileUploaderImageResizeService
  ) { }

  ngOnInit(): void { 
    this.form.addControl('files', 
      new FormArray(this.files.map((file) => new FormControl(file))));
  }

  public get fileControls(): FormControl[] {
    return (this.form.get('files') as FormArray).controls as FormControl[];
  }

  public handleReset(event: Event) {
    event.stopPropagation();

    this.formReset.next();
  }

  public handleSubmit(event: Event) {
    event.stopPropagation();

    Promise.all(this.fileControls.map((control) => this.resizeService
      .resize(
        control.value,
        { maxWidth: this.maxWidth, quality: this.quality }
      )
      .then((blob: Blob) => ({ blob, name: control.value.name }))))
    .then((output: Array<{blob: Blob, name: string}>) => {
      const formData = new FormData();
      output.forEach(({ blob, name }) => formData.append(name, blob));

      this.formSubmit.next(formData);
    })
    .catch((e) => {
      console.error(e);
    });    
  }
}
