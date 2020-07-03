import ProfileHome from '../../../../screens/App/Profile/ProfileHome'
import PersonalInformation from '../../../../screens/App/Profile/PersonalInformation'
import About from '../../../../screens/App/Profile/About/AboutContainer'
import Terms from '../../../../screens/App/Profile/About/TermsOfUse/TermsOfUseContainer'
import FAQ from '../../../../screens/App/Profile/About/FAQ/FAQContainer'
import GDPR from '../../../../screens/App/Profile/About/GDPR/GDPRContainer'
import Pricelist from '../../../../screens/App/Profile/About/Pricelist/Pricelist'
import AppTutorial from '../../../../screens/App/Profile/About/AppTutorial/AppTutorial'
import ContactInfo from '../../../../screens/App/Profile/About/ContactInfo/ContactInfo'
import Notifications from '../../../../screens/App/Profile/Notifications/NotificationsContainer'
import CleaningPractices from '../../../../screens/App/Profile/CleaningPractices/CleaningPracticesContainer'
import PaymentsHome from '../../../../screens/App/Profile/Payments/PaymentsHome'
import DebitCard from '../../../../screens/App/Profile/Payments/DebitCard'
import AddCard from '../../../../screens/App/Profile/Payments/AddCard'
import AddPaymentMethod from '../../../../screens/App/Profile/Payments/AddPaymentMethod'
import SubscriptionsHome from '../../../../screens/App/Profile/Subscriptions/SubscriptionsHome'
import SubscriptionsPaymentMethods from '../../../../screens/App/Profile/Subscriptions/SubscriptionsPaymentMethods'
import StoreLocations from '../../../../screens/App/Profile/StoreLocations/StoreLocationsContainer'
import MySavedLocations from '../../../../screens/App/Profile/MySavedLocations/MySavedLocationsContainer'
import NewLocations from '../../../../screens/App/Profile/MySavedLocations/NewLocations/NewLocationsContainer'
import EditLocation from '../../../../screens/App/Profile/MySavedLocations/EditLocation/EditLocationContainer'
import StoreInfo from '../../../../screens/App/Profile/StoreLocations/StoreInfo/StoreInfo'
import SearchStore from '../../../../screens/App/Profile/StoreLocations/SearchStore/StoreSearchContainer'
import NearestStores from '../../../../screens/App/Profile/StoreLocations/NearestStores/NearestStoresContainer'
import MessagesHome from '../../../../screens/App/Profile/Messages/MessagesHome'
import CurrentChat from '../../../../screens/App/Profile/Messages/CurrentChat/CurrentChatContainer'
import ReferFriend from '../../../../screens/App/Profile/ReferFriend/ReferFriendContainer'
import ReferralBonuses from '../../../../screens/App/Profile/ReferFriend/ReferralBonuses/ReferralBonusesContainer'
import TermsOfReferrals from '../../../../screens/App/Profile/ReferFriend/TermsOfReferrals/TermsOfReferralsContainer'
import NewChat from '../../../../screens/App/Profile/Messages/NewChat/NewChat'
import ShowGdpr from '../../../../screens/App/Profile/About/GDPR/showGdpr/ShowGDPRContainer'
import DeleteGdpr from '../../../../screens/App/Profile/About/GDPR/deleteConfirmation/DeleteGDPRContainer'
import FavouriteLocations from '../../../../screens/App/Profile/FavouriteLocations/FavouriteLocationsContainer'

import WhiteLayoutHOC from '../../../../hoc/WhiteLayoutHOC'

const Routes = {
	ProfileHome: {
		screen: WhiteLayoutHOC(ProfileHome),
	},
	PersonalInformation: {
		screen: WhiteLayoutHOC(PersonalInformation),
	},
	About: {
		screen: WhiteLayoutHOC(About),
	},
	Terms: {
		screen: WhiteLayoutHOC(Terms),
	},
	FAQ: {
		screen: WhiteLayoutHOC(FAQ),
	},
	GDPR: {
		screen: WhiteLayoutHOC(GDPR),
	},
	Pricelist: {
		screen: WhiteLayoutHOC(Pricelist),
	},
	AppTutorial: {
		screen: WhiteLayoutHOC(AppTutorial),
	},
	ContactInfo: {
		screen: WhiteLayoutHOC(ContactInfo),
	},
	Notifications: {
		screen: WhiteLayoutHOC(Notifications),
	},
	CleaningPractices: {
		screen: WhiteLayoutHOC(CleaningPractices),
	},
	PaymentsHome: {
		screen: WhiteLayoutHOC(PaymentsHome),
	},
	DebitCard: {
		screen: WhiteLayoutHOC(DebitCard),
	},
	AddPaymentMethod: {
		screen: WhiteLayoutHOC(AddPaymentMethod),
	},
	AddCard: {
		screen: WhiteLayoutHOC(AddCard),
	},
	SubscriptionsHome: {
		screen: WhiteLayoutHOC(SubscriptionsHome),
	},
	SubscriptionsPaymentMethods: {
		screen: WhiteLayoutHOC(SubscriptionsPaymentMethods),
	},
	StoreLocations: {
		screen: WhiteLayoutHOC(StoreLocations),
	},
	MySavedLocations: {
		screen: WhiteLayoutHOC(MySavedLocations),
	},
	NewLocations: {
		screen: WhiteLayoutHOC(NewLocations),
	},
	EditLocation: {
		screen: WhiteLayoutHOC(EditLocation),
	},
	StoreInfo: {
		screen: WhiteLayoutHOC(StoreInfo),
	},
	SearchStore: {
		screen: WhiteLayoutHOC(SearchStore),
	},
	NearestStores: {
		screen: WhiteLayoutHOC(NearestStores),
	},
	MessagesHome: {
		screen: WhiteLayoutHOC(MessagesHome),
	},
	CurrentChat: {
		screen: WhiteLayoutHOC(CurrentChat),
	},
	ReferFriend: {
		screen: WhiteLayoutHOC(ReferFriend),
	},
	ReferralBonuses: {
		screen: WhiteLayoutHOC(ReferralBonuses),
	},
	TermsOfReferrals: {
		screen: WhiteLayoutHOC(TermsOfReferrals),
	},
	NewChat: {
		screen: WhiteLayoutHOC(NewChat),
	},
	ShowGdpr: {
		screen: WhiteLayoutHOC(ShowGdpr),
	},
	DeleteGdpr: {
		screen: WhiteLayoutHOC(DeleteGdpr),
	},
	FavouriteLocations: {
		screen: WhiteLayoutHOC(FavouriteLocations),
	},
}

export default Routes
