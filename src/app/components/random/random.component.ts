import { Component, Input } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-random',
  imports: [InputTextModule, FormsModule, FloatLabelModule],
  templateUrl: './random.component.html',
})
export class RandomComponent {
  value = '';
}
