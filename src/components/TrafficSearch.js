import React from 'react';

class TrafficSearch extends React.Component {
    state = { term: ''};

    onInputChange = (e) => {
        this.setState({term: e.target.value});
};

    getTraffic = (e) => {
        e.preventDefault();

        this.props.onSubmit(this.state.term);
        

        
   
};

    render() {
        return (
            <div>
                <form onSubmit={this.getTraffic}>
                    <div>
                        <label>Traffic Search</label>
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={this.onInputChange}
                        />
                    </div>         
                </form>
            </div>
        );
    }
}

export default TrafficSearch;