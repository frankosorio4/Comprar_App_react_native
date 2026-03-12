# 🛒 Comprar — Shopping List App

A mobile shopping list manager built with **React Native** and **Expo**. Add items, track their status, and keep your list saved on-device even after closing the app.

> Developed as a practical exercise for a RocketSeat React Native course, covering state management, component architecture, and local data persistence.

---

## 📱 Features

- **Add items** — Quickly record new items to your list
- **Toggle status** — Mark items as Pending or Purchased with a tap
- **Filter by status** — Switch between Pending and Purchased views
- **Persistent storage** — List is saved locally using AsyncStorage and survives app restarts
- **Delete items** — Remove individual items or clear the entire list (with confirmation)

---

## 🛠️ Tech Stack

| Tool | Purpose |
|---|---|
| React Native 0.81 + Expo ~54 | Mobile framework |
| React 19 | UI library |
| TypeScript (strict) | Type safety |
| `@react-native-async-storage/async-storage` | Local data persistence |
| `lucide-react-native` | Icons |
| `react-native-svg` | SVG rendering support |

---

## 📂 Project Structure

```
comprar/
├── src/
│   ├── app/
│   │   └── Home/               # Main screen — logic and styles
│   ├── Components/
│   │   ├── Button/             # Reusable button
│   │   ├── Filter/             # Pending / Purchased toggle tabs
│   │   ├── Input/              # Styled text input
│   │   ├── Item/               # List row with status icon and delete button
│   │   └── StatusIcon/         # CircleCheck (done) / CircleDashed (pending) icon
│   ├── storage/
│   │   └── itemStorage.ts      # All AsyncStorage CRUD operations
│   ├── Types/
│   │   └── FilterStatus.ts     # Enum: PENDING | DONE
│   └── assets/                 # Logo images
├── index.ts                    # App entry point
└── app.json                    # Expo configuration
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed
- [Expo Go](https://expo.dev/client) app on your phone *(or a configured emulator)*

### Install & Run

```bash
# Install dependencies
npm install

# Start the Expo dev server
npx expo start
```

Scan the QR code with **Expo Go** (Android) or the **Camera app** (iOS).

To run directly on a platform:

```bash
npm run android
npm run ios
```

---

## 💾 Storage API

All persistence logic lives in `src/storage/itemStorage.ts`, using `@react-native-async-storage/async-storage` under the key `@comprar:items`.

| Function | Description |
|---|---|
| `get()` | Returns all saved items |
| `getByStatus(status)` | Returns items filtered by `PENDING` or `DONE` |
| `addItem(newItem)` | Appends a new item and saves the updated list |
| `removeItem(id)` | Removes a specific item by ID |
| `clearItems()` | Wipes the entire list from storage |
| `toggleStatus(id)` | Flips an item's status between `PENDING` and `DONE` |

---

## 🎓 Concepts Practiced

- `useState` and `useEffect` hooks
- Async/await with `AsyncStorage`
- `FlatList` for performant list rendering
- Component-based architecture with typed props
- TypeScript path aliases (`@/` → `src/`)
- Branch-based Git workflow (`main` → `develop` → feature branches)
