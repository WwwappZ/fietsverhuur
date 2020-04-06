import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { required } from "redux-form-validators";
import { renderField, renderTextField } from "../../../Components/Forms/renders";

class BedrijvenForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {}
    };
  }


  componentDidMount() {
  
  }
  render() {
    const { handleSubmit, input } = this.props;
    return (
      <div className="box box-default">
      <form onSubmit={handleSubmit}>
        <div className="box-body">
         <div className="row">
         <div className="col-12">
         <Field
            name="naam"
            type="input"
              validate={[required()]}
            component={renderField}
            label="Naam leverancier"
          />
          <Field
            name="beschrijving"
            type="input"
            component={renderTextField}
            label="Beschrijving leverancier"
          />
          </div>
          </div>
          <div className="pull-left submit">
            <input
              type="submit"
              className="btn btn-next btn-fill btn-success btn-wd btn-mg"
              name="next"
              value="Updates"
            />
            </div>
        </div>
      </form>
      </div>
    );
  }
}
BedrijvenForm = reduxForm({
  form: "bedrijfinsert" // a unique identifier for this form
})(BedrijvenForm);

// You have to connect() to any reducers that you wish to connect to yourself
BedrijvenForm = connect(
  state => ({
    initialValues: state.leverancier.item // pull initial values from account reducer
  }) // bind account loading action creator
)(BedrijvenForm);


export default BedrijvenForm;
