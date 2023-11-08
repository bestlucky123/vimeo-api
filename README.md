# JavaScript Modules and Web Storage

This project explores JavaScript modules and web storage. It consists of three tasks, each serving a specific purpose. Below, you will find an overview of the project and the functionality of each page:

## Task 1 - SimpleLightbox Library

### Project Files: `01-gallery.html`, `01-gallery.js`

**Description:**
In this task, the SimpleLightbox library is integrated into the project using npm. The project is structured into smaller subtasks as follows:

- **Library Integration**: The SimpleLightbox library is added as a project dependency using npm, eliminating the need for a CDN link from a [previous project](https://github.com/Valik3201/goit-js-hw-07).

- **JavaScript Refactoring**: The JavaScript code from a [previous project](https://github.com/Valik3201/goit-js-hw-07) assignment is refactored to consider that the library has been installed via npm. This involves using the import/export syntax for module usage.

- **CSS Styling**: To incorporate the library's CSS styles into the project, an additional import is required, in addition to the one mentioned in the documentation.

## Task 2 - Video Player

### Project Files: `02-video.html`, `02-video.js`

**Description:**
In this task, a Vimeo video player embedded in an iframe is the focus. The goal is to save the current video playback time in local storage and continue playback from that point when the page is reloaded.

- **Library Integration**: The Vimeo player library is added as a project dependency using npm.

- **Player Initialization**: The Vimeo player is initialized in the script file, following the guidance provided in the "pre-existing player" section of the library's documentation. This takes into account that the player has been added as an npm package, not via a CDN.

- **Time Tracking**: The script tracks the "timeupdate" event using the `on()` method, which is utilized to update the current playback time.

- **Local Storage**: The script saves the video playback time in local storage under the key "videoplayer-current-time." Upon page reload, the script uses the `setCurrentTime()` method to resume playback from the saved position.

- **Throttle Function**: The project includes the lodash.throttle library to ensure that the video playback time is updated in local storage no more frequently than once per second.

## Task 3 - Contact Form

### Project Files: `03-feedback.html`, `03-feedback.js`

**Description:**
This task involves a contact form in HTML. The script saves field values in local storage as users input data.

- **Form Input Tracking**: The script listens for the "input" event in the form and saves an object with "email" and "message" fields, storing the current values of the form fields. The key for this data in local storage is "feedback-form-state."

- **Page Reload Handling**: When the page is reloaded, the script checks the local storage for saved data. If data is found, it populates the form fields with these values; otherwise, the fields remain empty.

- **Form Submission**: Upon submitting the form, the script clears the local storage and the form fields. Additionally, it logs the object with "email" and "message" fields and their current values to the console.

- **Throttle Function**: To limit local storage updates to no more than once every 500 milliseconds, the project incorporates the lodash.throttle library.

By exploring this project, you can gain insights into the use of JavaScript modules, web storage, and how to integrate libraries via npm. Additionally, you'll understand how to enhance user experiences by saving and restoring data efficiently.


# Usage

To use this project, follow these steps:

1. **Clone the Repository:** First, clone this repository on your computer using the following command:

   ```bash
   git clone https://github.com/your-username/your-repo.git

2. **Install Dependencies:** Navigate to the project's root folder and install the required dependencies using the command:
stall Dependencies: Navigate to the project's root folder and install the required dependencies using the command:

   ```bash
    npm install

4. **Build the Project:** Execute the project build to prepare the resources:

   ```bash
    npm run build

6. **Run the Project:** You can now start the project using the command:

   ```bash
    npm start

## GitHub Actions:

This project utilizes GitHub Actions for automatic deployment to GitHub Pages with each push to the main branch. GitHub Actions settings can be found in the `.github/workflows/deploy.yml` file. This process automatically updates your deployed application on GitHub Pages link.
