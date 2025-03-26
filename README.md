# UYIR-MEI

## Objective
**UYIR-MEI** is a platform designed to connect needy individuals (beneficiaries) with NGOs, donors, and volunteers. The platform focuses on donation-oriented features, helping opportunities, and transparency while ensuring ease of use for all users.

---

## Features

### 1. Unified Registration System
- A single registration process categorizes users into roles:
  - **Beneficiary**: Registers using Aadhaar/UDID or manual form.
  - **NGO**: Provides organization details and verification documents.
  - **Donor**: Registers with email and payment preferences.
  - **Volunteer**: Lists skills and availability.

### 2. Unified Dashboard
- A single dashboard dynamically adapts based on user roles:
  - Beneficiaries: Submit requests for food/shelter/aid and track status.
  - NGOs: Add services offered (e.g., free meals) and manage beneficiary requests.
  - Donors: Browse needs categorized by type (e.g., education), donate funds securely, and view donation history.
  - Volunteers: View tasks based on skills/location and track hours contributed.

### 3. Donation Workflow
- Simplified donation process:
  - Donors browse beneficiary needs displayed as cards (e.g., ₹5000 needed for school supplies).
  - Select a need and proceed to payment via Razorpay/Paytm gateway.
  - Receive confirmation via email/SMS along with impact reports showing how contributions were used.

### 4. Helping-Oriented Features
- Direct aid options:
  - Beneficiaries list specific needs (e.g., blankets or medical devices).
  - Donors fulfill these needs directly by purchasing items or contributing funds.
- Volunteering opportunities:
  - Volunteers sign up for tasks/events directly through the app.
- Progress tracking:
  - Display funding goals for specific causes (e.g., ₹50,000 raised out of ₹100,000).

### 5. Transparency Features
- Donation history:
  - Donors can review past contributions along with receipts and impact reports.
- NGO verification system:
  - Ensure NGOs are vetted before listing services on the platform.

### 6. Impact Stories Section
- Showcase success stories with images/videos to inspire further engagement.

---

## Technical Details

### Frontend
- **Framework**: React.js
- **Styling**: Material UI or Tailwind CSS

### Backend
- **Framework**: Node.js with Express.js
- **Database**: Firebase Firestore

### Google Technologies
- Firebase Authentication for user login/signup.
- Firebase Firestore Database for real-time data storage.
- Firebase Cloud Messaging for notifications.
- Google Maps API for location-based features.

### Payment Gateway Integration
- Razorpay/Paytm APIs for secure donations.

---

## Deployment Plan

1. Use Firebase Hosting to deploy the frontend quickly.
2. Deploy backend services using Firebase Cloud Functions.

---

## How to Run Locally

### Prerequisites
1. Install Node.js and npm on your machine.
2. Install Git if not already installed.

### Steps to Run Locally:
1. Clone this repository:
