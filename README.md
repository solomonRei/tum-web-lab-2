# Find Discounts Instantly - Landing Page

Find Discounts Instantly is a modern, responsive landing page that helps users find grocery discounts using AI. It provides a seamless experience for comparing prices, optimizing shopping routes, and saving money effortlessly.

## Features:
- AI-powered discount search
- Save up to 40% on groceries
- Navigation to different sections of the page
- Simple, clear call-to-action
- Sections explaining the platform's benefits and how it works
- Social proof/testimonials (coming soon)

## Live Demo:
[Live Demo](https://solomonRei.github.io/tum-web-lab-2/)

## 🌟 Screenshots

### Responsive website & mobile only elements 
![Responsive website](res/responsive.png)

### Mascot 
![Mascot](res/mascot.png)

### Hero Section
![Hero Section](res/hero.png)

### How It Works
![How It Works](res/how-it-works.png)

### Why It Matters
![Why It Matters](res/why-it-matters.png)

### Call to Action (CTA)
![CTA Section](res/cta.png)

## Proof of Concept: Tailwind CSS vs Bootstrap

This project serves as a proof of concept comparing Tailwind CSS with Bootstrap for building modern, responsive web interfaces.

### Why Tailwind CSS?

Tailwind CSS provides a utility-first approach that offers several advantages over Bootstrap:

1. **More Customizable**: Tailwind makes it easier to create a unique design without fighting against opinionated styles.
2. **Smaller Bundle Size**: Only the utilities you use are included in the final CSS.
3. **No Predefined Components**: Build your own components without the need to override existing styles.
4. **Responsive Design**: Built-in responsive modifiers make it simple to create mobile-first designs.

### Code Examples

#### Buttons

**Tailwind CSS:**
```html
<a href="#cta" class="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:-translate-y-1 transition-transform duration-300">
    Start Saving Today
</a>
```

**Bootstrap:**
```html
<a href="#cta" class="btn btn-light btn-lg fw-bold px-4 py-3 shadow-sm">
    Start Saving Today
</a>
```

#### Cards

**Tailwind CSS:**
```html
<div class="bg-gray-50 rounded-xl shadow-sm hover:-translate-y-2 transition-transform duration-300 overflow-hidden">
    <div class="p-6 text-center">
        <div class="flex justify-center items-center mb-5">
            <div class="bg-primary-50 rounded-full p-3">
                <i class="fa-solid fa-cart-shopping text-primary-600 text-xl"></i>
            </div>
        </div>
        <h3 class="text-lg font-bold mb-2">Create Your Shopping List</h3>
        <p class="text-gray-600 text-sm">Type in your grocery needs or upload your usual shopping list.</p>
    </div>
</div>
```

**Bootstrap:**
```html
<div class="card h-100 border-0 bg-white shadow-sm hover-lift">
    <div class="card-body text-center p-4">
        <div class="d-flex justify-content-center align-items-center mb-4">
            <div class="bg-primary bg-opacity-10 rounded-circle p-3">
                <i class="fa-solid fa-cart-shopping text-primary fs-3"></i>
            </div>
        </div>
        <h3 class="card-title h5 fw-bold">Create Your Shopping List</h3>
        <p class="card-text text-muted">Type in your grocery needs or upload your usual shopping list.</p>
    </div>
</div>
```

### Key Differences

1. **Class Naming**: 
   - Tailwind uses atomic utility classes (`px-8`, `py-4`, `rounded-lg`)
   - Bootstrap uses semantic classes (`btn`, `btn-light`, `card`)

2. **Customization**:
   - Tailwind allows for precise styling directly in HTML
   - Bootstrap requires overriding predefined styles in CSS

3. **Responsive Design**:
   - Tailwind uses prefixes (`md:grid-cols-2`)
   - Bootstrap uses grid classes (`col-md-6`)

4. **Animation**:
   - Tailwind makes it easy to add transitions and transforms directly
   - Bootstrap often requires additional custom CSS

### Project Structure

- `index.html` - Main landing page
- `src/input.css` - Tailwind directives and custom styles
- `dist/output.css` - Compiled CSS
- `tailwind.config.js` - Tailwind configuration
- `images/` - Project images

### Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Run development server: `npm run dev`
4. Build for production: `npm run build`

### Conclusion

While both frameworks have their strengths, Tailwind CSS offers more flexibility and control for custom designs. Bootstrap may be better for rapid prototyping with consistent, predefined components. This POC demonstrates how Tailwind can be used to create a modern, responsive landing page with custom styling.
