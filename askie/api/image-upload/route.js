import { v2 as cloudinary } from 'cloudinary';

(async function() {

    // Configuration
    cloudinary.config({ 
        cloud_name: 'kus1xa0diaoms6nmhhgt', 
        api_key: '931616322958266', 
        api_secret: 'https://console.cloudinary.com/pm/c-cd7dceab748bfa953873323a76fc65/media-explorer?assetId=4f7eb5a34353e48815fe34027e0766d2' // Click 'View API Keys' above to copy your API secret
    });
    
    // Upload an image
     const uploadResult = await cloudinary.uploader
       .upload(
           'https://console.cloudinary.com/pm/c-cd7dceab748bfa953873323a76fc65/media-explorer?assetId=4f7eb5a34353e48815fe34027e0766d2', {
               public_id: 'logo',
           }
       )
       .catch((error) => {
           console.log(error);
       });
    
    console.log(uploadResult);
    
    // Optimize delivery by resizing and applying auto-format and auto-quality
    const optimizeUrl = cloudinary.url('logo', {
        fetch_format: 'auto',
        quality: 'auto'
    });
    
    console.log(optimizeUrl);
    
    // Transform the image: auto-crop to square aspect_ratio
    const autoCropUrl = cloudinary.url('logo', {
        crop: 'auto',
        gravity: 'auto',
        width: 500,
        height: 500,
    });
    
    console.log(autoCropUrl);    
})();