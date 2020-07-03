import { createSelector } from 'reselect'

export const getCards = state => {
	return state.profile.cards
}
