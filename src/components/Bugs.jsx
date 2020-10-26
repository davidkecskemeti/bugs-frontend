import React, {Component} from "react";
import {loadBugs} from "../store/bugs";
import {connect} from "react-redux";

class Bugs extends Component {

    componentDidMount() {
        this.props.loadBugs()
    }

    render() {
        return (
            <ul>
                {this.props.bugs.map((bug) => (<li key={bug.id}>{bug.description}</li>))}
            </ul>
        )
    }
}

// bugs:intrested in state.entities.bugs.list
const mapStateToProps = state => ({
    bugs: state.entities.bugs.list
})

const mapDispatchToProps = dispatch => ({
    loadBugs: () => dispatch(loadBugs())
})

//Container  component
//Presentation compoenetn(Bugs)

export default connect(mapStateToProps, mapDispatchToProps)(Bugs)