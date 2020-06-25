<h1 align="center">Welcome to <%= projectName %> 👋</h1>
<p align="center">
<img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
<img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
<a href="https://github.com/frinyvonnick/gitmoji-changelog">
<img src="https://img.shields.io/badge/changelog-gitmoji-brightgreen.svg" alt="gitmoji-changelog">
</a>
<a href="https://github.com/kefranabg/readme-md-generator/blob/master/LICENSE">
<img alt="License: MIT" src="https://img.shields.io/badge/license-MIT-yellow.svg" target="_blank" />
</a>

<% if (projectDescription) { -%>
> <%= projectDescription %>
<% } -%>

## Install

<% if (markdown) { -%>

```sh
<%= markdown %>
```
<% } -%>

## 🤝 Contributing

Contributions, issues and feature requests are welcome.<br />
Feel free to check [issues page](https://github.com/kefranabg/readme-md-generator/issues) if you want to contribute.<br />
[Check the contributing guide](./CONTRIBUTING.md).<br />

<% if (userName) { -%>
## Siga 👤 **<%= userName %>** nas redes sociais

- Twitter: [@<%= userName %>](https://twitter.com/FranckAbgrall)
- Github: [@<%= userName %>](https://github.com/kefranabg)

## Show your support

Please ⭐️ this repository if this project helped you!

<a href="https://www.patreon.com/FranckAbgrall">
  <img src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png" width="160">
</a>
<% } -%>