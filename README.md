# learn-renovate

A repository created in the process of learning how to integrate Renovate into a monorepo based on pnpm workspace.

## Overview

This repository was created for my research and experimentation to learn:

- How to configure Renovate in a monorepo environment using pnpm workspace
- Behavior verification of automatic dependency updates by Renovate
- Practical integration procedures for Renovate in monorepo

## Structure

This repository has a monorepo structure using pnpm workspace:

```bash
learn-renovate/
├── apps/
│   └── fw/              # Application
│       └── package.json
├── packages/
│   └── core/            # Shared package
│       └── package.json
├── package.json         # Root configuration
├── pnpm-workspace.yaml  # Workspace configuration
└── renovate.json        # Renovate configuration
```

## Renovate Configuration

The [renovate.json](renovate.json) includes the following settings:

- `config:recommended`: Use recommended configuration
- `:semanticCommits`: Use semantic commit messages
- `timezone`: Asia/Tokyo
- `separateMinorPatch`: Separate minor and patch updates
- Group Node.js related dependencies

## Environment

- Node.js
- pnpm

## Setup

```bash
# Install dependencies
pnpm install
```

## Commands

```bash
# Operate fw app
pnpm fw <command>

# Operate core package
pnpm core <command>
```

## Verification Topics

- Automatic PR creation by Renovate
- Dependency management in monorepo
- Integration with pnpm workspace
- Package rule configuration and grouping
