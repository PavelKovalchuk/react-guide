import React from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Auxiliary/Auxiliary';

const withErrorHandler = (WrappedComponent,axios) => {

    return class extends React.Component{

        state = {
            error: null,
        }

        componentWillMount(){

            this.requestInterceptor = axios.interceptors.request.use(

                request => {
                    this.setState({
                        error: null,
                    });

                    return request;
                }

            );

            this.responseInterceptor = axios.interceptors.response.use(
                response => response,
                error => {
                    this.setState({
                       error: error,
                    });

                }
            );
        }

        componentWillUnmount(){
            //console.log('withErrorHandler componentWillUnmount', this.requestInterceptor, this.responseInterceptor);
            axios.interceptors.request.eject(this.requestInterceptor);
            axios.interceptors.response.eject(this.responseInterceptor);

        }


        errorConfirmedError = () => {
            this.setState({
                error: null,
            });
        }

        render(){
            return (
                <Aux>
                    <Modal
                        show={this.state.error}
                        modalClosed={this.errorConfirmedError}
                    >
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Aux>

            );
        }

    }
}

export default withErrorHandler;

