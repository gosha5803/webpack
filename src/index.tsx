import {createRoot} from 'react-dom/client'
import { App } from './App'
import { BrowserRouter } from 'react-router-dom'

var root = document.getElementById('root')

if(!root) {
    throw new Error('No root')
}

createRoot(root).render(
<BrowserRouter>
    <App/>
</BrowserRouter>
)

