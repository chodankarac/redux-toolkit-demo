const { configureStore } = require("@reduxjs/toolkit");
const cakeReducer = require("../features/cake/cakeSlice");
const iceCreamReducer = require("../features/icecream/iceCreamSlice");

const store = configureStore({
  //instead of createstore,configurestore method used in rtk
  //configureStore can be used as a combineReducer
  reducer: {
    cake: cakeReducer,
    iceCream: iceCreamReducer,
  },
});

module.exports = store;
