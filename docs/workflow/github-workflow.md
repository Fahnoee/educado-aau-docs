# GitHub Workflow

## Pull Request Rules

**Mandatory Requirements:**
- ❌ **No direct merging** - All changes must go through Pull Requests
- ✅ **Minimum 2 approvals** required from other groups before merge
- ✅ **No merge conflicts** allowed
- ✅ **English descriptions** required with brief explanation of changes
<!-- TODO: Add link to checklist part of documentation -->
- ✅ **Pass checklist** created by the Software team in collaboration (link coming soon)

## PR Description Template

### Good PR Example:

**Branch:** `feature/user-login`  
**PR Name:** User Authentication

**Description:**
```
I have implemented:
- Sessions by storing JWT in a cookie
- Included token in backend request  
- Changed the input fields to exclude numbers

I am a bit unsure if the password should have further error messages?
```

## Feature Branch Workflow

### Standard Workflow Steps:

1. **Checkout master branch**
   ```bash
   git checkout main
   ```

2. **Pull latest changes**
   ```bash
   git pull
   ```

3. **Create and switch to new feature branch**
   ```bash
   git checkout -b "feature/branch-name"
   ```

4. **Do your work, run tests, etc.**

5. **Stage all changes**
   ```bash
   git add .
   ```

6. **Commit your changes**
   ```bash
   git commit -m "your message"
   ```

7. **Push branch to remote**
   ```bash
   git push
   ```

8. **Open a Pull Request**
   - Create PR in GitHub
   - Request reviews following guidelines

## Emergency Bug Fix Workflow

If you need to fix a bug while working on a feature:

```bash
# Save your current work
git add .
git stash push -m "WIP on feature/some-new-ui"

# Switch to main and create a bug branch
git checkout main
git pull origin main
git checkout -b bug/fix-navbar

# Fix bug, commit, push
git add .
git commit -m "Fix: navbar disappearing on scroll"
git push -u origin bug/fix-navbar

# Return to feature branch and continue
git checkout feature/some-new-ui
git stash pop
```

## Quick Reference

### Commit & Push
```bash
git add .                    # Stage changes
git commit -m "first commit" # Commit with message
git push                     # Push changes
```