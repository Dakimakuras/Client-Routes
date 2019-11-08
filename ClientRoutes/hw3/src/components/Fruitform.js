import React, { Component } from 'react';



class Fruitform extends Component {
      constructor(props){
          super(props);
          this.state= {
              type:'',
              color: '',
              quantity: 0,
          };
          this.onChange= this.onChange.bind(this);
          this.onSubmit= this.onSubmit.bind(this);
      }
           onChange(e){
               this.setState({[e.target.name]: e.target.value});
           }
           onSubmit(e){
            e.preventDefault();

            const post ={
                type: this.state.type,
                color: this.state.color,
                quantity: this.state.quantity
            }

            fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers:{
                    'content-type': 'application/json'
                },
                body: JSON.stringify(post)
            })
            .then(res=> res.json())
            .then(data=> console.log(data));
           }


    render() {
        return (
            <div>
                <h1>Add Posts</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label> Type </label> <br/>
                            <input type= "body" name ="type" onChange={this.onChange} 
                            value={this.state.type}/>
                    </div>
                    <br/>
                    <div>
                        <label> Color </label> <br/>
                            <input type= "text" name ="color" onChange={this.onChange} 
                            value={this.state.color}/>
                    </div>
                    <br/>
                    <div>
                        <label> Quantity </label> <br/>
                            <input type= "text" name ="quantity" onChange={this.onChange} 
                            value={this.state.quantity}/>
                    </div>
                    <br/>
                    <button type = "submit" onClick={this.buttonHandler}> Submit</button>
                </form>
                
            </div>
        )
    }
}



export default Fruitform;