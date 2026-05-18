---
sidebar_position: 1
---

# Git Cheat Sheet

**Handy git commands:**

```bash title="Revert a commit"
# Revert a commit
git reset --hard HEAD~1

# Revert a commit but keep changes staged
git reset --soft HEAD~1

# Combining past commits into one
git rebase -i HEAD~1

# Pushing the modified up to remote branch
git push origin HEAD --force

# Prune local branches that are no longer in remote
git remote prune origin

# Stash everything including new files
git stash -u
```
