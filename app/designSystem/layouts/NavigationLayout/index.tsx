// import { useUserContext } from '@/core/context'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { Flex } from 'antd'
import { ReactNode } from 'react'
import { Leftbar } from './components/Leftbar'
import { Mobilebar } from './components/Mobilebar'
import { Topbar } from './components/Topbar'
import { NavigationItem } from './types'
import { useUserContext } from '~/core/context'

interface Props {
  children: ReactNode
}

export const NavigationLayout: React.FC<Props> = ({ children }) => {
  const router = useNavigate()
  const pathname = useLocation().pathname
  const params: Record<string, string> = useParams()

  const goTo = (url: string) => {
    router(url)
  }

  const items: NavigationItem[] = [
    {
      key: '/home',
      label: 'Dispatcher',
      position: 'leftbar',

      onClick: () => goTo('/home'),
    },

    {
      key: '/live-monitoring',
      label: 'Live Monitoring',
      position: 'leftbar',

      onClick: () => goTo('/live-monitoring'),
    },

    {
      key: '/playback',
      label: 'Playback',
      position: 'leftbar',

      onClick: () => goTo('/playback'),
    },

    {
      key: '/face-search',
      label: 'Face Search',
      position: 'leftbar',

      onClick: () => goTo('/face-search'),
    },

    {
      key: '/camera-management',
      label: 'Camera Management',
      position: 'leftbar',

      onClick: () => goTo('/camera-management'),
    },

    {
      key: '/analyst',
      label: 'Analyst',
      position: 'leftbar',

      onClick: () => goTo('/analyst'),
    },

    {
      key: '/administrator',
      label: 'Administrator',
      position: 'leftbar',

      onClick: () => goTo('/administrator'),
    },
  ]

  const itemsVisible = items
    .filter(item => item.isVisible !== false)
    .map(item => ({
      key: item.key,
      label: item.label,
      position: item.position,
      onClick: item.onClick,
    }))

  const itemsTopbar = itemsVisible.filter(item => item.position === 'topbar')

  const itemsLeftbar = itemsVisible.filter(item => item.position === 'leftbar')

  const itemsLeftbottom = itemsVisible.filter(
    item => item.position === 'leftbar-bottom',
  )

  const itemsMobile = itemsVisible

  let keySelected = pathname

  Object.entries(params).forEach(([key, value]) => {
    keySelected = keySelected.replace(`/${value}`, `/:${key}`)
  })

  return (
    <>
      <Topbar keySelected={keySelected} items={itemsTopbar} />

      <Mobilebar keySelected={keySelected} items={itemsMobile} />

      <Flex flex={1} style={{ overflowY: 'hidden' }}>
        <Leftbar
          keySelected={keySelected}
          items={itemsLeftbar}
          itemsBottom={itemsLeftbottom}
        />

        <Flex flex={1} vertical style={{ overflowY: 'hidden' }}>
          {children}
        </Flex>
      </Flex>
    </>
  )
}