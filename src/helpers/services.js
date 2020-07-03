export const toTenSymbols = string => {
	return (
		(string &&
			string
				.split(/\s+/)
				.slice(0, 6)
				.join(' ')) ||
		''
	)
}
