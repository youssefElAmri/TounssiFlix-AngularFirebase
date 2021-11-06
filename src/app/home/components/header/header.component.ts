import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  @Output() search: EventEmitter<string> = new EventEmitter();
  text = '';
  constructor() {}

  ngOnInit(): void {}

  onSearch(): void {
    this.search.emit(this.text);
  }
}
