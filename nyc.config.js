module.exports =
  // If running in the context of Cypress unit tests, only account hooks for
  // coverage. Else Cypress will mark all components as covered, even if it
  // did not run any assessments on them.
  process.env.COVERAGE === "hooks"
    ? {
        include: ["src/hooks"],
      }
    : {
        exclude: [".storybook", "src/external"],
      }
