# Admin Dashboard UI

A full stack **role-based admin dashboard** built with **Next.js and MongoDB**. The project simulates a warehouse management system with different roles (Admin, Manager, Worker) and features like revenue tracking, user management, products, shipments, and settings.

## 🚀 Features

- **Role-Based Access Control (RBAC):** Admins, Managers, and Workers see different dashboards and permissions.
- **Dashboard Overview:** Revenue chart, total users, total products, and total shipments.
- **Products Management:** Add, edit, and view product details.
- **Shipments Tracking:** Manage and track shipments with approval workflow.
- **User Management:** Manage users by role.
- **Settings Page:**
  - General Settings (company name, currency, timezone)
  - Inventory Settings (low stock threshold, default categories)
  - Shipment Settings (approval workflow, default status, rejection reasons)

## 🛠️ Tech Stack

![Next.js](https://img.shields.io/badge/-Next.js-000?logo=next.js)  
![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=black)  
![Node.js](https://img.shields.io/badge/-MongoDB-339933?logo=mongodb&logoColor=white)  
![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?logo=typescript&logoColor=white)  
![TailwindCSS](https://img.shields.io/badge/-TailwindCSS-38B2AC?logo=tailwind-css&logoColor=white)  
![Lucide Icons](https://img.shields.io/badge/-Lucide_Icons-B23838?logo=lucide&logoColor=white)

## 📦 Getting Started

1. **Clone the repo:**

```bash
git clone https://github.com/yourusername/admin-dashboard-ui.git
cd admin-dashboard-ui
```

2. **Install dependencies:**

```bash
npm install
```

3. **Run the development server:**

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔑 Roles and Access

- **Admin:** Full access (dashboard, users, products, shipments, settings).
- **Manager:** Can approve/reject shipments, view inventory.
- **Worker:** Can view shipments and update statuses.

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you’d like to change.

## 📄 License

This project is open source under the **MIT License**.
