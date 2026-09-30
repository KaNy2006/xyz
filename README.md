# 🖥️ Bán Linh Kiện & Mô Phỏng PC

Website bán linh kiện máy tính kết hợp trải nghiệm **xây dựng, mua, lắp ráp mô phỏng, đánh giá hiệu năng và nâng cấp PC**.

Mục tiêu của dự án là mô tả hành trình của một người dùng mới bắt đầu tìm hiểu PC:

```text
Newbie
   ↓
Tìm hiểu linh kiện
   ↓
Chọn cấu hình
   ↓
Kiểm tra tương thích
   ↓
Mua linh kiện / đặt cấu hình
   ↓
Mô phỏng lắp ráp PC
   ↓
Hiểu hiệu năng máy
   ↓
Phát hiện điểm yếu
   ↓
Gợi ý nâng cấp
   ↓
Mua linh kiện mới
   ↓
Mô phỏng nâng cấp
   ↓
Tiếp tục vòng đời PC
```

Nói ngắn gọn, website hướng tới trải nghiệm:

> **Từ newbie → biết build PC → sở hữu PC → hiểu PC của mình → dần trở thành người thích nâng cấp PC.**

---

## 🎯 Định hướng chính

Dự án gồm ba phần liên kết chặt với nhau:

```text
E-Commerce
    +
PC Builder
    +
PC Upgrade / Performance Experience
```

Trong đó:

- **E-Commerce** là phần lõi bán linh kiện.
- **PC Builder** giúp người dùng chọn một bộ linh kiện phù hợp trước khi mua.
- **Mô phỏng PC** được mở khi người dùng đã mua / sở hữu cấu hình trong hệ thống.
- **Performance Advisor** giúp người dùng hiểu hiệu năng, điểm yếu và hướng nâng cấp.
- **Recommendation** kết nối trực tiếp trở lại cửa hàng để người dùng có thể mua linh kiện nâng cấp nếu muốn.

---

# 🛒 1. Website bán linh kiện PC

Phần bán hàng được giữ làm nền chính của hệ thống.

Website quản lý và bán các nhóm sản phẩm:

- CPU
- GPU / Card đồ họa
- Mainboard
- RAM
- SSD
- PSU / Nguồn
- Case
- Tản nhiệt / Cooler

Các chức năng chính:

- Xem sản phẩm.
- Tìm kiếm sản phẩm.
- Lọc sản phẩm.
- Xem chi tiết sản phẩm.
- Đăng ký.
- Đăng nhập.
- Thêm vào giỏ hàng.
- Cập nhật giỏ hàng.
- Đặt hàng.
- Quản lý đơn hàng.
- Quản lý sản phẩm.
- Quản lý tồn kho.
- Dashboard quản trị.

Phần bán hàng hiện tại sẽ được **giữ lại và phát triển tiếp**, không viết lại từ đầu nếu không cần thiết.

---

# 🧩 2. PC Builder trước khi mua

Người dùng có thể chọn linh kiện trực tiếp từ các sản phẩm đang bán trên website để tạo thành một cấu hình PC.

Ví dụ:

| Thành phần | Linh kiện |
|---|---|
| CPU | AMD Ryzen 5 7500F |
| GPU | RTX 4060 |
| Mainboard | B650 |
| RAM | 32GB DDR5 |
| SSD | 1TB NVMe |
| PSU | 650W |
| Case | Mid Tower |
| Cooler | Air Cooler |

PC Builder trước khi mua có nhiệm vụ:

- Tính tổng giá cấu hình.
- Kiểm tra các linh kiện có tương thích hay không.
- Kiểm tra nguồn có đủ hay không.
- Cảnh báo lỗi rõ ràng cho người mới.
- Cho phép thay linh kiện khác.
- Sau khi cấu hình hợp lệ, người dùng có thể thêm cả bộ vào giỏ hàng và đặt mua.

PC Builder **không phải phần mô phỏng đầy đủ**.

Nó là công cụ hỗ trợ người dùng chọn đúng linh kiện trước khi mua.

---

# 🔐 3. Điều kiện mở khóa mô phỏng

Theo hướng phát triển hiện tại, người dùng phải **mua hoặc sở hữu một cấu hình đã được ghi nhận trong hệ thống** thì mới sử dụng phần mô phỏng PC đầy đủ.

Luồng chính:

```text
Chọn linh kiện
      ↓
PC Builder
      ↓
Kiểm tra Compatibility
      ↓
Giỏ hàng
      ↓
Đặt hàng
      ↓
Đơn hàng hợp lệ
      ↓
PC của tôi
      ↓
Mở khóa mô phỏng
```

Điều này giúp phần mô phỏng giống như một **thợ lắp PC ảo** dành cho chính bộ máy người dùng vừa mua.

---

# 🔧 4. Mô phỏng lắp ráp PC

Sau khi mua cấu hình, người dùng có thể vào mục **PC của tôi** và bắt đầu mô phỏng lắp ráp.

Ví dụ luồng mô phỏng:

```text
Bước 1: Chuẩn bị Mainboard
        ↓
Bước 2: Lắp CPU
        ↓
Bước 3: Lắp RAM
        ↓
Bước 4: Lắp SSD
        ↓
Bước 5: Lắp tản nhiệt CPU
        ↓
Bước 6: Đưa Mainboard vào Case
        ↓
Bước 7: Lắp PSU
        ↓
Bước 8: Lắp GPU
        ↓
Bước 9: Cắm nguồn
        ↓
Bước 10: Hoàn thiện PC
```

Phiên bản đầu chưa bắt buộc phải dùng mô hình 3D.

Có thể phát triển bằng:

- Hình ảnh linh kiện.
- Animation.
- Các bước hướng dẫn.
- Highlight vị trí lắp.
- Mô tả thao tác.
- Cảnh báo lỗi cơ bản.

Mục tiêu là giúp người mới **dễ hình dung quá trình lắp PC**.

---

# 📊 5. Đánh giá hiệu năng sau khi lắp

Khi PC đã hoàn thiện trong hệ thống, người dùng có thể xem đánh giá hiệu năng tương đối.

Ví dụ:

```text
CPU Performance     82/100
GPU Performance     88/100
RAM                  80/100
Storage              90/100
Overall              85/100
```

Có thể đánh giá theo nhiều nhu cầu:

- Gaming 1080p.
- Gaming 1440p.
- Gaming 4K.
- Văn phòng.
- Học tập.
- Lập trình.
- Render.
- Đồ họa.
- Streaming.
- AI / Machine Learning.

Kết quả chỉ mang tính **ước lượng và hỗ trợ lựa chọn**, không thay thế benchmark thực tế.

---

# 🚧 6. Bottleneck và điểm yếu cấu hình

Hệ thống có thể phân tích các mối quan hệ chính:

- CPU ↔ GPU.
- CPU ↔ RAM.
- GPU ↔ độ phân giải.
- RAM ↔ workload.
- Storage ↔ tác vụ.
- PSU ↔ tổng công suất.

Kết quả nên chia thành mức dễ hiểu:

| Mức | Ý nghĩa |
|---|---|
| 🟢 Tốt | Cấu hình tương đối cân bằng |
| 🟡 Nhẹ | Có chênh lệch nhưng vẫn sử dụng tốt |
| 🟠 Trung bình | Một linh kiện có thể giới hạn hiệu năng |
| 🔴 Cao | Nên cân nhắc nâng cấp |

Không nên chỉ trả về một con số bottleneck mà không giải thích.

Hệ thống cần cho người dùng biết:

- Thành phần nào đang yếu.
- Tại sao nó có thể giới hạn cấu hình.
- Tình huống nào ảnh hưởng nhiều nhất.
- Có thật sự cần nâng cấp hay không.

---

# 🔄 7. Vòng đời nâng cấp PC

Đây là một trong những ý tưởng chính của website.

Sau khi người dùng đã sở hữu PC, hệ thống có thể gợi ý các phương án nâng cấp.

Ví dụ:

```text
PC hiện tại

i5-12400F
RTX 3060 12GB
16GB DDR4
550W PSU
      ↓
Phân tích
      ↓
GPU / RAM có thể nâng cấp
      ↓
Gợi ý
      ↓
RTX 4060
RTX 5060
RTX 5070
32GB RAM
650W / 750W PSU
```

Nếu người dùng mua linh kiện mới:

```text
PC cũ
   ↓
Mua linh kiện nâng cấp
   ↓
Mô phỏng tháo / thay linh kiện
   ↓
PC mới
   ↓
Đánh giá hiệu năng mới
```

Từ đó hình thành vòng lặp:

```text
SHOP
 ↓
BUILD
 ↓
BUY
 ↓
ASSEMBLE
 ↓
USE / ANALYZE
 ↓
UPGRADE
 ↓
SHOP
 ↺
```

---

# 🧠 8. Recommendation

Recommendation không chỉ có nhiệm vụ bán thêm sản phẩm.

Nó phải đưa ra gợi ý có cơ sở kỹ thuật.

Ví dụ:

```text
RTX 3060 12GB
      ↓
Nâng cấp nhẹ:
RTX 4060

Nâng cấp hợp lý:
RTX 5060 Ti

Nâng cấp mạnh:
RTX 5070
```

Hoặc:

```text
CPU hiện tại:
Ryzen 5 5600

GPU:
RTX 5080

→ CPU có thể trở thành thành phần hạn chế.

Gợi ý:
- Giữ GPU và nâng CPU.
- Hoặc chọn GPU thấp hơn nếu muốn giảm chi phí.
```

Nếu sản phẩm được đề xuất đang có trong cửa hàng thì hệ thống có thể hiển thị:

- Giá.
- Stock.
- Link xem sản phẩm.
- Thêm vào giỏ.
- Nâng cấp PC.

---

# 🗃️ 9. Kế hoạch dữ liệu sản phẩm

Database sản phẩm cần đủ phong phú để:

- Bán hàng.
- Build PC.
- Kiểm tra compatibility.
- So sánh hiệu năng.
- Tạo lộ trình nâng cấp.
- Recommendation.

Giai đoạn hiện tại dự kiến:

**8 nhóm linh kiện × khoảng 10 sản phẩm = khoảng 80 sản phẩm.**

| Nhóm | Số lượng dự kiến |
|---|---:|
| CPU | 10 |
| GPU | 10 |
| Mainboard | 10 |
| RAM | 10 |
| SSD | 10 |
| PSU | 10 |
| Case | 10 |
| Cooler | 10 |

Các sản phẩm không được chọn ngẫu nhiên.

Ưu tiên:

- Linh kiện phổ biến trên thị trường.
- Có nhiều phân khúc giá.
- Có cả sản phẩm cũ và mới.
- Có nhiều thế hệ.
- Có nhiều thương hiệu.
- Có khả năng tạo đường nâng cấp rõ ràng.
- Có đủ trường hợp tương thích và không tương thích để phục vụ PC Builder.

---

# 🧮 10. Định hướng danh sách CPU

CPU cần có cả Intel và AMD.

Ví dụ định hướng:

### Intel

- Intel Core i5-12400F.
- Intel Core i5-13400F.
- Intel Core i5-14400F.
- Intel Core i5-14600KF.
- Intel Core i7-14700KF.

### AMD

- Ryzen 5 5600.
- Ryzen 7 5700X3D.
- Ryzen 5 7500F.
- Ryzen 5 7600.
- Ryzen 7 7800X3D.

Danh sách chính thức có thể điều chỉnh khi nhập dữ liệu thực tế.

Mục đích là tạo ra nhiều nền tảng:

- Intel LGA1700.
- AMD AM4.
- AMD AM5.

Nhờ đó hệ thống có thể kiểm tra compatibility thực tế.

---

# 🎮 11. Định hướng danh sách GPU

GPU cần có nhiều thế hệ và nhiều phân khúc.

Ví dụ:

- RTX 3060 12GB.
- RTX 3070 Ti.
- RTX 4060.
- RTX 4070 Super.
- RTX 5060.
- RTX 5060 Ti.
- RTX 5070.
- RTX 5070 Ti.
- RTX 5080.
- Một lựa chọn AMD Radeon phù hợp.

Mục tiêu không phải chỉ chọn GPU mới nhất.

Cần có cả GPU cũ và mới để tạo được các tình huống nâng cấp:

```text
RTX 3060
   ↓
RTX 4060 / RTX 5060
   ↓
RTX 4070 Super / RTX 5070
   ↓
RTX 5070 Ti / RTX 5080
```

---

# 🧱 12. Mainboard phải đi cùng CPU

Mainboard phải được chọn có chủ đích để hỗ trợ các CPU trong database.

Ví dụ các nền tảng:

### Intel LGA1700

- H610.
- B660.
- B760.
- Z790.

### AMD AM4

- B450.
- B550.

### AMD AM5

- A620.
- B650.
- B850.
- X870.

Nhờ đó hệ thống có thể tạo cả trường hợp đúng và sai.

Ví dụ:

```text
i5-12400F + B760       ✓

i5-14600KF + Z790      ✓

Ryzen 7 5700X3D + B550 ✓

Ryzen 5 7500F + B650   ✓

Ryzen 7 7800X3D + B550 ❌
```

---

# 💾 13. RAM, SSD, PSU, Case và Cooler

## RAM

Cần có:

- DDR4.
- DDR5.
- 16GB.
- 32GB.
- 64GB.
- Nhiều mức bus khác nhau.

Ví dụ:

```text
16GB DDR4 3200
32GB DDR4 3600
16GB DDR5 5200
32GB DDR5 5600
32GB DDR5 6000
64GB DDR5 6000
```

## SSD

Cần trải từ:

- 500GB.
- 1TB.
- 2TB.
- SATA SSD.
- NVMe Gen3.
- NVMe Gen4.
- Có thể bổ sung Gen5 ở phân khúc cao.

## PSU

Cần trải từ:

```text
550W
650W
750W
850W
1000W
1200W
```

và có nhiều mức hiệu suất.

## Case

Cần lưu các thông số phục vụ compatibility:

- Form factor.
- Chiều dài GPU tối đa.
- Chiều cao cooler tối đa.
- Hỗ trợ radiator.

## Cooler

Cần có:

- Air cooler cơ bản.
- Tower cooler.
- Dual tower.
- AIO 240mm.
- AIO 360mm.

---

# ⚙️ 14. Dữ liệu kỹ thuật phục vụ mô phỏng

Mỗi sản phẩm không chỉ có:

```text
name
price
stock
image
```

mà còn phải có thông số kỹ thuật đủ cho thuật toán.

Ví dụ CPU:

```text
socket
cores
threads
base_clock
boost_clock
tdp
benchmark_score
single_core_score
```

GPU:

```text
vram
tdp
length
benchmark_score
```

Mainboard:

```text
socket
chipset
ram_type
max_ram
ram_slots
form_factor
```

RAM:

```text
ddr_type
capacity
speed
```

PSU:

```text
wattage
efficiency
```

Case:

```text
form_factor
max_gpu_length
max_cooler_height
radiator_support
```

Cooler:

```text
supported_socket
height
cooling_capacity
radiator_size
```

---

# 🧰 15. Công nghệ sử dụng

Dự án tiếp tục ưu tiên:

### Backend

- Node.js.
- Express.js.
- MySQL.
- mysql2.
- REST API khi phù hợp.

### Frontend

- HTML.
- CSS.
- JavaScript.
- EJS.

### Logic mô phỏng

Ưu tiên:

- Rule-based algorithm.
- Benchmark data.
- Compatibility rules.
- Performance scoring.
- Recommendation rules.

Chưa cần phụ thuộc AI ở phiên bản đầu.

---

# 🏗️ 16. Kiến trúc phát triển

Dự án tiếp tục theo hướng MVC và bổ sung tầng Service.

```text
BanVaMoPhongpc/
│
├── app.js
├── package.json
│
├── src/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── services/
│   │   ├── compatibilityService.js
│   │   ├── powerService.js
│   │   ├── performanceService.js
│   │   ├── bottleneckService.js
│   │   └── recommendationService.js
│   └── views/
│
├── public/
│   ├── css/
│   ├── js/
│   └── uploads/
│
└── database/
    └── schema.sql
```

Vai trò:

- **Routes**: nhận request và định tuyến.
- **Controllers**: xử lý request/response.
- **Models**: truy vấn database.
- **Services**: xử lý compatibility, power, performance, bottleneck và recommendation.
- **Views/Public**: giao diện.

---

# 🔌 17. Kiểm tra tương thích

Trước khi người dùng mua cả bộ PC, hệ thống cần kiểm tra:

### CPU ↔ Mainboard

- Socket.
- Chipset.
- Khả năng hỗ trợ CPU.

### RAM ↔ Mainboard

- DDR4 / DDR5.
- Dung lượng.
- Số khe.
- Bus hỗ trợ.

### GPU ↔ Case

- Chiều dài GPU.
- Không gian lắp đặt.

### Mainboard ↔ Case

- ATX.
- Micro-ATX.
- Mini-ITX.

### PSU ↔ Cấu hình

- Công suất.
- Công suất dự phòng.

### Cooler ↔ CPU / Case

- Socket hỗ trợ.
- Chiều cao.
- Radiator.

### SSD ↔ Mainboard

- SATA.
- NVMe.
- M.2.
- PCIe generation nếu cần.

---

# ⚡ 18. Power Calculation

Hệ thống có thể ước tính:

```text
CPU
+ GPU
+ Mainboard
+ RAM
+ Storage
+ Cooling
+ Other
----------------
Estimated Power
```

Sau đó so với PSU.

Ví dụ:

```text
Estimated Power: 410W
PSU hiện tại: 550W

✓ Có thể sử dụng.

Hoặc:

Estimated Power: 610W
PSU hiện tại: 650W

⚠ Công suất dự phòng thấp.
Khuyến nghị: 750W trở lên.
```

---

# 👤 19. Chức năng người dùng

Người dùng có thể:

- Đăng ký.
- Đăng nhập.
- Xem sản phẩm.
- Tìm kiếm.
- Lọc sản phẩm.
- Xem chi tiết.
- Thêm vào giỏ hàng.
- Tạo cấu hình PC trước khi mua.
- Kiểm tra compatibility.
- Đặt mua cấu hình.
- Xem đơn hàng.
- Xem **PC của tôi** sau khi mua.
- Mô phỏng lắp ráp PC.
- Xem đánh giá hiệu năng.
- Xem bottleneck.
- Xem gợi ý nâng cấp.
- Mua linh kiện nâng cấp.
- Mô phỏng quá trình nâng cấp PC.

---

# 🔐 20. Chức năng quản trị

Admin có thể:

- Quản lý tài khoản.
- Quản lý sản phẩm.
- Quản lý danh mục.
- Quản lý thông số linh kiện.
- Quản lý tồn kho.
- Quản lý đơn hàng.
- Quản lý dữ liệu benchmark.
- Quản lý các luật compatibility.
- Quản lý dữ liệu dùng cho performance / bottleneck.

---

# 🚀 21. Lộ trình phát triển

Dự án sẽ được phát triển theo từng giai đoạn để tránh phải viết lại hệ thống.

```text
Giai đoạn 1
Giữ và hoàn thiện phần bán hàng hiện tại
        ↓
Giai đoạn 2
Mở rộng database lên khoảng 80 sản phẩm
        ↓
Giai đoạn 3
Bổ sung đầy đủ thông số kỹ thuật linh kiện
        ↓
Giai đoạn 4
Hoàn thiện PC Builder
        ↓
Giai đoạn 5
Compatibility Engine
        ↓
Giai đoạn 6
Cart / Checkout cho cả bộ PC
        ↓
Giai đoạn 7
PC của tôi
        ↓
Giai đoạn 8
Assembly Simulator
        ↓
Giai đoạn 9
Power Calculation
        ↓
Giai đoạn 10
Performance Simulation
        ↓
Giai đoạn 11
Bottleneck Analysis
        ↓
Giai đoạn 12
Recommendation / Upgrade
        ↓
Giai đoạn 13
Mô phỏng nâng cấp
        ↓
Giai đoạn 14
Hoàn thiện Admin + Test + UI
```

---

# ⚠️ Nguyên tắc của hệ thống

1. **Bán hàng là lõi của website.**
2. **PC Builder hỗ trợ người dùng chọn đúng linh kiện trước khi mua.**
3. **Mô phỏng đầy đủ chỉ dành cho cấu hình người dùng đã mua / sở hữu trong hệ thống.**
4. **Mô phỏng phải gắn với chính các linh kiện đã mua.**
5. **Recommendation phải có lý do kỹ thuật, không chỉ đề xuất sản phẩm đắt hơn.**
6. **Không khẳng định benchmark hoặc bottleneck là chính xác tuyệt đối.**
7. **Ưu tiên dữ liệu thực tế và rule-based algorithm.**
8. **Không viết lại phần bán hàng nếu có thể tái sử dụng source hiện tại.**
9. **Danh sách sản phẩm phải được chọn có chủ đích để tạo được nhiều hướng nâng cấp.**
10. **Website phải kể được một hành trình rõ ràng từ newbie đến người hiểu và nâng cấp PC.**

---

# 📌 Tóm tắt

**Bán Linh Kiện & Mô Phỏng PC** không chỉ là một trang thương mại điện tử.

Website hướng tới một vòng đời hoàn chỉnh:

```text
TÌM HIỂU
   ↓
CHỌN LINH KIỆN
   ↓
BUILD PC
   ↓
KIỂM TRA TƯƠNG THÍCH
   ↓
MUA
   ↓
MÔ PHỎNG LẮP
   ↓
SỞ HỮU PC
   ↓
HIỂU HIỆU NĂNG
   ↓
PHÁT HIỆN ĐIỂM YẾU
   ↓
NÂNG CẤP
   ↓
MUA LINH KIỆN MỚI
   ↓
MÔ PHỎNG NÂNG CẤP
   ↺
```

Mục tiêu cuối cùng là biến việc mua linh kiện thành một trải nghiệm học, lắp ráp, sử dụng và nâng cấp PC liên tục.
