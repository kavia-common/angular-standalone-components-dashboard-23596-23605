import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FileTreeNode } from '../ui/file-tree/file-tree.models';

/**
 * Simple RxJS state container for file tree UI.
 * Used by the IDE-like sidebar to track selection and expanded folders.
 */
@Injectable({ providedIn: 'root' })
export class FileTreeStateService {
  private readonly expandedIdsSubject = new BehaviorSubject<Set<string>>(new Set());
  readonly expandedIds$ = this.expandedIdsSubject.asObservable();

  private readonly selectedIdSubject = new BehaviorSubject<string | null>(null);
  readonly selectedId$ = this.selectedIdSubject.asObservable();

  /**
   * PUBLIC_INTERFACE
   * Toggles a folder expanded/collapsed by id.
   */
  toggleExpanded(id: string): void {
    const next = new Set(this.expandedIdsSubject.value);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    this.expandedIdsSubject.next(next);
  }

  /**
   * PUBLIC_INTERFACE
   * Expands a folder by id.
   */
  expand(id: string): void {
    const next = new Set(this.expandedIdsSubject.value);
    next.add(id);
    this.expandedIdsSubject.next(next);
  }

  /**
   * PUBLIC_INTERFACE
   * Collapses a folder by id.
   */
  collapse(id: string): void {
    const next = new Set(this.expandedIdsSubject.value);
    next.delete(id);
    this.expandedIdsSubject.next(next);
  }

  /**
   * PUBLIC_INTERFACE
   * Sets selected node id.
   */
  select(id: string | null): void {
    this.selectedIdSubject.next(id);
  }

  /**
   * PUBLIC_INTERFACE
   * Convenience: expands parents along a path of nodes.
   */
  expandPath(path: FileTreeNode[]): void {
    const next = new Set(this.expandedIdsSubject.value);
    for (const node of path) {
      if (node.type === 'folder') next.add(node.id);
    }
    this.expandedIdsSubject.next(next);
  }
}
