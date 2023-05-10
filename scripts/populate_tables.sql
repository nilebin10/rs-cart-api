INSERT INTO users (name, email, password )
VALUES
('test1', 'test1@test.com', 'test123'),
('test2', 'test2@test.com', 'test1234'),
('test3', 'test3@test.com', 'test1235')

INSERT INTO carts_items (product_id, count) 
VALUES 
('28f46c39-2975-437c-9181-3dbf76eb3410', 4),
('28f46c39-2975-437c-9181-3dbf76eb3411', 1),
('28f46c39-2975-437c-9181-3dbf76eb3412', 2),
('28f46c39-2975-437c-9181-3dbf76eb3413', 1)

INSERT INTO carts (user_id, "created_at", updated_at, status, items) 
VALUES 
('38f56371-c820-4c9d-b99d-9e7cd5fee3de', '2023-04-11', '2023-04-14', 'OPEN', '{"d2793df3-f7f5-45d4-b4fa-c019dd96b762", "7d0ff296-6276-4462-8f75-b7164aefd38c"}'),
('38f56371-c820-4c9d-b99d-9e7cd5fee3de', '2023-04-20', '2023-04-22', 'ORDERED', '{"3ebb130d-36ec-4ba3-b34b-e014b3f6a5b0", "7d0ff296-6276-4462-8f75-b7164aefd38c"}'),
('931a5a3f-cd97-465f-ae1f-940ff776efdd', '2023-04-05', '2023-04-05', 'OPEN', '{"3ebb130d-36ec-4ba3-b34b-e014b3f6a5b0"}'),
('65285887-9f92-4100-8e2f-9d1b19d275f9', '2023-04-10', '2023-04-14', 'OPEN', '{"3ebb130d-36ec-4ba3-b34b-e014b3f6a5b0", "7d0ff296-6276-4462-8f75-b7164aefd38c", "92e8d771-b0b6-46bf-a0fc-a2e3d50a8f63"}')

INSERT INTO orders(user_id, cart_id, payment, delivery, comments, status, total)
VALUES
('38f56371-c820-4c9d-b99d-9e7cd5fee3de', '35f6e654-2ead-46c6-96c4-002762d4bf60', '{ "mode": "cod", "emi": false }', '{ "address": "home", "sign": false }', 'Good', 'ORDERED', 450),
('38f56371-c820-4c9d-b99d-9e7cd5fee3de', '3e8e2c1c-74c8-488b-9262-f6b01500ddb5', '{ "mode": "cash", "emi": false }', '{ "address": "home", "sign": true }', 'Ok', 'OPEN', 300),
('931a5a3f-cd97-465f-ae1f-940ff776efdd', '0ab63f77-a839-48e5-8883-b8ae1ac2d888', '{ "mode": "card", "emi": true }', '{ "address": "home", "sign": false }', 'Ok', 'ORDERED', 100),
('65285887-9f92-4100-8e2f-9d1b19d275f9', 'cc69c3a5-9c3e-432a-9990-8de104a238cc', '{ "mode": "cod", "emi": false }', '{ "address": "office", "sign": false }', 'Bad', 'ORDERED', 300)