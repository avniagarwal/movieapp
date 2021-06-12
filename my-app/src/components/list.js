import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import MovieTableRow from './table';


export default class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3000/movies/')
      .then(res => {
        this.setState({
          movies: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  DataTable() {
    return this.state.movies.map((res, i) => {
      return <MovieTableRow obj={res} key={i} />;
    });
  }


  render() {
    return (<div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Movie Name</th>
            <th>Language</th>
            <th>Release Date</th>
            <th>Budget</th>
            <th>Collection</th>
          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
        </tbody>
      </Table>
    </div>);
  }
}