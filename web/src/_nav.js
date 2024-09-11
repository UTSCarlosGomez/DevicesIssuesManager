import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilApplications,
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilHome,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
  cilUser,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

// Obtener el rol del usuario desde localStorage
const user = JSON.parse(localStorage.getItem('user'))

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
    },
  },
  {
    component: CNavTitle,
    name: 'Sistema',
  },
  {
    component: CNavItem,
    name: 'Devices',
    to: '/devices',
    icon: <CIcon icon={cilApplications} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Issues',
    to: '/issues',
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
  },
  // Mostrar solo si el usuario es admin
  user?.role === 'admin' && {
    component: CNavItem,
    name: 'Users',
    to: '/users',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Rooms',
    to: '/rooms',
    icon: <CIcon icon={cilHome} customClassName="nav-icon" />,
  },
]
// Filtrar los elementos no válidos (por ejemplo, el ítem 'Users' si no es admin)
const filteredNav = _nav.filter(Boolean)

export default filteredNav
