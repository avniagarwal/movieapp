import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

export default class MovieTableRow extends Component {

    constructor(props) {
        super(props);
        this.deleteMovie = this.deleteMovie.bind(this);
    }

    deleteMovie() {
        axios.delete('http://localhost:3000/movies/delete/' + this.props.obj._id)
            .then((res) => {
                console.log('Movie successfully deleted!')
            }).catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <tr>
                <td>{this.props.obj.MovieName}</td>
                <td>{this.props.obj.Language}</td>
                <td>{this.props.obj.ReleaseDate}</td>
                <td>{this.props.obj.Budget}</td>
                <td>{this.props.obj.Collection}</td>
                <td>
                    <Link className="edit-link" to={"/edit/" + this.props.obj._id}>
                        Edit
                    </Link>
                    <Button size="sm" variant="danger">Delete</Button>
                </td>
            </tr>
        );
    }
}