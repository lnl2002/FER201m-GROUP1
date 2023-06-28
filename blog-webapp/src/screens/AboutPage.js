import React from 'react';
import { Link } from "react-router-dom";
import facebookIcon from '../photos/facebook.png';
import instagramIcon from '../photos/instagram.png';
import logo from '../photos/logo.png';
import DefaultLayout from '../layouts/DefaultLayout';
import '../styles/about.css';
import { useEffect } from 'react';
const AboutPage = () => {
  useEffect(() => {
    // Lắng nghe sự kiện khi nhấp vào các liên kết
    const links = document.querySelectorAll('a[href^="#"]');
    for (let i = 0; i < links.length; i++) {
      links[i].addEventListener('click', scrollOnClick);
    }
  
    // Hàm xử lý cuộn tự động
    function scrollOnClick(event) {
      event.preventDefault(); // Ngăn chặn hành vi mặc định của liên kết
      const targetId = this.getAttribute('href'); // Lấy định danh của mục tiêu từ thuộc tính href
      const targetElement = document.querySelector(targetId); // Lấy phần tử mục tiêu dựa trên định danh
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' }); // Cuộn tự động đến phần tử mục tiêu
      }
    }
  }, []);

  return (
   
    <DefaultLayout>
    <div className="about-page">
  
    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '50px'}}>
    <Link to="/" className="logo-link">
        <img src={logo} alt="logo"   alt="Logo" className="logo" />
      </Link>
      </div>
      <ul className="link-list">
        <a href="#intro">Giới thiệu</a>
        <a href="#story">Nguồn cảm hứng</a>
        <a href="#mission">Sứ mệnh - Tầm nhìn</a>
        <a href="#exp">Năng lực - Bằng cấp</a>
        <a href="#unique">Đặc điểm độc nhất</a>
        <a href="#overview">Tổng quan nội dung</a>
        <a href="#community">Cộng đồng</a>
      </ul>
      <section className="intro">
      <h2 id="intro" style={{ textAlign: 'center',marginTop:'30px', marginBottom: '30px' }}>Giới thiệu</h2>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
  <div style={{ width: '50%', textAlign: 'justify' }}>
        
          <p>
             

        Chào mừng bạn đến với Bếp của Bố - nơi chia sẻ niềm đam mê ẩm thực và hương vị đặc trưng. Chúng tôi là một blog ẩm thực đầy màu sắc, nơi bạn có thể khám phá các công thức nấu ăn ngon lành, tìm hiểu về các món ăn truyền thống và khám phá những ý tưởng sáng tạo để làm mới bữa ăn hàng ngày.
</p>
       <p>

       Tại Bếp của Bố, chúng tôi tin rằng ẩm thực không chỉ là cách thức đơn thuần để thỏa mãn nhu cầu dinh dưỡng. Nó còn là một nghệ thuật tinh tế, kết hợp giữa khéo léo trong việc chọn lựa nguyên liệu, kỹ năng chế biến và tình yêu đặt vào từng món ăn. Chúng tôi muốn truyền cảm hứng và khơi dậy niềm đam mê nấu ăn trong mỗi người, bởi mỗi món ăn đều là một câu chuyện đậm chất gia đình, là cách tuyệt vời để chia sẻ niềm vui và kết nối với nhau.


        </p>
       
        <p>
        Hãy cùng nhau khám phá thế giới ẩm thực đa dạng và thú vị tại Bếp của Bố. Hãy cùng nhau tạo ra những bữa ăn ngon lành và chia sẻ niềm vui qua những món ăn thơm ngon. Chúng tôi hy vọng rằng trang web của chúng tôi sẽ trở thành nguồn cảm hứng và nguồn kiến thức bổ ích cho bạn.


        </p>
        <p>
        Hãy cùng nhau trải nghiệm hương vị và nghệ thuật của ẩm thực tại Bếp của Bố!
        </p>
        </div>
        </div>

      </section>
      <section className="story">
      <h2 id="story" style={{ textAlign: 'center', marginTop:'30px', marginBottom: '30px'}}>Nguồn cảm hứng</h2>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
  <div style={{ width: '50%', textAlign: 'justify' }}>
     
        <p>
        Khi còn nhỏ, tôi đã luôn thích ẩm thực và việc nấu nướng. Mỗi cuối tuần, tôi thường đứng bên bếp, hòa quyện trong mùi hương thơm của gia vị và những âm thanh vui tươi của nồi nấu. Từng món ăn đơn giản trở thành một sự thử thách và một cách để tôi kết nối với gia đình và bạn bè.
        </p>
        <p>
        Khi lớn lên, tôi quyết định chia sẻ niềm đam mê của mình với mọi người thông qua việc tạo ra trang web Bếp của Bố. Trang web này không chỉ là một nơi để chia sẻ công thức nấu ăn, mà còn là một không gian để tôi thể hiện tình yêu và niềm đam mê với ẩm thực.        </p>
        <p>
        Tôi muốn mọi người hiểu rõ rằng ẩm thực không chỉ đơn thuần là việc nấu nướng và ăn uống. Nó là một nguồn cảm hứng vô tận, một cách để tạo ra những kỷ niệm đáng nhớ và tạo nên những liên kết mạnh mẽ trong gia đình và bạn bè.        </p>
        <p>
        Qua trang web này, tôi hy vọng có thể truyền cảm hứng cho mọi người để thử những món ăn mới, khám phá những nguyên liệu độc đáo và chia sẻ niềm vui qua ẩm thực. Tôi muốn mọi người cảm thấy tự tin và thú vị khi đứng trước bếp, biết rằng mỗi món ăn đều là một cách để thể hiện tình yêu và quan tâm đến nhau.
        </p>
        <p>
        Hãy cùng nhau tạo nên những bữa ăn ngon lành và tạo ra những kỷ niệm đáng nhớ. Hãy cùng nhau khám phá thế giới ẩm thực đa dạng và truyền cảm hứng cho nhau tại Bếp của Bố!
        </p>
        </div>
        </div>
      </section>
      <section className="mission-vision">
      <h2 id="mission" style={{ textAlign: 'center', marginTop:'30px', marginBottom: '30px'}}>Sứ mệnh Tầm nhìn</h2>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
  <div style={{ width: '50%', textAlign: 'justify' }}>
        <p>
        Sứ mệnh của chúng tôi là tạo ra một cộng đồng yêu thích ẩm thực, nơi mọi người có thể khám phá, học hỏi và chia sẻ niềm đam mê về nấu ăn. Chúng tôi mong muốn cung cấp cho mọi người những công thức đơn giản và ngon miệng, cung cấp kiến thức về nguyên liệu và kỹ năng nấu nướng, và tạo ra một môi trường trực tuyến vui vẻ và tràn đầy cảm hứng.
        </p>
        <p>
        Tầm nhìn của chúng tôi là trở thành một nguồn tài nguyên hàng đầu về ẩm thực trực tuyến, nơi mọi người có thể tìm kiếm và khám phá những công thức đa dạng, phong phú và phù hợp với mọi khẩu vị. Chúng tôi muốn trang web Bếp của Bố trở thành một địa điểm trực tuyến đáng tin cậy, nơi mọi người có thể tìm thấy thông tin chính xác và hữu ích về ẩm thực, từ nguyên liệu cho đến kỹ thuật nấu nướng và xu hướng ẩm thực mới nhất.
        </p>
        <p>
        Chúng tôi mong muốn lan tỏa niềm đam mê và yêu thích của mình đến mọi người, giúp mọi người tận hưởng hương vị của các món ăn ngon lành và tạo ra những kỷ niệm đáng nhớ qua ẩm thực. Chúng tôi cam kết cung cấp nội dung chất lượng cao, dễ hiểu và thân thiện với người dùng, đồng thời xây dựng một cộng đồng sôi động và đáng tin cậy.
        </p>
        <p>
        Với sứ mệnh và tầm nhìn này, chúng tôi hy vọng có thể góp phần vào việc lan tỏa yêu thương và niềm vui thông qua ẩm thực và tạo nên một cộng đồng ẩm thực đoàn kết và phát triển.
        </p></div>
        </div>
      </section>
      <section className="expertise">
      <h2 id="exp" style={{ textAlign: 'center', marginTop:'30px', marginBottom: '30px'}}>Năng lực Bằng cấp</h2>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
  <div style={{ width: '50%', textAlign: 'justify' }}>
        <p>
          1. Chuyên gia ẩm thực: Đội ngũ chúng tôi bao gồm những chuyên gia ẩm thực có kinh nghiệm và kiến thức sâu sắc về nấu ăn. Chúng tôi đã tham gia và thành công trong nhiều cuộc thi nấu ăn quốc tế và có kiến thức vững chắc về các phương pháp nấu nướng, kỹ thuật chế biến và cách phối hợp hương vị.
        </p>
        <p>
        2. Giáo dục và đào tạo: Chúng tôi có các bằng cấp và chứng chỉ liên quan đến ẩm thực từ các trường đại học và các tổ chức uy tín. Chúng tôi đã hoàn thành các khóa học chuyên sâu về nấu ăn và được đào tạo bởi các đầu bếp danh tiếng.
        </p>
        <p>
        3. Kinh nghiệm thực tế: Chúng tôi đã tích lũy nhiều năm kinh nghiệm trong lĩnh vực ẩm thực. Chúng tôi đã làm việc trong các nhà hàng danh tiếng, khám phá các nền ẩm thực khác nhau và nắm vững các nguyên liệu và kỹ thuật nấu nướng.
        </p>
        <p>
       4. Nghiên cứu và sáng tạo: Chúng tôi luôn tiếp tục nghiên cứu và khám phá các xu hướng mới nhất trong lĩnh vực ẩm thực. Chúng tôi không ngừng sáng tạo và phát triển các công thức mới, kết hợp các nguyên liệu độc đáo và tạo ra những trải nghiệm ẩm thực độc đáo cho người dùng.
        </p>
        <p>
       5. Đánh giá và phản hồi từ cộng đồng: Chúng tôi đã nhận được nhiều đánh giá và phản hồi tích cực từ cộng đồng người dùng. Điều này là một minh chứng cho sự đáng tin cậy và chất lượng của nội dung và thông tin mà chúng tôi chia sẻ.
        </p>
        <p>
        Với sự kết hợp giữa kiến thức chuyên môn, kinh nghiệm thực tế và sự sáng tạo, chúng tôi tự tin rằng chúng tôi có khả năng cung cấp cho bạn những thông tin chính xác, các công thức ngon miệng và kiến thức bổ ích về nấu ăn.
        </p>
        </div>
        </div>
      </section>
      <section className="unique-selling-proposition">
      <h2 id="unique" style={{ textAlign: 'center', marginTop:'30px', marginBottom: '30px'}}>Đặc điểm độc nhất </h2>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
  <div style={{ width: '50%', textAlign: 'justify' }}>
        <p>
          Chúng tôi đặc biệt với:
        </p>
        <p>
          1. Nấu ăn gia đình: Chúng tôi tập trung vào việc chia sẻ các công thức và kinh nghiệm nấu ăn phù hợp với gia đình. Chúng tôi hiểu rằng nấu ăn không chỉ là việc chế biến thức ăn, mà còn là cách để tạo ra những kỷ niệm gia đình đáng nhớ. Chúng tôi cung cấp những công thức đơn giản, dễ làm và phù hợp với cuộc sống bận rộn của mọi gia đình.
        </p>
        <p>
          2. Món ngon đa dạng: Chúng tôi khám phá và chia sẻ những món ăn đa dạng từ nhiều nền ẩm thực khác nhau. Từ món ăn truyền thống đến món ăn hiện đại, chúng tôi mang đến những công thức phong phú và đa dạng để người dùng có thể tìm thấy những món ăn phù hợp với khẩu vị và sở thích của họ.
        </p>
        <p>
        3. Tư vấn chuyên gia: Chúng tôi cung cấp những lời khuyên và tư vấn từ những chuyên gia ẩm thực có kinh nghiệm. Người dùng có thể tìm thấy thông tin hữu ích về các nguyên liệu, kỹ thuật nấu nướng, cách lựa chọn và bảo quản thực phẩm, giúp họ trở thành đầu bếp tài ba trong gia đình.
        </p>
        <p>
        4. Cộng đồng sôi nổi: Chúng tôi xây dựng một cộng đồng năng động và sôi nổi xung quanh đam mê nấu ăn. Người dùng có thể chia sẻ kinh nghiệm, gửi phản hồi và thảo luận với nhau về các món ăn, gợi ý mới và câu chuyện ẩm thực của mình. Chúng tôi tạo ra một không gian tương tác và giao lưu, thúc đẩy sự chia sẻ và học hỏi từ nhau.
        </p>
        <p>
        5. Với những đặc điểm bán hàng độc nhất này, chúng tôi mang đến một trang web ẩm thực độc đáo và hữu ích, giúp người dùng tận hưởng niềm đam mê nấu ăn và xây dựng những bữa ăn đặc biệt cho gia đình.
        </p>
        </div>
        </div>
      </section>
      <section className="content-overview">
      <h2 id="overview" style={{ textAlign: 'center', marginTop:'30px', marginBottom: '30px'}}>Tổng quan nội dung</h2>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
  <div style={{ width: '50%', textAlign: 'justify' }}>
        <p>
        Trang web Bếp của Bố sẽ mang đến cho bạn:


        </p>
        <p>
        1. Các công thức độc đáo: Từ món ăn truyền thống đến món ăn sáng tạo, chúng tôi chia sẻ những công thức độc đáo và hấp dẫn. Bạn sẽ tìm thấy sự đa dạng trong các món ăn và những bước hướng dẫn chi tiết để bạn có thể thực hiện một cách dễ dàng.


        </p>
        <p>
        2. Gợi ý sáng tạo: Chúng tôi cung cấp những ý tưởng sáng tạo để làm mới bữa ăn hàng ngày của bạn. Bạn sẽ tìm thấy những cách thức độc đáo để kết hợp các nguyên liệu và tạo ra những món ăn độc đáo và hấp dẫn.


        </p>
        <p>
        3. Chia sẻ kinh nghiệm: Chúng tôi không chỉ chia sẻ công thức mà còn chia sẻ những kinh nghiệm, mẹo nấu ăn và câu chuyện thú vị xung quanh ẩm thực. Bạn có thể khám phá thêm về các phong cách nấu ăn khác nhau và học hỏi từ các chia sẻ của cộng đồng.
        <p/>
        </p>
        </div>
        </div>
      </section>
      <section className="engagement">
      <h2 id="community" style={{ textAlign: 'center', marginTop:'30px', marginBottom: '30px'}}>Community </h2>

        <div style={{ display: 'flex', justifyContent: 'center' }} className="social-icons">
  <a href="https://www.facebook.com/bepcuabo" target="_blank" rel="noopener noreferrer">
    <img src={facebookIcon} alt="Facebook" style={{ width: '40px', height: '40px', marginRight: '8px' }} />
  </a>
  <a href="https://www.instagram.com/bepcuabo" target="_blank" rel="noopener noreferrer">
    <img src={instagramIcon} alt="Instagram" style={{ width: '40px', height: '40px' }} />
  </a>
</div>



      </section>
     
      <section className="call-to-action">

        <h3 style={{ textAlign: 'center', marginTop: '50px', marginBottom: '20px' }}>
      Bếp của Bố - Ăn không ngon thì đổ
        </h3>
      </section>
    </div>
    </DefaultLayout>
  
  );
};

export default AboutPage;
