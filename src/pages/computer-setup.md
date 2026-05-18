---
title: My Mac Setup Guide
---

# My Mac Setup Guide

This is my personal guide for setting up a new Mac computer. These are the settings and configurations I use to optimize my workflow.

## System Preferences

### Trackpad Settings

**System Settings → Trackpad**

- **Tracking Speed**: Set to ~90% (almost maximum)
- **Secondary Click**: Two fingers
- **Tap to Click**: Enable this option

**System Settings → Accessibility → Pointer Control → Trackpad Options**

- **Dragging style**: Three Finger Drag

### Dock Settings

**System Settings → Desktop & Dock**

- **Position on screen**: Left
- **Show suggested and recent apps in Dock**: Disable (turn off)

### Appearance

**System Settings → Appearance**

- **Appearance**: Dark mode

### Hot Corners

**System Settings → Desktop & Dock → Hot Corners**

- Turn off all hot corners (set each to "-" or "Do Nothing")

## Development Tools

### Homebrew

Homebrew is a package manager for macOS that makes installing software and tools easy.

**Install Homebrew:**

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

After installation, follow the on-screen instructions to add Homebrew to your PATH.
With Homebrew installed, you can now install a list of tools

### AI tools

**Install Claude:**

```bash
brew install --cask claude
brew install --cask claude-code
```

**Claude code extensions:**

```bash
claude plugin marketplace add JuliusBrussee/caveman && claude plugin install caveman@caveman
```

More info: [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman)

### IDE's

```bash
brew install --cask visual-studio-code
```

#### Preferred VS Code Extensions

These are my go-to extensions for an optimal development experience:

- **GitStash** - Manage git stashes easily
- **GitLens** - Git supercharged (Note: looking for an alternative)
- **Jest** - JavaScript testing framework support
- **Todo Tree** - Track TODO comments across your project
- **vscode-icons** - Beautiful file icons in the explorer
- **Bookmarks** - Mark lines and jump to them quickly
- **Prettier** - Code formatter (Note: need to understand configuration better)
- **ESLint** - JavaScript linter (Note: need to understand configuration better)

### Terminal set up

My current terminal set up is:

- Ghostty: a fast GPU-accelerated terminal emulator
- Oh My ZSH: a framework for managing your Zsh configuration with themes and plugins.

```bash
# Ghostty
brew install --cask ghostty

# Oh My ZSH
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

### CLI Tools

#### asdf

asdf is a version manager for multiple programming languages and tools.

```bash
# asdf
brew install asdf

# Add to your `~/.zshrc` so add to your PATH
export PATH="${ASDF_DATA_DIR:-$HOME/.asdf}/shims:$PATH"

# Restart Terminal
source ~/.zshrc
```

You can find commands on usage [here](/docs/writing/tools-cheat-sheets/AsdfCheatSheet)

#### 3rd party tools

- AWS: [Configuration steps](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-quickstart.html)
- Github: useful for AI tools to create and review PRs

```bash
# AWS ClI,
brew install awscli

# GitHub CLI
brew install gh
```

### Desktop Apps

- Docker Desktop
- Localstack

```bash
brew install --cask docker-desktop
```
