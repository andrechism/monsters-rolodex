import React from 'react';
import './page-header.styles.css';

/*
class PageHeader extends Component {
    constructor(){
        super();

        this.state = {
            user: {
                id: 1,
                name: 'André',
            }
        };
    };

    render(){
        return (
            <div className="page-header">
                <h1 key={this.state.user.id}>Hello {this.state.user.name}! Welcome to my Page!</h1>
            </div>
        )
    };
};

export default PageHeader;
*/

export const PageHeader = props => {
    return (
        <div className="page-header">
            <h1>Hello {props.name}</h1>
        </div>
    )
}