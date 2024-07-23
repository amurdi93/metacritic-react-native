import { Pressable, ScrollView, Text } from "react-native";
import { Link } from "expo-router";
import { HomeIcon } from "../../components/Icons";
import { Screen } from "../../components/Screen";
export default function About() {
  return (
    <Screen>
      <ScrollView>
        <Link asChild href="/">
          <Pressable>
            <HomeIcon />
          </Pressable>
        </Link>
        <Text className="text-white font-bold mb-8 text-2xl">
          Sobre el proyecto
        </Text>

        <Text className="text-white font-bold mb-8 text-2xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. t ratione
          quos itaque ducimus soluta, nihil beatae magnam modi quam? Accusamus
          corporis at repellendus vitae doloremque libero.
        </Text>

        <Text className="text-white font-bold mb-8 text-2xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. t ratione
          quos itaque ducimus soluta, nihil beatae magnam modi quam? Accusamus
          corporis at repellendus vitae doloremque libero.
        </Text>
      </ScrollView>
    </Screen>
  );
}
