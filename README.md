# coffee_shop_website
To download the Git files and set up the Coffee Shop website project in VS Code, follow these steps:

Downloading the Git Files:
Go to the GitHub repository for the Coffee Shop website project.
Click on the green "Code" button and select "Download ZIP".
Extract the downloaded ZIP file to a location on your computer.


Setting Up in VS Code:
Open Visual Studio Code (VS Code).
Click on "File" in the top menu and select "Open Folder".
Navigate to the extracted folder of the Coffee Shop website project and select it. Click "Open".
VS Code will open the project folder.


Installing Dependencies:
1.Open the terminal in VS Code by clicking on "Terminal" in the top menu and selecting "New Terminal".
2.In the terminal, navigate to the frontend folder of the project using the cd command.For example: 
cd frontend
3.Install frontend dependencies by running the following command:

npm install


4.After the frontend dependencies are installed, navigate to the backend folder of the project in the terminal using the cd command. For example:

cd ../backend

5.Install backend dependencies by running the following command:
npm install

Running the Frontend and Backend parallerlly:

1.With the terminal still open in the backend folder, start the backend server by running the following command: npm run dev

2.This will start the backend server on the specified port.

3.Open a new terminal in VS Code (if not already open) and navigate to the frontend folder of the project using the cd command.

4.Start the frontend development server by running the following command: npm run dev
This will start the frontend development server and open the Coffee Shop website in your default web browser.


Ensuring Backend Server is Running:
While using the website, make sure the backend server is running in the terminal where you started it.
If the backend server stops for any reason, you may need to restart it using npm run dev in the backend folder.
By following these steps, you should be able to download the Git files, set up the Coffee Shop website project in VS Code, install dependencies, run the frontend and backend, and ensure that the backend server is running while using the website.

