# Contoso Task Pane Add-in

This task pane add-in for Outlook allows users to fetch and forward emails based on predefined categories.

## Features
- Fetch emails from Outlook based on categories (sales, marketing, support).
- Forward selected emails to designated recipients.

## Prerequisites
- Ensure you have a M365 Tenant with registered devices via the admin center by hardware hash provisioning. Refer: [Windows Autopilot](https://learn.microsoft.com/en-us/autopilot/add-devices) 
- M365 products installed (outlook).
- Register your app in Azure:
    - Create an azure account with the email same as that of M365 Tenant.
    - Ensure you have admin/global admin priviliges prior to that.
    - Setup API permission for Microsoft Graph API, in delegated permissions.
    - Run everything as administrator on pc

## Installation
1. Clone the repository.
2. Install dependencies using `npm install`.
3. Add the add-in to Outlook following [Microsoft's documentation](https://learn.microsoft.com/en-us/office/dev/add-ins/quickstarts/outlook-quickstart?tabs=yeomangenerator).

## Configuration
- Replace `config.accessToken` with a valid access token for Microsoft Graph API.

## Usage
1. Click "Fetch Mails" to retrieve emails based on the selected category.
2. Select emails from the list.
3. Choose a recipient from the dropdown.
4. Click "Forward Emails" to send selected emails to the chosen recipient.

## Screenshots
![Screenshot](./screenshots/screenshot1.png)

## 

## FAQs
- **Q:** Can I customize the categories?
  - **A:** Yes, you can modify the category dropdown options in the HTML file.

