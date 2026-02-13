import AsyncStorage from "@react-native-async-storage/async-storage";
import { FilterStatus } from "@/Types/FilterStatus";

const ITEM_STORAGE_KEY = "@comprar:items";

export type ItemStorage ={
    id: string;
    description: string;
    status: FilterStatus;
}

async function get(): Promise<ItemStorage[]>{
    try{
        const response = await AsyncStorage.getItem(ITEM_STORAGE_KEY);
        console.log("function getItems", response);
        return response ? JSON.parse(response) : [];

    } catch (error){
        throw new Error("ITEM:GET: " + error)
    }
}

async function getByStatus(status: FilterStatus): Promise<ItemStorage[]>{
    const response = await get();
    return response.filter( (item) => item.status === status)
}

async function saveItems(items: ItemStorage[]): Promise<void> {
    try {
      await AsyncStorage.setItem(ITEM_STORAGE_KEY, JSON.stringify(items));
    } catch (error) {
      throw new Error("ITEM:SAVE: " + error);
    }
}

async function addItem(newItem: ItemStorage): Promise<ItemStorage[]> {
    try {
      const itemsSaved = await get();
      const newItems = [...itemsSaved, newItem];
      await saveItems(newItems);
      return newItems;
    } catch (error) {
      throw new Error("ITEM:ADD: " + error);
    }    
}

async function removeItem(id: string): Promise<void> {
    try {
        const itemsSaved = await get();
        const newItems = itemsSaved.filter((items) => items.id !== id);
        console.log("function clearItems", newItems);
        await saveItems(newItems);
    } catch (error) {
        throw new Error("CLEAR:ITEMS: " + error)
    }
}

async function clearItems(): Promise<void>{
    try {
        // const newList: ItemStorage[] = [];method 1
        // await saveItems(newList);
        // await saveItems([]);methosd 2 
        await AsyncStorage.removeItem(ITEM_STORAGE_KEY);       
    } catch (error) {
        throw new Error("CLEAR:ITEMS: " + error)        
    }
}

async function toogleStatus(id: string):Promise<FilterStatus | undefined> {
    try {
        const itemsSaved = await get();
        const newItems = itemsSaved.filter((item) => item.id !== id);
        const itemToChange = itemsSaved.find((item) => item.id === id);
        if (!itemToChange) return
        {itemToChange?.status == FilterStatus.PENDING ? itemToChange.status = FilterStatus.DONE : itemToChange.status = FilterStatus.PENDING}
        const itemToSave = [...newItems, itemToChange];
        await saveItems(itemToSave);
        return itemToChange.status
    } catch (error) {
        throw new Error("TOOGLE:STATUS: " + error)  
    }
}

export const itemsStorage = { 
    get,
    getByStatus,
    addItem,
    removeItem,
    clearItems,
    toogleStatus
}