import React, {Component, PropTypes} from 'react';

import CodeEditor from './CodeEditor';
import {FormGroup, FormControl, ControlLabel} from 'react-bootstrap';
import {reduxForm} from 'redux-form';
import {browserHistory} from 'react-router';
import presets from '../presets';

class LiveSchemaEditorForm extends Component {

    onPresetChange(event) {
        browserHistory.push(`/redux-autoform/demo.html?preset=${event.target.value}`);
    }

    render() {

        const {
            fields: {entityName, layoutName, schema},
            selectedPreset,
            formOptionActions
        } = this.props;

        return <div>
            <div className='row'>
                <div className="col-md-12">
                            <span className="pull-right">Check the <a target="blank"
                                                                      href="https://github.com/gearz-lab/redux-autoform/blob/master/docs-md/documentation.md">
                                    metadata
                                documentation</a>
                            </span>
                    <FormGroup controlId="formControlsSelect">
                        <ControlLabel>Select a <span style={{color: 'red'}}>preset</span> <i
                            className="fa fa-level-down" aria-hidden="true"></i></ControlLabel>
                        <FormControl componentClass="select" placeholder="select"
                                     onChange={this.onPresetChange}
                                     value={selectedPreset}>
                            {
                                presets.map(p => {
                                    let optionProps = {
                                        key: p.name,
                                        value: p.name
                                    };
                                    return <option {...optionProps} >{p.displayName}</option>
                                })
                            }
                        </FormControl>
                    </FormGroup>
                </div>
            </div>
            <div className='row'>
                <div className="col-md-6">
                    <FormGroup controlId="formBasicText">
                        <ControlLabel>Entity name</ControlLabel>
                        <FormControl
                            type="text"
                            value=""
                            placeholder="Enter text"
                            { ... entityName }
                        />
                        <FormControl.Feedback />
                    </FormGroup>
                </div>
                <div className="col-md-6">
                    <FormGroup controlId="formBasicText2">
                        <ControlLabel>Layout name</ControlLabel>
                        <FormControl
                            type="text"
                            value=""
                            placeholder="Enter text"
                            { ...layoutName }
                        />
                        <FormControl.Feedback />
                    </FormGroup>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <FormGroup controlId="formBasicText3">
                        <ControlLabel>Schema</ControlLabel>
                        <CodeEditor { ...schema} />
                        <FormControl.Feedback />
                    </FormGroup>
                </div>
            </div>
        </div>;
    }
}

LiveSchemaEditorForm.propTypes = {};

export default reduxForm({
    form: 'meta',
    fields: ['entityName', 'layoutName', 'schema']
})(LiveSchemaEditorForm);