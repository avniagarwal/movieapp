import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class Create extends Component {

    constructor(props) {
        super(props)
    
        this.onChangeMovieName = this.onChangeMovieName.bind(this);
        this.onChangeLanguage = this.onChangeLanguage.bind(this);
        this.onChangeReleaseDate = this.onChangeReleaseDate.bind(this);
        this.onChangeBudget = this.onChangeBudget.bind(this);
        this.onChangeCollection = this.onChangeCollection.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
            MovieName: '',
            Language: '',
            ReleaseDate: '',
            Budget: '',
            Collection: ''
        }
      }
    
      onChangeMovieName(e) {
        this.setState({MovieName: e.target.value})
      }
    
      onChangeLanguage(e) {
        this.setState({Language: e.target.value})
      }
    
      onChangeReleaseDate(e) {
        this.setState({ReleaseDate: e.target.value})
      }

      onChangeBudget(e) {
        this.setState({Budget: e.target.value})
      }

      onChangeCollection(e) {
        this.setState({Collection: e.target.value})
      }
    
      onSubmit(e) {
        e.preventDefault()
    
        const movieObject =  {
          MovieName: '',
          Language: '',
          ReleaseDate: '',
          Budget: '',
          Collection: ''
      }
    
      axios.post('http://localhost:3000/movies/create', movieObject)
      .then(res => console.log(res.data));

    this.setState({
      MovieName: '',
      Language: '',
      ReleaseDate: '',
      Budget: '',
      Collection: ''
  })
}
    

    render() {
        return (<div className="form-wrapper">
          <Form>
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
              Create Movie
            </Button>
          </Form>
        </div>);
      }
}