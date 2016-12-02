import React from 'react';

const Steps = () => {
  return (
    <div>
      <h3>Notes about React Testing.</h3>
      <ul>
        <li>We'll use mocha and chai jquery (an extension of the chai library).</li>
        <li>We create renderComponent from react-addons-test-utils to replicate the components in our tests.</li>
        <li>We can use jquery syntax with chai-jquery: we will use the component.find(htmlElementName)</li>
        <br/>
        <p><strong>Testing Components:</strong></p>
        <li>Simple tests (check if a component has css or html): has.class, to.exist </li>
        <li>Behavior tests: simulate a user action with the simulate method from react-addons-test-utils
          and check expected results with the to.have.value method.</li>
        <br/>
        <p><strong>Testing Actions:</strong></p>
        <li>Import the action function.</li>
        <li>We can then create a const called action, for example, in the test file and assign it the value of
          the action function.</li>
        <li>We then ese action.type and action.payload to.equal to check the values.</li>
        <br/>
        <p><strong>Testing Reducers:</strong></p>
        <li>We need to import the reducer and the action.</li>
        <li>We create vars assigned to reducer and action.</li>
        <li>Then we call the reducer with the action as parameter and check the expected result
        with expect to.equal</li>
      </ul>
    </div>
  );
};

export default Steps;
