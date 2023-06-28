export const NavBarFE = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Trang chủ</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                            Món ngon
                        </a>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="/food/kho">Kho</a>
                            <a class="dropdown-item" href="/food/chien">Chiên</a>
                            <a class="dropdown-item" href="/food/goi">Gỏi/Nộm</a>
                            <a class="dropdown-item" href="/food/sup">Canh/Súp</a>
                            <a class="dropdown-item" href="/food/hap">Hấp</a>
                            <a class="dropdown-item" href="/food/lau">Lẩu</a>
                            <a class="dropdown-item" href="/food/others">Cách chế biến khác</a>
                            
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Công thức làm bánh</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Món chay</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Kinh nghiệm hay</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Dụng cụ bếp</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}