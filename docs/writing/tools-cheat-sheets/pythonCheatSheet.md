---
sidebar_position: 4
---

# Python Environment Guide

## Installing

You can install and manage version via asdf

```bash
asdf install python 3.13.5
asdf set -u python 3.13.5

# verify
which python && which python3
python --version && python3 --version
```

Historically:

- python = Python 2.X (old systems)
- python3 = Python 3.X (explicit)

Modern systems (and asdf) map both to Python 3.

## Python's package manager (pip)

This ships with python, so each version (if switching with asdf will have it's own pip version). Or each virtual env.

```bash
pip --version

# See what is installed on the current env
pip --list
```

The modern way for a project to handle it's packages is through a `pyproject.toml`, there is old ways through `requirements.txt`

```bash title="Useful commands"
pip install <package>       # install
pip install                 # install packages for project
pip install '.[dev]'        # install packages for project include optional dev dependencies
pip install -r requirements.txt
pip uninstall <package>     # uninstall, -y to skip confirmation
pip show <package>

```

## How `.venv` Works

A virtual environment is an isolated Python installation scoped to a project. It has its own `pip`, `python`, and installed packages — completely separate from the system or asdf Python.

```
path/to/project/
└── .venv/
    └── bin/
        ├── python
        ├── pip
        ├── black
        ├── isort
        └── ...
```

Packages installed into `.venv` don't affect anything outside the project.

## Creating the venv

From `path/to/project/`:

```bash
python -m venv .venv
```

Then install project deps using the **venv's pip**, not bare `pip`:

```bash
.venv/bin/pip install '.[dev]'
```

> Using bare `pip` installs into wherever `pip` resolves on PATH — with asdf that's the asdf-managed Python, not the venv.

## Two Ways to Use the venv

**Option A — activate (bare commands work):**

```bash
source .venv/bin/activate   # puts .venv/bin first on PATH
pip install ...             # now uses venv pip
black .                     # now uses venv black
deactivate                  # exit venv
```

**Option B — explicit paths (no activation needed):**

```bash
.venv/bin/pip install '.[dev]'
.venv/bin/black ops/
```

`./blacktop format` uses Option B — no activation required.

## asdf Shims

asdf wraps CLI tools (like `black`, `python`) in shim scripts at `~/.asdf/shims/`. When you run `black`, asdf intercepts it, checks `.tool-versions`, and routes to the right version.

If you install `black` into asdf's Python then uninstall it, the shim stays but points nowhere:

```
No executable black found for current version.
```

Fix stale shims after uninstalling:

```bash
asdf reshim python
```

This regenerates shims based on what's actually installed now.

## venv vs asdf Python vs Global

| Location                                  | Where         | Scope                                  |
| ----------------------------------------- | ------------- | -------------------------------------- |
| `.venv/bin/black`                         | project venv  | this project only                      |
| `~/.asdf/installs/python/3.x.x/bin/black` | asdf Python   | all projects using that Python version |
| `/usr/local/bin/black` (brew)             | system global | everywhere                             |

**Prefer venv** — keeps versions locked to the project and doesn't pollute shared environments.

## Uninstalling Packages from asdf Python

If you accidentally `pip install` into asdf Python:

```bash
# check what landed there
~/.asdf/installs/python/3.13.5/bin/pip list

# uninstall
~/.asdf/installs/python/3.13.5/bin/pip uninstall <package1> <package2> -y

# clean up stale shims
asdf reshim python
```

## Checking Which black is Being Used

```bash
which black          # shows path (shim or venv or global)
black --version      # confirm version

# check venv specifically
ops/blackops/application/.venv/bin/black --version
```
