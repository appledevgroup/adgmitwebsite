# Contributing to ADG Website

This guide explains the basic workflow to follow when contributing to the [ADG Website](https://github.com/appledevgroup/adgmitwebsite).

## 1. Fork the Repository

Go to the repository:

https://github.com/appledevgroup/adgmitwebsite

Click **Fork** and create a fork under your GitHub account.

Then clone your fork:

```bash
git clone https://github.com/<your-username>/adgmitwebsite.git
cd adgmitwebsite
```

## 2. Create a Branch

**Do not make changes directly on `main`.**

Create a new branch for every contribution:

```bash
git checkout -b <type>/<description>
```

Examples:

```text
feature/events-section
fix/navbar-mobile
docs/update-readme
```

Use `feature/`, `fix/`, `docs/` etc. to clearly describe the purpose of the branch.

## 3. Issues First

For a new feature, bug fix or any significant change, **create an issue before starting work**.

Explain what needs to be changed and why.

If an existing issue is already available, you can work on it instead. If someone is already working on that issue, coordinate with them before starting.

## 4. Make Your Changes

Keep your changes related to the issue you're working on.

Before committing, check your changes:

```bash
git status
git diff
```

Make sure you haven't included unrelated files or changes.

## 5. Commit & Push

Use clear commit messages:

```bash
git add .
git commit -m <commit-message>
git push origin <your-branch>
```

Avoid vague messages like:

```text
update
changes
final
fixed
```

## 6. Create a Pull Request

Open a Pull Request from your branch to the repository's `main` branch.

Your PR should:

- Clearly explain what you changed.
- Mention how you tested it.
- Link the issue you're working on.

For example:

```text
Closes #12
```

This connects the PR to issue `#12`.

## 7. Code Review

Maintainers will review your PR and may request changes.

If changes are requested, make them on the **same branch** and push again:

```bash
git add .
git commit -m "fix: address review comments"
git push origin <your-branch>
```

The existing PR will automatically update.

## Rules

- Never push directly to `main`.
- Always create a new, properly named branch.
- Raise an issue before starting significant work.
- Link your PR to the issue it addresses.
- Keep PRs focused on one task.
- Test your changes before opening a PR.
- Don't include unrelated changes.
- Coordinate before working on an issue someone else has taken.
- Ask if you're unsure about anything.

### Workflow

```text
Issue → Branch → Code → Test → Commit → Push → PR → Review → Merge
```

Keep the repository clean, keep your changes focused and make it easy for the next person to understand what you changed.
