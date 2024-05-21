# LabFab: 🔧 Facing lab hassles? Don't worry! 🌟 LabFab has got you covered! 🎓

LabFab is a comprehensive web application developed using the MERN stack and Firebase database, designed to address the challenges faced by students, faculty, and lab administrators in managing laboratory resources effectively. It serves as a one-stop solution, providing seamless access to information about available components, equipment, lab schedules, and complaint management.

## Key Features:

### Student Module:
- **Secure Authentication:** Students can sign up using their GR numbers, ensuring only registered students can access the platform.
- **Multiple Login Options:** Students can log in using Google authentication or by scanning their ID cards, eliminating the need for manual data entry.
- **Component Search:** A user-friendly interface allows students to search for components based on various filters such as name, lab number, and department.
- **Request Issuance:** Students can request the issuance of components, with suggestions provided for easy selection.
- **Real-time Lab Availability:** Students can view the real-time capacity and occupancy of labs across the campus.
- **Lab Exploration:** Detailed information about different labs, including the subjects taught and experiments conducted, enhances students' understanding.
- **Complaint Management:** Students can register complaints regarding malfunctioning components or computers, streamlining issue resolution.
- **Personalized Dashboard:** A dedicated section displays students' previous requests and complaints for easy tracking.
- **Effortless Logout:** A simple logout option ensures secure session management.

### Admin Module:
- **Super Admin Access:** The super admin provides login credentials to lab in-charges, facilitating centralized management.
- **Request Review:** Lab faculty can review student requests for component issuance, with options to accept or reject them.
- **Lab Entry Management:** Admins can monitor student entries and exits from labs in real-time, ensuring efficient resource utilization.
- **Complaint Review:** Admins can review and manage student complaints, marking them as resolved when appropriate.
- **Custom Lab Logins:** Each lab has a dedicated login for the lab in-charge, enabling personalized oversight of lab activities.

### Lab Login:
- **QR Code Entry:** Students can scan QR codes with their ID cards to register lab entries, providing accurate attendance tracking.
- **Dynamic Capacity Management:** Real-time updates on lab occupancy enable administrators to manage capacity effectively.

## Installation and Usage:
1. Clone the repository from GitHub.
2. Install dependencies using `npm install`.
3. Configure Firebase database credentials.
4. Run the server using `npm start`.
5. Access the application through the provided URL.

## Technologies Used:
- **Frontend:** React.js, HTML5, CSS3, Bootstrap
- **Backend:** Node.js, Express.js
- **Database:** Firebase, MongoDB
- **QR Code Integration:** React QR Code
- **Tools:** VS Code Editor, MongoDB Compass, ThunderClient for testing APIs, Postman, GitHub

## Future Enhancements:
- **Real-Time Notifications:** Implement real-time notifications to inform users about component issue requests and filed complaints. This will enhance communication and prompt action on pending requests.
- **Enhanced Component Issuing Process:** Modify the component issuing process to work in three stages: accepted, issued, and rejected. This will provide more clarity and transparency in the handling of component requests.
- **Predictive Maintenance:** Implement predictive maintenance for equipment to minimize downtime.
- **Feedback System:** Add a feedback system for students to provide suggestions for improvement.

## Glimpse Of Website (Student Side)
![Student Dashboard](https://github.com/dpmehta/LabFab/assets/104881208/542f4eab-bb3a-42f0-94cc-32e49e8514e8)
![Component Search](https://github.com/dpmehta/LabFab/assets/104881208/28dd09a2-301e-4f72-b376-a6a1962e9298)
![Component Request](https://github.com/dpmehta/LabFab/assets/104881208/36e64b30-6466-4d42-9431-deb399f90fef)
![Lab Availability](https://github.com/dpmehta/LabFab/assets/104881208/be5183a1-d7f9-4740-88d8-22a079c139c3)
![Complaint Management](https://github.com/dpmehta/LabFab/assets/104881208/97890d20-f314-4fcc-a237-20be9648fa25)

## Glimpse Of Website (Admin Side)
![Admin Dashboard](https://github.com/dpmehta/LabFab/assets/104881208/d3560674-d313-4191-be5e-26d3e79d91ac)
![Request Review](https://github.com/dpmehta/LabFab/assets/104881208/eb8a49fc-f8c6-4952-ab0e-53d7d5de30ea)
![Lab Entry Management](https://github.com/dpmehta/LabFab/assets/104881208/31e97b15-7a6e-496c-a878-7112d1950094)
![Complaint Review](https://github.com/dpmehta/LabFab/assets/104881208/f2aa5988-def1-4334-8a25-d46f30a6a505)
![Lab Specific Login](https://github.com/dpmehta/LabFab/assets/104881208/7e3eec3a-7acd-4915-8df8-7035397bb69f)


