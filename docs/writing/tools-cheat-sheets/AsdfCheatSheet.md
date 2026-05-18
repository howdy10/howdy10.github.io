---
sidebar_position: 3
---

# asdf Cheat Sheet

asdf is a version manager for multiple programming languages and tools.

**Install asdf:**

```bash
brew install asdf
```

**Add asdf to your PATH:**

Add the following to your `~/.zshrc` file:
Note: This has to be high in your .zshrc to take priority over others.

```bash
export PATH="${ASDF_DATA_DIR:-$HOME/.asdf}/shims:$PATH"
```

Then restart your terminal or run:

```bash
source ~/.zshrc
```

asdf performs a version lookup of a tool in all .tool-versions files from the current working directory up to the $HOME directory. The lookup occurs just-in-time when you execute a tool that asdf manage

```bash title="Handy asdf commands:"
# List all available plugins
asdf plugin list all

# List installed plugins
asdf plugin list

# List all available versions of a tool
asdf list all nodejs

# List installed versions of a tool
asdf list nodejs

# Install a specific version
asdf install nodejs 20.11.0

# Set a version globally (for all projects)
asdf set -u nodejs 20.11.0

# Checks all installed plugins and installed versions
asdf list

# Check current version of plugins
asdf current

# Check current version
asdf current nodejs

# Update asdf plugins
asdf plugin update --all
```
