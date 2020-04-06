import React from "react";
import { connect } from "react-redux";
import { fetchleverancier } from "./Reducers/actions";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Link } from "react-router-dom";
class LogboekPage extends React.Component {
  state = {
   loaded: false
  };

  componentWillMount() {
    this.props.fetchleverancier().then(data => {
      this.setState({"loaded": true})
    });
  
  }


  handleItem(item) {}

  render() {
    const columns = [
      {
        dataField: "naam",
        text: "Naam"
      },
      {
        dataField: "beschrijving",
        text: "beschrijving"
      },
      {
        text: "Acties",
        dataField: "_id",
        formatter: (cellContent, row) => {
          return (
          <span>
            <Link className="btn btn-warning" to={"/admin/leverancier/edit/"+row._id }>Wijzigen</Link>

            </span>
          )
        },
        headerStyle: (colum, colIndex) => {
         return { width: '250px' };
       }
      }
    ];
    const { leverancier } = this.props;
    return (
      <div className="box box-default">
        <div className="box-header with-border">
          <h3 className="box-title"> Overzicht Leveranciers</h3>
          <div className="box-tools pull-right">
            <Link
              type="button"
              className="btn-primary btn btn-box-too btn-sm"
              to="/admin/leverancier/insert"
            >
              <i className="fa fa-plus"></i>&nbsp; Leverancier Toevoegen
            </Link>
          </div>
        </div>
        <div className="col-md-12 no-float">
          <div className="box box-primary">
            <div className="box-body box-profile" />
            {this.state.loaded &&
            <BootstrapTable
              keyField="_id"
              data={leverancier}
              columns={columns}
              pagination={paginationFactory()}
            />
  }
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { username: state.auth.user, leverancier: state.leverancier.items };
}

export default connect(mapStateToProps, { fetchleverancier })(LogboekPage);
