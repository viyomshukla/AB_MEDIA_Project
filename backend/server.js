const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
// Serve static files from the public directory
app.use('/images', express.static(path.join(__dirname, 'public/images')));


const destinations = [
  {
    id: "1",
    name: "Goa",
    country: "India",
    description: "Pristine beaches, vibrant nightlife, and Portuguese colonial architecture make Goa a perfect holiday destination.",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3",
    rating: 4.5,
    activities: ["Beach", "Nightlife", "Water Sports", "Heritage Sites"],
    averageBudget: "₹15,000 - ₹25,000"
  },
  {
    id: "2",
    name: "Kerala",
    country: "India",
    description: "God's own country featuring serene backwaters, lush greenery, and rich cultural heritage.",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3",
    rating: 4.7,
    activities: ["Backwaters", "Ayurveda", "Tea Plantations", "Wildlife"],
    averageBudget: "₹20,000 - ₹30,000"
  },
  {
    id: "3",
    name: "Rajasthan",
    country: "India",
    description: "Land of kings with magnificent palaces, forts, and vibrant cultural experiences.",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?ixlib=rb-4.0.3",
    rating: 4.6,
    activities: ["Palace Tours", "Desert Safari", "Cultural Shows", "Shopping"],
    averageBudget: "₹25,000 - ₹35,000"
  },
  {
    id: "4",
    name: "Himachal Pradesh",
    country: "India",
    description: "Majestic mountains, adventure sports, and peaceful hill stations.",
    image: "http://localhost:5000/images/H6.jpg",
    rating: 4.8,
    activities: ["Trekking", "Skiing", "Temple Visits", "Camping"],
    averageBudget: "₹18,000 - ₹28,000"
  },
  {
    id: "5",
    name: "Tamil Nadu",
    country: "India",
    description: "Ancient temples, rich culture, and beautiful coastal landscapes.",
    image: "http://localhost:5000/images/H7.jpg",
    rating: 4.4,
    activities: ["Temple Tours", "Beach Visits", "Cultural Shows", "Shopping"],
    averageBudget: "₹16,000 - ₹26,000"
  },
  {
    id: "6",
    name: "Uttarakhand",
    country: "India",
    description: "Spiritual retreats, adventure sports, and pristine natural beauty.",
    image: "http://localhost:5000/images/H8.jpg",
    rating: 4.7,
    activities: ["Yoga Retreats", "River Rafting", "Temple Visits", "Wildlife"],
    averageBudget: "₹17,000 - ₹27,000"
  }
];

const tourPackages = [
  {
    id: "1",
    title: "Golden Triangle Tour - Delhi, Agra & Jaipur",
    description: "Experience India's most iconic destinations in this classic tour package.",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3",
    duration: "7 days / 6 nights",
    price: 35000,
    originalPrice: 45000,
    discount: 22,
    rating: 4.8,
    highlights: ["Taj Mahal Visit", "Red Fort Exploration", "Hawa Mahal Tour", "Local Cuisine Tasting"],
    bookingsCount: 1250
  },
  {
    id: "2",
    title: "Kerala Backwaters & Beach Holiday",
    description: "Relax in the serene backwaters and enjoy pristine beaches of Kerala.",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3",
    duration: "6 days / 5 nights",
    price: 28000,
    originalPrice: 35000,
    discount: 20,
    rating: 4.7,
    highlights: ["Houseboat Stay", "Beach Visit", "Ayurveda Treatment", "Kathakali Show"],
    bookingsCount: 980
  },
  {
    id: "3",
    title: "Goa Beach & Party Package",
    description: "Perfect blend of beach relaxation and vibrant nightlife.",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3",
    duration: "5 days / 4 nights",
    price: 22000,
    originalPrice: 28000,
    discount: 21,
    rating: 4.6,
    highlights: ["Beach Hopping", "Water Sports", "Nightlife", "Local Food Tour"],
    bookingsCount: 1500
  },
  {
    id: "4",
    title: "Himalayan Adventure Tour",
    description: "Thrilling adventure activities in the majestic Himalayas.",
    image: "http://localhost:5000/images/H1.jpg",
    duration: "8 days / 7 nights",
    price: 42000,
    originalPrice: 52000,
    discount: 19,
    rating: 4.9,
    highlights: ["Trekking", "River Rafting", "Camping", "Mountain Biking"],
    bookingsCount: 750
  },
  {
    id: "5",
    title: "Rajasthan Royal Experience",
    description: "Live like royalty in the magnificent palaces of Rajasthan.",
    image: "http://localhost:5000/images/H2.jpg",
    duration: "9 days / 8 nights",
    price: 45000,
    originalPrice: 58000,
    discount: 22,
    rating: 4.8,
    highlights: ["Palace Stay", "Desert Safari", "Cultural Shows", "Shopping"],
    bookingsCount: 890
  },
  {
    id: "6",
    title: "South India Temple Tour",
    description: "Spiritual journey through ancient temples of South India.",
    image: "http://localhost:5000/images/H3.jpg",
    duration: "10 days / 9 nights",
    price: 38000,
    originalPrice: 48000,
    discount: 21,
    rating: 4.7,
    highlights: ["Temple Visits", "Cultural Shows", "Local Cuisine", "Shopping"],
    bookingsCount: 680
  },
  {
    id: "7",
    title: "Wildlife Safari Package",
    description: "Exciting wildlife encounters in India's best national parks.",
    image: "http://localhost:5000/images/H4.jpg",
    duration: "7 days / 6 nights",
    price: 32000,
    originalPrice: 40000,
    discount: 20,
    rating: 4.8,
    highlights: ["Safari Rides", "Bird Watching", "Nature Walks", "Photography"],
    bookingsCount: 550
  },
  {
    id: "8",
    title: "Luxury Kerala Experience",
    description: "Premium stay and experiences in God's own country.",
    image: "http://localhost:5000/images/H5.jpg",
    duration: "6 days / 5 nights",
    price: 55000,
    originalPrice: 70000,
    discount: 21,
    rating: 4.9,
    highlights: ["Luxury Houseboat", "Spa Treatments", "Private Beach", "Fine Dining"],
    bookingsCount: 420
  }
];

// API Routes
app.get('/api/destinations', (req, res) => {
  // Simulate API delay
  setTimeout(() => {
    res.json({
      success: true,
      data: destinations
    });
  }, 1000);
});

app.get('/api/packages/top-selling', (req, res) => {
  // Simulate API delay
  setTimeout(() => {
    res.json({
      success: true,
      data: tourPackages
    });
  }, 1000);
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Something went wrong!'
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 