---
layout: archive
title: "Claws & Code"
permalink: /claws-and-effect/
author_profile: true
---

# Claws & Code (Claws and Effect) 🦞⚡

**Transforming programming from typing code into orchestrating cognitive processes.**

Inspired by the shift towards "Agentic Engineering," this project implements a highly resilient **Orchestrator-Worker** paradigm. It features an event-driven triage system, adversarial quality gates, and a multi-provider "Bring Your Own Key" (BYOK) fallback architecture.

<p align="center">
  <a href="https://github.com/inventcures/claws-and-effect" class="btn btn--primary">View on GitHub</a>
</p>

## 🌟 Core Architecture

### 1. The Orchestrator ("Claw")
The "Cognitive Brain." It receives a high-level English objective and decomposes it into a dynamic graph of tasks. Instead of a rigid DAG, the Claw uses a **Triage Router** to handle complex, reactive workflows where agents trigger each other dynamically based on real-world events.

### 2. The Workers ("Code Instances")
The "Specialized Hands." Each worker executes a **Tenacity Loop** (Research -> Strategize -> Act -> Verify). They are ephemeral and decoupled; they simply perform their task and emit domain events (e.g., `env:ready`, `ui:scaffolded`) to trigger downstream logic.

### 3. Adversarial Quality Gates (Reviewers)
Inspired by "Pair Programming" philosophies, every sub-task must pass a dedicated **Reviewer Agent** before finalization. This adversarial loop ensures that hallucinations or edge cases are caught and sent back for revision before they cascade into the broader system.

### 4. Event-Driven Triage Router (Pub/Sub)
A fully reactive event broker that allows for massive decoupling and infinite branching. Agents subscribe to specific event patterns. When a "Worker" finishes, it publishes an event, instantly waking up the "Reviewer" or the next relevant "Worker" in the pipeline.

### 5. Multi-Provider BYOK with Fallback
A resilient, zero-persistence security model. Users provide their own API keys (Google, OpenAI, Anthropic) directly in the UI. 
*   **Zero-Liability:** Keys are stored exclusively in the browser's `localStorage` and never touch the backend disk.
*   **Prioritized Fallback:** If a primary provider fails (rate limits, downtime), the Orchestrator automatically pivots to your secondary and tertiary keys mid-execution to ensure mission completion.

## 🖥️ The Perceptive UI: "The Swimlane Matrix"

When managing parallel AI agents, a linear chat feed is the wrong UX. We built a bespoke, high-density, industrial-cybernetic interface focusing on **Parallelism**.

*   **The Swimlane Architecture:** Monitor multiple parallel Code Instances in their own dedicated horizontal streams.
*   **Keyboard-Driven Focus Mode:** Cycle through active workers with `↑`/`↓` and press `Space` to expand a focused swimlane, revealing its raw internal logs and cognitive "thoughts."
*   **Weighted Memory Visualizer:** A sidebar feed of the **Memory Ledger** which uses a hybrid scoring algorithm (`0.6 * recency + 0.4 * importance`) to ensure critical context is always surfaced to the agents.
*   **Real-time HUD:** A WebSocket-driven head-up display that pulses and changes state based on whether workers are `Researching`, `Reviewing`, or `Stuck` (triggering escalation).

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
