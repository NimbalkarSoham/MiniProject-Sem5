<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <ul>
         <li><a href="#about-the-project">About The Project</a></li>
        <li><a href="#screeshots">Screenshots</a></li>
      </ul>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

Welcome to **Agrifarm**, an innovative web portal designed to revolutionize how farmers access farming tools and machinery. Whether it's renting or purchasing equipment, Agrifarm serves as a one-stop marketplace that simplifies the process, making essential farming resources more accessible and affordable for all farmers.

### Why Agrifarm Matters:
- **Streamlined Access**: Agrifarm provides an intuitive platform for farmers to easily find, compare, and acquire the right tools for their agricultural needs.
- **Cost-Effective Solutions**: By offering both rental and purchasing options, the platform empowers small and large-scale farmers alike to manage costs effectively.
- **Data-Driven Insights**: Integrated with machine learning capabilities, Agrifarm enhances decision-making with tools like crop disease prediction, equipment price estimation, and tool recommendations.

With a user-friendly interface and powerful features, Agrifarm is built to foster collaboration and promote sustainable farming practices, driving efficiency and productivity in agriculture.

Contributions and suggestions are welcome to further enhance the platform's functionality and usability!

---

## Technical Overview

Agrifarm is built with a modern, scalable architecture, designed to provide farmers with seamless access to essential tools and equipment. The platform integrates several technologies and features aimed at enhancing user experience and data-driven decision-making.

### 1. Front-End
   - **Framework**: The front-end is developed using **NEXT.js**, offering a dynamic, responsive interface for users to search, browse, and rent equipment.
   - **Design**: The UI/UX is designed to be intuitive, allowing farmers with varying levels of technical expertise to navigate easily. It's mobile-friendly, ensuring access on various devices.

### 2. Back-End
   - **Database**: **MongoDB** is used as the database to store user profiles, equipment listings, transaction history, and machine learning model data. Its flexibility helps manage varying types of agricultural equipment records.

### 3. Machine Learning Models
   - **Crop Disease Prediction**: A machine learning model (Convolutional Neural Network, such as **VGG16**) is integrated for crop disease prediction. Farmers can upload images of crops, and the model analyzes them to predict potential diseases with high accuracy.
   - **Price Prediction**: A **Regression Model** (e.g., **XGBoost**) is used for predicting rental prices based on historical usage patterns, equipment type, and seasonal trends.
   - **Tool Recommendation**: A **Decision Tree Algorithm** is implemented for recommending tools and equipment based on user inputs like farm size, budget, and intended agricultural activity.


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SCREENSHOTS OF THE PROJECT -->
## Screenshots of our project
<br></br>
![image](https://github.com/user-attachments/assets/5587c3ff-4c24-4f3e-9def-b2afd9415ac9)
![image](https://github.com/user-attachments/assets/3f812cc0-220b-4208-bfa6-67e5e30de77b)
![image](https://github.com/user-attachments/assets/d2e7fee6-1c10-4657-8c10-719d4920dccc)
![image](https://github.com/user-attachments/assets/21991e71-266a-4316-8cdd-2084fd8524c4)
![image](https://github.com/user-attachments/assets/f7c355fe-2966-40a3-932a-c60e711818af)
![image](https://github.com/user-attachments/assets/9e5855c3-517a-4a5f-9bb0-9d8e38311251)
![image](https://github.com/user-attachments/assets/e2078fb9-bcc8-4f25-8af0-33c2ddb025b2)
![image](https://github.com/user-attachments/assets/a3fcc49c-e4aa-4621-9790-eafbc45c1481)
![image](https://github.com/user-attachments/assets/c66f7a4e-eb34-400a-8e52-83d3e2d53a49)
![image](https://github.com/user-attachments/assets/689c923d-2102-4a9d-9b90-aab0b0d1a9a7)
![image](https://github.com/user-attachments/assets/fc8febe2-1507-437a-a5c6-46f2932b2fd6)
![image](https://github.com/user-attachments/assets/ce0bc960-1b25-410c-b229-10faa9e553e8)


### Built With

The project is built using the following technologies:
* [![Next][Next.js]][Next-url]
* [![React][React.js]][React-url]
* [![MongoDB][MongoDB]][MongoDB-url]
* [![Bootstrap][Bootstrap.com]][Bootstrap-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

This section provides instructions on setting up the project locally.

### Prerequisites

Here's what you need to get started:
* npm
  
  ```sh
  npm install npm@latest -g
  ```

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Get a free API Key at NextAuth and Google-console-cloud
2. Clone the repo
   ```sh
   git clone https://github.com/NimbalkarSoham/MiniProject-Sem5.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in a `.env` file
   ```js
   GOOGLE_ID= [Your API Key]
   GOOGLE_CLIENT_SECRET= [Your API Key]
   MONGODB_URI= [Your API Key]

   NEXTAUTH_URL = http://localhost:3000/
   NEXTAUTH_URL_INTERNAL = http://localhost:3000/
   NEXTAUTH_SECRET = [Your API Key]

   CLOUDINARY_NAME = [Your API Key]
   CLOUDINARY_KEY = [Your API Key] 
   CLOUDINARY_SECRET = [Your API Key]

   NEXT_PUBLIC_WEATHER_KEY = [Your API Key]
   NEXT_PUBLIC_STRIPE_API_KEY = [Your API Key]
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Soham Nimbalkar - [LinkedIN](https://www.linkedin.com/in/soham-nimbalkar-58853a252/) - soham.nimbalkar08@gmail.com

Project Link: [https://github.com/NimbalkarSoham/MiniProject-Sem5](https://github.com/NimbalkarSoham/MiniProject-Sem5)

<p align="right">(<a href="#readme-top">back to top</a>)</p>





<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white
[Vue-url]: https://vuejs.org/
[MongoDB]: https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white
[MongoDB-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
