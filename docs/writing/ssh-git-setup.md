---
sidebar_label: 'SSH Keys & Git Setup'
sidebar_position: 6
---

# SSH Keys & Git Setup — Field Notes for Future Me

## What is an SSH Key?

A two-part system that proves your identity without a password:

- **Private key** (`~/.ssh/id_ed25519`) — yours alone, never share it, never moves off your machine
- **Public key** (`~/.ssh/id_ed25519.pub`) — share freely, lives on servers/GitHub

When you connect, the server challenges you to prove you have the private key. The math works out, you're in — your private key never travels over the network.

---

## Passphrase

An optional password that encrypts your private key file on disk. Without it, anyone who gets the file can use it. **Always use one.**

---

## ssh-agent

A background process that holds your decrypted key in memory so you don't type the passphrase constantly. On Mac it runs automatically at login.

### One-time setup (Mac)

Create `~/.ssh/config` if it doesn't exist:

```bash
touch ~/.ssh/config
```

Add to it:

```
Host *
  UseKeychain yes
  AddKeysToAgent yes
  IdentityFile ~/.ssh/id_ed25519
```

Add your key to the agent:

```bash
ssh-add --apple-use-keychain ~/.ssh/id_ed25519
```

After this, the passphrase is stored in Mac Keychain and loads automatically — even after reboots.

---

## Verify Everything Works

```bash
# Check agent has your key loaded
ssh-add -l

# Test GitHub connection
ssh -T git@github.com
# Expected response: "Hi username! You've successfully authenticated..."
```

---

## GitHub Setup

1. Copy your public key: `cat ~/.ssh/id_ed25519.pub`
2. GitHub → Settings → SSH Keys → New SSH Key
3. Upload as **Authentication** key

### Authentication vs Signing keys

- **Authentication** — proves _you_ are you when pushing/pulling. This is what you need.
- **Signing** — cryptographically signs individual commits so they get a "Verified" badge. Optional, for later.

---

## Git Identity

Not related to authentication — just metadata baked into every commit:

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

The email must match your GitHub account email so GitHub links commits to your profile and shows your avatar. The name is just a freeform label — Git doesn't validate it against anything.

### How it relates to your GitHub username

- **GitHub username** — your account identity, profile URL, repo ownership
- **git user.name** — freeform label on commits, anything you want
- **git user.email** — the bridge: when it matches your GitHub email, commits link to your account

---

## The One Thing To Remember

Private key = secret. Public key = shareable. Email = must match GitHub. Everything else is just plumbing.

---

Resources: https://docs.github.com/en/authentication/connecting-to-github-with-ssh/about-ssh
