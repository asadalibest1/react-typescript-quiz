import React from 'react'
import App1 from './App1'
import {TransProvider} from './components/store/store'

export default function App() {
    return (
        <div>
            <TransProvider>
            <App1 />
            </TransProvider>
        </div>
    )
}
