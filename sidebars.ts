import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // Technical documentation sidebar
  tutorialSidebar: [
    'intro',
    'project-overview',
    {
      type: 'category',
      label: 'Development Workflow',
      items: [
        'workflow/index',
        'workflow/github-workflow',
      ],
    },
    {
      type: 'category', 
      label: 'Coding Conventions',
      items: [
        'conventions/index',
      ],
    },
    {
      type: 'category',
      label: 'Frontend Development',
      items: [
        'frontend/index',
        'frontend/file-structure',
      ],
    },
    {
      type: 'category',
      label: 'Backend Development', 
      items: [
        'backend/index',
        'backend/file-structure',
      ],
    },
  ],
};

export default sidebars;
