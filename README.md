# E-commerce API

- Language and framework used: **Node.js**, **Express.js**.
- Database used: **MySQL**, **Prisma**.

# Question a
## Database
### 1. **Users**
Bảng **Users** lưu trữ thông tin về người dùng, bao gồm tên, email, số điện thoại, mật khẩu, và thời gian tạo và cập nhật tài khoản.

| Trường        | Kiểu dữ liệu       | Mô tả                              |
|---------------|--------------------|------------------------------------|
| `user_id`     | `INT`              | Mã người dùng (PK)        |
| `user_name`   | `VARCHAR(255)`      | Tên người dùng                    |
| `email`       | `VARCHAR(255)`      | Email của người dùng              |
| `phone`       | `VARCHAR(20)`       | Số điện thoại của người dùng      |
| `password`    | `VARCHAR(255)`      | Mật khẩu của người dùng           |
| `created_at`  | `TIMESTAMP`         | Thời gian tạo tài khoản           |
| `updated_at`  | `TIMESTAMP`         | Thời gian cập nhật tài khoản      |

### 2. **Categories**
Bảng **Categories** lưu trữ các danh mục sản phẩm như giày dép, quần áo, thiết bị điện tử...

| Trường          | Kiểu dữ liệu       | Mô tả                              |
|-----------------|--------------------|------------------------------------|
| `category_id`   | `INT`              | Mã danh mục (PK)          |
| `category_name` | `VARCHAR(255)`      | Tên danh mục                      |
| `created_at`    | `TIMESTAMP`         | Thời gian tạo danh mục            |
| `updated_at`    | `TIMESTAMP`         | Thời gian cập nhật danh mục       |

### 3. **Stores**
Bảng **Stores** lưu trữ thông tin về các cửa hàng như tên cửa hàng và địa chỉ.

| Trường          | Kiểu dữ liệu       | Mô tả                              |
|-----------------|--------------------|------------------------------------|
| `store_id`      | `INT`              | Mã cửa hàng (PK)           |
| `store_name`    | `VARCHAR(100)`      | Tên cửa hàng                       |
| `store_location`| `VARCHAR(255)`      | Địa chỉ cửa hàng                   |
| `created_at`    | `TIMESTAMP`         | Thời gian tạo cửa hàng             |
| `updated_at`    | `TIMESTAMP`         | Thời gian cập nhật cửa hàng        |

### 4. **Products**
Bảng **Products** lưu trữ thông tin về các sản phẩm, bao gồm tên, mô tả, giá và số lượng trong kho.

| Trường                 | Kiểu dữ liệu       | Mô tả                              |
|------------------------|--------------------|------------------------------------|
| `product_id`           | `INT`              | Mã sản phẩm (PK)          |
| `product_name`         | `VARCHAR(255)`      | Tên sản phẩm                       |
| `description`          | `VARCHAR(255)`      | Mô tả sản phẩm                     |
| `price`                | `DECIMAL(10, 2)`    | Giá sản phẩm                       |
| `discount_percentage`  | `DECIMAL(5, 2)`     | Tỷ lệ giảm giá sản phẩm            |
| `image_url`            | `VARCHAR(255)`      | URL hình ảnh sản phẩm              |
| `color`                | `VARCHAR(50)`       | Màu sắc sản phẩm                   |
| `size`                 | `VARCHAR(50)`       | Kích cỡ sản phẩm                   |
| `quantity_in_stock`    | `INT`              | Số lượng sản phẩm trong kho        |
| `category_id`          | `INT`              | Mã danh mục (FK)          |
| `created_at`           | `TIMESTAMP`         | Thời gian tạo sản phẩm             |
| `updated_at`           | `TIMESTAMP`         | Thời gian cập nhật sản phẩm        |

### 5. **Stores_Products**
Bảng **Stores_Products** liên kết sản phẩm với cửa hàng, lưu trữ giá bán và số lượng sản phẩm tại từng cửa hàng.

| Trường                 | Kiểu dữ liệu       | Mô tả                              |
|------------------------|--------------------|------------------------------------|
| `store_product_id`     | `INT`              | Mã cửa hàng - sản phẩm (PK)|
| `store_id`             | `INT`              | Mã cửa hàng (FK)           |
| `product_id`           | `INT`              | Mã sản phẩm (FK)          |
| `price_in_store`       | `DECIMAL(10, 2)`    | Giá sản phẩm trong cửa hàng        |
| `quantity_in_store`    | `INT`              | Số lượng sản phẩm trong cửa hàng   |
| `created_at`           | `TIMESTAMP`         | Thời gian tạo sản phẩm trong cửa hàng |
| `updated_at`           | `TIMESTAMP`         | Thời gian cập nhật sản phẩm trong cửa hàng |

### 6. **Address**
Bảng **Address** lưu trữ thông tin địa chỉ của người dùng để giao hàng.

| Trường           | Kiểu dữ liệu       | Mô tả                              |
|------------------|--------------------|------------------------------------|
| `address_id`     | `INT`              | Mã địa chỉ (PK)           |
| `user_id`        | `INT`              | Mã người dùng (FK)        |
| `province`       | `VARCHAR(255)`      | Tỉnh thành                         |
| `district`       | `VARCHAR(255)`      | Quận huyện                         |
| `commune`        | `VARCHAR(255)`      | Phường xã                          |
| `street`         | `VARCHAR(255)`      | Đường phố                          |
| `housing_type`   | `VARCHAR(50)`       | Loại nhà ở                        |
| `created_at`     | `TIMESTAMP`         | Thời gian tạo địa chỉ              |
| `updated_at`     | `TIMESTAMP`         | Thời gian cập nhật địa chỉ         |

### 7. **Orders**
Bảng **Orders** lưu trữ thông tin đơn hàng của người dùng, bao gồm tổng giá trị đơn hàng và phí vận chuyển.

| Trường               | Kiểu dữ liệu       | Mô tả                              |
|----------------------|--------------------|------------------------------------|
| `order_id`           | `INT`              | Mã đơn hàng (PK)          |
| `user_id`            | `INT`              | Mã người dùng (FK)        |
| `order_date`         | `TIMESTAMP`        | Thời gian đặt hàng                 |
| `total_price`        | `DECIMAL(10, 2)`    | Tổng giá trị đơn hàng              |
| `shipping_address_id`| `INT`              | Mã địa chỉ giao hàng (FK) |
| `shipping_fee`       | `DECIMAL(10, 2)`    | Phí vận chuyển                     |
| `order_status`       | `ENUM`             | Trạng thái đơn hàng (e.g., PENDING, PROCESSING) |
| `created_at`         | `TIMESTAMP`         | Thời gian tạo đơn hàng             |
| `updated_at`         | `TIMESTAMP`         | Thời gian cập nhật đơn hàng        |

### 8. **Order_Details**
Bảng **Order_Details** lưu trữ thông tin chi tiết về các sản phẩm trong mỗi đơn hàng.

| Trường               | Kiểu dữ liệu       | Mô tả                              |
|----------------------|--------------------|------------------------------------|
| `order_detail_id`    | `INT`              | Mã chi tiết đơn hàng (PK)  |
| `order_id`           | `INT`              | Mã đơn hàng (FK)          |
| `store_product_id`   | `INT`              | Mã sản phẩm trong cửa hàng (FK) |
| `quantity`           | `INT`              | Số lượng sản phẩm trong đơn hàng   |
| `price_order`        | `DECIMAL(10, 2)`    | Giá sản phẩm trong đơn hàng       |
| `created_at`         | `TIMESTAMP`         | Thời gian tạo chi tiết đơn hàng    |
| `updated_at`         | `TIMESTAMP`         | Thời gian cập nhật chi tiết đơn hàng|

### 9. **Vouchers**
Bảng **Vouchers** lưu trữ thông tin về các voucher giảm giá, bao gồm mã voucher và tỷ lệ giảm giá.

| Trường               | Kiểu dữ liệu       | Mô tả                              |
|----------------------|--------------------|------------------------------------|
| `voucher_id`         | `INT`              | Mã voucher (PK)           |
| `voucher_code`       | `VARCHAR(50)`      | Mã voucher                        |
| `discount_percentage`| `DECIMAL(5, 2)`     | Phần trăm giảm giá                 |
| `expiry_date`        | `DATE`             | Ngày hết hạn voucher               |
| `created_at`         | `TIMESTAMP`         | Thời gian tạo voucher              |
| `updated_at`         | `TIMESTAMP`         | Thời gian cập nhật voucher         |

### 10. **User_Vouchers**
Bảng **User_Vouchers** liên kết giữa người dùng và các voucher mà họ đã nhận hoặc sử dụng.

| Trường               | Kiểu dữ liệu       | Mô tả                              |
|----------------------|--------------------|------------------------------------|
| `user_voucher_id`    | `INT`              | Mã voucher của người dùng (PK) |
| `user_id`            | `INT`              | Mã người dùng (FK liên kết với bảng Users) |
| `voucher_id`         | `INT`              | Mã voucher (FK liên kết với bảng Vouchers) |
| `used_date`          | `TIMESTAMP`        | Thời gian sử dụng voucher          |
| `created_at`         | `TIMESTAMP`        | Thời gian tạo bản ghi voucher người dùng |
| `updated_at`         | `TIMESTAMP`        | Thời gian cập nhật bản ghi voucher người dùng |

### 11. **Order_Vouchers**
Bảng **Order_Vouchers** lưu trữ thông tin về các voucher áp dụng cho từng đơn hàng.

| Trường               | Kiểu dữ liệu       | Mô tả                              |
|----------------------|--------------------|------------------------------------|
| `order_voucher_id`   | `INT`              | Mã voucher của đơn hàng (PK) |
| `order_id`           | `INT`              | Mã đơn hàng (FK liên kết với bảng Orders) |
| `voucher_id`         | `INT`              | Mã voucher (FK liên kết với bảng Vouchers) |
| `discount_amount`    | `DECIMAL(10, 2)`   | Số tiền giảm giá từ voucher       |
| `created_at`         | `TIMESTAMP`        | Thời gian tạo bản ghi voucher cho đơn hàng |
| `updated_at`         | `TIMESTAMP`        | Thời gian cập nhật bản ghi voucher của đơn hàng |

### 12. **Payments**
Bảng **Payments** lưu trữ thông tin về thanh toán của đơn hàng, bao gồm phương thức và trạng thái thanh toán.

| Trường             | Kiểu dữ liệu       | Mô tả                              |
|--------------------|--------------------|------------------------------------|
| `payment_id`       | `INT`              | Mã thanh toán (PK)         |
| `order_id`         | `INT`              | Mã đơn hàng (FK)          |
| `payment_method`   | `ENUM`             | Phương thức thanh toán (CASH, CREDIT CARD, ONLINE) |
| `payment_date`     | `TIMESTAMP`        | Thời gian thanh toán                |
| `payment_amount`   | `DECIMAL(10, 2)`    | Số tiền thanh toán                 |
| `payment_status`   | `ENUM`             | Trạng thái thanh toán (PENDING, COMPLETED, FAILED) |
| `created_at`       | `TIMESTAMP`         | Thời gian tạo thanh toán           |
| `updated_at`       | `TIMESTAMP`         | Thời gian cập nhật thanh toán      |


## Chuẩn hóa cơ sở dữ liệu (Database Normalization)
### **Chuẩn hóa cấp 1 (1NF - First Normal Form)**
Tất cả các bảng trong cơ sở dữ liệu đều tuân theo chuẩn **1NF**, chỉ chứa các giá trị duy nhất. Ví dụ, trong bảng **`Products`**, các trường như `product_name`, `price`, `color`, `size` đều chứa giá trị duy nhất cho mỗi sản phẩm và không chứa nhiều giá trị trong một ô.
Bảng **`Orders`** lưu trữ mỗi đơn hàng trên một dòng duy nhất, và bảng **`Order_Details`** lưu trữ các sản phẩm trong đơn hàng mà không vi phạm tính nguyên tố của dữ liệu.

### **Chuẩn hóa cấp 2 (2NF - Second Normal Form)**
Bảng **`Orders`** tuân thủ **2NF** vì các thuộc tính không phải khóa như `total_price`, `shipping_fee`, `order_status` đều phụ thuộc đầy đủ vào PK `order_id`.
Bảng **`Order_Details`** lưu trữ chi tiết sản phẩm của đơn hàng, trong đó `quantity` và `price_order` phụ thuộc đầy đủ vào PK là sự kết hợp của `order_id` và `store_product_id`.

### **Chuẩn hóa cấp 3 (3NF - Third Normal Form)**
Bảng **`Products`** đảm bảo chuẩn **3NF** vì các thuộc tính không phải khóa như `price`, `color`, `size` chỉ phụ thuộc vào PK `product_id`, không phụ thuộc vào bất kỳ thuộc tính không khóa nào khác.
Bảng **`Stores_Products`** lưu trữ mối quan hệ nhiều-nhiều giữa các cửa hàng và sản phẩm, đảm bảo không có sự phụ thuộc chuyển tiếp và không có dư thừa dữ liệu.

### **Chuẩn hóa Boyce-Codd (BCNF - Boyce-Codd Normal Form)**
Cấu trúc cơ sở dữ liệu đảm bảo rằng tất cả các bảng đều tuân thủ **BCNF**. Ví dụ, trong bảng **`Stores_Products`**, cả `store_id` và `product_id` đều là một phần của PK, từ đó loại bỏ sự phụ thuộc không mong muốn và đảm bảo tính duy nhất của mỗi bản ghi.

# Question b
## (Mặc định các bảng đều không có dữ liệu)
### 1. Chèn thông tin người dùng vào bảng Users để tạo người dùng nếu người dùng chưa tồn tại:
 ```sql
 INSERT INTO Users (user_name, email, phone, password)
 VALUES ('assessment', 'gu@gmail.com', '3283553333', 'password1234');
```
### 2. Chèn địa chỉ người dùng vào bảng Address:
```sql
INSERT INTO Address (user_id, province, district, commune, street, housing_type)
VALUES (1, 'Bắc Kạn', 'Ba Bể', 'Phúc Lộc', '73 Tân Hoà 2', 'Nhà riêng');
```
### 3. Chèn sản phẩm vào bảng Products:
```sql
INSERT INTO Products (product_name, description, price, discount_percentage, image_url, color, size, quantity_in_stock, category_id) VALUES 
("KAPPA Women's Sneakers", 'Giày thể thao nữ KAPPA', 980000, 10, 'kappa.img', 'yellow', '36', 5, 1);
```
### 4. Chèn cửa hàng sẽ bán sản phẩm vào bảng Stores:
```sql
INSERT INTO Stores (store_name, store_location)
VALUES ('Store Hồ Chí Minh', 'Hồ Chí Minh');
```
### 5. Chèn sản phẩm vào các cửa hàng sẽ được bán vào bảng Stores_Products:
```sql
INSERT INTO Stores_Products (store_id, product_id, price_in_store, quantity_in_store)
VALUES (1, 1, 600000, 5);
```
### 6. Chèn đơn hàng vào bảng Orders:
```sql
INSERT INTO Orders (user_id, total_price, shipping_address_id, shipping_fee)
VALUES (1, 980000 * 1, 1, 25000);
```
### 7. Chèn chi tiết đơn hàng vào bảng Order_Details:
```sql
INSERT INTO Order_Details (order_id, store_product_id, quantity, price_order)
VALUES (1, 1, 1, 980000);
```

# Question c
### Để tính giá trị đơn hàng trung bình, cần tính tổng giá trị của các sản phẩm trong mỗi đơn hàng và chia cho số lượng đơn hàng trong mỗi tháng của năm hiện tại.
```sql
SELECT 
    YEAR(o.order_date) AS year,
    MONTH(o.order_date) AS month,
    AVG(od.price_order * od.quantity) AS average_order_value
FROM 
    Orders o
JOIN 
    Order_Details od ON o.order_id = od.order_id
WHERE 
    YEAR(o.order_date) = YEAR(CURRENT_DATE)
GROUP BY 
    YEAR(o.order_date), MONTH(o.order_date)
ORDER BY 
    month;
```

# Question d
### Để tính tỷ lệ churn, cần tìm tổng số các khách hàng đã thực hiện ít nhất một giao dịch trong 6 tháng trước đó nhưng không thực hiện giao dịch nào trong 6 tháng qua. Sau đó, tính tỷ lệ churn từ số khách hàng đó so với tổng số khách hàng.
```sql
SELECT 
    (COUNT(DISTINCT c.user_id) / (SELECT COUNT(DISTINCT user_id) FROM Orders)) * 100 AS churn_rate
FROM 
    Orders c
WHERE 
    c.user_id NOT IN (
        -- Lọc khách hàng đã mua trong 6 tháng qua
        SELECT user_id 
        FROM Orders 
        WHERE order_date >= CURDATE() - INTERVAL 6 MONTH
    )
    -- Lọc khách hàng đã mua hàng trong 6 tháng trước
    AND c.order_date < CURDATE() - INTERVAL 6 MONTH
GROUP BY 
    c.user_id;
```

# Cách cài đặt và chạy local:
## 1. Clone project
```
git clone https://github.com/vominhnhan/api_ecommerce.git
cd api_ecommerce
```
## 2. Cài đặt dependencies
```
npm install
```
## 3. Chỉnh sửa file .env
```
DATABASE_URL="mysql://your_user:your_password@localhost:your_port_sql/ecommerce_db"
PORT=your_port
```
## 4. Cài đặt database:
```
npx prisma migrate dev --name init
npx prisma generate
```
## 5. Chạy dự án
```
npm run start
```

# API Endpoints
### 1. **Lấy danh sách tất cả các danh mục sản phẩm đã có**
   - **URL**: `http://localhost:3069/api/categories`
   - **Method**: `GET`
   - **Response**:\
![image](https://github.com/user-attachments/assets/88a24403-e15e-44b8-a8f2-0b94fb8e1896)

### 2. **Lấy danh sách sản phẩm thuộc một danh mục cụ thể**
   - **URL**: `http://localhost:3069/api/products?category_id={category_id}`
   - **Method**: `GET`
   - **Request query**:
     - `category_id`: Mã danh mục sản phẩm
   - **Response**:\
![image](https://github.com/user-attachments/assets/d4ac7e77-2684-4b09-a42a-be5540cfb15a)

### 3. **Tìm kiếm sản phẩm với nhiều bộ lọc và từ khóa tìm kiếm**
   - **URL**: `http://localhost:3069/api/products/search?query={query}&category_id={category_id}&min_price={min_price}&max_price={max_price}&size={size}&color={color}`
   - **Method**: `GET`
   - **Request query**:
     - `query`: Từ khóa tìm kiếm (e.g., "giày", "áo")
     - `category_id`: Mã danh mục sản phẩm (tùy chọn)
     - `min_price`: Giá tối thiểu (tùy chọn)
     - `max_price`: Giá tối đa (tùy chọn)
     - `size`: Kích thước (tùy chọn)
     - `color`: Màu sắc (tùy chọn)
   - **Response**:\
![image](https://github.com/user-attachments/assets/7c07f0c5-1873-4676-9243-f90d4e77e257)

### 4. **Tạo đơn hàng mới và xử lý thanh toán**
   - **URL**: `http://localhost:3069/api/orders`
   - **Method**: `POST`
   - **Request body**:
     - `user_id`: ID người dùng
     - `items`: Danh sách sản phẩm trong đơn hàng. Mỗi sản phẩm bao gồm:
         - `product_id`: Mã sản phẩm
         - `store_id`: Mã cửa hàng nơi bán sản phẩm
         - `quantity`: Số lượng sản phẩm
     - `shipping_fee`: Phí vận chuyển
     - `payment_method`: Phương thức thanh toán (CASH, CREDIT_CARD, ONLINE)
```json
{
    "user_id": 1,
    "items": [
        {
            "product_id": 1,
            "store_id": 1,
            "quantity": 2
        }
    ],
    "shipping_fee": 25000,
    "payment_method": "CASH"

}
```
   - **Response**:\
![image](https://github.com/user-attachments/assets/98416121-4903-4b60-8bd1-4fb8b6e057b7)

### 5. **Gửi email xác nhận đơn hàng cho người dùng**
- Sau khi tạo đơn hàng và thanh toán, hệ thống sẽ tự động gửi đến email của người dùng.
- Email được gửi đến cho người dùng:
![image](https://github.com/user-attachments/assets/81fe18e1-dbf4-4eb1-9e8f-b7761209d541)
