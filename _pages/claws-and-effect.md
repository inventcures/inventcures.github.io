---
layout: archive
title: "Claws & Code"
permalink: /claws-and-effect/
author_profile: true
---

# Claws & Code (Claws and Effect) 🦞⚡

**Transforming programming from typing code into orchestrating cognitive processes.**

Inspired by the shift towards "Agentic Engineering," this project implements the **Orchestrator-Worker** paradigm. It shifts the human role to defining high-level objectives in English, while a long-running Orchestrator ("Claw") manages multiple parallel execution instances ("Code") via a reactive Pub/Sub event router.

<p align="center">
  <a href="https://github.com/inventcures/claws-and-effect" class="btn btn--primary">View on GitHub</a>
</p>

## 🌟 Core Architecture

### 1. The Orchestrator ("Claw")
The "Cognitive Brain." It receives a high-level English objective, breaks it down into a dynamic graph of tasks, and manages the execution lifecycle. Instead of a rigid DAG, the Claw uses a **Triage Router** to handle complex, real-world workflows dynamically.

### 2. The Workers ("Code Instances")
The "Specialized Hands." Atomic, ephemeral, and focused. Each worker executes a **Tenacity Loop** (Research -> Strategize -> Act -> Verify). They don't know about each other; they simply do their job and loudly emit domain events (e.g., `invoice:parsed`, `env:ready`) when successful.

### 3. Event-Driven Triage Router (Pub/Sub)
A fully reactive event broker. Downstream agents subscribe to events. When an upstream worker finishes, it publishes an event to the queue, instantly waking up any relevant downstream workers. This allows for massive decoupling, infinite branching, and dynamic workflows without changing the core orchestrator logic.

### 4. The Shared Memory Ledger
A persistent "Notes for Self" system. Since workers are ephemeral, they use the Memory Ledger to brief newly spawned Code instances with necessary context without overflowing their active token windows.

## 🖥️ The Perceptive UI: "The Swimlane Matrix"

When managing parallel AI agents, a linear chat feed is the wrong UX. We built a bespoke, high-density, industrial-cybernetic interface focusing on **Parallelism**.

*   **The Swimlane Architecture:** The main workspace is filled with horizontal "Swimlanes", each representing an active parallel Code Instance.
*   **Keyboard-Driven Focus Mode:** Use the arrow keys to quickly cycle through active parallel workers. Press `Space` to expand a focused swimlane and reveal its raw, internal Tenacity Loop logs in a built-in terminal window.
*   **Real-time Event Streaming:** The backend uses WebSockets to stream granular internal state changes, thought streams, and pub/sub events directly to the UI without polling.
*   **The Claw Hub:** A persistent left sidebar showing the Orchestrator's high-level logic and the shared Memory Ledger.

## 🚀 Getting Started

This project is built for extreme speed and low overhead using `FastAPI` and `uv`.

```bash
# Clone the repository
git clone https://github.com/inventcures/claws-and-effect.git
cd claws-and-effect

# Create a virtual environment and install dependencies
uv venv
source .venv/bin/activate
uv pip install -r requirements.txt

# Start the Perceptive UI Server
uvicorn main:app --host 0.0.0.0 --port 8000
```
