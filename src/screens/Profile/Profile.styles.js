import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  coverPhoto: {
    width: "100%",
    height: 200,
  },
  wallpaperContainer: {
    position: "relative",
  },
  cameraWallpaper: {
    position: "absolute",
    right: 20,
    bottom: 20,
    width: 60,
    backgroundColor: "gray",
    opacity: 0.6,
    borderRadius: 10,
  },
  dpContainer: {
    height: 200,
    width: 200,
    borderRadius: 200,
    position: "absolute",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    marginTop: 100,
  },
  dpBlueRound: {
    height: "95%",
    width: "95%",
    borderRadius: 200,
    borderWidth: 5,
    borderColor: colors.mainColor,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  dp: {
    height: 170,
    width: 170,
    borderRadius: 200,
  },
  activeNowTick: {
    height: 30,
    width: 30,
    backgroundColor: colors.green02,
    borderRadius: 30,
    position: "absolute",
    right: 0,
    bottom: 20,
    borderWidth: 3,
    borderColor: "white",
  },
  cameraAvatar: {
    position: "absolute",
    bottom: 10,
    right: 10,
    width: 40,
    backgroundColor: colors.grayMain,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: "#fff",
  },
  name: {
    alignSelf: "center",
    marginTop: 100,
    fontWeight: "bold",
    fontSize: 30,
  },
  shortBio: {
    alignSelf: "center",
    fontSize: 18,
    color: "gray",
  },
  profileTabsContainer: {
    height: 100,
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  tabContainer: {
    height: 95,
    width: 90,
    alignItems: "center",
    justifyContent: "center",
  },
  tabImage: {
    fontSize: 25,
  },
  tabImageContainer: {
    backgroundColor: "lightgray",
    height: 55,
    width: 55,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 60,
  },
  tabText: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 5,
  },
  aboutContainer: {
    marginTop: 15,
  },
  aboutItem: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: 10,
    marginVertical: 5,
  },
  iconAbout: {
    fontSize: 18,
    flex: 1,
  },
  containerText: {
    flex: 10,
  },
  normalText: {
    fontSize: 18,
  },
  boldText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
