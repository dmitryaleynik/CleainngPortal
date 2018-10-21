import React from 'react';
import PropTypes from 'prop-types';

class TextForm extends React.Component {
  render() {
    return (
      <div>
        <textarea
          value={() => this.props.getValue()}
          name={this.props.name}
          onChange={(e) => this.props.setValue(e.target.value)}
          type={this.props.type}
        />
      </div>
      );
    
  }  
}

TextForm.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  setValue: PropTypes.func,
  getValue: PropTypes.func,
}


export default TextForm;