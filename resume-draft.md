# Ben Lewis
Brisbane, Queensland, Australia

## Professional Summary

Senior Software Engineer with 5+ years of experience designing backend-heavy systems for large-scale optimisation and scheduling software. Strong track record in domain modelling, internal DSL design, performance optimisation, and integration test architecture, with end-to-end ownership across architecture, implementation, rollout, and iteration. Delivered reusable platform capabilities adopted across multiple products, reduced core computational workflows from 1+ hour to 11 seconds, and built test infrastructure that scaled integration coverage from 10-20 tests to 890+ meaningful end-to-end tests.

## Core Strengths

- Backend and systems design in C# / .NET
- Domain modelling for complex optimisation and scheduling workflows
- Internal DSL and expression engine architecture
- Performance optimisation for large computational data pipelines
- Integration architecture and interoperability across product boundaries
- Test infrastructure, synthetic data generation, and quality engineering
- Technical leadership, mentorship, and cross-team influence

## Technical Skills

**Languages & Frameworks:** C#, .NET, TypeScript, React, WinForms

**Data & Analytics:** SQLite, Parquet, Power BI

**Testing & Delivery:** Integration testing, synthetic test model generation, Azure DevOps, Jenkins, Bitbucket, Jira

**Engineering Areas:** System design, domain modelling, DSL design, performance optimisation, platform reuse, workflow orchestration

## Experience

### Deswik
**Senior Software Engineer**  
Apr 2024 - Present

**Software Engineer, Surface Planning (NOVA)**  
Apr 2023 - Apr 2024

**Software Engineer, Optimization (GO, Blend, LHS)**  
Jul 2022 - Apr 2023

**Graduate Software Engineer, Optimization (GO, Blend, LHS)**  
Jan 2021 - Jul 2022

Brisbane, Queensland, Australia

- Designed and delivered a product-agnostic expression language platform for optimisation and planning workflows, replacing fragile legacy implementations with a formally structured pipeline spanning lexing, parsing, analysis, compilation, type inference, linting, and location-aware diagnostics.
- Built modern editor capabilities around the expression system, including syntax highlighting, autocomplete, formatting, tooltips, and localisation support for 10+ languages, materially improving usability for engineering users writing production expressions.
- Abstracted the expression platform for reuse across products and provided the API design, documentation, and technical guidance that enabled adoption or planned adoption across 3-4 products; Deswik.BOLT fully adopted the design approach and Deswik.Sched is actively evaluating integration.
- Led end-to-end delivery of the expression system across architecture, implementation, rollout, support, and iteration, coordinating with multiple engineers and establishing a reusable internal platform capability rather than a one-off feature.
- Designed and implemented integrations with Deswik.BOLT and Deswik.GO to enable cost- and constraint-aware destination scheduling within Deswik.NOVA, delivering a core capability required to position the product as an end-to-end mine planning solution.
- Solved large-scale interoperability and workflow orchestration challenges by faithfully mapping product configuration semantics into downstream optimisation systems and preparing high-volume haulage and parcel-flow data for external computation.
- Optimised parcel-flow field calculations over large multidimensional datasets by modelling field dependencies as a graph, applying topological ordering, parallelising evaluation, reducing unnecessary flow-link-time-step permutations, and caching results based on expression analysis.
- Reduced a representative client model's parcel-flow calculation runtime from more than 1 hour to 11 seconds, a roughly 1000x improvement that made previously impractical workflows operationally viable.
- Worked on systems processing mine planning models with inputs frequently exceeding 1 GB and, in some cases, reaching tens of gigabytes, while keeping solve times within user-acceptable ranges for production workflows.
- Designed and introduced an integration testing framework and synthetic model generator that made complex end-to-end test setup fast and repeatable, replacing high-friction boilerplate and removing a major barrier to writing integration tests.
- Increased meaningful integration test coverage from roughly 10-20 tests to more than 890 tests in the following year, with contributions from 12+ engineers, significantly strengthening regression protection across the product.
- Helped shift team quality practices by making integration tests a standard part of regression fixes, sharply reducing bugs found during once-per-release manual regression testing and freeing testers to expand scenario coverage.
- Mentored 5+ engineers over 5 years, led multi-engineer technical initiatives, and regularly influenced architecture and engineering standards across teams through design guidance, system ownership, and technical direction.

## Education

### Queensland University of Technology
**Bachelor of Mathematics and Bachelor of Engineering (Honours)**  
Feb 2015 - Nov 2021

- Major in applied/computational mathematics and computer/software engineering
- Honours thesis: *Exploring Parallel Periodic Distance Transform Algorithms*
- GPA: 6.3
