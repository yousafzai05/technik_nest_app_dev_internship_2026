import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Index() {
  const [likes, setLikes] = useState(24);
  const [following, setFollowing] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {/* Profile Image */}
        <View style={styles.profileWrapper}>
          <Image
            source={require("../assets/images/techniknest_logo.jpg")}
            style={styles.profileImage}
            resizeMode="cover"
          />
        </View>

        {/* Company Name */}
        <Text style={styles.companyName}>Technik Nest</Text>
        <Text style={styles.companyType}>Software Company</Text>

        {/* Buttons */}
        <View style={styles.buttonContainer}>
          {/* Like Button */}
          <TouchableOpacity
            style={styles.likeButton}
            onPress={() => setLikes(likes + 1)}
            activeOpacity={0.8}
          >
            <Ionicons name="heart" size={34} color="#000" />
            <Text style={styles.likeText}>{likes}</Text>
          </TouchableOpacity>

          {/* Follow Button */}
          <TouchableOpacity
            style={styles.followButton}
            onPress={() => setFollowing(!following)}
            activeOpacity={0.8}
          >
            <FontAwesome5
              name="user"
              size={18}
              color="#fff"
              style={{ marginRight: 10 }}
            />
            <Text style={styles.followText}>
              {following ? "Following" : "Follow"}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Bottom Text */}
        <Text style={styles.footerText}>
          SECP Registered Private Limited{"\n"}Company{"\n"} (:  By Marjan Yousafzai {"\n"} TN/IN03/MD/001  :)
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#171717",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  card: {
    width: "100%",
    backgroundColor: "#262626",
    borderRadius: 22,
    paddingVertical: 35,
    paddingHorizontal: 22,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.35,
    shadowRadius: 10,
    elevation: 10,
  },

  profileWrapper: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 3,
    borderColor: "#ff7a00",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 25,
  },

  profileImage: {
    width: 125,
    height: 125,
    borderRadius: 62.5,
    backgroundColor: "#444",
  },

  companyName: {
    color: "#fff",
    fontSize: 34,
    fontWeight: "700",
  },

  companyType: {
    color: "#9d9d9d",
    fontSize: 18,
    marginTop: 10,
    marginBottom: 35,
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 50,
  },

  likeButton: {
    width: "46%",
    height: 80,
    backgroundColor: "#ff7a00",
    borderRadius: 16,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  likeText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "700",
    marginLeft: 15,
  },

  followButton: {
    width: "46%",
    height: 80,
    backgroundColor: "#3a3a3a",
    borderRadius: 16,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  followText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "700",
  },

  footerText: {
    color: "#8c8c8c",
    fontSize: 18,
    fontStyle: "italic",
    textAlign: "center",
    lineHeight: 28,
  },
});