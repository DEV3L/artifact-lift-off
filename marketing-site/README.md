# Artifact L!ft Off

Welcome to the Artifact L!ft Off repository. This project is designed to provide a simple, responsive site template to showcase projects and artifacts with ease. Build stunning sites quickly and effectively.

## Table of Contents

- [Artifact L!ft Off](#artifact-lft-off)
  - [Table of Contents](#table-of-contents)
  - [Project Overview](#project-overview)
  - [Features](#features)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Customization](#customization)
  - [Deployment](#deployment)
  - [Contributing](#contributing)
  - [License](#license)

## Project Overview

Artifact L!ft Off is a responsive site template designed to showcase projects and artifacts with ease. Whether you're launching a product, creating a personal portfolio, or showcasing a collection, Artifact L!ft Off empowers you to get started fast.

## Features

- **Interactive Design**: Create visually engaging sites that highlight your content.
- **Quick Setup**: Get started with minimal effort using pre-built templates.
- **Customizable Layouts**: Tailor your site to your project’s needs.
- **Responsive Design**: Ensure your site looks great on any device.
- **Hero Banner**: Feature a prominent hero banner to capture attention with stunning visuals.
- **Carousel**: Showcase multiple images or content pieces in a dynamic carousel format.
- **Contact Form Integration**: Easily connect with your audience using a Formspree-powered contact form.

## Installation

To set up the project locally using Hatch, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/dev3l/artifact-lift-off.git
   cd artifact-lift-off
   ```

2. **Create and activate a virtual environment**:
   Use Hatch to create and activate a virtual environment:

   ```bash
   hatch env create
   hatch shell
   ```

3. **Navigate to the contents directory**:

   ```bash
   cd contents
   ```

## Usage

To preview the site locally, use the following command:

```bash
mkdocs serve
```

Access the site at `http://127.0.0.1:8000`.

## Customization

- **Theme Configuration**: Modify `mkdocs.yml` to change the theme settings, including colors and fonts. The theme is designed to be sleek and modern, with a focus on readability and aesthetics.
- **CSS Styling**: Add custom styles in `stylesheets/extra.css` to enhance the site's appearance, including the hero banner and carousel.

## Deployment

To deploy the site to GitHub Pages, run:

```bash
mkdocs gh-deploy
```

Ensure your repository is linked to a GitHub account and has GitHub Pages enabled.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
