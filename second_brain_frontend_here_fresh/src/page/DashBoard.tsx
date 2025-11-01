import { useState } from 'react'

import { Button } from '../components/Button'
import { ShareIcon } from '../icons/ShareIcon'
import { PlusIcon } from '../icons/PlusIcon'
import { Card } from '../components/Card'
import { CreateContentModel } from '../components/CreateContentModal'
import { SideBar } from '../components/SideBar'

function DashBoard() {
  const [modelOpen, setModalOpen] = useState(false)

  return (
    <div>
      <SideBar></SideBar>
      <div className='p-4 ml-72 min-h-screen bg-gray-100'>
        <CreateContentModel open={modelOpen} onClose={() => {
          setModalOpen(false)
        }}></CreateContentModel>

        <div className='flex justify-end gap-4'>
          <Button onClick={() => {
            setModalOpen(true)
          }} varient="primary" text="share Brain" startIcon={<ShareIcon></ShareIcon>}></Button>
          <Button varient="secondary" text="add text" startIcon={<PlusIcon></PlusIcon>}></Button>
        </div>
        <div className='flex gap-2'>
          <Card type="twitter" title="first tweet" link="https://x.com/PawarSarthak24/status/1979778871546528081"></Card>
          <Card type="youtube" title='first youtube video ' link='https://youtu.be/WpBn9w-Js_c?si=P7UWcs94zy5sCNHl'></Card>

        </div>
      </div>
    </div>


  )
}

export default DashBoard
