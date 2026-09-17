  const { isWidgetEnabled } = require('./logic.js');
  
  function renderWidget() {
    if (isWidgetEnabled()) {
      console.log('Rendering new widget!');
    } else {
      console.log('Widget disabled.');
    }
  }      
module.exports = { renderWidget };
