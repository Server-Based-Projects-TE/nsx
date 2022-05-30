import { HomeIcon } from '@heroicons/react/outline'
import React, { memo } from 'react'

import { handleLogout } from '../../handler'

const LogoutLink: React.FC = memo(() => {
  return (
    <button
      onClick={handleLogout}
      data-cy="logout-btn"
      className="group flex items-center rounded-md bg-gray-900 px-2 py-2 text-base font-medium text-white"
    >
      <HomeIcon className="'text-gray-300 flex-shrink-0' mr-4 h-6 w-6" />
      Logout
    </button>
  )
})
LogoutLink.displayName = 'LogoutLink'

export default LogoutLink