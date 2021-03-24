import React, { Component } from 'react';
import {Button} from 'react-bootstrap'

class recipe_cards extends Component {
    API_ID = '0181f629';
    API_key='d8b8a1cafd30b45719ef35addd811bf3';



    constructor(){
        super();
        this.state={
            API_ID: '0181f629',
            API_key: 'd8b8a1cafd30b45719ef35addd811bf3',
            info: null,
            img: null,
            title: null,
            description: null
        }
    }

    componentDidMount(){
        fetch(`https://api.edamam.com/search?q=chicken&app_id=${this.API_ID}&app_key=${this.API_key}`).then((res)=>{
            res.json().then((result)=>{
                console.warn(result.hits) 
                // console.warn(result.hits[0].recipe.label)
                this.setState({info:result.hits})
                console.warn(this.info)
            })
        })
    }

    
    render() {
        return (
            <div className="container">
                <div className="row">
                    <h1>helo</h1>
                    {this.state.info ?
                        this.state.info.map((item)=>
                            <div className="card col-md-3">
                        {/* console.warn(item.recipe.label) */}

                                <img className="card-img-top" src={item.image} alt="Card cap" />
                                <div className="card-body">
                                    <h5 className="card-title">{item.recipe.label}</h5>
                                    {/* console.warn({item.recipe.label}) */}
                                    <p className="card-text">{item}</p>
                                    <Button><a href="/" className="btn btn-primary">Go somewhere</a></Button>
                                </div>
                            </div>
                        )
                        :
                        null
                        }
                        
                </div>
            </div>
        );
    }
}

export default recipe_cards;