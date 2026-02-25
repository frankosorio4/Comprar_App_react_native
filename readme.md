# 🛒 Comprar App - Shopping List Manager

A mobile application built with **React Native** and **Expo** designed to help users manage their shopping lists efficiently. The app allows users to record items, track their status (**Pending** vs. **Done**), and persist data directly on the device.

> **Note:** This project was developed as part of an exercise for a programming course to practice state management, componentization, and local data persistence in mobile environments.

---

## 📱 Features

- **Add Items:** Quickly record new items to your shopping list.
- **Status Tracking:** Toggle items between **Pending** and **Done** status.
- **Persistent Storage:** Data is saved locally on the phone using AsyncStorage, so your list remains even after closing the app.
- **Filtering:** Filter the view to see only pending items or those already bought.
- **List Management:** Remove individual items or clear the entire list with a confirmation alert.
- **Responsive UI:** Styled using TypeScript and optimized for a clean user experience.

---

## 🛠️ Technologies Used

- **React Native** & **Expo**
- **TypeScript** (for type safety and better developer experience)
- **Async Storage** - Local device data persistence
- **Lucide React Native** - Clean, modern iconography
- **React Native SVG** - Vector graphics rendering

---

## 📂 Project Structure

    Comprar_App_react_native
    ├── src
    │   ├── app/Home          # Main screen (Home) logic and styles
    │   ├── Components        # Reusable UI components (Button, Filter, Item, etc.)
    │   ├── storage           # AsyncStorage logic (itemStorage.ts)
    │   ├── Types             # TypeScript interfaces and Enums (FilterStatus)
    │   └── assets            # Local images and branding
    ├── index.ts              # App entry point
    └── app.json              # Expo configuration
---

## 🚀 Getting Started

To run this project on your local machine or physical device, follow the steps below.

### 1️⃣ Prerequisites

- **Node.js** installed on your machine  
- **Expo Go** app installed on your phone *(or a mobile emulator set up)*

### 2️⃣ Installation

Navigate to the project folder and install the dependencies:

    npm install

### 3️⃣ Run the App

Start the Expo development server:

    npx expo start

Scan the QR code displayed in your terminal using:
- **Expo Go** app (Android)
- **Camera** app (iOS)

---

## 💾 Storage Logic

The app utilizes `@react-native-async-storage/async-storage` to ensure data persistence.  
The logic is centralized in:

    src/storage/itemStorage.ts

### Core Operations

- **addItem** - Saves new item objects to device memory
- **getByStatus** - Retrieves and filters data based on item state (**Pending / Done**)
- **toggleStatus** - Dynamically updates item status
- **clearItems** - Wipes the local database when requested

---

## 🎓 Course Exercise

This application was created as a practical exercise to demonstrate:

- React Hooks (`useState`, `useEffect`)
- Efficient list rendering with `FlatList`
- Asynchronous JavaScript (`async / await`) for storage operations
- Component-based architecture and custom styling in React Native