import UserHeader from '../components/UserHeader'
import UserPost from '../components/UserPost'

const UserPage = () => {
  return (
    <>
      <UserHeader />
      <UserPost likes={1200} replice={481} postImg="/post1.png" postTitle="Let' s talk about Threads" />
      <UserPost likes={451} replice={15} postImg="/post2.png" postTitle="Hello Friend!" />
      <UserPost likes={947} replice={324} postImg="/post3.png" postTitle="Uxuuuuuuuuuuu" />
      <UserPost likes={36} replice={78} postTitle="This is my first Thread" />
    </>
  )
}

export default UserPage
