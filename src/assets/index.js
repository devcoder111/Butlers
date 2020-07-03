import React from 'react'

import PersonalInformation from './Icons/Icons/My account/PersonalInformation.svg'
import PaymentMethods from './Icons/Icons/My account/PaymentMethods.svg'
import SubscriptionPlans from './Icons/Icons/My account/SubsPlans.svg'
import Messages from './Icons/Icons/My account/Messages.svg'
import ReferAFriend from './Icons/Icons/My account/ReferAFriend.svg'
import Notification from './Icons/Icons/My account/Notifications.svg'
import CleaningPractices from './Icons/Icons/My account/CleaningPracticies.svg'
import StoreLocations from './Icons/Icons/My account/StoreLocations.svg'
import About from './Icons/Icons/My account/About.svg'
import LogOut from './Icons/Icons/My account/Logout.svg'
import Mastercard from './Icons/Icons/Payments/Payments/Mastercard.svg'
import MobilePay from './Icons/Icons/Payments/Payments/MobilePay.svg'
import Visa from './Icons/Icons/Payments/Payments/Visa.svg'
import TermsOfUse from './Icons/Icons/My account/TermsOfUse.svg'
import FAQ from './Icons/Icons/My account/FAQs.svg'
import GDPR from './Icons/Icons/My account/GDPR.svg'
import Pricelist from './Icons/Icons/My account/Pricelist.svg'
import AppTutorial from './Icons/Icons/My account/AppTutorial.svg'
import ContactInfo from './Icons/Icons/My account/ContactInfo.svg'
import Email from './Icons/Icons/RegistrationOptions/email.svg'
import Facebook from './Icons/Icons/RegistrationOptions/facebook.svg'
import Phone from './Icons/Icons/RegistrationOptions/phone.svg'
import Account from './Icons/Icons/Toolbar/Toolbar/Account.svg'
import Favorites from './Icons/Icons/Toolbar/Toolbar/Favorites.svg'
import Main from './Icons/Icons/Toolbar/Toolbar/Main.svg'
import Orders from './Icons/Icons/Toolbar/Toolbar/Orders.svg'
import ForwardActive from './Icons/Icons/FloatingButton/NextActive.svg'
import ForwardInactive from './Icons/Icons/FloatingButton/NextInactive.svg'
import Basket from './Icons/Icons/Floating button/Busket button active.svg'
import Neighborhood from './Butlers1new2.svg'
import Illustration2 from './Butlers2.svg'
import Illustration3 from './Butlers3.svg'
import Illustration4 from './Butlers4.svg'
import Illustration5 from './Butlers5.svg'
import Illustration6 from './Butlers6.svg'
import Illustration7 from './Butlers7.svg'
import Illustration8 from './Butlers8.svg'
import Illustration9 from './Butlers9.svg'
import Illustration10 from './Butlers10.svg'
import Cross from './Shape.svg'
import Clock from './Clock.svg'
import Logo from './Logo.svg'
import Success from './Success.svg'
import Trousers from './Trousers.svg'
import SmallLogo from './logos/butlers.svg'
import Thankyou from './Thankyou.png'

export default (icon, tintColor, crossColor = '#000') => {
	switch (icon) {
		case 'PersonalInformation':
			return <PersonalInformation fill="#1E272E" />

		case 'PaymentMethods':
			return <PaymentMethods fill="#1E272E" />

		case 'Subscription':
			return <SubscriptionPlans fill="#1E272E" />

		case 'Messages':
			return <Messages fill="#1E272E" />

		case 'Refer':
			return <ReferAFriend fill="#1E272E" />

		case 'Notification':
			return <Notification fill="#1E272E" />

		case 'CleaningPractices':
			return <CleaningPractices fill="#1E272E" />

		case 'Locations':
			return <StoreLocations fill="#1E272E" />

		case 'About':
			return <About fill="#1E272E" />

		case 'LogOut':
			return <LogOut fill="#1E272E" />

		case 'mastercard':
			return <Mastercard fill="#1E272E" />

		case 'MobilePay':
			return <MobilePay fill="#1E272E" />

		case 'visa':
			return <Visa fill="#1E272E" />

		case 'TermsOfUse':
			return <TermsOfUse fill="#1E272E" />

		case 'FAQ':
			return <FAQ fill="#1E272E" />

		case 'GDPR':
			return <GDPR fill="#1E272E" />

		case 'Pricelist':
			return <Pricelist fill="#1E272E" />

		case 'AppTutorial':
			return <AppTutorial fill="#1E272E" />

		case 'ContactInfo':
			return <ContactInfo fill="#1E272E" />

		case 'email':
			return <Email fill="#1E272E" />

		case 'phone':
			return <Phone fill="#1E272E" />

		case 'facebook':
			return <Facebook fill="#1E272E" />

		case 'Account':
			return <Account fill={tintColor} />

		case 'Favorites':
			return <Favorites fill={tintColor} />

		case 'Main':
			return <Main fill={tintColor} />

		case 'Orders':
			return <Orders fill={tintColor} />

		case 'MapMarker':
			return <Orders />
		case 'Basket':
			return <Basket />

		case 'forwardActive':
			return <ForwardActive />

		case 'forwardInactive':
			return <ForwardInactive />

		case 'neighborhood':
			return <Neighborhood />

		case 'Illustration2':
			return <Illustration2 />

		case 'Illustration3':
			return <Illustration3 />

		case 'Illustration4':
			return <Illustration4 />

		case 'Illustration5':
			return <Illustration5 />

		case 'Illustration6':
			return <Illustration6 />

		case 'Illustration7':
			return <Illustration7 />

		case 'Illustration8':
			return <Illustration8 />

		case 'Illustration9':
			return <Illustration9 />

		case 'Illustration10':
			return <Illustration10 />

		case 'Cross':
			return <Cross fill={crossColor} />

		case 'Clock':
			return <Clock fill={tintColor} />

		case 'Loader':
			return <Logo />

		case 'Success':
			return <Success />

		case 'Trousers':
			return <Trousers />

		case 'SmallLogo':
			return <SmallLogo />

		default:
			return <Messages />
	}
}
