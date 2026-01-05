import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// PrimeNG (minimal usage to validate wiring)
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-components-page',
  standalone: true,
  imports: [CommonModule, ButtonModule, CardModule],
  templateUrl: './components-page.component.html',
  styleUrl: './components-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComponentsPageComponent {
  clicks = 0;

  /** PUBLIC_INTERFACE */
  increment(): void {
    this.clicks += 1;
  }
}
