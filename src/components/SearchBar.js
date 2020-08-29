import React from 'react';

class SearchBar extends React.Component{
    state = {term: ''};
    handleInputChange = (event)=>{
        this.setState({term: event.target.value});
    };

    handleFormSubmit = (event)=>{
        event.preventDefault();
        console.log(event);
        //TODO: Call back from parent component
        this.props.onFormSubmit(this.state.term);
    }
    render(){
        return (
            <div className="search-bar jumbotron text-white bg-dark border-primary row justify-content-between">
                <div className="col">
                    <h1 className="display-4">Youtube React Clone</h1>
                </div>
                <div className="col">
                    <form className="container form mr-auto" onSubmit={this.handleFormSubmit}>
                        <input className="form-control form-control-lg mr-sm-2 bg-light border-primary" type="text" placeholder="Search" aria-label="Search" 
                            value={this.state.term}
                            onChange={this.handleInputChange}
                        />
                        <button type="submit" className="btn btn-secondary btn-lg btn-block border-primary" data-toggle="button" aria-pressed="false">Search</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default SearchBar;