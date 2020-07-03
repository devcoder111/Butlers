import React, { Component } from 'react'
import { YellowBox } from 'react-native'
import SplashScreen from 'react-native-splash-screen'
import { Provider } from 'react-redux'

// import Echo from 'laravel-echo/dist/echo'
// import Pusher from 'pusher-js'
// import { IntlProvider } from 'react-intl'
import { createAppContainer } from 'react-navigation'
import configureStore from './redux/configureStore'

import Router from './navigation'

YellowBox.ignoreWarnings([''])

const store = configureStore()
const RootNavigator = createAppContainer(Router)

class App extends Component {
	// constructor(props) {
	// 	super(props)
	// 	const echo = new Echo({
	// 		broadcaster: 'pusher',
	// 		host: 'http://buttler.tk/laravel-websockets',
	// 		client: Pusher,
	// 		auth: {
	// 			headers: {
	// 				Authorization: ` ${this.props.token}`,
	// 			},
	// 		},
	// 	})
	// 	echo.private(this.props.channel_id).listen('MessageIvent', event => {
	// 		console.log(event)
	// 	})
	// }

	componentDidMount() {
		SplashScreen.hide()
	}

	render() {
		return (
			<Provider store={store}>
				{/* <IntlProvider locale="en"> */}
				<RootNavigator />
				{/* </IntlProvider> */}
			</Provider>
		)
	}
}

export default App
