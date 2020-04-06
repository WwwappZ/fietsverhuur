import React from 'react';
import {connect} from 'react-redux';
import {saveleverancier} from './Reducers/actions';
import BedrijvenForm from './Components/form'
class LeverancierInsert extends React.Component {
  state = {
    errors: {}
  }


  componentWillMount() {
    //this.props.fetchprofile();
  }

  submit = vals => {
      this.props.saveleverancier(vals).then(data => {
        if (data.type ==="BEDRIJD_ERROR") {
          alert(data.payload);
          return false;
        } else {
              this.props.history.push('/admin/leverancier/');
        }
      });
  }

  render() {
    return (
      <div className="box box-default">
        <div className="box-header with-border">
          <h3 className="box-title"> Leverancier toevoegen</h3>
        </div>

      <div className="row">
      <div className="col-md-12 no-float">
        <div className="box box-primary">
          <div className="box-body box-profile">
            <BedrijvenForm onSubmit={this.submit}/></div>
        </div>
      </div>
    </div>
  </div>);
  }
};
function mapStateToProps(state) {
  return {username: state.auth.user, bedrijven: state.bedrijven};
}

export default connect(mapStateToProps, {saveleverancier})(LeverancierInsert);
