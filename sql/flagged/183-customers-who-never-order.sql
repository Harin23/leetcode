// # beats 54 % can be improved;
// # Write your MySQL query statement below
select name as Customers
from customers
where false=exists
(Select orders.customerId
from orders
where orders.customerId=customers.id);
