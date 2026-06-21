---
sidebar_position: 6
---

# Yazi Cheat Sheet

**Handy yazi commands for file management:**

```bash title="Navigation"
# Move up
k or ↑

# Move down
j or ↓

# Enter directory or open file
l or → or Enter

# Go to parent directory
h or ←
```

```bash title="Jump to Top/Bottom"
# Jump to top of list
g g

# Jump to bottom of list
G
```

```bash title="Go To (g commands)"
# Go to home directory
g h

# Go to config directory
g c

# Go to downloads directory
g d
```

```toml title="Add Custom Go To Commands"
# Add to ~/.config/yazi/keymap.toml
# File might need to be created if there is no custom configs have been added before
[mgr]
prepend_keymap = [
    # Example: Press 'g' then 'p' to jump to your Projects directory
    { on = [ "g", "p" ], run = "cd ~/Code", desc = "Go to Projects [Code directory]" },
]
```

```bash title="Selection"
# Select/deselect current file
Space

# Visual mode (select multiple)
v
# end file selection
Esc

# Select all files
Ctrl+a

# Inverse selection
Ctrl+r
```

```bash title="File Operations"
# Copy (yank) selected files
y

# Cut selected files
x

# Paste files
p

# Cancel copy/cut operation
Y

# Move to trash
d

# Create a new file
# ends with / for directories
a

# Rename file
r

# Toggle hidden files
.
```

```bash title="Run Shell Command"
# Run shell command
:

# Run a shell command (block until finishes)
; (semicolon)
```

```bash title="Filter (Search within current directory)"
# Filter files in current directory
f

# Clear filter (or do an empty filter)
Esc

```

```bash title="Search"
# Search files by name
s

# Search by file content (ripgrep)
S
```

```bash title="Sorting"
# Sort by: modified time, size, name, etc.
, (comma)

# Reverse sort order
. (period)
```
