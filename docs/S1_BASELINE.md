# S1 - Baseline Lock

Mục tiêu của S1 là xác định ranh giới phát triển trước khi tiếp tục mở rộng PC Simulator.

## Nguyên tắc chính

- Giữ nguyên tối đa phần website bán hàng hiện tại.
- Không redesign hoặc thay đổi nghiệp vụ bán hàng nếu không cần cho Simulator.
- Không bổ sung VAT, bảo hành, mã sản phẩm mới hoặc nghiệp vụ doanh nghiệp.
- Sản phẩm mới ở các scope sau phải theo format sản phẩm hiện tại.
- Mỗi scope sau phải giữ được luồng `npm install` -> `npm start`.

## Vùng được bảo vệ - Web bán hàng

Các file dưới đây chỉ sửa khi thật sự cần tích hợp Simulator hoặc sửa bug:

### Controller
- `src/controllers/HomeController.js`
- `src/controllers/ProductController.js`
- `src/controllers/CartController.js`
- `src/controllers/AuthController.js`
- `src/controllers/AdminController.js`

### View khách hàng
- `src/views/client/home.ejs`
- `src/views/client/products.ejs`
- `src/views/client/product-detail.ejs`
- `src/views/client/cart.ejs`
- `src/views/client/login.ejs`
- `src/views/client/register.ejs`

### View admin
- `src/views/admin/dashboard.ejs`
- `src/views/admin/manage-products.ejs`
- `src/views/admin/manage-orders.ejs`

### Model bán hàng
- `src/models/ProductModel.js`
- `src/models/UserModel.js`
- `src/models/OrderModel.js`

## Vùng được phép phát triển - Simulator

Các file sau có thể tiếp tục thay đổi để phục vụ chức năng mô phỏng:

- `src/controllers/PCBuilderController.js`
- `src/controllers/MyPCController.js`
- `src/models/PCBuilderModel.js`
- `src/models/PCBuildModel.js`
- `src/services/compatibilityService.js`
- `src/services/performanceService.js`
- `src/services/powerService.js`
- `src/services/bottleneckService.js`
- `src/services/recommendationService.js`
- `src/views/client/pc-builder.ejs`
- `src/views/client/my-pc.ejs`
- `src/views/client/my-pc-detail.ejs`
- `public/js/pc-builder-ajax.js`

## File tích hợp - chỉ sửa tối thiểu

Các file này liên kết cả web bán hàng và module mới nên chỉ thay đổi tối thiểu:

- `src/routes/web.js`: thêm route Simulator khi cần.
- `src/routes/admin.js`: chỉ mở rộng khi Simulator cần admin hỗ trợ.
- `src/views/partials/header.ejs`: chỉ thêm/đổi link Simulator nếu cần.
- `app.js`: giữ nguyên cơ chế khởi động zero-setup và port 3000.
- `src/config/LocalDatabase.js`: giữ cơ chế local JSON; chỉ mở rộng cấu trúc dữ liệu khi thật sự cần.
- `public/css/style.css`: tránh sửa style cũ; Simulator nên dùng class riêng hoặc file CSS riêng.

## Baseline sản phẩm

Giữ format hiện tại:

- name
- category
- brand
- price
- stock
- image
- featured
- performance
- specs

Không thêm các trường thương mại như VAT, bảo hành, mã sản phẩm hoặc hóa đơn.

Ở scope bổ sung sản phẩm, chỉ tăng số lượng và dữ liệu kỹ thuật cần cho Simulator.

## Luồng bán hàng cần được bảo toàn

```
Trang chủ
-> Sản phẩm
-> Chi tiết sản phẩm
-> Thêm giỏ hàng
-> Giỏ hàng
-> Đặt hàng
-> Admin quản lý đơn hàng
```

Đăng ký, đăng nhập, đăng xuất và quản lý sản phẩm của admin cũng phải tiếp tục hoạt động.

## Hướng mở rộng đã chốt

```
Web bán hàng hiện tại
        |
        +-> Khách hoàn thành ít nhất 1 đơn hàng
                |
                +-> Mở khóa PC Simulator
                        |
                        +-> Tự do chọn linh kiện
                        +-> Compatibility
                        +-> Mô phỏng lắp ráp 2D
                        +-> Performance / Power / Bottleneck
                        +-> Thay linh kiện và tính lại
```

Không còn yêu cầu phải mua đủ 8 linh kiện để được mô phỏng.

## Kết luận S1

Baseline đã được khóa. Các scope sau phát triển Simulator theo hướng mở rộng, không tái cấu trúc lại website bán hàng.
