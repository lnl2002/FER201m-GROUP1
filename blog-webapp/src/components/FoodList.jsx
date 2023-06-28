import { useParams } from "react-router-dom";

export const FoodList = () => {
    let { type } = useParams();
    return (
        <>
            <div class="card bg-dark text-dark text-uppercase rounded-0 border-0">
                <img src="https://yummyday.vn/themes/frontend/images/bg-cat.jpg" style={{ height: '120px', objectFit: 'cover' }} class="card-img img-fluid" alt="..." />
                <div class="card-img-overlay">
                    <h5 class="card-title">{type}</h5>
                </div>
            </div>
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div className="d-flex justify-content-center">
                            <div class="card border-0 mg-3 d-flex flex-column justify-content-center align-items-center">
                                <img style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover' }} src="https://yummyday.vn/uploads/images/material-bo.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title text-center">Bồ Câu</h5>
                                </div>
                            </div>
                            <div class="card border-0 mg-3 d-flex flex-column justify-content-center align-items-center">
                                <img style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover' }} src="https://yummyday.vn/uploads/images/material-bo.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title text-center">Đà điểu</h5>
                                </div>
                            </div>
                            <div class="card border-0 mg-3 d-flex flex-column justify-content-center align-items-center">
                                <img style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover' }} src="https://yummyday.vn/uploads/images/material-bo.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title text-center">Trâu</h5>
                                </div>
                            </div>
                            <div class="card border-0 mg-3 d-flex flex-column justify-content-center align-items-center">
                                <img style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover' }} src="https://yummyday.vn/uploads/images/material-bo.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title text-center">Bò</h5>
                                </div>
                            </div>
                            <div class="card border-0 mg-3 d-flex flex-column justify-content-center align-items-center">
                                <img style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover' }} src="https://yummyday.vn/uploads/images/material-bo.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title text-center">Hến</h5>
                                </div>
                            </div>
                            <div class="card border-0 mg-3 d-flex flex-column justify-content-center align-items-center">
                                <img style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover' }} src="https://yummyday.vn/uploads/images/material-bo.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title text-center">Ghẹ</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div className="d-flex justify-content-center">
                            <div class="card border-0 mg-3 d-flex flex-column justify-content-center align-items-center">
                                <img style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover' }} src="https://yummyday.vn/uploads/images/material-bo.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title text-center">Bò</h5>
                                </div>
                            </div>
                            <div class="card border-0 mg-3 d-flex flex-column justify-content-center align-items-center">
                                <img style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover' }} src="https://yummyday.vn/uploads/images/material-bo.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title text-center">Gà</h5>
                                </div>
                            </div>
                            <div class="card border-0 mg-3 d-flex flex-column justify-content-center align-items-center">
                                <img style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover' }} src="https://yummyday.vn/uploads/images/material-bo.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title text-center">Heo</h5>
                                </div>
                            </div>
                            <div class="card border-0 mg-3 d-flex flex-column justify-content-center align-items-center">
                                <img style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover' }} src="https://yummyday.vn/uploads/images/material-bo.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title text-center">Vịt</h5>
                                </div>
                            </div>
                            <div class="card border-0 mg-3 d-flex flex-column justify-content-center align-items-center">
                                <img style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover' }} src="https://yummyday.vn/uploads/images/material-bo.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title text-center">Ốc</h5>
                                </div>
                            </div>
                            <div class="card border-0 mg-3 d-flex flex-column justify-content-center align-items-center">
                                <img style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover' }} src="https://yummyday.vn/uploads/images/material-bo.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title text-center">Rau Rừng</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-target="#carouselExampleControls" data-slide="prev">
                    <span style={{ opacity: 0 }} class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="text-dark" style={{ fontSize: '40px' }}>«</span>
                </button>
                <button class="carousel-control-next" type="button" data-target="#carouselExampleControls" data-slide="next">
                    <span style={{ opacity: 0 }} class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="text-dark" style={{ fontSize: '40px' }}>»</span>
                </button>
            </div>
            <div className="container">
                <div className="row m-0">
                    <button type="button" class="btn btn-secondary me-2">#Món ngon từ mực</button>
                    <button type="button" class="btn btn-secondary me-2">#Món mới lạ</button>
                    <button type="button" class="btn btn-secondary me-2">#Món yêu thích</button>
                </div>
            </div>
            <div className="container my-3">
                <div className="row">
                    <div className="col-8">
                        <div class="card border-0">
                            <div class="row no-gutters ">
                                <div class="col-md-46">
                                    <img className="w-100" style={{ height: '180px', objectFit: 'cover' }} src="https://yummyday.vn/uploads/images/gio-heo-kho-sa-ot.jpg" alt="..." />
                                </div>
                                <div class="col-md-6">
                                    <div class="card-body">
                                        <h5 class="card-title">Cách làm sườn chua ngọt quên lối về</h5>
                                        ⭐⭐⭐⭐⭐
                                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row row-cols-1 row-cols-md-3">
                            <div class="col mb-4">
                                <div class="card">
                                    <img src="https://yummyday.vn/uploads/images/suon-kho-chua-ngot.jpg" class="card-img-top" alt="..."/>
                                        <div class="card-body">
                                            <h5 class="card-title">Cách làm sườn chua ngọt quên lối về</h5>
                                            ⭐⭐⭐⭐⭐
                                        </div>
                                </div>
                            </div>
                            <div class="col mb-4">
                                <div class="card">
                                    <img src="https://yummyday.vn/uploads/images/suon-kho-chua-ngot.jpg" class="card-img-top" alt="..."/>
                                        <div class="card-body">
                                            <h5 class="card-title">Cách làm sườn chua ngọt quên lối về</h5>
                                            ⭐⭐⭐⭐⭐
                                        </div>
                                </div>
                            </div>
                            <div class="col mb-4">
                                <div class="card">
                                    <img src="https://yummyday.vn/uploads/images/suon-kho-chua-ngot.jpg" class="card-img-top" alt="..."/>
                                        <div class="card-body">
                                            <h5 class="card-title">Cách làm sườn chua ngọt quên lối về</h5>
                                            ⭐⭐⭐⭐⭐
                                        </div>
                                </div>
                            </div>
                            <div class="col mb-4">
                                <div class="card">
                                    <img src="https://yummyday.vn/uploads/images/suon-kho-chua-ngot.jpg" class="card-img-top" alt="..."/>
                                        <div class="card-body">
                                            <h5 class="card-title">Cách làm sườn chua ngọt quên lối về</h5>
                                            ⭐⭐⭐⭐⭐
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div style={{ backgroundColor: '#151515' }} class="col-item col-img yummy-background menu-daily visible affix-top d-flex flex-column align-items-center" id="col-fix" data-spy="">
                            <img loading="lazy" src="https://yummyday.vn/banner/3-top.jpg" alt="36 cách chế biến món kho cho bữa ăn thêm đậm đà - YummyDay" title="36 cách chế biến món kho cho bữa ăn thêm đậm đà - YummyDay" />
                            <div class="col-item-body p-2 bg-transparent">
                                <p><a style={{ color: "#f2ebeb" }} title="Cách nấu hủ tiếu bò kho thơm ngon chuẩn vị cho bữa sáng cả nhà" href="https://yummyday.vn/hu-tieu-bo-kho-28?rel=menu">Hủ tiếu bò kho</a></p>
                                <p><a style={{ color: "#f2ebeb" }} title="Cách làm đậu hủ tứ xuyên chay thơm ngon trọn vị" href="https://yummyday.vn/dau-hu-tu-xuyen-chay-34?rel=menu">Đậu hủ tứ xuyên chay</a></p>
                                <p><a style={{ color: "#f2ebeb" }} title="Cách làm cánh gà chiên bơ ngon không cưỡng nổi" href="https://yummyday.vn/canh-ga-chien-bo-98?rel=menu">Cánh gà chiên bơ</a></p>
                                <p><a style={{ color: "#f2ebeb" }} title="Cách nấu lagu gà thành món khoái khẩu trong gia đình bạn" href="https://yummyday.vn/lagu-ga-519?rel=menu">Lagu gà</a></p>
                                <p><a style={{ color: "#f2ebeb" }} title="Cách nấu canh rong biển đậu hũ thơm ngon trọn vị" href="https://yummyday.vn/canh-rong-bien-dau-hu-49?rel=menu">Canh rong biển đậu hũ</a></p>
                            </div>
                            <img loading="lazy" src="https://yummyday.vn/banner/3-footer.jpg" alt="36 cách chế biến món kho cho bữa ăn thêm đậm đà - YummyDay" title="36 cách chế biến món kho cho bữa ăn thêm đậm đà - YummyDay" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}