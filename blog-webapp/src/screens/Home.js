import { Outlet, Route } from "react-router-dom";
import { NavBarFE } from "../components/NavbarFE";
import DefaultLayout from "../layouts/DefaultLayout";
import { Container } from "react-bootstrap";
import { FoodList } from "../components/FoodList";
export default function Home() {
    return (
        <DefaultLayout>
            {/* Có thể xóa container đi để thêm content vào đấy */}
            <NavBarFE />
            <Outlet />
        </DefaultLayout>
    )
}