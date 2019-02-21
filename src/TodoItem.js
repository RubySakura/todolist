import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    render() {
        console.log('child render', this.props.index);
        const { content, test } = this.props;
        return (
            <li onClick={this.handleClick}>{test} - {content}</li>
        )
    }

    handleClick() {
        const { deleteItem, index } = this.props;
        deleteItem(index);
    }

    
    componentWillMount() {
        console.log('child componentWillMount', this.props.index);
    }

    componentDidMount() {
        console.log('child componentDidMount', this.props.index);
    }

    componentWillReceiveProps() {
        console.log('child componentWillReceiveProps', this.props.index);
    }

    shouldComponentUpdate() {
        console.log('child shouldComponentUpdate', this.props.index);
        return true;
    }

    componentWillUpdate() {
        console.log('child componentWillUpdate', this.props.index);
    }

    componentDidUpdate() {
        console.log('child componentDidUpdate', this.props.index);
    }

    componentWillUnmount() {
        console.log('child componentWillUnmount', this.props.index);
    }

}

TodoItem.propTypes = {
    test: PropTypes.string.isRequired,
    content: PropTypes.string,
    index: PropTypes.number,
    deleteItem: PropTypes.func
}

TodoItem.defaultProps = {
    test: '项目'
}

export default TodoItem;