# Contributing Guidelines

## Problem Analysis & Solution Rules

### 1. Module Analysis

- Check module system type in package.json (type: "module" or not)
- Review import/export patterns in main project files
- Maintain consistency with existing patterns

### 2. Configuration Check

- Review tsconfig.json for TypeScript configuration
- Check build configuration files (next.config.js, webpack.config.js, etc.)
- Identify alias paths and module resolution settings

### 3. Dependency Analysis

- Review dependencies in package.json
- Identify testing-related dev dependencies
- Understand development and testing environments

### 4. Solution Proposal

- DO NOT propose solutions before completing steps 1-3
- Prioritize solutions that maintain codebase consistency
- Propose changes in this order:
  1. Adjust configuration to match existing code
  2. Modify code to match existing architecture
  3. Add dependencies only when absolutely necessary

### 5. Implementation Rules

- Explain rationale for each proposed change
- Warn about potential side effects
- Suggest verification methods

### 6. Documentation & Testing

- Document important configuration changes
- Propose additional test cases
- Provide verification guidelines

### 7. Rollback Protocol

- Always have a rollback plan
- Document initial state before changes
- Provide specific rollback steps

### 8. Optimization

- Consider solution performance
- Evaluate impact on build/test time
- Suggest future improvements

### 9. Reporting

- Summarize encountered issues
- List considered solutions
- Explain solution selection rationale
- Propose next steps

### 10. Learning & Improvement

- Document lessons learned
- Suggest prevention methods
- Update process based on feedback

## Example Workflow

1. **Initial Analysis**

   ```
   - Check package.json for module system
   - Review related configuration files
   - Analyze existing code patterns
   ```

2. **Solution Development**

   ```
   - Document current state
   - List potential solutions
   - Evaluate each solution against rules
   - Choose most appropriate solution
   ```

3. **Implementation**

   ```
   - Make minimal necessary changes
   - Document each change
   - Verify changes
   - Have rollback plan ready
   ```

4. **Follow-up**
   ```
   - Test thoroughly
   - Document changes
   - Update relevant documentation
   - Share lessons learned
   ```
