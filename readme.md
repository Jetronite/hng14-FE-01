# 🚀 Frontend Wizards — Stage 0

## Testable Todo Item Card

A clean, modern, and accessible **Todo Task Card component** built with a strong focus on:

* ✅ Testability
* ♿ Accessibility (a11y)
* 📱 Responsiveness

---

## 🧠 Overview

This project implements a **single Todo Card UI component** that simulates a task item you might find in productivity apps.

The goal is to demonstrate:

* Proper semantic HTML
* Accessibility best practices
* Responsive layout design
* Basic interactivity using JavaScript

---

## 🧩 Features

* Task title and description
* Priority indicator (Low / Medium / High)
* Status display (Pending / In Progress / Done)
* Due date with formatted output
* Dynamic time remaining (e.g., *"Due in 3 days"*)
* Completion toggle (checkbox)
* Tags / categories
* Edit & Delete actions (mock interactions)

---

## 🧪 Testability

All critical elements include **`data-testid` attributes** for automated testing.

### Required Test IDs

| Element        | data-testid                 |
| -------------- | --------------------------- |
| Card Container | `test-todo-card`            |
| Title          | `test-todo-title`           |
| Description    | `test-todo-description`     |
| Priority       | `test-todo-priority`        |
| Due Date       | `test-todo-due-date`        |
| Time Remaining | `test-todo-time-remaining`  |
| Status         | `test-todo-status`          |
| Checkbox       | `test-todo-complete-toggle` |
| Tags Container | `test-todo-tags`            |
| Edit Button    | `test-todo-edit-button`     |
| Delete Button  | `test-todo-delete-button`   |

Optional tag identifiers:

* `test-todo-tag-work`
* `test-todo-tag-urgent`

---

## ♿ Accessibility

This component follows accessibility best practices:

* Semantic HTML (`article`, `time`, `button`, `label`, `ul/li`)
* Fully keyboard navigable
* Accessible checkbox with label
* Proper button elements (no div hacks)
* Visible focus states
* Readable color contrast (WCAG AA)

---

## 📱 Responsiveness

Designed to work across all screen sizes:

* **Mobile (320px+)**

  * Full-width layout
  * Stacked content

* **Tablet & Desktop**

  * Max width: ~450px
  * Centered card layout
  * Flexible tag wrapping

No horizontal overflow at any breakpoint.

---

## ⚙️ Behavior

### Completion Toggle

* Marks task as complete
* Updates status to **Done**
* Applies visual strike-through

### Time Remaining

* Displays human-readable time:

  * *Due in X days*
  * *Due tomorrow*
  * *Overdue by X hours*

### Actions

* **Edit** → Logs action to console
* **Delete** → Displays alert (mock behavior)

---

## 🛠 Tech Stack

* HTML5
* CSS3
* Vanilla JavaScript

---

## 🚀 Live Demo

👉 *[Add your deployed link here]*
(Recommended: Vercel or Netlify)

---

## 📂 Repository

👉 *[Add your GitHub repo link here]*
(Hosted on GitHub)

---

## 📌 Notes

* This is a **single component**, not a full Todo app
* Data is hardcoded for demonstration purposes
* Designed to meet strict automated testing requirements

---

## 📅 Deadline

**April 16, 2026**

---

## 🙌 Acknowledgment

Frontend Wizards Challenge — Stage 0
Focused on building strong foundations in UI engineering.