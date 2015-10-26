// El contenido a continuacion reemplaza el contenido de /src/index.jsx para llamar al API
// Dentro de /src/components/news-app/index.jsx en componentWillMount agregar la URL del API

import React from 'react'
import ReactDOM from 'react-dom'
import EmpleadoApp from './news-app'

React.render(<NewsApp />, document.getElementById('application'))
