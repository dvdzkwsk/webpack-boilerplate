import React from 'react/addons';
import App from './index.jsx';

const TestUtils = React.addons.TestUtils;

describe('(Component) App', function () {
  var component, shallowRender;

  beforeEach(() => {
    const componentToTest = <App message='Foobar' />;

    component = TestUtils.renderIntoDocument(componentToTest);

    const shallowRenderer = TestUtils.createRenderer();
    shallowRenderer.render(componentToTest);
    shallowRender = shallowRenderer.getRenderOutput();
  });

  it('Should have a test that works with Chai "expect".', () => {
    expect(true).to.be.true;
  });

  it('Should be able to render.', function () {
    expect(component).to.be.defined;
  });

  it('Should render as an <h1>.', function () {
    expect(shallowRender.type).to.equal('h1');
  });
});
