"use client";

import React from 'react'
import { Provider } from 'react-redux'
import { store } from '@/redux/store'

export const StoreProvider = ({ children }: { children: JSX.Element }) => {
    return <Provider store={store}>{children}</Provider>
}