import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchEmployeeList } from '../../redux/actions/employee';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import "./style.css";

const columns = [{
  dataField: 'id',
  text: 'id'
}, {
  dataField: 'name',
  text: 'Name'
}, {
  dataField: 'age',
  text: 'Age'
}, {
  dataField: 'gender',
  text: 'Gender'
}, {
  dataField: 'email',
  text: 'Email'
},
  , {
  dataField: 'phoneNo',
  text: 'Phone No.'
}
];

function Dashboard({ employeeList, fetchEmployeeList, user }) {
  useEffect(() => {
    fetchEmployeeList(
      [{
        "id": 1,
        "name": "test1",
        "age": "11",
        "gender": "male",
        "email": "test1@gmail.com",
        "phoneNo": "9415346313"
      },
      {
        "id": 2,
        "name": "test2",
        "age": "12",
        "gender": "male",
        "email": "test2@gmail.com",
        "phoneNo": "9415346314"
      },
      {
        "id": 3,
        "name": "test3",

        "age": "13",
        "gender": "male",
        "email": "test3@gmail.com",
        "phoneNo": "9415346315"
      },
      {
        "id": 4,
        "name": "test4",
        "age": "14",
        "gender": "male",
        "email": "test4@gmail.com",
        "phoneNo": "9415346316"
      },
      {
        "id": 5,
        "name": "test5",
        "age": "15",
        "gender": "male",
        "email": "test5@gmail.com",
        "phoneNo": "9415346317"
      },
      {
        "id": 6,
        "name": "test6",
        "age": "16",
        "gender": "male",
        "email": "test6@gmail.com",
        "phoneNo": "9415346318"
      }
      ]
    );
  }, [])

  return (
    <div className="dashboard-wrapper">
      <h4>
        hello {user}, welcome !
            </h4>
      <BootstrapTable keyField='id' data={employeeList} columns={columns} bootstrap4 bordered={false} striped hover condensed />
    </div>
  )

}

const mapStateToProps = (state) => {
  return {
    employeeList: state.employee.employeeList,
    user: state.login.userName
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchEmployeeList: (list) => dispatch(fetchEmployeeList(list))
  }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default withConnect(Dashboard);