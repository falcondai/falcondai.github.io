---
title: Large Language Models-powered Human-Robotic Interactions
date: 2023-03-17
---

Due to the rapid empirical improvements in large language models (LLMs), there is a growing interests in robotics community to leverage them for more natural human-robotic interactions.

At a high level, there is a chasm between the natural language for a human user to express their instructions/goals/questions, such as English, and the _natural_ language for a robot to execute, such as torque commands. This mismatch in native languages make a human-robot conversation difficult. The traditional approaches primarily focus on solving the subproblems, and often in specific environments, such as grounding/reference resolution and efficient motion planning. One frequent shortcoming in this line of approach is the very limited language that a robot can understand (think the small palette of inflexible commands that virtual assistants like Siri can resolve). In fact, the rigidly constructed commands that can be parsed often feel _robotic_. In contrast, LLMs trained on enormous corpus, invite us to solve this challenge in a more holistic way.

## Large language models

LLMs such as OpenAI GPT-3.5 are quite capable of code generation given just a textual description, such as programming problems. Instead of relying on a clever intermediate structured representation, LLMs are trained end-to-end to produce the final answer (by continuing the supplied prompts). Having been trained on the massive corpus covering many topics on the Internet, they seem to have implicitly captured an unprecedented amount of _common sense_ that we share. This capability suggests a way forward beyond the tedious engineering of effectively domain-specific languages for each robot and each environment.

## Approach in Code-as-policies

An interesting recent work attempts to bridge this gap with LLM is [code-as-policies](https://code-as-policies.github.io). This work has some attractive features: it uses a trained LLM without any extra training and LLM generates executable Python code for the robot. But an LLM such as GPT-3.5 cannot perceive an image directly. How can we specialize its generation for a specific situation?

Main ideas:
1. Via prompt engineering, we can reduce the problem into format akin to programming challenges, a domain where LLM has showed some success.
1. We implement (motion) primitives for the environment and related basic functions that serve the motion primitives. They are responsible for the low-level robot control. For example, in the demo below, the only motion primitive is picking from one position and then placing at another position on a tabletop. We also need to implement functions that returns an object (identified by its ID)'s position to support this primitive. These APIs effectively translate information from different sensing modalities into code which LLM can read. And as a whole, they implicitly define an ontology for the environment.
1. With a few examples involving each primitives (few-shot prompting), we show LLM how this specific robot and environment works.
1. LLM does the heavy lifting of grounding (resolving references) and planning which turns instructions into primitives. Interestingly, the solutions can contain unimplemented functions with function names suggestive of their utility. We leverage the "common sense" encoded in LLM to bypass some of the hardest subproblems in robotics, though not without silly mistakes at times.
1. Whenever we encounter an undefined function in the generated code, we prompt the LLM to generate its implementation.
1. Question & answering, conversational capabilities naturally arise via a few appropriate examples and passing past messages in prompts, respectively. Again, no specialized algorithms are needed. A trained LLM already comes with some ability to reply to questions (and generate code that finds the answer) and use contexts.

## Some observations

1. GPT-3.5 seems quite capable in reducing natural language description related to positions into arithmetics of the coordinates.
1. Despite not being a code generation-centric model, `text-davinci-003` tends to output better solutions than `code-davinci-002`.
1. Recursive function generation is a nice idea but it is quite error-prone in practice, e.g., mismatched semantics between a function's usage and its implementation.
1. The solution is very much top-down functionally speaking. LLM has to come up a solution that covers all kinds of possible situations. This seems more complex than necessary: we only need a solution that solves the problem in the _current_ situation.
1. LLM can generate code involving objects not in the scene and that gives error. Generated code can contain syntax errors and it is messy to execute strings as Python code.
1. Prompts can grow pretty long quickly due to the many demonstrative examples and the growing conversational history. This worsens latency and creates a upper limit on the conversational length. How can we maintain a more concise context?
1. Nevertheless I am impressed by how far this solution gets us (in this tabletop environment demo). I also cannot help but think that some of the observed mistakes can be remedied through prompt engineering, e.g., providing better demonstrative examples, adding more concepts. But at some point, will prompt engineering be as tedious as the traditional decompositional solution? The former is an extensional definition whereas the latter, intensional. When is it a good idea to use the latter? Is there some way to combine them?

## Demo

Building on the original demo, I improved the UI and added shortcuts for experimenting with prompting techniques. Chain-of-thought prompting (by asking LLM for a step-by-step explanation) tends to produce a better solution. Explicitly asking LLM to request clarifications could trigger more conversational behaviors when our instructions contain ambiguity.

<iframe
	src="https://falcondai-code-as-policies.hf.space"
	frameborder="0"
	width="850"
	height="1600"
></iframe>
