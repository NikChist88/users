import { createSlice } from '@reduxjs/toolkit'
import { authApi } from '@/api/authApi'
import { Response } from '@/types'

type InitialState = {
  user: Response | null
  isAuthenticated: boolean
}

const initialState: InitialState = {
  user: null,
  isAuthenticated: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, action) => {
        state.user = action.payload
        state.isAuthenticated = true
      }
    )
    builder.addMatcher(
      authApi.endpoints.register.matchFulfilled,
      (state, action) => {
        state.user = action.payload
        state.isAuthenticated = true
      }
    )
    builder.addMatcher(
      authApi.endpoints.current.matchFulfilled,
      (state, action) => {
        state.user = action.payload
        state.isAuthenticated = true
      }
    )
  },
  selectors: {
    selectIsAuthenticated: (state) => state.isAuthenticated,
    selectUser: (state) => state.user,
  },
})

export const authReducer = authSlice.reducer
export const { logout } = authSlice.actions
export const { selectIsAuthenticated, selectUser } = authSlice.selectors
