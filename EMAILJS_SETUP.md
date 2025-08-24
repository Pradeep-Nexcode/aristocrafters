# EmailJS Setup Instructions

This project uses EmailJS to send emails from the Student Registration and Teacher Application forms. Follow these steps to configure EmailJS:

## 1. Create EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Create Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID**

## 3. Create Email Templates

You need to create 2 templates:

### Student Registration Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Set Template ID as: `student_template`
4. Use these template variables in your email content:
   - `{{to_name}}` - Recipient name (Aristocrafters Team)
   - `{{from_name}}` - Student's full name
   - `{{from_email}}` - Student's email
   - `{{phone}}` - Student's phone number
   - `{{grade}}` - Student's grade
   - `{{subjects}}` - Selected subjects
   - `{{timing}}` - Preferred timing
   - `{{notes}}` - Additional notes
   - `{{reply_to}}` - Student's email for replies

### Teacher Application Template
1. Create another template with ID: `teacher_template`
2. Use these template variables:
   - `{{to_name}}` - Recipient name (Aristocrafters HR Team)
   - `{{from_name}}` - Teacher's full name
   - `{{from_email}}` - Teacher's email
   - `{{phone}}` - Teacher's phone number
   - `{{subjects}}` - Teaching subjects
   - `{{classes}}` - Class levels
   - `{{experience}}` - Years of experience
   - `{{mode}}` - Teaching mode preference
   - `{{resume_attached}}` - Resume attachment status
   - `{{reply_to}}` - Teacher's email for replies

## 4. Get Public Key

1. Go to "Account" in your EmailJS dashboard
2. Find your **Public Key** (User ID)
3. Copy this key

## 5. Update Configuration

Replace the placeholder values in both form files:

### In StudentRegistrationForm.js:
```javascript
const serviceId = 'YOUR_SERVICE_ID'; // Replace with your actual Service ID
const templateId = 'student_template'; // Keep as is
const publicKey = 'YOUR_PUBLIC_KEY'; // Replace with your actual Public Key
```

### In TeacherApplicationForm.js:
```javascript
const serviceId = 'YOUR_SERVICE_ID'; // Replace with your actual Service ID
const templateId = 'teacher_template'; // Keep as is
const publicKey = 'YOUR_PUBLIC_KEY'; // Replace with your actual Public Key
```

## 6. Test the Forms

1. Fill out the forms on your website
2. Check if emails are being sent successfully
3. Monitor the EmailJS dashboard for usage statistics

## Template Examples

### Student Registration Email Template:
```
Subject: New Student Registration - {{from_name}}

Dear {{to_name}},

A new student has registered for classes:

Student Details:
- Name: {{from_name}}
- Email: {{from_email}}
- Phone: {{phone}}
- Grade: {{grade}}
- Subjects: {{subjects}}
- Preferred Timing: {{timing}}
- Additional Notes: {{notes}}

Please contact the student at {{reply_to}} to proceed with enrollment.

Best regards,
Aristocrafters Registration System
```

### Teacher Application Email Template:
```
Subject: New Teacher Application - {{from_name}}

Dear {{to_name}},

A new teacher has submitted an application:

Teacher Details:
- Name: {{from_name}}
- Email: {{from_email}}
- Phone: {{phone}}
- Subjects: {{subjects}}
- Classes: {{classes}}
- Experience: {{experience}} years
- Teaching Mode: {{mode}}
- Resume: {{resume_attached}}

Please review the application and contact the applicant at {{reply_to}}.

Best regards,
Aristocrafters HR System
```

## Notes

- EmailJS free plan allows 200 emails per month
- Make sure to test thoroughly before going live
- Keep your Service ID and Public Key secure
- Monitor your email quota in the EmailJS dashboard