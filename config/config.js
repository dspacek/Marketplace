const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  mongoUri: process.env.MONGODB_URI ||
    process.env.MONGO_HOST ||
      'mongodb+srv://dspacek:hQOGtQNPH6SpFBm5@moviesdb.i9hcac4.mongodb.net/api?retryWrites=true&w=majority',
   
  // stripe_connect_test_client_id: 'YOUR_stripe_connect_test_client',
  // stripe_test_secret_key: 'YOUR_stripe_test_secret_key',
  // stripe_test_api_key: 'YOUR_stripe_test_api_key'    
  stripe_connect_test_client_id: 'ca_NoEaTAjnMFfOzmtSF0QTfBT01IrnWWi2',
  stripe_test_secret_key: 'sk_test_51N2c6xC3hMFSbW8wIFBfrVEwbd1lSZRP7LFi8ZWqwyWAzIscErPRDbYsBMMUx8LOXnoHnJUIcA735S0Gy4GBIHEe00f7GuxFYg',
  stripe_test_api_key: 'pk_test_51N2c6xC3hMFSbW8wkVNJilmXmbgto2I6H9qnFFQSfzg09yDXQL4najcuLnxdtxIYzrWfMYrZw72l60v5j5Ovfo6H00WsvJamHH'
}

export default config