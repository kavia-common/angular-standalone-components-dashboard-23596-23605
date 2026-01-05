/**
 * File-tree node model used by the sidebar tree.
 */
export type FileTreeNodeType = 'folder' | 'file';

export interface FileTreeNode {
  id: string;
  label: string;
  type: FileTreeNodeType;

  /**
   * Optional file extension for rendering file-type icon hints.
   * Example: "ts", "html", "scss", "json"
   */
  ext?: string;

  /**
   * If true, show right-aligned green status dot like the screenshot.
   */
  hasStatusDot?: boolean;

  children?: FileTreeNode[];
}
