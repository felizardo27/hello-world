import Banner from "components/Banner"
import { Outlet } from "react-router-dom"


const BasePage = () => {
  return (
    <main>
        <Banner />
        <Outlet />
    </main>
  )
}

export default BasePage
