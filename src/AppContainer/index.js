import React from "react";
import { Router } from "react-native-router-flux";

import scenes from "../routes/scenes";

import { Provider } from "react-redux";

export default class AppContainer extends React.Component {

	render(){
		return (

			<Provider store={this.props.store}>
				<Router scenes={scenes} />

			</Provider>

			);
	}
}
