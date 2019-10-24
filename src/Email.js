// // bring in React and Component instance from React
import React, { Component } from "react";
import emailjs from 'emailjs-com';
import styled, { ThemeProvider } from 'styled-components';



const Wrapper = styled.section`
    min-height: 100vh;
`
const H1 = styled.h1`
    font-size: 36px;
`

const Div = styled.div `
    margin: 50px;
    padding: 0px 80px;
`


// // define our Hello component
class Email extends Component {
    

 
    constructor(props) {
        super(props);
        this.state = { feedback: '', name: 'Name', email: 'email@example.com' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

//Handle Submit 

    handleSubmit (event) {
        const templateId = 'template_id';
    
        this.sendFeedback(templateId, {message_html: this.state.feedback, from_name: this.state.name, reply_to: this.state.email})
      }
    
      sendFeedback (templateId, variables) {
        window.emailjs.send(
          'gmail', templateId,
          variables
          ).then(res => {
            console.log('Email successfully sent!')
          })
          // Handle errors here however you like, or use a React error boundary
          .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
      }

    render() {
        return (

            <form className="test-mailing">
                <Wrapper>
                <H1>Contact Us:</H1>

                <Div>
                
                    <textarea
                        id="test-mailing"
                        name="test-mailing"
                        onChange={this.handleChange}
                        placeholder="Post some lorem ipsum here"
                        required
                        value={this.state.feedback}
                        style={{ width: '100%', height: '150px' }}
                    />
                   
                </Div>
                <input type="button" value="Submit" className="btn btn--submit" onClick={this.handleSubmit} />
                </Wrapper>
            </form>


        )
    }

    handleChange(event) {
        this.setState({ feedback: event.target.value })
    }

    handleSubmit() {
    }
}


export default Email;



// Note: 
// I think I skipped an authentication step in the tutorial. Reread that section. Was it telling you to add it to the  
// index file? 