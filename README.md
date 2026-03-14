# EduNova (EdTech Platform)

EduNova is a MERN-based EdTech platform (derived from the StudyNotion project structure) that includes a Node/Express backend for authentication, course management, media uploads, and payments.

## Repository Structure

```text
.
├── server/        # Node.js + Express backend
└── README.md
```

## Tech Stack

### Backend (`server/`)
- **Runtime:** Node.js
- **Framework:** Express
- **Database:** MongoDB (via Mongoose)
- **Auth:** JWT, bcrypt/bcryptjs
- **Uploads:** express-fileupload, Cloudinary
- **Email:** Nodemailer
- **Payments:** Razorpay

## Getting Started (Local Development)

### Prerequisites
- Node.js (LTS recommended)
- MongoDB connection string (local or Atlas)

### 1) Clone

```bash
git clone https://github.com/VishalPandey2103/EduNova_EdTech_Platform.git
cd EduNova_EdTech_Platform
```

### 2) Backend Setup

```bash
cd server
npm install
```

### 3) Environment Variables

Create `server/.env` and add the required values.

> Note: exact variable names depend on your `server/index.js` and config files.

Common variables you will typically need:

```bash
PORT=4000
MONGODB_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=...
CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...
RAZORPAY_KEY_ID=...
RAZORPAY_KEY_SECRET=...
MAIL_HOST=...
MAIL_USER=...
MAIL_PASS=...
```

### 4) Run the Backend

```bash
# dev (with nodemon)
npm run dev

# production
npm start
```

## Scripts

From `server/`:
- `npm run dev` — start backend with nodemon
- `npm start` — start backend with node

## Contributing

1. Fork the repo
2. Create your feature branch: `git checkout -b feature/my-change`
3. Commit your changes: `git commit -m "Describe your change"`
4. Push to the branch: `git push origin feature/my-change`
5. Open a Pull Request

## License

No license file is currently included. If you want this to be open-source, consider adding a `LICENSE` (e.g., MIT).