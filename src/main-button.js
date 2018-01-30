'use strict';

var React = require('react');
var classnames = require('classnames');

class MainButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var iconResting = classnames('mfb-component__main-icon--resting', this.props.iconResting);
    var iconActive = classnames('mfb-component__main-icon--active', this.props.iconActive);
    var mainClass = classnames('mfb-component__button--main', this.props.className);

    if (this.props.label) {
      return (
        <a href={this.props.href} style={this.props.style} className={mainClass} onClick={this.props.onClick}
           data-mfb-label={this.props.label}>
          {
            typeof this.props.iconResting === 'string' ?
              <i className={iconResting}></i> :
              this.props.iconResting
          }
          {
            typeof this.props.iconActive === 'string' ?
              <i className={iconActive}></i> :
              this.props.iconResting
          }
        </a>
      );
    } else {
      return (
        <a href={this.props.href} style={this.props.style} className={mainClass} onClick={this.props.onClick}>
          {
            typeof this.props.iconResting === 'string' ?
              <i className={iconResting}></i> :
              this.props.iconResting
          }
          {
            typeof this.props.iconActive === 'string' ?
              <i className={iconActive}></i> :
              this.props.iconResting
          }
        </a>
      );
    }
  }
}

MainButton.defaultProps = {
  href: '#',
  onClick: function () {
  },
  iconResting: '',
  iconActive: '',
  label: null
};

module.exports = MainButton;
