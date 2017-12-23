export const MenuLinksConfig = {
    Home: [
        { label: "Home", path: "home" },
        { label: "My Stores", path: "store/list" },
        { label: "About Us", path: "about-us" },
        { label: "Contact Us", path: "contact-us" }
    ],
    StoreList: [
        { label: "Home", path: "home" },
        { label: "My Stores", path: "store/list" },
        { label: "Add Store", path: "store/new" }
    ],
    NewStore: [
        { label: "Home", path: "home" },
        { label: "My Stores", path: "store/list" },
        { label: "Add Store", path: "store/new" }
    ],
    StoreDetails: [
        { label: "Home", path: "home" },
        { label: "My Stores", path: "store/list" },
        { label: "Store Details", path: "store/:storeId" },
        { label: "Grocery List", path: "store/:storeId/grocery/list" },
        { label: "Add Grocery", path: "store/:storeId/grocery/new" }
    ],
    GroceryList: [
        { label: "Home", path: "home" },
        { label: "My Stores", path: "store/list" },
        { label: "Grocery List", path: "store/:storeId/grocery/list" },
        { label: "Add Grocery", path: "store/:storeId/grocery/new" }
    ],
    NewGrocery: [
        { label: "Home", path: "home" },
        { label: "My Stores", path: "store/list" },
        { label: "Grocery List", path: "store/:storeId/grocery/list" },
        { label: "Add Grocery", path: "store/:storeId/grocery/new" }
    ],
    GroceryDetails: [
        { label: "Home", path: "home" },
        { label: "My Stores", path: "store/list" },
        { label: "Grocery List", path: "store/:storeId/grocery/list" },
        { label: "Grocery Details", path: "store/:storeId/grocery/:groceryId" },
    ]
}