---
sidebar_position: 1
---

# Git Cheat Sheet

```bash title="Revert a commit"
git reset --hard HEAD~1
```

```bash title="Revert a commit but keep changes staged"
git reset --soft HEAD~1
```

```bash title="Combining past commits into one"
git rebase -i HEAD~1
```

You can change the last number to revert the number of commits you want to revert

```bash title="Pushing the modified up to remote branch"
git push origin HEAD --force
```

```bash title="Prune local branches that are no longer in remote"
git remote prune origin
```

```bash title="Stash everything including new files"
git stash -u
```
