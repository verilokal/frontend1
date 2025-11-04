import { Stack } from "expo-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Layout() {
  return (
    <>
      <Navbar />
      <Stack screenOptions={{ headerShown: false }} />
      <Footer />
    </>
  );
}
