/**
 * Created by YJ on 1/14/17.
 */
import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class AboutView extends React.Component {

    static propTypes = {
        statusText: React.PropTypes.string,
        userName: React.PropTypes.string
    };

    render() {
        return (
            <div className="container">
                <div className="margin-top-medium text-center">
                </div>
                <div className="text-center">
                    <h1>This is About page</h1>
                    <h4>Hello, {this.props.userName || 'guest'}.</h4>
                </div>
                <div className="margin-top-medium text-center">
                    <p>I wonder this one even works</p>
                </div>
                <div className="margin-top-medium">
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

export default connect(mapStateToProps)(AboutView);
export { AboutView as AboutViewNotConnected };
