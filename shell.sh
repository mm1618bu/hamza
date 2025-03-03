#!/bin/bash

# Check if Expo CLI is installed, if not install it globally
if ! command -v expo &> /dev/null
then
    echo "Expo CLI not found. Installing Expo CLI globally..."
    npm install -g expo-cli
else
    echo "Expo CLI is already installed."
fi

# Ask the user for the app name
echo "Enter your app name:"
read app_name

# Create a new Expo project
echo "Creating a new Expo project named $app_name..."
expo init "$app_name" --template blank

# Navigate to the project directory
cd "$app_name"

# Install additional dependencies
echo "Installing additional dependencies for React Navigation and Screens..."
npm install @react-navigation/native @react-navigation/stack react-native-screens react-native-safe-area-context react-navigation

# Create the required directories for screens
mkdir src
mkdir src/screens

# Create the Login screen component
cat <<EOL > src/screens/Login.js
import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}}>
        <Text style={styles.footerText}>Forgot Password?</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingLeft: 10,
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  footerText: {
    color: "#007bff",
    textDecorationLine: "underline",
  },
});
EOL

# Create the Register screen component
cat <<EOL > src/screens/Register.js
import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Register</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingLeft: 10,
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
EOL

# Create the Forgot Password screen component
cat <<EOL > src/screens/ForgotPassword.js
import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Forgot Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Reset Password</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingLeft: 10,
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
EOL

# Setup basic navigation for these screens
cat <<EOL > src/navigation/AppNavigator.js
import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Login from "../screens/Login";
import Register from "../screens/Register";
import ForgotPassword from "../screens/ForgotPassword";

const AppNavigator = createStackNavigator(
  {
    Login: Login,
    Register: Register,
    ForgotPassword: ForgotPassword,
  },
  {
    initialRouteName: "Login",
  }
);

export default createAppContainer(AppNavigator);
EOL

# Modify App.js to use the navigator
cat <<EOL > App.js
import React from "react";
import AppNavigator from "./src/navigation/AppNavigator";

export default function App() {
  return <AppNavigator />;
}
EOL

# Start the Expo project
echo "Starting the Expo project..."
expo start

# End of script
echo "Your Expo app with Login, Register, and Forgot Password screens is ready! Open the Expo Developer Tools in your browser."
