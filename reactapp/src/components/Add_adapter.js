import React from 'react';
import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDYwcrk4l9d0UyFUzGHrc5bsFdRvLA6B_I",
  authDomain: "connect-it-38906.firebaseapp.com",
  databaseURL: "https://connect-it-38906.firebaseio.com",
  projectId: "connect-it-38906",
  storageBucket: "connect-it-38906.appspot.com",
  messagingSenderId: "502031912641"
};
firebase.initializeApp(config);


class Add_adapter extends React.Component {
    constructor(){
        super();
        this.state = {
            Name: "",
            Description: "",
            Image:"",
            Price:"",
            Rating:"",
            Ref_link_1:"",
            Ref_link_2:"",
            Ref_link_3:""
        };
    }
    
    /* 
    Next we’ll add a custom attribute to both input fields, which will call a 
    function ‘updateInput’ to set our component state, when a user enters data into the form. 
    */
    
   updateInput = e => {
        this.setState({
        [e.target.name]: e.target.value
        });
    }

    submitAdapter = e => {
      e.preventDefault();
      // add data into Firebase
      const db = firebase.firestore();
      db.settings({
        timestampsInSnapshots: true
      });
      const adapterRef = db.collection('adapters').add({
        Name: this.state.Name,
        Description: this.state.Description,
        Image: this.state.Image,
        Price: this.state.Price,
        Rating: this.state.Rating,
        Ref_link_1: this.state.Ref_link_1,
        Ref_link_2: this.state.Ref_link_2,
        Ref_link_3: this.state.Ref_link_3
      });  
      // reset fields to null strings
      this.setState({
        Name: "",
        Description: "",
        Image:"",
        Price:"",
        Rating:"",
        Ref_link_1:"",
        Ref_link_2:"",
        Ref_link_3:""
      });
    };

    render() {
    return (
        <form onSubmit={this.submitAdapter}>
          <input
            type="text"
            name="Name"
            placeholder="Adapter Name"
            onChange={this.updateInput}
            value={this.state.Name}
          />
          <input
            type="text"
            name="Image"
            placeholder="Image URL"
            onChange={this.updateInput}
            value={this.state.Image}
          />
          <input
            type="text"
            name="Description"
            placeholder="Description"
            onChange={this.updateInput}
            value={this.state.Description}
          />
           <input
            type="text"
            name="Price"
            placeholder="Price"
            onChange={this.updateInput}
            value={this.state.Price}
          />
          <input
            type="text"
            name="Rating"
            placeholder="Rating"
            onChange={this.updateInput}
            value={this.state.Rating}
          />
          <input
            type="text"
            name="Ref_link_1"
            placeholder="Referral link 1"
            onChange={this.updateInput}
            value={this.state.Ref_link_1}
          />
          <input
            type="text"
            name="Ref_link_2"
            placeholder="Referral link 2"
            onChange={this.updateInput}
            value={this.state.Ref_link_2}
          />
          <input
            type="text"
            name="Ref_link_3"
            placeholder="Referral link 3"
            onChange={this.updateInput}
            value={this.state.Ref_link_3}
          />
          <button type="submit">Submit</button>
        </form>
        );
      }
   }

export default Add_adapter;