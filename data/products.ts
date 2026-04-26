export interface Product {
  id: string
  name: string
  category: string
  price: number
  image: string
  description: string
  longDescription: string
  rating: number
  reviews: number
  specifications: {
    [key: string]: string
  }
  inStock: boolean
}

export const categories = [
  'Furniture',
  'Electronics',
  'Kitchen Appliances',
  'Bedding',
  'Home Decor',
  'Lighting',
]

export const products: Product[] = [
  // Furniture
  {
    id: '1',
    name: 'Modern Gray Sofa',
    category: 'Furniture',
    price: 296670,
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
    description: 'Comfortable 3-seater fabric sofa with modern design',
    longDescription:
      'Premium gray fabric sofa with sturdy wooden frame. Features deep seating comfort and contemporary styling perfect for any living room.',
    rating: 4.8,
    reviews: 142,
    specifications: {
      'Dimensions': '240cm L x 90cm D x 85cm H',
      'Material': 'Gray Linen Fabric',
      'Seating Capacity': '3 people',
      'Weight Capacity': '600kg',
      'Color Options': 'Gray, Charcoal, Beige',
    },
    inStock: true,
  },
  {
    id: '2',
    name: 'Wooden Dining Table',
    category: 'Furniture',
    price: 197670,
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1200&q=80',
    description: 'Premium wooden dining table set with 6 chairs',
    longDescription:
      'Elegant wooden dining table with natural finish. Includes 6 comfortable chairs with upholstered seats for the perfect dining experience.',
    rating: 4.7,
    reviews: 98,
    specifications: {
      'Dimensions': '200cm L x 100cm W x 75cm H',
      'Material': 'Solid Oak Wood',
      'Seating': '6 chairs included',
      'Finish': 'Natural wood stain',
      'Weight': '120kg',
    },
    inStock: true,
  },
  {
    id: '3',
    name: 'Leather Recliner Chair',
    category: 'Furniture',
    price: 148170,
    image: 'https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&w=1200&q=80',
    description: 'Premium leather reclining chair with footrest',
    longDescription:
      'Top-grain leather recliner with electric adjustment mechanism. Perfect for relaxation with 180-degree recline functionality.',
    rating: 4.9,
    reviews: 167,
    specifications: {
      'Dimensions': '110cm W x 100cm D x 105cm H',
      'Material': 'Top-grain leather',
      'Mechanism': 'Electric reclining',
      'Power': '110V AC',
      'Color': 'Black, Brown, Caramel',
    },
    inStock: true,
  },
  {
    id: '4',
    name: 'Coffee Table Set',
    category: 'Furniture',
    price: 98670,
    image: 'https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=1200&q=80',
    description: 'Modern glass and wood coffee table with side tables',
    longDescription:
      'Contemporary coffee table set featuring tempered glass top and solid wooden base. Includes two matching side tables.',
    rating: 4.6,
    reviews: 76,
    specifications: {
      'Dimensions': '120cm L x 60cm W x 45cm H',
      'Material': 'Tempered glass & oak wood',
      'Pieces': 'Main table + 2 side tables',
      'Weight Capacity': '150kg',
      'Assembly': 'Easy 30-minute assembly',
    },
    inStock: true,
  },

  // Electronics
  {
    id: '5',
    name: '55" 4K Smart TV',
    category: 'Electronics',
    price: 230670,
    image: 'https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?auto=format&fit=crop&w=1200&q=80',
    description: '55 inch 4K Ultra HD Smart television with HDR',
    longDescription:
      'State-of-the-art 55-inch 4K Smart TV with HDR10 support and built-in smart apps. Crystal clear picture quality with 60Hz refresh rate.',
    rating: 4.8,
    reviews: 234,
    specifications: {
      'Screen Size': '55 inches',
      'Resolution': '4K (3840 x 2160)',
      'Refresh Rate': '60Hz',
      'Smart Features': 'Android TV with apps',
      'Connectivity': 'WiFi, HDMI x3, USB x2',
    },
    inStock: true,
  },
  {
    id: '6',
    name: 'Wireless Sound System',
    category: 'Electronics',
    price: 65670,
    image: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80',
    description: 'Premium wireless Bluetooth speaker system',
    longDescription:
      'High-fidelity wireless sound system with 360-degree surround sound. Water-resistant design with 12-hour battery life.',
    rating: 4.7,
    reviews: 189,
    specifications: {
      'Power': '60W output',
      'Connectivity': 'Bluetooth 5.0',
      'Battery': '3000mAh (12 hours)',
      'Waterproof': 'IPX7 rated',
      'Range': '30 meters',
    },
    inStock: true,
  },
  {
    id: '7',
    name: 'Air Purifier Pro',
    category: 'Electronics',
    price: 131670,
    image: 'https://images.unsplash.com/photo-1581579185169-4b6e7b3c14b6?auto=format&fit=crop&w=1200&q=80',
    description: 'HEPA air purifier with smart features',
    longDescription:
      'Advanced HEPA air purifier with smart app control. Removes 99.97% of particles and includes auto-mode for optimal air quality.',
    rating: 4.9,
    reviews: 145,
    specifications: {
      'Coverage': 'Up to 400 sq.ft',
      'Filter': 'HEPA H13',
      'CADR': '380 m3/h',
      'Noise': '22-68 dB',
      'Smart Control': 'WiFi app enabled',
    },
    inStock: true,
  },
  {
    id: '8',
    name: 'Smart Security Camera',
    category: 'Electronics',
    price: 59070,
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80',
    description: '4K security camera with night vision and AI detection',
    longDescription:
      'Intelligent security camera with 4K resolution, night vision, and AI-powered motion detection. Cloud storage compatible.',
    rating: 4.6,
    reviews: 112,
    specifications: {
      'Resolution': '4K (2688 x 1520)',
      'Night Vision': 'IR LED up to 30m',
      'Storage': 'Cloud + SD card',
      'Connectivity': 'WiFi 2.4/5GHz',
      'Audio': 'Two-way communication',
    },
    inStock: true,
  },

  // Kitchen Appliances
  {
    id: '9',
    name: 'Stainless Steel Refrigerator',
    category: 'Kitchen Appliances',
    price: 428670,
    image: 'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?auto=format&fit=crop&w=1200&q=80',
    description: '600L French door refrigerator with ice maker',
    longDescription:
      'Premium stainless steel refrigerator with French door design. Features ice maker, water dispenser, and energy-efficient cooling.',
    rating: 4.8,
    reviews: 287,
    specifications: {
      'Capacity': '600 liters',
      'Type': 'French Door',
      'Energy Rating': 'A+++',
      'Cooling Technology': 'Dual Zone',
      'Features': 'Ice maker, water dispenser, LED lighting',
    },
    inStock: true,
  },
  {
    id: '10',
    name: 'Digital Oven',
    category: 'Kitchen Appliances',
    price: 148170,
    image: 'https://images.unsplash.com/photo-1517914309068-970fcbf4fd0f?auto=format&fit=crop&w=1200&q=80',
    description: 'Convection oven with digital temperature control',
    longDescription:
      'Advanced convection oven with multiple cooking modes. Features digital display, timer, and self-cleaning cycle.',
    rating: 4.7,
    reviews: 94,
    specifications: {
      'Capacity': '65 liters',
      'Type': 'Built-in convection',
      'Temperature Range': '50-250 C',
      'Modes': '8 cooking modes',
      'Power': '3000W',
    },
    inStock: true,
  },
  {
    id: '11',
    name: 'Stainless Steel Dishwasher',
    category: 'Kitchen Appliances',
    price: 230670,
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=80',
    description: 'Fully automatic dishwasher with 14 place settings',
    longDescription:
      'Energy-efficient dishwasher with quiet operation at 42dB. Multiple wash cycles and soil sensors for optimal cleaning.',
    rating: 4.8,
    reviews: 156,
    specifications: {
      'Capacity': '14 place settings',
      'Noise Level': '42 dB',
      'Energy Rating': 'A+',
      'Wash Cycles': '6 programs',
      'Drying': 'Condensation drying',
    },
    inStock: true,
  },
  {
    id: '12',
    name: 'Induction Cooktop',
    category: 'Kitchen Appliances',
    price: 115170,
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80',
    description: '4-burner induction cooktop with touch controls',
    longDescription:
      'Modern induction cooktop with responsive touch controls. Energy-efficient with 8 power levels and automatic pan detection.',
    rating: 4.9,
    reviews: 203,
    specifications: {
      'Burners': '4 zones',
      'Type': 'Induction',
      'Power Levels': '8',
      'Controls': 'Touch sensitive',
      'Safety': 'Auto shut-off, child lock',
    },
    inStock: true,
  },

  // Bedding
  {
    id: '13',
    name: 'Luxury Cotton Bedsheet Set',
    category: 'Bedding',
    price: 42570,
    image: 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=1200&q=80',
    description: '100% cotton queen size bedsheet with pillowcases',
    longDescription:
      'Premium 100% Egyptian cotton bedsheet set. Includes fitted sheet, flat sheet, and 2 pillowcases in multiple colors.',
    rating: 4.7,
    reviews: 298,
    specifications: {
      'Material': '100% Egyptian cotton',
      'Thread Count': '400 TC',
      'Size': 'Queen (150x200cm)',
      'Pieces': '4 pieces (2 sheets + 2 pillows)',
      'Colors': 'White, Cream, Navy, Gray',
    },
    inStock: true,
  },
  {
    id: '14',
    name: 'Memory Foam Pillow',
    category: 'Bedding',
    price: 29370,
    image: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=1200&q=80',
    description: 'Orthopedic memory foam pillow with cooling gel',
    longDescription:
      'Ergonomic memory foam pillow with cooling gel infusion. Provides excellent neck support and temperature regulation.',
    rating: 4.8,
    reviews: 421,
    specifications: {
      'Material': 'Memory foam with gel',
      'Size': '70x40x15cm',
      'Firmness': 'Medium',
      'Cooling': 'Gel-infused',
      'Warranty': '10-year',
    },
    inStock: true,
  },
  {
    id: '15',
    name: 'Weighted Comforter',
    category: 'Bedding',
    price: 65670,
    image: 'https://images.unsplash.com/photo-1551298370-5d9e4d2a4dc8?auto=format&fit=crop&w=1200&q=80',
    description: '7kg weighted comforter for deep sleep',
    longDescription:
      'Premium weighted comforter filled with micro glass beads. Promotes better sleep and relaxation with gentle pressure.',
    rating: 4.9,
    reviews: 356,
    specifications: {
      'Weight': '7kg',
      'Filling': 'Micro glass beads',
      'Cover': '100% cotton',
      'Size': 'Queen (200x230cm)',
      'Washable': 'Machine washable',
    },
    inStock: true,
  },
  {
    id: '16',
    name: 'Bamboo Bed Frame',
    category: 'Bedding',
    price: 148170,
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    description: 'Eco-friendly bamboo bed frame queen size',
    longDescription:
      'Sustainable bamboo bed frame with sturdy wooden slats. Supports mattress without box spring needed.',
    rating: 4.6,
    reviews: 134,
    specifications: {
      'Material': 'Eco bamboo',
      'Size': 'Queen (150x200cm)',
      'Weight Capacity': '300kg',
      'Height': '45cm',
      'Features': 'Storage drawers optional',
    },
    inStock: true,
  },

  // Home Decor
  {
    id: '17',
    name: 'Decorative Wall Mirror',
    category: 'Home Decor',
    price: 49170,
    image: 'https://images.unsplash.com/photo-1507209696998-3c532be9b2b6?auto=format&fit=crop&w=1200&q=80',
    description: 'Large decorative wall mirror with gold frame',
    longDescription:
      'Elegant wall mirror with ornate gold frame. Perfect for living rooms and bedrooms to enhance natural light.',
    rating: 4.5,
    reviews: 87,
    specifications: {
      'Dimensions': '120x80cm',
      'Frame': 'Gold stainless steel',
      'Mirror': 'High-quality glass',
      'Weight': '12kg',
      'Installation': 'Wall mounted',
    },
    inStock: true,
  },
  {
    id: '18',
    name: 'Ceramic Vase Collection',
    category: 'Home Decor',
    price: 32670,
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80',
    description: 'Set of 3 decorative ceramic vases',
    longDescription:
      'Beautiful hand-crafted ceramic vases in varying sizes. Contemporary design suitable for any home decor style.',
    rating: 4.7,
    reviews: 156,
    specifications: {
      'Pieces': '3 vases',
      'Material': 'Hand-crafted ceramic',
      'Heights': '20cm, 30cm, 40cm',
      'Colors': 'White, Gray, or Mixed',
      'Style': 'Modern minimalist',
    },
    inStock: true,
  },
  {
    id: '19',
    name: 'Wall Art Canvas',
    category: 'Home Decor',
    price: 59070,
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80',
    description: 'Premium canvas art prints set of 3',
    longDescription:
      'High-quality canvas art prints with modern designs. Perfect for creating a gallery wall in any room.',
    rating: 4.6,
    reviews: 198,
    specifications: {
      'Pieces': '3 canvas prints',
      'Material': 'Premium canvas',
      'Size': '40x50cm each',
      'Frames': 'Black wooden frames',
      'Designs': 'Abstract, Nature, or Geometric',
    },
    inStock: true,
  },
  {
    id: '20',
    name: 'Area Rug',
    category: 'Home Decor',
    price: 82170,
    image: 'https://images.unsplash.com/photo-1458501534264-4d326fa1e0f4?auto=format&fit=crop&w=1200&q=80',
    description: 'Modern geometric area rug 200x300cm',
    longDescription:
      'Contemporary geometric pattern area rug made from premium wool. Adds warmth and style to any space.',
    rating: 4.8,
    reviews: 267,
    specifications: {
      'Dimensions': '200x300cm',
      'Material': '80% wool, 20% synthetic',
      'Pattern': 'Modern geometric',
      'Thickness': '12mm',
      'Care': 'Dry clean recommended',
    },
    inStock: true,
  },

  // Lighting
  {
    id: '21',
    name: 'LED Pendant Light',
    category: 'Lighting',
    price: 42570,
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80',
    description: 'Modern LED pendant light with dimming',
    longDescription:
      'Contemporary pendant light with adjustable brightness. Energy-efficient LED with 3000K warm white color.',
    rating: 4.7,
    reviews: 145,
    specifications: {
      'Type': 'LED pendant',
      'Power': '12W',
      'Brightness': 'Dimmable',
      'Color Temperature': '3000K warm white',
      'Diameter': '30cm',
    },
    inStock: true,
  },
  {
    id: '22',
    name: 'Brass Floor Lamp',
    category: 'Lighting',
    price: 62370,
    image: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&w=1200&q=80',
    description: 'Elegant brass floor lamp with fabric shade',
    longDescription:
      'Sophisticated floor lamp with brushed brass finish. Soft linen shade provides warm ambient lighting.',
    rating: 4.8,
    reviews: 234,
    specifications: {
      'Material': 'Brushed brass',
      'Height': '160cm',
      'Shade': 'Linen fabric',
      'Power': '60W',
      'Features': 'Three-way switch',
    },
    inStock: true,
  },
  {
    id: '23',
    name: 'Smart LED Bulbs',
    category: 'Lighting',
    price: 22770,
    image: 'https://images.unsplash.com/photo-1518441902118-8c94ffb1e0c6?auto=format&fit=crop&w=1200&q=80',
    description: 'Pack of 4 smart RGB LED bulbs WiFi enabled',
    longDescription:
      'Intelligent RGB LED bulbs with WiFi control. Change colors and brightness from your smartphone app.',
    rating: 4.6,
    reviews: 189,
    specifications: {
      'Pieces': '4 bulbs',
      'Type': 'Smart RGB LED',
      'Brightness': '800 lumens',
      'Colors': '16 million colors',
      'Connectivity': 'WiFi 2.4GHz',
    },
    inStock: true,
  },
  {
    id: '24',
    name: 'Wall Sconce Lights',
    category: 'Lighting',
    price: 52470,
    image: 'https://images.unsplash.com/photo-1494587359823-3ae2d4fdf5b6?auto=format&fit=crop&w=1200&q=80',
    description: 'Set of 2 modern wall sconce lights',
    longDescription:
      'Sleek wall-mounted sconces with matte black finish. Perfect for bedroom or reading nooks.',
    rating: 4.7,
    reviews: 178,
    specifications: {
      'Pieces': '2 sconces',
      'Material': 'Matte black metal',
      'Power': '40W each',
      'Dimensions': '25x20cm',
      'Installation': 'Wall mounted, hardwired',
    },
    inStock: true,
  },
]
