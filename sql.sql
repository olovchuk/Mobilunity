CREATE TABLE Sales (
    SaleID INT PRIMARY KEY,
    SaleDate DATE,
    BuyerEmail VARCHAR(255)
);

CREATE TABLE SalesDetails (
    SaleID INT,
    ProductID INT,
    ProductName VARCHAR(255),
    ProductQuantity INT,
    ProductPrice DECIMAL(10, 2),
    FOREIGN KEY (SaleID) REFERENCES Sales(SaleID)
);


INSERT INTO Sales (SaleID, SaleDate, BuyerEmail)
VALUES
(1, '2024-07-01', 'buyer1@example.com'),
(2, '2024-07-01', 'buyer2@example.com'),
(3, '2024-07-02', 'buyer1@example.com'),
(4, '2024-07-03', 'buyer3@example.com'),
(5, '2024-07-03', 'buyer2@example.com');


INSERT INTO SalesDetails (SaleID, ProductID, ProductName, ProductQuantity, ProductPrice)
VALUES
(1, 101, 'Product A', 10, 50.00),
(1, 102, 'Product B', 5, 20.00),
(2, 103, 'Product C', 15, 40.00),
(2, 104, 'Product D', 1, 500.00),
(3, 105, 'Product E', 2, 300.00),
(3, 106, 'Product F', 1, 700.00),
(4, 107, 'Product G', 3, 50.00),
(4, 108, 'Product H', 2, 100.00),
(5, 109, 'Product I', 5, 200.00);

SELECT s.BuyerEmail
FROM Sales s
JOIN SalesDetails sd ON s.SaleID = sd.SaleID
GROUP BY s.BuyerEmail, s.SaleDate
HAVING AVG(sd.ProductQuantity * sd.ProductPrice) > 1000;