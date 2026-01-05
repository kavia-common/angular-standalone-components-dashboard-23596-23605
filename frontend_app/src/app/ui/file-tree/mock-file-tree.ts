import { FileTreeNode } from './file-tree.models';

/**
 * Mock tree based on assets/file_tree_sidebar_design_notes.md.
 * We keep labels close to the screenshot but avoid claiming exact fidelity.
 */
export const MOCK_FILE_TREE: FileTreeNode[] = [
  {
    id: 'root',
    label: 'td-to-do-shell-app',
    type: 'folder',
    hasStatusDot: true,
    children: [
      { id: 'tbd', label: 'tbd', type: 'folder', hasStatusDot: true, children: [] },
      { id: 'public', label: 'public', type: 'folder', hasStatusDot: true, children: [] },
      {
        id: 'src',
        label: 'src',
        type: 'folder',
        hasStatusDot: true,
        children: [
          {
            id: 'src-app',
            label: 'app',
            type: 'folder',
            hasStatusDot: true,
            children: [
              {
                id: 'features',
                label: 'features',
                type: 'folder',
                hasStatusDot: true,
                children: [
                  {
                    id: 'login',
                    label: 'login',
                    type: 'folder',
                    hasStatusDot: true,
                    children: [
                      { id: 'login-html', label: 'login.component.html', type: 'file', ext: 'html', hasStatusDot: true },
                      { id: 'login-scss', label: 'login.component.scss', type: 'file', ext: 'scss', hasStatusDot: true },
                      { id: 'login-ts', label: 'login.component.ts', type: 'file', ext: 'ts', hasStatusDot: true },
                      {
                        id: 'home',
                        label: 'home',
                        type: 'folder',
                        hasStatusDot: true,
                        children: [{ id: 'home-app-ts', label: 'app.component.ts', type: 'file', ext: 'ts', hasStatusDot: true }],
                      },
                      {
                        id: 'repo',
                        label: 'repo',
                        type: 'folder',
                        hasStatusDot: true,
                        children: [{ id: 'repo-app-ts', label: 'app.component.ts', type: 'file', ext: 'ts', hasStatusDot: true }],
                      },
                      { id: 'tsconfig-feature', label: 'tsconfig.feature.ts', type: 'file', ext: 'ts', hasStatusDot: true },
                    ],
                  },
                ],
              },
            ],
          },
          { id: 'app-config', label: 'app.config.ts', type: 'file', ext: 'ts', hasStatusDot: true },
          { id: 'app-routes', label: 'app.routes.ts', type: 'file', ext: 'ts', hasStatusDot: true },
          { id: 'bootstrap', label: 'bootstrap.ts', type: 'file', ext: 'ts', hasStatusDot: true },
          { id: 'index-html', label: 'index.html', type: 'file', ext: 'html', hasStatusDot: true },
          { id: 'main-server', label: 'main.server.ts', type: 'file', ext: 'ts', hasStatusDot: true },
          { id: 'main-ts', label: 'main.ts', type: 'file', ext: 'ts', hasStatusDot: true },
          { id: 'server-ts', label: 'server.ts', type: 'file', ext: 'ts', hasStatusDot: true },
          { id: 'styles-scss', label: 'styles.scss', type: 'file', ext: 'scss', hasStatusDot: true },
          { id: 'test-setup', label: 'test-setup.ts', type: 'file', ext: 'ts', hasStatusDot: true },
          { id: 'eslint', label: 'eslint.config.mjs', type: 'file', ext: 'mjs', hasStatusDot: true },
        ],
      },
    ],
  },
];
