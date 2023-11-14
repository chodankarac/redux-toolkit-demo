const { configureStore } = require("@reduxjs/toolkit");
const cakeReducer = require("../features/cake/cakeSlice");

const store = configureStore({
  //instead of createstore,configurestore method used in rtk
  reducer: {
    cake: cakeReducer,
  },
});

module.exports = store;
