import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const splitSql = (sql: string) => {
  return sql.split(';').filter(content => content.trim() !== '')
}

async function main() {
  const sql = `

INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('3f35f79d-9fa7-4973-8886-d5be5461da8c', '1Amina37@hotmail.com', 'Michael White', 'https://i.imgur.com/YfJQV5z.png?id=3', 'abc123token', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('d6d5ec72-612e-4356-82f4-b639100c2954', '9Maritza_Simonis@yahoo.com', 'Alex Jones', 'https://i.imgur.com/YfJQV5z.png?id=11', 'abc123token', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('78983646-473f-42df-93cb-f4916d5fa687', '17Hannah_Donnelly63@yahoo.com', 'Emily Brown', 'https://i.imgur.com/YfJQV5z.png?id=19', 'mno345token', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('27b0ece7-6f7d-415f-a731-532dbdb497b4', '25Agustin82@hotmail.com', 'Alex Jones', 'https://i.imgur.com/YfJQV5z.png?id=27', 'jkl012token', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('dd1e62eb-3fab-411d-9be8-484caf9ec216', '33Brando_Toy@hotmail.com', 'Michael White', 'https://i.imgur.com/YfJQV5z.png?id=35', 'jkl012token', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('a491a6aa-b97e-42d0-bd88-ceacd5a9cdb2', '41Maurine.Lockman78@yahoo.com', 'Emily Brown', 'https://i.imgur.com/YfJQV5z.png?id=43', 'mno345token', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('7d8a63d6-dcf0-4475-bf2b-e9102cb720ec', '57Danika_Stoltenberg@hotmail.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=59', 'ghi789token', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('96404019-3339-465e-a859-f765b2b7c957', '65Zena88@gmail.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=67', 'jkl012token', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "status", "globalRole", "password") VALUES ('d202e5ab-dbdb-4182-b26b-de1b4e2f9a25', '73Ocie90@hotmail.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=75', 'def456token', 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');

INSERT INTO "Department" ("id", "name") VALUES ('0fb26be7-8c31-49c4-9f7d-71d6a3cc0c8d', 'Facilities Management');
INSERT INTO "Department" ("id", "name") VALUES ('93cbb646-33f7-4980-a363-cd7a3d164edb', 'IT Support');
INSERT INTO "Department" ("id", "name") VALUES ('351b363c-5203-49b1-b23e-5f1425f76a7b', 'IT Support');
INSERT INTO "Department" ("id", "name") VALUES ('25f360eb-05c5-462e-b526-1400af82a11e', 'Security Operations');
INSERT INTO "Department" ("id", "name") VALUES ('67cdf363-8da0-45ad-a6ae-4186b2642a65', 'Research and Development');
INSERT INTO "Department" ("id", "name") VALUES ('98f7baf2-021d-4156-b711-1dbb9c8ccd66', 'Human Resources');
INSERT INTO "Department" ("id", "name") VALUES ('b75d700c-5b3a-4e8a-98e0-7580fe3eec05', 'Human Resources');
INSERT INTO "Department" ("id", "name") VALUES ('1aa5e8a6-75c6-43f7-ae1f-4cb989d42f45', 'Research and Development');
INSERT INTO "Department" ("id", "name") VALUES ('adbe946d-2661-4e8e-b3e0-5f3d8eb921ca', 'Security Operations');
INSERT INTO "Department" ("id", "name") VALUES ('fe2a5585-1b36-43db-a381-94e28be35b6e', 'IT Support');

INSERT INTO "RoleData" ("id", "name") VALUES ('bbedd0da-c8ba-4bbc-a814-c6e023796e90', 'System Analyst');
INSERT INTO "RoleData" ("id", "name") VALUES ('a08c778e-ae3d-4a34-9f99-0719bef7d270', 'Surveillance Operator');
INSERT INTO "RoleData" ("id", "name") VALUES ('0413f2e1-9a24-4da2-9a86-da5b066330ec', 'Surveillance Operator');
INSERT INTO "RoleData" ("id", "name") VALUES ('953f5a71-476e-49d8-8319-0427b0790d2a', 'System Analyst');
INSERT INTO "RoleData" ("id", "name") VALUES ('0d247a3b-4bef-4653-8bd7-0cfc307597c3', 'System Analyst');
INSERT INTO "RoleData" ("id", "name") VALUES ('ca115bbf-49d1-4fb8-be6a-e5f722a51a65', 'Security Officer');
INSERT INTO "RoleData" ("id", "name") VALUES ('74bb0762-50bd-49f2-9b09-53cf37b650ec', 'Surveillance Operator');
INSERT INTO "RoleData" ("id", "name") VALUES ('afb48c1f-2000-4a5b-954a-d02bca38fc8c', 'Network Technician');
INSERT INTO "RoleData" ("id", "name") VALUES ('bda230cf-7be4-4525-9f04-3842f095c871', 'Network Technician');
INSERT INTO "RoleData" ("id", "name") VALUES ('92039c27-09c3-4025-8c35-b19e566af256', 'Surveillance Operator');

INSERT INTO "Permission" ("id", "name") VALUES ('1e5699ff-0b8f-4aba-96fd-16cd435cb051', 'Viewer');
INSERT INTO "Permission" ("id", "name") VALUES ('73e96703-9187-4a19-8fe9-5e0939313c2c', 'Admin Access');
INSERT INTO "Permission" ("id", "name") VALUES ('56d0ea14-19df-4527-9676-518f56d02dbb', 'Guest');
INSERT INTO "Permission" ("id", "name") VALUES ('2d3b2383-01b5-40d5-b2fd-83ad60b10979', 'Viewer');
INSERT INTO "Permission" ("id", "name") VALUES ('7f4c48dd-3810-4f10-832f-926fc0c5b574', 'Guest');
INSERT INTO "Permission" ("id", "name") VALUES ('9b56f3c9-fece-4102-9233-b25496b4a6de', 'Viewer');
INSERT INTO "Permission" ("id", "name") VALUES ('ebd049f8-7a80-4b59-8ab9-80c34e056830', 'Guest');
INSERT INTO "Permission" ("id", "name") VALUES ('2a29182c-59bb-42e6-bbff-e9d9823b1971', 'Guest');
INSERT INTO "Permission" ("id", "name") VALUES ('c6b3cde4-efd3-488c-ab12-94014636b2c5', 'Editor');
INSERT INTO "Permission" ("id", "name") VALUES ('3b7fb517-bff0-4121-a5f7-a2ff23edeccb', 'Guest');

INSERT INTO "IncidentType" ("id", "name") VALUES ('fc98d52f-079d-4d95-847e-f57b7317d0a4', 'Suspicious Activity');
INSERT INTO "IncidentType" ("id", "name") VALUES ('4efa1ac1-a191-413e-b4a5-f628ef5b948c', 'Vandalism');
INSERT INTO "IncidentType" ("id", "name") VALUES ('8ca04412-e01f-4dbf-b7ee-80e69e0245e0', 'Theft');
INSERT INTO "IncidentType" ("id", "name") VALUES ('60e452b8-3999-4142-b9cf-0ddb98acbc8e', 'Theft');
INSERT INTO "IncidentType" ("id", "name") VALUES ('1f126b3c-ca6f-4391-984f-82cf7854d4f8', 'Suspicious Activity');
INSERT INTO "IncidentType" ("id", "name") VALUES ('b8523d49-6e2c-4553-a1c9-5eb7f2b28133', 'Loitering');
INSERT INTO "IncidentType" ("id", "name") VALUES ('ef7cb21d-29b3-4640-8c5c-485ac0902514', 'Suspicious Activity');
INSERT INTO "IncidentType" ("id", "name") VALUES ('0afb5aa6-1148-467f-95bd-d4d7bf5ec0dc', 'Theft');
INSERT INTO "IncidentType" ("id", "name") VALUES ('a3655d6f-2433-4486-ad42-cba3d14ab812', 'Theft');
INSERT INTO "IncidentType" ("id", "name") VALUES ('c9d33f36-7d89-4db7-8fb3-9aab8ff7dfa1', 'Vandalism');

INSERT INTO "IncidentGroup" ("id", "name") VALUES ('998a2f6f-c4a1-45fb-8822-6e334a36e93f', 'Unauthorized Access Alert');
INSERT INTO "IncidentGroup" ("id", "name") VALUES ('6b904168-bdde-453a-879a-42035d5abb17', 'Suspicious Activity Detected');
INSERT INTO "IncidentGroup" ("id", "name") VALUES ('29f837e2-0781-4ed2-8476-af60927ba166', 'Unauthorized Access Alert');
INSERT INTO "IncidentGroup" ("id", "name") VALUES ('7d2f9f34-7c0c-44c3-b3f3-6af4f4c9498c', 'Lost Item Report');
INSERT INTO "IncidentGroup" ("id", "name") VALUES ('de74ad12-eb45-4845-be73-97092bcb6ac6', 'Emergency Evacuation');
INSERT INTO "IncidentGroup" ("id", "name") VALUES ('52de56bd-c2f3-4fda-8037-c7367459e36a', 'Unauthorized Access Alert');
INSERT INTO "IncidentGroup" ("id", "name") VALUES ('46c6b23e-5237-4202-b2bf-33198ffefb0a', 'Lost Item Report');
INSERT INTO "IncidentGroup" ("id", "name") VALUES ('54823a63-249e-47b8-8416-7af149d8456e', 'Vandalism Incident');
INSERT INTO "IncidentGroup" ("id", "name") VALUES ('85298383-ac89-4b46-b5c7-e5cb378a165a', 'Emergency Evacuation');
INSERT INTO "IncidentGroup" ("id", "name") VALUES ('7db221d5-01a9-454b-ae7c-ae97adaa0603', 'Unauthorized Access Alert');

INSERT INTO "Camera" ("id", "name", "location", "status") VALUES ('c7b22eb0-11fe-461b-842d-fd332ca0fc8f', 'Parking Lot Camera', 'Underground Parking', 'Active');
INSERT INTO "Camera" ("id", "name", "location", "status") VALUES ('16dcd0e8-9f44-4c43-a4dd-3e55113d2ae3', 'Hallway Camera', 'Elevator 2', 'Active');
INSERT INTO "Camera" ("id", "name", "location", "status") VALUES ('2e8a9212-953d-450b-ac40-af729688d712', 'Elevator Camera', 'Underground Parking', 'Under Maintenance');
INSERT INTO "Camera" ("id", "name", "location", "status") VALUES ('35e34aff-090f-4c81-9d06-c23b9c6c018f', 'Lobby Camera', 'Main Entrance', 'Active');
INSERT INTO "Camera" ("id", "name", "location", "status") VALUES ('d039fdfb-e73b-4c52-9f19-ae02906dbde3', 'Lobby Camera', 'Underground Parking', 'Inactive');
INSERT INTO "Camera" ("id", "name", "location", "status") VALUES ('c78a3570-15a2-4524-b3fc-b887b37397f4', 'Parking Lot Camera', 'Main Entrance', 'Active');
INSERT INTO "Camera" ("id", "name", "location", "status") VALUES ('d8289103-db80-48e5-9fe8-171da70c5206', 'Entrance Camera', 'Main Entrance', 'Active');
INSERT INTO "Camera" ("id", "name", "location", "status") VALUES ('20aa92df-0c79-4451-8a0c-f2b2336971d9', 'Entrance Camera', 'North Wing Hallway', 'Inactive');
INSERT INTO "Camera" ("id", "name", "location", "status") VALUES ('5a7356ea-d38d-4308-934d-9a5300319737', 'Entrance Camera', 'Main Entrance', 'Active');
INSERT INTO "Camera" ("id", "name", "location", "status") VALUES ('461fd9f3-3279-474e-b9b4-57f84373d6b5', 'Parking Lot Camera', 'Elevator 2', 'Active');

INSERT INTO "SurveillanceObject" ("id", "name", "description") VALUES ('e5afa551-b906-4fe3-8b12-94f86a18257f', 'Michael Johnson', 'Employee of the month');
INSERT INTO "SurveillanceObject" ("id", "name", "description") VALUES ('bdf0dc3d-2e82-4328-a576-854a87dcb3dd', 'John Doe', 'Suspect in recent burglary case');
INSERT INTO "SurveillanceObject" ("id", "name", "description") VALUES ('f6e81eb1-e26b-4536-a500-859d309885ba', 'Chris Brown', 'Suspect in recent burglary case');
INSERT INTO "SurveillanceObject" ("id", "name", "description") VALUES ('9a161030-0f1b-4c94-97c6-acf93a594e8b', 'John Doe', 'Employee of the month');
INSERT INTO "SurveillanceObject" ("id", "name", "description") VALUES ('dc00191c-da71-4085-b896-212be3cf61c1', 'Emily Davis', 'Employee of the month');
INSERT INTO "SurveillanceObject" ("id", "name", "description") VALUES ('67d0e2c9-12a1-4e78-8b2d-c5b028d17968', 'Chris Brown', 'Contractor working on site renovations');
INSERT INTO "SurveillanceObject" ("id", "name", "description") VALUES ('a217c142-3412-40c5-bd49-5e9b6f243361', 'Chris Brown', 'Frequent visitor to the premises');
INSERT INTO "SurveillanceObject" ("id", "name", "description") VALUES ('b6f8102a-bee1-43f4-a035-88cd72688447', 'Michael Johnson', 'Suspect in recent burglary case');
INSERT INTO "SurveillanceObject" ("id", "name", "description") VALUES ('338768a4-1a07-4ac6-9ae7-421e2b85cd64', 'Emily Davis', 'Employee of the month');
INSERT INTO "SurveillanceObject" ("id", "name", "description") VALUES ('9f2da4a2-7e94-4062-8eef-a0a97f2361dc', 'Emily Davis', 'VIP guest with special access');

INSERT INTO "UserRole" ("id", "userId", "roleId") VALUES ('7983a239-c03a-4d9f-b725-c91844166076', '3f35f79d-9fa7-4973-8886-d5be5461da8c', 'ca115bbf-49d1-4fb8-be6a-e5f722a51a65');
INSERT INTO "UserRole" ("id", "userId", "roleId") VALUES ('1e2a2f91-1b2c-410b-b212-777d07ab3b0e', '7d8a63d6-dcf0-4475-bf2b-e9102cb720ec', '0d247a3b-4bef-4653-8bd7-0cfc307597c3');
INSERT INTO "UserRole" ("id", "userId", "roleId") VALUES ('c6883aba-2fe3-4961-9e64-ac6ef9cf929a', 'dd1e62eb-3fab-411d-9be8-484caf9ec216', '0d247a3b-4bef-4653-8bd7-0cfc307597c3');
INSERT INTO "UserRole" ("id", "userId", "roleId") VALUES ('18da8b39-c10c-43cc-9144-d531e8a3cf0a', '7d8a63d6-dcf0-4475-bf2b-e9102cb720ec', 'ca115bbf-49d1-4fb8-be6a-e5f722a51a65');
INSERT INTO "UserRole" ("id", "userId", "roleId") VALUES ('2ce0a18f-aa76-4514-9c49-fe4d0efe7822', 'd6d5ec72-612e-4356-82f4-b639100c2954', '0d247a3b-4bef-4653-8bd7-0cfc307597c3');
INSERT INTO "UserRole" ("id", "userId", "roleId") VALUES ('e06e3131-76d5-4542-bbfe-4d1d35884965', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '953f5a71-476e-49d8-8319-0427b0790d2a');
INSERT INTO "UserRole" ("id", "userId", "roleId") VALUES ('9fe65bbd-8396-4c02-98f0-a8b7560704d3', '27b0ece7-6f7d-415f-a731-532dbdb497b4', 'ca115bbf-49d1-4fb8-be6a-e5f722a51a65');
INSERT INTO "UserRole" ("id", "userId", "roleId") VALUES ('7ae9218d-3c41-4fc5-9dc2-61c39f51f2cd', '3f35f79d-9fa7-4973-8886-d5be5461da8c', '953f5a71-476e-49d8-8319-0427b0790d2a');
INSERT INTO "UserRole" ("id", "userId", "roleId") VALUES ('b147b1ea-3ea4-4fe8-9e4c-de8cc7b5a0ed', '3f35f79d-9fa7-4973-8886-d5be5461da8c', '953f5a71-476e-49d8-8319-0427b0790d2a');
INSERT INTO "UserRole" ("id", "userId", "roleId") VALUES ('39547125-1b25-4243-8b1d-6a94c545b483', 'd202e5ab-dbdb-4182-b26b-de1b4e2f9a25', '92039c27-09c3-4025-8c35-b19e566af256');

INSERT INTO "Incident" ("id", "title", "description", "timestamp", "status", "userId", "incidentTypeId", "incidentGroupId", "cameraId", "surveillanceObjectId", "departmentId") VALUES ('01b563e6-2e44-45c6-9474-87bb6d22480a', 'Vandalism Incident', 'Graffiti was discovered on the north wall of the building.', '2024-03-03T18:50:02.773Z', 'Resolved', '7d8a63d6-dcf0-4475-bf2b-e9102cb720ec', 'c9d33f36-7d89-4db7-8fb3-9aab8ff7dfa1', '46c6b23e-5237-4202-b2bf-33198ffefb0a', '5a7356ea-d38d-4308-934d-9a5300319737', '9a161030-0f1b-4c94-97c6-acf93a594e8b', '67cdf363-8da0-45ad-a6ae-4186b2642a65');
INSERT INTO "Incident" ("id", "title", "description", "timestamp", "status", "userId", "incidentTypeId", "incidentGroupId", "cameraId", "surveillanceObjectId", "departmentId") VALUES ('3137efbb-3168-46ab-8cae-8647a9c81ba6', 'Unauthorized Access Detected', 'A person was observed loitering near the main entrance for an extended period.', '2025-07-25T19:20:43.484Z', 'Pending Review', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'a3655d6f-2433-4486-ad42-cba3d14ab812', '29f837e2-0781-4ed2-8476-af60927ba166', 'c78a3570-15a2-4524-b3fc-b887b37397f4', 'f6e81eb1-e26b-4536-a500-859d309885ba', '0fb26be7-8c31-49c4-9f7d-71d6a3cc0c8d');
INSERT INTO "Incident" ("id", "title", "description", "timestamp", "status", "userId", "incidentTypeId", "incidentGroupId", "cameraId", "surveillanceObjectId", "departmentId") VALUES ('043cfe68-37cd-4a22-a031-09d152a510ff', 'Unattended Baggage Found', 'Graffiti was discovered on the north wall of the building.', '2025-04-23T11:41:08.834Z', 'Resolved', '78983646-473f-42df-93cb-f4916d5fa687', '4efa1ac1-a191-413e-b4a5-f628ef5b948c', '7d2f9f34-7c0c-44c3-b3f3-6af4f4c9498c', '5a7356ea-d38d-4308-934d-9a5300319737', 'dc00191c-da71-4085-b896-212be3cf61c1', 'adbe946d-2661-4e8e-b3e0-5f3d8eb921ca');
INSERT INTO "Incident" ("id", "title", "description", "timestamp", "status", "userId", "incidentTypeId", "incidentGroupId", "cameraId", "surveillanceObjectId", "departmentId") VALUES ('db463c2b-a0cb-4d03-b7ba-1d4659b73e2f', 'Missing Person Alert', 'A person was observed loitering near the main entrance for an extended period.', '2025-05-03T02:44:17.088Z', 'Open', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '4efa1ac1-a191-413e-b4a5-f628ef5b948c', '52de56bd-c2f3-4fda-8037-c7367459e36a', '20aa92df-0c79-4451-8a0c-f2b2336971d9', 'bdf0dc3d-2e82-4328-a576-854a87dcb3dd', '98f7baf2-021d-4156-b711-1dbb9c8ccd66');
INSERT INTO "Incident" ("id", "title", "description", "timestamp", "status", "userId", "incidentTypeId", "incidentGroupId", "cameraId", "surveillanceObjectId", "departmentId") VALUES ('ef8980c2-2d17-4b78-9444-d3e21458be79', 'Unauthorized Access Detected', 'An individual was seen entering a restricted area without proper authorization.', '2023-10-22T21:06:47.706Z', 'Open', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '1f126b3c-ca6f-4391-984f-82cf7854d4f8', '6b904168-bdde-453a-879a-42035d5abb17', 'd039fdfb-e73b-4c52-9f19-ae02906dbde3', 'f6e81eb1-e26b-4536-a500-859d309885ba', '98f7baf2-021d-4156-b711-1dbb9c8ccd66');
INSERT INTO "Incident" ("id", "title", "description", "timestamp", "status", "userId", "incidentTypeId", "incidentGroupId", "cameraId", "surveillanceObjectId", "departmentId") VALUES ('eac78214-2b22-4266-a5e6-a3bd9afccd70', 'Vandalism Incident', 'An individual was seen entering a restricted area without proper authorization.', '2024-08-23T21:03:08.837Z', 'Resolved', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '1f126b3c-ca6f-4391-984f-82cf7854d4f8', '85298383-ac89-4b46-b5c7-e5cb378a165a', '20aa92df-0c79-4451-8a0c-f2b2336971d9', 'e5afa551-b906-4fe3-8b12-94f86a18257f', 'b75d700c-5b3a-4e8a-98e0-7580fe3eec05');
INSERT INTO "Incident" ("id", "title", "description", "timestamp", "status", "userId", "incidentTypeId", "incidentGroupId", "cameraId", "surveillanceObjectId", "departmentId") VALUES ('e9a12a70-b8df-49a3-ae73-94c8ce35e7ee', 'Unauthorized Access Detected', 'A child was reported missing and last seen near the playground area.', '2024-04-29T16:14:12.670Z', 'Closed', '27b0ece7-6f7d-415f-a731-532dbdb497b4', '1f126b3c-ca6f-4391-984f-82cf7854d4f8', '85298383-ac89-4b46-b5c7-e5cb378a165a', '2e8a9212-953d-450b-ac40-af729688d712', '67d0e2c9-12a1-4e78-8b2d-c5b028d17968', 'b75d700c-5b3a-4e8a-98e0-7580fe3eec05');
INSERT INTO "Incident" ("id", "title", "description", "timestamp", "status", "userId", "incidentTypeId", "incidentGroupId", "cameraId", "surveillanceObjectId", "departmentId") VALUES ('86bf12b3-7558-4bc5-82da-7e16bf75f72d', 'Unauthorized Access Detected', 'A child was reported missing and last seen near the playground area.', '2025-10-08T10:02:29.820Z', 'Open', 'a491a6aa-b97e-42d0-bd88-ceacd5a9cdb2', 'c9d33f36-7d89-4db7-8fb3-9aab8ff7dfa1', '54823a63-249e-47b8-8416-7af149d8456e', '5a7356ea-d38d-4308-934d-9a5300319737', '338768a4-1a07-4ac6-9ae7-421e2b85cd64', '25f360eb-05c5-462e-b526-1400af82a11e');
INSERT INTO "Incident" ("id", "title", "description", "timestamp", "status", "userId", "incidentTypeId", "incidentGroupId", "cameraId", "surveillanceObjectId", "departmentId") VALUES ('82010937-29b0-41c8-8814-68e1fdc8bc47', 'Unattended Baggage Found', 'Graffiti was discovered on the north wall of the building.', '2024-06-25T01:04:41.242Z', 'Resolved', '7d8a63d6-dcf0-4475-bf2b-e9102cb720ec', '60e452b8-3999-4142-b9cf-0ddb98acbc8e', '46c6b23e-5237-4202-b2bf-33198ffefb0a', 'd039fdfb-e73b-4c52-9f19-ae02906dbde3', 'a217c142-3412-40c5-bd49-5e9b6f243361', '351b363c-5203-49b1-b23e-5f1425f76a7b');
INSERT INTO "Incident" ("id", "title", "description", "timestamp", "status", "userId", "incidentTypeId", "incidentGroupId", "cameraId", "surveillanceObjectId", "departmentId") VALUES ('e10e391c-e251-490b-aa71-b22a3d95bf3f', 'Unauthorized Access Detected', 'Graffiti was discovered on the north wall of the building.', '2025-01-10T05:32:14.284Z', 'Resolved', 'd6d5ec72-612e-4356-82f4-b639100c2954', '60e452b8-3999-4142-b9cf-0ddb98acbc8e', '7d2f9f34-7c0c-44c3-b3f3-6af4f4c9498c', '20aa92df-0c79-4451-8a0c-f2b2336971d9', 'bdf0dc3d-2e82-4328-a576-854a87dcb3dd', '98f7baf2-021d-4156-b711-1dbb9c8ccd66');

  `

  const sqls = splitSql(sql)

  for (const sql of sqls) {
    try {
      await prisma.$executeRawUnsafe(`${sql}`)
    } catch (error) {
      console.log(`Could not insert SQL: ${error.message}`)
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async error => {
    console.error(error)
    await prisma.$disconnect()
    process.exit(1)
  })
