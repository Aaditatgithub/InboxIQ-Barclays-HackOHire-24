/*
* Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
* See LICENSE in the project root for license information.
*/
/* global document, Office */


// Ik, this coding practice is kinda disturbing, but dealt with too many issues on CORS,
// accepting access token for a certain user, etc. given the time constraint had to do this/
// Focus was to get the basic app working
// global variables that can be accessed by all functions
var config = {
  accessToken: "eyJ0eXAiOiJKV1QiLCJub25jZSI6IlFvdGVCZzBENVJNMV93bFo5dVo4aHFnVFBnVUNiMFFEZk9aUXdIa2ZCU1kiLCJhbGciOiJSUzI1NiIsIng1dCI6InEtMjNmYWxldlpoaEQzaG05Q1Fia1A1TVF5VSIsImtpZCI6InEtMjNmYWxldlpoaEQzaG05Q1Fia1A1TVF5VSJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTAwMDAtYzAwMC0wMDAwMDAwMDAwMDAiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC8zMTVlMzJhNC1jMTAwLTQ1YTktODUxNS01YWU1M2Y4YjE2MTkvIiwiaWF0IjoxNzEyMjI5NTEyLCJuYmYiOjE3MTIyMjk1MTIsImV4cCI6MTcxMjMxNjIxMiwiYWNjdCI6MCwiYWNyIjoiMSIsImFpbyI6IkFWUUFxLzhXQUFBQStCd3pDbnlRckNvSlRseXJIY1UvYm1QQ2pBL1YwV25LNWhTdGhpcjZTTU9CK2NPYnE5UzNCeUQxd2s1QkkzMnRpdDBDTzBibTZqaElNSlZrcHZjV1lSUkdtc0ttRTNHMHhHWWJpSUYrbFNBPSIsImFtciI6WyJwd2QiLCJtZmEiXSwiYXBwX2Rpc3BsYXluYW1lIjoiR3JhcGggRXhwbG9yZXIiLCJhcHBpZCI6ImRlOGJjOGI1LWQ5ZjktNDhiMS1hOGFkLWI3NDhkYTcyNTA2NCIsImFwcGlkYWNyIjoiMCIsImZhbWlseV9uYW1lIjoiUEFUSUwiLCJnaXZlbl9uYW1lIjoiQUFESVRZQSIsImlkdHlwIjoidXNlciIsImlwYWRkciI6IjExNi43NC4yMTEuMTMyIiwibmFtZSI6IkFBRElUWUEgUEFUSUwiLCJvaWQiOiJiMDQ4YmM0My01YjQ2LTRlY2EtODE5NC1lOTQ1MDFjY2FjMGQiLCJwbGF0ZiI6IjMiLCJwdWlkIjoiMTAwMzIwMDM2OUE2MjBGNyIsInJoIjoiMC5BU3NBcERKZU1RREJxVVdGRlZybFA0c1dHUU1BQUFBQUFBQUF3QUFBQUFBQUFBRENBS1kuIiwic2NwIjoiTWFpbC5SZWFkIE1haWwuUmVhZEJhc2ljIE1haWwuUmVhZFdyaXRlIG9wZW5pZCBwcm9maWxlIFVzZXIuUmVhZCBlbWFpbCIsInNpZ25pbl9zdGF0ZSI6WyJrbXNpIl0sInN1YiI6IkN6VWZkTThhWFpyd2RVa3ZENVM4YURkN2w4N3RMS0Z3STVPYlR3dnhaTDgiLCJ0ZW5hbnRfcmVnaW9uX3Njb3BlIjoiQVMiLCJ0aWQiOiIzMTVlMzJhNC1jMTAwLTQ1YTktODUxNS01YWU1M2Y4YjE2MTkiLCJ1bmlxdWVfbmFtZSI6IkFBRElUWUFQQVRJTEBoYWNrb2hpcmUub25taWNyb3NvZnQuY29tIiwidXBuIjoiQUFESVRZQVBBVElMQGhhY2tvaGlyZS5vbm1pY3Jvc29mdC5jb20iLCJ1dGkiOiJlRTh3ZVZORmRFcWthbVVQYUwxWkFBIiwidmVyIjoiMS4wIiwid2lkcyI6WyI2MmU5MDM5NC02OWY1LTQyMzctOTE5MC0wMTIxNzcxNDVlMTAiLCJiNzlmYmY0ZC0zZWY5LTQ2ODktODE0My03NmIxOTRlODU1MDkiXSwieG1zX2NjIjpbIkNQMSJdLCJ4bXNfc3NtIjoiMSIsInhtc19zdCI6eyJzdWIiOiJQeS1EOWRQMlpsOWlpMVVhUGRHWjB5TV84V0xzWGZPUzlQVU1vZHJPN0swIn0sInhtc190Y2R0IjoxNzExNzAyNTE3fQ.gtraCQr1-nFhEnYNSkebl39zhmyLHSQM2hYLWRTmCficDHJtyODh93OB2KKImwkAAUBkhf2OCCMMPLjOAfSSbforh0I8MQQqlyOhxdFsAziKY_DYkU8STMuSpraPz_OZPvsPq4NQ25b3U32eI8WCp3eB3JIWjJ_n557odlelp1RkakMiYJG_PxWVuwFayfOMs4-gepw3YKEGdg1Rn9xgtm1O-QPdGsE4J8yfXgsT4ah-GeZn4MjcK8rxnKwycv2o5glQn_Rgo1jAvnmo5XJQHBw9TW-MMLIBlg1KL0jZue7tZv5jLy_B-UpsSqgIw8QxwpY3vSTyiowpeQ0Haa0_qg"
};

const emails = [];

Office.onReady((info) => {
  if (info.host === Office.HostType.Outlook) {
    // document.getElementById("sideload-msg").style.display = "none";
    // document.getElementById("app-body").style.display = "flex";
    // document.getElementById("email-container").onclick = showMessage;

    //  document.getElementById('getAccessToken-button').addEventListener('click', getAccessToken);
    document.getElementById('getMails-button').addEventListener('click', getMessages);
    document.getElementById('forwardEmails-button').addEventListener('click', forwardEmails);
  }
});

//----------------------------------------------------------------------------
// Function to log messages
function logMessage(message) {
  var emailContainer = document.getElementById('email-container');
  emailContainer.innerText = message;
}

// Function to hide message dialog
function hideMessage() {
  var messageDialog = document.getElementById('messageDialog');
  messageDialog.style.display = 'none';
}

async function getMessages() {
  // Define the endpoint to fetch emails
  const baseEndpoint = 'https://graph.microsoft.com/v1.0/me/messages?$select=id,subject,sender';

  // Get the selected value from the dropdown
  const selectedCategory = document.getElementById('selectEmail').value;

  // Construct the endpoint dynamically based on the selected category
  const endpoint = selectedCategory ? `${baseEndpoint}&$filter=categories/any(c:c eq '${selectedCategory}')` : baseEndpoint; // Fix the typo: closing quote for '${selectedCategory}'

  // Define the access token
  const accessToken = config.accessToken;

  // Define headers with the access token
  const headers = {
    'Authorization': `Bearer ${accessToken}`
  };

  try {
    // Make a GET request to fetch emails
    const response = await fetch(endpoint, {
      method: 'GET',
      headers: headers
    });

    // Check if the response is successful
    if (!response.ok) {
      throw new Error(`Failed to fetch emails: ${response.statusText}`);
    }

    // Extract the response body as JSON
    const responseBody = await response.json();
    

    // Iterate over each email object and extract required information
    responseBody.value.forEach(email => {
      const emailObj = {
        id: email.id,
        subject: email.subject,
        sender: email.sender.emailAddress.name
      };

      // Push the email object to the emails array
      emails.push(emailObj);
    });

    // Render the emails in the task pane
    renderEmails(emails);
  } catch (error) {
    console.error('Error fetching emails:', error.message);
  }
}


function renderEmails(emails) {
  // Get the task pane container element
  var taskPaneContainer = document.getElementById('task-pane-container');

  // Clear previous content in the task pane container
  taskPaneContainer.innerHTML = '';

  // Iterate over each email object and render a custom flexbox for each email
  emails.forEach(email => {
    // Create a new div element to hold the email details with flexbox layout
    var emailDiv = document.createElement('div');
    emailDiv.className = 'email';
    emailDiv.style.display = 'flex';
    emailDiv.style.alignItems = 'center';
    emailDiv.style.marginBottom = '5px'; // Reduced marginBottom for spacing
    emailDiv.style.height = '50px'; // Set the height to 50px (adjust as needed)

    // Create a div for the checkbox (left part, occupying 10% width)
    var checkboxDiv = document.createElement('div');
    checkboxDiv.style.width = '10%';
    checkboxDiv.style.height = '50px%'; // Increased height for the checkbox
    checkboxDiv.style.display = 'flex';
    checkboxDiv.style.justifyContent = 'center'; // Center the checkbox vertically

    // Create a checkbox element for the email
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = email.id; // Use the email ID as the checkbox ID

    // Append the checkbox to the checkbox div
    checkboxDiv.appendChild(checkbox);

    // Create a div for the email details (right part)
    var detailsDiv = document.createElement('div');
    detailsDiv.style.width = '90%';
    detailsDiv.style.paddingLeft = '10px'; // Add some left padding for spacing

    // Create a div for the sender
    var senderDiv = document.createElement('div');
    senderDiv.innerHTML = '<strong>' + email.sender + '</strong>'; // Bold sender name
    senderDiv.style.marginBottom = '2px'; // Reduced marginBottom for spacing
    senderDiv.style.overflow = 'hidden'; // Hide overflow content
    senderDiv.style.textOverflow = 'ellipsis'; // Show ... for overflow content
    senderDiv.style.whiteSpace = 'nowrap'; // Display sender name in single line

    // Calculate the available width for sender and subject based on task pane width
    var availableWidth = taskPaneContainer.offsetWidth * 0.9; // 90% of task pane width
    var subjectWidth = availableWidth * 0.3; // 30% of available width for subject

    // Create a temporary div to measure the width of the sender's content
    var tempDiv = document.createElement('div');
    tempDiv.innerHTML = senderDiv.innerHTML;
    tempDiv.style.position = 'absolute';
    tempDiv.style.visibility = 'hidden';
    document.body.appendChild(tempDiv);
    var senderWidth = tempDiv.offsetWidth; // Get the width of the sender's content

    // Truncate sender name if it exceeds the available width
    if (senderWidth > availableWidth * 0.7) {
      senderDiv.innerHTML = '<strong>' + truncateText(email.sender, (availableWidth * 0.7) - 10) + '</strong>'; // Adjusting for padding
    }

    // Truncate sender name if it exceeds the available width
    senderDiv.innerHTML = '<strong>' + truncateText(email.sender, senderWidth) + '</strong>';

    // Create a div for the subject
    var subjectDiv = document.createElement('div');
    subjectDiv.innerHTML = email.subject; // Display subject without truncation
    subjectDiv.style.overflow = 'hidden'; // Hide overflow content
    subjectDiv.style.textOverflow = 'ellipsis'; // Show ... for overflow content

    // Append sender and subject divs to the details div
    detailsDiv.appendChild(senderDiv);
    detailsDiv.appendChild(subjectDiv);

    // Append checkbox div and details div to the email div
    emailDiv.appendChild(checkboxDiv);
    emailDiv.appendChild(detailsDiv);

    // Append the email div to the task pane container
    taskPaneContainer.appendChild(emailDiv);
  });
}


// Function to truncate text if longer than a specified width
function truncateText(text, maxWidth) {
  var truncatedText = text;
  var ellipsis = '...';
  if (text.length > maxWidth) {
    truncatedText = text.slice(0, maxWidth - ellipsis.length) + ellipsis;
  }
  return truncatedText;
}


// Forwarding mails to respective departments
async function forwardEmails() {
  // Get the checkboxes for the selected emails
  const checkboxes = document.querySelectorAll('input[name="emailCheckbox"]:checked');
 
  // Check if any email is selected
  if (checkboxes.length === 0) {
     // Use Office.context.ui.messageParent to send a message to the parent window
     console.log({ message: 'Please select at least one email to forward.' });
     return;
  }
 
  // Get the selected recipient email address
  const recipientEmail = document.getElementById('recipients-dropdown').value;
 
  // Check if a recipient is selected
  if (!recipientEmail) {
     // Use console.log to send a message to the parent window
     console.log({ message: 'Please select a recipient email address.' });
     return;
  }
 
  // Define headers with the access token
  const headers = {
     'Authorization': `Bearer ${config.accessToken}`,
     'Content-Type': 'application/json'
  };
 
  try {
     // Iterate over each selected email and forward it
     await Promise.all(Array.from(checkboxes).map(async checkbox => {
       // Find the corresponding email object in the emails array
       const emailObj = emails.find(email => email.id === checkbox.value);
       if (!emailObj) {
         throw new Error(`Email not found for ID: ${checkbox.value}`);
       }
 
       const emailId = emailObj.id;
       const forwardEndpoint = `https://graph.microsoft.com/v1.0/me/messages/${emailId}/microsoft.graph.forward`;
 
       // Define the request body for forwarding
       const requestBody = JSON.stringify({
         "comment": "FYI",
         "toRecipients": [
           {
             "emailAddress": {
               "address": recipientEmail,
               "name": emailObj.sender // Use the sender name from the emails array
             }
           }
         ]
       });
 
       // Make a POST request to forward the email
       const forwardResponse = await fetch(forwardEndpoint, {
         method: 'POST',
         headers: headers,
         body: requestBody
       });
 
       // Check if the forwarding was successful
       if (!forwardResponse.ok) {
         throw new Error(`Failed to forward email: ${forwardResponse.statusText}`);
       }
     }));
 
     // Use Office.context.ui.messageParent to send a success message to the parent window
     console.log({ message: 'Emails forwarded successfully!' });
  } catch (error) {
     console.error('Error forwarding emails:', error.message);
     // Use Office.context.ui.messageParent to send an error message to the parent window
     console.log({ message: `Error forwarding emails: ${error.message}` });
  }
 }
 
 