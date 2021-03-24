import React, { Component } from 'react';

class recipe_cards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dish : null
        }
    }
    
    componentDidMount() {
        const API_ID = "0181f629";
        const API_key = "d8b8a1cafd30b45719ef35addd811bf3"
        async () => {await fetch(`https://api.edamam.com/search?q=chicken&app_id=${API_ID}&app_key=${API_key}`)
            .then((res) => {
                res.json()
                .then((result) => {
                    var dishes = result.hits;
                    this.setState({dish: dishes});
                })
            })
        }

    }


    render() {
        return (
            
            <div className="container">
                 {this.state.dish?
                    console.log(this.state.dish[0].recipe.label)
                    :
                    <h2>no</h2>
                }
                {/* <h1>{this.state.dish[0]}</h1> */}
                {/* <div className="row">
                    <h1>helo</h1>
                    {this.state.info ?
                        this.state.info.map((item) =>
                            <div className="card col-md-3"> */}
                                {/* console.warn(item.recipe.label) */}

                                {/* <img className="card-img-top" src={item.image} alt="Card cap" />
                                <div className="card-body">
                                    <h5 className="card-title">{item.recipe.label}</h5> */}
                                    {/* console.warn({item.recipe.label}) */}
                                    {/* <p className="card-text">{item}</p>
                                    <Button><a href="/" className="btn btn-primary">Go somewhere</a></Button>
                                </div>
                            </div>
                        )
                        :
                        null
                    }

                </div> */}
            </div>
        );
    }
}

export default recipe_cards;