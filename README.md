<div align="center">
  <br>
  <br>
  <img height="200" src="media/molecules.svg" alt="Hireology Molecules">
  <br>
  <br>
</div>

# molecules
Hireology's component library

## Storybook
Production URL: https://hireology-storybook.netlify.com/  
Run storybook locally: `npm run storybook`  
#### CICD:
Each commit to `dev` will automatically deploy storybook.  
You can view a preview of the deploy in your PR by clicking the details button in this build step:

<div align="center">
  <img src="media/deployPreview.png" alt="deploy step">
</div>

## Testing
Run tests locally: `npm run test`  
Run test coverage: `npm run test-coverage`  

## Expected Component Directory Structure
When you add a new component, it should follow the below directory structure:
```
/NewComponent
  index.jsx                - export default from NewComponent.jsx
  NewComponent.jsx         - component code
  NewComponent-test.jsx    - test file
  newComponent.scss        - stylesheet
  newComponent.stories.jsx - storybook configuration
```
