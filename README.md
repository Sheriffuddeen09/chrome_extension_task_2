# Chrome Extension Title Popup

This Chrome extension allows users to retrieve and display the title of the current tab in a popup window. 

## Features

- A simple user interface with a button.
- Retrieves the title of the currently active tab when the button is clicked.
- Displays the title in the popup.

## Installation

1. Clone the repository or download the ZIP file.
2. Unzip the file if necessary.
3. Open Chrome and navigate to `chrome://extensions/`.
4. Enable "Developer mode" by toggling the switch in the top right corner.
5. Click on "Load unpacked" and select the `chrome-extension-title-popup` directory.

## Usage

1. Click on the extension icon in the Chrome toolbar.
2. A popup will appear with a button labeled "Get Tab Title".
3. Click the button to retrieve the title of the current tab.
4. The title will be displayed in the popup.

## Code Overview

- **src/popup.js**: Contains the JavaScript code that handles the button click event, retrieves the current tab's title using the Chrome API, and updates the popup with the title.
- **src/popup.html**: Defines the HTML structure of the popup, including the button for retrieving the tab title.
- **manifest.json**: Configuration file for the Chrome extension, specifying permissions and scripts.

## Contributing

Feel free to submit issues or pull requests if you have suggestions or improvements for the extension.

## License

This project is licensed under the MIT License.