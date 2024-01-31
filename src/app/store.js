import { configureStore } from "@reduxjs/toolkit";

import productSlice from "../features/product/productSlice";
import cardSlice from "../features/card/cardSlice";

const store = configureStore({
    reducer: {
        product : productSlice,
        card: cardSlice,
    },
})

export default store