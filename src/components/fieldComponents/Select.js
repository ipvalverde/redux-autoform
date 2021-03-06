import React from 'react';
import Input from '../Input';

const Select = React.createClass({

    propTypes: {
        value: React.PropTypes.any,
        onChange: React.PropTypes.func.isRequired,
        placeholder: React.PropTypes.string,
        displayName: React.PropTypes.string,
        name: React.PropTypes.string.isRequired,
        error: React.PropTypes.string,
        addonBefore: React.PropTypes.string,
        addonAfter: React.PropTypes.string
    },

    render() {

        return (
            <Input {...this.props} componentClass="select">
                { this.props.options.map(o => <option key={o.value} value={o.value}> {o.text} </option> ) }
            </Input>
        );
    }
});

export default Select;