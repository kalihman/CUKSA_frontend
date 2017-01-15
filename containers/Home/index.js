import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import './style.scss';

class HomeView extends React.Component {

    static propTypes = {
        statusText: React.PropTypes.string,
        userName: React.PropTypes.string
    };

    render() {
        return (
            <div className="container" id="header">
                <div className="text-center">
                    <h4>Hello, {this.props.userName || 'guest'}.</h4>
                </div>
                <div className="text-center">
                    <p>Attempt to access some <Link to="/protected"><b>protected content</b></Link>.</p>
                </div>
                <div className="text-center">
                    {this.props.statusText ?
                        <div className="alert alert-info">
                            {this.props.statusText}
                        </div>
                        :
                        null
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userName: state.auth.userName,
        statusText: state.auth.statusText
    };
};

export default connect(mapStateToProps)(HomeView);
export { HomeView as HomeViewNotConnected };
