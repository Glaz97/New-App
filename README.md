# Basic JavaScript Challenge

**Time limit: 30 minutes**

Welcome. This exercise checks how you write small JavaScript functions, document your code, keep commits clean, and maintain readable quality under time pressure.

## Setup

1. Make sure [Node.js 18+](https://nodejs.org/) is installed.
2. From this folder, run the test suite:

```bash
node --test tests/*.test.js
```

Tests will fail until you implement the functions in `src/`.

## Project layout

```text
src/
  formatFullName.js      ← Task 1
  isValidEmail.js        ← Task 2
  calculateOrderTotal.js ← Task 3
  index.js               ← exports only (do not edit)
tests/
  formatFullName.test.js
  isValidEmail.test.js
  calculateOrderTotal.test.js
```

## Your tasks

Implement **one function per file** in `src/`:

| Task | File | Function | What to build |
|------|------|----------|---------------|
| 1 | `formatFullName.js` | `formatFullName` | Format `"Last, First"` with trimming and empty-input handling |
| 2 | `isValidEmail.js` | `isValidEmail` | Basic email validation (see JSDoc requirements) |
| 3 | `calculateOrderTotal.js` | `calculateOrderTotal` | Sum valid line items and apply tax, rounded to 2 decimals |

Do **not** edit `src/index.js` or any file in `tests/`. Read each file's JSDoc comment carefully. The tests define the expected behavior.

## What we evaluate

### 1. JavaScript

- Correct behavior for normal and edge cases
- Clear, readable logic (no unnecessary complexity)

### 2. Comments

- Keep the existing JSDoc blocks accurate and complete
- Add short inline comments **only** where logic is not obvious
- Do **not** comment every line or restate what the code already says

**Good comment example:**

```javascript
// Reject values that are not whole numbers before calculating quantity.
```

**Avoid:**

```javascript
// Add 1 to x
x = x + 1;
```

### 3. Git commits

Use **one commit per completed task** (3 commits total).

Each commit message should:

- Use the imperative mood (`Add`, `Fix`, `Implement`, not `Added` or `Adding`)
- Summarize **why** or **what**, in one concise line (50–72 characters is ideal)
- Mention the task or function when helpful

**Examples:**

```text
Implement formatFullName with trim and empty checks
Add isValidEmail validation for basic address format
Implement calculateOrderTotal with invalid item filtering
```

**Avoid:**

```text
done
fix
updates
wip
```

Check your history before finishing:

```bash
git log --oneline
```

### 4. Code quality

- Use meaningful variable names
- Prefer early returns for invalid input
- Handle edge cases without breaking valid cases
- Keep functions focused; no dead code or debug `console.log` calls

## Workflow (suggested)

1. Implement **Task 1** in `src/formatFullName.js`, run `node --test tests/*.test.js`, commit.
2. Implement **Task 2** in `src/isValidEmail.js`, run `node --test tests/*.test.js`, commit.
3. Implement **Task 3** in `src/calculateOrderTotal.js`, run `node --test tests/*.test.js`, commit.
4. Skim your code for clarity and comments, then stop when time is up.

## Submission

When time is up (or you finish early):

1. All tests should pass: `node --test tests/*.test.js`
2. You should have **3 meaningful commits** (one per task)
3. Tell your interviewer you are done

Good luck.
