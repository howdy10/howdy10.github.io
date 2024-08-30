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

You can change the last number to revert the number of commits you want to revert

```bash title="Pushing the revert up to remote branch"
git push origin HEAD --force
```

```bash title="Prune local branches that are no longer in remote"
git remote prune origin
```
