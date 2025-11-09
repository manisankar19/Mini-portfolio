# Mini Portfolio

A responsive, modern portfolio website featuring a hero section, projects showcase, and contact form. Built with pure HTML, CSS, and JavaScript.

## Features

- 🎨 **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- 📱 **Mobile-Friendly Navigation**: Hamburger menu for seamless mobile navigation
- 💼 **Projects Section**: Showcase your projects with attractive project cards
- 📧 **Contact Form**: Functional contact form with client-side validation
- ✨ **Smooth Animations**: Beautiful transitions and hover effects
- 🎯 **Modern UI**: Clean and professional design with gradient accents

## Project Structure

```
mini-portfolio/
│
├── index.html      # Main HTML file
├── styles.css      # All CSS styles
├── script.js       # JavaScript for navigation and form validation
└── README.md       # Project documentation
```

## Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with Flexbox, Grid, and animations
- **JavaScript**: Interactive navigation and form validation
- **Responsive Design**: Mobile-first approach with media queries

## How to Run Locally

### Method 1: Using a Local Web Server (Recommended)

#### Option A: Using Python (if installed)

**Python 3:**
```bash
# Navigate to the project directory
cd mini-portfolio

# Start a local server
python -m http.server 8000
```

**Python 2:**
```bash
python -m SimpleHTTPServer 8000
```

Then open your browser and navigate to: `http://localhost:8000`

#### Option B: Using Node.js (if installed)

**Using http-server:**
```bash
# Install http-server globally (if not already installed)
npm install -g http-server

# Navigate to the project directory
cd mini-portfolio

# Start the server
http-server -p 8000
```

Then open your browser and navigate to: `http://localhost:8000`

**Using npx (no installation needed):**
```bash
# Navigate to the project directory
cd mini-portfolio

# Start the server
npx http-server -p 8000
```

#### Option C: Using PHP (if installed)

```bash
# Navigate to the project directory
cd mini-portfolio

# Start the server
php -S localhost:8000
```

Then open your browser and navigate to: `http://localhost:8000`

### Method 2: Using VS Code Live Server Extension

1. Install the **Live Server** extension in VS Code
2. Right-click on `index.html` in the file explorer
3. Select **"Open with Live Server"**
4. The website will automatically open in your default browser

### Method 3: Direct File Opening (Not Recommended)

1. Locate the `index.html` file in your file explorer
2. Double-click to open it in your default browser
3. **Note**: Some features may not work correctly when opening files directly due to browser security restrictions (CORS policies)

## Publishing to GitHub Pages

Follow these step-by-step instructions to publish your static website to GitHub Pages:

### Prerequisites

- A GitHub account
- Git installed on your computer
- Your project files ready

### Step 1: Create a GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in to your account
2. Click the **"+"** icon in the top-right corner and select **"New repository"**
3. Enter a repository name (e.g., `mini-portfolio`)
4. Choose **Public** or **Private** (Public is required for free GitHub Pages)
5. **Do NOT** initialize with README, .gitignore, or license (since you already have files)
6. Click **"Create repository"**

### Step 2: Initialize Git in Your Project (if not already done)

1. Open your terminal or command prompt
2. Navigate to your project directory:
   ```bash
   cd mini-portfolio
   ```
3. Initialize Git (if not already initialized):
   ```bash
   git init
   ```

### Step 3: Add Your Files to Git

1. Add all files to Git:
   ```bash
   git add .
   ```
2. Commit your files:
   ```bash
   git commit -m "Initial commit: Mini Portfolio website"
   ```

### Step 4: Connect to GitHub Repository

1. Add the remote repository (replace `YOUR_USERNAME` with your GitHub username):
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/mini-portfolio.git
   ```
2. Verify the remote was added:
   ```bash
   git remote -v
   ```

### Step 5: Push Your Code to GitHub

1. Push your code to the main branch:
   ```bash
   git branch -M main
   git push -u origin main
   ```
2. Enter your GitHub username and password/token when prompted

### Step 6: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on the **"Settings"** tab (located in the repository navigation bar)
3. Scroll down to the **"Pages"** section in the left sidebar
4. Under **"Source"**, select **"Deploy from a branch"**
5. Select the branch: **"main"** (or "master" if that's your default branch)
6. Select the folder: **"/ (root)"**
7. Click **"Save"**

### Step 7: Access Your Live Website

1. GitHub will provide you with a URL in the format:
   ```
   https://YOUR_USERNAME.github.io/mini-portfolio/
   ```
2. Wait a few minutes for GitHub Pages to build and deploy your site
3. Visit the URL to see your live website!
4. The site will automatically update whenever you push changes to the main branch

### Step 8: Update Your Website (Making Changes)

Whenever you make changes to your website:

1. Make your changes to the files
2. Stage your changes:
   ```bash
   git add .
   ```
3. Commit your changes:
   ```bash
   git commit -m "Description of your changes"
   ```
4. Push to GitHub:
   ```bash
   git push
   ```
5. Your changes will be live on GitHub Pages within a few minutes

## Customization

### Updating Project Information

Edit the project cards in `index.html` (lines 40-49) to add or modify your projects.

### Changing Colors and Styling

Modify the CSS variables and color values in `styles.css` to match your preferred color scheme.

### Updating Contact Form

The contact form in `index.html` includes client-side validation. To connect it to a backend service, you'll need to modify the form submission handler in `script.js`.

## Troubleshooting

### GitHub Pages Not Updating

- Wait 5-10 minutes after pushing changes
- Clear your browser cache
- Check the repository's "Actions" tab for any build errors
- Verify that the correct branch and folder are selected in Settings > Pages

### Local Server Issues

- Ensure no other application is using port 8000
- Try a different port number (e.g., 8080, 3000)
- Check that all file paths are correct and files exist

### Form Validation Not Working

- Ensure `script.js` is properly linked in `index.html`
- Check the browser console for JavaScript errors
- Verify that all required fields have the `required` attribute

## License

This project is open source and available under the [MIT License](https://opensource.org/licenses/MIT).

## Contributing

Feel free to fork this project and make it your own! If you'd like to contribute improvements, please create a pull request.

## Contact

For questions or suggestions, please open an issue in the repository or contact the project maintainer.

---

**Happy Coding! 🚀**

