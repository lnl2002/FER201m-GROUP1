import DefaultLayout from "../layouts/DefaultLayout";

import { Link } from "react-router-dom";
export default function Home() {
    return (
        <DefaultLayout>
            <div className="home">
      <header>
        <h1>Welcome to Bếp của Bố</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/recipes">Recipes</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>
      <section className="hero">
        <h2>Discover the Flavors</h2>
        <p>Join us on a culinary journey filled with mouthwatering dishes, delightful flavors, and heartfelt stories.</p>
        <Link to="/recipes" className="btn-primary">Explore Recipes</Link>
      </section>
      <section className="featured-recipes">
        <h2>Featured Recipes</h2>
        {/* Add a carousel or grid of featured recipe cards */}
      </section>
      <section className="about">
        <h2>About Bếp của Bố</h2>
        <p>At Bếp của Bố, we believe that food brings people together and creates lasting memories. Our recipes are inspired by traditional flavors and infused with a touch of humor and fun. Join us as we share our love for cooking and explore the world of delicious Vietnamese cuisine.</p>
        <Link to="/about" className="btn-secondary">Learn More</Link>
      </section>
      <section className="newsletter">
        <h2>Subscribe to Our Newsletter</h2>
        <p>Stay up to date with our latest recipes, cooking tips, and special offers. Don't miss out!</p>
        {/* Add a newsletter subscription form */}
      </section>
      <footer>
        <p>&copy; {new Date().getFullYear()} Bếp của Bố. All rights reserved.</p>
      
      </footer>
    </div>
        </DefaultLayout>
    )
}