import { AsyncPipe, NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { FileTreeStateService } from '../../state/file-tree-state.service';
import { FileTreeNode } from './file-tree.models';

@Component({
  selector: 'app-file-tree',
  standalone: true,
  imports: [NgFor, NgIf, NgStyle, NgClass, AsyncPipe],
  templateUrl: './file-tree.component.html',
  styleUrl: './file-tree.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FileTreeComponent {
  @Input({ required: true }) nodes: FileTreeNode[] = [];
  @Input() depth = 0;

  constructor(private readonly treeState: FileTreeStateService) {}

  /**
   * PUBLIC_INTERFACE
   * Expanded node ids observable (read-only) used by template.
   */
  get expandedIds$(): Observable<Set<string>> {
    return this.treeState.expandedIds$;
  }

  /**
   * PUBLIC_INTERFACE
   * Selected node id observable (read-only) used by template.
   */
  get selectedId$(): Observable<string | null> {
    return this.treeState.selectedId$;
  }

  /** PUBLIC_INTERFACE */
  trackById(_index: number, node: FileTreeNode): string {
    return node.id;
  }

  /** PUBLIC_INTERFACE */
  toggle(node: FileTreeNode): void {
    if (node.type !== 'folder') return;
    this.treeState.toggleExpanded(node.id);
  }

  /** PUBLIC_INTERFACE */
  select(node: FileTreeNode): void {
    this.treeState.select(node.id);
  }

  isExpanded(expandedIds: Set<string>, node: FileTreeNode): boolean {
    return node.type === 'folder' && expandedIds.has(node.id);
  }

  indentPx(): number {
    // From design notes: ~12–16px per depth; we use 14px.
    return 6 + this.depth * 14;
  }

  caretRotation(expanded: boolean): string {
    // Caret rotates 90° when expanded.
    return expanded ? 'rotate(90deg)' : 'rotate(0deg)';
  }

  iconFor(node: FileTreeNode): { label: string; kind: 'folder' | 'file' } {
    if (node.type === 'folder') return { label: 'folder', kind: 'folder' };
    return { label: 'file', kind: 'file' };
  }
}
