export default function checkRoute(navigation, type = 'route') {
	return navigation.state.params[type]
}
