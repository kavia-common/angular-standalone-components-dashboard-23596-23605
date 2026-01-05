import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FileTreeComponent } from '../../ui/file-tree/file-tree.component';
import { MOCK_FILE_TREE } from '../../ui/file-tree/mock-file-tree';

@Component({
  selector: 'app-ide-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, FileTreeComponent],
  templateUrl: './ide-layout.component.html',
  styleUrl: './ide-layout.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IdeLayoutComponent {
  readonly tree = MOCK_FILE_TREE;
}
