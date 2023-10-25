import { useEffect, useState } from 'react'
import UserHeader from '../components/UserHeader'
import UserPost from '../components/UserPost'
import { useParams } from 'react-router-dom'
import useShowToast from '../hooks/useShowToast'

const UserPage = () => {
  const [user, setUser] = useState(null)
  const { username } = useParams()
  const showToast = useShowToast()

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await fetch(`/api/users/profile/${username}`)
        const data = await res.json()
        if (data.error) {
          showToast('Error', data.error, 'error')
          return
        }
        setUser(data)
      } catch (error) {
        showToast('Error', error, 'error')
      }
    }

    getUser()
  }, [username, showToast])

  if (!user) return null

  return (
    <>
      <UserHeader user={user} />
      <UserPost likes={1200} replice={481} postImg="/post1.png" postTitle="Let' s talk about Threads" />
      <UserPost likes={451} replice={15} postImg="/post2.png" postTitle="Hello Friend!" />
      <UserPost likes={947} replice={324} postImg="/post3.png" postTitle="Uxuuuuuuuuuuu" />
      <UserPost likes={36} replice={78} postTitle="This is my first Thread" />
    </>
  )
}

export default UserPage
