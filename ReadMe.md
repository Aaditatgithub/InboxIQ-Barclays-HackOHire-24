# Contoso Task Pane Add-in

This task pane add-in for Outlook allows users to fetch and forward emails based on predefined categories.

## Features
- Fetch emails from Outlook based on categories (sales, marketing, support).
- Forward selected emails to designated recipients.

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

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing
Contributions are welcome! Please follow our [contribution guidelines](CONTRIBUTING.md).

## Troubleshooting
- If you encounter CORS issues, ensure your add-in is properly configured with valid access tokens.
- For other issues, please open a [new GitHub issue](https://github.com/yourusername/yourrepository/issues).

## FAQs
- **Q:** Can I customize the categories?
  - **A:** Yes, you can modify the category dropdown options in the HTML file.

