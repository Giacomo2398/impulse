import React from "react";

class gifSearch extends Component {
    render(){
        return(
            <div className="form-group">
                <label for="gifSearch">Search for a Gif...</label>
                <input type="submit" className="form-control" id="gif-search"></input>
            </div>
        )
    }
};

export default gifSearch;