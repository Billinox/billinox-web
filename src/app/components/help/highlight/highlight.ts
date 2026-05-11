import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-highlight',
  imports: [],
  templateUrl: './highlight.html',
  styleUrl: './highlight.css',
})
export class Highlight implements OnChanges {
  @Input() query!: string;
  @Input() text!: string;

  public parts: string[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    this.setParts();
  }

  setParts() {
    // console.log("Query", this.query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
    if (!this.query.trim()) {
      this.parts = this.text.split('');
      return;
    }

    this.parts = this.text.split(
      new RegExp(
        `(${this.query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`,
        'ig',
      ),
    );
  }
}
