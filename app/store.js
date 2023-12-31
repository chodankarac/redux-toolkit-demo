const { configureStore } = require("@reduxjs/toolkit");
// const reduxLogger = require("redux-logger");
const cakeReducer = require("../features/cake/cakeSlice");
const iceCreamReducer = require("../features/icecream/iceCreamSlice");
const userReducer = require("../features/user/userSlice");

// const logger = reduxLogger.createLogger();

const store = configureStore({
  //instead of createstore,configurestore method used in rtk
  //configureStore can be used as a combineReducer
  reducer: {
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    user: userReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

module.exports = store;
