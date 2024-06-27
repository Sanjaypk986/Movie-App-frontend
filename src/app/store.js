import { configureStore } from '@reduxjs/toolkit'
import loginReducer from '../features/login/loginSlice'
import reviewReducer from '../features/review/reviewSlice';


export default configureStore({
  reducer: {
    login: loginReducer,
    review: reviewReducer
     
  }
})