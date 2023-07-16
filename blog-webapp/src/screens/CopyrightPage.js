import React from 'react';
import DefaultLayout from '../layouts/DefaultLayout';

const CopyrightPage = () => {
  return (
    <DefaultLayout>
      <div>
        <h1 style={{ textAlign: 'center', marginTop: ' 30px', marginBottom: '20px' }}>Bản quyền</h1>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ width: '50%', textAlign: 'justify' }}>
            <p >
              Mọi quyền được bảo lưu. Bản quyền © 2023 Bếp của Bố. Trang web này được
              bảo vệ bởi luật bản quyền và các công cụ bảo vệ quyền sở hữu trí tuệ khác.
            </p>
            <p>
              Mọi nội dung trên trang web, bao gồm văn bản, hình ảnh, biểu đồ, logo,
              biểu trưng, video và âm thanh đều thuộc quyền sở hữu của Bếp của Bố hoặc
              các bên sở hữu đối tác. Mọi hình thức sao chép, phát hành, sử dụng lại hoặc
              tái tạo nội dung từ trang web này đều bị cấm mà không có sự đồng ý bằng văn
              bản từ Bếp của Bố.
            </p>
            <p>
              Bất kỳ vi phạm bản quyền nào đối với nội dung trên trang web này sẽ bị xem
              là vi phạm pháp luật và chúng tôi sẽ thực hiện các biện pháp pháp lý để
              bảo vệ quyền lợi của chúng tôi.
            </p>
            <p>
              Nếu bạn có bất kỳ câu hỏi nào về bản quyền hoặc muốn sử dụng nội dung từ
              trang web này, vui lòng liên hệ với chúng tôi để được tư vấn và có sự đồng
              ý bằng văn bản.
            </p>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default CopyrightPage;
