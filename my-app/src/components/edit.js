import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class Edit extends Component {
  constructor(props) {
    super(props)

    this.onChangeMovieName = this.onChangeMovieName.bind(this);
    this.onChangeLanguage = this.onChangeLanguage.bind(this);
    this.onChangeReleaseDate = this.onChangeReleaseDate.bind(this);
    this.onChangeBudget = this.onChangeBudget.bind(this);
    this.onChangeCollection = this.onChangeCollection.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // State
    this.state = {
      MovieName: '',
      Language: '',
      ReleaseDate: '',
      Budget: '',
      Collection: ''
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3000/movies/edit/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          MovieName: res.data.MovieName,
          Language: res.data.Language,
          ReleaseDate: res.data.ReleaseDate,
          Budget: res.data.Budget,
          Collection: res.data.Collection
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  onChangeMovieName(e) {
    this.setState({ MovieName: e.target.value })
  }

  onChangeLanguage(e) {
    this.setState({ Language: e.target.value })
  }

  onChangeStudentReleaseDate(e) {
    this.setState({ ReleaseDate: e.target.value })
  }

  onChangeStudentBudget(e) {
    this.setState({ Budget: e.target.value })
  }

  onChangeStudentCollection(e) {
    this.setState({ Collection: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const movieObject =  {
      MovieName: this.state.MovieName,
      Language: this.state.Language,
      ReleaseDate: this.state.ReleaseDate,
      Budget: this.state.Budget,
      Collection: this.state.Collection
  }

    axios.put('http://localhost:3000/movies/update/' + this.props.match.params.id, movieObject)
      .then((res) => {
        console.log(res.data)
        console.log('Movie successfully updated')
      }).catch((error) => {
        console.log(error)
      })

    this.props.history.push('/list')
  }


  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
            <Form.Group controlId="Name">
              <Form.Label>Movie Name</Form.Label>
              <Form.Control type="text"/>
            </Form.Group>
    
            <Form.Group controlId="Name">
              <Form.Label>Language</Form.Label>
              <Form.Control type="text"/>
            </Form.Group>
    
            <Form.Group controlId="Date">
              <Form.Label>Release Date</Form.Label>
              <Form.Control type="date"/>
            </Form.Group>

            <Form.Group controlId="Name">
              <Form.Label>Budget</Form.Label>
              <Form.Control type="text"/>
            </Form.Group>

            <Form.Group controlId="Name">
              <Form.Label>Collection</Form.Label>
              <Form.Control type="text"/>
            </Form.Group>
        <Button variant="danger" size="lg" block="block" type="submit">
          Update Movie
        </Button>
      </Form>
    </div>);
  }
}