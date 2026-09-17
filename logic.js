const config = reuire('./config.json');
function isWidgetEnabled() {
  return config.enabled && config.featureFlagg === 'new-widget';
}
module.exports = { isWidgetEnabled } ;
