import React from "react";
import { View, ScrollView } from "react-native";

import Translate from "@app/translations";
import { colors } from "../../../../styles";

import ProfileInfo from "../../../../components/Profile/components/ProfileInfo";

import styles from "./styles";
import ProfileListItem from "../../../../components/Profile/components/ProfileListItem/ProfileListItem";

const ProfileHomeView = ({
  navigation,
  onLogOut,
  user,
  authenticated,
  addPhoto,
  imageSource,
  avatarLoading,
}) => {
  if (!authenticated) navigation.navigate("Auth");
  return (
    <ScrollView style={styles.container}>
      {user ? (
        <ProfileInfo
          addPhoto={addPhoto}
          name={`${user.first_name} ${user.last_name}`}
          email={user.email}
          user={user}
          imageSource={imageSource}
          avatarLoading={avatarLoading}
        />
      ) : (
        <ProfileInfo addPhoto={addPhoto} name="Loading" email="Loading" />
      )}

      <View pointerEvents={avatarLoading ? "none" : "auto"}>
        <ProfileListItem
          icon="PersonalInformation"
          text={<Translate value="PROFILE_personalInfoLink" />}
          borderTop={{ borderTopWidth: 1, borderTopColor: "#D8D8D8" }}
          onPress={() => navigation.navigate("PersonalInformation")}
        />
        <ProfileListItem
          icon="PaymentMethods"
          text={<Translate value="PROFILE_paymentMethodsLink" />}
          onPress={() => navigation.navigate("PaymentsHome")}
        />
        <ProfileListItem
          icon="Subscription"
          text={<Translate value="PROFILE_subscriptionsLink" />}
          onPress={() => navigation.navigate("SubscriptionsHome")}
        />
        <ProfileListItem
          icon="Locations"
          text={<Translate value="PROFILE_mySavedLocationsLink" />}
          onPress={() => navigation.navigate("MySavedLocations")}
        />
        <ProfileListItem
          icon="Messages"
          text={<Translate value="PROFILE_messagesLink" />}
          onPress={() => navigation.navigate("MessagesHome")}
        />
        {/* <ProfileListItem
					icon="Refer"
					text={<Translate value="PROFILE_referLink" />}
					onPress={() => navigation.navigate('ReferFriend')}
				/> */}
        <ProfileListItem
          icon="Notification"
          text={<Translate value="PROFILE_notificationsLink" />}
          onPress={() => navigation.navigate("Notifications")}
        />
      </View>
      <View style={styles.sectionMarginTop}>
        <ProfileListItem
          icon="CleaningPractices"
          text={<Translate value="PROFILE_cleaningLink" />}
          borderTop={{ borderTopWidth: 1, borderTopColor: "#D8D8D8" }}
          onPress={() => navigation.navigate("CleaningPractices")}
        />
        <ProfileListItem
          icon="Locations"
          text={<Translate value="PROFILE_storeLocationsLink" />}
          onPress={() => navigation.navigate("StoreLocations")}
        />
      </View>
      <View style={styles.sectionMarginTop}>
        <ProfileListItem
          icon="About"
          text={<Translate value="PROFILE_aboutLink" />}
          borderTop={{ borderTopWidth: 1, borderTopColor: "#D8D8D8" }}
          onPress={() => navigation.navigate("About")}
        />
      </View>
      <View style={styles.sectionMarginTop}>
        <ProfileListItem
          icon="LogOut"
          text={<Translate value="PROFILE_logOutLink" />}
          borderTop={{ borderTopWidth: 1, borderTopColor: "#D8D8D8" }}
          onPress={onLogOut}
        />
      </View>
    </ScrollView>
  );
};

export default ProfileHomeView;
