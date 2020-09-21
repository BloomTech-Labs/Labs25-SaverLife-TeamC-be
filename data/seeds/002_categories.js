exports.seed = function (knex) {
  return knex('categories').insert([
    { name: 'Writing, Copywriting and Technical Writing' },
    { name: 'Search Engine Marketing and Optimization' },
    { name: 'Public Relations' },
    { name: 'Promotional Items' },
    { name: 'Print, TV, Radio and Outdoor Advertising' },
    { name: 'Online Advertising' },
    { name: 'Market Research and Consulting' },
    { name: 'Direct Mail and Email Marketing Services' },
    { name: 'Creative Services' },
    { name: 'Advertising Agencies and Media Buyers' },
    { name: 'Crop Production' },
    { name: 'Forestry' },
    { name: 'Livestock and Animals' },
    { name: 'Services' },
    { name: 'Airlines and Aviation Services' },
    { name: 'Airports' },
    { name: 'Theatrical Productions' },
    { name: 'Symphony and Opera' },
    { name: 'Sports Venues' },
    { name: 'Social Clubs' },
    { name: 'Psychics and Astrologers' },
    { name: 'Party Centers' },
    { name: 'Music and Show Venues' },
    { name: 'Museums' },
    { name: 'Movie Theatres' },
    { name: 'Fairgrounds and Rodeos' },
    { name: 'Entertainment' },
    { name: 'Dance Halls and Saloons' },
    { name: 'Circuses and Carnivals' },
    { name: 'Casinos and Gaming' },
    { name: 'Bowling' },
    { name: 'Billiards and Pool' },
    { name: 'Art Dealers and Galleries' },
    { name: 'Arcades and Amusement Parks' },
    { name: 'Aquarium' },
    { name: 'Arts and Entertainment' },
    { name: 'ATMs' },
    { name: 'ATM' },
    { name: 'Check' },
    { name: 'Parking' },
    { name: 'Tolls and Fees' },
    { name: 'Gas Stations' },
    { name: 'Towing' },
    { name: 'Motorcycle, Moped and Scooter Repair' },
    { name: 'Maintenance and Repair' },
    { name: 'Car Wash and Detail' },
    { name: 'Car Appraisers' },
    { name: 'Auto Transmission' },
    { name: 'Auto Tires' },
    { name: 'Auto Smog Check' },
    { name: 'Auto Oil and Lube' },
    { name: 'Used Car Dealers' },
    { name: 'Salvage Yards' },
    { name: 'RVs and Motor Homes' },
    { name: 'Motorcycles, Mopeds and Scooters' },
    { name: 'Classic and Antique Car' },
    { name: 'Car Parts and Accessories' },
    { name: 'Car Dealers and Leasing' },
    { name: 'Automotive' },
    { name: 'Overdraft' },
    { name: 'Late Payment' },
    { name: 'Fraud Dispute' },
    { name: 'Foreign Transaction' },
    { name: 'Insufficient Funds' },
    { name: 'Cash Advance' },
    { name: 'Excess Activity' },
    { name: 'Printing and Publishing' },
    { name: 'Ride Share' },
    { name: 'Car Service' },
    { name: 'Limos and Chauffeurs' },
    { name: 'Taxi' },
    { name: 'Check' },
    { name: "Women's Store" },
    { name: 'Swimwear' },
    { name: 'Shoe Store' },
    { name: "Men's Store" },
    { name: 'Lingerie Store' },
    { name: "Kids' Store" },
    { name: 'Boutique' },
    { name: 'Accessories Store' },
    { name: 'Facilities and Nursing Homes' },
    { name: 'Caretakers' },
    { name: 'Animal Shelter' },
    { name: 'Assisted Living Services' },
    { name: 'Cemetery' },
    { name: 'Day Care and Preschools' },
    { name: 'Disabled Persons Services' },
    { name: 'Drug and Alcohol Services' },
    { name: 'Organizations and Associations' },
    { name: 'Religious' },
    { name: 'Senior Citizen Services' },
    { name: 'Youth Organizations' },
    { name: 'Environmental' },
    { name: 'Charities and Non-Profits' },
    { name: 'Retirement' },
    { name: 'Maintenance and Repair' },
    { name: 'Software Development' },
    { name: 'Credit Card' },
    { name: 'Education' },
    { name: 'Vocational Schools' },
    { name: 'Tutoring and Educational Services' },
    { name: 'Primary and Secondary Schools' },
    { name: 'Fraternities and Sororities' },
    { name: 'Driving Schools' },
    { name: 'Dance Schools' },
    { name: 'Culinary Lessons and Schools' },
    { name: 'Computer Training' },
    { name: 'Colleges and Universities' },
    { name: 'Art School' },
    { name: 'Adult Education' },
    { name: 'Video Games' },
    { name: 'Mobile Phones' },
    { name: 'Cameras' },
    { name: 'Media' },
    { name: 'Stock Brokers' },
    { name: 'Holding and Investment Offices' },
    { name: 'Fund Raising' },
    { name: 'Financial Planning and Investments' },
    { name: 'Credit Reporting' },
    { name: 'Collections' },
    { name: 'Check Cashing' },
    { name: 'Business Brokers and Franchises' },
    { name: 'Banking and Finance' },
    { name: 'Accounting and Bookkeeping' },
    { name: 'Food and Beverage' },
    { name: 'Distribution' },
    { name: 'Catering' },
    { name: 'Food and Beverage Store' },
    { name: 'Specialty' },
    { name: 'Health Food' },
    { name: 'Farmers Markets' },
    { name: 'Beer, Wine and Spirits' },
    { name: 'Supermarkets and Groceries' },
    { name: 'Courts' },
    { name: 'Government Lobbyists' },
    { name: 'Housing Assistance and Shelters' },
    { name: 'Law Enforcement' },
    { name: 'Libraries' },
    { name: 'Military' },
    { name: 'Post Offices' },
    { name: 'Public and Social Services' },
    { name: 'Police Stations' },
    { name: 'Fire Stations' },
    { name: 'Correctional Institutions' },
    { name: 'Government Departments and Agencies' },
    { name: 'Benefits' },
    { name: 'Healthcare Services' },
    { name: 'Physicians' },
    { name: 'Psychologists' },
    { name: 'Pregnancy and Sexual Health' },
    { name: 'Podiatrists' },
    { name: 'Physical Therapy' },
    { name: 'Optometrists' },
    { name: 'Nutritionists' },
    { name: 'Nurses' },
    { name: 'Mental Health' },
    { name: 'Medical Supplies and Labs' },
    { name: 'Hospitals, Clinics and Medical Centers' },
    { name: 'Emergency Services' },
    { name: 'Dentists' },
    { name: 'Counseling and Therapy' },
    { name: 'Chiropractors' },
    { name: 'Blood Banks and Centers' },
    { name: 'Alternative Medicine' },
    { name: 'Acupuncture' },
    { name: 'Urologists' },
    { name: 'Respiratory' },
    { name: 'Radiologists' },
    { name: 'Psychiatrists' },
    { name: 'Plastic Surgeons' },
    { name: 'Pediatricians' },
    { name: 'Pathologists' },
    { name: 'Orthopedic Surgeons' },
    { name: 'Ophthalmologists' },
    { name: 'Oncologists' },
    { name: 'Obstetricians and Gynecologists' },
    { name: 'Neurologists' },
    { name: 'Internal Medicine' },
    { name: 'General Surgery' },
    { name: 'Gastroenterologists' },
    { name: 'Family Medicine' },
    { name: 'Ear, Nose and Throat' },
    { name: 'Dermatologists' },
    { name: 'Cardiologists' },
    { name: 'Anesthesiologists' },
    { name: 'Specialty' },
    { name: 'Roofers' },
    { name: 'Painting' },
    { name: 'Masonry' },
    { name: 'Infrastructure' },
    { name: 'Heating, Ventilating and Air Conditioning' },
    { name: 'Electricians' },
    { name: 'Contractors' },
    { name: 'Carpet and Flooring' },
    { name: 'Carpenters' },
    { name: 'Upholstery' },
    { name: 'Tree Service' },
    { name: 'Swimming Pool Maintenance and Services' },
    { name: 'Storage' },
    { name: 'Roofers' },
    { name: 'Pools and Spas' },
    { name: 'Plumbing' },
    { name: 'Pest Control' },
    { name: 'Painting' },
    { name: 'Movers' },
    { name: 'Mobile Homes' },
    { name: 'Lighting Fixtures' },
    { name: 'Landscaping and Gardeners' },
    { name: 'Kitchens' },
    { name: 'Interior Design' },
    { name: 'Housewares' },
    { name: 'Home Inspection Services' },
    { name: 'Home Appliances' },
    { name: 'Heating, Ventilation and Air Conditioning' },
    { name: 'Hardware and Services' },
    { name: 'Fences, Fireplaces and Garage Doors' },
    { name: 'Electricians' },
    { name: 'Doors and Windows' },
    { name: 'Contractors' },
    { name: 'Carpet and Flooring' },
    { name: 'Carpenters' },
    { name: 'Architects' },
    { name: 'Interest Earned' },
    { name: 'Interest Charged' },
    { name: 'Loans and Mortgages' },
    { name: 'Loan' },
    { name: 'Resorts' },
    { name: 'Lodges and Vacation Rentals' },
    { name: 'Hotels and Motels' },
    { name: 'Hostels' },
    { name: 'Cottages and Cabins' },
    { name: 'Bed and Breakfasts' },
    { name: 'Lodging' },
    { name: 'Apparel and Fabric Products' },
    { name: 'Chemicals and Gasses' },
    { name: 'Computers and Office Machines' },
    { name: 'Electrical Equipment and Components' },
    { name: 'Food and Beverage' },
    { name: 'Furniture and Fixtures' },
    { name: 'Glass Products' },
    { name: 'Industrial Machinery and Equipment' },
    { name: 'Leather Goods' },
    { name: 'Metal Products' },
    { name: 'Nonmetallic Mineral Products' },
    { name: 'Paper Products' },
    { name: 'Petroleum' },
    { name: 'Plastic Products' },
    { name: 'Rubber Products' },
    { name: 'Service Instruments' },
    { name: 'Textiles' },
    { name: 'Tobacco' },
    { name: 'Transportation Equipment' },
    { name: 'Wood Products' },
    { name: 'Coal' },
    { name: 'Metal' },
    { name: 'Non-Metallic Minerals' },
    { name: 'Wine Bar' },
    { name: 'Sports Bar' },
    { name: 'Hotel Lounge' },
    { name: 'Bar' },
    { name: 'Breweries' },
    { name: 'Internet Cafes' },
    { name: 'Nightlife' },
    { name: 'Strip Club' },
    { name: 'Night Clubs' },
    { name: 'Karaoke' },
    { name: 'Jazz and Blues Cafe' },
    { name: 'Hookah Lounges' },
    { name: 'Adult Entertainment' },
    { name: 'Boat' },
    { name: 'Bus Stations' },
    { name: 'Car and Truck Rentals' },
    { name: 'Charter Buses' },
    { name: 'Cruises' },
    { name: 'Heliports' },
    { name: 'Rail' },
    { name: "Women's Store" },
    { name: 'Swimwear' },
    { name: 'Shoe Store' },
    { name: "Men's Store" },
    { name: 'Lingerie Store' },
    { name: "Kids' Store" },
    { name: 'Boutique' },
    { name: 'Accessories Store' },
    { name: 'Monuments and Memorials' },
    { name: 'Historic Sites' },
    { name: 'Gardens' },
    { name: 'Buildings and Structures' },
    { name: 'Rivers' },
    { name: 'Mountains' },
    { name: 'Lakes' },
    { name: 'Forests' },
    { name: 'Beaches' },
    { name: 'Playgrounds' },
    { name: 'Picnic Areas' },
    { name: 'Natural Parks' },
    { name: 'Parks' },
    { name: 'Payroll' },
    { name: 'Tattooing' },
    { name: 'Tanning Salons' },
    { name: 'Spas' },
    { name: 'Skin Care' },
    { name: 'Piercing' },
    { name: 'Massage Clinics and Therapists' },
    { name: 'Manicures and Pedicures' },
    { name: 'Laundry and Garment Services' },
    { name: 'Hair Salons and Barbers' },
    { name: 'Hair Removal' },
    { name: 'Public Transportation Services' },
    { name: 'Transportation Centers' },
    { name: 'Real Estate Development and Title Companies' },
    { name: 'Real Estate Appraiser' },
    { name: 'Real Estate Agents' },
    { name: 'Property Management' },
    { name: 'Corporate Housing' },
    { name: 'Commercial Real Estate' },
    { name: 'Building and Land Surveyors' },
    { name: 'Boarding Houses' },
    { name: 'Apartments, Condos and Houses' },
    { name: 'Rent' },
    { name: 'Athletic Fields' },
    { name: 'Baseball' },
    { name: 'Basketball' },
    { name: 'Batting Cages' },
    { name: 'Boating' },
    { name: 'Campgrounds and RV Parks' },
    { name: 'Canoes and Kayaks' },
    { name: 'Combat Sports' },
    { name: 'Cycling' },
    { name: 'Dance' },
    { name: 'Equestrian' },
    { name: 'Football' },
    { name: 'Go Carts' },
    { name: 'Golf' },
    { name: 'Gun Ranges' },
    { name: 'Gymnastics' },
    { name: 'Gyms and Fitness Centers' },
    { name: 'Hiking' },
    { name: 'Hockey' },
    { name: 'Hot Air Balloons' },
    { name: 'Hunting and Fishing' },
    { name: 'Landmarks' },
    { name: 'Miniature Golf' },
    { name: 'Outdoors' },
    { name: 'Paintball' },
    { name: 'Personal Trainers' },
    { name: 'Race Tracks' },
    { name: 'Racquet Sports' },
    { name: 'Racquetball' },
    { name: 'Rafting' },
    { name: 'Recreation Centers' },
    { name: 'Rock Climbing' },
    { name: 'Running' },
    { name: 'Scuba Diving' },
    { name: 'Skating' },
    { name: 'Skydiving' },
    { name: 'Snow Sports' },
    { name: 'Soccer' },
    { name: 'Sports and Recreation Camps' },
    { name: 'Sports Clubs' },
    { name: 'Stadiums and Arenas' },
    { name: 'Swimming' },
    { name: 'Tennis' },
    { name: 'Water Sports' },
    { name: 'Yoga and Pilates' },
    { name: 'Zoo' },
    { name: 'Temple' },
    { name: 'Synagogues' },
    { name: 'Mosques' },
    { name: 'Churches' },
    { name: 'Rent' },
    { name: 'Restaurants' },
    { name: 'Winery' },
    { name: 'Vegan and Vegetarian' },
    { name: 'Turkish' },
    { name: 'Thai' },
    { name: 'Swiss' },
    { name: 'Sushi' },
    { name: 'Steakhouses' },
    { name: 'Spanish' },
    { name: 'Seafood' },
    { name: 'Scandinavian' },
    { name: 'Portuguese' },
    { name: 'Pizza' },
    { name: 'Moroccan' },
    { name: 'Middle Eastern' },
    { name: 'Mexican' },
    { name: 'Mediterranean' },
    { name: 'Latin American' },
    { name: 'Korean' },
    { name: 'Juice Bar' },
    { name: 'Japanese' },
    { name: 'Italian' },
    { name: 'Indonesian' },
    { name: 'Indian' },
    { name: 'Ice Cream' },
    { name: 'Greek' },
    { name: 'German' },
    { name: 'Gastropub' },
    { name: 'French' },
    { name: 'Food Truck' },
    { name: 'Fish and Chips' },
    { name: 'Filipino' },
    { name: 'Fast Food' },
    { name: 'Falafel' },
    { name: 'Ethiopian' },
    { name: 'Eastern European' },
    { name: 'Donuts' },
    { name: 'Distillery' },
    { name: 'Diners' },
    { name: 'Dessert' },
    { name: 'Delis' },
    { name: 'Cupcake Shop' },
    { name: 'Cuban' },
    { name: 'Coffee Shop' },
    { name: 'Chinese' },
    { name: 'Caribbean' },
    { name: 'Cajun' },
    { name: 'Cafe' },
    { name: 'Burrito' },
    { name: 'Burgers' },
    { name: 'Breakfast Spot' },
    { name: 'Brazilian' },
    { name: 'Barbecue' },
    { name: 'Bakery' },
    { name: 'Bagel Shop' },
    { name: 'Australian' },
    { name: 'Asian' },
    { name: 'American' },
    { name: 'African' },
    { name: 'Afghan' },
    { name: 'Advertising and Marketing' },
    { name: 'Art Restoration' },
    { name: 'Audiovisual' },
    { name: 'Automation and Control Systems' },
    { name: 'Business and Strategy Consulting' },
    { name: 'Business Services' },
    { name: 'Cable' },
    { name: 'Chemicals and Gasses' },
    { name: 'Cleaning' },
    { name: 'Computers' },
    { name: 'Construction' },
    { name: 'Credit Counseling and Bankruptcy Services' },
    { name: 'Dating and Escort' },
    { name: 'Employment Agencies' },
    { name: 'Engineering' },
    { name: 'Entertainment' },
    { name: 'Events and Event Planning' },
    { name: 'Financial' },
    { name: 'Funeral Services' },
    { name: 'Geological' },
    { name: 'Home Improvement' },
    { name: 'Household' },
    { name: 'Human Resources' },
    { name: 'Immigration' },
    { name: 'Import and Export' },
    { name: 'Industrial Machinery and Vehicles' },
    { name: 'Insurance' },
    { name: 'Internet Services' },
    { name: 'Leather' },
    { name: 'Legal' },
    { name: 'Logging and Sawmills' },
    { name: 'Machine Shops' },
    { name: 'Management' },
    { name: 'Manufacturing' },
    { name: 'Media Production' },
    { name: 'Metals' },
    { name: 'Mining' },
    { name: 'News Reporting' },
    { name: 'Oil and Gas' },
    { name: 'Packaging' },
    { name: 'Paper' },
    { name: 'Personal Care' },
    { name: 'Petroleum' },
    { name: 'Photography' },
    { name: 'Plastics' },
    { name: 'Rail' },
    { name: 'Real Estate' },
    { name: 'Refrigeration and Ice' },
    { name: 'Renewable Energy' },
    { name: 'Repair Services' },
    { name: 'Research' },
    { name: 'Rubber' },
    { name: 'Scientific' },
    { name: 'Security and Safety' },
    { name: 'Shipping and Freight' },
    { name: 'Software Development' },
    { name: 'Storage' },
    { name: 'Subscription' },
    { name: 'Tailors' },
    { name: 'Telecommunication Services' },
    { name: 'Textiles' },
    { name: 'Tourist Information and Services' },
    { name: 'Transportation' },
    { name: 'Travel Agents and Tour Operators' },
    { name: 'Utilities' },
    { name: 'Veterinarians' },
    { name: 'Water and Waste Management' },
    { name: 'Web Design and Development' },
    { name: 'Welding' },
    { name: 'Agriculture and Forestry' },
    { name: 'Art and Graphic Design' },
    { name: 'Adult' },
    { name: 'Antiques' },
    { name: 'Arts and Crafts' },
    { name: 'Auctions' },
    { name: 'Automotive' },
    { name: 'Beauty Products' },
    { name: 'Bicycles' },
    { name: 'Boat Dealers' },
    { name: 'Bookstores' },
    { name: 'Cards and Stationery' },
    { name: 'Children' },
    { name: 'Clothing and Accessories' },
    { name: 'Computers and Electronics' },
    { name: 'Construction Supplies' },
    { name: 'Convenience Stores' },
    { name: 'Costumes' },
    { name: 'Dance and Music' },
    { name: 'Department Stores' },
    { name: 'Digital Purchase' },
    { name: 'Discount Stores' },
    { name: 'Electrical Equipment' },
    { name: 'Equipment Rental' },
    { name: 'Flea Markets' },
    { name: 'Florists' },
    { name: 'Fuel Dealer' },
    { name: 'Furniture and Home Decor' },
    { name: 'Gift and Novelty' },
    { name: 'Glasses and Optometrist' },
    { name: 'Hardware Store' },
    { name: 'Hobby and Collectibles' },
    { name: 'Industrial Supplies' },
    { name: 'Jewelry and Watches' },
    { name: 'Luggage' },
    { name: 'Marine Supplies' },
    { name: 'Music, Video and DVD' },
    { name: 'Musical Instruments' },
    { name: 'Newsstands' },
    { name: 'Office Supplies' },
    { name: 'Outlet' },
    { name: 'Pawn Shops' },
    { name: 'Pets' },
    { name: 'Pharmacies' },
    { name: 'Photos and Frames' },
    { name: 'Shopping Centers and Malls' },
    { name: 'Sporting Goods' },
    { name: 'Tobacco' },
    { name: 'Toys' },
    { name: 'Vintage and Thrift' },
    { name: 'Warehouses and Wholesale Stores' },
    { name: 'Wedding and Bridal' },
    { name: 'Wholesale' },
    { name: 'Lawn and Garden' },
    { name: 'Student Aid and Grants' },
    { name: 'Taxes' },
    { name: 'Refund' },
    { name: 'Payment' },
    { name: 'Wire Transfer' },
    { name: 'Venmo' },
    { name: 'Square Cash' },
    { name: 'Square' },
    { name: 'PayPal' },
    { name: 'Dwolla' },
    { name: 'Coinbase' },
    { name: 'Chase QuickPay' },
    { name: 'Acorns' },
    { name: 'Digit' },
    { name: 'Betterment' },
    { name: 'Plaid' },
    { name: 'Internal Account Transfer' },
    { name: 'ACH' },
    { name: 'Billpay' },
    { name: 'Check' },
    { name: 'Credit' },
    { name: 'Debit' },
    { name: 'Deposit' },
    { name: 'Keep the Change Savings Program' },
    { name: 'Third Party' },
    { name: 'Wire' },
    { name: 'Withdrawal' },
    { name: 'Save As You Go' },
    { name: 'Water' },
    { name: 'Sanitary and Waste Management' },
    { name: 'Heating, Ventilating, and Air Conditioning' },
    { name: 'Gas' },
    { name: 'Electric' },
  ]);
};
