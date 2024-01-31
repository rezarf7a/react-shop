import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import productSlice from "../features/product/productSlice";
import cardSlice from "../features/card/cardSlice";

const store = configureStore({
    reducer: {
        product : productSlice,
        card: cardSlice,
    },

    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
})

export default store