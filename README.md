# Pawsitive-Studying /ᐠ - ˕ -マ Ⳋ

## Pitch

This is the **_purrfect_** way to make sure you are **_pawsitively productive_** while studying so you can **_cativate_** your way to success

Study Buddy is a companion app that allows you to focus on studying when you're under a lot of stress or if you have trouble focusing. It's designed to enhance your focus and productivity which will help you study for classes.

## Product Vision

For students who need effective study habits, StudyBuddy is a study management app that provides personalized study and break timers, reminders for assignments, and focus-enhancing music. Unlike traditional timer apps or generic productivity tools, our product integrates all essential features into a single platform specifically designed for students, making it easier to manage their study time efficiently and enjoyably.

## Lofi Music Sources

<a>https://pixabay.com/music/search/lofi/</a>

## Prototype

https://www.figma.com/file/kfvBoWzSjIklABaIzf1QbJ/StudyBuddy?type=design&node-id=1%3A40&mode=dev&t=m9tIXMnVUoiSo60m-1

## Cloning the repo

Use your favourite Git GUI to clone the project down to to local machine

If you perfer to do this in the terminal run `git clone git@github.com:Brian-Kwong/Pawsitive-Studying-.git` in the directory you would like the project to be located in

## Running the Application

Run `npm install` which downloads all the neccessary node packages

This application's front end was built upon the React Native framework so we will need to install a couple more things...

If you're using a Mac you'll also need to install watchman `brew install watchman`[^1]

Afterwards we will need to allow Watchman to have permission on your computer:

1. Open the `Privacy & Security` section of system settings and then click `Full Disk Access`
2. Click the plus icon to add a new application
3. Press (SHIFT+COMMAND+G) then type in the following path `/opt/homebrew/Cellar/watchman/`
4. Open the folder with your version number for example : `2024.04.22.00_1` followed by entering the bin folder
5. Select `watchman`
6. Restart your terminal or run `exec zsh`

[^1]: This assumes you have homebrew (the package manager for macOS) installed. If you dont have it installed you can get it [here](https://brew.sh/)

Additionally we will need to get a ExpoGo-- an app that allows us to wirelessly transmit our web application to our mobile device.

[iOS📱](https://apps.apple.com/us/app/expo-go/id982107779)
[Andriod ☎️](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en_US&gl=US&pli=1)

Then to start the application navigate to `./Application/Pawsitive-Studying` & run `npx expo start`[^2]

[^2]: **_IMPORTANT_** If you are using Eduroam or any public network, run ` npx expo start --tunnel`. This creates a private tunnel between your computer and device to bypass any firewall restrictions

Make sure your mobile phone and computer are connected on the same LAN, then scan the QR code.

Accept any permission prompts that may arise from either the computer or device.

If all goes well it should open up in ExpoGo and load your app[^3].
[^3]: On first boot it may take a bit to download the code onto the device

## Database Schema :
For this project, we went with a document-based database system, in the form of MongoDB, as there are few relations, and the relations we have are either compositions or can easily be linked together using ObjectIDs.  Using a relational-based DB like MySQL would require many excess tables to maintain the schema in 3NF causing an unnecessary number of joins, anytime a user uses the app.
With that in mind, we built the following schema for our application :

![Databse ERD](./assets/ERD.png "Database ERD")
