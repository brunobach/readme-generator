<h1 align="center">Welcome to <%= project_name %> 🚀</h1>
<h4 align="center"> 
	<%= project_subtitle %> 1.0 🚀 Done!
</h4>
<p align="center">	
	<% if (project_name) { -%>
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/<%= user_github %>/<%= project_name %>">
	<% } -%>
  <a href="https://linkedin.com/in/<%= user_linkedin %>">
    <img alt="Made by DanielObara" src="https://img.shields.io/badge/made%20by-<%= user_linkedin %>">
  </a>
  
  <a href="https://github.com/<%= user_github %>/<%= project_name %>/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/<%= user_github %>/<%= project_name %>">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
   <a href="https://github.com/<%= user_github %>/<%= project_name %>/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/<%= user_github %>/<%= project_name %>?style=social">
  </a>
</p>
<p align="center">

<p align="center">
  <a href="#-Description">Description</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-project">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-how-to-use">How to use</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-how-to-contribute">How to contribute</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">License</a>
</p>

## ✍ Description: What is my project about??

<% if (project_description) { -%>
> <%= project_description %>
<% } -%>

## 💻 Project Estructure

<% if (project_markdown) { -%>
> <%= project_markdown %>
<% } -%>

## 🛸 Technologies

This project was developed with the following technologies:

- [Node.js][nodejs]
- [TypeScript][typescript]
- [React][reactjs]
- [React Native][rn]
- [Expo][expo]

## 🧰 How To Use

To clone and run this application, you'll need [Git](https://git-scm.com), [Node.js][nodejs] + [Yarn][yarn] installed on your computer.

From your command line:

### 📥 Install cmd 
<% if (project_link ) { -%>

```bash
# Clone this repository
$ git clone <%= project_link  %>

# Go into the repository
$ cd <%= project_name  %>

# Install dependencies
$ yarn install

```

### 📲 Or scan QR code on device
<h1 align="center">
  <img alt="QRcode Git" title="QRcode Git" src="https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl=<%= project_link  %>" width="150px" />
</h1>

<% } -%>

## 🤔 How to contribute

-  Make a fork;
-  Create a branch with your feature: `git checkout -b my-feature`;
-  Commit changes: `git commit -m 'feat: My new feature'`;
-  Make a push to your branch: `git push origin my-feature`.

_After merging your receipt request to done, you can delete a branch from yours_

## 📝 License

This project is under the MIT license. See the [LICENSE](<%= project_link  %>/blob/master/LICENSE) for details.

Made with ♥ by Bruno Bach :wave: [Get in touch!](https://www.linkedin.com/in/bruno-bach/)

[nodejs]: https://nodejs.org/
[typescript]: https://www.typescriptlang.org/
[expo]: https://expo.io/
[reactjs]: https://reactjs.org
[rn]: https://facebook.github.io/react-native/
[yarn]: https://yarnpkg.com/
